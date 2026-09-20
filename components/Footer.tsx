'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-white/5 py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors interactive group"
          >
            <Mail size={18} className="group-hover:-rotate-12 transition-transform" />
            <a href="mailto:bhambritanishq08@gmail.com" className="font-mono uppercase tracking-wide">
              bhambritanishq08@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors interactive group"
          >
            <Phone size={18} className="group-hover:rotate-12 transition-transform" />
            <a href="tel:+919501019292" className="font-mono uppercase tracking-wide">
              +91 9501019292
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Tanishq_Bhambri_Resume.pdf"
              className="interactive inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-accent/40 text-foreground/80 hover:text-accent font-mono text-xs uppercase tracking-wider transition-all"
            >
              Download Resume (PDF)
            </a>
            <a
              href="#book-chat"
              className="interactive inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs uppercase tracking-wider hover:bg-accent/20 transition-all"
            >
              Book 15-Min Chat
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="text-center md:text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tighter text-foreground mb-2 text-border mix-blend-difference">
            "Let's turn raw data into real decisions."
          </h4>
          <p className="font-mono text-xs uppercase text-muted-foreground tracking-widest mt-4">
            © {new Date().getFullYear()} Tanishq Bhambri • AI Product Leader & Data Strategist
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
