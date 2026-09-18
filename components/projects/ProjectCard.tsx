import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowUpRight, CheckCircle2, Star, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";
import { GlassCard } from "@/components/common/GlassCard";
import { GithubIcon } from "@/components/common/Icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard className="flex flex-col justify-between p-6 sm:p-7 hover:border-cyan-500/40 transition-all duration-300">
      <div>
        {/* Top Badges & Meta */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-medium text-cyan-300">
              {project.category}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">
                <Sparkles className="h-3 w-3" />
                Featured
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-slate-500">{project.year}</span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm font-medium text-cyan-400/90 font-mono">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
          {project.highlights.slice(0, 2).map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{h}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/5 bg-slate-800/60 px-2 py-1 text-[11px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="rounded-md border border-white/5 bg-slate-800/40 px-1.5 py-1 text-[10px] font-mono text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>Case Study</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <div className="flex items-center gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 hover:bg-white/10 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Source code of ${project.title} on GitHub`}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-cyan-500/40 hover:text-white transition-colors"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
