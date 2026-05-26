'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MdLocationOn } from 'react-icons/md'
import { HiGlobeAlt } from 'react-icons/hi2'
import { FiPhone } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const founderInfo = [
  { Icon: MdLocationOn, text: 'Civil Lines, Prayagraj, UP 211001' },
  { Icon: HiGlobeAlt,   text: 'Serving businesses across India' },
  { Icon: FiPhone,      text: '+91 99 1867 1867 (Personal reply)' },
]

const stats = [
  { value: '2024', label: 'Founded' },
  { value: '50+',  label: 'Clients Served' },
  { value: '3×',   label: 'Avg. Growth' },
]

export default function Founder() {
  const sectionRef = useRef()
  const leftRef   = useRef()
  const rightRef  = useRef()

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })
    tl.fromTo(leftRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.85, ease: 'power2.out' }
    ).fromTo(rightRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.85, ease: 'power2.out' },
      0.18
    )
  }, [])

  return (
    <>
      <style>{`
        /* ── Section shell ── */
        .fv3-section {
          background: var(--ink);
          padding: 100px 5%;
          overflow: hidden;
          position: relative;
          font-family: 'Public Sans', sans-serif;
        }
        .fv3-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(251,133,0,0.45),
            rgba(33,158,188,0.45),
            transparent
          );
        }

        /* ── Two-column grid ── */
        .fv3-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ── LEFT column ── */
        .fv3-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        /* Spinning rings */
        .fv3-circle-outer {
          position: relative;
          width: 240px;
          height: 240px;
        }
        .fv3-ring-1 {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1.5px solid rgba(251,133,0,0.25);
          animation: fv3spin 12s linear infinite;
        }
        .fv3-ring-2 {
          position: absolute;
          inset: -24px;
          border-radius: 50%;
          border: 1px solid rgba(33,158,188,0.15);
          animation: fv3spin 20s linear infinite reverse;
        }
        .fv3-ring-dot {
          position: absolute;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #fb8500;
          top: -4px;
          left: calc(50% - 4px);
        }
        .fv3-ring-dot-blue {
          position: absolute;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #219ebc;
          bottom: -3px;
          left: calc(50% - 3px);
        }
        @keyframes fv3spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Circle photo */
        .fv3-circle-img {
          position: relative;
          z-index: 1;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(251,133,0,0.35);
          background: rgba(255,255,255,0.03);
        }
        .fv3-circle-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* "Available" pill */
        .fv3-online-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 12px;
          color: rgba(255,255,255,0.52);
        }
        .fv3-online-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px #22c55e;
          flex-shrink: 0;
        }

        /* Name block below photo */
        .fv3-name-block { text-align: center; }
        .fv3-big-name {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          margin: 0 0 6px;
        }
        .fv3-big-role {
          font-size: 12px;
          color: rgba(255,255,255,0.36);
          letter-spacing: 0.3px;
        }

        /* ── RIGHT column ── */
        .fv3-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #fb8500;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .fv3-eyebrow::before {
          content: '';
          width: 28px; height: 2px;
          background: #fb8500;
          border-radius: 2px;
        }
        .fv3-heading {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(28px, 3.5vw, 46px);
          font-weight: 800;
          color: white;
          margin: 0 0 8px;
          line-height: 1.08;
          letter-spacing: -0.5px;
        }
        .fv3-name-grad {
          background: linear-gradient(135deg, #fb8500, #219ebc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .fv3-subrole {
          font-size: 14px;
          color: rgba(255,255,255,0.35);
          margin: 0 0 28px;
        }
        .fv3-para {
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          line-height: 1.88;
          margin: 0 0 14px;
        }

        /* Stats bar */
        .fv3-stats {
          display: flex;
          margin: 30px 0;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          overflow: hidden;
        }
        .fv3-stat {
          flex: 1;
          padding: 16px 12px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .fv3-stat:last-child { border-right: none; }
        .fv3-stat-val {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: white;
          line-height: 1;
          margin-bottom: 5px;
        }
        .fv3-stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Info rows */
        .fv3-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .fv3-info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: rgba(255,255,255,0.5);
        }
        .fv3-info-icon { color: #fb8500; font-size: 16px; flex-shrink: 0; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .fv3-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        @media (max-width: 480px) {
          .fv3-section { padding: 72px 4%; }
          .fv3-circle-outer,
          .fv3-circle-img { width: 200px; height: 200px; }
          .fv3-stats { flex-direction: column; }
          .fv3-stat {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
          .fv3-stat:last-child { border-bottom: none; }
        }
      `}</style>

      <section id="founder" ref={sectionRef} className="fv3-section">
        <div className="fv3-inner">

          {/* ── LEFT: Circle photo ── */}
          <div ref={leftRef} className="fv3-left">

            <div className="fv3-circle-outer">
              {/* Animated outer rings */}
              <div className="fv3-ring-1">
                <div className="fv3-ring-dot" />
              </div>
              <div className="fv3-ring-2">
                <div className="fv3-ring-dot-blue" />
              </div>

              {/* Circle photo — replace src with your actual image */}
              <div className="fv3-circle-img">
                <img
                  src="/images/pulkit.jpg"
                  alt="Pulkit Singhal — Founder, BeBeyond Digital Solutions"
                />
              </div>
            </div>
          <br></br>
            {/* Available badge */}
            <div className="fv3-online-badge">
              <div className="fv3-online-dot" />
              Available for projects
            </div>

            {/* Name + role below photo */}
            <div className="fv3-name-block">
              <div className="fv3-big-name">Pulkit Singhal</div>
              <div className="fv3-big-role">Founder & CEO · BeBeyond Digital Solutions</div>
            </div>

          </div>

          {/* ── RIGHT: Content ── */}
          <div ref={rightRef}>
            <div className="fv3-eyebrow">About the Founder</div>
            <h2 className="fv3-heading">
              Meet <span className="fv3-name-grad">Pulkit Singhal</span>
            </h2>
            <p className="fv3-subrole">Founder & CEO · BeBeyond Digital Solutions</p>

            <p className="fv3-para">
              Before starting BeBeyond in 2024, I spent years running digital marketing
              campaigns at a leading ed-tech company — reaching{' '}
              <strong style={{ color: 'white' }}>lakhs of students</strong> and learning
              what real, results-driven marketing looks like from the inside.
            </p>
            <p className="fv3-para">
              I saw how businesses in cities like Prayagraj were either ignored by big
              agencies — or overcharged for mediocre work.{' '}
              <strong style={{ color: 'white' }}>BeBeyond exists to fix that.</strong>
            </p>
            <p className="fv3-para">
              We work as an extension of your team — learning your story, your goals,
              your customers — and turning that into marketing that actually delivers.
            </p>

            <div className="fv3-stats">
              {stats.map(({ value, label }) => (
                <div key={label} className="fv3-stat">
                  <div className="fv3-stat-val">{value}</div>
                  <div className="fv3-stat-label">{label}</div>
                </div>
              ))}
            </div>

            <div className="fv3-info">
              {founderInfo.map(({ Icon, text }) => (
                <div key={text} className="fv3-info-item">
                  <Icon className="fv3-info-icon" aria-hidden />
                  {text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}