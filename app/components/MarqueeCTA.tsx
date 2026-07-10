const phrase = "LET'S WORK TOGETHER";

export default function MarqueeCTA() {
  const repeated = Array.from({ length: 6 }, () => phrase);

  return (
    <a
      href="#contact"
      className="marquee-cta block w-full overflow-hidden py-10 md:py-14"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="flex animate-ticker whitespace-nowrap" style={{ animationDuration: "18s" }}>
        {repeated.map((p, i) => (
          <span
            key={i}
            className="marquee-word mx-6 text-5xl font-bold tracking-tight md:text-7xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {p}
            <span className="text-gradient mx-6">✦</span>
          </span>
        ))}
      </div>
    </a>
  );
}
