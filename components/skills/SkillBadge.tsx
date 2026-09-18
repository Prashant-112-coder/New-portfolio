import React from "react";
import { Skill } from "@/data/skills";

export function SkillBadge({ skill }: { skill: Skill }) {
  const levelColors: Record<string, string> = {
    Advanced: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    Proficient: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    Intermediate: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    Familiar: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  };

  const badgeStyle = levelColors[skill.level] || "text-cyan-400 border-cyan-500/30 bg-cyan-500/10";

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-slate-900/50 p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-cyan-500/5">
      <div className="flex items-start justify-between gap-2">
        <h5 className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
          {skill.name}
        </h5>
        <span
          className={`rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${badgeStyle}`}
        >
          {skill.level}
        </span>
      </div>

      {skill.description && (
        <p className="mt-2 text-xs text-slate-400 leading-snug">
          {skill.description}
        </p>
      )}

      {/* Progress Bar Indicator */}
      <div className="mt-3 h-1 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            skill.level === "Advanced"
              ? "w-[90%] bg-gradient-to-r from-cyan-400 to-blue-500"
              : skill.level === "Proficient"
              ? "w-[75%] bg-gradient-to-r from-indigo-400 to-cyan-500"
              : "w-[60%] bg-gradient-to-r from-emerald-400 to-teal-500"
          }`}
        />
      </div>
    </div>
  );
}
