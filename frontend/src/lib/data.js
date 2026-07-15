// Central content source for the portfolio. Edit values here, not in components.

export const PROFILE = {
  name: "Dhruv Kuchekar",
  firstName: "Dhruv",
  lastName: "Kuchekar",
  roles: [
    "Full-Stack Developer",
    "Software Engineer",
    "UI / UX Builder",
    "AI Automation Engineer",
  ],
  location: "Sangameshwar, Ratnagiri, Maharashtra, India",
  origin: "Virar, India",
  tagline:
    "I build secure MERN products and practical AI systems — from role-based platforms to workflow automation tools.",
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
    "Full-stack engineer and former designer — building products that work, not just look good.",
  paragraphs: [
    "I started in interface design and moved into full-stack engineering because I wanted to own the complete product experience — from the first screen to the database layer underneath. Today I build MERN applications with secure auth, clear role handling, and practical architecture.",
    "Alongside that, I work on AI systems and automation flows — from agent-style workflows to media processing pipelines. I care about the details that matter in real use: reliability, structure, and a clean experience for the people using it.",
    "Recognized nationally with a VNPS '26 win and an IEEE Best Presenter award, I enjoy turning complex ideas into systems that feel calm, considered, and usable.",
  ],
  facts: [
    { label: "Based in", value: "Sangameshwar, Ratnagiri, Maharashtra, India" },
    { label: "Stack", value: "MERN · Python · AI workflows" },
    { label: "Focus", value: "Secure systems · practical automation · UI craft" },
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
    subtitle: "Role-based booking platform for hosts and travelers",
    category: "Full-Stack",
    stack: ["Node.js", "Express", "MongoDB Atlas", "Passport.js", "Bootstrap", "Mapbox"],
    problem:
      "There was no simple place for travelers and hosts to list, review, and book stays while keeping the experience clear and secure.",
    solution:
      "I built a full booking platform with separate host and guest flows, session-based login, role-based access, review handling, and map-based listing placement.",
    impact:
      "The project helped me practice end-to-end product building: auth, database design, role handling, and a user flow that feels complete rather than just functional.",
    year: "2025",
    github: "https://github.com/dhruvKuchekar123",
    live: "https://wanderlust-2-49xs.onrender.com",
    media: {
      video:
        "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/fj88p3ui_wanderlust%20demo.mp4",
      poster:
        "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/xle5vizg_Screenshot%202026-06-30%20191336.png",
      shots: [
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/xle5vizg_Screenshot%202026-06-30%20191336.png",
          caption: "Listing detail — Peaceful Lakefront Escape",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/w8rdix44_Screenshot%202026-06-30%20192220.png",
          caption: "Explore — category-filtered listings",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/ijvzbvq8_Screenshot%202026-06-30%20191440.png",
          caption: "Reserve flow with live Mapbox location",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/9asvioxx_Screenshot%202026-06-30%20191405.png",
          caption: "Host — create a new listing",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/chbvf4qo_Screenshot%202026-06-30%20191621.png",
          caption: "Auth — Passport.js signup with Google OAuth",
        },
      ],
    },
  },
  {
    slug: "syncdub",
    name: "SyncDub",
    subtitle: "AI dubbing workflow for lip-sync video localization",
    category: "AI / ML",
    stack: ["Python", "PyTorch", "Wav2Lip", "FFmpeg"],
    problem:
      "Video dubbing often looks off because the new voice does not match the speaker's lip movement.",
    solution:
      "I put together an audio-video pipeline using FFmpeg, PyTorch, and Wav2Lip so the dubbed speech could be re-synced to the original video.",
    impact:
      "This helped me work with a real media pipeline and understand how AI tools can be combined into something more useful than a single model demo.",
    year: "2025",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
    media: {
      video: null,
      poster:
        "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/vpc2rls7_Screenshot%202026-04-20%20180133.png",
      shots: [
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/vpc2rls7_Screenshot%202026-04-20%20180133.png",
          caption: "Landing — Hindi → Marathi source selector",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/qu9f46xl_Screenshot%202026-04-20%20180155.png",
          caption: "Upload — source video ready for processing",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/7nqomfqw_Screenshot%202026-04-20%20180255.png",
          caption: "Pipeline — extracting audio & transcribing",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/btno2rs0_Screenshot%202026-04-23%20131232.png",
          caption: "Merging — audio + video, 85% complete",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/vfuduj30_Screenshot%202026-04-20%20182648.png",
          caption: "Result — dubbed video with download",
        },
      ],
    },
  },
  {
    slug: "stockflow-pro",
    name: "StockFlow Pro",
    subtitle: "Live market simulation with real-time trading feedback",
    category: "Full-Stack",
    stack: ["React", "Node.js", "WebSockets", "REST APIs"],
    problem:
      "Most beginner trading simulations feel disconnected from real market activity, so they do not help much when someone wants to understand how a live trading screen behaves.",
    solution:
      "I built a trading dashboard with live price updates, portfolio tracking, and a simple transaction flow using React and a Node-based data layer.",
    impact:
      "The project let me work with live data handling, real-time UI updates, and a more realistic trading experience than a static mockup.",
    year: "2025",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
    media: {
      video:
        "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/2iwmkqnw_stocflow_pro_teaser.mp4",
      poster:
        "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/mnxlaxqe_Screenshot%202026-07-01%20130313.png",
      shots: [
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/mnxlaxqe_Screenshot%202026-07-01%20130313.png",
          caption: "Landing — real-time terminal preview",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/0xbf7yk3_Screenshot%202026-07-01%20130343.png",
          caption: "Dashboard — account overview & live candles",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/y7g6midu_Screenshot%202026-07-01%20130453.png",
          caption: "Holdings — portfolio allocation & P&L",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/649u6e4l_Screenshot%202026-07-01%20130530.png",
          caption: "Advanced analytics — Sharpe, Beta, exposure",
        },
        {
          url: "https://customer-assets.emergentagent.com/job_case-study-portfolio-1/artifacts/osivwb1d_Screenshot%202026-07-01%20130547.png",
          caption: "AI Insights — market sentiment & indicators",
        },
      ],
    },
  },
  {
    slug: "kaccha-bill-bot",
    name: "Kaccha Bill Bot",
    subtitle: "AI bill digitization + human-verified bookkeeping",
    category: "AI / ML",
    stack: ["n8n", "Telegram Bot API", "Google Gemini Vision", "Google Sheets", "APITemplate.io"],
    problem:
      "Many small shopkeepers still depend on handwritten bills, which makes recordkeeping slow and prone to mistakes.",
    solution:
      "I built a Telegram bot workflow that takes a photo of a bill, extracts the details with Gemini Vision, checks the numbers, and stores the result in Google Sheets with a printable invoice.",
    impact:
      "The project is a good example of how I approach practical AI tools: take a messy real-world task, build a workflow around it, and keep the process simple enough for everyday use.",
    year: "2025",
    github: "https://github.com/dhruvKuchekar123/-kaccha-bill-bot.git",
    live: null,
    media: {
      video: null,
      poster:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='720' viewBox='0 0 1200 720'><rect width='1200' height='720' fill='%23070707'/><rect x='72' y='72' width='1056' height='576' rx='32' fill='%23111313' stroke='%2310b981' stroke-width='2'/><text x='120' y='270' fill='%23f5f5f5' font-family='Arial, sans-serif' font-size='46' font-weight='700'>Kaccha Bill Bot</text><text x='120' y='330' fill='%2310b981' font-family='Arial, sans-serif' font-size='28'>AI bill digitization + khata automation</text><text x='120' y='430' fill='%23a3a3a3' font-family='Arial, sans-serif' font-size='24'>Telegram • Gemini Vision • Google Sheets</text><circle cx='990' cy='520' r='90' fill='%2310b981' fill-opacity='0.18'/></svg>",
      shots: [
        {
          url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='720' viewBox='0 0 1200 720'><rect width='1200' height='720' fill='%23070707'/><rect x='80' y='90' width='1040' height='540' rx='28' fill='%23111111' stroke='%2310b981' stroke-width='2'/><text x='120' y='280' fill='%23f5f5f5' font-family='Arial, sans-serif' font-size='42'>Photo → invoice</text><text x='120' y='340' fill='%2310b981' font-family='Arial, sans-serif' font-size='28'>Rough bill to structured JSON</text></svg>",
          caption: "Telegram photo → structured bill extraction",
        },
        {
          url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='720' viewBox='0 0 1200 720'><rect width='1200' height='720' fill='%23070707'/><rect x='80' y='90' width='1040' height='540' rx='28' fill='%23111111' stroke='%2310b981' stroke-width='2'/><text x='120' y='280' fill='%23f5f5f5' font-family='Arial, sans-serif' font-size='42'>Hinglish reply</text><text x='120' y='340' fill='%2310b981' font-family='Arial, sans-serif' font-size='28'>Invoice + confirm buttons</text></svg>",
          caption: "Hinglish response with confirmation loop",
        },
      ],
    },
  },
  {
    slug: "recipe-agent",
    name: "Recipe Agent",
    subtitle: "Ingredient-to-recipe assistant",
    category: "AI / ML",
    stack: ["Python", "LangChain", "OpenAI", "Gradio"],
    problem:
      "People often want a meal suggestion based on what they already have, but the process is usually manual and unclear.",
    solution:
      "I built a small agent that takes a list of ingredients and dietary constraints, then returns a recipe in a structured format through a simple interface.",
    impact:
      "This was a useful way to practice prompt-based workflows and structured output without overcomplicating the experience.",
    year: "2025",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "lets-code",
    name: "Let's Code",
    subtitle: "Clear landing experience",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript", "AOS"],
    problem:
      "A lot of landing pages look fine visually but do not communicate the offer clearly or load efficiently.",
    solution:
      "I built a responsive landing page with a simple structure, clear sections, and lightweight animations so the message comes across quickly.",
    impact:
      "This was a good exercise in making a page feel clean and easy to read while keeping the build simple and lightweight.",
    year: "2024",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "aura-salon",
    name: "Aura Salon",
    subtitle: "Booking portal for salons",
    category: "Full-Stack",
    stack: ["PHP", "MySQL", "Bootstrap"],
    problem:
      "A salon can lose time and customers when booking is handled through chat and paper notes.",
    solution:
      "I built a simple booking portal where clients could view services and book appointments without creating conflicts.",
    impact:
      "This project helped me work with a practical scheduling flow and a database-backed system that supports everyday operations.",
    year: "2024",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "calculator",
    name: "Calculator UI",
    subtitle: "Simple math experience",
    category: "Micro-App",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "Many simple calculators feel awkward to use on mobile or do not look polished.",
    solution:
      "I built a calculator with a simple keypad layout and responsive behavior so it works cleanly across screen sizes.",
    impact:
      "This was a small but useful exercise in making a basic utility feel smooth and easy to use.",
    year: "2024",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "tic-tac-toe",
    name: "Tic-Tac-Toe",
    subtitle: "Lightweight game logic",
    category: "Micro-App",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "Simple games often feel rough because the rules or reset flow are not handled cleanly.",
    solution:
      "I built a small tic-tac-toe game with clear win logic and a simple reset flow.",
    impact:
      "This was a good way to practice game logic and front-end interaction without adding extra complexity.",
    year: "2023",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "tribute-page",
    name: "Tribute Page",
    subtitle: "Readable biography layout",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "Some simple biography pages can feel crowded and hard to read.",
    solution:
      "I built a more structured layout with clear content flow, readable typography, and better spacing.",
    impact:
      "This helped me focus on readability and layout structure early in my front-end work.",
    year: "2023",
    github: "https://github.com/dhruvKuchekar123",
    live: null,
  },
  {
    slug: "responsive-portfolio",
    name: "Responsive Portfolio",
    subtitle: "Early responsive showcase",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "My earlier portfolio did not adapt well to smaller screens.",
    solution:
      "I rebuilt it using simpler responsive layouts and a cleaner navigation structure.",
    impact:
      "It became the starting point for the more structured portfolio I use today.",
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

export const TRUST_POINTS = [
  { label: "3+", value: "production-style web apps and AI builds shipped or deployed" },
  { label: "2x", value: "focus on practical automation and real workflow improvement" },
  { label: "1", value: "portfolio centered on secure systems, usable AI, and thoughtful UI" },
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
