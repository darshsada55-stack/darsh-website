import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <main
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* Blue glow orb */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(59,130,246,0.07) 45%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-8">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            I Build AI Systems That Work While You Sleep.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-neutral-400">
            I help businesses automate, scale and grow using AI. From
            custom-built apps and websites to full AI systems.
          </p>

          <a
            href="#contact"
            className="mt-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-opacity duration-200 hover:opacity-80"
          >
            Get In Touch
          </a>
        </div>
      </main>

      <About />
      <Services />
    </>
  );
}
