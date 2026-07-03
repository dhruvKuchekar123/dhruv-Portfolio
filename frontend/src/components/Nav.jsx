import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/data";
import { NAV } from "@/constants/testIds";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const testIdFor = (label) => {
    const key = `link${label}`;
    return NAV[key] || `nav-link-${label.toLowerCase()}`;
  };

  return (
    <>
      <motion.header
        data-testid={NAV.root}
        initial={{ y: -20, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.075] }}
        style={{ x: "-50%" }}
        className="fixed top-4 left-1/2 z-50 w-[calc(100%-24px)] max-w-6xl px-2"
      >
        <div
          className={`flex items-center justify-between rounded-full border border-white/10 px-4 py-2.5 backdrop-blur-xl transition-colors duration-300 ${
            scrolled ? "bg-black/70" : "bg-black/40"
          }`}
        >
          <a
            href="#top"
            data-testid={NAV.brand}
            className="group flex items-center gap-2.5 pl-1"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/40">
              <span className="absolute inset-0 rounded-full bg-emerald-500/25 blur-md" />
              <span className="mono relative text-[13px] font-semibold text-emerald-300">
                DK
              </span>
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-neutral-100 sm:block">
              Dhruv Kuchekar
              <span className="mono ml-2 text-[10px] text-neutral-500">/ portfolio</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={testIdFor(l.label)}
                className="relative rounded-full px-4 py-1.5 text-[13px] font-medium text-neutral-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              data-testid={NAV.resumeBtn}
              className="hidden items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-1.5 text-[13px] font-semibold text-black transition-all hover:bg-emerald-400 hover:-translate-y-0.5 md:inline-flex"
            >
              Résumé
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </a>
            <button
              type="button"
              data-testid={NAV.mobileToggle}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-100 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            data-testid={NAV.mobileMenu}
            initial={{ opacity: 0, y: -8, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -8, x: "-50%" }}
            transition={{ duration: 0.25 }}
            style={{ x: "-50%" }}
            className="fixed left-1/2 top-20 z-50 w-[calc(100%-24px)] max-w-6xl rounded-2xl border border-white/10 bg-black/85 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-testid={`${testIdFor(l.label)}-mobile`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-neutral-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="nav-resume-btn-mobile"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-black"
              >
                Résumé
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
