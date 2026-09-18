import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  icon?: LucideIcon;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  icon: Icon,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md mb-4 shadow-[0_0_15px_-3px_rgba(6,182,212,0.2)]">
        {Icon ? <Icon className="h-3.5 w-3.5 text-cyan-400" /> : <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />}
        <span>{badge}</span>
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}{" "}
        {highlight && (
          <span className="gradient-text-cyan">{highlight}</span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
