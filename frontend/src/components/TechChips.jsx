import React from "react";
import { TECH_ICONS } from "@/lib/techIcons";

/**
 * Continuously scrolling horizontal marquee that renders each tech as a
 * logo chip. The list is duplicated so the scroll loops seamlessly.
 * Direction: left → right (accent flow). Pauses on hover.
 */
export default function TechChips({ items, testId }) {
  if (!items || items.length === 0) return null;
  // duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div
      className="tech-marquee group relative overflow-hidden"
      data-testid={testId}
      aria-label={`Tech stack: ${items.join(", ")}`}
    >
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

      <div className="tech-marquee__track flex w-max gap-2.5 py-1">
        {doubled.map((name, i) => {
          const slug = TECH_ICONS[name];
          return (
            <span
              key={`${name}-${i}`}
              className="chip inline-flex items-center gap-2 whitespace-nowrap border-white/10 bg-white/[0.03] hover:border-emerald-500/30 hover:text-neutral-100"
              aria-hidden={i >= items.length ? "true" : undefined}
            >
              {slug ? (
                <img
                  src={`https://cdn.simpleicons.org/${slug}/10b981`}
                  alt=""
                  width={14}
                  height={14}
                  loading="lazy"
                  className="h-3.5 w-3.5 shrink-0"
                  onError={(e) => {
                    // hide broken icons gracefully
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/70" />
              )}
              <span>{name}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
