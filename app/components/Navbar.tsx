"use client";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <span className="text-white text-base font-medium tracking-tight">
        Aceiro
      </span>

      <ul className="flex items-center gap-8">
        {["Work", "Services", "Contact"].map((label) => (
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
    </nav>
  );
}
