'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MdSentimentVeryDissatisfied, MdCurrencyRupee, MdHelpOutline } from 'react-icons/md'

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

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 44, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  },
})

function ProblemCard({ Icon, title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={fadeUp(index * 0.13)}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
      className="prob-card"
    >
      {/* animated left border fill */}
      <motion.span
        className="card-border-fill"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.2 + index * 0.13 }}
      />

      {/* icon with pop-in */}
      <motion.div
        className="card-icon-wrap"
        initial={{ scale: 0, rotate: -20 }}
        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }}
        transition={{ type: 'spring', stiffness: 380, damping: 16, delay: 0.3 + index * 0.13 }}
      >
        <Icon className="card-icon" aria-hidden />
      </motion.div>

      <motion.h3
        className="card-title"
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.38 + index * 0.13 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="card-desc"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.48 + index * 0.13 }}
      >
        {desc}
      </motion.p>
    </motion.div>
  )
}

export default function Problems() {
  const titleRef = useRef(null)
  const bannerRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })
  const bannerInView = useInView(bannerRef, { once: true, margin: '-60px' })

  return (
    <>
      <style>{`
        .prob-section {
          background: var(--white);
          padding: 96px 5% 80px;
        }
        .prob-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Title block ── */
        .prob-title-block {
          text-align: center;
          margin-bottom: 52px;
        }
        .prob-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--orange);
          font-family: 'Public Sans', sans-serif;
          margin-bottom: 14px;
        }
        .prob-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--orange);
          display: inline-block;
          animation: blink-dot 1.4s ease-in-out infinite;
        }
        @keyframes blink-dot {
          0%,100% { opacity: 1; transform: scale(1);   }
          50%      { opacity: .4; transform: scale(.6); }
        }
        .prob-h2 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(22px, 3.8vw, 38px);
          font-weight: 800;
          color: var(--ink);
          margin-bottom: 14px;
          line-height: 1.15;
        }
        .prob-sub {
          font-size: clamp(14px, 1.5vw, 17px);
          color: var(--muted);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
          font-family: 'Public Sans', sans-serif;
        }

        /* ── Cards grid ── */
        .prob-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        /* ── Single card ── */
        .prob-card {
          position: relative;
          background: var(--light-grey);
          border-radius: 16px;
          padding: 32px 28px;
          border-left: 4px solid transparent;
          overflow: hidden;
          cursor: default;
        }
        .card-border-fill {
          position: absolute;
          left: 0; top: 0;
          width: 4px; height: 100%;
          background: #fb8500;
          border-radius: 4px 0 0 4px;
          transform-origin: top;
          display: block;
        }
        .card-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(251,133,0,.1);
          margin-bottom: 18px;
        }
        .card-icon {
          width: 26px; height: 26px;
          color: #fb8500;
          flex-shrink: 0;
        }
        .card-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(15px, 1.6vw, 18px);
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .card-desc {
          font-size: clamp(13px, 1.3vw, 15px);
          color: var(--muted);
          line-height: 1.65;
          font-family: 'Public Sans', sans-serif;
          margin: 0;
        }

        /* ── Banner ── */
        .prob-banner {
          margin-top: 40px;
          background: var(--ink);
          border-radius: 16px;
          padding: 28px 36px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .prob-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 110%, rgba(251,133,0,.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .prob-banner p {
          font-size: clamp(14px, 1.6vw, 17px);
          color: rgba(255,255,255,.88);
          line-height: 1.75;
          font-family: 'Public Sans', sans-serif;
          margin: 0;
          position: relative;
          z-index: 1;
        }
        .prob-banner strong {
          color: var(--orange);
        }

        /* ── Responsive ── */
        @media (max-width: 700px) {
          .prob-section   { padding: 72px 6% 60px; }
          .prob-grid      { grid-template-columns: 1fr; }
          .prob-banner    { padding: 22px 20px; }
          .prob-title-block { margin-bottom: 36px; }
        }
        @media (max-width: 400px) {
          .prob-section  { padding: 60px 5% 48px; }
          .prob-card     { padding: 24px 20px; }
        }
      `}</style>

      <section id="problems" className="prob-section">
        <div className="prob-inner">

          {/* ── Title ── */}
          <motion.div
            ref={titleRef}
            className="prob-title-block"
            initial="hidden"
            animate={titleInView ? 'show' : 'hidden'}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div className="prob-eyebrow" variants={fadeUp(0)}>
              <span className="prob-eyebrow-dot" />
              Sound Familiar?
            </motion.div>

            <motion.h2 className="prob-h2" variants={fadeUp(0.08)}>
              Does This Describe Your Business?
            </motion.h2>

            <motion.p className="prob-sub" variants={fadeUp(0.16)}>
              You&apos;re not alone. These are the most common digital marketing frustrations we hear
              from business owners across Prayagraj.
            </motion.p>
          </motion.div>

          {/* ── Cards ── */}
          <div className="prob-grid">
            {problems.map((p, i) => (
              <ProblemCard key={p.title} {...p} index={i} />
            ))}
          </div>

          {/* ── Banner ── */}
          <motion.div
            ref={bannerRef}
            className="prob-banner"
            initial={{ opacity: 0, y: 36, filter: 'blur(4px)' }}
            animate={bannerInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={bannerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              The problem isn&apos;t you.{' '}
              <strong>You&apos;re great at your business.</strong>{' '}
              Digital marketing just isn&apos;t your job. That&apos;s what BeBeyond is here for — we
              handle the digital so you can focus on what you do best.
            </motion.p>
          </motion.div>

        </div>
      </section>
    </>
  )
}