"""Portfolio backend API tests — Dhruv Kuchekar portfolio.

Covers:
- GET /api/            root sanity
- POST /api/contact    valid → sent + persisted
- POST /api/contact    honeypot → ok, no persist / no email
- POST /api/contact    invalid email → 422
- POST /api/status     regression create + list
"""

import os
import time
import uuid

import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://case-study-portfolio-1.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "test_database")


@pytest.fixture(scope="session")
def mongo_db():
    client = MongoClient(MONGO_URL, serverSelectionTimeoutMS=3000)
    db = client[DB_NAME]
    yield db
    client.close()


@pytest.fixture()
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_returns_expected_message(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        assert r.json() == {"message": "Dhruv Kuchekar — Portfolio API"}


# ---------- Contact form ----------
class TestContact:
    def test_valid_contact_sends_and_persists(self, session, mongo_db):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"Test User {unique}",
            "email": "dhruvkuchekar0@gmail.com",  # verified inbox in Resend test mode
            "subject": f"Automated test {unique}",
            "message": f"This is an automated backend test message. token={unique}",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=30)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "sent", f"expected status=sent, got: {data}"
        assert data.get("email_sent") is True
        assert isinstance(data.get("id"), str) and len(data["id"]) > 0

        # DB verification
        doc = mongo_db.contact_messages.find_one({"id": data["id"]})
        assert doc is not None, "contact_messages document not inserted"
        assert doc["email"] == payload["email"]
        assert doc["name"] == payload["name"]
        assert doc["subject"] == payload["subject"]
        assert doc["message"] == payload["message"]
        assert doc["email_sent"] is True

    def test_honeypot_returns_ok_and_does_not_persist(self, session, mongo_db):
        unique = f"HONEY_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"Bot {unique}",
            "email": "bot@example.com",
            "subject": f"honeypot {unique}",
            "message": f"honeypot message {unique}",
            "website": "http://spam.example.com",  # honeypot filled
        }
        before_count = mongo_db.contact_messages.count_documents({"subject": payload["subject"]})
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        assert r.json() == {"status": "ok"}

        # Ensure no insertion happened (either by subject or by message)
        after_count = mongo_db.contact_messages.count_documents({"subject": payload["subject"]})
        assert after_count == before_count
        by_msg = mongo_db.contact_messages.count_documents({"message": payload["message"]})
        assert by_msg == 0

    def test_invalid_email_returns_422(self, session):
        payload = {
            "name": "Bad Email",
            "email": "not-an-email",
            "subject": "invalid",
            "message": "should fail validation",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code in (400, 422), f"expected 4xx, got {r.status_code}: {r.text}"

    def test_missing_required_fields_returns_422(self, session):
        r = session.post(f"{API}/contact", json={"name": "only name"}, timeout=15)
        assert r.status_code in (400, 422)


# ---------- Status regression ----------
class TestStatus:
    def test_create_and_list_status(self, session):
        name = f"TEST_client_{uuid.uuid4().hex[:6]}"
        r = session.post(f"{API}/status", json={"client_name": name}, timeout=15)
        assert r.status_code == 200, r.text
        created = r.json()
        assert created["client_name"] == name
        assert "id" in created and isinstance(created["id"], str)
        assert "timestamp" in created

        # Small delay for eventual read consistency (motor is async but sync from HTTP)
        time.sleep(0.3)
        r2 = session.get(f"{API}/status", timeout=15)
        assert r2.status_code == 200
        rows = r2.json()
        assert isinstance(rows, list)
        assert any(row.get("client_name") == name for row in rows), "created status not present in list"
