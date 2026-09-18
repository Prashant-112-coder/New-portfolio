import React from "react";
import Link from "next/link";
import { Terminal, ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4 text-center">
      {/* Background glow */}
      <div className="pointer-events-none fixed top-1/3 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-md space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono text-cyan-300">
          <Terminal className="h-3.5 w-3.5" />
          <span>HTTP 404: RESOURCE_NOT_FOUND</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight font-mono">
          4<span className="gradient-text-cyan">0</span>4
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-200">
          Route Not Deployed on This Cluster
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          The requested endpoint does not exist or has been redeployed to another ingress path. Return to home to explore the portfolio.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition"
          >
            <Home className="h-4 w-4" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
