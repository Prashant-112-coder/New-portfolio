"use client";

import React, { useState } from "react";
import {
  Server,
  GitBranch,
  PlayCircle,
  Box,
  Cloud,
  Activity,
  ArrowRight,
  CheckCircle,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassCard } from "@/components/common/GlassCard";

interface PipelineStep {
  id: string;
  number: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  color: string;
  tools: string[];
  summary: string;
  details: {
    title: string;
    description: string;
    highlights: string[];
  };
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: "source",
    number: "01",
    title: "Version Control & Branching",
    badge: "Source Layer",
    icon: GitBranch,
    color: "cyan",
    tools: ["Git", "GitHub", "Trunk-based Dev", "Semantic PRs"],
    summary:
      "Strict commit hygiene with conventional commits, branch protection rules, and automated pull request validations.",
    details: {
      title: "Clean Source Control Strategy",
      description:
        "Every repository maintains clear development-to-main workflows with linear git history, enforcing signed commits, code reviews, and automated secret scanning.",
      highlights: [
        "Feature branches with descriptive prefixes (`feat/`, `fix/`, `chore/`)",
        "Automated secret scanning preventing token leakage in commits",
        "Enforced PR reviews and mandatory status checks before merge",
      ],
    },
  },
  {
    id: "ci",
    number: "02",
    title: "Automated Continuous Integration",
    badge: "CI Automation",
    icon: PlayCircle,
    color: "indigo",
    tools: ["GitHub Actions", "Jest", "ESLint", "Static Analysis"],
    summary:
      "Multi-stage automated test suites executing linting, TypeScript type-checking, and unit tests on every push.",
    details: {
      title: "Fail Fast Continuous Testing",
      description:
        "Pipelines validate each pull request in parallel isolation, catching syntax defects, broken types, and failing tests before any code touches staging.",
      highlights: [
        "Parallel jobs for TypeScript compilation and ESLint verification",
        "Unit & integration test suites preventing regressions",
        "Automated artifact generation and build caching for sub-2-minute runs",
      ],
    },
  },
  {
    id: "container",
    number: "03",
    title: "Docker Containerization",
    badge: "Artifact Layer",
    icon: Box,
    color: "blue",
    tools: ["Docker", "Docker Compose", "Multi-Stage Builds", "Alpine/Slim"],
    summary:
      "Lightweight, reproducible container images crafted with multi-stage builds to strip dev-dependencies and optimize security.",
    details: {
      title: "Optimized Container Packaging",
      description:
        "Containers eliminate the 'works on my machine' paradox. Using multi-stage Dockerfiles drops image footprint by up to 70% while bolstering security with non-root runtime users.",
      highlights: [
        "Multi-stage builds separating build tools from slim production runtimes",
        "Docker Compose orchestration for multi-container local dev stacks",
        "Minimalist base images reducing CVE attack surfaces",
      ],
    },
  },
  {
    id: "cloud",
    number: "04",
    title: "Cloud Infrastructure & Orchestration",
    badge: "Infrastructure",
    icon: Cloud,
    color: "cyan",
    tools: ["AWS (EC2, S3, RDS)", "Vercel Edge", "Kubernetes basics", "Reverse Proxy"],
    summary:
      "Resilient cloud deployment environments configured for high availability, CDN caching, and automated scaling.",
    details: {
      title: "High-Availability Cloud Delivery",
      description:
        "Configuring production infrastructure across AWS and Vercel edge networks, leveraging Nginx reverse proxies, SSL/TLS certificates, and secure VPC subnetting for database tiers.",
      highlights: [
        "AWS EC2 instances paired with Nginx reverse proxy and Let's Encrypt TLS",
        "Managed RDS databases with automatic backups and read replicas",
        "Vercel global edge network routing with sub-50ms static asset delivery",
      ],
    },
  },
  {
    id: "monitoring",
    number: "05",
    title: "Observability & System Health",
    badge: "Operations Layer",
    icon: Activity,
    color: "emerald",
    tools: ["CloudWatch", "Prometheus", "Uptime Alerts", "Structured Logs"],
    summary:
      "24/7 monitoring of server health, response latencies, error budgets, and structured application logs.",
    details: {
      title: "Real-Time Observability & Reliability",
      description:
        "Shipping software is only half the battle. Production workloads require real-time telemetry, structured JSON logging, and immediate alert dispatching on 5xx status spikes.",
      highlights: [
        "Health check endpoints (`/api/health`) reporting DB & cache connectivity",
        "Structured logging facilitating rapid root-cause debugging",
        "Automated alerts on high CPU utilization, memory pressure, or error surges",
      ],
    },
  },
];

