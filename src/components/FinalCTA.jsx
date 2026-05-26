'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiClipboardDocumentList, HiArrowRight } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { MdLocationOn, MdEmail } from 'react-icons/md'

gsap.registerPlugin(ScrollTrigger)

const contactStrip = [
  { Icon: MdLocationOn, text: 'Chamber 6 Sangam Place, Civil Lines, Prayagraj, UP 211001' },
  { Icon: MdEmail,      text: 'info@bebeyond.digital' },
  { Icon: FiPhone,      text: '+91 99 1867 1867' },
]

const footerLinks = [
  ['Home',     'https://bebeyond.digital/'],
  ['Services', 'https://bebeyond.digital/services'],
  ['Projects', 'https://bebeyond.digital/projects'],
  ['Blog',     'https://bebeyond.digital/blogs'],
  ['Contact',  'https://bebeyond.digital/contact'],
]

export default function FinalCTA() {
  const sectionRef = useRef()
  const headRef    = useRef()
  const btnsRef    = useRef()
  const stripRef   = useRef()

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })
    tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
      .fromTo(headRef.current,    { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
      .fromTo(btnsRef.current,    { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, 0.4)
      .fromTo(stripRef.current,   { opacity: 0 },        { opacity: 1, duration: 0.5 },       0.7)
  }, [])

  return (
    <>
      <style>{`
        /* ── Section ── */
        .fcta-section {
          position: relative;
          background: var(--ink);
          padding: 60px 5% 40px;
          text-align: center;
          overflow: hidden;
          isolation: isolate;
          font-family: 'Public Sans', sans-serif;
        }

        /* Subtle grid background */
        .fcta-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(33,158,188,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(33,158,188,0.07) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
          z-index: 0;
          pointer-events: none;
        }

        /* Ambient glows */
        .fcta-glow-left {
          position: absolute;
          left: -100px; top: 40%;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(33,158,188,0.2) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }
        .fcta-glow-right {
          position: absolute;
          right: -100px; top: 40%;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(251,133,0,0.17) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        /* Content */
        .fcta-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
          margin: 0 auto;
        }

        /* Badge */
        .fcta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(33,158,188,0.12);
          border: 1px solid rgba(33,158,188,0.3);
          border-radius: 100px;
          padding: 6px 18px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #5dd1ec;
          margin-bottom: 28px;
        }
        .fcta-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #5dd1ec;
          animation: fcta-pulse 1.8s ease-in-out infinite;
        }
        @keyframes fcta-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.6); }
        }

        /* Heading */
        .fcta-heading {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(30px, 5.5vw, 56px);
          font-weight: 800;
          color: white;
          line-height: 1.1;
          margin: 0 0 18px;
          letter-spacing: -1px;
        }
        .fcta-grad {
          background: linear-gradient(135deg, #219ebc 0%, #fb8500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Subtext */
        .fcta-sub {
          font-size: clamp(15px, 2vw, 17px);
          color: rgba(255,255,255,0.58);
          line-height: 1.78;
          margin: 0 auto 16px;
          max-width: 520px;
        }

        /* Divider */
        .fcta-divider {
          width: 56px; height: 3px;
          background: linear-gradient(90deg, #219ebc, #fb8500);
          border-radius: 2px;
          margin: 0 auto 44px;
        }

        /* Buttons */
        .fcta-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 52px;
        }
        .fcta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 34px;
          border-radius: 10px;
          background: var(--orange, #fb8500);
          color: white;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(251,133,0,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .fcta-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 36px rgba(251,133,0,0.6);
        }
        .fcta-btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 28px;
          border-radius: 10px;
          background: #1db954;
          color: white;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(29,185,84,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .fcta-btn-wa:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(29,185,84,0.5);
        }
        .fcta-btn-call {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 28px;
          border-radius: 10px;
          border: 1.5px solid rgba(255,255,255,0.22);
          color: white;
          background: rgba(255,255,255,0.05);
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .fcta-btn-call:hover {
          border-color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.1);
          transform: translateY(-3px);
        }

        /* Contact strip */
        .fcta-strip {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .fcta-strip-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          color: rgba(255,255,255,0.48);
          padding: 10px 22px;
          border-right: 1px solid rgba(255,255,255,0.08);
          transition: color 0.2s;
        }
        .fcta-strip-item:last-child { border-right: none; }
        .fcta-strip-item:hover { color: rgba(255,255,255,0.88); }
        .fcta-strip-icon { color: #219ebc; font-size: 16px; flex-shrink: 0; }

        /* Footer */
        .fcta-footer {
          background: #04070d;
          padding: 28px 5%;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .fcta-footer-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2px;
          margin-bottom: 12px;
        }
        .fcta-footer-link {
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          padding: 4px 12px;
          font-size: 13px;
          border-radius: 4px;
          transition: color 0.2s, background 0.2s;
        }
        .fcta-footer-link:hover { color: #219ebc; background: rgba(33,158,188,0.08); }
        .fcta-footer-copy { font-size: 12px; color: rgba(255,255,255,0.22); }

        /* Mobile sticky bar */
        .fcta-mob-sticky {
          display: none;
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 200;
          background: var(--orange, #fb8500);
          box-shadow: 0 -4px 24px rgba(0,0,0,0.3);
        }
        .fcta-mob-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 15px 20px;
          color: white;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .fcta-mob-sticky { display: block; }
          .fcta-section { padding: 80px 5% 80px; }
        }
        @media (max-width: 560px) {
          .fcta-btns { flex-direction: column; }
          .fcta-btn-primary,
          .fcta-btn-wa,
          .fcta-btn-call {
            width: 100%;
            justify-content: center;
            padding: 15px 24px;
          }
          .fcta-strip-item {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            width: 100%;
            justify-content: center;
            padding: 10px 16px;
          }
          .fcta-strip-item:last-child { border-bottom: none; }
        }
        @media (max-width: 400px) {
          .fcta-heading { letter-spacing: -0.5px; }
          .fcta-badge { font-size: 10px; letter-spacing: 1.5px; padding: 6px 14px; }
        }
      `}</style>

      {/* ── CTA Section ── */}
      <section ref={sectionRef} className="fcta-section">
        <div className="fcta-grid-bg" />
        <div className="fcta-glow-left" />
        <div className="fcta-glow-right" />

        <div className="fcta-content">

          {/* Heading block */}
          <div ref={headRef}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
              <span className="fcta-badge">
                <span className="fcta-badge-dot" />
                Limited — 5 Spots Left This Month
              </span>
            </div>

            <h2 className="fcta-heading">
              Ready to Stop Being{' '}
              <span className="fcta-grad">Invisible Online?</span>
            </h2>

            <p className="fcta-sub">
              Book your free 30-minute audit today. We'll show you exactly what's holding
              your business back — and how to fix it.
            </p>

            <div className="fcta-divider" />
          </div>

          {/* Buttons */}
          <div ref={btnsRef} className="fcta-btns">
            <a href="#audit-form" className="fcta-btn-primary">
              <HiClipboardDocumentList size={19} aria-hidden />
              Book Free Audit
            </a>
            <a
              href="https://wa.me/919918671867?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BeBeyond%20Digital%20Solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="fcta-btn-wa"
            >
              <FaWhatsapp size={19} aria-hidden />
              WhatsApp Us
            </a>
            <a href="tel:+919918671867" className="fcta-btn-call">
              <FiPhone size={17} aria-hidden />
              Call Now
            </a>
          </div>

          {/* Contact strip */}
          <div ref={stripRef} className="fcta-strip">
            {contactStrip.map(({ Icon, text }) => (
              <div key={text} className="fcta-strip-item">
                <Icon className="fcta-strip-icon" aria-hidden />
                {text}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="fcta-footer">
        <div className="fcta-footer-links">
          {footerLinks.map(([label, href]) => (
            <a key={label} href={href} className="fcta-footer-link">{label}</a>
          ))}
        </div>
        <p className="fcta-footer-copy">
          © 2026 Be Beyond Digital Solutions. All Rights Reserved. | Designed by BeBeyond ·
          Prayagraj, Uttar Pradesh
        </p>
      </footer>

      {/* ── Mobile sticky CTA ── */}
      <div className="fcta-mob-sticky">
        <a href="#audit-form" className="fcta-mob-link">
          <HiArrowRight size={18} aria-hidden />
          Book Your Free Audit — Only 5 Spots Left
        </a>
      </div>
    </>
  )
}