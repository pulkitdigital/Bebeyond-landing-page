'use client'
import { useEffect, useRef } from 'react'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

/* ─── Rotating Visual ─────────────────────────────────────────── */
function RotatingSquare() {
  return (
    <div className="hero-visual-wrap">
      {/* Orbit track rings */}
      <div className="orbit-ring orbit-ring--outer" />
      <div className="orbit-ring orbit-ring--mid" />

      {/* Outer services circle image — ROTATES */}
      <div className="square-spinner">
        <img
          src="/circle-image.png"
          alt="BeBeyond Services"
          className="square-img"
        />
      </div>

      {/* Center BeBeyond logo — FIXED, does NOT rotate */}
      <div className="logo-center">
        <img
          src="/logo.png"
          alt="BeBeyond Digital Solutions"
          className="logo-img"
        />
      </div>

      {/* Floating badge — top-right */}
      {/* <div className="hero-badge hero-badge--tr">
        <span className="badge-dot" />
        <span>Meta Ads</span>
      </div> */}

      {/* Floating badge — bottom-left */}
      {/* <div className="hero-badge hero-badge--bl">
        <span className="badge-dot badge-dot--orange" />
        <span>SEO &amp; Growth</span>
      </div> */}
    </div>
  )
}

/* ─── Stat pill ───────────────────────────────────────────────── */
function Stat({ value, label }) {
  return (
    <div className="hero-stat">
      <span className="hero-stat__value">{value}</span>
      <span className="hero-stat__label">{label}</span>
    </div>
  )
}

