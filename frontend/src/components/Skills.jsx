import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { SKILLS_IDS } from "@/constants/testIds";

const skillIconMap = {
  "JavaScript (ES6+)": "js",
  JavaScript: "js",
  Python: "python",
  Java: "java",
  SQL: "mysql",
  "HTML5": "html",
  "CSS3": "css",
  "React.js": "react",
  "Tailwind CSS": "tailwind",
  Bootstrap: "bootstrap",
  "Node.js": "nodejs",
  "Express.js": "express",
  "RESTful APIs": "http",
  MongoDB: "mongodb",
  "MongoDB Atlas": "mongodb",
  "MySQL": "mysql",
  "JWT Auth": "json",
  Git: "git",
  Render: "render",
  Cloudinary: "cloudinary",
  Postman: "postman",
  "Claude AI": "openai",
  n8n: "n8n",
  DSA: "java",
  OOP: "java",
  Agile: "github",
  "Responsive Design": "custom-responsive",
  "CSS Grid / Flexbox": "custom-grid",
  RBAC: "custom-rbac",
  "System Design": "custom-system",
  "Prompt Orchestration": "custom-prompt",
};

function buildCustomIcon(type) {
  const svgMap = {
    "custom-responsive": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="12" y="8" width="40" height="48" rx="8" fill="#111827" stroke="#34d399" stroke-width="2"/><rect x="18" y="14" width="28" height="10" rx="3" fill="#34d399" opacity="0.9"/><rect x="18" y="28" width="28" height="18" rx="3" fill="#1f2937" stroke="#6ee7b7" stroke-width="1.5"/><rect x="24" y="33" width="16" height="2" rx="1" fill="#34d399"/><rect x="24" y="37" width="10" height="2" rx="1" fill="#34d399"/></svg>`,
    "custom-grid": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="10" y="10" width="44" height="44" rx="8" fill="#111827" stroke="#34d399" stroke-width="2"/><rect x="18" y="18" width="12" height="12" rx="2" fill="#34d399"/><rect x="34" y="18" width="12" height="12" rx="2" fill="#6ee7b7"/><rect x="18" y="34" width="12" height="12" rx="2" fill="#6ee7b7"/><rect x="34" y="34" width="12" height="12" rx="2" fill="#34d399"/></svg>`,
    "custom-rbac": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="10" y="10" width="44" height="44" rx="10" fill="#111827" stroke="#34d399" stroke-width="2"/><path d="M32 18a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 22c-8 0-14 4-14 9v3h28v-3c0-5-6-9-14-9Z" fill="#34d399"/><path d="M24 44h16" stroke="#6ee7b7" stroke-width="2" stroke-linecap="round"/></svg>`,
    "custom-system": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="10" y="12" width="44" height="40" rx="10" fill="#111827" stroke="#34d399" stroke-width="2"/><rect x="20" y="22" width="12" height="12" rx="3" fill="#34d399"/><rect x="36" y="22" width="8" height="12" rx="3" fill="#6ee7b7"/><rect x="20" y="38" width="24" height="8" rx="3" fill="#34d399" opacity="0.9"/><path d="M32 34v4" stroke="#6ee7b7" stroke-width="2" stroke-linecap="round"/></svg>`,
    "custom-prompt": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="10" y="12" width="44" height="40" rx="10" fill="#111827" stroke="#34d399" stroke-width="2"/><path d="M22 24h20" stroke="#34d399" stroke-width="3" stroke-linecap="round"/><path d="M22 32h12" stroke="#6ee7b7" stroke-width="3" stroke-linecap="round"/><path d="M22 40h16" stroke="#34d399" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="40" r="6" fill="#34d399"/></svg>`,
  };

  return svgMap[type] ? `data:image/svg+xml;utf8,${encodeURIComponent(svgMap[type])}` : null;
}

function getSkillIcon(skill) {
  const icon = skillIconMap[skill];
  if (!icon) return null;
  if (icon.startsWith("custom-")) return buildCustomIcon(icon);
  return `https://skillicons.dev/icons?i=${icon}`;
}

export default function Skills() {
  const visibleSkills = SKILLS.flatMap((group) =>
    group.items
      .map((skill) => ({ skill, iconSrc: getSkillIcon(skill) }))
      .filter(({ iconSrc }) => iconSrc)
  );

  return (
    <section id="skills" data-testid={SKILLS_IDS.root} className="section relative">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">02 / Toolkit</p>
            <h2 className="h-display mt-3 text-4xl font-semibold text-neutral-50 sm:text-5xl">
              The stack behind
              <span className="h-serif ml-2 text-emerald-400">the work</span>.
            </h2>
          </div>
          <p className="mono max-w-md text-sm text-neutral-400">
            A single, visual toolkit of the tools I actually use.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="glass glass-hover mt-14 overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {visibleSkills.map(({ skill, iconSrc }) => (
              <div
                key={skill}
                data-testid={SKILLS_IDS.item(skill)}
                className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40 px-3 py-5 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={iconSrc}
                  alt={skill}
                  title={skill}
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  loading="lazy"
                />
                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-300 sm:text-[11px]">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
