import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE, CERTIFICATIONS } from "@/lib/data";
import { EXPERIENCE_IDS, CERTS_IDS } from "@/constants/testIds";

export default function Experience() {
  return (
    <section id="experience" data-testid={EXPERIENCE_IDS.root} className="section relative">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <p className="eyebrow">04 / Experience</p>
            <h2 className="h-display mt-3 text-4xl font-semibold text-neutral-50 sm:text-5xl">
              What I&apos;ve
              <span className="h-serif ml-2 text-emerald-400">shipped</span> so far.
            </h2>

            <ol className="relative mt-12 border-l border-white/10 pl-8">
              {EXPERIENCE.map((exp, i) => (
                <motion.li
                  key={exp.company}
                  data-testid={EXPERIENCE_IDS.item(i)}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="relative pb-12 last:pb-0"
                >
                  <span className="absolute -left-[42px] top-1.5 flex h-4 w-4 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-black" />
                  </span>

                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold text-neutral-50">{exp.company}</h3>
                    <span className="mono text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mono mt-1 text-[12px] uppercase tracking-[0.18em] text-emerald-400">
                    {exp.role} · {exp.mode}
                  </p>

                  <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-neutral-300">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500/70" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5" data-testid={CERTS_IDS.root}>
            <p className="eyebrow">05 / Recognition</p>
            <h3 className="h-display mt-3 text-3xl font-semibold text-neutral-50 sm:text-4xl">
              Awards &amp;
              <span className="h-serif ml-2 text-emerald-400">certificates</span>
            </h3>

            <ul className="mt-8 space-y-3">
              {CERTIFICATIONS.map((c, i) => (
                <motion.li
                  key={c.title}
                  data-testid={CERTS_IDS.item(i)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="glass glass-hover flex items-start gap-4 rounded-2xl p-4"
                >
                  <span className="mono flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-semibold text-emerald-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-neutral-100">{c.title}</p>
                    <p className="mono mt-1 text-[11px] text-neutral-500">{c.meta}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
