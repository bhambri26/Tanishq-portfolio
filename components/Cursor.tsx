'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  // Track position with refs — no React state, no re-renders
  const pos = useRef({ x: -100, y: -100 })
  const isHovering = useRef(false)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Use rAF to batch DOM writes — no React re-render overhead
    const tick = () => {
      const scale = isHovering.current ? 2.5 : 1
      cursor.style.transform = `translate(${pos.current.x - 8}px, ${pos.current.y - 8}px) scale(${scale})`
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      isHovering.current = !!(
        t.tagName === 'A' ||
        t.tagName === 'BUTTON' ||
        t.closest('a') ||
        t.closest('button') ||
        t.classList.contains('interactive')
      )
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `body,a,button,[role="button"]{cursor:none!important}` }} />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[100] mix-blend-exclusion will-change-transform"
        style={{ transition: 'transform 0.08s linear', transform: 'translate(-100px,-100px)' }}
      />
    </>
  )
}
