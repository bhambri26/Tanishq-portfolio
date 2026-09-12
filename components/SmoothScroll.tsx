'use client'
import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const initLenis = async () => {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.39/dist/lenis.min.js'
      script.async = true
      
      script.onload = () => {
        // @ts-ignore
        const lenis = new window.Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
      }
      
      document.body.appendChild(script)
      
      return () => {
        document.body.removeChild(script)
      }
    }
    
    initLenis()
  }, [])

  return null
}
