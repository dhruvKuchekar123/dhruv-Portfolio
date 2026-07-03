import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronDown,
  Play,
  Maximize2,
  X,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/data";
import { PROJECTS_IDS } from "@/constants/testIds";

const ease = [0.175, 0.885, 0.32, 1.075];

function MediaGallery({ project }) {
  const [lightbox, setLightbox] = useState(null); // {url, caption} | null
  const [videoLoaded, setVideoLoaded] = useState(false);
  const media = project.media;
  if (!media) return null;

  return (
    <div className="mt-6 space-y-4 border-t border-white/5 pt-6">
      <div className="flex items-center gap-3">
        <span className="mono text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-300">
          Live demo
        </span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="mono text-[10px] text-neutral-500">
          {media.shots?.length ?? 0} shots · 1 video
        </span>
      </div>

      {/* Video player */}
      {media.video && (
        <div
          data-testid={PROJECTS_IDS.video(project.slug)}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black"
        >
          {!videoLoaded ? (
            <button
              type="button"
              onClick={() => setVideoLoaded(true)}
              className="relative block w-full aspect-video overflow-hidden text-left"
              aria-label="Play demo video"
            >
              <img
                src={media.poster}
                alt={`${project.name} demo poster`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-black shadow-[0_20px_60px_-10px_rgba(16,185,129,0.6)] transition-transform duration-300 group-hover:scale-110">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/40" />
                  <Play className="relative ml-0.5 h-6 w-6" fill="black" strokeWidth={0} />
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                    Watch demo
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-100">
                    {project.name} — walkthrough
                  </p>
                </div>
                <span className="mono rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-neutral-200 backdrop-blur">
                  mp4
                </span>
              </div>
            </button>
          ) : (
            <video
              src={media.video}
              poster={media.poster}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full bg-black"
            />
          )}
        </div>
      )}

      {/* Screenshot grid */}
      {media.shots && media.shots.length > 0 && (
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {media.shots.map((s, i) => (
            <button
              key={s.url}
              type="button"
              data-testid={PROJECTS_IDS.shot(project.slug, i)}
              onClick={() => setLightbox(s)}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 transition-all hover:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              aria-label={`Open screenshot: ${s.caption}`}
            >
              <img
                src={s.url}
                alt={s.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-x-2 bottom-2 flex items-end justify-between gap-2">
                <span className="mono text-[10px] text-neutral-200 line-clamp-1">
                  {s.caption}
                </span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/70 text-emerald-300 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-3 w-3" strokeWidth={2.5} />
                </span>
              </div>
              <span className="mono absolute left-2 top-2 rounded-full border border-white/10 bg-black/50 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-neutral-300 backdrop-blur">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Dialog open={Boolean(lightbox)} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent
          data-testid={PROJECTS_IDS.lightbox}
          className="max-w-6xl border border-white/10 bg-black/90 p-3 backdrop-blur-xl"
        >
          {lightbox && (
            <div className="relative">
              <img
                src={lightbox.url}
                alt={lightbox.caption}
                className="max-h-[80vh] w-full rounded-xl object-contain"
              />
              <div className="mt-3 flex items-center justify-between px-2 pb-1">
                <p className="mono text-xs uppercase tracking-[0.2em] text-emerald-300">
                  {project.name}
                </p>
                <p className="text-sm text-neutral-200">{lightbox.caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

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
        <div className="flex items-center gap-2">
          {project.media && (
            <span className="mono flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
              <Play className="h-2.5 w-2.5" fill="currentColor" strokeWidth={0} />
              Demo
            </span>
          )}
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
        </div>
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

            <MediaGallery project={project} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout="position" className="mt-6 flex flex-wrap items-center gap-4 pt-4">
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
