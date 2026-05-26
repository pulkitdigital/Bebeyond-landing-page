'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { FaBullseye } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problems from '@/components/Problems'
import AuditSteps from '@/components/AuditSteps'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import AuditForm from '@/components/AuditForm'
import FAQ from '@/components/FAQ'
import CursorGlow from '@/components/CursorGlow'
import PageIntro from '@/components/PageIntro'

const Founder  = dynamic(() => import('@/components/Founder'),  { ssr: false })
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), { ssr: false })

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      const lenis = new Lenis({ duration: 1.3, smooth: true })
      const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
      requestAnimationFrame(raf)
    }
    if (introComplete) initLenis()
  }, [introComplete])

  return (
    <>
      <PageIntro onComplete={() => setIntroComplete(true)} />

      <main
        style={{
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 400ms ease-in',
        }}
      >
        <CursorGlow />

        {/* ── Announcement banner ── */}
        <div
          style={{
            width: '100%',
            backgroundColor: '#f97316',
            padding: '10px 24px',
            textAlign: 'center',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.05em',
            color: '#ffffff',
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          <FaBullseye
            aria-hidden
            style={{
              display: 'inline-block',
              marginRight: 6,
              width: 14,
              height: 14,
              verticalAlign: '-2px',
              flexShrink: 0,
            }}
          />
          <strong style={{ fontWeight: 700 }}>LIMITED:</strong>{' '}
          Free Digital Audit for Prayagraj Businesses —{' '}
          <a
            href="#audit-form"
            style={{
              fontWeight: 700,
              color: '#ffffff',
              textDecoration: 'underline',
              transition: 'color 150ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffedd5')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
          >
            Only 5 Spots Left This Month
          </a>
        </div>

        <Navbar />
        <Hero />
        <Problems />
        <AuditSteps />
        <Portfolio />
        <Founder />
        <Services />
        <AuditForm />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  )
}