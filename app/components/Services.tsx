"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const services = [
  {
    num: "01",
    title: "AI Automation Systems",
    description:
      "We map your business and automate the manual work so your team can focus on what matters.",
  },
  {
    num: "02",
    title: "Websites & Apps",
    description:
      "Fast, modern digital products built with AI. From landing pages to full applications.",
  },
  {
    num: "03",
    title: "AI Consulting",
    description:
      "We study your business and identify exactly where AI can save you time and make you money.",
  },
];

export default function Services() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="services"
      className="w-full px-6 py-28 md:px-16 md:py-40"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
      >
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          02 — Services
        </p>
        <h2 className="mb-14 text-4xl font-bold tracking-tight text-white md:text-6xl">
          What We Build.
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-6 rounded-2xl p-8 transition-all duration-300 cursor-default"
              style={{
                backgroundColor: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 0 40px rgba(59,130,246,0.2), 0 0 0 1px rgba(59,130,246,0.3)";
                el.style.border = "1px solid rgba(59,130,246,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "none";
                el.style.border = "1px solid rgba(255,255,255,0.08)";
              }}
            >
              <span className="text-xs font-semibold text-neutral-500">{s.num}</span>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
