'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

/* ─── Brand SVG Icons (inline for zero dependencies) ─── */

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
    date: 'May 2026 – May 2028',
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
