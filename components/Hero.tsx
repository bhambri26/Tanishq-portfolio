'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Linkedin, Github, Mail, Sparkles } from 'lucide-react'
import Image from 'next/image'

// PM + Data + AI skills that scroll in the marquee
const MARQUEE_SKILLS = [
  "PALANTIR AIP",
  "PRODUCT STRATEGY",
  "CSPO®",
  "SQL",
  "GENAI & RAG",
  "PYTHON",
  "MOSCOW PRIORITISATION",
  "ROADMAPPING",
  "SCRUM",
  "MACHINE LEARNING",
  "AZURE DEVOPS",
  "OKRs",
  "USER STORY MAPPING",
  "POWER BI",
  "SPRINT PLANNING",
  "DATA ANALYTICS",
  "LLM ENGINEERING",
  "A/B TESTING",
]

// Double the list so we have enough for seamless infinite scroll
const TRACK = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS]

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden">
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
      <div className="z-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 w-full max-w-6xl pt-20 pb-6">

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

          {/* Social links — icons only */}
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
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-accent/10 hover:border-accent/30 transition-all text-foreground/70 hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/bhambri26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-accent/10 hover:border-accent/30 transition-all text-foreground/70 hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:tanishqbhambri26@gmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-accent/10 hover:border-accent/30 transition-all text-foreground/70 hover:text-accent"
              aria-label="Email"
            >
              <Mail size={18} />
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
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110 pointer-events-none" />

          {/* Photo */}
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10">
            <Image
              src="/tanishq.jpg"
              alt="Tanishq Bhambri"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
          </div>

          {/* Experience badge */}
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

      {/* ─── Skill Marquee — integrated at the bottom of Hero ─── */}
      <motion.div
        className="w-full z-10 mt-auto overflow-hidden border-t border-white/5 bg-black/20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        {/* Top track — left to right */}
        <div className="relative flex overflow-hidden py-3">
          <motion.div
            className="flex whitespace-nowrap gap-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {TRACK.map((skill, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0">
                <span className="font-display font-black text-xl md:text-2xl text-foreground/15 hover:text-accent/70 transition-colors duration-300 tracking-wider uppercase">
                  {skill}
                </span>
                <Sparkles className="text-accent/30 w-3 h-3" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom track — right to left */}
        <div className="relative flex overflow-hidden pb-3 border-t border-white/5">
          <motion.div
            className="flex whitespace-nowrap gap-8 items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 38 }}
          >
            {[...TRACK].reverse().map((skill, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0">
                <span className="font-display font-bold text-lg md:text-xl text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)] hover:[-webkit-text-stroke:1px_rgba(245,166,35,0.6)] transition-all duration-300 tracking-widest uppercase">
                  {skill}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent/30 shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
