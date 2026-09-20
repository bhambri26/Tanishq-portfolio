'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import CanvasSequence from '@/components/CanvasSequence'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import ProjectGrid from '@/components/ProjectGrid'
import Timeline, { ArchitectureShowcase, ProductPhilosophy } from '@/components/Timeline'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

export default function Home() {
  // Enforce scroll to top on reload for best experience with scroll animations
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-background">
      <div id="hero"><Hero /></div>
      <CanvasSequence />
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
