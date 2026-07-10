"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 24, suffix: "/7", label: "Systems running" },
  { value: 24, suffix: "h", label: "Average response" },
  { value: 100, suffix: "%", label: "Custom-built" },
  { value: 0, suffix: "", label: "Templates used" },
];

function CountUp({ to, suffix, start }: { to: number; suffix: string; start: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);

  return (
    <span>
      {val}
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full px-6 py-14 md:px-16"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-2">
            <span
              className="text-4xl font-bold text-white md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <CountUp to={s.value} suffix={s.suffix} start={visible} />
            </span>
            <span className="text-[11px] tracking-[0.2em] text-neutral-600 uppercase">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
