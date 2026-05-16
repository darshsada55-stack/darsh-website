"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export default function About() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="about"
      className="w-full px-6 py-20 md:px-16 md:py-28"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl flex flex-col gap-12 md:flex-row md:gap-24 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
      >
        <div className="md:w-5/12">
          <p className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-neutral-600 uppercase">
            01 — About
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            About PÉYRO.
          </h2>
        </div>

        <div className="md:w-7/12 flex items-center">
          <p className="text-base leading-relaxed text-neutral-400 md:text-lg md:leading-relaxed">
            We are an AI systems and products company. We build automation,
            digital products and AI solutions for businesses worldwide. We help
            brands move faster, scale smarter and operate with the power of AI.
          </p>
        </div>
      </div>
    </section>
  );
}
