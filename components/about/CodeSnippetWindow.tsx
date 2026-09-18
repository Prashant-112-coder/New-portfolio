import React from "react";
import { Terminal } from "lucide-react";

export function CodeSnippetWindow() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/90 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-400 font-sans">prashant.engineer.ts</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          <span>zsh</span>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-5 text-slate-300 leading-relaxed overflow-x-auto space-y-1">
        <div>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-cyan-300">prashantIkkalaki</span>:{" "}
          <span className="text-yellow-300">SoftwareEngineer</span> = &#123;
        </div>
        <div className="pl-4">
          <span className="text-slate-400">education:</span> &#123;
        </div>
        <div className="pl-8">
          <span className="text-slate-400">degree:</span>{" "}
          <span className="text-emerald-300">&quot;MCA (Master of Computer Applications)&quot;</span>,
        </div>
        <div className="pl-8">
          <span className="text-slate-400">university:</span>{" "}
          <span className="text-emerald-300">&quot;PES University, Bengaluru&quot;</span>,
        </div>
        <div className="pl-8">
          <span className="text-slate-400">specialization:</span>{" "}
          <span className="text-emerald-300">&quot;Cloud Computing & DevOps&quot;</span>,
        </div>
        <div className="pl-4">&#125;,</div>

        <div className="pl-4">
          <span className="text-slate-400">coreStrengths:</span> [
        </div>
        <div className="pl-8 text-emerald-300">
          &quot;Full Stack Architecture&quot;, &quot;Java Microservices&quot;, &quot;Docker & CI/CD Pipelines&quot;,
        </div>
        <div className="pl-8 text-emerald-300">
          &quot;FastAPI & Python AI Tools&quot;, &quot;Database Tuning (SQL/NoSQL)&quot;
        </div>
        <div className="pl-4">],</div>

        <div className="pl-4">
          <span className="text-slate-400">activeFocus:</span>{" "}
          <span className="text-emerald-300">&quot;Designing resilient distributed systems & intelligent web apps&quot;</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">location:</span>{" "}
          <span className="text-emerald-300">&quot;Bengaluru, India&quot;</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">openForRoles:</span> <span className="text-cyan-400">true</span>,
        </div>
        <div>&#125;;</div>
      </div>
    </div>
  );
}
