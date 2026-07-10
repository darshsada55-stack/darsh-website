"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function NeuralHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      const count = Math.min(90, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const LINK = 130;

      for (const n of nodes) {
        // gentle drift
        n.x += n.vx;
        n.y += n.vy;

        // cursor repulsion
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const md = Math.hypot(dx, dy);
        if (md < 140 && md > 0.01) {
          const f = ((140 - md) / 140) * 0.6;
          n.x += (dx / md) * f;
          n.y += (dy / md) * f;
        }

        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x));
        n.y = Math.max(0, Math.min(h, n.y));
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > LINK) continue;

          const midx = (a.x + b.x) / 2;
          const midy = (a.y + b.y) / 2;
          const mouseDist = Math.hypot(midx - mouse.x, midy - mouse.y);
          const glow = mouseDist < 180 ? (180 - mouseDist) / 180 : 0;

          const alpha = (1 - d / LINK) * (0.08 + glow * 0.35);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${125 + glow * 60}, ${180}, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // nodes
      for (const n of nodes) {
        const mouseDist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const glow = mouseDist < 180 ? (180 - mouseDist) / 180 : 0;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4 + glow * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 200, 255, ${0.35 + glow * 0.5})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
