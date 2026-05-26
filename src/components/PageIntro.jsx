'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function PageIntro({ onComplete }) {
  const [done, setDone] = useState(false)
  const panelLeftRef = useRef(null)
  const panelRightRef = useRef(null)
  const beRef = useRef(null)
  const beyondRef = useRef(null)
  const taglineRef = useRef(null)
  const barFillRef = useRef(null)
  const barTrackRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(beRef.current,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power4.out' }
    )
    .fromTo(beyondRef.current,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power4.out' },
      '-=0.3'
    )
    .fromTo(taglineRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' },
      '-=0.15'
    )
    .fromTo(barTrackRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
      '-=0.1'
    )
    .fromTo(barFillRef.current,
      { width: '0%' },
      { width: '100%', duration: 1.1, ease: 'power1.inOut' },
      '<'
    )
    .to([beRef.current, beyondRef.current, taglineRef.current, barTrackRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.35,
      ease: 'power2.in',
      stagger: 0.05,
    }, '+=0.1')
    .to(panelLeftRef.current, {
      x: '-100%',
      duration: 0.85,
      ease: 'power4.inOut',
    }, '-=0.05')
    .to(panelRightRef.current, {
      x: '100%',
      duration: 0.85,
      ease: 'power4.inOut',
    }, '<')
    .call(() => {
      setDone(true)
      if (onComplete) onComplete()
    })

    return () => tl.kill()
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        done ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
      }`}
      aria-hidden={done}
    >

      {/* Left door panel */}
      <div
        ref={panelLeftRef}
        className="absolute top-0 left-0 h-full z-10 bg-[#faf8f4]"
        style={{ width: '50.5%' }}
      />

      {/* Right door panel */}
      <div
        ref={panelRightRef}
        className="absolute top-0 right-0 h-full z-10 bg-[#faf8f4]"
        style={{ width: '50.5%' }}
      />

      {/* Center content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 px-6">

        {/* BeBeyond */}
        <div className="flex items-baseline">
          <span
            ref={beRef}
            className="opacity-0 font-extrabold leading-none tracking-tight"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(44px, 12vw, 80px)',
              color: '#fb8500',
            }}
          >
            Be
          </span>
          <span
            ref={beyondRef}
            className="opacity-0 font-extrabold leading-none tracking-tight"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(44px, 12vw, 80px)',
              color: '#219ebc',
            }}
          >
            Beyond
          </span>
        </div>

        {/* Digital Solutions — Public Sans, bold, big */}
        <div
          ref={taglineRef}
          className="opacity-0 font-bold uppercase tracking-[6px] text-[#0a1628]"
          style={{
            fontFamily: "'Public Sans', sans-serif",
            fontSize: 'clamp(14px, 3.5vw, 24px)',
          }}
        >
          Digital Solutions
        </div>

        {/* Progress bar */}
        <div ref={barTrackRef} className="opacity-0 mt-4 w-full max-w-[220px]">
          <div className="w-full h-[2px] rounded-full overflow-hidden bg-gray-200">
            <div
              ref={barFillRef}
              className="h-full rounded-full"
              style={{ width: '0%', background: 'linear-gradient(90deg, #fb8500, #219ebc)' }}
            />
          </div>
        </div>

      </div>
    </div>
  )
}