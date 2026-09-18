"use client";

import React, { useState } from "react";
import { Cpu, Layers, Code, Server, Cloud, Database, Brain, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { skillCategories } from "@/data/skills";
import { SkillBadge } from "./SkillBadge";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Languages": <Code className="h-4 w-4" />,
  "Frontend Development": <Layers className="h-4 w-4" />,
  "Backend & Microservices": <Server className="h-4 w-4" />,
  "Cloud & DevOps": <Cloud className="h-4 w-4" />,
  "Databases & Storage": <Database className="h-4 w-4" />,
  "AI/ML & Data Engineering": <Brain className="h-4 w-4" />,
  "Engineering Tools & Practices": <Wrench className="h-4 w-4" />,
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === selectedCategory);

  const totalSkillsCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/60">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Technical Ecosystem"
          title="Battle-Tested Tools &"
          highlight="Engineering Stack"
          description="A comprehensive inventory of languages, frameworks, cloud infrastructure, and databases I actively use."
          icon={Cpu}
        />

        {/* Category Selection Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25"
                : "border border-white/10 bg-slate-900/60 text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span>All Technologies</span>
            <span className="rounded-full bg-slate-800/80 px-1.5 py-0.5 text-[10px] font-mono text-cyan-300">
              {totalSkillsCount}
            </span>
          </button>

          {skillCategories.map((category) => {
            const isSelected = selectedCategory === category.title;
            return (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25"
                    : "border border-white/10 bg-slate-900/60 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {CATEGORY_ICONS[category.title] || <Cpu className="h-3.5 w-3.5" />}
                <span>{category.title}</span>
                <span className="rounded-full bg-slate-800/80 px-1.5 py-0.5 text-[10px] font-mono text-cyan-300">
                  {category.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Categories & Skills Matrix */}
        <div className="space-y-10">
          {displayedCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-white/[0.08] bg-slate-900/30 p-6 sm:p-8 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {CATEGORY_ICONS[cat.title] || <Cpu className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400">{cat.subtitle}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {cat.skills.length} items
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
