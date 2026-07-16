"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Show a hairline border once the page is scrolled a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed left-0 top-0 z-[100] w-full"
        style={{
          // Own stacking context WITHOUT transform/filter, so fixed
          // positioning stays anchored to the viewport on iOS Safari.
          isolation: "isolate",
          backgroundColor: "#0a0a0a",
        }}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full items-center justify-between px-6 md:h-20 md:px-12"
          style={{
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid transparent",
            transition: "border-color 0.3s ease",
          }}
        >
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="text-lg font-bold tracking-[0.25em] text-white md:text-xl"
          >
            PÉYRO
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-8">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group relative text-[13px] tracking-wide text-neutral-400 transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-black transition-transform duration-300 hover:scale-[1.04]"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile toggle (stays above the menu so it's always tappable) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-[110] -mr-2 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className="absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-300"
                style={{
                  top: open ? "50%" : "0",
                  transform: open ? "translateY(-50%) rotate(45deg)" : "none",
                }}
              />
              <span
                className="absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-white transition-opacity duration-200"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-300"
                style={{
                  bottom: open ? "50%" : "0",
                  transform: open ? "translateY(50%) rotate(-45deg)" : "none",
                }}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Spacer keeps content below the fixed header — no layout shift */}
      <div className="h-16 md:h-20" aria-hidden />

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-[90] flex flex-col md:hidden"
        aria-hidden={!open}
        style={{
          backgroundColor: "#0a0a0a",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.35s ease, visibility 0.35s ease",
        }}
      >
        {/* Offset so links sit below the header bar */}
        <div className="h-16" aria-hidden />
        <nav aria-label="Mobile" className="flex flex-col px-6 pt-6">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b py-6 text-3xl font-semibold text-white"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.4s ease ${0.08 + i * 0.06}s, transform 0.4s ease ${0.08 + i * 0.06}s`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-10 rounded-full bg-white py-4 text-center text-base font-semibold text-black"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.4s ease 0.28s, transform 0.4s ease 0.28s",
            }}
          >
            Get in Touch →
          </a>
        </nav>
      </div>
    </>
  );
}
