"use client";

import { useEffect, useRef, useState } from "react";

const links = ["Work", "Services", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Publish the real navbar height as --nav-h so the mobile menu and hero
  // track it exactly on every screen size.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const update = () =>
      document.documentElement.style.setProperty("--nav-h", `${nav.offsetHeight}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(nav);
    window.addEventListener("orientationchange", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 transition-colors duration-300"
        style={{
          backgroundColor: "#0a0a0a",
          borderBottom: scrolled || open ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          // ROOT-CAUSE FIX (iOS Safari): the animated <canvas> and blur in the
          // hero sit on their own GPU layer. During momentum scroll iOS can
          // paint that layer OVER an unpromoted header. Forcing the header onto
          // its own promoted compositing layer keeps it ordered on top.
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <a href="#" className="text-lg font-bold tracking-[0.25em] text-white md:text-xl">
          PÉYRO
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {links.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="nav-link text-[13px] tracking-wide text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-primary rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-black transition-transform duration-300 hover:scale-[1.04]"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-6 bg-white transition-all duration-300"
            style={{ transform: open ? "rotate(45deg) translateY(4px)" : "none" }}
          />
          <span
            className="block h-px w-6 bg-white transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-px w-6 bg-white transition-all duration-300"
            style={{ transform: open ? "rotate(-45deg) translateY(-4px)" : "none" }}
          />
        </button>
      </nav>

      {/* Spacer that offsets the fixed nav so hero content starts below it */}
      <div style={{ height: "var(--nav-h, 64px)" }} aria-hidden />

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{
            top: "var(--nav-h, 64px)",
            backgroundColor: "#0a0a0a",
          }}
        >
          {links.map((label, i) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="animate-fadeInWord px-6 py-6 text-2xl font-semibold text-white border-b transition-colors hover:text-neutral-400"
              style={{ borderColor: "rgba(255,255,255,0.07)", animationDelay: `${i * 0.06}s`, opacity: 0 }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="animate-fadeInWord mx-6 mt-8 rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-black"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Get in Touch →
          </a>
        </div>
      )}
    </>
  );
}
