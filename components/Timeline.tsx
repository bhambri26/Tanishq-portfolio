'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

/* ─── Brand SVG Icons (inline for zero dependencies) ─── */

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#D97757">
    <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5v2.88a1.5 1.5 0 0 1-3 0V3.5A1.5 1.5 0 0 1 12 2zm6.364 2.636a1.5 1.5 0 0 1 0 2.122l-2.036 2.036a1.5 1.5 0 0 1-2.122-2.122l2.036-2.036a1.5 1.5 0 0 1 2.122 0zM22 12a1.5 1.5 0 0 1-1.5 1.5h-2.88a1.5 1.5 0 0 1 0-3h2.88A1.5 1.5 0 0 1 22 12zm-2.636 6.364a1.5 1.5 0 0 1-2.122 0l-2.036-2.036a1.5 1.5 0 0 1 2.122-2.122l2.036 2.036a1.5 1.5 0 0 1 0 2.122zM12 22a1.5 1.5 0 0 1-1.5-1.5v-2.88a1.5 1.5 0 0 1 3 0v2.88A1.5 1.5 0 0 1 12 22zm-6.364-2.636a1.5 1.5 0 0 1 0-2.122l2.036-2.036a1.5 1.5 0 1 1 2.122 2.122l-2.036 2.036a1.5 1.5 0 0 1-2.122 0zM2 12a1.5 1.5 0 0 1 1.5-1.5h2.88a1.5 1.5 0 0 1 0 3H3.5A1.5 1.5 0 0 1 2 12zm2.636-6.364a1.5 1.5 0 0 1 2.122 0l2.036 2.036a1.5 1.5 0 0 1-2.122 2.122L4.636 7.758a1.5 1.5 0 0 1 0-2.122z"/>
  </svg>
)

const NvidiaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#76B900">
    <path d="M8.948 8.798V6.896c.06-.005.12-.007.18-.01C13.794 6.612 16.39 9.75 16.39 9.75s-2.876 3.505-5.834 3.505c-.56 0-1.08-.1-1.608-.3V9.472c1.86.22 2.25.96 3.35 2.11l2.49-2.1s-1.89-2.58-5.34-2.58c-.17 0-.34.01-.5.03v-.134zM8.948 4.79v1.47l-.5.06C4.698 6.87 2.118 10.47 2.118 10.47s3.08 4.8 7.33 4.8c.52 0 1.02-.06 1.5-.17v.67c-.48.08-.97.13-1.48.13-3.87 0-6.69-3.07-8.47-5.1.66-.79 3.14-3.44 6.45-4.49V4.79h1.5zm0 8.168v1.17c-3.63-.73-5.89 2.62-5.89 2.62s1.92 2.89 5.39 2.89c.17 0 .34-.01.5-.03v1.34c-.16.01-.33.02-.5.02-4.16 0-7.29-3.55-7.29-3.55s2.29-4.14 7.79-4.46zm6.35-3.478s2.77-3.66-6.35-4.63v1.51c4.09.39 6.35 3.12 6.35 3.12zm4.33 1s-4.06 5.67-9.43 5.67c-.57 0-1.12-.06-1.65-.17v.67c.47.09.95.14 1.45.14 5.56 0 9.18-4.32 10.1-5.56-.57-.75-1.76-2.08-3.18-3.22l-.98.78c1.11.85 2.32 2 3.69 3.69z"/>
  </svg>
)

const DatabricksIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#FF3621">
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.2 4L12 12.2 4.8 8.3 12 4.3zM4 9.5l7 3.8v7.2l-7-3.8V9.5zm9 11l7-3.8V9.5l-7 3.8v7.2z"/>
  </svg>
)

const ScrumAllianceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#009FDA">
    <circle cx="12" cy="12" r="10" fill="none" stroke="#009FDA" strokeWidth="2"/>
    <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#009FDA" fontFamily="system-ui">CS</text>
  </svg>
)

const CourseraIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#0056D2">
    <path d="M11.374 23.977c-4.243-.38-7.865-2.87-9.72-6.666C.472 14.895.17 12.38.537 9.613 1.3 3.968 6.08.055 11.737.002c6.694-.063 12.072 4.982 12.258 11.482.094 3.27-.86 6.076-2.88 8.434-2.04 2.38-4.676 3.778-7.924 4.165l-.055-.004-.006-.002c.003-.006-.017-.007-.03-.006l-.015.007-.015-.003-.007.002-.003.004-.015-.004-.011-.001h-.012c-.013.002-.023 0-.036-.002l-.006.004h-.01l-.006-.004-.022.004-.014-.003-.008.003-.004-.003h-.004l-.003.003-.033-.004-.01.003-.01-.003-.026.002-.011-.002-.026-.001zm.933-6.056c3.474-.27 5.904-3.252 5.61-6.37-.298-3.138-3.114-5.513-6.468-5.142-3.123.346-5.56 3.263-5.284 6.353.298 3.328 3.173 5.445 6.142 5.16z"/>
  </svg>
)

const DeepLearningAIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#F77A1A">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
  </svg>
)

const IeltsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#B1232B">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="#B1232B" strokeWidth="1.5"/>
    <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#B1232B" fontFamily="system-ui">IELTS</text>
  </svg>
)

/* ─── Certification Data ─── */

const certifications = [
  {
    title: 'Claude Certified Associate - Foundations',
    organization: 'Anthropic',
    date: 'Aug 2026',
    badge: 'Claude Associate',
    badgeBg: 'bg-[#D97757]/10 text-[#D97757] border-[#D97757]/30',
    description: 'Certified in Claude & Anthropic LLM Architecture, Advanced Prompt Engineering, Context Window Optimization & Multi-turn Tool Integration.',
    icon: <ClaudeIcon />,
    verifyUrl: 'https://www.credly.com/badges/dcece867-b192-4752-8f40-71ab28487b46'
  },
  {
    title: 'Certified Scrum Product Owner (CSPO®)',
    organization: 'Scrum Alliance',
    date: '2026',
    badge: 'CSPO®',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    description: 'Certified in Product Strategy, Backlog Ownership, Sprint Ceremonies, Definition of Done & Cross-functional Squad Delivery.',
    icon: <ScrumAllianceIcon />,
    verifyUrl: 'https://www.scrumalliance.org/community/profile/tbhambri'
  },
  {
    title: 'NVIDIA-Certified Associate: Accelerated Data Science',
    organization: 'NVIDIA',
    date: 'May 2026',
    badge: 'NVIDIA',
    badgeBg: 'bg-[#76B900]/10 text-[#76B900] border-[#76B900]/30',
    description: 'GPU-accelerated Data Science, RAPIDS, Feature Engineering & High-Performance Machine Learning Pipelines.',
    icon: <NvidiaIcon />,
    verifyUrl: 'https://learn.nvidia.com/certificates'
  },
  {
    title: 'Databricks Certified Generative AI Engineer Associate',
    organization: 'Databricks',
    date: '2026',
    badge: 'Databricks',
    badgeBg: 'bg-[#FF3621]/10 text-[#FF3621] border-[#FF3621]/30',
    description: 'Designing & Deploying Enterprise GenAI Applications, RAG Pipelines, Vector Search & Unity Catalog Data Governance.',
    icon: <DatabricksIcon />,
    verifyUrl: 'https://credentials.databricks.com/'
  },
  {
    title: 'Generative AI with Large Language Models',
    organization: 'Coursera / DeepLearning.AI',
    date: 'Oct 2023',
    badge: 'DeepLearning.AI',
    badgeBg: 'bg-[#F77A1A]/10 text-[#F77A1A] border-[#F77A1A]/30',
    description: 'Transformer Architectures, LLM Fine-tuning (PEFT, LoRA), Prompt Engineering & Reinforcement Learning from Human Feedback (RLHF).',
    icon: <DeepLearningAIIcon />,
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/'
  },
  {
    title: 'Generative AI and Prompt Engineering (ChatGPT, DALL-E)',
    organization: 'Coursera',
    date: 'Oct 2023',
    badge: 'Coursera',
    badgeBg: 'bg-[#0056D2]/10 text-[#0056D2] border-[#0056D2]/30',
    description: 'Advanced Prompt Strategies, Multimodal Content Generation & Applied Enterprise GenAI Workflows.',
    icon: <CourseraIcon />,
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/'
  },
  {
    title: 'IELTS General Training — Band 7.5 (C1 Proficient)',
    organization: 'British Council',
    date: 'Feb 2025',
    badge: 'IELTS C1',
    badgeBg: 'bg-[#B1232B]/10 text-[#B1232B] border-[#B1232B]/30',
    description: 'Certified C1 Advanced Professional English Proficiency for Global Collaboration & International Mobility.',
    icon: <IeltsIcon />,
    verifyUrl: 'https://ielts.org/results'
  }
]

