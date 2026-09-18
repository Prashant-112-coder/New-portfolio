"use client";

import React, { useState } from "react";
import { Mail, MapPin, Copy, Check, Globe, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassCard } from "@/components/common/GlassCard";
import { socials } from "@/data/socials";
import { ContactForm } from "./ContactForm";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "@/components/common/Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something"
          highlight="Exceptional Together"
          description="Interested in software engineering roles, cloud collaborations, or discussing distributed systems? Reach out anytime."
          icon={MessageSquare}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-6">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-2">
                Direct Communication
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Start a Conversation
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Whether you have an engineering role opening, a project requiring cloud architecture, or want to connect on developer topics, my inbox is always open.
              </p>

              {/* Copyable Email Box */}
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-cyan-200 truncate">
                    {socials.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="rounded-lg bg-cyan-500/20 p-2 text-cyan-300 hover:bg-cyan-500/30 transition shrink-0"
                  aria-label="Copy Email Address"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="mt-4 flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </GlassCard>

            {/* Social Network Connect Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/40 p-4 text-slate-300 hover:border-cyan-500/40 hover:text-white hover:bg-slate-900/80 transition"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <LinkedinIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">LinkedIn</span>
                  <span className="text-[11px] text-slate-500">Connect</span>
                </div>
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/40 p-4 text-slate-300 hover:border-cyan-500/40 hover:text-white hover:bg-slate-900/80 transition"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                  <GithubIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">GitHub</span>
                  <span className="text-[11px] text-slate-500">Follow Code</span>
                </div>
              </a>

              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/40 p-4 text-slate-300 hover:border-cyan-500/40 hover:text-white hover:bg-slate-900/80 transition"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">Instagram</span>
                  <span className="text-[11px] text-slate-500">Social Feed</span>
                </div>
              </a>

              <a
                href={socials.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/40 p-4 text-slate-300 hover:border-cyan-500/40 hover:text-white hover:bg-slate-900/80 transition"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">Live URL</span>
                  <span className="text-[11px] text-slate-500">GitHub Pages</span>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <GlassCard className="lg:col-span-7 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Drop a note below and I will respond to your inquiry within 24 hours.
            </p>
            <ContactForm />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
