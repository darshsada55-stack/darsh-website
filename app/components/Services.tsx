const services = [
  {
    title: "AI Automation Systems",
    description:
      "We map your business and automate the manual work so your team can focus on what matters.",
  },
  {
    title: "Websites & Apps",
    description:
      "Fast, modern digital products built with AI. From landing pages to full applications.",
  },
  {
    title: "AI Consulting",
    description:
      "We study your business and identify exactly where AI can save you time and make you money.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full px-8 py-32 md:py-40"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-5xl font-bold tracking-tight text-white md:text-6xl">
          What We Build.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 rounded-2xl p-8"
              style={{
                backgroundColor: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
