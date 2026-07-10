"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let hovering = false;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hovering = !!t.closest("a, button, input, textarea, [data-cursor]");
      ring.style.width = hovering ? "56px" : "36px";
      ring.style.height = hovering ? "56px" : "36px";
      ring.style.borderColor = hovering ? "rgba(125,180,255,0.8)" : "rgba(255,255,255,0.35)";
      dot.style.opacity = hovering ? "0" : "1";
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-1.5 w-1.5 rounded-full bg-white md:block"
        style={{ transition: "opacity 0.2s ease" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden rounded-full border md:block"
        style={{
          width: 36,
          height: 36,
          borderColor: "rgba(255,255,255,0.35)",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease",
        }}
      />
    </>
  );
}
