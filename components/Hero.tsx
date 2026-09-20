'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Linkedin, Github } from 'lucide-react'
import Image from 'next/image'

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

      {/* Main Content — two-column layout */}
      <div className="z-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 w-full max-w-6xl">

        {/* LEFT — Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-[-0.04em] leading-[0.9] mb-4">
            <span className="overflow-hidden block">
              <motion.span 
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Tanishq
              </motion.span>
            </span>
            <span className="overflow-hidden block">
              <motion.span 
                className="block text-accent"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                Bhambri
              </motion.span>
            </span>
          </h1>

          {/* Aspiration line */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
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

          {/* Key skills badges */}
          <motion.div 
            className="flex flex-wrap justify-center lg:justify-start gap-2 max-w-xl mb-6"
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

          {/* CTA & Social links */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Download Resume Button */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Tanishq_Bhambri_Resume.pdf"
              className="interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-background font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(245,166,35,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>

            {/* Book a 15-min Chat */}
            <a 
              href="#book-chat"
              className="interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/40 bg-accent/10 hover:bg-accent/20 text-accent font-mono text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              Book 15-Min Chat
            </a>

            <a 
              href="https://www.linkedin.com/in/tanishqbhambri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-accent/10 hover:border-accent/30 transition-all text-foreground/70 hover:text-accent font-mono text-xs uppercase tracking-wider"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a 
              href="https://github.com/bhambri26" 
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-accent/10 hover:border-accent/30 transition-all text-foreground/70 hover:text-accent font-mono text-xs uppercase tracking-wider"
            >
              <Github size={14} />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Photo */}
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Amber glow behind photo */}
          <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-2xl scale-110 pointer-events-none" />

          {/* Decorative corner accents */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg" />

          {/* Photo */}
          <div className="relative w-52 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/tanishq.jpg"
              alt="Tanishq Bhambri"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Subtle amber gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
          </div>

          {/* Experience badge floating bottom-right */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-accent text-background font-mono text-xs font-bold px-3 py-2 rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 400, damping: 20 }}
          >
            9 YRS EXP
          </motion.div>
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

