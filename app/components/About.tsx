export default function About() {
  return (
    <section
      id="about"
      className="w-full px-8 py-32 md:py-40"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="mx-auto max-w-5xl flex flex-col gap-16 md:flex-row md:gap-24">
        <div className="md:w-1/3">
          <h2 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
            About.
          </h2>
        </div>

        <div className="md:w-2/3 flex items-center">
          <p className="text-lg leading-relaxed text-neutral-300 md:text-xl md:leading-relaxed">
            We build AI systems, automate businesses and create digital products
            for companies worldwide. We help brands scale, move faster and
            operate smarter using the power of AI.
          </p>
        </div>
      </div>
    </section>
  );
}
