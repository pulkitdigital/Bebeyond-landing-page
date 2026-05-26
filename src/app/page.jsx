'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
      <style>{`
        /* ── Responsive banner ── */
        .banner-text {
          font-size: 11px;
          letter-spacing: 0.05em;
        }
        @media (max-width: 480px) {
          .banner-text {
            font-size: 10px;
            letter-spacing: 0.02em;
          }
        }
      `}</style>

      <PageIntro onComplete={() => setIntroComplete(true)} />

      <AnimatePresence>
        {introComplete && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeIn' }}
          >
            <CursorGlow />

            {/* ── Announcement banner ── */}
            <motion.div
              initial={{ opacity: 0, y: -32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '100%',
                backgroundColor: '#f97316',
                padding: '10px 24px',
                textAlign: 'center',
                color: '#ffffff',
                fontFamily: "'Public Sans', sans-serif",
                boxSizing: 'border-box',
              }}
            >
              <span className="banner-text" style={{ fontWeight: 500 }}>
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
              </span>
            </motion.div>

            {/* ── Staggered sections ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Navbar />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Hero />
            </motion.div>

            {/* Rest of sections — scroll-triggered inside each component */}
            <Problems />
            <AuditSteps />
            <Portfolio />
            <Founder />
            <Services />
            <AuditForm />
            <FAQ />
            <FinalCTA />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}