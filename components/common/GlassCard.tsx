"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "indigo" | "emerald";
  spotlight?: boolean;
}

export function GlassCard({
  children,
  className,
  glowColor = "cyan",
  spotlight = true,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlight || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowRgb = {
    cyan: "6, 182, 212",
    indigo: "99, 102, 241",
    emerald: "16, 185, 129",
  }[glowColor];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-slate-900/40 p-6 backdrop-blur-xl transition-all duration-300 overflow-hidden group",
        "hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/5",
        className
      )}
      {...props}
    >
      {/* Spotlight highlight */}
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${glowRgb}, 0.15), transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
