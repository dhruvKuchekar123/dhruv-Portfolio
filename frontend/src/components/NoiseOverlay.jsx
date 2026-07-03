import React from "react";

export default function NoiseOverlay() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9997] grid-lines opacity-[0.35] mask-fade-b"
      />
    </>
  );
}
