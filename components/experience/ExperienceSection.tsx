import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassCard } from "@/components/common/GlassCard";
import { milestonesList } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/40">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          badge="Engineering Milestones"
          title="Practical Experience &"
          highlight="Key Initiatives"
          description="A timeline of hands-on internship experience, architectural initiatives, and system buildouts."
          icon={Briefcase}
        />

        <div className="relative border-l border-cyan-500/20 ml-4 sm:ml-8 space-y-12">
          {milestonesList.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </div>

              <GlassCard className="p-6 sm:p-7 group-hover:border-cyan-500/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 text-xs font-semibold text-cyan-300">
                      {item.type}
                    </span>
                    {item.isCurrent && (
                      <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                        Ongoing
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.roleOrDegree}
                </h3>
                <div className="text-sm font-medium text-cyan-400 mt-0.5">
                  {item.institutionOrContext}
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 mt-1 mb-4">
                  <MapPin className="h-3 w-3" />
                  <span>{item.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-1.5 pt-3 border-t border-white/[0.06]">
                  {item.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Chips */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/5 bg-slate-800/60 px-2 py-0.5 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
