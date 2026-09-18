import React from "react";
import { Hero } from "@/components/hero/Hero";
import { TechLogoLoop } from "@/components/hero/TechLogoLoop";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { CloudArchitecture } from "@/components/cloud/CloudArchitecture";
import { EducationSection } from "@/components/education/EducationSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { PhilosophySection } from "@/components/philosophy/PhilosophySection";
import { GitHubSection } from "@/components/github/GitHubSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Infinite Tech Marquee Loop */}
      <TechLogoLoop />

      {/* 3. About & Story Bento */}
      <AboutSection />

      {/* 4. Filterable Projects Gallery */}
      <ProjectsSection />

      {/* 5. Interactive Cloud & DevOps CI/CD Pipeline */}
      <CloudArchitecture />

      {/* 6. Technical Skills Ecosystem */}
      <SkillsSection />

      {/* 7. Academic Pedigree & Education */}
      <EducationSection />

      {/* 8. Hands-on Experience & Timeline */}
      <ExperienceSection />

      {/* 9. Engineering Philosophy */}
      <PhilosophySection />

      {/* 10. Direct GitHub Repositories Showcase */}
      <GitHubSection />

      {/* 11. Contact & Connect */}
      <ContactSection />
    </div>
  );
}
