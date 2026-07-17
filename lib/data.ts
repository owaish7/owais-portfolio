import type {
  Achievement,
  PaletteItem,
  Project,
  SkillGroup,
} from "./types";

export const LINKS = {
  github: "https://github.com/owaish7",
  linkedin: "https://www.linkedin.com/in/mohammad-owais-196ba3166/",
  email: "mohdowais752003@gmail.com",
  phone: "+91 8287548058",
  resume:
    "https://drive.google.com/file/d/1lBT38vLuzT7KD7o-pWsG3cZXgCG8Y2E-/view?usp=sharing",
  codeforces: "https://codeforces.com/profile/owais78",
  leetcode: "https://leetcode.com/owais75/",
  codechef: "https://www.codechef.com/users/jack08",
} as const;

export const STATS = [
  { big: "256K", label: "JOBS INDEXED" },
  { big: "1503", label: "CF SPECIALIST" },
  { big: "#102", label: "ICPC ASIA WEST AIR" },
  { big: "1000+", label: "PROBLEMS SOLVED" },
] as const;

export const projects: Project[] = [
  {
    name: "devrag",
    cat: "gen-ai / RAG",
    url: "https://github.com/owaish7/devrag",
    desc: "A RAG pipeline over PDFs built from scratch — no LangChain, no vector database. Token-aware chunking, sentence-transformer embeddings and cosine search, with page-level citations and a relevance gate that refuses off-topic questions before spending an API call. Includes an eval harness (hit@k, MRR) that runs without an API key.",
    tags: ["Python", "PyTorch", "sentence-transformers", "FastAPI", "Docker", "Gemini"],
  },
  {
    name: "JobLens",
    cat: "gen-ai / RAG",
    url: "https://github.com/owaish7/joblens",
    demo: "https://joblens-a6sg.onrender.com",
    desc: "Semantic job search + RAG assistant over live listings. Gemini embeddings and a FAISS vector store for retrieval, a LangGraph workflow orchestrating retrieval → prompt → generation, and cited answers served over a FastAPI API. Deployed with Docker.",
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "FAISS", "Gemini"],
  },
  {
    name: "Food-Link",
    cat: "full-stack",
    url: "https://github.com/owaish7/food-link-app",
    demo: "https://food-link-app-gold.vercel.app/",
    desc: "Two-sided platform connecting restaurants' surplus food with nearby NGOs. Real-time orders & chat over Socket.IO, an SVD recommender built from scratch in NumPy plus content-based filtering, and hardened JWT-in-httpOnly-cookie auth closing a Broken-Access-Control gap.",
    tags: ["React", "Tailwind", "Flask", "MongoDB", "Socket.IO", "NumPy"],
  },
  {
    name: "FAST-ER Ambulance",
    cat: "realtime + AI",
    url: "https://github.com/owaish7/Faster-ambulance/tree/main",
    desc: "Real-time ambulance management with a GenAI-powered triage chatbot and sentiment analysis for case classification. Dynamic allocation for faster response, and WebSocket notifications pushing live ETA & ambulance details to patients and hospitals.",
    tags: ["Flask", "ReactJS", "MongoDB", "Leaflet", "WebSockets", "Gen-AI"],
  },
  {
    name: "Mockify",
    cat: "gen-ai",
    url: "https://github.com/owaish7/Mockify-AI-interview",
    desc: "AI-powered mock-interview platform that generates role-specific questions, runs the session, and gives structured feedback on your answers.",
    tags: ["Next.js", "TypeScript", "Gen-AI"],
  },
  {
    name: "Hikari",
    cat: "conversational ai",
    url: "https://github.com/owaish7/Hikari--weather-chat-assistant",
    desc: "Conversational weather assistant — ask about conditions in plain language and get chat-style forecasts backed by a live weather API.",
    tags: ["TypeScript", "LLM", "Weather API"],
  },
  {
    name: "AI Phishing Detection",
    cat: "ml / nlp",
    url: "https://github.com/owaish7/Phishing-scanner-extension",
    desc: "Fine-tuned DistilBERT to detect SMS smishing at 99.4% accuracy, fixing a 6:1 class imbalance with back-translation. For URLs, benchmarked Logistic Regression vs Random Forest (82.5%) on 549K samples — choosing the Random Forest over a 99% DistilBERT that failed to generalise. Ships with a Chrome MV3 extension that scans page links against the deployed model.",
    tags: ["DistilBERT", "PyTorch", "scikit-learn", "Chrome MV3", "Flask"],
  },
  {
    name: "Drowning Detection",
    cat: "computer vision",
    url: "https://github.com/owaish7/Drowning-Detection",
    desc: "Computer-vision pipeline that detects drowning events from pool footage to trigger early rescue alerts.",
    tags: ["Python", "OpenCV", "ML"],
  },
];

export const skillGroups: SkillGroup[] = [
  { name: "languages", items: ["Python", "C++", "C", "Java", "JavaScript", "TypeScript", "SQL"] },
  { name: "ai / llm", items: ["RAG", "LangChain", "LangGraph", "FAISS", "sentence-transformers", "PyTorch", "DistilBERT", "Gemini", "Bedrock", "Azure OpenAI"] },
  { name: "frameworks", items: ["ReactJS", "NextJS", "NodeJS", "Express", "Flask", "FastAPI", "Tailwind"] },
  { name: "databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { name: "tools", items: ["AWS", "Azure", "GCP", "Docker", "Terraform", "Git", "GitHub Actions"] },
];

export const achievements: Achievement[] = [
  { tag: "ICPC 2025", big: "#102", title: "Asia West Amritapuri", sub: "AIR 102 & Institute Topper — Team Greedy, India Online Prelims", url: LINKS.codeforces },
  { tag: "META", big: "R2", title: "Meta Hacker Cup 2025", sub: "Advanced to Round 2 · All-India Rank 3137", url: LINKS.codeforces },
  { tag: "CODEFORCES", big: "1503", title: "Specialist → owais78", sub: "Max rank 1665 / 46000 — Round 937 (Div. 4)", url: LINKS.codeforces },
  { tag: "LEETCODE", big: "Top 6%", title: "700+ solved → owais75", sub: "DSA problems across contests & practice", url: LINKS.leetcode },
  { tag: "CODECHEF", big: "3★", title: "Rating 1656 → jack08", sub: "Consistent contest participation", url: LINKS.codechef },
  { tag: "OVERALL", big: "1000+", title: "Problems solved", sub: "Codeforces + CodeChef + LeetCode combined", url: LINKS.codeforces },
];

export const paletteItems: PaletteItem[] = [
  { icon: "#", label: "About", href: "#about", hint: "bio" },
  { icon: ">", label: "Experience", href: "#experience", hint: "talendy · akatsuki" },
  { icon: "/", label: "Projects", href: "#projects", hint: "devrag · joblens" },
  { icon: "≡", label: "Skills", href: "#skills", hint: "stack" },
  { icon: "★", label: "Achievements", href: "#achievements", hint: "icpc · codeforces" },
  { icon: "✉", label: "Contact", href: "#contact", hint: "email · linkedin" },
  { icon: "↑", label: "Back to top", href: "#home", hint: "" },
  { icon: "↗", label: "Open GitHub ↗", href: LINKS.github, hint: "external" },
  { icon: "↗", label: "Open LinkedIn ↗", href: LINKS.linkedin, hint: "external" },
  { icon: "★", label: "Codeforces → owais78 ↗", href: LINKS.codeforces, hint: "external" },
  { icon: "★", label: "LeetCode → owais75 ↗", href: LINKS.leetcode, hint: "external" },
];

