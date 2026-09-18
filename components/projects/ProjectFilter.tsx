import React from "react";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  counts: Record<string, number>;
}

export function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 scale-105"
                : "border border-white/10 bg-slate-900/60 text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span>{cat}</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono ${
                isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
              }`}
            >
              {counts[cat] || 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
