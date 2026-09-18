import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";
import { GlassCard } from "@/components/common/GlassCard";
import { GithubIcon } from "@/components/common/Icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Prashant Ikkalaki",
    };
  }

  return {
    title: `${project.title} — Case Study | Prashant Ikkalaki`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Architectural Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background glow cones */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-cyan-500/10 blur-[140px]" />

      <article className="relative mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-white transition mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Projects</span>
        </Link>

        {/* Header Hero */}
        <header className="space-y-4 border-b border-white/10 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              {project.category}
            </span>
            {project.secondaryCategories?.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-slate-300"
              >
                {cat}
              </span>
            ))}
            <span className="text-xs font-mono text-slate-500 ml-auto">{project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-mono text-cyan-400 font-medium">
            {project.tagline}
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
            {project.longDescription || project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Inspect Source Repository</span>
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-slate-900/60 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 hover:border-cyan-500/40 hover:text-white transition"
              >
                <ExternalLink className="h-4 w-4 text-cyan-400" />
                <span>Launch Live Interface</span>
              </a>
            )}
          </div>
        </header>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <GlassCard className="p-6 border-red-500/20">
            <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-3">
              <AlertCircle className="h-4 w-4" />
              <span>The Problem Statement</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </GlassCard>

          <GlassCard className="p-6 border-emerald-500/20">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-3">
              <Sparkles className="h-4 w-4" />
              <span>The Engineering Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </GlassCard>
        </div>

        {/* System Architecture Section */}
        {project.architecture && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="h-5 w-5 text-cyan-400" />
              <span>System Architecture & Engineering Flow</span>
            </h2>

            <GlassCard className="p-6 sm:p-8 space-y-6">
              {/* Architecture Tiers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.architecture.frontend && (
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                      Frontend Tier
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300">
                      {project.architecture.frontend}
                    </p>
                  </div>
                )}
                {project.architecture.backend && (
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5">
                    <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-1">
                      Backend & API Tier
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300">
                      {project.architecture.backend}
                    </p>
                  </div>
                )}
                {project.architecture.database && (
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                      Database & Storage
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300">
                      {project.architecture.database}
                    </p>
                  </div>
                )}
                {project.architecture.cloudDevops && (
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5">
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-1">
                      Cloud & DevOps
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300">
                      {project.architecture.cloudDevops}
                    </p>
                  </div>
                )}
              </div>

              {/* Data Flow Steps */}
              {project.architecture.flow && project.architecture.flow.length > 0 && (
                <div className="pt-4 border-t border-white/[0.08]">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                    Runtime Request Flow:
                  </span>
                  <div className="space-y-2">
                    {project.architecture.flow.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-[11px] font-bold border border-cyan-500/30">
                          {idx + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </GlassCard>
          </section>
        )}

        {/* Technical Highlights & Deliverables */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Key Architectural Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.highlights.map((h, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/40 p-4"
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">{h}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Learnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-amber-400" />
              <span>Engineering Challenges</span>
            </h3>
            <ul className="space-y-2">
              {project.challenges.map((c, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                  <span className="text-amber-400">&bull;</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-cyan-400" />
              <span>Key Learnings</span>
            </h3>
            <ul className="space-y-2">
              {project.learnings.map((l, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                  <span className="text-cyan-400">&bull;</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Technology Stack Footer */}
        <section className="mb-14 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
            Technology Stack & Tools Utilized:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-mono text-cyan-300"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Next Project Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="text-xs font-medium text-slate-400 hover:text-white transition"
          >
            &larr; View All Projects
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 transition"
          >
            <span>Next Project: {nextProject.title}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </div>
  );
}
