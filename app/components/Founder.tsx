"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export default function Founder() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      className="w-full px-6 py-28 md:px-16 md:py-40"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
      >
        <h2 className="mb-16 text-4xl font-bold tracking-tight text-white md:text-6xl">
          The Founder.
        </h2>

        <div className="flex flex-col gap-16 md:flex-row md:gap-24">
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-bold text-white md:text-5xl">
              Darsh Sadarangani
            </p>
            <p className="text-base text-neutral-500">
              Founder &amp; CEO, PÉYRO
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-3xl font-bold text-white md:text-5xl">
              Avnee Singh
            </p>
            <p className="text-base text-neutral-500">
              Founder, PÉYRO
            </p>
            <p className="text-base text-neutral-500">
              +44 7824 061192
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
