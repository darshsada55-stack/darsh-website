"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const steps = [
  { num: "/01", title: "Discover", description: "We study your business, understand your problems and identify where AI can help." },
  { num: "/02", title: "Build", description: "We design and build your AI system, website or product fast using cutting edge tools." },
  { num: "/03", title: "Scale", description: "We deploy, monitor and help you grow. You keep the results, we keep improving." },
];

export default function Process() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="work"
      className="w-full px-6 py-20 md:px-16 md:py-28"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
      >
        <p className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-neutral-600 uppercase">
          03 — Process
        </p>
        <h2 className="mb-14 text-3xl font-bold tracking-tight text-white md:text-5xl">
          How We Work.
        </h2>

        <div className="grid grid-cols-1 gap-px md:grid-cols-3" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col gap-4 p-8 md:p-10" style={{ backgroundColor: "#0d0d0d" }}>
              <span className="text-xs font-bold tracking-widest text-blue-500">{step.num}</span>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
