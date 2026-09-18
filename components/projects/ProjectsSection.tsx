"use client";

import React, { useState } from "react";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { socials } from "@/data/socials";

const CATEGORIES = ["All", "Full Stack", "AI/ML", "Cloud & DevOps", "Java", "Backend"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const counts: Record<string, number> = {
    All: projects.length,
  };

  CATEGORIES.forEach((cat) => {
    if (cat !== "All") {
      counts[cat] = projects.filter(
        (p) => p.category === cat || p.secondaryCategories?.includes(cat)
      ).length;
    }
  });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeCategory ||
            p.secondaryCategories?.includes(activeCategory)
        );

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Featured Engineering Work"
          title="Architected Systems &"
          highlight="Production Applications"
          description="Real-world projects highlighting end-to-end full stack craftsmanship, cloud deployments, and distributed systems."
          icon={FolderGit2}
        />

        {/* Filter Navigation */}
        <ProjectFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={counts}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* GitHub Repositories Link CTA */}
        <div className="mt-14 text-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-6 py-3 text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-white transition-all shadow-md hover:shadow-cyan-500/10"
          >
            <span>Explore All 15+ Repositories on GitHub (@Prashant-112-coder)</span>
            <ArrowUpRight className="h-4 w-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
