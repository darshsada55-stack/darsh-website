"use client";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 md:py-5"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <span className="text-xl font-bold tracking-tight text-white md:text-2xl">
        Aceiro
      </span>

      <ul className="flex items-center gap-6 md:gap-8">
        {["Work", "Services", "Contact"].map((label) => (
          <li key={label}>
            <a
              href={`#${label.toLowerCase()}`}
              className="text-xs text-neutral-400 hover:text-white transition-colors duration-200 md:text-sm"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
