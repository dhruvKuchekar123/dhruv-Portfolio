import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/data";
import { NAV } from "@/constants/testIds";

const spring = { type: "spring", stiffness: 340, damping: 30, mass: 0.9 };

export default function Nav() {
  const [open, setOpen] = useState(false);
  // 0 = expanded pill (top), 1 = shrunk to DK dot (scrolled)
  const [shrunk, setShrunk] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const threshold = 80;
    const onScroll = () => setShrunk(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When shrunk and user hovers the dot, temporarily re-expand for a peek
  const collapsed = shrunk && !hovered;

  const testIdFor = (label) => {
    const key = `link${label}`;
    return NAV[key] || `nav-link-${label.toLowerCase()}`;
  };

  return (
    <>
      <motion.header
        data-testid={NAV.root}
        initial={false}
        animate={{
          width: collapsed ? 64 : undefined,
          x: "-50%",
        }}
        style={{ x: "-50%" }}
        transition={spring}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`fixed top-4 left-1/2 z-50 max-w-6xl px-2 ${
          collapsed ? "" : "w-[calc(100%-24px)]"
        }`}
      >
        <motion.div
          initial={false}
          animate={{
            paddingLeft: collapsed ? 6 : 16,
            paddingRight: collapsed ? 6 : 16,
            paddingTop: collapsed ? 6 : 10,
            paddingBottom: collapsed ? 6 : 10,
            borderRadius: 999,
          }}
          transition={spring}
          className={`flex items-center border border-white/10 backdrop-blur-xl transition-colors duration-300 ${
            shrunk ? "bg-black/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]" : "bg-black/40"
          } ${collapsed ? "justify-center" : "justify-between"}`}
        >
          <a
            href="#top"
            data-testid={NAV.brand}
            className="group flex items-center gap-2.5 pl-0.5"
            aria-label="Back to top"
          >
            <motion.span
              layout
              transition={spring}
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/40"
            >
              <span className="absolute inset-0 rounded-full bg-emerald-500/25 blur-md" />
              <motion.span
                animate={{
                  scale: collapsed ? 1.05 : 1,
                }}
                transition={spring}
                className="mono relative text-[14px] font-bold text-emerald-300"
              >
                DK
              </motion.span>
              {collapsed && (
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  className="absolute -right-0.5 -top-0.5 flex h-2 w-2"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-black" />
                </motion.span>
              )}
            </motion.span>
            <AnimatePresence initial={false}>
              {!collapsed && (
                <motion.span
                  key="brand-label"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.2 }}
                  className="hidden text-sm font-medium tracking-tight text-neutral-100 sm:block"
                >
                  Dhruv Kuchekar
                  <span className="mono ml-2 text-[10px] text-neutral-500">
                    / portfolio
                  </span>
                </motion.span>
              )}
            </AnimatePresence>
          </a>

          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.nav
                key="links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden items-center gap-1 md:flex"
              >
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
              </motion.nav>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.div
                key="right-controls"
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
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
