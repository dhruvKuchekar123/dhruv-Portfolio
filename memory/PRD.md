# PRD — Dhruv Kuchekar Portfolio Redesign

## Original Problem Statement
Dark-themed, modern portfolio redesign for Dhruv Kuchekar (Full-Stack Web Developer, Software Engineer, UI/UX Designer, AI-Automation Builder). Highlights profile, skills, resume, and projects with a stronger storytelling structure where each project is framed as **Problem / Solution / Impact**. Target users are recruiters, hiring managers, clients and networking contacts.

Confirmed decisions:
- Use uploaded photo as hero/profile image
- Dark-only theme
- Contact form (functional) + email/social links
- Project impact stays qualitative unless supported by evidence
- Rewrite content from current site + resume + strategy doc

## Architecture
- **Frontend**: React 19 + Craco + Tailwind + Framer Motion + shadcn/ui + lucide-react
- **Backend**: FastAPI (async), Motor MongoDB, Resend (email)
- **DB**: MongoDB (`test_database`) with `contact_messages` collection
- **Hosting env**: Kubernetes preview (backend on 8001, frontend on 3000)
- **Fonts**: Cabinet Grotesk (Fontshare) headings, Cormorant Garamond italic highlights, Inter body, Fira Code mono
- **Palette**: `#050505` bg · `#0a0a0a` surface · `#10b981` accent · `#fafafa` text-primary · `#a3a3a3` text-secondary

## User Personas
1. **Recruiter** — scans hero + résumé + projects quickly, wants role, stack, and outcomes in ≤60s.
2. **Hiring manager** — reads Problem/Solution/Impact to gauge thinking, opens GitHub links.
3. **Client / Freelance lead** — checks skills + contact form.
4. **Peer / networking contact** — jumps to LinkedIn / GitHub / email.

## Core Requirements (Static)
- Sticky glassmorphic pill nav with anchor links + mobile toggle
- Hero: name, role, intro, 3 CTAs (View Projects, Résumé, Contact), B&W portrait, availability pill
- About: professional summary rewritten from source material + facts grid + stat cards
- Skills grouped into Languages / Frontend / Backend & DBs / Cloud & Tools / Core Concepts
- Projects grid with 10 projects, each Problem/Solution/Impact, tech chips, GitHub link, category filter, expand/collapse
- Experience vertical timeline (Inlighn Global Jul–Aug 2025)
- Recognition / Certifications list (VNPS '26, IEEE Best Presenter, CodeClash, DSA, Infosys Java, Udemy GenAI)
- Contact: form (name, email, subject, message, hidden honeypot) + email/GitHub/LinkedIn cards
- Footer: brand, socials, back-to-top
- Global noise + grid-line overlay, radial emerald glows, custom cursor on desktop
- Fully responsive
- data-testid attributes on every interactive/critical element

## Implemented (2026-07-03)
- ✅ Backend `POST /api/contact` — validates payload, persists to Mongo (`contact_messages`), sends styled HTML email via Resend (`asyncio.to_thread`), returns `{status,email_sent,id}`; honeypot silently absorbs bots.
- ✅ Email verified end-to-end (Resend returned success + `email_id`).
- ✅ React portfolio SPA with all sections listed above.
- ✅ Framer Motion staggered reveals, LayoutGroup expand/collapse for project case studies, custom elastic cursor.
- ✅ Tailwind + shadcn tokens re-mapped to dark-only palette; noise + grid overlays; glass/glass-hover utility classes.
- ✅ data-testid registry at `src/constants/testIds/portfolio.js`.
- ✅ Lint clean (JS + Python).

## Prioritized Backlog
- **P1** — Optional: swap Google Drive résumé link for direct-hosted PDF for cleaner download UX.
- **P1** — Add basic rate limit on `/api/contact` (e.g., 5/min per IP) once traffic starts.
- **P2** — Admin route (`/api/contact/messages`) behind an owner token to browse submissions.
- **P2** — Individual project detail pages (`/projects/:slug`) with screenshots + architecture diagrams.
- **P2** — OG image + meta tags + sitemap for SEO.
- **P3** — Blog / Writing section pulling from MDX or Notion.
- **P3** — Light mode toggle (user requested dark-only for now, but easy to enable via CSS vars).

## Next Tasks
1. Wire a proper transactional domain in Resend so submissions can be delivered to any recipient, not just verified owner inbox.
2. Consider adding Lenis smooth scroll for a more premium feel.
3. Move project GitHub links to individual repo URLs (currently point to profile page).
