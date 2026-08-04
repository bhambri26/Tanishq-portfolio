'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Sparkles, Award } from 'lucide-react'

const certifications = [
  {
    title: 'Certified Scrum Product Owner (CSPO®)',
    organization: 'Scrum Alliance',
    date: '2026',
    badge: 'CSPO®',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    description: 'Certified in Product Strategy, Backlog Ownership, Sprint Ceremonies, Definition of Done & Cross-functional Squad Delivery.'
  },
  {
    title: 'NVIDIA-Certified Associate: Accelerated Data Science',
    organization: 'NVIDIA',
    date: 'May 2026 – May 2028',
    badge: 'NVIDIA',
    badgeBg: 'bg-green-500/10 text-green-400 border-green-500/30',
    description: 'GPU-accelerated Data Science, RAPIDS, Feature Engineering & High-Performance Machine Learning Pipelines.'
  },
  {
    title: 'Databricks Certified Generative AI Engineer Associate',
    organization: 'Databricks',
    date: '2026',
    badge: 'Databricks',
    badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    description: 'Designing & Deploying Enterprise GenAI Applications, RAG Pipelines, Vector Search & Unity Catalog Data Governance.'
  },
  {
    title: 'Generative AI with Large Language Models',
    organization: 'Coursera / DeepLearning.AI',
    date: 'Oct 2023',
    badge: 'DeepLearning.AI',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    description: 'Transformer Architectures, LLM Fine-tuning (PEFT, LoRA), Prompt Engineering & Reinforcement Learning from Human Feedback (RLHF).'
  },
  {
    title: 'Generative AI and Prompt Engineering (ChatGPT, DALL-E)',
    organization: 'Coursera',
    date: 'Oct 2023',
    badge: 'Coursera',
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    description: 'Advanced Prompt Strategies, Multimodal Content Generation & Applied Enterprise GenAI Workflows.'
  },
  {
    title: 'IELTS General Training — Band 7.5 (C1 Proficient)',
    organization: 'British Council',
    date: 'Feb 2025',
    badge: 'IELTS C1',
    badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    description: 'Certified C1 Advanced Professional English Proficiency for Global Collaboration & International Mobility.'
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-6 md:p-8 flex flex-col justify-between hover:border-accent/40 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`font-mono text-xs uppercase font-semibold px-3 py-1 rounded-full border ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                  <span className="font-mono text-xs text-foreground/50 uppercase tracking-wider">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-sans text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-tight">
                  {item.title}
                </h3>
                
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-accent shrink-0" />
                  {item.organization}
                </p>
              </div>

              <p className="font-sans text-sm text-foreground/60 leading-relaxed border-t border-white/5 pt-4 font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
