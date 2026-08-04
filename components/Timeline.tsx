'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const items = [
  {
    title: 'Generative AI with Large Language Models',
    organization: 'Coursera',
    type: 'Certification'
  },
  {
    title: 'ChatGPT for Beginners: SciFi Writing with DALL-E',
    organization: 'Coursera',
    type: 'Certification'
  },
  {
    title: 'Postgraduate Diploma in Information Security',
    organization: 'IGNOU',
    date: '2021–2022',
    type: 'Education'
  },
  {
    title: 'Bachelor of Engineering, Software Engineering',
    organization: 'Chitkara University',
    date: '2013–2017',
    type: 'Education'
  }
]

export default function Timeline() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // We want the line to draw as user scrolls down the section
  // But maybe use inView for simpler sequential appearance, 
  // or pathLength tied to scroll. Let's tie it to scroll for the exact requested effect.

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-12 w-full bg-background border-t border-white/5 relative min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-4">
            Intellectual Capital
          </h2>
          <div className="h-0.5 w-24 bg-accent mx-auto" />
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Center Line for Desktop, Left Line for Mobile */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
          
          {/* Animated Line drawing over the static line */}
          <motion.div 
            className="absolute left-[0px] md:left-[calc(50%-0.5px)] top-0 w-px bg-accent origin-top"
            style={{ 
              scaleY: scrollYProgress,
              height: '100%' 
            }}
          />

          <div className="flex flex-col gap-12 md:gap-24">
            {items.map((item, index) => {
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className="relative w-full flex flex-col md:flex-row items-start md:items-center justify-between group">
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full bg-background border-2 border-accent z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", delay: 0.2 }}
                  />
                  
                  {/* Left Side Content (Desktop) */}
                  <motion.div 
                    className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left md:order-2'} pl-8 md:pl-0`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 border-l-2 md:border-l border-accent md:border-white/10 hover:border-accent">
                      <div className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
                        {item.type} {item.date && `// ${item.date}`}
                      </div>
                      <h3 className="font-sans text-xl md:text-2xl font-bold text-foreground mb-1 leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-mono text-sm text-muted-foreground uppercase">
                        {item.organization}
                      </p>
                    </div>
                  </motion.div>

                  {/* Empty space for opposite side on Desktop */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
