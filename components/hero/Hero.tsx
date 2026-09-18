"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Sparkles, Server, Code2, Layers } from "lucide-react";
import { socials } from "@/data/socials";
import { GithubIcon } from "@/components/common/Icons";

const ROLES = [
  "Full Stack Web Developer",
  "Cloud & DevOps Engineer",
  "Java & Distributed Systems Developer",
  "AI Solutions Integrator",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Cinematic Ambient Glow Cones */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[800px] rounded-full bg-gradient-to-b from-cyan-500/15 via-indigo-500/10 to-transparent blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/3 -left-48 h-[400px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 -right-48 h-[400px] w-[500px] rounded-full bg-indigo-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-xl shadow-lg shadow-cyan-500/10 mb-8 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-white font-semibold">Available for Engineering Roles</span>
          <span className="text-slate-500">|</span>
          <span className="text-cyan-400 font-mono">MCA @ PES University</span>
        </div>

        {/* Dynamic Name & Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Hi, I&apos;m{" "}
            <span className="gradient-text-cyan underline decoration-cyan-500/30 decoration-wavy decoration-2">
              Prashant Ikkalaki
            </span>
            <br />
            <span className="inline-block mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-200">
              Architecting Resilient{" "}
              <span className="gradient-text-indigo">Software & Cloud Systems</span>
            </span>
          </h1>

          {/* Dynamic Role Rotator */}
          <div className="h-10 flex items-center justify-center">
            <p className="text-lg sm:text-xl font-mono text-cyan-400 flex items-center gap-2">
              <span className="text-slate-500">&gt;</span>
              <span className="font-semibold transition-all duration-500">
                {ROLES[roleIndex]}
              </span>
              <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse" />
            </p>
          </div>

          {/* Descriptive Subtitle */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed pt-2">
            MCA Candidate at <strong className="text-slate-200">PES University, Bengaluru</strong> specializing in Cloud Computing & DevOps.
            I turn complex algorithmic logic into high-uptime web applications, resilient microservices, and automated delivery pipelines.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95"
          >
            <Sparkles className="h-4 w-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
            <span>Explore Featured Systems</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#devops"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-6 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-xl transition hover:border-cyan-500/40 hover:bg-slate-900/80 hover:text-white active:scale-95"
          >
            <Server className="h-4 w-4 text-cyan-400" />
            <span>Interactive DevOps Pipeline</span>
          </Link>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-medium text-slate-300 backdrop-blur-xl transition hover:border-white/30 hover:text-white active:scale-95"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub Repos</span>
          </a>
        </div>

        {/* Key Metrics Bento Pill */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-4 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-white gradient-text-cyan">10+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Production Repositories</div>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-4 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-white gradient-text-indigo">30+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Tools & Technologies</div>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-4 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-white gradient-text-emerald">PES Univ</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Bengaluru MCA 2025–27</div>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-4 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-white text-slate-200">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Tested & Type-Safe Code</div>
          </div>
        </div>
      </div>
    </section>
  );
}
