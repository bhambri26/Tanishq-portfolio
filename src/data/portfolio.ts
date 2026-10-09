/**
 * Central portfolio content — sourced from Tanishq_AIProductOwner_Resume.pdf
 */

export const siteConfig = {
  name: "Tanishq Bhambri",
  title: "Senior AI Product Manager (CSPO)",
  tagline:
    "Certified Scrum Product Owner turning complex AI & data capabilities into products that cut decision time from 12 days to 1 hour.",
  email: "bhambritanishq08@gmail.com",
  phone: "+91 9501019292",
  location: "Chandigarh, India",
  resumeUrl: "/resume/Tanishq_AIProductOwner_Resume.pdf",
  social: {
    linkedin: "https://linkedin.com/in/tanishqbhambri",
    github: "https://github.com/bhambri26",
  },
};

export const aboutContent = {
  headline: "AI Product Leader at the intersection of strategy, data, and delivery.",
  paragraphs: [
    "I'm a Certified Scrum Product Owner (CSPO) with 8 years leading AI and data product strategy, backlog ownership, and cross-functional squad delivery. I personally define acceptance criteria and prioritize roadmaps for Palantir Foundry AI platforms that deliver measurable business impact.",
    "At Infosys and Hexaware, I've reduced operations decision time from 12 days to 1 hour, cut manual reporting effort by 20 hours per cycle (5 headcount to 1), and prevented an estimated $10,000 in production losses through early-warning product features.",
    "I combine deep technical fluency in GenAI, LLM integration, RAG, and model evaluation with strong stakeholder alignment and go-to-market execution — open to Senior AI Product Manager and AI Product Owner roles globally.",
  ],
  highlights: [
    { label: "Years Experience", value: "8+" },
    { label: "Decision Time Saved", value: "12d → 1h" },
    { label: "Forecast Accuracy", value: "+15%" },
    { label: "Data Processed", value: "1.1M+ Rows" },
  ],
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  color: string;
};

