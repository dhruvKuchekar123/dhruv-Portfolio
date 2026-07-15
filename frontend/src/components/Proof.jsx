import React from "react";
import { motion } from "framer-motion";
import { TRUST_POINTS, CERTIFICATIONS } from "@/lib/data";

export default function Proof() {
  return (
    <section id="proof" className="section relative">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-white/10 bg-gradient-to-br from-emerald-500/[0.08] via-black/20 to-transparent p-8 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="eyebrow">02.5 / Proof & recognition</p>
              <h2 className="h-display mt-4 text-balance text-3xl font-semibold text-neutral-50 sm:text-4xl">
                Built for real outcomes,
                <span className="ml-2 text-emerald-400">not just demos.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-neutral-300">
                I focus on systems that are practical, secure, and useful — whether that means shipping a production-style web app, automating a messy workflow, or translating a complex idea into an experience people can trust.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {TRUST_POINTS.map((point) => (
                  <div key={point.label} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="h-display text-3xl font-semibold text-neutral-50">{point.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">{point.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur">
              <p className="mono text-[10px] uppercase tracking-[0.24em] text-emerald-400">
                Recognition
              </p>
              <ul className="mt-5 space-y-3">
                {CERTIFICATIONS.slice(0, 4).map((item) => (
                  <li key={item.title} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <p className="text-sm font-medium text-neutral-100">{item.title}</p>
                    <p className="mt-1 text-sm text-neutral-400">{item.meta}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.08] p-4">
                <p className="h-serif text-[20px] text-emerald-200">
                  “I care about the plumbing, the polish, and the outcome.”
                </p>
                <p className="mt-2 mono text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                  — Dhruv Kuchekar
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
