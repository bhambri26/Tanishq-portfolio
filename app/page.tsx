'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import CanvasSequence from '@/components/CanvasSequence'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import ProjectGrid from '@/components/ProjectGrid'
import Timeline from '@/components/Timeline'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

export default function Home() {
  // Enforce scroll to top on reload for best experience with scroll animations
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-background">
      <Hero />
      <CanvasSequence />
      <About />
      <TechStack />
      <ProjectGrid />
      <Timeline />
      <Education />
      <Footer />
    </div>
  )
}
