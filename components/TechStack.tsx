'use client'

import { motion } from 'framer-motion'
import { Database, Cloud, Cog, Users } from 'lucide-react'

const categories = [
  {
    title: 'Data & ML',
    icon: <Database size={20} className="text-muted-foreground mr-3" />,
    items: ['SQL', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 'PyTorch', 'Machine Learning', 'Predictive Modeling', 'Power BI']
  },
  {
    title: 'Platforms',
    icon: <Cloud size={20} className="text-muted-foreground mr-3" />,
    items: ['Palantir Foundry', 'Microsoft Azure', 'PEGA CRM', 'SharePoint']
  },
  {
    title: 'Engineering',
    icon: <Cog size={20} className="text-muted-foreground mr-3" />,
    items: ['Data Pipelines', 'Data Migration', 'Dashboard Development', 'SDLC', 'Jira', 'Confluence', 'Azure Boards', 'Trello']
  },
  {
    title: 'Leadership',
    icon: <Users size={20} className="text-muted-foreground mr-3" />,
    items: ['Agile', 'Scrum', 'Stakeholder Communication', 'Business Analysis', 'Cross-functional Team Leadership']
  }
]

// variants for staggering children
const containerV = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemV = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
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
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-4">
            The Arsenal
          </h2>
          <div className="h-0.5 w-24 bg-accent" />
        </motion.div>

        <div className="flex flex-col gap-12">
          {categories.map((category, i) => (
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
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground/70">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {category.items.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemV}
                    className="relative overflow-hidden border border-white/10 bg-white/5 px-6 py-3 transition-colors hover:bg-white/10 interactive cursor-none"
                  >
                    <span className="font-sans relative z-10 text-foreground/90 font-medium tracking-wide">
                      {item}
                    </span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-accent -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:block" />
                    {/* Inner underline on specific chip hover */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-accent scale-x-0 origin-left transition-transform duration-300 ease-out hover:scale-x-100 peer" />
                    {/* The peer logic here is handled by basic CSS hover on the self div */}
                    <style dangerouslySetInnerHTML={{__html: `
                      .interactive:hover div:last-child {
                        transform: scaleX(1);
                      }
                    `}} />
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
