"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const steps = [
  {
    num: "01",
    title: "Discover",
    description:
      "We study your business, understand your problems and identify where AI can help.",
  },
  {
    num: "02",
    title: "Build",
    description:
      "We design and build your AI system, website or product fast using cutting edge tools.",
  },
  {
    num: "03",
    title: "Scale",
    description:
      "We deploy, monitor and help you grow. You keep the results, we keep improving.",
  },
];

export default function Process() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      className="w-full px-6 py-24 md:px-16 md:py-32"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
      >
        <p className="mb-6 text-[10px] font-semibold tracking-[0.3em] text-neutral-600 uppercase">
          04 — Process
        </p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-white md:text-5xl">
          How We Work.
        </h2>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting line (desktop) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(125,180,255,0.25) 15%, rgba(125,180,255,0.25) 85%, transparent)",
            }}
          />

          {steps.map((step) => (
            <div key={step.title} className="relative flex flex-col gap-5">
              <div
                className="z-10 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, rgba(96,165,250,0.25), rgba(167,139,250,0.12))",
                  border: "1px solid rgba(125,180,255,0.3)",
                  backgroundColor: "#0a0a0a",
                }}
              >
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white md:text-2xl">{step.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
