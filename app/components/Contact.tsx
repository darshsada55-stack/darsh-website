"use client";

import { useState } from "react";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export default function Contact() {
  const { ref, visible } = useFadeInOnScroll();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`New enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:darsh@peyro.co?subject=${subject}&body=${body}`);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

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
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Let's Build Something.
          </h2>
          <p className="mb-12 max-w-lg text-base leading-relaxed text-neutral-500">
            Have a project in mind or want to explore what AI can do for your business? Let's talk.
          </p>

          {sent ? (
            <div className="py-10 text-center">
              <p className="text-lg font-semibold text-white">Message sent.</p>
              <p className="mt-2 text-sm text-neutral-500">We'll be in touch shortly.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-xs text-neutral-600 underline hover:text-white transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-semibold tracking-widest text-neutral-600 uppercase">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-all focus:ring-1 focus:ring-white/20"
                  style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-semibold tracking-widest text-neutral-600 uppercase">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-all focus:ring-1 focus:ring-white/20"
                  style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-semibold tracking-widest text-neutral-600 uppercase">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none resize-none transition-all focus:ring-1 focus:ring-white/20"
                  style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-black"
                >
                  Send Message <span>→</span>
                </button>
              </div>
            </form>
          )}
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
