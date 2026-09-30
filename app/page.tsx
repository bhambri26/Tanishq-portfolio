'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import SkillMarquee from '@/components/CanvasSequence'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  // Enforce scroll to top on reload for best experience with scroll animations
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-background flex flex-col">
      <div id="hero" className="flex-grow"><Hero /></div>
      <SkillMarquee />
      
      <div className="py-24 flex justify-center items-center relative z-10 bg-background">
        <Link 
          href="/portfolio" 
          className="interactive group flex items-center gap-3 px-8 py-4 bg-accent text-background font-mono font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_30px_rgba(245,166,35,0.4)] hover:shadow-[0_0_50px_rgba(245,166,35,0.6)] transition-all transform hover:-translate-y-1"
        >
          View Full Portfolio
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <Footer />
    </div>
  )
}
