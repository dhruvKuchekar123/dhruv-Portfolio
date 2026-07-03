import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { SKILLS_IDS } from "@/constants/testIds";

export default function Skills() {
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
            Grouped by role in a system — not a keyword soup.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.group}
              data-testid={SKILLS_IDS.group(group.group)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: gi * 0.06 }}
              className="glass glass-hover group relative overflow-hidden rounded-2xl p-6"
            >
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-center gap-3">
                <span className="mono text-[10px] font-medium text-neutral-500">
                  0{gi + 1}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-50">
                {group.group}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((it) => (
                  <li
                    key={it}
                    data-testid={SKILLS_IDS.item(it)}
                    className="chip transition-colors group-hover:border-emerald-500/25"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
