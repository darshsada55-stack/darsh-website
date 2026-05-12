import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import HeroGrid from "./components/HeroGrid";

const headline = "We Build AI Systems That Work While You Sleep.".split(" ");

export default function Home() {
  return (
    <>
      <main
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* Animated dot grid */}
        <HeroGrid />

        {/* Blue glow orb */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.06) 45%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 px-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {headline.map((word, i) => (
              <span
                key={i}
                className="inline-block mr-[0.25em] animate-fadeInWord"
                style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg animate-fadeInWord"
            style={{ animationDelay: `${headline.length * 0.08 + 0.1}s`, opacity: 0 }}
          >
            We help businesses automate, scale and grow using AI. From
            custom-built apps and websites to full AI systems.
          </p>

          <a
            href="#contact"
            className="mt-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-opacity duration-200 hover:opacity-80 animate-fadeInWord"
            style={{ animationDelay: `${headline.length * 0.08 + 0.3}s`, opacity: 0 }}
          >
            Get In Touch
          </a>
        </div>
      </main>

      <About />
      <Services />
      <Contact />
    </>
  );
}
