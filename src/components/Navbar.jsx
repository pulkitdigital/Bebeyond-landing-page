'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { PiPhoneCall } from 'react-icons/pi'
import Image from 'next/image'

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    )
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 bg-white transition-all duration-300 flex justify-center ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[56px] sm:h-[72px] lg:h-[80px] items-center justify-between">

          {/* Logo */}
          <a
            href="https://bebeyond.digital"
            title="BeBeyond Digital Home Page"
            className="flex items-center"
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
          <a
            href="tel:+919026861110"
            className="flex items-center gap-2 sm:gap-3 no-underline group"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
          >
            {/* Phone Icon */}
            <PiPhoneCall className="h-[18px] w-[18px] sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-[#FB8500] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />

            {/* Text */}
            <div className="flex flex-col items-start leading-tight gap-[1px] sm:gap-[3px]">
              <span className="text-[#219ebc] text-[10px] sm:text-xs lg:text-sm font-semibold tracking-wide">
                Let&apos;s Chat
              </span>
              <span className="text-gray-800 font-bold text-[12px] sm:text-sm lg:text-base group-hover:text-[#219ebc] transition-colors duration-200">
                +91&nbsp;90&nbsp;2686&nbsp;1110
              </span>
            </div>
          </a>

        </div>
      </div>
    </header>
  )
}