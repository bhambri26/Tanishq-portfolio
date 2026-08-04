'use client'

import { motion } from 'framer-motion'
import { Database, Cloud, Cog, Users, Sparkles, Target, FileText } from 'lucide-react'

const categories = [
  {
    title: 'Palantir Foundry Ecosystem',
    icon: <Cloud size={20} className="text-accent mr-3" />,
    items: [
      'Palantir AIP (AI Platform)',
      'Pipeline Builder',
      'Ontology Manager',
      'Workshop',
      'Code Repository (Python)',
      'Contour',
      'Quiver',
      'Fusion Sheets',
      'Slate',
      'Object Explorer',
      'Issues',
      'Database'
    ]
  },
  {
    title: 'Product Ownership & Strategy (CSPO®)',
    icon: <Target size={20} className="text-accent mr-3" />,
    items: [
      'Certified Scrum Product Owner (CSPO)',
      'Product Strategy & Vision',
      'Product Backlog Management',
      'Sprint Planning & Ceremonies',
      'Definition of Done (DoD)',
      'User Story Mapping',
      'Acceptance Criteria',
      'Release Planning & MVP Definition',
      'Product Roadmap & OKRs',
      'Go-to-Market Strategy',
      'Voice of Customer (VoC)',
      'User Adoption Metrics'
    ]
  },
  {
    title: 'GenAI & LLM Architecture',
    icon: <Sparkles size={20} className="text-accent mr-3" />,
    items: [
      'Large Language Models (LLMs)',
      'LLM Product Strategy & Integration',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt Engineering',
      'Generative AI Pipelines',
      'MLflow',
      'Agentic AI Frameworks',
      'Responsible AI',
      'Ethical AI Frameworks'
    ]
  },
  {
    title: 'Data Science & Machine Learning',
    icon: <Database size={20} className="text-muted-foreground mr-3" />,
    items: [
      'SQL',
      'Python (Pandas, NumPy, PyTorch)',
      'PySpark',
      'Statistics & Statistical Modelling',
      'Hypothesis Testing',
      'Data Analysis & Mining',
      'Machine Learning',
      'Feature Engineering',
      'Model Evaluation (Precision, Recall, F1)',
      'A/B Testing & Experimentation Design',
      'Predictive Modelling',
      'APEX Forecasting',
      'Decline Curve Analysis (DCA)'
    ]
  },
  {
    title: 'Data Engineering & Business Analysis',
    icon: <FileText size={20} className="text-muted-foreground mr-3" />,
    items: [
      'ETL Pipelines',
      'Analytics Tools (Power BI, Tableau, Contour, Quiver)',
      'Data Modelling & Wrangling',
      'Data Quality & Governance',
      'Data Migration & Validation',
      'Data Segmentation',
      'CI/CD Pipelines',
      'KPI Definition & Data Storytelling',
      'BRD & PRD Creation',
      'Requirements Gathering',
      'Workflow Automation',
      'User Acceptance Testing (UAT)'
    ]
  },
  {
    title: 'Platforms, Agile & Leadership',
    icon: <Users size={20} className="text-muted-foreground mr-3" />,
    items: [
      'PEGA CRM',
      'Azure DevOps (Backlog & Sprints)',
      'Jira',
      'Confluence',
      'Trello',
      'SDLC',
      'Agile & Scrum',
      'SAFe (Scaled Agile Framework)',
      'Kanban',
      'Stakeholder Alignment & Presentations',
      'Cross-functional Squad Leadership',
      'Design Thinking & Intelligent Automation'
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
    <section className="py-24 px-4 md:px-12 w-full bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">
            Technical & Product Capabilities
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-4">
            The Arsenal
          </h2>
          <div className="h-0.5 w-24 bg-accent" />
        </motion.div>

        <div className="flex flex-col gap-12">
          {categories.map((category) => (
            <motion.div 
              key={category.title}
              variants={containerV}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground/80 font-semibold">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemV}
                    className="relative overflow-hidden border border-white/10 bg-white/5 px-5 py-2.5 transition-colors hover:bg-white/10 interactive cursor-none"
                  >
                    <span className="font-sans relative z-10 text-foreground/90 font-medium text-sm tracking-wide">
                      {item}
                    </span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-accent -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:block" />
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
