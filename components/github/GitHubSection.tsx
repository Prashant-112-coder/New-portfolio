import React from "react";
import { Star, GitFork, ArrowUpRight, FolderGit2, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassCard } from "@/components/common/GlassCard";
import { socials } from "@/data/socials";
import { GithubIcon } from "@/components/common/Icons";

const PINNED_REPOS = [
  {
    name: "agrobridge",
    description:
      "Satellite imagery, NDVI crop vegetation index calculations, soil metrics, and crop health diagnostic platform.",
    language: "JavaScript / Python",
    langColor: "bg-yellow-400",
    url: "https://github.com/Prashant-112-coder/agrobridge",
    tags: ["FastAPI", "React", "Leaflet", "NDVI"],
  },
  {
    name: "ResumeIQ-AI",
    description:
      "Intelligent resume parser and ATS analyzer utilizing Google Gemini LLM API, PDF text extraction, and skill scoring.",
    language: "Python / React",
    langColor: "bg-blue-400",
    url: "https://github.com/Prashant-112-coder/ResumeIQ-AI",
    tags: ["Gemini 1.5", "FastAPI", "PyMuPDF", "ATS"],
  },
  {
    name: "TripSync",
    description:
      "Real-time collaborative travel itinerary planner, budget tracking, and traveler matching platform.",
    language: "JavaScript / Node.js",
    langColor: "bg-emerald-400",
    url: "https://github.com/Prashant-112-coder/TripSync",
    tags: ["Next.js", "Express", "MongoDB", "Socket.io"],
  },
  {
    name: "payment-gateway",
    description:
      "Razorpay merchant payment checkout integration with HMAC-SHA256 signature verification and order tracking.",
    language: "JavaScript",
    langColor: "bg-yellow-400",
    url: "https://github.com/Prashant-112-coder/payment-gateway",
    tags: ["Razorpay", "Node.js", "Express", "Webhooks"],
  },
  {
    name: "CI-CD416",
    description:
      "Automated continuous integration and deployment pipeline with test automation, Docker packaging, and cloud staging.",
    language: "YAML / Dockerfile",
    langColor: "bg-purple-400",
    url: "https://github.com/Prashant-112-coder/CI-CD416",
    tags: ["GitHub Actions", "Docker", "DevOps", "Testing"],
  },
  {
    name: "bus-booking-management-system",
    description:
      "Enterprise reservation architecture with interactive seat selection, schedule lookups, and ticketing.",
    language: "Java / MySQL",
    langColor: "bg-red-400",
    url: "https://github.com/Prashant-112-coder/bus-booking-management-system",
    tags: ["Java", "Spring Boot", "MySQL", "JSP"],
  },
];

export function GitHubSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Open Source & Code Activity"
          title="Direct From My"
          highlight="GitHub Repositories"
          description="A selection of active public repositories maintained under @Prashant-112-coder."
          icon={FolderGit2}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PINNED_REPOS.map((repo) => (
            <GlassCard
              key={repo.name}
              className="flex flex-col justify-between p-6 hover:border-cyan-500/40 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                    <GithubIcon className="h-4 w-4 text-cyan-400" />
                    <span>Prashant-112-coder</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${repo.name} on GitHub`}
                    className="rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight"
                >
                  {repo.name}
                </a>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {repo.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-slate-800/70 px-2 py-0.5 text-[10px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Language Footer */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className={`h-2.5 w-2.5 rounded-full ${repo.langColor}`} />
                  <span>{repo.language}</span>
                </div>
                <span className="text-[11px] text-slate-500">Public Repo</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* GitHub Profile Banner */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-white border border-white/10 shadow-inner">
              <GithubIcon className="h-7 w-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Prashant-112-coder on GitHub
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Explore commit logs, pull requests, issue trackers, and release artifacts.
              </p>
            </div>
          </div>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-slate-950 font-semibold px-6 py-3 text-xs sm:text-sm hover:bg-slate-200 transition shadow-lg shrink-0 active:scale-95"
          >
            <span>Visit GitHub Profile</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
