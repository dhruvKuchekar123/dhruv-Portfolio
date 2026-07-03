// Central content source for the portfolio. Edit values here, not in components.

export const PROFILE = {
  name: "Dhruv Kuchekar",
  firstName: "Dhruv",
  lastName: "Kuchekar",
  roles: [
    "Full-Stack Web Developer",
    "Software Engineer",
    "UI / UX Designer",
    "AI-Automation Builder",
  ],
  location: "Pune, India",
  origin: "Virar, India",
  tagline:
    "I build secure MERN systems and AI-driven agents — from role-based marketplaces to lip-sync ML pipelines.",
  email: "dhruvkuchekar0@gmail.com",
  github: "https://github.com/dhruvKuchekar123",
  linkedin: "https://www.linkedin.com/in/dhruv-kuchekar-9601501b1/",
  resumeUrl:
    "https://drive.google.com/file/d/1cqlf0E544NEZRuuwBGwrcoKDWu89VPxE/view?usp=drive_link",
  photo:
    "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/zthozc5f_WhatsApp%20Image%202026-07-03%20at%202.14.21%20PM.jpeg",
  availability: "Open to full-time roles & selective freelance work",
};

export const ABOUT = {
  headline:
    "Full-stack engineer, ex-designer — building systems that ship, not slideware.",
  paragraphs: [
    "I started in interface design and moved into full-stack engineering because I wanted to own the whole surface — from Figma frames to Node APIs to the database schema underneath. Today I build MERN applications with strict session security, role-based access control, and clean MVC architecture.",
    "In parallel, I'm deep into AI systems — LangChain agents, Wav2Lip pipelines, and n8n-style automation flows. I care about the plumbing (RBAC, JWT, RESTful contracts), the polish (typography, spacing, motion), and the outcome (a thing you can actually use).",
    "Recognized nationally with a VNPS '26 win and the IEEE Best Presenter award, I enjoy walking through architecture diagrams as much as writing the code that runs behind them.",
  ],
  facts: [
    { label: "Based in", value: "Pune, India" },
    { label: "Stack", value: "MERN + Python / AI" },
    { label: "Focus", value: "Secure APIs · AI agents · UI craft" },
    { label: "Availability", value: "Full-time & freelance" },
  ],
};

export const SKILLS = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "Python", "Java", "SQL", "HTML5", "CSS3"],
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "CSS Grid / Flexbox",
    ],
  },
  {
    group: "Backend & Databases",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MongoDB",
      "MySQL",
      "JWT Auth",
      "RBAC",
    ],
  },
  {
    group: "Cloud & Tools",
    items: [
      "Git",
      "GitHub",
      "Render",
      "MongoDB Atlas",
      "Cloudinary",
      "Postman",
      "Claude AI",
      "n8n",
    ],
  },
  {
    group: "Core Concepts",
    items: ["DSA", "OOP", "Agile", "System Design", "Prompt Orchestration"],
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Full-Stack",
  "AI / ML",
  "Frontend",
  "Micro-App",
];

