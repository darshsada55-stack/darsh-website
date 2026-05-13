"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export default function About() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="about"
      className="w-full px-6 py-28 md:px-16 md:py-40"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl flex flex-col gap-12 md:flex-row md:gap-24 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
      >
        <div className="md:w-5/12">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            01 — About
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            About PÉYRO.
          </h2>
        </div>

        <div className="md:w-7/12 flex items-center">
          <p className="text-lg leading-relaxed text-neutral-300 md:text-xl md:leading-relaxed">
            We are an AI systems and products company. We build automation,
            digital products and AI solutions for businesses worldwide. We help
            brands move faster, scale smarter and operate with the power of AI.
          </p>
        </div>
      </div>
    </section>
  );
}
