"use client";

import { useState } from "react";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const inputStyle = {
  backgroundColor: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.1)",
};

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
        className="relative w-full overflow-hidden px-6 py-24 md:px-16 md:py-36"
        style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />

        <div
          ref={ref}
          className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 transition-all duration-1000 md:grid-cols-2 md:gap-20"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
        >
          {/* Left — heading & details */}
          <div>
            <p className="mb-6 text-[10px] font-semibold tracking-[0.3em] text-neutral-600 uppercase">
              05 — Contact
            </p>
            <h2
              className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Let&apos;s Build{" "}
              <span className="text-gradient italic">Something.</span>
            </h2>
            <p className="mb-10 max-w-md text-base leading-relaxed text-neutral-500">
              Have a project in mind or want to explore what AI can do for your
              business? Tell us about it — we usually reply within 24 hours.
            </p>

            <a
              href="mailto:darsh@peyro.co"
              className="nav-link inline-block text-lg font-medium text-white md:text-xl"
            >
              darsh@peyro.co
            </a>

            {/* Direct WhatsApp contact */}
            <div className="mt-8">
              <a
                href="https://wa.me/917303261917?text=Hi%20P%C3%89YRO%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                style={{
                  border: "1px solid rgba(37,211,102,0.35)",
                  backgroundColor: "rgba(37,211,102,0.08)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                  fill="#25D366"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Message on WhatsApp
              </a>
              <a
                href="tel:+917303261917"
                className="mt-4 block text-sm tracking-wide text-neutral-500 transition-colors hover:text-white"
              >
                +91 73032 61917
              </a>
            </div>

            <div className="mt-10 flex items-center gap-2.5">
              <span className="animate-pulseDot h-1.5 w-1.5 rounded-full bg-green-400" />
              <span className="text-xs tracking-wide text-neutral-500">
                Currently taking on new projects
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="card-premium flex h-full flex-col items-center justify-center rounded-2xl p-12 text-center">
                <p className="text-xl font-semibold text-white">Message sent.</p>
                <p className="mt-2 text-sm text-neutral-500">We&apos;ll be in touch shortly.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-xs text-neutral-600 underline transition-colors hover:text-white"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-semibold tracking-widest text-neutral-600 uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-700 outline-none transition-all focus:ring-1 focus:ring-white/25"
                      style={inputStyle}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-semibold tracking-widest text-neutral-600 uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-700 outline-none transition-all focus:ring-1 focus:ring-white/25"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-semibold tracking-widest text-neutral-600 uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="resize-none rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-700 outline-none transition-all focus:ring-1 focus:ring-white/25"
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02]"
                >
                  Send Message <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full px-6 pb-8 pt-16 md:px-16"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)", backgroundColor: "#0a0a0a" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className="text-5xl font-bold tracking-[0.2em] text-white md:text-7xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                PÉYRO
              </p>
              <p className="mt-3 text-xs tracking-wide text-neutral-600">
                AI systems, automation &amp; digital products.
              </p>
            </div>

            <ul className="flex gap-8">
              {["Work", "Services", "Contact"].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-xs tracking-wide text-neutral-500 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="mt-12 flex items-center justify-between pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="text-[11px] tracking-widest text-neutral-700 uppercase">
              © 2026 PÉYRO
            </span>
            <span className="text-[11px] text-neutral-700">Built with AI</span>
          </div>
        </div>
      </footer>
    </>
  );
}
