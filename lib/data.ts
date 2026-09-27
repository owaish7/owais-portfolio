import type {
  Achievement,
  PaletteItem,
  Project,
  SkillGroup,
} from "./types";

export const LINKS = {
  github: "https://github.com/owaish7",
  linkedin: "https://www.linkedin.com/in/md-owais-196ba3166/",
  email: "mohdowais752003@gmail.com",
  phone: "+91 8287548058",
  resume:
    "https://drive.google.com/file/d/1JnHe_6xs-QsUUMj04tBLE09T-g8QYjSG/view?usp=sharing",
  codeforces: "https://codeforces.com/profile/owais78",
  leetcode: "https://leetcode.com/owais75/",
  codechef: "https://www.codechef.com/users/jack08",
} as const;

export const STATS = [
  { big: "#102", label: "ICPC ASIA WEST" },
  { big: "R2", label: "META HACKER CUP" },
  { big: "1503", label: "CODEFORCES SPECIALIST" },
  { big: "1000+", label: "PROBLEMS SOLVED" },
] as const;

export const projects: Project[] = [
  {
    "name": "AI Workflow Builder",
    "cat": "automation",
    "url": "https://github.com/owaish7/ai-workflow-builder",
    "demo": "https://ai-workflow-builder-two.vercel.app",
    "desc": "A visual workflow system for chaining LLM calls, HTTP requests, database writes and human approvals. Webhooks and scheduled triggers start runs; permission checks, retries and live status make the execution inspectable.",
    "tags": [
      "Next.js",
      "Llama / Groq",
      "GraphQL",
      "Postgres"
    ],
    "proof": "6 step types · 4 trigger types · approval gates"
  },
  {
    "name": "DevRAG",
    "cat": "retrieval + AI",
    "url": "https://github.com/owaish7/devrag",
    "desc": "Ask a PDF a question and get an answer with page citations. Built the retrieval pipeline directly with local open-source embeddings, token-aware chunking and relevance checks that let the system abstain when evidence is missing.",
    "tags": [
      "Python",
      "Sentence Transformers",
      "Gemini",
      "FastAPI"
    ],
    "proof": "Page citations · retrieval evaluation · Docker"
  },
  {
    "name": "AI Phishing Detection",
    "cat": "fine-tuning + security",
    "url": "https://github.com/owaish7/Phishing-scanner-extension",
    "desc": "Fine-tuned DistilBERT for SMS phishing, augmented minority-class data and benchmarked URL classifiers. Built the Chrome extension to scan page links. A team project: backend deployment and the mobile app were handled by collaborators.",
    "tags": [
      "DistilBERT",
      "Python",
      "Random Forest",
      "Chrome MV3"
    ],
    "proof": "Model training notebooks + browser extension"
  },
  {
    "name": "AI Support Agent",
    "cat": "agents + evaluation",
    "url": "https://github.com/owaish7/hiver-support-agent",
    "desc": "An experimental support agent using a public Twitter conversation dataset: classify intent, retrieve similar cases, draft a grounded reply and flag escalation. Includes hand-labelled evaluation and published failure analysis; not a live social-media integration.",
    "tags": [
      "gpt-oss",
      "MiniLM",
      "Python",
      "RAG"
    ],
    "proof": "90-item test set · 24 offline tests · documented limits"
  },
  {
    "name": "JobLens",
    "demo": "https://joblens-a6sg.onrender.com",
    "cat": "semantic search",
    "url": "https://github.com/owaish7/joblens",
    "desc": "Search job listings by meaning, then ask follow-up questions grounded in the results. Combines public job APIs, FAISS retrieval and a LangGraph answer flow with citations, plus keyword fallback when an AI key is unavailable.",
    "tags": [
      "FastAPI",
      "FAISS",
      "LangGraph",
      "Gemini"
    ],
    "proof": "API ingestion → semantic retrieval → cited answers"
  },
  {
    "name": "Food-Link",
    "cat": "full-stack product",
    "url": "https://github.com/owaish7/food-link-app",
    "demo": "https://food-link-app-gold.vercel.app/",
    "desc": "A platform connecting surplus food from restaurants with NGOs. Combines real-time orders and chat, a NumPy recommendation system and cookie-based authentication in a complete web application.",
    "tags": [
      "React",
      "Flask",
      "MongoDB",
      "Socket.IO"
    ],
    "proof": "Real-time collaboration · recommendations · web app"
  }
];

export const skillGroups: SkillGroup[] = [
  { name: "AI + models", items: ["RAG", "Sentence Transformers", "DistilBERT fine-tuning", "FAISS", "LangGraph", "LLM evaluation", "Bedrock", "Azure OpenAI"] },
  { name: "automation", items: ["Webhooks", "Scheduled workflows", "REST APIs", "GraphQL", "Human approval gates"] },
  { name: "languages", items: ["Python", "C++", "C", "Java", "JavaScript", "TypeScript", "SQL"] },
  { name: "frameworks", items: ["ReactJS", "NextJS", "NodeJS", "Express", "Flask", "FastAPI", "Tailwind"] },
  { name: "databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { name: "tools", items: ["AWS", "Azure", "GCP", "Docker", "Git", "Terraform", "GitHub Actions"] },
];

export const achievements: Achievement[] = [
  { tag: "ICPC 2025", big: "#102", title: "Asia West Amritapuri", sub: "AIR 102 & Institute Topper", writeup: "Placed 102nd in the ICPC India Online Prelims with Team Greedy, earning institute topper recognition.", url: "https://drive.google.com/file/d/1DOsFxQL_0QiKNsoRKdBISe4Iy9LxpELg/view?usp=sharing" },
  { tag: "META", big: "R2", title: "Meta Hacker Cup 2025", sub: "Advanced to Round 2", writeup: "Reached Round 2 of Meta Hacker Cup, competing among more than 15,000 participants.", url: "https://drive.google.com/file/d/1Jqa5_jw1AU6n2AQUshUm9MQzI8QubX61/view?usp=sharing" },
  { tag: "CP", big: "1000+", title: "Competitive Programming", sub: "Codeforces Specialist · LeetCode Knight · CodeChef 3★", writeup: "Solved 1000+ problems across platforms, with Codeforces 1503, LeetCode Top 6%, and CodeChef max rating 1656.", url: LINKS.codeforces },
];

export const paletteItems: PaletteItem[] = [
  { icon: "#", label: "About", href: "#about", hint: "bio" },
  { icon: ">", label: "Experience", href: "#experience", hint: "talendy · akatsuki" },
  { icon: "/", label: "Projects", href: "#projects", hint: "workflows · rag · security" },
  { icon: "≡", label: "Skills", href: "#skills", hint: "stack" },
  { icon: "★", label: "Achievements", href: "#achievements", hint: "icpc · codeforces" },
  { icon: "✉", label: "Contact", href: "#contact", hint: "email · linkedin" },
  { icon: "↑", label: "Back to top", href: "#home", hint: "" },
  { icon: "↗", label: "Open GitHub ↗", href: LINKS.github, hint: "external" },
  { icon: "↗", label: "Open LinkedIn ↗", href: LINKS.linkedin, hint: "external" },
];


