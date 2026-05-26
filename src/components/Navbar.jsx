'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { PiPhoneCall } from 'react-icons/pi'
import Image from 'next/image'

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    gsap.set(navRef.current, { y: -80, opacity: 0 })
    gsap.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.3,
    })

    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <style>{`
        .navbar-root {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          justify-content: center;

          /* Same base color as Hero */
          background-color: #0B1A2D;

          /* Same radial gradients as hero-section::before */
          background-image:
            radial-gradient(ellipse 60% 140% at 70% 120%, rgba(33,158,188,.13) 0%, transparent 70%),
            radial-gradient(ellipse 40% 120% at 10% 160%, rgba(251,133,0,.08) 0%, transparent 60%);

          transition: box-shadow 0.3s ease;
        }

        /* Same grid overlay as hero-section::after */
        .navbar-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* No bottom border — seamless blend into Hero section */

        .navbar-root--scrolled {
          box-shadow:
            0 4px 32px rgba(0,0,0,.45),
            0 1px 0 rgba(33,158,188,.15);
        }
        .navbar-root--top {
          box-shadow: 0 2px 16px rgba(0,0,0,.2);
        }

        .navbar-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          padding: 0 16px;
        }
        @media (min-width: 640px)  { .navbar-inner { padding: 0 24px; } }
        @media (min-width: 1024px) { .navbar-inner { padding: 0 32px; } }

        .navbar-row {
          display: flex;
          height: 56px;
          align-items: center;
          justify-content: space-between;
        }
        @media (min-width: 640px)  { .navbar-row { height: 72px; } }
        @media (min-width: 1024px) { .navbar-row { height: 80px; } }

        .navbar-call {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-family: 'Public Sans', sans-serif;
        }
        @media (min-width: 640px) { .navbar-call { gap: 12px; } }

        .navbar-call__icon {
          color: #FB8500;
          flex-shrink: 0;
          width: 18px; height: 18px;
          transition: transform 0.2s ease;
        }
        @media (min-width: 640px)  { .navbar-call__icon { width: 24px; height: 24px; } }
        @media (min-width: 1024px) { .navbar-call__icon { width: 28px; height: 28px; } }

        .navbar-call:hover .navbar-call__icon {
          transform: scale(1.1);
        }

        .navbar-call__texts {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1;
          gap: 1px;
        }
        @media (min-width: 640px) { .navbar-call__texts { gap: 3px; } }

        .navbar-call__label {
          color: #219ebc;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        @media (min-width: 640px)  { .navbar-call__label { font-size: 12px; } }
        @media (min-width: 1024px) { .navbar-call__label { font-size: 14px; } }

        .navbar-call__number {
          color: #fff;
          font-weight: 700;
          font-size: 12px;
          transition: color 0.2s ease;
        }
        @media (min-width: 640px)  { .navbar-call__number { font-size: 14px; } }
        @media (min-width: 1024px) { .navbar-call__number { font-size: 16px; } }

        .navbar-call:hover .navbar-call__number {
          color: #219ebc;
        }
      `}</style>

      <header
        ref={navRef}
        style={{ opacity: 0 }}
        className={`navbar-root ${scrolled ? 'navbar-root--scrolled' : 'navbar-root--top'}`}
      >
        <div className="navbar-inner">
          <div className="navbar-row">

            {/* Logo */}
            <a
              href="https://bebeyond.digital"
              title="BeBeyond Digital Home Page"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Image
                src="/bebeyond_logo.png"
                alt="Be Beyond Digital Solutions"
                width={180}
                height={60}
                priority
                className="h-7 sm:h-10 lg:h-12 w-auto object-contain transition-all duration-300"
              />
            </a>

            {/* Call Details */}
            <a href="tel:+919026861110" className="navbar-call">
              <PiPhoneCall className="navbar-call__icon" />
              <div className="navbar-call__texts">
                <span className="navbar-call__label">Let&apos;s Chat</span>
                <span className="navbar-call__number">
                  +91&nbsp;90&nbsp;2686&nbsp;1110
                </span>
              </div>
            </a>

          </div>
        </div>
      </header>
    </>
  )
}