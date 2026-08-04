'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    degree: 'Postgraduate Diploma in Information Security',
    institution: 'IGNOU, New Delhi, India',
    period: 'Jun 2021 – Jun 2022',
    description: 'Specialized in Enterprise Information Security, Network Defense, Cryptography & Security Governance.',
    icon: <GraduationCap className="text-accent shrink-0" size={24} />
  },
  {
    degree: 'Bachelor of Engineering — Software Engineering',
    institution: 'Chitkara University, Rajpura, Punjab, India',
    period: 'Aug 2013 – Jul 2017',
    description: 'Foundational degree covering SDLC, Object-Oriented Design, Data Structures, Algorithms & Database Systems.',
    icon: <GraduationCap className="text-accent shrink-0" size={24} />
  }
]

export default function Education() {
  return (
    <section className="py-20 px-4 md:px-12 w-full bg-background border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div 
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent font-mono text-xs uppercase tracking-widest mb-3">
            <Award size={14} />
            Academic Background
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter text-foreground mb-3">
            Education
          </h2>
          <div className="h-0.5 w-20 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  {item.icon}
                  <span className="font-mono text-xs text-accent uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                    {item.period}
                  </span>
                </div>
                
                <h3 className="font-sans text-xl font-bold text-foreground mb-2 leading-snug">
                  {item.degree}
                </h3>
                
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  {item.institution}
                </p>
              </div>

              <p className="font-sans text-sm text-foreground/60 leading-relaxed border-t border-white/5 pt-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
