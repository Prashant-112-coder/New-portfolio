"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, FileText, ArrowUpRight } from "lucide-react";
import { socials } from "@/data/socials";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "DevOps", href: "#devops" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/60 px-3.5 py-1.5 backdrop-blur-xl transition hover:border-cyan-500/40 hover:bg-slate-900/80"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 font-bold text-white shadow-md shadow-cyan-500/30 text-sm">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Prashant Ikkalaki
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                Full Stack · Cloud & DevOps
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 backdrop-blur-xl shadow-lg shadow-black/20">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action & Mobile Button */}
          <div className="flex items-center gap-3">
            <a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-xl transition hover:bg-cyan-500/20 hover:border-cyan-400 shadow-[0_0_15px_-3px_rgba(6,182,212,0.2)]"
            >
              <FileText className="h-3.5 w-3.5 text-cyan-400" />
              <span>Resume</span>
              <ArrowUpRight className="h-3 w-3 text-cyan-400" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="md:hidden rounded-full border border-white/10 bg-slate-900/60 p-2 text-slate-300 backdrop-blur-xl hover:text-white hover:border-white/20 transition"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        activeSection={activeSection}
      />
    </>
  );
}