/* ─── Hero ────────────────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const onMove = (e) => {
      const { innerWidth: W, innerHeight: H } = window
      const x = (e.clientX / W - 0.5) * 18
      const y = (e.clientY / H - 0.5) * 10
      const visual = section.querySelector('.hero-visual-wrap')
      if (visual) visual.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <style>{`
        /* ---------- section ---------- */
        .hero-section {
          position: relative;
          min-height: 100vh;
          background: var(--ink);
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 100px 0 60px;
        }
        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 70% at 70% 50%, rgba(33,158,188,.13) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 10% 80%, rgba(251,133,0,.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .hero-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* ---------- layout ---------- */
        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* ---------- eyebrow ---------- */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(33,158,188,.12);
          border: 1px solid rgba(33,158,188,.3);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          color: var(--blue);
          letter-spacing: .06em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .hero-eyebrow-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--blue);
          animation: var(--animate-hb-dot);
        }

        /* ---------- heading ---------- */
        .hero-h1 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.1;
          color: #fff;
          margin-bottom: 22px;
          letter-spacing: -0.02em;
        }
        .hero-h1 .accent-orange { color: var(--orange); }
        .hero-h1 .accent-blue   { color: var(--blue);   }

        /* ---------- subtitle ---------- */
        .hero-sub {
          font-family: 'Public Sans', sans-serif;
          font-size: clamp(0.95rem, 1.6vw, 1.1rem);
          font-weight: 400;
          color: rgba(255,255,255,.6);
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 36px;
        }

        /* ---------- cta ---------- */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 44px;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: var(--orange);
          color: #fff;
          font-family: 'Public Sans', sans-serif;
          font-size: .95rem;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 10px;
          text-decoration: none;
          transition: background .2s, transform .2s, box-shadow .2s;
          box-shadow: 0 4px 24px rgba(251,133,0,.3);
        }
        .btn-primary:hover {
          background: #e07800;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(251,133,0,.4);
        }
        .btn-primary svg { transition: transform .2s; }
        .btn-primary:hover svg { transform: translateX(4px); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,.7);
          font-family: 'Public Sans', sans-serif;
          font-size: .9rem;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,.2);
          padding-bottom: 2px;
          transition: color .2s, border-color .2s;
        }
        .btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,.6); }

        /* ---------- checks ---------- */
        .hero-checks {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 20px;
        }
        .hero-check {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'Public Sans', sans-serif;
          font-size: .82rem;
          color: rgba(255,255,255,.5);
        }
        .hero-check svg { color: var(--blue); flex-shrink: 0; }

        /* ---------- stats ---------- */
        .hero-stats {
          display: flex;
          border-top: 1px solid rgba(255,255,255,.08);
          padding-top: 36px;
          margin-top: 36px;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-right: 32px;
          margin-right: 32px;
          border-right: 1px solid rgba(255,255,255,.08);
        }
        .hero-stat:last-child { border-right: none; margin-right: 0; padding-right: 0; }
        .hero-stat__value {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--orange);
          line-height: 1;
        }
        .hero-stat__label {
          font-size: .75rem;
          color: rgba(255,255,255,.4);
          font-family: 'Public Sans', sans-serif;
        }

        /* ---------- visual wrapper ---------- */
        .hero-visual-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          max-width: 480px;
          margin: 0 auto;
          transition: transform .1s linear;
          will-change: transform;
        }

        /* ---------- orbit rings ---------- */
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
          pointer-events: none;
        }
        .orbit-ring--outer {
          width: 110%; height: 110%;
          border: 1px dashed rgba(33,158,188,.22);
          animation: spin-cw 24s linear infinite;
        }
        .orbit-ring--mid {
          width: 90%; height: 90%;
          border: 1px dashed rgba(251,133,0,.18);
          animation: spin-ccw 18s linear infinite;
        }
        @keyframes spin-cw  { from { transform: translate(-50%,-50%) rotate(0deg);   } to { transform: translate(-50%,-50%) rotate(360deg);  } }
        @keyframes spin-ccw { from { transform: translate(-50%,-50%) rotate(0deg);   } to { transform: translate(-50%,-50%) rotate(-360deg); } }

        /* ---------- outer image — rotates ---------- */
        .square-spinner {
          position: absolute;
          inset: 0;
          animation: outer-spin 18s linear infinite;
          will-change: transform;
        }
        @keyframes outer-spin {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        .square-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* ---------- center logo — FIXED ---------- */
        .logo-center {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 18%; height: 18%;
          z-index: 10;
          border-radius: 16px;
          overflow: hidden;
          // box-shadow:
          //   0 0 0 3px rgba(33,158,188,.35),
          //   0 8px 40px rgba(0,0,0,.6),
          //   0 0 60px rgba(33,158,188,.2);
          // animation: logo-glow 3s ease-in-out infinite;
        }
        @keyframes logo-glow {
          0%,100% { box-shadow: 0 0 0 3px rgba(33,158,188,.35), 0 8px 40px rgba(0,0,0,.6), 0 0 30px rgba(33,158,188,.2); }
          50%      { box-shadow: 0 0 0 3px rgba(33,158,188,.6),  0 8px 40px rgba(0,0,0,.6), 0 0 60px rgba(33,158,188,.45); }
        }
        .logo-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ---------- badges ---------- */
        .hero-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(10,22,40,.88);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 100px;
          padding: 8px 16px;
          font-family: 'Public Sans', sans-serif;
          font-size: .78rem;
          font-weight: 600;
          color: #fff;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(0,0,0,.4);
          z-index: 20;
        }
        .hero-badge--tr { top: 6%; right: -2%; animation: badge-float 3s ease-in-out infinite alternate; }
        .hero-badge--bl { bottom: 8%; left: -2%; animation: badge-float 3s ease-in-out 1.2s infinite alternate; }
        @keyframes badge-float {
          from { transform: translateY(0);   }
          to   { transform: translateY(-8px); }
        }
        .badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--blue);
          animation: var(--animate-hb-dot);
        }
        .badge-dot--orange { background: var(--orange); }

        /* ---------- responsive ---------- */
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-sub      { max-width: 100%; }
          .hero-cta-row  { justify-content: center; }
          .hero-checks   { justify-content: center; }
          .hero-stats    { justify-content: center; }
          .hero-visual-wrap { max-width: 320px; order: -1; }
          .hero-badge--tr { right: 0; }
          .hero-badge--bl { left:  0; }
        }
        @media (max-width: 480px) {
          .hero-section { padding: 90px 0 50px; }
          .hero-inner   { padding: 0 20px; gap: 40px; }
          .hero-stat    { padding-right: 20px; margin-right: 20px; }
        }
      `}</style>

      <section className="hero-section" ref={sectionRef} id="home">
        <div className="hero-inner">

          {/* ── LEFT: Text ── */}
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Based in Prayagraj · Working Across India
            </div>

            <h1 className="hero-h1">
              Get More Customers<br />
              Online —{' '}
              <span className="accent-orange">
                Starting With a&nbsp;<span className="accent-blue">FREE</span> Audit
              </span>
            </h1>

            <p className="hero-sub">
              We'll review your entire digital presence in 30 minutes and tell you
              exactly why customers aren't finding you — and how to fix it.
              No tech jargon. No pressure. Just real clarity.
            </p>

            <div className="hero-cta-row">
              <a href="#audit-form" className="btn-primary">
                Book My Free Audit Now
                <FiArrowRight />
              </a>
              <a href="#portfolio" className="btn-ghost">
                See Our Work
              </a>
            </div>

            <div className="hero-checks">
              {['30-Minute Call', '100% Free, No Obligation', 'Prayagraj & All India'].map(t => (
                <span key={t} className="hero-check">
                  <FiCheck size={13} /> {t}
                </span>
              ))}
            </div>

            <div className="hero-stats">
              <Stat value="50+" label="Brands Grown" />
              <Stat value="3×"  label="Avg. ROI" />
              <Stat value="24h" label="Response Time" />
            </div>
          </div>

          {/* ── RIGHT: Visual ── */}
          <RotatingSquare />

        </div>
      </section>
    </>
  )
}