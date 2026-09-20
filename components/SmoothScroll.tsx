'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Calendar, Menu, X, ExternalLink, Clock, Video, CheckCircle2 } from 'lucide-react'

// Default Google Calendar appointment scheduling URL or fallback Google Calendar link
const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/r"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [calUrl, setCalUrl] = useState(GOOGLE_CALENDAR_URL)
  const [isEditingUrl, setIsEditingUrl] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Load custom calendar URL from localStorage if user updated it
    const savedUrl = localStorage.getItem('tb_booking_url')
    if (savedUrl) setCalUrl(savedUrl)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const saveCustomUrl = (newUrl: string) => {
    setCalUrl(newUrl)
    localStorage.setItem('tb_booking_url', newUrl)
    setIsEditingUrl(false)
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' 
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
            <a href="#skills" className="font-mono text-xs uppercase tracking-wider text-foreground/70 hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="font-mono text-xs uppercase tracking-wider text-foreground/70 hover:text-accent transition-colors">Projects</a>
            <a href="#certifications" className="font-mono text-xs uppercase tracking-wider text-foreground/70 hover:text-accent transition-colors">Certifications</a>
          </nav>

          {/* TOP TOOLBAR: The ONLY place for Download Resume & Book 15-Min Chat */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Tanishq_Bhambri_Resume.pdf"
              className="interactive inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:border-accent/40 hover:bg-accent/10 text-foreground/90 hover:text-accent font-mono text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5"
            >
              <Download size={14} />
              Download Resume
            </a>

            <button
              onClick={() => setModalOpen(true)}
              className="interactive inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-background hover:bg-accent/90 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(245,166,35,0.3)] transform hover:-translate-y-0.5"
            >
              <Calendar size={14} />
              Book 15-Min Chat
            </button>
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
              onClick={() => setModalOpen(true)}
              className="interactive p-2 rounded-full bg-accent text-background"
              aria-label="Book 15-Min Chat"
            >
              <Calendar size={16} />
            </button>
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
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)} 
              className="font-mono text-sm uppercase text-foreground/80 hover:text-accent"
            >
              Skills
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
              <button
                onClick={() => { setMobileMenuOpen(false); setModalOpen(true); }}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-accent text-background font-mono text-xs uppercase font-bold"
              >
                <Calendar size={14} />
                Book 15-Min Chat
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* ─── GOOGLE CALENDAR / INTERVIEW SCHEDULING MODAL ─── */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
            {/* Backdrop click to dismiss */}
            <div 
              className="absolute inset-0 cursor-pointer" 
              onClick={() => setModalOpen(false)} 
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg glass-card p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full border border-white/10 text-foreground/60 hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  <Calendar size={20} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">
                    Direct Calendar Scheduling
                  </span>
                  <h3 className="font-sans text-xl font-bold text-foreground">
                    Book a 15-Min Strategy / Intro Chat
                  </h3>
                </div>
              </div>

              <p className="font-sans text-sm text-foreground/70 font-light leading-relaxed mb-6">
                Connect with Tanishq Bhambri regarding AI Product Management, Palantir AIP architecture, or enterprise GenAI opportunities.
              </p>

              {/* Call Details */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5 text-foreground/80">
                  <Clock size={15} className="text-accent" />
                  <span>15 Minutes</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5 text-foreground/80">
                  <Video size={15} className="text-accent" />
                  <span>Google Meet / Teams</span>
                </div>
              </div>

              {/* Direct Booking Actions */}
              <div className="space-y-3 mb-6">
                <a
                  href={calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-accent text-background font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(245,166,35,0.4)]"
                >
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    Schedule via Google Calendar
                  </span>
                  <ExternalLink size={15} />
                </a>

                <a
                  href="https://calendly.com/tanishqbhambri/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:border-accent/40 text-foreground hover:text-accent font-mono text-xs uppercase tracking-wider transition-all"
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    Alternative: Calendly Direct Slot
                  </span>
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Direct Reachout */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-4">
                <p className="font-mono text-xs text-foreground/50 uppercase tracking-wider mb-2">
                  Immediate Contact:
                </p>
                <div className="flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs text-foreground/80">
                  <a href="mailto:bhambritanishq08@gmail.com" className="hover:text-accent transition-colors">
                    bhambritanishq08@gmail.com
                  </a>
                  <a href="tel:+919501019292" className="hover:text-accent transition-colors">
                    +91 9501019292
                  </a>
                </div>
              </div>

              {/* Custom Google Calendar Connector */}
              <div className="pt-2 border-t border-white/10">
                {!isEditingUrl ? (
                  <button
                    onClick={() => setIsEditingUrl(true)}
                    className="font-mono text-[11px] text-accent/80 hover:text-accent underline cursor-pointer"
                  >
                    ⚙ Configure your custom Google Calendar appointment link
                  </button>
                ) : (
                  <div className="mt-2 space-y-2">
                    <label className="font-mono text-[10px] uppercase text-foreground/50 tracking-wider block">
                      Google Calendar Appointment Schedule URL:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        defaultValue={calUrl}
                        id="calUrlInput"
                        placeholder="https://calendar.google.com/calendar/appointments/schedules/..."
                        className="flex-1 bg-black/40 border border-white/20 rounded-lg px-3 py-1.5 text-xs text-foreground font-mono focus:border-accent outline-none"
                      />
                      <button
                        onClick={() => {
                          const input = document.getElementById('calUrlInput') as HTMLInputElement
                          if (input?.value) saveCustomUrl(input.value)
                        }}
                        className="px-3 py-1.5 rounded-lg bg-accent text-background font-mono text-xs font-bold uppercase"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

