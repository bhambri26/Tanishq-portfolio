'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const metrics = [
  { value: '9', label: 'Years Experience' },
  { value: '12', label: 'x Faster Operations Decisioning (12h→1h)' },
  { value: '20', label: 'Hours Manual Reporting Saved / Cycle' },
  { value: '60', label: '% Conversion Rate Increase' }
]

function Counter({ targetValue, suffix = '' }: { targetValue: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const duration = 2000 // 2 seconds

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        // easeOutQuart
        const easeOut = 1 - Math.pow(1 - progress, 4)
        
        setCount(Math.floor(easeOut * targetValue))

        if (progress < 1) {
          requestAnimationFrame(animateCount)
        }
      }

      requestAnimationFrame(animateCount)
    }
  }, [isInView, targetValue])

  return (
    <span ref={ref} className="font-display text-4xl md:text-6xl font-bold text-accent">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Slower scroll speed for the rotated text
  const yRotated = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

  return (
    <section ref={containerRef} className="relative min-h-screen py-24 px-4 md:px-12 w-full flex items-center bg-background overflow-hidden border-t border-white/5">
      <div className="absolute left-0 h-full w-[100px] hidden md:flex items-center justify-center opacity-20 pointer-events-none">
        <motion.div 
          style={{ y: yRotated }}
          className="-rotate-90 whitespace-nowrap font-display text-6xl tracking-tighter text-border font-bold uppercase"
        >
          9 YEARS. HEXAWARE & INFOSYS. AI PRODUCT STRATEGY.
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto w-full md:pl-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Mobile strip text */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) }}
          className="md:hidden opacity-30 whitespace-nowrap font-display text-2xl tracking-tighter text-border uppercase"
        >
          9 YEARS. HEXAWARE & INFOSYS. AI PRODUCT STRATEGY.
        </motion.div>

        <div className="lg:col-span-7 col-span-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">
              Current Role & Strategic Horizon
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight flex flex-col">
              <span className="overflow-hidden block">
                <motion.span 
                  className="block"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  Data Analytics & IoT Lead <span className="text-accent">@ Hexaware</span> →
                </motion.span>
              </span>
              <span className="overflow-hidden block">
                <motion.span 
                  className="block"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  Aspiring <span className="text-accent">AI Product Manager / Owner</span>
                </motion.span>
              </span>
            </h3>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl font-sans leading-relaxed text-foreground/80 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Certified Scrum Product Owner (<span className="text-accent font-semibold">CSPO®</span>) with 9 years of experience bridging deep data engineering, Palantir Foundry (AIP), and GenAI/LLM pipelines with enterprise AI product strategy.
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg font-sans leading-relaxed text-foreground/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Hexaware Technologies & Infosys, I have led end-to-end ML lifecycles across 5 key phases, managed product backlogs in Azure DevOps, and personally defined acceptance criteria for Palantir Foundry AI platforms—cutting operations decision time from <span className="text-accent font-medium">12 hours to 1 hour</span> and shrinking a 5-person manual reporting workflow down to 1.
          </motion.p>
        </div>

        <div className="lg:col-span-5 col-span-1 grid grid-cols-2 gap-x-8 gap-y-12">
          {metrics.map((metric, i) => {
            const numValue = parseInt(metric.value)
            const isPercent = metric.label.includes('%')
            const isX = metric.label.includes('x')
            
            return (
              <motion.div 
                key={metric.label}
                className="flex flex-col space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Counter targetValue={numValue} suffix={isPercent ? '%' : isX ? 'x' : 'h'} />
                <span className="font-mono text-sm text-foreground/50 uppercase tracking-widest leading-tight">
                  {metric.label.replace('% ', '').replace('x ', '')}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
