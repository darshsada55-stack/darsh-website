import About from "./components/About";
import Founder from "./components/Founder";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import NeuralHero from "./components/NeuralHero";
import Ticker from "./components/Ticker";
import Work from "./components/Work";
import Stats from "./components/Stats";
import MarqueeCTA from "./components/MarqueeCTA";
import Magnetic from "./components/Magnetic";

const line1 = "We Build AI Systems".split(" ");
const line2 = "That Work While You Sleep.".split(" ");
const totalWords = line1.length + line2.length;

export default function Home() {
  return (
    <>
      <main
        className="relative flex flex-col justify-center overflow-hidden px-6 md:px-16"
        style={{
          minHeight: "calc(100svh - var(--nav-h, 64px))",
          background: "radial-gradient(ellipse at 30% 50%, #0d1a2d 0%, #0a0a0a 65%)",
        }}
      >
        <NeuralHero />

        {/* Soft glow orb */}
        <div
          className="pointer-events-none absolute left-[20%] top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-8 pb-20 pt-10">
          {/* Availability badge */}
          <div
            className="animate-fadeInWord flex items-center gap-2.5 rounded-full px-4 py-1.5"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "rgba(255,255,255,0.03)",
              opacity: 0,
            }}
          >
            <span className="animate-pulseDot h-1.5 w-1.5 rounded-full bg-green-400" />
            <span className="text-[11px] font-medium tracking-[0.15em] text-neutral-400 uppercase">
              Available for new projects
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-left text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-8xl lg:text-[6.5rem]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="block">
              {line1.map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-[0.22em] animate-fadeInWord"
                  style={{ animationDelay: `${0.15 + i * 0.08}s`, opacity: 0 }}
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="block">
              {line2.map((word, i) => {
                const isAccent = word === "Sleep.";
                return (
                  <span
                    key={i}
                    className={`inline-block mr-[0.22em] animate-fadeInWord ${isAccent ? "text-gradient italic" : ""}`}
                    style={{ animationDelay: `${0.15 + (line1.length + i) * 0.08}s`, opacity: 0 }}
                  >
                    {word}
                  </span>
                );
              })}
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="max-w-xl text-left text-base leading-relaxed text-neutral-400 sm:text-lg animate-fadeInWord"
            style={{ animationDelay: `${0.15 + totalWords * 0.08 + 0.1}s`, opacity: 0 }}
          >
            We help businesses automate, scale and grow using AI. From
            custom-built apps and websites to full AI systems.
          </p>

          {/* CTAs */}
          <div
            className="animate-fadeInWord mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: `${0.15 + totalWords * 0.08 + 0.25}s`, opacity: 0 }}
          >
            <Magnetic>
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black"
              >
                Get In Touch <span>→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
              >
                See The Work
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Side label */}
        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <span
            className="block text-[10px] tracking-[0.4em] text-neutral-700 uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            PÉYRO — AI Systems &amp; Products © 2026
          </span>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div
            className="animate-scrollHint flex h-9 w-5 items-start justify-center rounded-full pt-1.5"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <span className="block h-1.5 w-px bg-white/50" />
          </div>
        </div>
      </main>

      <Ticker />
      <About />
      <Stats />
      <Work />
      <Services />
      <Process />
      <Founder />
      <MarqueeCTA />
      <Contact />
    </>
  );
}
