"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const services = [
  {
    title: "AI Automation Systems",
    description:
      "We map your business and automate the manual work so your team can focus on what matters.",
  },
  {
    title: "Websites & Apps",
    description:
      "Fast, modern digital products built with AI. From landing pages to full applications.",
  },
  {
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
      className="w-full px-6 py-24 md:px-10 md:py-40"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-5xl transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
      >
        <h2 className="mb-12 text-4xl font-bold tracking-tight text-white md:mb-16 md:text-6xl">
          What We Build.
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 rounded-2xl p-7 md:p-8 transition-all duration-300 cursor-default"
              style={{
                backgroundColor: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 32px rgba(59,130,246,0.25), 0 0 0 1px rgba(59,130,246,0.2)";
                (e.currentTarget as HTMLDivElement).style.border =
                  "1px solid rgba(59,130,246,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.border =
                  "1px solid rgba(255,255,255,0.08)";
              }}
            >
              <h3 className="text-base font-semibold text-white md:text-lg">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
