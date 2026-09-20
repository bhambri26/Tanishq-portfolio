'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Calendar, Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand/Logo */}
        <a 
          href="#hero" 
          className="interactive group flex items-center gap-2 text-foreground hover:text-accent transition-colors"
        >
          <span className="font-display font-black text-xl tracking-tighter text-accent">TB</span>
          <span className="font-mono text-xs uppercase tracking-widest text-foreground/70 hidden sm:inline-block">
            Tanishq Bhambri
          </span>
        </a>

        {/* Desktop Quick Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="font-mono text-xs uppercase tracking-wider text-foreground/70 hover:text-accent transition-colors">About</a>
          <a href="#case-studies" className="font-mono text-xs uppercase tracking-wider text-foreground/70 hover:text-accent transition-colors">Case Studies</a>
          <a href="#philosophy" className="font-mono text-xs uppercase tracking-wider text-foreground/70 hover:text-accent transition-colors">Philosophy</a>
          <a href="#projects" className="font-mono text-xs uppercase tracking-wider text-foreground/70 hover:text-accent transition-colors">Projects</a>
          <a href="#certifications" className="font-mono text-xs uppercase tracking-wider text-foreground/70 hover:text-accent transition-colors">Certifications</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Tanishq_Bhambri_Resume.pdf"
            className="interactive inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:border-accent/40 hover:bg-accent/10 text-foreground/90 hover:text-accent font-mono text-xs uppercase tracking-wider transition-all"
          >
            <Download size={13} />
            Resume
          </a>

          <a
            href="#book-chat"
            className="interactive inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent text-background hover:bg-accent/90 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_12px_rgba(245,166,35,0.25)]"
          >
            <Calendar size={13} />
            15-Min Chat
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Tanishq_Bhambri_Resume.pdf"
            className="interactive p-2 rounded-full border border-white/10 text-accent"
            aria-label="Download Resume"
          >
            <Download size={16} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="interactive p-2 rounded-full border border-white/10 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="sm:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 flex flex-col gap-4"
        >
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-mono text-sm uppercase text-foreground/80 hover:text-accent"
          >
            About
          </a>
          <a 
            href="#case-studies" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-mono text-sm uppercase text-foreground/80 hover:text-accent"
          >
            Case Studies & Architecture
          </a>
          <a 
            href="#philosophy" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-mono text-sm uppercase text-foreground/80 hover:text-accent"
          >
            Product Philosophy
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-mono text-sm uppercase text-foreground/80 hover:text-accent"
          >
            Projects
          </a>
          <a 
            href="#certifications" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-mono text-sm uppercase text-foreground/80 hover:text-accent"
          >
            Certifications
          </a>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Tanishq_Bhambri_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-accent/30 text-accent font-mono text-xs uppercase font-bold"
            >
              <Download size={14} />
              Download Resume
            </a>
            <a
              href="#book-chat"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-accent text-background font-mono text-xs uppercase font-bold"
            >
              <Calendar size={14} />
              Book 15-Min Chat
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
