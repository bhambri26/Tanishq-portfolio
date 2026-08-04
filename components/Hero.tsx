'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

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
  
  // Parallax effect for the background watermark text
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
        <h1 className="text-[15vw] font-display font-bold text-white/[0.02] select-none text-border tracking-tighter">
          AI & DATA
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Targeting: AI Product Manager / AI Product Owner Roles
        </motion.div>

        <motion.h1 
          className="font-display text-5xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Tanishq Bhambri
        </motion.h1>

        <div className="h-12 md:h-16 overflow-hidden relative w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentRoleIndex}
              className="font-mono text-accent text-lg md:text-2xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {ROLES[currentRoleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="font-mono text-xs uppercase text-muted tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
