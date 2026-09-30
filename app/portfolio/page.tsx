'use client'

import { useEffect } from 'react'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import ProjectGrid from '@/components/ProjectGrid'
import Timeline, { ArchitectureShowcase, ProductPhilosophy } from '@/components/Timeline'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

export default function Portfolio() {
  // Enforce scroll to top on reload for best experience with scroll animations
  useEffect(() => {
    // We only scroll to top if there's no hash in the URL, otherwise let browser handle it
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-background pt-24">
      <div id="about"><About /></div>
      <div id="case-studies"><ArchitectureShowcase /></div>
      <div id="philosophy"><ProductPhilosophy /></div>
      <div id="skills"><TechStack /></div>
      <div id="projects"><ProjectGrid /></div>
      <div id="certifications"><Timeline /></div>
      <div id="education"><Education /></div>
      <Footer />
    </div>
  )
}
