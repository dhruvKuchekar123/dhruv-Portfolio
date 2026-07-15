import React from "react";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/data";
import { ABOUT_IDS } from "@/constants/testIds";

export default function About() {
  return (
    <section id="about" data-testid={ABOUT_IDS.root} className="section relative">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="eyebrow">01 / About</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              data-testid={ABOUT_IDS.headline}
              className="h-display mt-4 text-balance text-4xl font-semibold text-neutral-50 sm:text-5xl"
            >
              Full-stack engineer,
              <br />
              <span className="h-serif text-emerald-400">former designer</span> —
              <br />
              building products
              <br />
              that hold up.
            </motion.h2>

            <dl className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-white/5 pt-8">
              {ABOUT.facts.map((f) => (
                <div key={f.label}>
                  <dt className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-neutral-100">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-6 text-[17px] leading-relaxed text-neutral-300 md:text-lg">
              {ABOUT.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  data-testid={`${ABOUT_IDS.paragraph}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="text-pretty"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { k: "10+", l: "Shipped projects" },
                { k: "2", l: "MERN apps at Inlighn Global" },
                { k: "1×", l: "IEEE Best Presenter" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="glass rounded-2xl px-5 py-6"
                >
                  <p className="h-display text-4xl font-bold text-neutral-50">{s.k}</p>
                  <p className="mono mt-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
