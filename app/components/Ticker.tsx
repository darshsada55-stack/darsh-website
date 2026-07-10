export default function Ticker() {
  const items = [
    "AI AUTOMATION",
    "WEBSITES & APPS",
    "AI CONSULTING",
    "CUSTOM AI SYSTEMS",
    "DIGITAL PRODUCTS",
    "BUSINESS AUTOMATION",
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden py-6 border-y"
      style={{
        backgroundColor: "#0a0a0a",
        borderColor: "rgba(255,255,255,0.07)",
      }}
    >
      {/* Edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{ background: "linear-gradient(90deg, #0a0a0a, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{ background: "linear-gradient(270deg, #0a0a0a, transparent)" }}
      />

      <div className="flex animate-ticker whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-10 text-sm font-semibold tracking-[0.35em] text-neutral-600"
          >
            {item}
            <span className="text-gradient ml-10">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
