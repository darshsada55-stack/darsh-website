"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const capabilities = [
  "AI Automation",
  "Web & App Development",
  "AI Consulting",
  "Custom AI Systems",
  "Digital Products",
];

export default function About() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="about"
      className="w-full px-6 py-24 md:px-16 md:py-36"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
      >
        <p className="mb-6 text-[10px] font-semibold tracking-[0.3em] text-neutral-600 uppercase">
          01 — About
        </p>

        <p className="max-w-4xl text-2xl font-light leading-snug tracking-tight text-neutral-500 sm:text-3xl md:text-[2.6rem] md:leading-[1.25]">
          <span className="text-white">PÉYRO is an AI systems and products company.</span>{" "}
          We build automation, digital products and AI solutions for businesses
          worldwide — helping brands{" "}
          <span className="text-white">move faster</span>,{" "}
          <span className="text-white">scale smarter</span> and operate with the
          power of AI.
        </p>

        <div className="mt-14 flex flex-wrap gap-3">
          {capabilities.map((c) => (
            <span
              key={c}
              className="rounded-full px-4 py-2 text-xs font-medium tracking-wide text-neutral-400 transition-colors duration-300 hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
