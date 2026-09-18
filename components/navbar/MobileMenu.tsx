"use client";

import React from "react";
import Link from "next/link";
import { X, ExternalLink, Mail } from "lucide-react";
import { socials } from "@/data/socials";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, navLinks, activeSection }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-2xl px-6 py-8 md:hidden transition-all">
      {/* Top Header in Menu */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 font-bold text-white shadow-lg shadow-cyan-500/25 text-base">
            P
          </div>
          <div>
            <span className="font-bold text-white text-base tracking-tight">Prashant</span>
            <span className="text-cyan-400 font-medium text-xs ml-1 block">Full Stack & Cloud</span>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-3 py-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium transition-all ${
                isActive
                  ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{link.name}</span>
              <span className="text-xs text-slate-500 font-mono">#</span>
            </Link>
          );
        })}
      </nav>

      {/* Actions & Socials */}
      <div className="mt-auto space-y-6 pt-6 border-t border-white/10">
        <a
          href={socials.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 active:scale-95 transition-all"
        >
          <span>View Resume</span>
          <ExternalLink className="h-4 w-4" />
        </a>

        <div className="flex items-center justify-center gap-6">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="rounded-full p-2.5 text-slate-400 hover:bg-white/10 hover:text-cyan-400 transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-full p-2.5 text-slate-400 hover:bg-white/10 hover:text-cyan-400 transition-colors"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Send Email"
            className="rounded-full p-2.5 text-slate-400 hover:bg-white/10 hover:text-cyan-400 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
