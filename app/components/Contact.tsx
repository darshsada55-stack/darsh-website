"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export default function Contact() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <>
      <section
        id="contact"
        className="w-full px-6 py-24 md:px-10 md:py-40"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div
          ref={ref}
          className="mx-auto max-w-5xl flex flex-col items-start gap-10 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Let's Build Something.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Have a project in mind or want to explore what AI can do for your
              business? Let's talk.
            </p>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&to=darshsada@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-opacity duration-200 hover:opacity-80"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <footer
        className="w-full px-6 py-8 md:px-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0a0a0a" }}
      >
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <span className="text-sm text-neutral-400">Aceiro</span>
          <span className="text-sm text-neutral-600">© 2025</span>
        </div>
      </footer>
    </>
  );
}
