'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Linkedin, Github } from 'lucide-react'

const KEY_SKILLS = [
  "Palantir Foundry (AIP)",
  "GenAI & RAG Architecture",
  "CSPO® Product Strategy",
  "Data Analytics & ML Pipelines",
  "Azure DevOps Agile"
]

export default function Hero() {
  const { scrollYProgress } = useScroll()
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Watermark */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h1 className="text-[18vw] font-display font-black text-white/[0.015] select-none tracking-[-0.06em] leading-none">
          TB
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">
        {/* Name */}
        <motion.h1 
          className="font-display text-5xl md:text-8xl lg:text-[8.5rem] font-black uppercase tracking-[-0.04em] leading-[0.9] mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
        >
          Tanishq
          <br />
          <span className="text-accent">Bhambri</span>
        </motion.h1>

        {/* Aspiration line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-sans text-sm md:text-base text-foreground/70 tracking-[0.2em] uppercase mb-4"
        >
          Aspiring AI Product Manager / AI Product Owner
        </motion.p>

        {/* Thin divider */}
        <motion.div 
          className="w-16 h-px bg-accent mb-5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        {/* Key skills badges replacing rolling text */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 max-w-2xl mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {KEY_SKILLS.map((skill, index) => (
            <span 
              key={index}
              className="font-mono text-xs text-accent/90 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-wider"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Social links (moved 2px up via -translate-y-[2px]) */}
        <motion.div
          className="flex items-center gap-4 -translate-y-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a 
            href="https://www.linkedin.com/in/tanishqbhambri" 
            target="_blank" 
            rel="noopener noreferrer"
            className="interactive flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-accent/10 hover:border-accent/30 transition-all text-foreground/70 hover:text-accent font-mono text-xs uppercase tracking-wider"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a 
            href="https://github.com/bhambri26" 
            target="_blank" 
            rel="noopener noreferrer"
            className="interactive flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-accent/10 hover:border-accent/30 transition-all text-foreground/70 hover:text-accent font-mono text-xs uppercase tracking-wider"
          >
            <Github size={14} />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="font-mono text-[10px] uppercase text-foreground/30 tracking-[0.3em] mb-3">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
