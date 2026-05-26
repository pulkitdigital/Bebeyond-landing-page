'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MdSentimentVeryDissatisfied, MdCurrencyRupee, MdHelpOutline } from 'react-icons/md'
gsap.registerPlugin(ScrollTrigger)

const CARD_ICON = 'h-9 w-9 shrink-0 text-[#fb8500]'

const problems = [
  {
    Icon: MdSentimentVeryDissatisfied,
    title: "You're posting but getting no results",
    desc: "You put time into Instagram posts — but your phone stays silent. No DMs. No calls. No customers. It feels like shouting into the void.",
  },
  {
    Icon: MdCurrencyRupee,
    title: "You boosted posts and wasted money",
    desc: "You spent ₹500, ₹2000, even ₹10,000 boosting posts. Got some likes. Zero real enquiries. You're done throwing money at things that don't work.",
  },
  {
    Icon: MdHelpOutline,
    title: "You don't know where to start",
    desc: "Website? SEO? Reels? Ads? Everyone says something different. It's overwhelming — and you have a business to run, not a marketing degree to earn.",
  },
]

export default function Problems() {
  const cardsRef = useRef([])
  const titleRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
    )
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.12,
          scrollTrigger: { trigger: card, start: 'top 88%' },
        }
      )
    })
  }, [])

  return (
    <section id="problems" style={{ background: 'var(--white)', padding: '80px 5%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: 52 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--orange)',
              fontFamily: "'Public Sans', sans-serif",
              marginBottom: 12,
            }}
          >
            Sound Familiar?
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(26px, 4vw, 42px)',
              fontWeight: 800,
              color: 'var(--ink)',
              marginBottom: 14,
            }}
          >
            Does This Describe Your Business?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'var(--muted)',
              maxWidth: 540,
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            You&apos;re not alone. These are the most common digital marketing frustrations we hear
            from business owners across Prayagraj.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {problems.map((p, i) => {
            const Icon = p.Icon
            return (
            <div
              key={p.title}
              ref={(el) => {
                cardsRef.current[i] = el
              }}
              style={{
                background: 'var(--light-grey)',
                borderRadius: 16,
                padding: 32,
                borderLeft: '4px solid #fb8500',
              }}
            >
              <Icon className={CARD_ICON} aria-hidden />
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: 12,
                  marginTop: 16,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--muted)',
                  lineHeight: 1.65,
                  fontFamily: "'Public Sans', sans-serif",
                }}
              >
                {p.desc}
              </p>
            </div>
            )
          })}
        </div>

        <div
          style={{
            marginTop: 40,
            background: 'var(--ink)',
            borderRadius: 16,
            padding: '28px 36px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.75,
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            The problem isn&apos;t you.{' '}
            <strong style={{ color: 'var(--orange)' }}>You&apos;re great at your business.</strong>{' '}
            Digital marketing just isn&apos;t your job. That&apos;s what BeBeyond is here for — we
            handle the digital so you can focus on what you do best.
          </p>
        </div>
      </div>
    </section>
  )
}
