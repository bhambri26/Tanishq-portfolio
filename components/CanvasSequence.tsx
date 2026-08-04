'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

const TOTAL_FRAMES = 60

export default function CanvasSequence() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const imagesRef = useRef<HTMLImageElement[]>([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1])

  // Parallax text
  const textY1 = useTransform(scrollYProgress, [0, 0.5], ["100%", "-20%"])
  const textY2 = useTransform(scrollYProgress, [0.3, 0.8], ["100%", "-20%"])
  const textY3 = useTransform(scrollYProgress, [0.6, 1], ["100%", "-20%"])

  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.5], [0, 1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.8], [0, 1, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.9, 1], [0, 1, 1, 0])

  useEffect(() => {
    // Attempt to preload images
    let loadedCount = 0
    const images: HTMLImageElement[] = []
    
    // As we don't have actual frame images, we'll try loading one. 
    // If it fails, we fall back to generative canvas drawing.
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      const paddedIndex = i.toString().padStart(3, '0')
      img.src = `/frames/frame_${paddedIndex}.webp`
      
      img.onload = () => {
        loadedCount++
        if (loadedCount === TOTAL_FRAMES) setImagesLoaded(true)
      }
      
      img.onerror = () => {
        // Fallback: we won't set imagesLoaded to true
      }
      images.push(img)
    }
    imagesRef.current = images

    // Canvas setup
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
        drawFrame(Math.round(frameIndex.get()))
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Draw generative fallback or real image
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (imagesLoaded && imagesRef.current[index]) {
      // Draw actual image if available
      const img = imagesRef.current[index]
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    } else {
      // Generative visual fallback (data pipeline nodes assembling)
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const progress = index / (TOTAL_FRAMES - 1)
      
      // Node grid
      const cols = 8
      const rows = 4
      const spacingX = Math.min(canvas.width / (cols + 2), 150)
      const spacingY = Math.min(canvas.height / (rows + 2), 150)
      const startX = centerX - (cols - 1) * spacingX / 2
      const startY = centerY - (rows - 1) * spacingY / 2

      ctx.lineWidth = 1
      
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = startX + c * spacingX
          const y = startY + r * spacingY
          
          // Determine point appearance based on index
          const nodeDelay = (c/cols) * 0.7 + (r/rows) * 0.3
          if (progress > nodeDelay) {
            const appearProgress = Math.min((progress - nodeDelay) * 5, 1) // 0 to 1 quickly
            
            // Draw connections to previous
            if (c > 0) {
              const prevX = x - spacingX
              ctx.beginPath()
              ctx.moveTo(prevX, y)
              ctx.lineTo(prevX + spacingX * appearProgress, y)
              ctx.strokeStyle = `rgba(245, 166, 35, ${0.4 * appearProgress})` // amber lines
              ctx.stroke()
            }
            if (r > 0) {
              const prevY = y - spacingY
              ctx.beginPath()
              ctx.moveTo(x, prevY)
              ctx.lineTo(x, prevY + spacingY * appearProgress)
              ctx.strokeStyle = `rgba(245, 166, 35, ${0.2 * appearProgress})`
              ctx.stroke()
            }

            // Draw node
            ctx.beginPath()
            ctx.arc(x, y, 4 * appearProgress, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(240, 237, 232, ${appearProgress})`
            ctx.fill()
            
            // Halo for active nodes
            if (appearProgress > 0 && appearProgress < 1) {
              ctx.beginPath()
              ctx.arc(x, y, 20 * (1 - appearProgress), 0, Math.PI * 2)
              ctx.fillStyle = `rgba(245, 166, 35, ${(1 - appearProgress) * 0.5})`
              ctx.fill()
            }
          }
        }
      }
      
      // Data bursts passing through
      if (progress > 0.1) {
        const activeC = Math.floor((progress - 0.1) * cols * 1.5) % cols
        const activeR = Math.floor(progress * 10) % rows
        
        const bx = startX + activeC * spacingX
        const by = startY + activeR * spacingY
        
        ctx.beginPath()
        ctx.arc(bx, by, 8, 0, Math.PI * 2)
        ctx.fillStyle = '#F5A623'
        ctx.shadowBlur = 15
        ctx.shadowColor = '#F5A623'
        ctx.fill()
        ctx.shadowBlur = 0 // reset
      }
    }
  }

  useMotionValueEvent(frameIndex, "change", (latest) => {
    drawFrame(Math.round(latest))
  })

  // Initial draw
  useEffect(() => {
    drawFrame(0)
  }, [imagesLoaded])

  return (
    // 300vh space for scroll timeline
    <section ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        
        <div className="absolute inset-0 pointer-events-none ring-inset ring-[10vw] ring-background/50 blur-3xl opacity-80 mix-blend-multiply" />
        
        {/* Parallax Overlays */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden">
          <motion.h2 
            style={{ y: textY1, opacity: opacity1 }}
            className="absolute font-display font-bold text-6xl md:text-8xl tracking-tight text-foreground"
          >
            PALANTIR FOUNDRY
          </motion.h2>

          <motion.h2 
            style={{ y: textY2, opacity: opacity2 }}
            className="absolute font-display font-bold text-6xl md:text-8xl tracking-tight text-foreground"
          >
            PYTHON
          </motion.h2>

          <motion.h2 
            style={{ y: textY3, opacity: opacity3 }}
            className="absolute font-display font-bold text-6xl md:text-8xl tracking-tight text-accent text-center"
          >
            ML PIPELINES
          </motion.h2>
        </div>
        
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/80 to-background" />
      </div>
    </section>
  )
}
