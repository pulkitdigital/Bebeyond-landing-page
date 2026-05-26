'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaBullseye, FaMobileAlt, FaGlobe, FaShoppingCart, FaFilm } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const CARD_ICON = 'h-8 w-8 shrink-0 text-[var(--blue)]'

const services = [
  { Icon: FaBullseye, title: 'Meta & Social Ads', desc: 'Facebook and Instagram ads that generate real leads, not just likes. Built for your budget and your customer.' },
  { Icon: FaMobileAlt, title: 'Social Media Management', desc: 'Consistent, branded content posted regularly so your business stays visible and relevant — without you lifting a finger.' },
  { Icon: FaGlobe, title: 'Website Development', desc: 'Fast, professional, mobile-first websites that build trust and convert visitors into enquiries.' },
  { Icon: FaShoppingCart, title: 'E-Commerce (Shopify)', desc: 'Complete Shopify stores designed to sell — product pages, checkout, email flows, and everything in between.' },
  { Icon: HiSearch, title: 'SEO', desc: 'Get found on Google when customers search for what you offer in Prayagraj and beyond. Long-term, sustainable traffic.' },
  { Icon: FaFilm, title: 'Video Editing', desc: "Professional editing for social media, educational content, and brand videos. We've edited for ISB, Khan Academy, Max Healthcare." },
]

export default function Services() {
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
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.08,
          scrollTrigger: { trigger: card, start: 'top 88%' },
        }
      )
    })
  }, [])

  return (
    <section id="services" style={{ background: 'var(--cream)', padding: '80px 5%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: 52 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--blue)',
              fontFamily: "'Public Sans', sans-serif",
              marginBottom: 12,
            }}
          >
            What We Do
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
            Everything Your Business Needs — One Roof
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'var(--muted)',
              maxWidth: 500,
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            No need to hire 5 different vendors. BeBeyond handles your entire digital presence.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {services.map((s, i) => {
            const Icon = s.Icon
            return (
            <div
              key={s.title}
              ref={(el) => {
                cardsRef.current[i] = el
              }}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: 28,
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--blue)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(33,158,188,0.12)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Icon className={CARD_ICON} aria-hidden />
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: 10,
                  marginTop: 16,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--muted)',
                  lineHeight: 1.65,
                  fontFamily: "'Public Sans', sans-serif",
                }}
              >
                {s.desc}
              </p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
