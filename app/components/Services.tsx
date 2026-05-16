"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const services = [
  {
    num: "01",
    title: "AI Automation Systems",
    description: "We map your business and automate the manual work so your team can focus on what matters.",
  },
  {
    num: "02",
    title: "Websites & Apps",
    description: "Fast, modern digital products built with AI. From landing pages to full applications.",
  },
  {
    num: "03",
    title: "AI Consulting",
    description: "We study your business and identify exactly where AI can save you time and make you money.",
  },
];

export default function Services() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="services"
      className="w-full px-6 py-20 md:px-16 md:py-28"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
      >
        <p className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-neutral-600 uppercase">
          02 — Services
        </p>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-5xl">
          What We Build.
        </h2>

        <div className="grid grid-cols-1 gap-px sm:grid-cols-3" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-5 p-8 md:p-10 transition-all duration-300 cursor-default"
              style={{ backgroundColor: "#0d0d0d" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.backgroundColor = "#111418";
                el.style.boxShadow = "inset 0 0 0 1px rgba(59,130,246,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.backgroundColor = "#0d0d0d";
                el.style.boxShadow = "none";
              }}
            >
              <span className="text-[10px] font-semibold tracking-widest text-neutral-600">{s.num}</span>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
