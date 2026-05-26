'use client'
import { useEffect, useRef } from 'react'

/* ── Node definitions ── */
const NODES = [
  { x: 0.04, y: 0.48, r: 16, bg: '#e63946' },
  { x: 0.10, y: 0.28, r: 13, bg: '#4da6d9' },
  { x: 0.11, y: 0.68, r: 14, bg: '#4da6d9' },
  { x: 0.20, y: 0.18, r: 12, bg: '#e63946' },
  { x: 0.22, y: 0.46, r: 22, bg: '#4da6d9' },
  { x: 0.22, y: 0.82, r: 26, bg: '#023047' },
  { x: 0.30, y: 0.32, r: 13, bg: '#4da6d9' },
  { x: 0.36, y: 0.55, r: 18, bg: '#4da6d9' },
  { x: 0.38, y: 0.20, r: 14, bg: '#4da6d9' },
  { x: 0.42, y: 0.78, r: 13, bg: '#fb8500' },
  { x: 0.48, y: 0.38, r: 20, bg: '#023047' },
  { x: 0.52, y: 0.62, r: 15, bg: '#fb8500' },
  { x: 0.55, y: 0.18, r: 14, bg: '#fb8500' },
  { x: 0.60, y: 0.44, r: 22, bg: '#023047' },
  { x: 0.62, y: 0.72, r: 13, bg: '#023047' },
  { x: 0.68, y: 0.20, r: 16, bg: '#fb8500' },
  { x: 0.70, y: 0.58, r: 15, bg: '#fb8500' },
  { x: 0.74, y: 0.82, r: 11, bg: '#4da6d9' },
  { x: 0.80, y: 0.32, r: 13, bg: '#fb8500' },
  { x: 0.84, y: 0.52, r: 38, bg: '#023047' },
  { x: 0.90, y: 0.22, r: 12, bg: '#e63946' },
  { x: 0.92, y: 0.72, r: 11, bg: '#4da6d9' },
  { x: 0.97, y: 0.45, r: 10, bg: '#4da6d9' },
]

/* ── Edge definitions ── */
const EDGES = [
  { a: 0,  b: 1,  c: '#4da6d9' }, { a: 0,  b: 2,  c: '#fb8500' },
  { a: 0,  b: 5,  c: '#fb8500' }, { a: 1,  b: 4,  c: '#4da6d9' },
  { a: 2,  b: 5,  c: '#4da6d9' }, { a: 3,  b: 4,  c: '#4da6d9' },
  { a: 4,  b: 6,  c: '#4da6d9' }, { a: 4,  b: 5,  c: '#023047' },
  { a: 6,  b: 8,  c: '#4da6d9' }, { a: 6,  b: 7,  c: '#023047' },
  { a: 7,  b: 9,  c: '#023047' }, { a: 8,  b: 12, c: '#4da6d9' },
  { a: 9,  b: 11, c: '#023047' }, { a: 4,  b: 10, c: '#4da6d9' },
  { a: 7,  b: 10, c: '#023047' }, { a: 8,  b: 10, c: '#4da6d9' },
  { a: 10, b: 11, c: '#023047' }, { a: 10, b: 12, c: '#4da6d9' },
  { a: 10, b: 13, c: '#023047' }, { a: 11, b: 14, c: '#023047' },
  { a: 12, b: 15, c: '#4da6d9' }, { a: 13, b: 14, c: '#023047' },
  { a: 13, b: 15, c: '#023047' }, { a: 13, b: 16, c: '#023047' },
  { a: 13, b: 18, c: '#023047' }, { a: 13, b: 19, c: '#023047' },
  { a: 14, b: 17, c: '#023047' }, { a: 15, b: 18, c: '#4da6d9' },
  { a: 16, b: 19, c: '#023047' }, { a: 17, b: 21, c: '#4da6d9' },
  { a: 18, b: 19, c: '#023047' }, { a: 19, b: 20, c: '#023047' },
  { a: 19, b: 21, c: '#023047' }, { a: 19, b: 22, c: '#023047' },
  { a: 20, b: 22, c: '#4da6d9' },
]

/* ── Solo floating dots ── */
const SOLO_DOTS = [
  { x: 0.15, y: 0.08, r: 5, color: '#4da6d9' },
  { x: 0.46, y: 0.06, r: 7, color: '#fb8500' },
  { x: 0.88, y: 0.82, r: 7, color: '#023047' },
]

