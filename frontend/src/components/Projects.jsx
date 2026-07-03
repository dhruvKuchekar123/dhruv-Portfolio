import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/data";
import { PROJECTS_IDS } from "@/constants/testIds";

const ease = [0.175, 0.885, 0.32, 1.075];

function ProjectCard({ project, expanded, onToggle }) {
  return (
    <motion.article
      layout
      data-testid={PROJECTS_IDS.card(project.slug)}
      transition={{ layout: { duration: 0.5, ease } }}
      className="glass glass-hover group relative overflow-hidden rounded-3xl p-6 md:p-7"
    >
      <motion.div layout="position" className="flex items-start justify-between gap-4">
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.24em] text-emerald-400">
            {project.category} · {project.year}
          </p>
          <h3 className="h-display mt-2 text-2xl font-semibold text-neutral-50">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm text-neutral-400">{project.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={onToggle}
          data-testid={PROJECTS_IDS.expand(project.slug)}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse" : "Expand"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
        >
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
          </motion.span>
        </button>
      </motion.div>

      <motion.div layout="position" className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </motion.div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-4 border-t border-white/5 pt-6">
              {[
                { label: "Problem", body: project.problem, color: "text-rose-300/90" },
                { label: "Solution", body: project.solution, color: "text-neutral-200" },
                { label: "Impact", body: project.impact, color: "text-emerald-300" },
              ].map((block) => (
                <div key={block.label} className="grid grid-cols-[92px_1fr] gap-4">
                  <span
                    className={`mono text-[10px] font-medium uppercase tracking-[0.22em] ${block.color}`}
                  >
                    {block.label}
                  </span>
                  <p className="text-[15px] leading-relaxed text-neutral-300">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout="position" className="mt-6 flex flex-wrap items-center gap-3 pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            data-testid={PROJECTS_IDS.github(project.slug)}
            className="btn-link"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            data-testid={PROJECTS_IDS.live(project.slug)}
            className="btn-link"
          >
            <ExternalLink className="h-4 w-4" />
            Live
          </a>
        )}
      </motion.div>

      {/* corner accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-emerald-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(() => new Set([PROJECTS[0].slug]));

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  const toggle = (slug) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  return (
    <section id="projects" data-testid={PROJECTS_IDS.root} className="section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[140px]"
      />
      <div className="container-page relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">03 / Selected work</p>
            <h2 className="h-display mt-3 text-4xl font-semibold text-neutral-50 sm:text-5xl">
              Case studies, not
              <span className="h-serif ml-2 text-emerald-400">screenshots</span>.
            </h2>
            <p className="mt-4 max-w-xl text-neutral-400">
              Every project below is framed as{" "}
              <span className="mono text-emerald-400">Problem → Solution → Impact</span> so
              you can evaluate the thinking, not just the tech.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                data-testid={PROJECTS_IDS.filter(c)}
                onClick={() => setFilter(c)}
                className={`mono rounded-full border px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] transition-all ${
                  filter === c
                    ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-300"
                    : "border-white/10 bg-white/[0.02] text-neutral-400 hover:text-neutral-100"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <LayoutGroup>
          <motion.div
            layout
            data-testid={PROJECTS_IDS.grid}
            className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProjectCard
                  key={p.slug}
                  project={p}
                  expanded={expanded.has(p.slug)}
                  onToggle={() => toggle(p.slug)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
