'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' }
]

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      
      let currentActive = 'hero'
      let minDistance = Infinity

      sections.forEach(section => {
        if (!section) return
        const rect = section.getBoundingClientRect()
        const distance = Math.abs(rect.top)
        
        if (distance < minDistance && rect.top < window.innerHeight / 2) {
          minDistance = distance
          currentActive = section.id
        }
      })
      
      setActiveSection(currentActive)
    }

    // Trigger once on mount
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // If lenis is active, it intercepts native scrollIntoView when smooth
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="group relative flex items-center justify-start h-8 w-8"
          aria-label={`Scroll to ${item.label}`}
        >
          <div 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === item.id 
                ? 'bg-accent scale-150 shadow-[0_0_8px_rgba(245,166,35,0.5)]' 
                : 'bg-foreground/30 group-hover:bg-foreground/60'
            }`}
          />
          <span 
            className="absolute left-6 text-xs text-foreground/70 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap"
          >
            {item.label}
          </span>
        </button>
      ))}
    </motion.div>
  )
}
