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
  GitHub: "github",
  Render: "render",
  Cloudinary: "cloudinary",
  Postman: "postman",
  "Claude AI": "openai",
  n8n: "n8n",
  DSA: "java",
  OOP: "java",
  Agile: "github",
  "System Design": "nodejs",
  "Prompt Orchestration": "openai",
};

function getSkillIcon(skill) {
  const icon = skillIconMap[skill];
  if (!icon) return null;
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