export default function Timeline() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-12 w-full bg-background border-t border-white/5 relative min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-widest mb-3">
            <Award size={14} />
            Verified Credentials & Badges
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-4">
            Certifications
          </h2>
          <div className="h-0.5 w-24 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((item, index) => (
            <motion.a
              key={index}
              href={item.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-6 md:p-8 flex flex-col justify-between hover:border-accent/40 transition-all group interactive cursor-none hover:-translate-y-1"
            >
              <div>
                {/* Badge row */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className={`font-mono text-xs uppercase font-semibold px-3 py-1 rounded-full border ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-wider">
                      {item.date}
                    </span>
                    <ExternalLink size={12} className="text-foreground/20 group-hover:text-accent transition-colors" />
                  </div>
                </div>

                {/* Title with brand icon */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-0.5">{item.icon}</div>
                  <h3 className="font-sans text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
                
                <p className="font-mono text-xs uppercase tracking-wider text-foreground/40 mb-4 pl-8">
                  {item.organization}
                </p>
              </div>

              <p className="font-sans text-sm text-foreground/55 leading-relaxed border-t border-white/5 pt-4 font-light pl-8">
                {item.description}
              </p>

              {/* Verify badge link hint */}
              <div className="mt-4 pl-8 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Verify Badge →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════
   VISUAL CASE STUDIES & SANITIZED ARCHITECTURE DIAGRAMS
   ══════════════════════════════════════════════════════════════════ */

const CASE_STUDIES = [
  {
    id: 'oil-gas',
    tag: 'Palantir Foundry • Time-Series ML • Upstream Energy',
    title: 'Upstream Oil & Gas Well Production Forecasting',
    metric: '+15% Forecast Accuracy | 1.1M+ Daily Rows',
    summary: 'Multi-tiered automated data pipeline ingesting raw sensor SCADA feeds across 4 well streams (oil, gas, water, fuel gas), orchestrating automated data sanitization & DCA (Decline Curve Analysis) predictive modeling inside Palantir Foundry Code Repositories.',
    nodes: [
      { step: '01', title: 'SCADA Ingestion', desc: 'IoT flowmeters & pressure gauges streaming raw readings (1.1M+ rows/day)', type: 'source' },
      { step: '02', title: 'Foundry Data Pipeline', desc: 'PySpark cleansing, outlier suppression, time-series deduplication', type: 'transform' },
      { step: '03', title: 'ML & Decline Curve (DCA)', desc: 'Python DCA + ensemble regression models tuned per well cohort', type: 'model' },
      { step: '04', title: 'Foundry Ontology & AIP', desc: 'Well objects mapped with automated production targets & choke adjustments', type: 'ontology' },
      { step: '05', title: 'Operational Workshop UI', desc: 'Real-time alert dashboards cutting response time from 12h down to 1h', type: 'delivery' }
    ],
    highlights: [
      'Automated outlier filtration reduced false production anomaly alerts by 42%',
      'Backlogged in Azure DevOps with CSPO user stories & DoD criteria',
      'Prevented $10,000+ per occurrence in well shut-in production losses'
    ]
  },
  {
    id: 'genai-rag',
    tag: 'GenAI Strategy • Anthropic Claude • RAG Architecture',
    title: 'Enterprise Technical Intelligence RAG Copilot',
    metric: '94% Retrieval Precision | 85% Answer Reliability',
    summary: 'Enterprise-grade RAG architecture leveraging Anthropic Claude models with strict citation guardrails and vectorized domain repositories, enabling field engineers to query complex operational manuals and historical maintenance logs instantaneously.',
    nodes: [
      { step: '01', title: 'Corpus Ingestion', desc: 'Unstructured SOPs, field incident logs, P&IDs, equipment manuals', type: 'source' },
      { step: '02', title: 'Chunking & Metadata', desc: 'Semantic hierarchy chunking + domain taxonomy tag enrichment', type: 'transform' },
      { step: '03', title: 'Vector Embeddings', desc: 'High-dimensional vector indexing with hybrid lexical keyword search', type: 'model' },
      { step: '04', title: 'Palantir AIP Guardrails', desc: 'Role-based access control, hallucination filters, provenance verification', type: 'ontology' },
      { step: '05', title: 'Claude Reasoning Agent', desc: 'Synthesizes cited answers with source references & confidence scoring', type: 'delivery' }
    ],
    highlights: [
      'Eliminated hallucinations through strict grounded citation thresholds',
      'Reduced engineer manual troubleshooting search time by 75%',
      'Designed with comprehensive Responsible AI & auditability benchmarks'
    ]
  }
]

export function ArchitectureShowcase() {
  return (
    <section id="case-studies" className="py-24 px-4 md:px-12 w-full bg-background border-t border-white/5 relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-widest mb-3">
            System Architecture & Pipelines
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-4">
            Visual Case Studies
          </h2>
          <div className="h-0.5 w-24 bg-accent mb-4" />
          <p className="font-sans text-foreground/60 max-w-2xl text-base md:text-lg font-light">
            Sanitized architecture blueprints representing production data engineering pipelines, Palantir Foundry integrations, and enterprise GenAI systems built under my product stewardship.
          </p>
        </motion.div>

        {/* Case Studies Cards */}
        <div className="space-y-16">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 md:p-10 border border-white/10 rounded-2xl relative overflow-hidden"
            >
              {/* Header meta */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 border-b border-white/5 pb-6">
                <div>
                  <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-1">
                    {study.tag}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {study.title}
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-[0_0_12px_rgba(245,166,35,0.2)]">
                  {study.metric}
                </div>
              </div>

              {/* Summary */}
              <p className="font-sans text-foreground/75 text-base md:text-lg font-light leading-relaxed mb-8 max-w-4xl">
                {study.summary}
              </p>

              {/* Visual Pipeline Architecture (Diagram) */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
                    Sanitized Pipeline Architecture Blueprint
                  </span>
                  <span className="font-mono text-[10px] text-accent/80 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    Live Data Flow
                  </span>
                </div>

                {/* Node Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
                  {study.nodes.map((node, nodeIdx) => (
                    <div 
                      key={node.step}
                      className="relative p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-accent/40 hover:bg-white/[0.06] transition-all flex flex-col justify-between group"
                    >
                      {/* Step Indicator */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[11px] font-bold text-accent bg-accent/15 px-2 py-0.5 rounded">
                          STEP {node.step}
                        </span>
                        {nodeIdx < study.nodes.length - 1 && (
                          <span className="text-white/20 hidden md:inline-block font-mono text-xs group-hover:text-accent transition-colors">
                            →
                          </span>
                        )}
                      </div>

                      {/* Step details */}
                      <div>
                        <h4 className="font-sans text-sm font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                          {node.title}
                        </h4>
                        <p className="font-sans text-xs text-foreground/60 leading-snug">
                          {node.desc}
                        </p>
                      </div>

                      {/* Subtle accent bar at bottom */}
                      <div className="h-0.5 w-full bg-white/10 mt-3 group-hover:bg-accent transition-colors rounded-full" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational & Product Highlights */}
              <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex flex-wrap gap-4">
                  {study.highlights.map((point, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="font-sans text-xs text-foreground/70">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════
   MY PRODUCT PHILOSOPHY (LINKEDIN POST FORMAT)
   ══════════════════════════════════════════════════════════════════ */

const THOUGHT_PIECES = [
  {
    id: 'post-1',
    topic: 'GenAI Strategy & Product Ownership',
    date: 'Sep 2026',
    readTime: '3 min read',
    headline: 'Why 80% of GenAI Pilots Fail to Reach Production (And How AI PMs Fix It)',
    postBody: [
      "A prompt is not a product. Too many teams celebrate a slick demo, only to hit a brick wall when trying to scale LLMs inside enterprise workflows.",
      "The hard truth? The bottleneck is almost never the model capability—it is the operational context layer. Without deterministic guardrails, structured ontology linking, and domain-grounded retrieval, models hallucinate and stakeholders lose trust.",
      "As an AI Product Owner, my focus is shifting the squad's definition of done from 'the model answered the test question' to 'the pipeline meets strict latency SLAs, provenance verification, and measurable end-user task velocity'."
    ],
    takeaway: 'Key Takeaway: Build for deterministic guardrails & user intent, not just raw conversational generation.'
  },
  {
    id: 'post-2',
    topic: 'Palantir AIP vs Generic Enterprise AI',
    date: 'Aug 2026',
    readTime: '4 min read',
    headline: 'Why Palantir AIP Wins Where Generic LLM Wrappers Flounder',
    postBody: [
      "The difference between a gimmick and a business transformation tool comes down to one word: Ontology.",
      "Generic SaaS platforms try to connect LLMs directly to relational tables or document dumps. When an LLM doesn't understand the semantic relationship between a production well, a choke valve, and a daily dispatch schedule, it cannot make actionable recommendations.",
      "Palantir Foundry and AIP bind the intelligence of foundation models directly to real-world operational objects and action functions. When our models recommend operational interventions, field technicians can execute with single-click auditability."
    ],
    takeaway: 'Key Takeaway: The value of AI in industry is directly proportional to how well your data ontology mirrors physical reality.'
  },
  {
    id: 'post-3',
    topic: 'Agile Product Management in Machine Learning',
    date: 'Jul 2026',
    readTime: '3 min read',
    headline: 'Applying CSPO & Scrum to Probabilistic ML Pipelines',
    postBody: [
      "Classic agile assumes deterministic outputs: you code a button, click it, and it opens a modal. Machine learning is fundamentally probabilistic and iterative.",
      "How do you write acceptance criteria when model accuracy is an evolving curve? As a CSPO®, I decompose ML epics into distinct risk horizons: data feasibility sprints, baseline heuristic benchmarks, model error distribution tuning, and finally shadow-deployment UAT.",
      "This prevents multi-month research dead-ends and ensures engineering delivers demonstrable, quantified value to business stakeholders every two weeks."
    ],
    takeaway: 'Key Takeaway: Treat ML uncertainty as an agile backlog item that shrinks with hypothesis-driven sprints.'
  }
]

export function ProductPhilosophy() {
  return (
    <section id="philosophy" className="py-24 px-4 md:px-12 w-full bg-background border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-widest mb-3">
            Thought Leadership & Articles
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-4">
            My Product Philosophy
          </h2>
          <div className="h-0.5 w-24 bg-accent mx-auto mb-4" />
          <p className="font-sans text-foreground/60 max-w-2xl mx-auto text-base md:text-lg font-light">
            Short thought pieces and product principles on GenAI strategy, Palantir AIP architecture, and agile data product leadership.
          </p>
        </motion.div>

        {/* Thought Cards (LinkedIn post format) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {THOUGHT_PIECES.map((piece, idx) => (
            <motion.article
              key={piece.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-accent/40 transition-all group"
            >
              <div>
                {/* Author row & Meta */}
                <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent text-background font-display font-black flex items-center justify-center text-sm shadow-[0_0_10px_rgba(245,166,35,0.3)]">
                      TB
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold text-foreground">Tanishq Bhambri</h4>
                      <p className="font-mono text-[10px] text-foreground/40">{piece.readTime} • {piece.date}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-accent/90 uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                    Insight
                  </span>
                </div>

                {/* Topic Tag */}
                <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">
                  {piece.topic}
                </span>

                {/* Headline */}
                <h3 className="font-sans text-lg font-bold text-foreground mb-4 group-hover:text-accent transition-colors leading-snug">
                  {piece.headline}
                </h3>

                {/* Body paragraphs */}
                <div className="space-y-3 font-sans text-sm text-foreground/75 font-light leading-relaxed mb-6">
                  {piece.postBody.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Takeaway Box */}
              <div className="pt-4 border-t border-white/5">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="font-mono text-xs text-accent/90 leading-relaxed font-medium">
                    {piece.takeaway}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
