"use client";

import { useState } from "react";
import PeyroLogo from "./PeyroLogo";

const links = ["Work", "Services", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 md:py-5"
        style={{ backgroundColor: "#0a0a0a", borderBottom: open ? "1px solid rgba(255,255,255,0.06)" : "none" }}
      >
        <PeyroLogo theme="dark" showTagline={false} fontSize={22} />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

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

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 top-[57px] z-40 flex flex-col gap-0 md:hidden"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="px-6 py-5 text-lg font-medium text-white border-b transition-colors hover:text-neutral-400"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
