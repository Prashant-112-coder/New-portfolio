"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { socials } from "@/data/socials";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-md pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06]">
          {/* Column 1: Brand (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 font-bold text-white text-sm">
                P
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Prashant Ikkalaki
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Full Stack Software Engineer & Cloud Developer. Master of Computer Applications (MCA) candidate at PES University, Bengaluru.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${socials.email}`}
                aria-label="Email"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-semibold text-white uppercase tracking-wider text-[11px] block font-mono">
              Quick Navigation
            </span>
            <ul className="space-y-1.5">
              <li>
                <Link href="#about" className="hover:text-cyan-400 transition">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-400 transition">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-cyan-400 transition">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="#devops" className="hover:text-cyan-400 transition">
                  DevOps Pipeline
                </Link>
              </li>
              <li>
                <Link href="#journey" className="hover:text-cyan-400 transition">
                  Education & Journey
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info & Status (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-semibold text-white uppercase tracking-wider text-[11px] block font-mono">
              Status & Location
            </span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-white text-xs">Open for Opportunities</span>
            </div>
            <p className="text-xs text-slate-400">
              Bengaluru, Karnataka, India &middot; Remote / Relocation Ready
            </p>
            <p className="text-[11px] text-cyan-400 font-mono">
              Prashantikkalaki416@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Prashant Ikkalaki. Built with precision and care.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-slate-300 hover:border-cyan-500/40 hover:text-white transition"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