export const PROJECTS = [
  {
    slug: "wanderlust",
    name: "Wanderlust",
    subtitle: "Hospitality Booking Ecosystem",
    category: "Full-Stack",
    stack: ["Node.js", "Express", "MongoDB Atlas", "Passport.js", "Bootstrap", "Mapbox"],
    problem:
      "Travelers and hosts lacked a single, trustworthy platform to list, review, and reserve stays with proper role separation and coordinate-accurate maps.",
    solution:
      "Built an MVC-architected MERN booking app with Passport.js session auth, host/guest RBAC middleware, dynamic review moderation, and Mapbox-powered listing coordinates.",
    impact:
      "Delivered a production-ready two-sided marketplace flow — proof I can ship session-secured, database-backed platforms end to end, not just CRUD demos.",
    year: "2025",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "syncdub",
    name: "SyncDub",
    subtitle: "AI Audio–Video Dubbing & Lip Sync",
    category: "AI / ML",
    stack: ["Python", "PyTorch", "Wav2Lip", "FFmpeg"],
    problem:
      "Localizing video content usually breaks lip-sync — dubbed speech drifts from mouth movement and the result feels uncanny.",
    solution:
      "Chained FFmpeg, PyTorch, and the Wav2Lip model into an automated pipeline: demux audio, clone voice, retime translated speech, then re-render lip movement frame by frame.",
    impact:
      "Turned a manual, expensive dubbing workflow into a scriptable AI pipeline — showing I can compose multi-model ML systems that operate on raw media, not only text APIs.",
    year: "2025",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "stockflow-pro",
    name: "StockFlow Pro",
    subtitle: "Real-Time Trading Simulator",
    category: "Full-Stack",
    stack: ["React", "Node.js", "WebSockets", "REST APIs"],
    problem:
      "New investors need to feel real-market pace without risking money — most simulators feel slow, static, and unlike real trading desks.",
    solution:
      "A React dashboard streaming live prices, transactions, and portfolio state through a Node.js WebSocket gateway, with responsive charts and a persistent trade ledger.",
    impact:
      "A responsive paper-trading experience that mirrors live-market latency — evidence I can architect low-latency data flow between market APIs, sockets, and UI.",
    year: "2025",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "recipe-agent",
    name: "Recipe Generation Agent",
    subtitle: "AI Culinary Assistant",
    category: "AI / ML",
    stack: ["Python", "LangChain", "OpenAI", "Gradio"],
    problem:
      "Home cooks stare at half-empty fridges and vague dietary rules with no easy way to turn what's on hand into a real meal.",
    solution:
      "A LangChain agent that ingests inventory + allergen constraints and streams structured JSON recipes through an LLM, served via a Gradio interface.",
    impact:
      "A working autonomous agent that respects real-world constraints — demonstrating my grasp of prompt orchestration, tool routing, and structured LLM output.",
    year: "2025",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "lets-code",
    name: "Let's Code Landing",
    subtitle: "Educational Interactive UI",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript", "AOS"],
    problem:
      "EdTech landing pages often load slowly and fail to communicate value above the fold, hurting sign-up rates.",
    solution:
      "A hand-tuned static site with a responsive grid, AOS reveal animations, and premium spacing — optimized for CDN-edge delivery.",
    impact:
      "A lightweight, high-Lighthouse landing surface built to convert quickly — proof I ship performance-first marketing pages, not decoration.",
    year: "2024",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "aura-salon",
    name: "Aura Beauty Salon",
    subtitle: "Client Booking Portal",
    category: "Full-Stack",
    stack: ["PHP", "MySQL", "Bootstrap"],
    problem:
      "Small salons manage bookings via WhatsApp and paper — leading to double-bookings and lost customers.",
    solution:
      "A PHP + MySQL portal with a service catalog and slot-conflict verification so clients can self-book without collisions.",
    impact:
      "Replaced ad-hoc scheduling with a persistent, queryable appointment system — showing I can ship business-critical CRUD tools even outside my primary stack.",
    year: "2024",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "calculator",
    name: "Sleek Calculator",
    subtitle: "Math Widget",
    category: "Micro-App",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "Most quick calculators are ugly, laggy, or break on mobile.",
    solution:
      "A CSS-grid keypad with instant JS evaluation, clean reset states, and hover feedback tuned for touch and desktop.",
    impact:
      "A polished micro-utility that proves attention to symmetry, responsive layout, and zero-latency interactivity.",
    year: "2024",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "tic-tac-toe",
    name: "Tic Tac Toe",
    subtitle: "Classic Logic Engine",
    category: "Micro-App",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "Small games rarely feel satisfying — win detection and reset flow are often buggy.",
    solution:
      "A 3×3 grid backed by declarative win-geometry arrays, animated cell states, and instant reset.",
    impact:
      "Demonstrates crisp JS game logic and responsive layout craft inside a minimum viable footprint.",
    year: "2023",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "tribute-page",
    name: "Tribute Page",
    subtitle: "Biographical Semantic Canvas",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "Static tribute and biography pages are often visually cluttered and inaccessible.",
    solution:
      "Semantic HTML with fluid images, high-contrast typography, and a chronological reading rhythm.",
    impact:
      "A readable, accessible long-form layout — proof I care about typography, contrast, and semantics, not only visuals.",
    year: "2023",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "responsive-portfolio",
    name: "Responsive Portfolio v1",
    subtitle: "Legacy Showcase Framework",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "My earlier portfolio didn't scale gracefully below tablet breakpoints.",
    solution:
      "Rebuilt with fluid media queries, an animated side-drawer nav, and clean tech cards.",
    impact:
      "The predecessor to this redesign — established the responsive baseline that this case-study format now builds on.",
    year: "2023",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
];

export const EXPERIENCE = [
  {
    company: "Inlighn Global Pvt. Ltd.",
    role: "Full Stack Developer — Intern",
    mode: "Remote",
    period: "Jul 2025 – Aug 2025",
    highlights: [
      "Built and deployed 2 full-stack MERN applications end-to-end — React frontends, Express APIs, MongoDB Atlas schemas, and Render deployment.",
      "Designed secure RESTful APIs using JWT authentication and RBAC middleware to protect routes, user data, and role-specific functionality.",
      "Validated request/response contracts, auth flows, and error handling using Postman before handover.",
      "Debugged frontend and backend issues across the lifecycle, improving stability and UX consistency.",
    ],
  },
];

export const CERTIFICATIONS = [
  { title: "VNPS '26 — National Winner", meta: "Engineering Presentation & System Architecture" },
  { title: "Oscillation '26 Achievement", meta: "Research Pitching & Technical Exhibition" },
  { title: "IEEE Best Presenter Award", meta: "Technical Research Delivery" },
  { title: "IEEE Conference Certification", meta: "Engineering Collaboration" },
  { title: "CodeClash — Certificate", meta: "Algorithms & Dynamic Coding" },
  { title: "Data Structures & Algorithms", meta: "Big-O, Sorting, Graphs" },
  { title: "Java Programming Foundation", meta: "Infosys Springboard — OOP & Clean Code" },
  { title: "Generative AI Masterclass", meta: "Udemy — LLM Pipelines & Agents" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
