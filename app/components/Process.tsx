"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const steps = [
  {
    num: "/01",
    title: "Discover",
    description:
      "We study your business, understand your problems and identify where AI can help.",
  },
  {
    num: "/02",
    title: "Build",
    description:
      "We design and build your AI system, website or product fast using cutting edge tools.",
  },
  {
    num: "/03",
    title: "Scale",
    description:
      "We deploy, monitor and help you grow. You keep the results, we keep improving.",
  },
];

export default function Process() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="work"
      className="w-full px-6 py-28 md:px-16 md:py-40"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
      >
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          03 — Process
        </p>
        <h2 className="mb-20 text-4xl font-bold tracking-tight text-white md:text-6xl">
          How We Work.
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col gap-4">
              <span className="text-sm font-bold text-blue-400">{step.num}</span>
              <h3 className="text-2xl font-bold text-white md:text-3xl">{step.title}</h3>
              <p className="text-base leading-relaxed text-neutral-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