/* ── Draw person silhouette (head + shoulders arc) ── */
function drawPerson(ctx, cx, cy, r) {
  // head
  ctx.beginPath()
  ctx.arc(cx, cy - r * 0.18, r * 0.26, 0, Math.PI * 2)
  ctx.fill()
  // body semicircle
  ctx.beginPath()
  ctx.arc(cx, cy + r * 0.30, r * 0.36, Math.PI, 0)
  ctx.fill()
}

export default function NetworkGraph() {
  const canvasRef  = useRef(null)
  const stateRef   = useRef({ pulse: 0, scrollY: 0, mouse: { x: 0.5, y: 0.5 } })
  const rafRef     = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    /* resize — honours devicePixelRatio up to ×2 */
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width  = canvas.offsetWidth  * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    /* listeners */
    const onResize   = () => resize()
    const onScroll   = () => { stateRef.current.scrollY = window.scrollY }
    const onMouse    = (e) => {
      stateRef.current.mouse = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
    }
    const onTouch    = (e) => {
      if (!e.touches[0]) return
      stateRef.current.mouse = {
        x: e.touches[0].clientX / window.innerWidth,
        y: e.touches[0].clientY / window.innerHeight,
      }
    }

    window.addEventListener('resize',    onResize)
    window.addEventListener('scroll',    onScroll,  { passive: true })
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('touchmove', onTouch,   { passive: true })

    /* draw loop */
    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      if (!w || !h) { rafRef.current = requestAnimationFrame(draw); return }

      ctx.clearRect(0, 0, w, h)

      const { mouse, scrollY } = stateRef.current
      stateRef.current.pulse  += 0.012
      const pulse = stateRef.current.pulse
      const scale = Math.max(0.5, Math.min(1.1, Math.min(w, h) / 650))

      /* compute animated positions */
      const pos = NODES.map((n, i) => {
        const ph    = i * 0.55
        const amp   = 0.007 + (i % 6) * 0.0015
        const fx    = Math.sin(pulse + ph)        * amp * w
        const fy    = Math.cos(pulse * 0.85 + ph) * amp * h
        const depth = 0.4 + (i % 4) * 0.15
        const sy    = scrollY * depth * 0.04
        const px    = (mouse.x - 0.5) * (n.x - 0.5) * w * 0.06
        const py    = (mouse.y - 0.5) * (n.y - 0.5) * h * 0.06
        return { x: n.x * w + fx + px, y: n.y * h + fy + py - sy }
      })

      /* edges */
      ctx.lineWidth = 1.6
      EDGES.forEach(({ a, b, c }) => {
        ctx.beginPath()
        ctx.moveTo(pos[a].x, pos[a].y)
        ctx.lineTo(pos[b].x, pos[b].y)
        ctx.strokeStyle = c
        ctx.globalAlpha = 0.55
        ctx.stroke()
      })
      ctx.globalAlpha = 1

      /* solo dots */
      SOLO_DOTS.forEach((d, i) => {
        const ph = i * 1.3
        const sx = Math.sin(pulse + ph) * 6
        const sy = Math.cos(pulse * 0.7 + ph) * 6
        ctx.beginPath()
        ctx.arc(d.x * w + sx, d.y * h + sy - stateRef.current.scrollY * 0.02, d.r * scale, 0, Math.PI * 2)
        ctx.fillStyle   = d.color
        ctx.globalAlpha = 0.75
        ctx.fill()
        ctx.globalAlpha = 1
      })

      /* nodes */
      NODES.forEach((n, i) => {
        const { x, y } = pos[i]
        const r = (n.r + Math.sin(pulse + i * 0.55) * 1.4) * scale

        // glow halo
        ctx.beginPath()
        ctx.arc(x, y, r + 5, 0, Math.PI * 2)
        ctx.fillStyle   = n.bg + '25'
        ctx.fill()

        // circle fill
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = n.bg
        ctx.fill()

        // person icon
        ctx.fillStyle = 'rgba(255,255,255,0.88)'
        drawPerson(ctx, x, y, r)
      })

      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize',    onResize)
      window.removeEventListener('scroll',    onScroll)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      /* Tailwind: fill parent absolutely, no pointer events, full size */
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}