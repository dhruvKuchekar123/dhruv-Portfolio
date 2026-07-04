// Maps a tech name (as used in PROJECTS[i].stack) to a simpleicons.org slug.
// Icons load from https://cdn.simpleicons.org/<slug>/10b981 (emerald tint).
// If a slug isn't found here, the component renders a text-only chip fallback.

export const TECH_ICONS = {
  // languages
  Python: "python",
  JavaScript: "javascript",
  "JavaScript (ES6+)": "javascript",
  Java: "openjdk",
  SQL: "postgresql",
  HTML5: "html5",
  CSS3: "css",
  PHP: "php",

  // frontend
  "React.js": "react",
  React: "react",
  "Tailwind CSS": "tailwindcss",
  Bootstrap: "bootstrap",
  "Responsive Design": "css",
  "CSS Grid/Flexbox": "css",
  "CSS Grid / Flexbox": "css",

  // backend + db
  "Node.js": "nodedotjs",
  "Express.js": "express",
  Express: "express",
  "RESTful APIs": "openapiinitiative",
  "REST APIs": "openapiinitiative",
  MongoDB: "mongodb",
  "MongoDB Atlas": "mongodb",
  MySQL: "mysql",
  "JWT Authentication": "jsonwebtokens",
  "JWT Auth": "jsonwebtokens",
  "Passport.js": "passport",

  // cloud / tools
  Git: "git",
  GitHub: "github",
  Render: "render",
  Cloudinary: "cloudinary",
  Postman: "postman",
  "Claude AI": "anthropic",
  n8n: "n8n",
  "n8n Workflows": "n8n",

  // ai / ml
  PyTorch: "pytorch",
  LangChain: "langchain",
  OpenAI: "openai",
  Gradio: "huggingface",

  // media / misc
  FFmpeg: "ffmpeg",
  Mapbox: "mapbox",
  WebSockets: "socketdotio",
  AOS: "framer",
};
