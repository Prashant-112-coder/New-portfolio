import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/common/CustomCursor";
import { NoiseOverlay } from "@/components/common/NoiseOverlay";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { socials } from "@/data/socials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prashant-112-coder.github.io"),
  title: "Prashant Ikkalaki — Full Stack Developer & Cloud Engineer | MCA @ PES University",
  description:
    "Portfolio of Prashant Ikkalaki: Full Stack Software Engineer and Cloud & DevOps Developer. Master of Computer Applications (MCA) at PES University, Bengaluru. Specializing in Next.js, Java, Python FastAPI, Docker, and AWS.",
  keywords: [
    "Prashant Ikkalaki",
    "Full Stack Developer",
    "Cloud Engineer",
    "DevOps Engineer",
    "Java Developer",
    "PES University MCA",
    "Bengaluru Software Engineer",
    "AgroBridge AI",
    "ResumeIQ AI",
    "TripSync",
    "Next.js Portfolio",
    "Docker AWS Portfolio",
  ],
  authors: [{ name: "Prashant Ikkalaki", url: socials.github }],
  creator: "Prashant Ikkalaki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prashant-112-coder.github.io/myportfolio/",
    title: "Prashant Ikkalaki — Full Stack Developer & Cloud Engineer",
    description:
      "Engineering resilient web platforms, distributed microservices, and automated CI/CD cloud pipelines.",
    siteName: "Prashant Ikkalaki Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashant Ikkalaki — Full Stack & Cloud Developer",
    description:
      "Master of Computer Applications (MCA) at PES University, Bengaluru. Explore production systems and cloud pipelines.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prashant Ikkalaki",
    url: "https://prashant-112-coder.github.io/myportfolio/",
    sameAs: [socials.github, socials.linkedin, socials.instagram],
    jobTitle: "Software Engineer & Cloud Developer",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "PES University, Bengaluru",
        department: "Department of Computer Applications (MCA)",
      },
      {
        "@type": "EducationalOrganization",
        name: "Chetana BCA College",
      },
    ],
    knowsAbout: [
      "Full Stack Web Development",
      "Cloud Architecture",
      "DevOps",
      "Docker",
      "AWS",
      "Java",
      "Spring Boot",
      "Next.js",
      "FastAPI",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-white">
        <NoiseOverlay />
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
