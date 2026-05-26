'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
}

function RotatingSquare() {
  return (
    <motion.div
      className="hero-visual-wrap"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className="orbit-ring orbit-ring--outer" />
      <div className="orbit-ring orbit-ring--mid" />
      <div className="square-spinner">
        <img src="/circle-image.webp" alt="BeBeyond Services" className="square-img" />
      </div>
    </motion.div>
  )
}

function Stat({ value, label, i }) {
  return (
    <motion.div className="hero-stat" variants={fadeUp} custom={i}>
      <motion.span
        className="hero-stat__value"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.9 + i * 0.12 }}
      >
        {value}
      </motion.span>
      <span className="hero-stat__label">{label}</span>
    </motion.div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 60])

  const headingWords = 'Get More Customers Online —'.split(' ')

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          background: var(--ink);
          display: flex;
          align-items: center;
          overflow: hidden; 
          padding: 60px 20px 60px;
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
          margin-bottom: 24px;
        }
        .hero-eyebrow-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--blue);
          animation: var(--animate-hb-dot);
        }

        /* ── Heading ── */
        .hero-h1 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(1.6rem, 3.2vw, 2.6rem);
          font-weight: 800;
          line-height: 1.15;
          color: #fff;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        .hero-h1 .accent-orange { color: var(--orange); }
        .hero-h1 .accent-blue   { color: var(--blue);   }

        /* underline sweep on FREE */
        .accent-blue {
          position: relative;
          display: inline-block;
        }
        .accent-blue::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          height: 2px;
          width: 0%;
          background: var(--blue);
          border-radius: 2px;
          animation: underline-sweep 0.6s ease forwards 1.4s;
        }
        @keyframes underline-sweep {
          to { width: 100%; }
        }

        .hero-sub {
          font-family: 'Public Sans', sans-serif;
          font-size: clamp(0.88rem, 1.4vw, 1rem);
          font-weight: 400;
          color: rgba(255,255,255,.6);
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 32px;
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: var(--orange);
          color: #fff;
          font-family: 'Public Sans', sans-serif;
          font-size: .92rem;
          font-weight: 700;
          padding: 13px 26px;
          border-radius: 10px;
          text-decoration: none;
          transition: background .2s, box-shadow .2s;
          box-shadow: 0 4px 24px rgba(251,133,0,.3);
          position: relative;
          overflow: hidden;
        }
        /* shimmer sweep on btn-primary */
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: rgba(255,255,255,.18);
          transform: skewX(-20deg);
          animation: btn-shimmer 3s ease-in-out infinite 1.8s;
        }
        @keyframes btn-shimmer {
          0%   { left: -75%; }
          40%  { left: 125%; }
          100% { left: 125%; }
        }
        .btn-primary:hover { background: #e07800; box-shadow: 0 8px 32px rgba(251,133,0,.4); }
        .btn-primary svg { transition: transform .2s; }
        .btn-primary:hover svg { transform: translateX(4px); }
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,.7);
          font-family: 'Public Sans', sans-serif;
          font-size: .88rem;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,.2);
          padding-bottom: 2px;
          transition: color .2s, border-color .2s;
        }
        .btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,.6); }
        .hero-checks {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 18px;
        }
        .hero-check {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'Public Sans', sans-serif;
          font-size: .8rem;
          color: rgba(255,255,255,.5);
        }
        .hero-check svg { color: var(--blue); flex-shrink: 0; }
        .hero-stats {
          display: flex;
          border-top: 1px solid rgba(255,255,255,.08);
          padding-top: 32px;
          margin-top: 32px;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-right: 28px;
          margin-right: 28px;
          border-right: 1px solid rgba(255,255,255,.08);
        }
        .hero-stat:last-child { border-right: none; margin-right: 0; padding-right: 0; }
        .hero-stat__value {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--orange);
          line-height: 1;
        }
        .hero-stat__label {
          font-size: .72rem;
          color: rgba(255,255,255,.4);
          font-family: 'Public Sans', sans-serif;
        }
        .hero-visual-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          max-width: 480px;
          margin: 0 auto;
          will-change: transform;
        }
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
        .square-spinner {
          position: absolute;
          inset: 0;
          animation: outer-spin 18s linear infinite;
          will-change: transform;
        }
        // @keyframes outer-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        // .square-img { width: 100%; height: 100%; object-fit: contain; display: block; }

        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; text-align: center; }
          .hero-sub    { max-width: 100%; }
          .hero-cta-row  { justify-content: center; }
          .hero-checks   { justify-content: center; }
          .hero-stats    { justify-content: center; }
          .hero-visual-wrap { max-width: 300px; order: -1; }
        }
        @media (max-width: 480px) {
          .hero-section  { padding: 90px 0 50px; }
          .hero-inner    { padding: 0 20px; gap: 32px; }
          .hero-stat     { padding-right: 18px; margin-right: 18px; }
          .hero-visual-wrap { max-width: 240px; }
          .hero-h1       { font-size: clamp(1.35rem, 7vw, 1.8rem); }
        }
      `}</style>

      <section className="hero-section" ref={sectionRef} id="home">
        <div className="hero-inner">

          {/* ── LEFT: Text ── */}
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {/* Eyebrow */}
            <motion.div className="hero-eyebrow" variants={fadeUp} custom={0}>
              <motion.span
                className="hero-eyebrow-dot"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1 }}
              />
              Based in Prayagraj · Working Across India
            </motion.div>

            {/* Heading — word by word */}
            <h1 className="hero-h1">
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                  initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.07 }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="accent-orange"
                initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.2 + headingWords.length * 0.07 }}
                style={{ display: 'inline-block' }}
              >
                Starting With a&nbsp;
                <motion.span
                  className="accent-blue"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                  style={{ display: 'inline-block', cursor: 'default' }}
                >
                  FREE
                </motion.span>
                {' '}Audit
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p className="hero-sub" variants={fadeUp} custom={3}>
              We&apos;ll review your entire digital presence in 30 minutes and tell you
              exactly why customers aren&apos;t finding you — and how to fix it.
              No tech jargon. No pressure. Just real clarity.
            </motion.p>

            {/* CTA */}
            <motion.div className="hero-cta-row" variants={fadeUp} custom={4}>
              <motion.a
                href="#audit-form"
                className="btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                Book My Free Audit Now
                <FiArrowRight />
              </motion.a>
              <motion.a
                href="#portfolio"
                className="btn-ghost"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                See Our Work
              </motion.a>
            </motion.div>

            {/* Checks */}
            <motion.div className="hero-checks" variants={fadeIn} custom={5}>
              {['30-Minute Call', '100% Free, No Obligation', 'Prayagraj & All India'].map((t, i) => (
                <motion.span
                  key={t}
                  className="hero-check"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.65 + i * 0.1 }}
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 14, delay: 0.7 + i * 0.1 }}
                  >
                    <FiCheck size={13} />
                  </motion.span>
                  {t}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="hero-stats"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.85 } } }}
            >
              {[
                { value: '50+', label: 'Brands Grown' },
                { value: '12×', label: 'Avg. ROI' },
                { value: '2h',  label: 'Response Time' },
              ].map(({ value, label }, i) => (
                <Stat key={label} value={value} label={label} i={i} />
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Visual ── */}
          <motion.div style={{ y: parallaxY }}>
            <RotatingSquare />
          </motion.div>

        </div>
      </section>
    </>
  )
}