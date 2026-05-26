'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0

    const move = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
    }
    const animate = () => {
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`
      requestAnimationFrame(animate)
    }
    window.addEventListener('mousemove', move)
    animate()
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dotRef} style={{ position: 'fixed', top: 0, left: 0, width: 8, height: 8, background: 'var(--orange)', borderRadius: '50%', zIndex: 9999, pointerEvents: 'none', transition: 'transform 0.05s' }} />
      <div ref={ringRef} style={{ position: 'fixed', top: 0, left: 0, width: 32, height: 32, border: '1.5px solid var(--blue)', borderRadius: '50%', zIndex: 9998, pointerEvents: 'none', opacity: 0.6 }} />
    </>
  )
}