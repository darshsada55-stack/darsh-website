"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const services = [
  {
    num: "01",
    title: "AI Automation Systems",
    description:
      "We map your business and automate the manual work so your team can focus on what matters.",
    tags: ["Workflows", "Integrations", "AI Agents"],
  },
  {
    num: "02",
    title: "Websites & Apps",
    description:
      "Fast, modern digital products built with AI. From landing pages to full applications.",
    tags: ["Web Design", "Development", "Mobile"],
  },
  {
    num: "03",
    title: "AI Consulting",
    description:
      "We study your business and identify exactly where AI can save you time and make you money.",
    tags: ["Strategy", "Audits", "Roadmaps"],
  },
];

export default function Services() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="services"
      className="w-full px-6 py-24 md:px-16 md:py-32"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
      >
        <p className="mb-6 text-[10px] font-semibold tracking-[0.3em] text-neutral-600 uppercase">
          02 — Services
        </p>
        <h2 className="mb-14 text-3xl font-bold tracking-tight text-white md:text-5xl">
          What We Build.
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card-premium group flex flex-col gap-5 rounded-2xl p-8 md:p-10">
              <span
                className="text-gradient text-4xl font-bold md:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.num}
              </span>
              <h3 className="text-lg font-bold text-white md:text-xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">{s.description}</p>

              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1 text-[10px] font-medium tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
