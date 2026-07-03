from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
OWNER_EMAIL = os.environ.get('OWNER_EMAIL', 'dhruvkuchekar0@gmail.com')
OWNER_NAME = os.environ.get('OWNER_NAME', 'Dhruv Kuchekar')

# App + router
app = FastAPI(title="Dhruv Kuchekar — Portfolio API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    subject: Optional[str] = Field(default=None, max_length=200)
    message: str = Field(..., min_length=1, max_length=5000)
    # honeypot — bots often fill hidden inputs
    website: Optional[str] = Field(default=None)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str
    email_sent: bool = False
    email_id: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Helpers ----------
def render_contact_email_html(payload: ContactMessageCreate) -> str:
    subject = payload.subject or "New portfolio inquiry"
    # inline CSS only
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 0;font-family:Inter,Helvetica,Arial,sans-serif;color:#fafafa;">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:32px;">
          <tr><td>
            <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#10b981;">New Portfolio Contact</p>
            <h1 style="margin:0 0 20px 0;font-size:22px;font-weight:600;color:#fafafa;">{subject}</h1>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px 0;">
              <tr>
                <td style="padding:8px 0;color:#a3a3a3;font-size:13px;width:80px;">From</td>
                <td style="padding:8px 0;color:#fafafa;font-size:14px;">{payload.name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#a3a3a3;font-size:13px;">Email</td>
                <td style="padding:8px 0;color:#10b981;font-size:14px;">{payload.email}</td>
              </tr>
            </table>
            <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:20px;color:#e5e5e5;font-size:15px;line-height:1.65;white-space:pre-wrap;">{payload.message}</div>
            <p style="margin:28px 0 0 0;font-size:11px;color:#525252;">Sent from dhruvkuchekar.dev contact form</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


async def send_owner_notification(payload: ContactMessageCreate) -> Optional[str]:
    if not resend.api_key:
        logger.warning("RESEND_API_KEY missing — skipping email send")
        return None
    params = {
        "from": f"{OWNER_NAME} Portfolio <{SENDER_EMAIL}>",
        "to": [OWNER_EMAIL],
        "reply_to": payload.email,
        "subject": f"[Portfolio] {payload.subject or 'New message from ' + payload.name}",
        "html": render_contact_email_html(payload),
    }
    result = await asyncio.to_thread(resend.Emails.send, params)
    return result.get("id") if isinstance(result, dict) else None


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Dhruv Kuchekar — Portfolio API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(payload: StatusCheckCreate):
    status_obj = StatusCheck(**payload.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/contact")
async def create_contact_message(payload: ContactMessageCreate):
    # Honeypot: silently accept but do nothing
    if payload.website:
        return {"status": "ok"}

    email_id: Optional[str] = None
    email_sent = False
    email_error: Optional[str] = None

    try:
        email_id = await send_owner_notification(payload)
        email_sent = email_id is not None
    except Exception as exc:  # noqa: BLE001
        logger.exception("Resend send failed")
        email_error = str(exc)

    record = ContactMessage(
        name=payload.name,
        email=payload.email,
        subject=payload.subject,
        message=payload.message,
        email_sent=email_sent,
        email_id=email_id,
    )
    doc = record.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)

    if not email_sent and email_error:
        # Still persisted — surface a soft error so UI can show a helpful message
        return {
            "status": "stored",
            "email_sent": False,
            "message": "Message saved. Email delivery temporarily unavailable.",
            "id": record.id,
        }

    return {
        "status": "sent" if email_sent else "stored",
        "email_sent": email_sent,
        "id": record.id,
    }


# Include router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
