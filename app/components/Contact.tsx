"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export default function Contact() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <>
      <section
        id="contact"
        className="w-full px-6 py-20 md:px-16 md:py-28"
        style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          ref={ref}
          className="mx-auto max-w-6xl transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <p className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-neutral-600 uppercase">
            04 — Contact
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Let's Build Something.
          </h2>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-neutral-500">
            Have a project in mind or want to explore what AI can do for your business? Let's talk.
          </p>

          <a
            href="mailto:darsh@peyro.co"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-black"
          >
            Get In Touch <span>→</span>
          </a>
        </div>
      </section>

      <footer
        className="w-full px-6 py-6 md:px-16"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#0a0a0a" }}
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <span className="text-xs font-semibold tracking-widest text-neutral-600 uppercase">PÉYRO</span>
          <span className="text-xs text-neutral-700">© 2026</span>
        </div>
      </footer>
    </>
  );
}
