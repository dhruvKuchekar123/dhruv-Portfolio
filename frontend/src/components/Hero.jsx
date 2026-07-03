import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { HERO } from "@/constants/testIds";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.175, 0.885, 0.32, 1.075] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      data-testid={HERO.root}
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[560px] w-[560px] rounded-full bg-emerald-500/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.04] blur-[130px]"
      />

      <div className="container-page relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16"
        >
          {/* LEFT */}
          <div className="lg:col-span-7">
            <motion.div variants={rise} className="mb-6 flex items-center gap-3">
              <span
                className="mono inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-emerald-300"
                data-testid={HERO.availability}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                {PROFILE.availability}
              </span>
            </motion.div>

            <motion.h1
              variants={rise}
              data-testid={HERO.name}
              className="h-display text-balance text-[52px] font-bold text-neutral-50 sm:text-[68px] lg:text-[88px]"
            >
              Dhruv
              <span className="h-serif ml-3 text-emerald-400/90">Kuchekar</span>
              <span className="text-neutral-600">.</span>
            </motion.h1>

            <motion.div variants={rise} className="mt-5 flex flex-wrap items-center gap-2">
              {PROFILE.roles.map((r, i) => (
                <React.Fragment key={r}>
                  <span
                    data-testid={i === 0 ? HERO.role : undefined}
                    className="mono text-[12px] uppercase tracking-[0.18em] text-neutral-400"
                  >
                    {r}
                  </span>
                  {i < PROFILE.roles.length - 1 && (
                    <span className="mono text-[12px] text-emerald-500/70">/</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            <motion.p
              variants={rise}
              data-testid={HERO.intro}
              className="mt-8 max-w-xl text-pretty text-[17px] leading-relaxed text-neutral-300 md:text-lg"
            >
              I build{" "}
              <span className="text-neutral-50">secure MERN systems</span> and{" "}
              <span className="h-serif text-emerald-300">AI-driven agents</span> — from
              role-based marketplaces to lip-sync ML pipelines. Based in {PROFILE.location}.
            </motion.p>

            <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#projects" data-testid={HERO.ctaProjects} className="btn-primary">
                View Projects
                <ArrowDown className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-testid={HERO.ctaResume}
                className="btn-ghost"
              >
                Résumé
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <a href="#contact" data-testid={HERO.ctaContact} className="btn-link ml-1">
                Say hello →
              </a>
            </motion.div>

            <motion.div
              variants={rise}
              className="mt-12 flex flex-wrap items-center gap-6 text-xs text-neutral-500"
            >
              <span className="mono flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-emerald-500/70" />
                {PROFILE.location}
              </span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="mono flex items-center gap-2 transition-colors hover:text-emerald-400"
              >
                <Github className="h-3.5 w-3.5" />
                github/dhruvKuchekar123
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mono flex items-center gap-2 transition-colors hover:text-emerald-400"
              >
                <Linkedin className="h-3.5 w-3.5" />
                linkedin/dhruv-kuchekar
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Portrait */}
          <motion.div
            variants={rise}
            className="relative lg:col-span-5"
            data-testid={HERO.portrait}
          >
            <div className="relative mx-auto max-w-[420px]">
              {/* glow */}
              <div
                aria-hidden
                className="absolute -inset-8 rounded-[36px] bg-emerald-500/10 blur-3xl"
              />
              {/* frame */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900/60 p-2 backdrop-blur">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={PROFILE.photo}
                    alt="Dhruv Kuchekar"
                    className="aspect-[4/5] w-full object-cover"
                    loading="eager"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  />
                  {/* corner tag */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="mono text-[10px] uppercase tracking-[0.24em] text-neutral-100">
                      2025 · v3
                    </span>
                  </div>
                  {/* bottom caption */}
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                    <div>
                      <p className="mono text-[10px] uppercase tracking-[0.24em] text-neutral-300">
                        Currently
                      </p>
                      <p className="text-sm font-medium text-neutral-50">
                        Building AI systems &amp; MERN products
                      </p>
                    </div>
                    <span className="mono text-[10px] text-neutral-400">DK/01</span>
                  </div>
                </div>
              </div>

              {/* floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="glass absolute -left-6 bottom-14 hidden rounded-2xl px-5 py-4 sm:block lg:-left-14"
              >
                <p className="mono text-[10px] uppercase tracking-[0.24em] text-emerald-400">
                  Recognition
                </p>
                <p className="mt-1.5 text-sm font-semibold text-neutral-50">
                  IEEE Best Presenter
                </p>
                <p className="text-[11px] text-neutral-400">VNPS &apos;26 National Winner</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
