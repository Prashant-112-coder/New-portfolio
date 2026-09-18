export interface Skill {
  name: string;
  icon?: string;
  level: "Advanced" | "Proficient" | "Intermediate";
  description: string;
  badgeColor?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Core algorithmic problem solving & system engineering",
    accent: "from-amber-500 to-orange-500",
    skills: [
      { name: "Java", level: "Advanced", description: "OOP, Data Structures, Collections, Spring architecture, and Backend APIs", badgeColor: "#f89820" },
      { name: "JavaScript", level: "Advanced", description: "Modern ES6+, Asynchronous programming, Event Loop, DOM APIs", badgeColor: "#f7df1e" },
      { name: "TypeScript", level: "Proficient", description: "Strict typing, Generics, Utility types, Component contracts", badgeColor: "#3178c6" },
      { name: "Python", level: "Proficient", description: "FastAPI, Automation, ML data pipelines, PyMuPDF, Scikit-learn", badgeColor: "#3776ab" },
      { name: "SQL", level: "Proficient", description: "Relational queries, Indexing, Schema normalization, Complex joins", badgeColor: "#00758f" },
      { name: "C", level: "Intermediate", description: "Memory management, Pointers, Core low-level computing concepts", badgeColor: "#a8b9cc" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "Modern, reactive, accessible & high-performance UIs",
    accent: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React", level: "Advanced", description: "Component state architecture, Hooks, Context, Virtual DOM optimization", badgeColor: "#61dafb" },
      { name: "Next.js", level: "Proficient", description: "App Router, Server Components, SSR/SSG, Dynamic API routes", badgeColor: "#ffffff" },
      { name: "Tailwind CSS", level: "Advanced", description: "Utility-first CSS, Responsive layouts, Custom design tokens, Micro-animations", badgeColor: "#06b6d4" },
      { name: "HTML5 & CSS3", level: "Advanced", description: "Semantic markup, CSS Grid, Flexbox, Animations, Modern responsive patterns", badgeColor: "#e34f26" },
      { name: "Vite", level: "Proficient", description: "Blazing fast SPA tooling, HMR, Optimized Rollup builds", badgeColor: "#646cff" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    subtitle: "Robust REST services, business logic & distributed architectures",
    accent: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Node.js", level: "Proficient", description: "Non-blocking I/O, Event-driven architecture, NPM ecosystem", badgeColor: "#339933" },
      { name: "Express.js", level: "Proficient", description: "Middleware chaining, REST API development, Authentication handling", badgeColor: "#000000" },
      { name: "FastAPI", level: "Proficient", description: "High-speed Python microservices, Pydantic data validation, OpenAPI docs", badgeColor: "#009688" },
      { name: "REST APIs", level: "Advanced", description: "Resource modeling, Webhooks, HTTP status discipline, Rate limiting", badgeColor: "#2563eb" },
      { name: "Microservices", level: "Intermediate", description: "Decoupled service design, Inter-service communication, Independent deployment", badgeColor: "#8b5cf6" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    subtitle: "Scalable data modeling, caching & ACID compliance",
    accent: "from-green-500 to-emerald-600",
    skills: [
      { name: "MongoDB", level: "Proficient", description: "NoSQL document schemas, Aggregation pipelines, Mongoose ODM", badgeColor: "#47a248" },
      { name: "MongoDB Atlas", level: "Proficient", description: "Cloud database clusters, Automated backups, Monitoring & alerts", badgeColor: "#00ed64" },
      { name: "MySQL", level: "Proficient", description: "Relational modeling, Transactions, Foreign key constraints, Optimizations", badgeColor: "#4479a1" },
      { name: "PostgreSQL", level: "Intermediate", description: "Advanced relational querying, Structured data indexing, Relational integrity", badgeColor: "#336791" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Containerization, Infrastructure as Code & Automated CI/CD",
    accent: "from-violet-500 to-purple-600",
    skills: [
      { name: "Docker", level: "Proficient", description: "Container lifecycle, Dockerfile optimization, Multi-stage builds, Compose", badgeColor: "#2496ed" },
      { name: "GitHub Actions", level: "Proficient", description: "Automated CI/CD pipelines, Test validation, Docker image publishing", badgeColor: "#2088ff" },
      { name: "AWS", level: "Proficient", description: "EC2 provisioning, S3 bucket management, IAM security, Cloud architecture", badgeColor: "#ff9900" },
      { name: "Terraform", level: "Intermediate", description: "Declarative Infrastructure as Code (IaC), State management, Cloud provisioning", badgeColor: "#7b42bc" },
      { name: "Azure", level: "Intermediate", description: "App Services, Resource groups, Virtual machines, Cloud monitoring", badgeColor: "#0078d4" },
      { name: "Linux", level: "Proficient", description: "Shell scripting, Permissions, Process management, Server administration", badgeColor: "#fcc624" },
      { name: "Vercel & Render", level: "Advanced", description: "Zero-config edge deployments, Serverless functions, Webhook integration", badgeColor: "#000000" },
      { name: "Git & GitHub", level: "Advanced", description: "Branching strategies, GitFlow, Rebase/Merge, PR reviews, Collaboration", badgeColor: "#f05032" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "Intelligent LLM integration, Computer Vision & predictive models",
    accent: "from-pink-500 to-rose-600",
    skills: [
      { name: "Gemini API", level: "Proficient", description: "Prompt engineering, Structured output parsing, Multimodal reasoning", badgeColor: "#4285f4" },
      { name: "Scikit-learn", level: "Proficient", description: "Classification, Regression, Cross-validation, Model evaluation metrics", badgeColor: "#f7931e" },
      { name: "PyMuPDF", level: "Proficient", description: "PDF text extraction, Document structure analysis, ATS tokenization", badgeColor: "#d32f2f" },
      { name: "Machine Learning", level: "Proficient", description: "Feature engineering, Data preprocessing, Prediction algorithms", badgeColor: "#10b981" },
      { name: "LLM Integration", level: "Proficient", description: "System prompts, Context management, Embedding-assisted scoring", badgeColor: "#a855f7" },
    ],
  },
  {
    id: "tools",
    title: "Engineering Tools",
    subtitle: "Productivity, API testing, Virtualization & Network diagnostics",
    accent: "from-sky-500 to-indigo-600",
    skills: [
      { name: "VS Code", level: "Advanced", description: "Extensions ecosystem, Debugging, Git integration, Remote containers", badgeColor: "#007acc" },
      { name: "Postman", level: "Proficient", description: "API request collections, Environment variables, Automated endpoint testing", badgeColor: "#ff6c37" },
      { name: "Packet Tracer", level: "Intermediate", description: "Network topology design, Routing protocols, Subnetting simulation", badgeColor: "#005a9c" },
      { name: "VirtualBox", level: "Proficient", description: "Virtual machine orchestration, Linux environment testing", badgeColor: "#183a61" },
      { name: "Jupyter Notebook", level: "Proficient", description: "Data analysis, Model prototyping, Matplotlib visualization", badgeColor: "#f37626" },
    ],
  },
];

export const techLogoStrip = [
  { name: "Java", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "FastAPI", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Tool" },
  { name: "GitHub", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Render", category: "Cloud" },
  { name: "Terraform", category: "DevOps" },
  { name: "Linux", category: "DevOps" },
];
