'use client'

import { motion } from 'framer-motion'
import { Database, Target, Sparkles } from 'lucide-react'

const categories = [
  {
    title: 'AI & LLM Engineering',
    icon: <Sparkles size={20} className="text-accent mr-3 shrink-0" />,
    items: [
      'Palantir AIP (AI Platform)',
      'Large Language Models (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'Agentic AI Frameworks',
      'Prompt Engineering',
      'Responsible AI & Guardrails'
    ]
  },
  {
    title: 'Data Science & Analytics',
    icon: <Database size={20} className="text-muted-foreground mr-3 shrink-0" />,
    items: [
      'Python (Pandas, PyTorch)',
      'SQL & PySpark',
      'Predictive Modelling & ML',
      'Decline Curve Analysis (DCA)',
      'Power BI & Data Storytelling',
      'A/B Testing & Experimentation'
    ]
  },
  {
    title: 'Product Strategy & Agile',
    icon: <Target size={20} className="text-accent mr-3 shrink-0" />,
    items: [
      'Certified Scrum Product Owner (CSPO)',
      'Product Roadmap & OKRs',
      'User Story Mapping & Backlog',
      'Go-to-Market Strategy',
      'Voice of Customer (VoC)',
      'Cross-functional Squad Leadership'
    ]
  }
]

// variants for staggering children
const containerV = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
}

const itemV = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

export default function TechStack() {
  return (
    <section className="py-20 px-4 md:px-12 w-full bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">
            Core Competencies
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter text-foreground mb-4">
            The Arsenal
          </h2>
          <div className="h-0.5 w-24 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {categories.map((category) => (
            <motion.div 
              key={category.title}
              variants={containerV}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="group glass-card p-6 md:p-8 rounded-2xl border border-white/10"
            >
              <div className="flex items-center mb-6 pb-4 border-b border-white/5">
                {category.icon}
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground/90 font-bold leading-tight">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-col gap-3">
                {category.items.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemV}
                    className="relative pl-4"
                  >
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
                    <span className="font-sans text-foreground/80 font-medium text-[13px] tracking-wide leading-snug">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
