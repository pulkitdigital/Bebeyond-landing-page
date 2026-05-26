'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight, FiSearch, FiBarChart2, FiTrendingUp, FiUsers } from 'react-icons/fi'
import { HiMap } from 'react-icons/hi2'
import { FaHandshake } from 'react-icons/fa6'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    Icon: FiSearch,
    title: 'We Review Your Current Presence',
    desc: 'We look at your social media, website (if you have one), Google visibility, and your competitors. We come prepared.',
  },
  {
    num: '02',
    Icon: FiBarChart2,
    title: "We Show You What's Missing",
    desc: "We tell you exactly what's holding you back — in plain language, not tech speak. You'll see your gaps clearly for the first time.",
  },
  {
    num: '03',
    Icon: HiMap,
    title: 'You Get a Clear Roadmap',
    desc: "You'll leave the call knowing your next 3 steps — whether you work with us or not. That's our promise.",
  },
  {
    num: '04',
    Icon: FaHandshake,
    title: 'You Decide — Zero Pressure',
    desc: "At the end, we'll share how BeBeyond can help. You're never obligated to say yes. We believe good work speaks for itself.",
  },
  {
    num: '05',
    Icon: FiTrendingUp,
    title: 'We Build Your Growth Plan',
    desc: 'Based on your goals and budget, we craft a focused strategy — no fluff, just the channels and tactics that will actually move the needle.',
  },
  {
    num: '06',
    Icon: FiUsers,
    title: 'We Grow Together',
    desc: 'Once we start, you get regular updates, clear reporting, and a team that treats your business like their own. No ghosting, ever.',
  },
]

export default function AuditSteps() {
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: { trigger: card, start: 'top 88%' },
        }
      )
    })
  }, [])

  return (
    <>
      <style>{`
        .audit-section {
          background: var(--cream);
          padding: 80px 5%;
        }
        .audit-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .audit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) {
          .audit-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 540px) {
          .audit-section {
            padding: 56px 4%;
          }
          .audit-grid {
            grid-template-columns: 1fr;
          }
        }

        .audit-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 26px 22px 22px;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          cursor: default;
        }
        .audit-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(33, 158, 188, 0.12);
          border-color: var(--blue);
        }

        .audit-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .audit-icon-wrap {
          width: 58px;
          height: 58px;
          border-radius: 14px;
          background: rgba(33, 158, 188, 0.09);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .audit-card:hover .audit-icon-wrap {
          background: rgba(33, 158, 188, 0.17);
        }
        .audit-num {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 42px;
          font-weight: 800;
          color: rgba(33, 158, 188, 0.13);
          line-height: 1;
          letter-spacing: -1px;
          transition: color 0.2s;
        }
        .audit-card:hover .audit-num {
          color: rgba(33, 158, 188, 0.26);
        }

        .audit-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 8px;
          line-height: 1.35;
        }
        .audit-desc {
          font-family: 'Public Sans', sans-serif;
          font-size: 13.5px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
        }

        .audit-cta {
          text-align: center;
          margin-top: 44px;
        }
        .audit-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 32px;
          border-radius: 8px;
          background: var(--orange);
          color: white;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(251, 133, 0, 0.3);
          transition: all 0.2s;
        }
        .audit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(251, 133, 0, 0.45);
        }
        @media (max-width: 540px) {
          .audit-btn {
            padding: 13px 24px;
            font-size: 15px;
          }
        }
      `}</style>

      <section className="audit-section">
        <div className="audit-inner">
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
              What Happens Next
            </div>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 'clamp(26px, 4vw, 42px)',
                fontWeight: 800,
                color: 'var(--ink)',
                margin: '0 0 14px',
              }}
            >
              What&apos;s Inside Your Free Audit
            </h2>
            <p
              style={{
                fontSize: 17,
                color: 'var(--muted)',
                maxWidth: 520,
                margin: '0 auto',
                lineHeight: 1.7,
                fontFamily: "'Public Sans', sans-serif",
              }}
            >
              A 30-minute call that gives you a complete, honest picture of your digital
              presence — and a clear path forward.
            </p>
          </div>

          <div className="audit-grid">
            {steps.map((s, i) => {
              const Icon = s.Icon
              return (
                <div
                  key={s.num}
                  className="audit-card"
                  ref={(el) => { cardsRef.current[i] = el }}
                >
                  <div className="audit-card-top">
                    <div className="audit-icon-wrap">
                      <Icon size={28} color="var(--blue)" aria-hidden />
                    </div>
                    <div className="audit-num">{s.num}</div>
                  </div>
                  <h3 className="audit-title">{s.title}</h3>
                  <p className="audit-desc">{s.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="audit-cta">
            <a href="#audit-form" className="audit-btn">
              Book My Free Audit
              <FiArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}