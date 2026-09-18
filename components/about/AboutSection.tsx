import React from "react";
import { User, GraduationCap, Cloud, Cpu, Terminal, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassCard } from "@/components/common/GlassCard";
import { CodeSnippetWindow } from "./CodeSnippetWindow";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="About Me"
          title="Bridging Theoretical Foundations with"
          highlight="Production Engineering"
          description="A look inside my background, engineering philosophy, and what drives me to architect robust software."
          icon={User}
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Story Card (7 cols) */}
          <GlassCard className="lg:col-span-7 flex flex-col justify-between p-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
                <GraduationCap className="h-4 w-4" />
                <span>PES University · Master of Computer Applications (2025–2027)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Building Software That Scales With Predictable Reliability
              </h3>

              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a passionate software engineer currently pursuing my <strong>MCA at PES University, Bengaluru</strong>, specializing in <strong>Cloud Computing and DevOps Engineering</strong>. Prior to PES, I earned my BCA from Chetana College, building a solid computer science and programming bedrock.
                </p>
                <p>
                  My engineering journey is driven by practical problem solving: from building intelligent satellite-backed platforms for agriculture (<strong>AgroBridge AI</strong>) to automated ATS analysis tools (<strong>ResumeIQ-AI</strong>), collaborative trip platforms (<strong>TripSync</strong>), and full-scale payment gateways with webhook security.
                </p>
                <p>
                  I don&apos;t just build user interfaces; I design the entire system—containerizing microservices with Docker, orchestrating CI/CD deployment pipelines, and managing relational databases with strict ACID guarantees.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-cyan-400">Bengaluru</span>
                <span className="text-xs text-slate-400">Tech Hub Base</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-indigo-400">Cloud & DevOps</span>
                <span className="text-xs text-slate-400">Core Focus</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-emerald-400">Full Stack</span>
                <span className="text-xs text-slate-400">Production Ready</span>
              </div>
            </div>
          </GlassCard>

          {/* Interactive Code Window (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <CodeSnippetWindow />
          </div>

          {/* Value Bento Highlights (3 equal cols) */}
          <GlassCard className="lg:col-span-4 p-6 hover:border-cyan-500/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Cloud className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-white text-base">Cloud Native by Default</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every system is built container-ready using Docker, automated via GitHub Actions, and prepared for seamless cloud orchestration on AWS.
            </p>
          </GlassCard>

          <GlassCard className="lg:col-span-4 p-6 hover:border-indigo-500/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Cpu className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-white text-base">Distributed Backend Depth</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Proficient in Java Spring Boot, FastAPI, and Node.js with rigorous attention to API latency, concurrency, schema integrity, and security.
            </p>
          </GlassCard>

          <GlassCard className="lg:col-span-4 p-6 hover:border-emerald-500/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Terminal className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-white text-base">End-to-End Ownership</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              From database schema migration and frontend micro-interactions to production CI/CD test automation and monitoring, I own the lifecycle.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
