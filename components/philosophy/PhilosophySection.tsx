import React from "react";
import {
  Sparkles,
  Brain,
  Layout,
  Code2,
  CheckCircle2,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassCard } from "@/components/common/GlassCard";
import { devPhilosophy } from "@/data/experience";

const PHILOSOPHY_ICONS: Record<string, React.ElementType> = {
  Brain,
  Layout,
  Code2,
  CheckCircle2,
  Rocket,
  TrendingUp,
};

export function PhilosophySection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Engineering Philosophy"
          title="How I Approach"
          highlight="Software Craftsmanship"
          description="A systematic 6-step methodology for turning ambiguous ideas into resilient, production-grade applications."
          icon={Sparkles}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devPhilosophy.map((step) => {
            const Icon = PHILOSOPHY_ICONS[step.iconName] || Code2;

            return (
              <GlassCard
                key={step.number}
                className="flex flex-col justify-between p-6 sm:p-7 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-cyan-400 font-mono">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Phase {step.number} of 06</span>
                  <span className="text-cyan-400/80">&bull; Core Practice</span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
