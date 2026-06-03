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
      className="w-full overflow-hidden py-5 border-y"
      style={{
        backgroundColor: "#0a0a0a",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-xs font-semibold tracking-[0.3em] text-neutral-600"
          >
            {item}
            <span className="ml-8 text-neutral-800">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
