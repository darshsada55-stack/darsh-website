"use client";

import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

function BrowserFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      className="overflow-hidden rounded-xl"
      style={{ border: "1px solid rgba(255,255,255,0.09)", backgroundColor: "#0a0b0d" }}
    >
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#0e0f12" }}
      >
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#3a3d45" }} />
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#3a3d45" }} />
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#3a3d45" }} />
        <span className="ml-3 text-[9px] tracking-widest text-neutral-600 uppercase">{label}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function DashboardMock() {
  const bars = [42, 68, 35, 82, 55, 92, 64, 75];
  return (
    <BrowserFrame label="ops.peyro.co">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-2 w-20 rounded-full bg-white/15" />
        <div className="flex gap-1.5">
          <div className="h-2 w-8 rounded-full bg-white/8" />
          <div className="h-2 w-8 rounded-full" style={{ backgroundColor: "rgba(125,180,255,0.35)" }} />
        </div>
      </div>
      <div className="flex h-24 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="animate-barGrow flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background: `linear-gradient(180deg, rgba(125,180,255,${0.25 + (h / 100) * 0.5}), rgba(125,180,255,0.08))`,
              animationDelay: `${i * 0.12}s`,
              transformOrigin: "bottom",
            }}
          />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md p-2" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
            <div className="mb-1.5 h-1.5 w-8 rounded-full bg-white/10" />
            <div className="h-2 w-12 rounded-full bg-white/20" />
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

function PipelineMock() {
  return (
    <BrowserFrame label="automation pipeline">
      <div className="flex flex-col gap-3 py-2">
        {[
          { w: "w-24", active: true },
          { w: "w-32", active: true },
          { w: "w-20", active: false },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-3">
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full ${row.active ? "animate-pulseDot" : ""}`}
              style={{
                backgroundColor: row.active ? "rgba(125,180,255,0.9)" : "rgba(255,255,255,0.15)",
              }}
            />
            <div className="relative h-px flex-1 overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
              {row.active && (
                <span
                  className="animate-flowDot absolute top-1/2 h-1 w-6 -translate-y-1/2 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(125,180,255,0.9), transparent)",
                    animationDelay: `${i * 0.6}s`,
                  }}
                />
              )}
            </div>
            <div className={`h-2 ${row.w} rounded-full bg-white/12`} />
          </div>
        ))}
        <div
          className="mt-1 rounded-md px-3 py-2 text-[9px] tracking-widest text-neutral-500 uppercase"
          style={{ backgroundColor: "rgba(125,180,255,0.06)", border: "1px solid rgba(125,180,255,0.15)" }}
        >
          847 tasks automated this week
        </div>
      </div>
    </BrowserFrame>
  );
}

function WebsiteMock() {
  return (
    <BrowserFrame label="client-site.com">
      <div className="flex flex-col gap-3 py-1">
        <div className="flex items-center justify-between">
          <div className="h-2 w-10 rounded-full bg-white/20" />
          <div className="flex gap-2">
            <div className="h-1.5 w-6 rounded-full bg-white/10" />
            <div className="h-1.5 w-6 rounded-full bg-white/10" />
            <div className="h-1.5 w-6 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="mt-2 flex flex-col items-center gap-2 py-3">
          <div className="h-3 w-3/4 rounded-full bg-white/25" />
          <div className="h-3 w-1/2 rounded-full bg-white/15" />
          <div
            className="mt-2 h-6 w-20 rounded-full"
            style={{ background: "linear-gradient(120deg, rgba(125,180,255,0.5), rgba(183,157,255,0.5))" }}
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-10 rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

const projects = [
  {
    tag: "AI Systems",
    title: "Operations Dashboards",
    desc: "Live AI-powered dashboards that watch your business metrics around the clock.",
    Mock: DashboardMock,
  },
  {
    tag: "Automation",
    title: "Workflow Pipelines",
    desc: "End-to-end automations that move data, send follow-ups and close loops while you sleep.",
    Mock: PipelineMock,
  },
  {
    tag: "Web & Product",
    title: "Sites That Sell",
    desc: "Conversion-focused websites and apps, designed and shipped in days — not months.",
    Mock: WebsiteMock,
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="w-full px-6 py-24 md:px-16 md:py-32"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 text-[10px] font-semibold tracking-[0.3em] text-neutral-600 uppercase">
            02 — The Work
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            What We{" "}
            <span className="text-gradient italic" style={{ fontFamily: "var(--font-playfair)" }}>
              Ship.
            </span>
          </h2>
          <p className="mb-16 max-w-lg text-base leading-relaxed text-neutral-500">
            A glimpse of the systems we design and build for our clients.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} className="h-full">
              <TiltCard className="flex h-full flex-col rounded-2xl p-5 md:p-6">
                <p.Mock />
                <div className="mt-6 flex flex-1 flex-col px-1 pb-2">
                  <p className="mb-2 text-[10px] font-semibold tracking-[0.25em] text-neutral-600 uppercase">
                    {p.tag}
                  </p>
                  <h3 className="mb-2 text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-auto text-sm leading-relaxed text-neutral-500">{p.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
