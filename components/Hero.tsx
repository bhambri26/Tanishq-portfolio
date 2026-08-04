'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Linkedin, Github } from 'lucide-react'

const ROLES = [
  "AI Product Manager (CSPO®)",
  "AI Product Owner & Data Strategist",
  "Data Analytics & IoT Lead @ Hexaware",
  "Palantir Foundry (AIP) Specialist",
  "GenAI & RAG Architect"
]

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

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
          className="font-display text-5xl md:text-8xl lg:text-[8.5rem] font-black uppercase tracking-[-0.04em] leading-[0.9] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
        >
          Tanishq
          <br />
          <span className="text-accent">Bhambri</span>
        </motion.h1>

        {/* Aspiration line - moved below name */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-sm md:text-base text-foreground/50 tracking-[0.2em] uppercase mb-6"
        >
          Aspiring AI Product Manager / AI Product Owner
        </motion.p>

        {/* Thin divider */}
        <motion.div 
          className="w-16 h-px bg-accent mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />

        {/* Role switcher */}
        <div className="h-10 md:h-12 overflow-hidden relative w-full flex justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentRoleIndex}
              className="font-mono text-accent/90 text-base md:text-xl tracking-wide"
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {ROLES[currentRoleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-4"
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
