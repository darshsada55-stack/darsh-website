"use client";

import { useRef, useState } from "react";

export default function TiltCard({
  children,
  className,
  maxTilt = 6,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, on: false });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * maxTilt}deg) rotateY(${(px - 0.5) * maxTilt}deg) translateY(-4px)`;
    setSpot({ x: px * 100, y: py * 100, on: true });
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    setSpot((s) => ({ ...s, on: false }));
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{
        background: "linear-gradient(180deg, #0f0f10 0%, #0b0b0c 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease, box-shadow 0.35s ease",
        boxShadow: spot.on ? "0 24px 70px -24px rgba(60,110,255,0.2)" : "none",
        borderColor: spot.on ? "rgba(125,180,255,0.25)" : "rgba(255,255,255,0.07)",
      }}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: spot.on ? 1 : 0,
          background: `radial-gradient(circle 320px at ${spot.x}% ${spot.y}%, rgba(125,180,255,0.08), transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
