import React from "react";

const TECH_ITEMS = [
  { name: "Next.js 15", category: "Full Stack" },
  { name: "React 19", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Java & Spring", category: "Backend" },
  { name: "Python & FastAPI", category: "AI & Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS Cloud", category: "Infrastructure" },
  { name: "Kubernetes", category: "Containerization" },
  { name: "Tailwind CSS", category: "UI System" },
  { name: "PostgreSQL & MySQL", category: "Databases" },
  { name: "MongoDB", category: "NoSQL" },
  { name: "GitHub Actions", category: "CI/CD" },
];

export function TechLogoLoop() {
  return (
    <div className="relative w-full overflow-hidden py-8 border-y border-white/[0.06] bg-slate-950/40 backdrop-blur-sm">
      {/* Left/Right blur mask gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />

      <div className="flex animate-marquee gap-8 items-center">
        {/* First set */}
        {TECH_ITEMS.map((item, idx) => (
          <div
            key={`first-${idx}`}
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md shadow-sm transition hover:border-cyan-500/40 hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
            <span className="font-semibold text-white">{item.name}</span>
            <span className="text-[10px] text-slate-500 font-mono">[{item.category}]</span>
          </div>
        ))}

        {/* Duplicate set for seamless continuous loop */}
        {TECH_ITEMS.map((item, idx) => (
          <div
            key={`second-${idx}`}
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md shadow-sm transition hover:border-cyan-500/40 hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
            <span className="font-semibold text-white">{item.name}</span>
            <span className="text-[10px] text-slate-500 font-mono">[{item.category}]</span>
          </div>
        ))}
      </div>
    </div>
  );
}
