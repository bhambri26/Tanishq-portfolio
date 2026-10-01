'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/SmoothScroll'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import ProjectGrid from '@/components/ProjectGrid'
import Timeline, { ArchitectureShowcase, ProductPhilosophy } from '@/components/Timeline'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

type Section = 'home' | 'about' | 'case-studies' | 'philosophy' | 'skills' | 'projects' | 'certifications' | 'education'

const sectionVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: 'easeIn' } }
}

function SectionContent({ section }: { section: Section }) {
  switch (section) {
    case 'home':
      return (
        <>
          <div id="hero"><Hero /></div>
          <Footer />
        </>
      )
    case 'about':
      return (
        <>
          <div id="about" className="pt-24"><About /></div>
          <Footer />
        </>
      )
    case 'case-studies':
      return (
        <>
          <div id="case-studies" className="pt-24"><ArchitectureShowcase /></div>
          <Footer />
        </>
      )
    case 'philosophy':
      return (
        <>
          <div id="philosophy" className="pt-24"><ProductPhilosophy /></div>
          <Footer />
        </>
      )
    case 'skills':
      return (
        <>
          <div id="skills" className="pt-24"><TechStack /></div>
          <Footer />
        </>
      )
    case 'projects':
      return (
        <>
          <div id="projects" className="pt-24"><ProjectGrid /></div>
          <Footer />
        </>
      )
    case 'certifications':
      return (
        <>
          <div id="certifications" className="pt-24"><Timeline /></div>
          <Footer />
        </>
      )
    case 'education':
      return (
        <>
          <div id="education" className="pt-24"><Education /></div>
          <Footer />
        </>
      )
    default:
      return null
  }
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home')

  const handleNavigate = useCallback((section: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActiveSection(section as Section)
  }, [])

  // Scroll to top whenever section changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeSection])

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-background">
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeSection}
          variants={sectionVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <SectionContent section={activeSection} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
