'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    image: '/skypro.webp',
    tag: 'Website + Social Media',
    type: 'Aviation Training Academy',
    name: 'SkyPro Aviation',
    desc: "Built a conversion-focused website for India's leading aviation academy, designed to drive consistent enquiry generation from aspiring pilots.",
  },
  {
    image: '/madan.webp',
    tag: 'Social Media + Meta Ads',
    type: 'Retail & B2B · Prayagraj',
    name: 'Madan Uniforms',
    desc: 'Built online presence from zero for this Prayagraj-based uniform manufacturer. Now receiving regular social media enquiries and B2B leads.',
  },
  {
    image: '/amber.webp',
    tag: 'Website + Social Media',
    type: 'Hospitality & Events',
    name: 'Amber Group',
    desc: 'Created a premium online identity for this hospitality brand — clean website and consistent social media to match their brand experience.',
  },
  {
    image: '/dayanand.webp',
    tag: 'Video Editing',
    type: 'Higher Education Institution',
    name: 'Dayanand Sagar University',
    desc: 'Dayanand Sagar University is a multidisciplinary institution focused on education and research, requiring professional lecture video editing to enhance clarity, engagement, and ease of learning.',
  },
  {
    image: '/hamper-exchange.webp',
    tag: 'E-Commerce Development',
    type: 'Wellness & Gifting Brand',
    name: 'The Hamper Exchange',
    desc: 'The Hamper Exchange is a care and wellness brand offering curated gift hampers, requiring a clean, calming, and conversion-friendly Shopify website for a seamless gifting experience.',
  },
   {
    image: '/khan-academy.webp',
    tag: 'Video Editing',
    type: 'Online Learning Platform',
    name: 'Khan Academy',
    desc: 'Khan Academy is a personalized learning platform, requiring professional video editing to enhance instructional clarity, learner engagement, and the overall digital learning experience.',
  },
]

const clients = [
  'Indian School of Business',
  'Max Healthcare',
  'Humans of Bombay',
  'Lovely Jewellers',
  'Ttapio Cafe',
  'First Print Publication',
  'IBrand Solution',
  'UBER Marketing Solutions',
  'Scanner Adda',
  'Sinaaga Jewellers'
]

export default function Portfolio() {
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
          delay: i * 0.13,
          scrollTrigger: { trigger: card, start: 'top 88%' },
        }
      )
    })
  }, [])

  return (
    <section id="portfolio" style={{ background: 'var(--white)', padding: '80px 5%' }}>
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
            Our Work
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
            Businesses We&apos;ve Helped Grow
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
            From local Prayagraj stores to pan-India brands — here&apos;s the kind of work we do.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            marginBottom: 48,
          }}
        >
          {projects.map((p, i) => (
            <div
              key={p.name}
              ref={(el) => { cardsRef.current[i] = el }}
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Image Header */}
              <div
                style={{
                  height: 180,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Card Body */}
              <div style={{ padding: 20 }}>
                <div
                  style={{
                    display: 'inline-block',
                    background: 'var(--orange)',
                    color: 'white',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: 100,
                    fontFamily: "'Public Sans', sans-serif",
                    letterSpacing: '0.5px',
                    marginBottom: 12,
                  }}
                >
                  {p.tag}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: 'var(--blue)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: "'Public Sans', sans-serif",
                    marginBottom: 6,
                  }}
                >
                  {p.type}
                </div>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: 'var(--ink)',
                    marginBottom: 8,
                  }}
                >
                  {p.name}
                </h3>
                
                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--muted)',
                    lineHeight: 1.65,
                    fontFamily: "'Public Sans', sans-serif",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Strip */}
        <div
          style={{
            background: 'var(--light-grey)',
            borderRadius: 16,
            padding: '32px 40px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: 'var(--muted)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 600,
              fontFamily: "'Public Sans', sans-serif",
              marginBottom: 20,
            }}
          >
            We&apos;ve also worked with
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {clients.map((c) => (
              <span
                key={c}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  padding: '8px 18px',
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'var(--ink)',
                  fontFamily: "'Public Sans', sans-serif",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}