export interface Project {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "Full Stack" | "AI/ML" | "Cloud & DevOps" | "Java" | "Frontend" | "Backend";
  secondaryCategories: string[];
  technologies: string[];
  image: string;
  gallery: string[];
  github: string;
  live?: string;
  featured: boolean;
  year: string;
  highlights: string[];
  problem: string;
  solution: string;
  architecture: {
    frontend?: string;
    backend?: string;
    database?: string;
    cloudDevops?: string;
    flow: string[];
  };
  challenges: string[];
  learnings: string[];
  stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    title: "AgroBridge AI",
    slug: "agrobridge-ai",
    tagline: "Satellite & AI-Powered Smart Agriculture Intelligence Platform",
    description:
      "A smart farming intelligence platform that combines multi-spectral satellite imagery, soil metrics, weather feeds, and AI models to help farmers monitor vegetation health and make data-driven decisions.",
    longDescription:
      "AgroBridge AI addresses one of modern agriculture's biggest challenges: delayed detection of crop distress. By fusing remote sensing satellite imagery with real-time agronomic data, it computes Normalized Difference Vegetation Index (NDVI) values, predicts moisture stress, and delivers actionable advisory reports directly to farmers through an intuitive dashboard.",
    category: "Full Stack",
    secondaryCategories: ["AI/ML", "Cloud & DevOps"],
    technologies: ["JavaScript", "React", "Python", "FastAPI", "Leaflet", "Scikit-learn", "Docker"],
    image: "/projects/agrobridge-cover.svg",
    gallery: [
      "/projects/agrobridge-cover.svg",
      "/projects/agrobridge-dash.svg",
      "/projects/agrobridge-map.svg",
    ],
    github: "https://github.com/Prashant-112-coder/agrobridge",
    live: "https://agrobridge.vercel.app",
    featured: true,
    year: "2025",
    highlights: [
      "Automated NDVI calculation from multi-spectral imagery to detect vegetation anomalies",
      "Interactive geo-spatial map interface displaying field zones and soil condition overlays",
      "FastAPI microservice handling asynchronous analytical computations and weather integrations",
      "Dockerized deployment architecture ensuring consistent cross-environment testing",
    ],
    problem:
      "Small and mid-scale farmers lack access to expensive agricultural consulting and remote sensing technologies. Physical inspection across acres is labor-intensive and frequently misses early signs of nitrogen deficiency, pest infestation, or irrigation failures.",
    solution:
      "AgroBridge AI democratizes precision agriculture by ingesting public satellite datasets and weather telemetry, computing vegetation stress metrics through a Python-based processing pipeline, and presenting intuitive recommendations in a clean responsive interface.",
    architecture: {
      frontend: "React with Leaflet Maps, Tailwind CSS, and Chart.js telemetry charts",
      backend: "FastAPI asynchronously processing agricultural algorithms and coordinate queries",
      database: "MongoDB storing farm coordinates, historical NDVI records, and user preferences",
      cloudDevops: "Docker containerization and cloud orchestration",
      flow: [
        "Farmer enters farm coordinates / polygon boundary on interactive map",
        "Backend fetches satellite imagery and weather telemetry for the targeted zone",
        "Python analytics engine computes NDVI and soil moisture indices",
        "Dashboard highlights stressed zones with color-coded alerts and actionable guidance",
      ],
    },
    challenges: [
      "Processing satellite raster data efficiently without blocking client requests",
      "Handling coordinate transformations and geo-spatial bounding boxes for custom farm boundaries",
      "Designing a high-contrast UI that remains legible under direct sunlight on mobile devices in the field",
    ],
    learnings: [
      "Hands-on experience with remote sensing calculations (NDVI formulas and spectral band math)",
      "Building high-performance async endpoints in FastAPI using background tasks",
      "Containerizing Python data services with Docker for effortless reproducibility",
    ],
    stats: [
      { label: "Imagery Sources", value: "Multi-band" },
      { label: "Analysis Latency", value: "< 1.8s" },
      { label: "Target Domain", value: "Precision Agritech" },
    ],
  },
  {
    title: "ResumeIQ AI",
    slug: "resumeiq-ai",
    tagline: "Intelligent ATS Resume Analyzer & Skills Gap Diagnosis Engine",
    description:
      "An automated career-readiness platform utilizing Google Gemini LLM and PyMuPDF to parse candidate resumes, compare them against target job descriptions, and evaluate ATS compatibility with deep scoring.",
    longDescription:
      "ResumeIQ AI eliminates the guesswork from technical job hunting. Candidates upload their resumes in PDF format, and the engine uses PyMuPDF to extract text tokens and document structure. The system prompts Google Gemini 1.5 with structured schemas to generate comprehensive ATS compatibility scores, pinpoint missing keywords, critique formatting, and recommend high-impact bullet improvements.",
    category: "AI/ML",
    secondaryCategories: ["Full Stack", "Backend"],
    technologies: ["React", "FastAPI", "Python", "Gemini API", "PyMuPDF", "Tailwind CSS"],
    image: "/projects/resumeiq-cover.svg",
    gallery: [
      "/projects/resumeiq-cover.svg",
      "/projects/resumeiq-score.svg",
      "/projects/resumeiq-breakdown.svg",
    ],
    github: "https://github.com/Prashant-112-coder/ResumeIQ-AI",
    featured: true,
    year: "2025",
    highlights: [
      "Reliable PDF text parsing and section segmentation utilizing PyMuPDF engine",
      "Direct integration with Google Gemini API using structured JSON schema constraints",
      "Interactive radial score gauges for formatting, keyword density, and technical match",
      "Instant action items with specific phrasing suggestions to bypass automated ATS filters",
    ],
    problem:
      "Modern Applicant Tracking Systems (ATS) reject over 70% of resumes before a human recruiter ever sees them due to formatting parsing errors, lack of contextual keywords, or mismatched phrasing.",
    solution:
      "ResumeIQ AI simulates ATS parsing algorithms and layers Gemini LLM evaluation on top, providing job seekers with an immediate score, a breakdown of missing skills for specific roles, and actionable rewrites.",
    architecture: {
      frontend: "React SPA with drag-and-drop file uploader and animated scoring visualizers",
      backend: "FastAPI REST API handling file uploads, extraction streams, and Gemini LLM calls",
      database: "In-memory caching for session results with optional persistent profile exports",
      cloudDevops: "Render backend deployment with environment secrets management",
      flow: [
        "User uploads resume PDF and pastes targeted Job Description",
        "PyMuPDF extracts raw text, font hierarchies, and bullet points",
        "FastAPI constructs a multi-shot prompt with strict JSON schema response requirements",
        "Gemini API computes match scores, missing tech keywords, and bullet point enhancements",
        "React frontend renders interactive score cards, skill radars, and copyable recommendations",
      ],
    },
    challenges: [
      "Handling multi-column resume PDF layouts where standard text extractors scramble line order",
      "Engineering resilient system prompts to ensure Gemini consistently returns valid strict JSON",
      "Preventing timeouts when processing dense multi-page CVs alongside extensive job postings",
    ],
    learnings: [
      "Deep understanding of LLM prompt engineering, temperature tuning, and schema validation",
      "Document parsing nuances across diverse PDF generator formats",
      "Building seamless client-side upload UX with real-time status steps",
    ],
    stats: [
      { label: "Extraction Speed", value: "< 800ms" },
      { label: "Analysis Engine", value: "Gemini + PyMuPDF" },
      { label: "Accuracy Target", value: "98% Schema Match" },
    ],
  },
  {
    title: "TripSync (TravelMate)",
    slug: "tripsync",
    tagline: "Collaborative Trip Planning & Traveler Matching Network",
    description:
      "A modern collaborative travel platform designed for solo adventurers and groups to discover travel companions, plan synchronized daily itineraries, split expenses, and coordinate journeys.",
    longDescription:
      "TripSync redefines travel coordination by blending social matching with robust travel itinerary management. Users can create upcoming trip plans, declare destination preferences, set budget tiers, and find verified co-travelers heading to the same destinations. Built with an intuitive drag-and-drop daily schedule planner and real-time messaging.",
    category: "Full Stack",
    secondaryCategories: ["Frontend", "Backend"],
    technologies: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/tripsync-cover.svg",
    gallery: [
      "/projects/tripsync-cover.svg",
      "/projects/tripsync-itinerary.svg",
      "/projects/tripsync-cards.svg",
    ],
    github: "https://github.com/Prashant-112-coder/TripSync",
    featured: true,
    year: "2025",
    highlights: [
      "Collaborative itinerary builder with day-by-day activity timelines and destination tags",
      "Matchmaking algorithm pairing travelers based on shared travel dates, destinations, and pace",
      "Interactive trip cards featuring destination previews, estimated budgets, and member slots",
      "Full REST API backend with secure JWT authentication and MongoDB aggregation",
    ],
    problem:
      "Planning group trips is notorious for disorganized WhatsApp group chats, lost spreadsheet links, and misaligned budgets. Additionally, solo travelers struggle to find safe, compatible companions for shared transit.",
    solution:
      "TripSync consolidates trip discovery, companion matchmaking, and day-by-day scheduling into one synchronized web application with structured trip cards, budget estimates, and direct member communication.",
    architecture: {
      frontend: "React with modular trip cards, search filters, and responsive mobile-first views",
      backend: "Node.js & Express REST API with modular routers and token-based auth",
      database: "MongoDB schemas for Trips, Users, ItineraryItems, and JoinRequests",
      cloudDevops: "Vercel frontend with Render backend deployment",
      flow: [
        "User registers and sets travel style, destination bucket list, and verification info",
        "Creator publishes a trip with dates, route stops, max slots, and estimated expenses",
        "Travelers browse and filter trips by destination, duration, or budget",
        "Accepted participants gain collaborative access to edit the daily timeline",
      ],
    },
    challenges: [
      "Managing concurrent itinerary updates without state conflicts",
      "Designing complex nested MongoDB document schemas for flexible multi-day schedules",
      "Creating an intuitive responsive card layout that looks appealing across phone and desktop",
    ],
    learnings: [
      "Advanced MongoDB relational referencing and population pipelines",
      "Secure user authentication flow using HTTP-only cookies and JWT tokens",
      "Component-driven design architecture for reusable card and modal systems",
    ],
    stats: [
      { label: "Database", value: "MongoDB Atlas" },
      { label: "API Endpoints", value: "18+ Routes" },
      { label: "Architecture", value: "Full Stack MERN" },
    ],
  },
  {
    title: "Razorpay Payment Gateway Integration",
    slug: "razorpay-payment-gateway",
    tagline: "End-to-End Secure Transaction Checkout & Webhook Pipeline",
    description:
      "A production-grade e-commerce checkout integration demonstrating Razorpay API order creation, client-side checkout popup handling, cryptographic signature verification, and automated transaction ledger updates.",
    longDescription:
      "Security and atomic consistency are paramount in financial transactions. This project implements a secure payment processing pipeline using Razorpay's developer APIs. It encapsulates server-side order generation, modal checkout handling, HMAC SHA-256 cryptographic signature validation on payment callbacks, and instant receipt dispatch.",
    category: "Full Stack",
    secondaryCategories: ["Backend", "Cloud & DevOps"],
    technologies: ["JavaScript", "Node.js", "Express.js", "Razorpay SDK", "Crypto", "HTML5", "CSS3"],
    image: "/projects/payment-cover.svg",
    gallery: [
      "/projects/payment-cover.svg",
      "/projects/payment-checkout.svg",
      "/projects/payment-receipt.svg",
    ],
    github: "https://github.com/Prashant-112-coder/payment-gateway",
    live: "https://github.com/Prashant-112-coder/razorpay_backend",
    featured: true,
    year: "2024",
    highlights: [
      "Server-side Razorpay Order ID creation preventing client-side amount tampering",
      "HMAC SHA-256 cryptographic signature verification protecting against replay attacks",
      "Clean payment status dashboard showing transaction ID, payment method, and receipts",
      "Resilient error handling with retry options and detailed user status messaging",
    ],
    problem:
      "Naive payment implementations often trust client-side prices, creating critical security vulnerabilities where malicious actors manipulate DOM values to purchase items for negligible amounts.",
    solution:
      "Built a secure multi-phase checkout architecture where orders are strictly initiated server-side, checked against database catalogs, and validated with webhook HMAC verification before granting fulfillment.",
    architecture: {
      frontend: "Clean payment initiation modal interfacing with Razorpay Checkout JS",
      backend: "Node.js/Express backend coordinating with Razorpay Orders API and crypto verification",
      database: "Transaction ledger logging order_id, payment_id, status, and timestamps",
      cloudDevops: "Automated environment variables for Razorpay Key ID and Secret keys",
      flow: [
        "Client requests checkout for selected catalog item",
        "Server creates order with exact currency amount using Razorpay SDK and returns order_id",
        "Client opens Razorpay popup and user completes UPI/Card transaction",
        "Razorpay passes payment_id and signature back to client",
        "Server validates razorpay_order_id + razorpay_payment_id against razorpay_signature via HMAC-SHA256",
        "Database marks transaction as captured and issues digital invoice",
      ],
    },
    challenges: [
      "Preventing man-in-the-middle tampering of transaction amounts",
      "Debugging timing issues between frontend checkout callback and backend webhook deliveries",
      "Handling edge-case dropoffs where the user closes the modal mid-transaction",
    ],
    learnings: [
      "Cryptographic signature verification using Node.js crypto module",
      "Best practices for PCI-DSS compliance and zero credential leakage in frontend builds",
      "Designing graceful fallback and idempotency strategies for payment webhooks",
    ],
    stats: [
      { label: "Security", value: "HMAC-SHA256" },
      { label: "Verification", value: "Server-side" },
      { label: "Payment Modes", value: "UPI, Cards, NetBanking" },
    ],
  },
  {
    title: "Bus Ticket Booking Management System",
    slug: "bus-booking-system",
    tagline: "Enterprise Transit Reservation & Fleet Scheduling System",
    description:
      "A complete enterprise transit booking platform featuring interactive graphical seat selection, multi-city route scheduling, passenger management, and ticket PDF generation.",
    longDescription:
      "Developed to streamline intercity transit operations, this management system provides both customer reservation workflows and administrator fleet controls. Passengers can search routes by origin, destination, and travel date, view an interactive bus seat layout, select available seats, input passenger manifests, and generate printable e-tickets.",
    category: "Java",
    secondaryCategories: ["Full Stack", "Backend"],
    technologies: ["Java", "JSP / Servlets", "MySQL", "JDBC", "HTML5", "CSS3", "JavaScript"],
    image: "/projects/bus-cover.svg",
    gallery: [
      "/projects/bus-cover.svg",
      "/projects/bus-seats.svg",
      "/projects/bus-ticket.svg",
    ],
    github: "https://github.com/Prashant-112-coder/bus-booking-management-system",
    featured: true,
    year: "2024",
    highlights: [
      "Interactive 2D visual bus layout displaying booked, reserved, and available seats",
      "Relational MySQL database schema with transaction isolation to prevent double bookings",
      "Administrative dashboard for bus route creation, price tiering, and schedule management",
      "Instant passenger booking confirmation and ticket download functionality",
    ],
    problem:
      "Legacy bus booking offices suffer from communication lag, leading to accidental double-booking of seats, static pricing, and inefficient route schedule tracking.",
    solution:
      "Engineered an automated Java web application with real-time seat lock mechanisms, relational database constraints, and self-service passenger booking flows.",
    architecture: {
      frontend: "Dynamic HTML5/CSS3 seat grid with interactive JavaScript state handlers",
      backend: "Java Servlets & MVC controller handling business logic and booking transactions",
      database: "MySQL with normalized tables (Buses, Routes, Bookings, Passengers, Seats)",
      cloudDevops: "Apache Tomcat server environment with automated JDBC connection pooling",
      flow: [
        "Passenger selects departure city, arrival city, and travel date",
        "System queries active route schedules and displays available buses with prices",
        "User clicks into bus layout and selects specific seat numbers",
        "System locks selected seats and gathers passenger manifest details",
        "Payment is verified, MySQL database commits transaction, and ticket is generated",
      ],
    },
    challenges: [
      "Preventing race conditions when two users select the same seat simultaneously",
      "Designing complex SQL queries with joins across 5 tables for route availability",
      "Building a responsive seat layout that mirrors real 2x2 and 2x1 sleeper bus dimensions",
    ],
    learnings: [
      "Java OOP principles, MVC pattern, and Servlet lifecycle",
      "Database transaction management (ACID guarantees, rollback on failure)",
      "State preservation and session tracking in Java web applications",
    ],
    stats: [
      { label: "Core Engine", value: "Java & MySQL" },
      { label: "Concurrency", value: "Transaction-safe" },
      { label: "Interface", value: "Interactive Seatmap" },
    ],
  },
  {
    title: "Automated CI/CD DevOps Pipeline (CI-CD416)",
    slug: "ci-cd-pipeline",
    tagline: "Multi-Branch Automated Testing, Docker Packaging & Cloud Delivery",
    description:
      "A complete Continuous Integration and Continuous Deployment infrastructure pipeline built with GitHub Actions, Docker containerization, automated linting/testing, and cloud staging deployment.",
    longDescription:
      "This project showcases professional DevOps automation for modern microservice codebases. Every commit or pull request initiates an automated pipeline that validates code quality, executes unit and integration test suites, builds optimized multi-stage Docker images, scans containers for vulnerabilities, and triggers deployment to staging environments.",
    category: "Cloud & DevOps",
    secondaryCategories: ["Backend"],
    technologies: ["GitHub Actions", "Docker", "Python", "Linux", "Git", "AWS", "Bash"],
    image: "/projects/cicd-cover.svg",
    gallery: [
      "/projects/cicd-cover.svg",
      "/projects/cicd-pipeline.svg",
      "/projects/cicd-docker.svg",
    ],
    github: "https://github.com/Prashant-112-coder/CI-CD416",
    featured: true,
    year: "2024",
    highlights: [
      "Multi-stage GitHub Actions workflow triggers on push and pull requests",
      "Automated test runner and code linter blocking flawed builds prior to merge",
      "Optimized Dockerfile utilizing layer caching and slim base images to minimize image size",
      "Automated image tagging and publishing to container registries",
    ],
    problem:
      "Manual software releases result in deployment drift, untested regressions reaching production, slow release cycles, and inconsistent runtime environments between developer machines and servers.",
    solution:
      "Architected an automated GitOps CI/CD pipeline where code is continuously tested, containerized, and deployed through automated scripts without manual server intervention.",
    architecture: {
      frontend: "N/A (DevOps / Infrastructure Engineering)",
      backend: "Python test runner and automated build verification scripts",
      database: "N/A (Infrastructure as Code & Pipeline Management)",
      cloudDevops: "GitHub Actions runners, Docker BuildKit, Linux environments, AWS EC2 staging",
      flow: [
        "Developer pushes code to feature branch and opens pull request",
        "GitHub Actions runner spins up isolated Ubuntu container environment",
        "Pipeline executes linting, static analysis, and automated test suites",
        "On branch merge, pipeline triggers Docker BuildKit to compile production image",
        "Container image is tagged with Git commit SHA and deployed to target cloud host",
      ],
    },
    challenges: [
      "Reducing GitHub Actions runner build times through effective Docker layer caching",
      "Safely managing encrypted deployment secrets across repository environments",
      "Writing resilient Bash deployment scripts with graceful rollbacks upon healthcheck failure",
    ],
    learnings: [
      "Deep understanding of YAML workflow syntax, runner matrices, and artifact caching",
      "Docker multi-stage build optimization techniques",
      "Linux server orchestration and remote SSH automation via CI/CD runners",
    ],
    stats: [
      { label: "Build Time", value: "< 2 mins" },
      { label: "Pipeline", value: "GitHub Actions" },
      { label: "Packaging", value: "Docker Multi-stage" },
    ],
  },
  {
    title: "Financial Fraud Detection Engine",
    slug: "fraud-detection-ml",
    tagline: "Machine Learning Classifier for Real-Time Transaction Fraud Detection",
    description:
      "A high-precision machine learning classification model trained on large-scale financial transaction data to identify suspicious patterns, account anomalies, and fraudulent transfers.",
    longDescription:
      "Financial institutions process millions of transactions per second, making manual fraud inspection impossible. This project implements an end-to-end ML pipeline: handling extreme class imbalance using SMOTE and under-sampling techniques, feature engineering on transaction velocity and amount deviations, and training gradient-boosted decision trees to maximize recall while keeping false alarms minimal.",
    category: "AI/ML",
    secondaryCategories: ["Backend"],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    image: "/projects/fraud-cover.svg",
    gallery: [
      "/projects/fraud-cover.svg",
      "/projects/fraud-confusion.svg",
      "/projects/fraud-features.svg",
    ],
    github: "https://github.com/Prashant-112-coder/FraudDetection",
    featured: false,
    year: "2024",
    highlights: [
      "Preprocessing pipeline handling millions of transaction rows and heavy class imbalance",
      "Feature engineering analyzing transaction amount Z-scores and account activity frequency",
      "Model evaluation prioritized on PR-AUC, Precision, and Recall rather than deceptive overall accuracy",
      "Exportable inference pipeline for low-latency batch scoring",
    ],
    problem:
      "In fraud detection, fraudulent cases account for less than 0.1% of transactions. Naive classifiers achieve 99.9% accuracy simply by classifying everything as legitimate while letting 100% of fraud pass undetected.",
    solution:
      "Applied advanced resampling techniques, tuned threshold boundaries based on risk appetite, and evaluated models using Precision-Recall curves to ensure critical anomalies are captured.",
    architecture: {
      frontend: "Matplotlib & Seaborn visualization notebooks with metric dashboards",
      backend: "Python data pipeline with Scikit-learn classification models",
      database: "Parquet & CSV dataset stores with optimized memory chunking",
      cloudDevops: "Jupyter environment with reproducible virtualenv requirements",
      flow: [
        "Ingest high-volume financial transaction dataset with millions of records",
        "Perform exploratory data analysis and remove corrupted records",
        "Engineer behavioural features (deviation from mean transfer amount, time-of-day)",
        "Train baseline models (Logistic Regression, Random Forest, XGBoost)",
        "Optimize hyperparameters using stratified cross-validation",
        "Evaluate confusion matrix and cost-benefit trade-offs on test holdout set",
      ],
    },
    challenges: [
      "Overcoming severe class imbalance without overfitting on minority synthetic samples",
      "Managing memory footprint when processing large data frames on local machines",
      "Selecting appropriate evaluation metrics that align with real-world financial risk",
    ],
    learnings: [
      "Practical mastery of Scikit-learn pipelines and feature transformers",
      "Understanding the mathematical trade-off between False Positives and False Negatives",
      "Importance of rigorous stratified cross-validation for real-world reliability",
    ],
    stats: [
      { label: "Dataset Size", value: "100k+ Records" },
      { label: "Metric Focus", value: "Recall & PR-AUC" },
      { label: "Core Library", value: "Scikit-learn" },
    ],
  },
  {
    title: "Mask & Helmet Safety Compliance Detection",
    slug: "mask-helmet-detection",
    tagline: "Computer Vision Safety Compliance Monitoring for Industrial Sites",
    description:
      "A computer vision pipeline utilizing deep learning to automatically detect Personal Protective Equipment (PPE) compliance, specifically identifying whether workers are wearing safety helmets and masks.",
    longDescription:
      "Ensuring worker safety on construction and industrial sites is a regulatory requirement. This computer vision project implements automated PPE monitoring by feeding video camera frames into an object detection model capable of localizing workers and classifying whether helmets and protective masks are correctly worn in real time.",
    category: "AI/ML",
    secondaryCategories: ["Cloud & DevOps"],
    technologies: ["Python", "OpenCV", "PyTorch", "Computer Vision", "NumPy"],
    image: "/projects/helmet-cover.svg",
    gallery: [
      "/projects/helmet-cover.svg",
      "/projects/helmet-bounding.svg",
    ],
    github: "https://github.com/Prashant-112-coder/mask-helmet-detection",
    featured: false,
    year: "2024",
    highlights: [
      "Real-time bounding box localization for multi-class detection (Helmet, No Helmet, Mask, No Mask)",
      "OpenCV video frame ingestion and annotation pipeline with visual warning indicators",
      "Trained on annotated industrial worksite imagery under varied lighting conditions",
      "Configurable alert thresholds for safety supervisors",
    ],
    problem:
      "Manual safety audits on sprawling construction and manufacturing sites are intermittent and leave workers exposed to fatal head injuries and respiratory hazards when safety gear is neglected.",
    solution:
      "Created an automated computer vision inspection pipeline that processes CCTV camera feeds, accurately detects PPE compliance in real time, and logs safety violations with snapshot timestamps.",
    architecture: {
      frontend: "OpenCV desktop display stream with live color-coded bounding boxes",
      backend: "Python computer vision inference script with deep learning model weights",
      database: "Violation log storage recording camera ID, timestamp, and confidence score",
      cloudDevops: "Containerized GPU/CPU execution environment",
      flow: [
        "Camera stream captures video frames at 30 FPS",
        "OpenCV preprocesses and resizes frames for neural network input",
        "Detection model generates bounding boxes and class probability scores",
        "System draws green bounding boxes for compliant workers and red boxes for violations",
        "Violations trigger automated warning logs with snapshot evidence",
      ],
    },
    challenges: [
      "Maintaining high detection frame rates on standard CPU hardware without costly dedicated GPUs",
      "Handling occlusions where workers are partially blocked by industrial scaffolding or tools",
      "Distinguishing standard caps or beanies from certified industrial hard hats",
    ],
    learnings: [
      "OpenCV video processing, frame manipulation, and coordinate drawing",
      "Object detection fundamentals: IoU (Intersection over Union), Non-Max Suppression (NMS)",
      "Preprocessing and data augmentation strategies for computer vision datasets",
    ],
    stats: [
      { label: "Target PPE", value: "Helmet & Mask" },
      { label: "Vision Library", value: "OpenCV & PyTorch" },
      { label: "Processing", value: "Real-time Stream" },
    ],
  },
];

export const projectCategories = [
  "All",
  "Full Stack",
  "AI/ML",
  "Cloud & DevOps",
  "Java",
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
