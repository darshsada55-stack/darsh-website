import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import HeroGrid from "./components/HeroGrid";

const headline = "We Build AI Systems That Work While You Sleep.".split(" ");

export default function Home() {
  return (
    <>
      <main
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 60%, #0d1a2d 0%, #0a0a0a 70%)" }}
      >
        <HeroGrid />

        <div className="relative z-10 flex max-w-5xl flex-col items-center gap-8 px-2">
          {/* Label */}
          <p className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
            Aceiro — AI Systems &amp; Products
          </p>

          {/* Headline */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {headline.map((word, i) => (
              <span
                key={i}
                className="inline-block mr-[0.22em] animate-fadeInWord"
                style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <p
            className="max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg animate-fadeInWord"
            style={{ animationDelay: `${headline.length * 0.07 + 0.1}s`, opacity: 0 }}
          >
            We help businesses automate, scale and grow using AI. From
            custom-built apps and websites to full AI systems.
          </p>

          {/* CTA button — outlined */}
          <a
            href="#contact"
            className="animate-fadeInWord mt-2 inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-black"
            style={{ animationDelay: `${headline.length * 0.07 + 0.3}s`, opacity: 0 }}
          >
            Get In Touch <span>→</span>
          </a>
        </div>
      </main>

      <About />
      <Services />
      <Process />
      <Contact />
    </>
  );
}