export const skillCategories: SkillCategory[] = [
  {
    id: "product",
    title: "Product Ownership",
    icon: "Layout",
    color: "#22d3ee",
    skills: [
      "CSPO Certified",
      "Product Backlog",
      "Sprint Planning",
      "User Story Mapping",
      "OKRs",
      "Go-to-Market",
    ],
  },
  {
    id: "genai",
    title: "GenAI & LLM",
    icon: "Brain",
    color: "#a855f7",
    skills: [
      "LLM Integration",
      "RAG Pipelines",
      "Prompt Engineering",
      "Agentic AI",
      "Responsible AI",
      "MLflow",
    ],
  },
  {
    id: "ml",
    title: "Data Science & ML",
    icon: "Database",
    color: "#3b82f6",
    skills: [
      "Python",
      "PyTorch",
      "Feature Engineering",
      "A/B Testing",
      "Predictive Modelling",
      "Model Evaluation",
    ],
  },
  {
    id: "platform",
    title: "Palantir Foundry",
    icon: "Cloud",
    color: "#ec4899",
    skills: [
      "AIP",
      "Pipeline Builder",
      "Ontology Manager",
      "Workshop",
      "Contour",
      "Quiver",
    ],
  },
  {
    id: "tools",
    title: "Platforms & Tools",
    icon: "Wrench",
    color: "#10b981",
    skills: [
      "Azure DevOps",
      "Jira",
      "Confluence",
      "PEGA CRM",
      "Power BI",
      "Tableau",
    ],
  },
];

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "hexaware",
    company: "Hexaware Technologies",
    role: "Data Analytics and IoT Lead",
    period: "Apr 2026 — Present",
    location: "India",
    achievements: [
      "Own and manage the product backlog for an enterprise AI and analytics platform, reducing operations decision time from 12 days to 1 hour.",
      "Facilitate sprint planning, review, and retrospectives — translating stakeholder requirements into user stories, acceptance criteria, and Definition of Done.",
      "Define product vision and maintain the roadmap across 2+ client technology stacks including Palantir Foundry.",
      "Reduced manual reporting effort by 20 hours per cycle, shrinking a 5-person workflow to 1 through Azure DevOps sprint management.",
    ],
  },
  {
    id: "infosys-senior",
    company: "Infosys Limited",
    role: "Senior Data Analyst",
    period: "Jan 2021 — Mar 2026",
    location: "India",
    achievements: [
      "Owned product backlog and sprint planning on Azure DevOps for a Palantir Foundry AI platform across 6 regions and 30+ assets — preventing $10,000 in production losses.",
      "Built and tuned forecasting models achieving 15% accuracy improvement across 4 well types on 1.1M+ rows of daily production data.",
      "Shipped a Workshop dashboard replacing manual spreadsheet reporting, reducing reporting cycle time by 1 full working day.",
      "Engineered ETL pipelines consolidating 30+ regional asset data sources across 6 production regions.",
      "Investigated GenAI and RAG through Palantir AIP, building knowledge in LLM pipelines, prompt engineering, and agentic AI frameworks.",
    ],
  },
  {
    id: "infosys-engineer",
    company: "Infosys Limited",
    role: "Senior System Engineer",
    period: "Sep 2017 — Dec 2020",
    location: "India",
    achievements: [
      "Defined user stories and acceptance criteria for a PEGA CRM campaign automation product — improving targeting accuracy by 10%.",
      "Designed A/B testing frameworks achieving 60% uplift in conversion rates through data-driven experimentation.",
      "Developed SQL-based predictive models resulting in 40% improvement in campaign effectiveness across email, SMS, and app-push channels.",
      "Architected SQL data pipelines reducing processing time by 30% and ensuring reliable reporting data flow.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "palantir-ai-platform",
    title: "Palantir Foundry AI Platform",
    summary:
      "Enterprise AI platform with backlog ownership across 6 regions and 30+ assets. Early-warning capabilities prevented $10K in production losses and expanded platform adoption to new regions.",
    tech: ["Palantir Foundry", "AIP", "Python", "Azure DevOps", "Workshop"],
    github: "https://github.com/bhambri26",
    demo: "#projects",
  },
  {
    id: "oil-forecast",
    title: "Oil & Gas Production Forecasting",
    summary:
      "ML forecasting models in Palantir Code Repository on 1.1M+ rows of daily production data. 15% accuracy improvement across 4 well types through advanced feature engineering.",
    tech: ["Python", "Palantir", "Pandas", "NumPy", "Feature Engineering"],
    github: "https://github.com/bhambri26",
    demo: "#projects",
  },
  {
    id: "workshop-dashboard",
    title: "Real-Time Operations Dashboard",
    summary:
      "Workshop dashboard product replacing manual spreadsheet reporting. Delivered real-time well production vs forecast visibility, saving 1 full working day per reporting cycle.",
    tech: ["Palantir Workshop", "Ontology", "Contour", "Quiver"],
    demo: "#projects",
  },
  {
    id: "pega-campaign",
    title: "PEGA CRM Campaign Automation",
    summary:
      "Multi-channel campaign product (email, SMS, app-push) with A/B testing frameworks. 60% conversion uplift and 40% improvement in campaign effectiveness.",
    tech: ["PEGA CRM", "SQL", "A/B Testing", "Jira", "Confluence"],
    github: "https://github.com/bhambri26",
    demo: "#contact",
  },
];

export const certifications = [
  "Certified Scrum Product Owner (CSPO) — Scrum Alliance, 2026",
  "NVIDIA-Certified Associate: Accelerated Data Science — 2025",
  "Databricks Certified Generative AI Engineer Associate — 2025",
  "Generative AI with Large Language Models — DeepLearning.AI, 2023",
  "IELTS General Training — Band 7.5 (C1), 2025",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
