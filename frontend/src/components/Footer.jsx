import React from "react";
import { ArrowUp } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { FOOTER_IDS } from "@/constants/testIds";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid={FOOTER_IDS.root}
      className="relative border-t border-white/5 py-12"
    >
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="h-display text-2xl font-semibold text-neutral-50">
              Dhruv
              <span className="h-serif ml-1.5 text-emerald-400">Kuchekar</span>
              <span className="text-neutral-600">.</span>
            </p>
            <p className="mono mt-2 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Built & designed in {PROFILE.location} · {year}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${PROFILE.email}`}
              className="mono text-[12px] text-neutral-400 transition-colors hover:text-emerald-400"
            >
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="mono text-[12px] text-neutral-400 transition-colors hover:text-emerald-400"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mono text-[12px] text-neutral-400 transition-colors hover:text-emerald-400"
            >
              LinkedIn
            </a>
            <a
              href="#top"
              data-testid={FOOTER_IDS.backTop}
              className="mono inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-neutral-300 transition-all hover:border-emerald-500/50 hover:text-emerald-300"
            >
              <ArrowUp className="h-3 w-3" strokeWidth={2.5} />
              Top
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/5 pt-6 text-[11px] text-neutral-600 md:flex-row md:items-center">
          <p className="mono">© {year} Dhruv Kuchekar — All rights reserved.</p>
          <p className="mono">
            Handcrafted with React · Tailwind · FastAPI · MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
}
