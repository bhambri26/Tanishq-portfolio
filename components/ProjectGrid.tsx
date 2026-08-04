'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Oil & Gas Forecasting Model',
    company: 'Infosys Limited (2021–Present)',
    role: 'Senior Data Analyst / Technical Analyst',
    description: 'Led team of 3 analysts to upgrade production forecasting model for oil, water, gas, and fuel wells using Palantir Foundry and machine learning. Achieved 15% accuracy improvement; pattern recognition across 4 well types improved accuracy to 35%.',
    tags: ['Palantir', 'Python', 'ML', 'Oil & Gas', 'Pipeline'],
    metric: '+15% accuracy',
    span: 'col-span-1 lg:col-span-7', // varied spans for masonry feel
  },
  {
    title: 'PEGA CRM Multi-Channel Campaign Engine',
    company: 'Infosys Limited (2017–2020)',
    role: 'Senior System Engineer',
    description: 'Directed a team of 3 to implement a data segmentation strategy using PEGA, analyzing market trends and customer behavior for email, SMS, and app-push campaigns. Achieved 60% increase in conversion through A/B testing and SQL-based data pipelines.',
    tags: ['PEGA', 'SQL', 'A/B Testing', 'Segmentation', 'CRM'],
    metric: '+60% conversion',
    span: 'col-span-1 lg:col-span-5',
  },
  {
    title: 'Carbon Emission Prediction Module',
    company: 'Infosys Limited',
    role: 'Project Lead',
    description: 'Spearheaded a Palantir module predicting carbon emission reductions from eco-friendly oil extraction practices, improving operational efficiency by 10% and reducing costs.',
    tags: ['Palantir', 'ESG Analytics', 'Python', 'Data Modeling'],
    metric: '+10% efficiency',
    span: 'col-span-1 lg:col-span-12',
  }
]

const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const cardVar = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function ProjectGrid() {
  return (
    <section className="py-24 px-4 md:px-12 w-full bg-background border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-4">
              The Work
            </h2>
            <div className="h-0.5 w-24 bg-accent" />
          </div>
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground w-full md:w-auto md:max-w-xs text-right hidden md:block">
            Curated impact metrics & engineering highlights
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          variants={containerVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              variants={cardVar}
              className={`group glass-card interactive p-8 md:p-12 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 ${project.span}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="font-mono text-xs uppercase text-foreground/50 tracking-wider">
                      {project.company}
                    </span>
                    <span className="w-1 h-1 bg-accent/50 rounded-full" />
                    <span className="font-mono text-xs text-accent tracking-wider">
                      {project.role}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition-all duration-300 shrink-0" />
              </div>

              <div className="flex-1 mt-4">
                <p className="font-sans text-foreground/70 leading-relaxed text-lg font-light">
                  {project.description}
                </p>
              </div>

              <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-white/5 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs px-2 py-1 bg-white/5 text-foreground/60 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="font-mono text-2xl md:text-3xl font-bold text-accent group-hover:scale-110 origin-right transition-transform duration-300 whitespace-nowrap">
                  {project.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
