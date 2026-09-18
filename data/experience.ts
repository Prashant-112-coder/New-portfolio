export interface TimelineItem {
  period: string;
  roleOrDegree: string;
  institutionOrContext: string;
  location: string;
  type: "Education" | "Experience" | "Milestone";
  summary: string;
  highlights: string[];
  skills: string[];
  isCurrent?: boolean;
}

export const educationList: TimelineItem[] = [
  {
    period: "2025 — 2027",
    roleOrDegree: "Master of Computer Applications (MCA)",
    institutionOrContext: "PES University",
    location: "Bengaluru, Karnataka, India",
    type: "Education",
    summary:
      "Advanced master's program specializing in Cloud Computing, DevOps Engineering, and Distributed Systems at one of India's premier technical universities.",
    highlights: [
      "Specialization: Cloud Computing, DevOps Architecture, and Microservices",
      "Core Courses: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks",
      "Advanced Modules: Cloud Architecture (AWS/Azure), Container Orchestration, Infrastructure as Code, CI/CD Pipelines, AI/ML Engineering",
      "Building production-focused full-stack and cloud projects alongside academic curriculum",
    ],
    skills: ["Cloud Architecture", "DevOps", "Java", "DSA", "Distributed Systems", "Docker", "Kubernetes", "AI/ML"],
    isCurrent: true,
  },
  {
    period: "2022 — 2025",
    roleOrDegree: "Bachelor of Computer Applications (BCA)",
    institutionOrContext: "Chetana BCA & BBA College",
    location: "Vijayapura, Karnataka, India",
    type: "Education",
    summary:
      "Comprehensive undergraduate foundation in computer science fundamentals, full-stack software development, relational database engineering, and networking.",
    highlights: [
      "Graduated with strong foundation in Java Object-Oriented Programming, C, and Web Technologies",
      "Completed practical capstone systems including reservation systems and database-backed applications",
      "Active participant in technical symposiums, coding competitions, and open-source explorations",
    ],
    skills: ["Java", "C Programming", "SQL", "Web Development", "Data Structures", "Networking"],
  },
];

export const experienceMilestones: TimelineItem[] = [
  {
    period: "June 2024 — August 2024",
    roleOrDegree: "Cloud Computing Intern",
    institutionOrContext: "Tech Project & Infrastructure Team",
    location: "Bengaluru, India (Remote / Hybrid)",
    type: "Experience",
    summary:
      "Intensive hands-on internship focusing on cloud infrastructure provisioning, containerization with Docker, and building automated CI/CD workflows.",
    highlights: [
      "Configured containerized application environments utilizing Docker and multi-stage Dockerfiles",
      "Assisted in deploying web services to AWS EC2 instances and managing S3 storage buckets",
      "Implemented automated linting and testing checks using GitHub Actions for collaborative codebases",
      "Gained practical experience with Linux server administration, Bash automation, and network routing",
    ],
    skills: ["Docker", "AWS", "GitHub Actions", "Linux", "CI/CD", "Bash"],
  },
  {
    period: "2024 — Present",
    roleOrDegree: "Full Stack & DevOps Engineering Journey",
    institutionOrContext: "Independent Project Architect & Open Source",
    location: "Bengaluru, India",
    type: "Milestone",
    summary:
      "Engineering end-to-end full-stack systems and cloud solutions across agricultural AI, resume intelligence, collaborative travel, and payment gateways.",
    highlights: [
      "Architected AgroBridge AI: Remote sensing satellite and agronomic intelligence platform with FastAPI and React",
      "Engineered ResumeIQ AI: LLM-powered resume ATS analyzer utilizing Google Gemini API and PyMuPDF",
      "Developed TripSync: Collaborative travel planning and traveler matching platform with MERN stack",
      "Created end-to-end CI/CD pipelines (CI-CD416) with automated testing, container builds, and staging delivery",
      "Implemented secure Razorpay payment gateway integration with HMAC-SHA256 signature verification",
    ],
    skills: ["Next.js", "FastAPI", "React", "Node.js", "MongoDB", "MySQL", "Docker", "Gemini API", "Razorpay"],
    isCurrent: true,
  },
];

export const milestonesList = experienceMilestones;

export const devPhilosophy = [
  {
    number: "01",
    title: "Understand",
    description: "Deconstruct the core problem, user personas, and technical constraints before writing a single line of code.",
    iconName: "Brain",
  },
  {
    number: "02",
    title: "Design",
    description: "Architect clean domain models, modular interfaces, secure API contracts, and intuitive user experiences.",
    iconName: "Layout",
  },
  {
    number: "03",
    title: "Build",
    description: "Write clean, strongly typed, self-documenting code with reusable components and decoupled services.",
    iconName: "Code2",
  },
  {
    number: "04",
    title: "Test",
    description: "Validate functionality, boundary edge cases, security vulnerabilities, and accessibility compliance.",
    iconName: "CheckCircle2",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Automate container builds, cloud infrastructure provisioning, and continuous delivery pipelines.",
    iconName: "Rocket",
  },
  {
    number: "06",
    title: "Improve",
    description: "Measure real-world telemetry, gather user feedback, profile bottlenecks, and iterate continuously.",
    iconName: "TrendingUp",
  },
];