export function CloudArchitecture() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PIPELINE_STEPS[activeStepIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section id="devops" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/70">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Cloud & DevOps Engineering"
          title="Interactive CI/CD &"
          highlight="Cloud Deployment Lifecycle"
          description="How I take software from local code commits to resilient, containerized cloud production environments."
          icon={Server}
        />

        {/* Pipeline Progression Bar / Interactive Stepper */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {PIPELINE_STEPS.map((step, idx) => {
            const isCurrent = activeStepIndex === idx;
            const Icon = step.icon;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex flex-col items-start p-4 rounded-xl border transition-all text-left ${
                  isCurrent
                    ? "border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/15"
                    : "border-white/[0.08] bg-slate-900/40 hover:border-white/20 hover:bg-slate-900/70"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    {step.number}
                  </span>
                  <Icon
                    className={`h-4 w-4 ${
                      isCurrent ? "text-cyan-300" : "text-slate-500"
                    }`}
                  />
                </div>
                <span className="text-xs font-bold text-white line-clamp-1">
                  {step.title.split(" ")[0]} {step.title.split(" ")[1] || ""}
                </span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {step.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel */}
        <GlassCard className="p-6 sm:p-8 border-cyan-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Details (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-md shadow-cyan-500/20">
                  <ActiveIcon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Step {activeStep.number} · {activeStep.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {activeStep.details.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStep.details.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  Engineering Principles & Standards:
                </span>
                {activeStep.details.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tools Used Pills */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 mr-2">Tools:</span>
                <div className="inline-flex flex-wrap gap-1.5 mt-2">
                  {activeStep.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Architectural Flow Preview (5 cols) */}
            <div className="lg:col-span-5 rounded-xl border border-white/10 bg-slate-950/80 p-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  <span>pipeline.status.log</span>
                </div>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>

              <div className="space-y-3 text-slate-300">
                <div>
                  <span className="text-slate-500">[INFO]</span> Initializing pipeline stage:{" "}
                  <span className="text-cyan-400 font-bold">{activeStep.title}</span>
                </div>
                <div>
                  <span className="text-slate-500">[SPEC]</span> Target Environment:{" "}
                  <span className="text-yellow-400">Production (AWS Multi-AZ)</span>
                </div>
                <div>
                  <span className="text-slate-500">[EXEC]</span> Running security scans & image verification...
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-white/5 space-y-1.5">
                  <div className="text-emerald-400 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Zero high/critical CVE vulnerabilities</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    Hash: <span className="text-cyan-300">sha256:7f893d9b4c</span> · Verified by CI
                  </div>
                </div>
                <div className="text-slate-500 text-[11px]">
                  Next Stage:{" "}
                  <span className="text-slate-300">
                    {PIPELINE_STEPS[(activeStepIndex + 1) % PIPELINE_STEPS.length].title}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex justify-between items-center">
                <span className="text-[11px] text-slate-500">Stage {activeStepIndex + 1} of 5</span>
                <button
                  onClick={() =>
                    setActiveStepIndex((prev) => (prev + 1) % PIPELINE_STEPS.length)
                  }
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs font-semibold"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
