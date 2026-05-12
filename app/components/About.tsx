"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export default function About() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="about"
      className="w-full px-6 py-24 md:px-10 md:py-40"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-5xl flex flex-col gap-12 md:flex-row md:gap-24 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
      >
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            About.
          </h2>
        </div>

        <div className="md:w-2/3 flex items-center">
          <p className="text-base leading-relaxed text-neutral-300 md:text-xl md:leading-relaxed">
            We build AI systems, automate businesses and create digital products
            for companies worldwide. We help brands scale, move faster and
            operate smarter using the power of AI.
          </p>
        </div>
      </div>
    </section>
  );
}
