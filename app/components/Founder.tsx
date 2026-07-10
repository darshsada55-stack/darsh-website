"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export default function Founder() {
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
          The Team
        </p>
        <h2 className="mb-14 text-3xl font-bold tracking-tight text-white md:text-5xl">
          The Founder.
        </h2>

        <div className="card-premium flex flex-col items-start gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:gap-8 md:p-12">
          {/* Monogram */}
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white md:h-24 md:w-24 md:text-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(96,165,250,0.25), rgba(167,139,250,0.15))",
              border: "1px solid rgba(255,255,255,0.12)",
              fontFamily: "var(--font-playfair)",
            }}
          >
            DS
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold text-white md:text-4xl">Darsh Sadarangani</p>
            <p className="text-sm tracking-wide text-neutral-500 md:text-base">
              Founder &amp; CEO, PÉYRO
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-500">
              Building AI systems that let businesses run smarter — turning manual
              work into automated growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
