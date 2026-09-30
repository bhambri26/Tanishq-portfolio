'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const SKILLS = [
  "PALANTIR FOUNDRY",
  "SQL",
  "PYTHON",
  "GENAI",
  "RAG ARCHITECTURE",
  "CSPO®",
  "MACHINE LEARNING",
  "AZURE DEVOPS",
  "DATA ANALYTICS",
  "POWER BI"
]

export default function SkillMarquee() {
  return (
    <section className="relative py-12 md:py-20 bg-background overflow-hidden border-y border-white/5 flex flex-col justify-center">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />
      
      {/* Top Marquee */}
      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-8 md:gap-16 items-center px-4 md:px-8"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {/* Repeat multiple times to ensure seamless infinite scroll on ultra-wide screens */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 md:gap-16 items-center">
              {SKILLS.map((skill, index) => (
                <div key={index} className="flex items-center gap-8 md:gap-16">
                  <span className="font-display font-black text-4xl md:text-6xl text-foreground/10 hover:text-accent transition-colors duration-300">
                    {skill}
                  </span>
                  <Sparkles className="text-accent/40 w-6 h-6 md:w-8 md:h-8" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom Marquee (Reverse direction) */}
      <div className="relative flex overflow-hidden mt-6 md:mt-10 group">
        <motion.div 
          className="flex whitespace-nowrap gap-8 md:gap-16 items-center px-4 md:px-8"
          animate={{ x: [-1035, 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 md:gap-16 items-center">
              {SKILLS.reverse().map((skill, index) => (
                <div key={index} className="flex items-center gap-8 md:gap-16">
                  <span className="font-display font-bold text-3xl md:text-5xl text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] hover:[-webkit-text-stroke:1px_var(--tw-colors-accent)] transition-colors duration-300">
                    {skill}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-accent/40" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
