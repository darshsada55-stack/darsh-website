"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const founders = [
  { name: "Darsh Sadarangani", role: "Founder & CEO" },
  { name: "Avnee Singh", role: "Co-Founder", contact: "+44 7824 061192" },
];

export default function Founder() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      className="w-full px-6 py-20 md:px-16 md:py-28"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
      >
        <p className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-neutral-600 uppercase">
          The Team
        </p>
        <h2 className="mb-14 text-3xl font-bold tracking-tight text-white md:text-5xl">
          The Founders.
        </h2>

        <div className="grid grid-cols-1 gap-px md:grid-cols-2" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          {founders.map((f) => (
            <div
              key={f.name}
              className="flex flex-col gap-2 p-8 md:p-10"
              style={{ backgroundColor: "#0d0d0d" }}
            >
              <p className="text-2xl font-bold text-white md:text-3xl">{f.name}</p>
              <p className="text-sm text-neutral-500">{f.role}, PÉYRO</p>
              {f.contact && (
                <p className="mt-1 text-sm text-neutral-600">{f.contact}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
