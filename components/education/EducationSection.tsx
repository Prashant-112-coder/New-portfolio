import React from "react";
import { GraduationCap, MapPin, Calendar, CheckCircle2, Award } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassCard } from "@/components/common/GlassCard";
import { educationList } from "@/data/experience";

export function EducationSection() {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Academic Pedigree"
          title="Education &"
          highlight="Foundational Excellence"
          description="Formal academic rigor grounded in computer science principles, distributed systems, and cloud architecture."
          icon={GraduationCap}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <GlassCard
              key={idx}
              className={`flex flex-col justify-between p-7 sm:p-8 ${
                edu.isCurrent
                  ? "border-cyan-500/40 shadow-xl shadow-cyan-500/10"
                  : "border-white/10"
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                      edu.isCurrent
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                        : "bg-slate-800 text-slate-300 border border-white/10"
                    }`}
                  >
                    {edu.isCurrent ? "Currently Pursuing" : "Completed Degree"}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {edu.roleOrDegree}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <Award className="h-4 w-4" />
                  <span>{edu.institutionOrContext}</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-slate-500" />
                  <span>{edu.location}</span>
                </div>

                {/* Summary */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.summary}
                </p>

                {/* Highlights */}
                <div className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Key Focus & Coursework:
                  </span>
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Footer */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {edu.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-cyan-500/20 bg-cyan-500/5 px-2 py-0.5 text-[11px] font-mono text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
