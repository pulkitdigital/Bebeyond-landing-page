'use client'

import { useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { FloatingBlob, OrbitRing } from './FloatingModel'

gsap.registerPlugin(ScrollTrigger)

const INFO_ICON = 'h-4 w-4 shrink-0'

const contactInfo = [
  { label: 'Email', value: 'hello@studio3d.in', Icon: FiMail },
  { label: 'WhatsApp', value: '+91 99 1867 1867', Icon: FaWhatsapp },
  { label: 'Location', value: 'Prayagraj, UP — India', Icon: MdLocationOn },
]

function ContactScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 3, 3]} intensity={2} color="#fb8500" />
      <pointLight position={[0, -3, -3]} intensity={1} color="#219ebc" />
      <FloatingBlob position={[0, 0, 0]} color="#fb8500" speed={0.8} />
      <OrbitRing radius={1.5} color="#219ebc" speed={0.6} />
      <OrbitRing radius={2} color="#fb8500" speed={-0.4} />
    </>
  )
}

export default function Contact() {
  const formRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: { trigger: titleRef.current, start: 'top 80%' },
      }
    )
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: { trigger: formRef.current, start: 'top 80%' },
      }
    )
  }, [])

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[#050f1a]" />
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[#fb8500]/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div ref={titleRef}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#fb8500]/30 bg-[#fb8500]/10 px-4 py-1.5">
              <span className="font-body text-xs tracking-widest text-[#fb8500] uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="font-display mb-6 text-4xl leading-tight font-bold md:text-5xl">
              Ready to Build
              <br />
              <span className="clip-text">Something Epic?</span>
            </h2>
            <p className="font-body mb-8 text-lg leading-relaxed text-[#7ba8b8]">
              Drop us a line. We typically respond within 24 hours and love talking about ambitious
              ideas — no matter the budget.
            </p>

            <div className="mb-8 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.Icon
                return (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#219ebc]/20 bg-[#219ebc]/5 text-[#219ebc]">
                    <Icon className={INFO_ICON} aria-hidden />
                  </div>
                  <div>
                    <div className="font-body text-xs tracking-wide text-[#7ba8b8] uppercase">
                      {item.label}
                    </div>
                    <div className="font-body text-sm text-white">{item.value}</div>
                  </div>
                </div>
                )
              })}
            </div>

            <div className="h-48 overflow-hidden rounded-2xl border border-[#fb8500]/10">
              <Canvas camera={{ position: [0, 0, 4], fov: 60 }} gl={{ alpha: true }}>
                <Suspense fallback={null}>
                  <ContactScene />
                </Suspense>
              </Canvas>
            </div>
          </div>

          <div
            ref={formRef}
            className="relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm"
          >
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  'radial-gradient(ellipse at top right, rgba(33,158,188,0.05), transparent 60%)',
              }}
            />

            <div className="relative space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {['Full Name', 'Company'].map((label) => (
                  <div key={label}>
                    <label className="font-body mb-2 block text-xs tracking-wide text-[#7ba8b8] uppercase">
                      {label}
                    </label>
                    <input
                      type="text"
                      placeholder={label === 'Full Name' ? 'Rahul Sharma' : 'Your Company'}
                      className="font-body w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all duration-300 placeholder:text-[#7ba8b8]/40 focus:border-[#219ebc]/50 focus:bg-[#219ebc]/5 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="font-body mb-2 block text-xs tracking-wide text-[#7ba8b8] uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="rahul@company.com"
                  className="font-body w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all duration-300 placeholder:text-[#7ba8b8]/40 focus:border-[#219ebc]/50 focus:bg-[#219ebc]/5 focus:outline-none"
                />
              </div>
              <div>
                <label className="font-body mb-2 block text-xs tracking-wide text-[#7ba8b8] uppercase">
                  Project Type
                </label>
                <select className="font-body w-full rounded-xl border border-white/10 bg-[#050f1a] px-4 py-3 text-sm text-[#7ba8b8] transition-all duration-300 focus:border-[#219ebc]/50 focus:outline-none">
                  <option value="">Select a service</option>
                  <option>3D Landing Page</option>
                  <option>Interactive Web App</option>
                  <option>Motion & Animation</option>
                  <option>3D Model Integration</option>
                  <option>Something Else</option>
                </select>
              </div>
              <div>
                <label className="font-body mb-2 block text-xs tracking-wide text-[#7ba8b8] uppercase">
                  Tell Us More
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your vision, timeline, and budget..."
                  className="font-body w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all duration-300 placeholder:text-[#7ba8b8]/40 focus:border-[#219ebc]/50 focus:bg-[#219ebc]/5 focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="font-display flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#219ebc] to-[#219ebc]/80 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(33,158,188,0.4)]"
              >
                Send Message
                <FiArrowRight className="h-5 w-5 shrink-0" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <div className="font-display text-lg font-bold">
            <span className="text-[#219ebc]">3D</span>
            <span className="text-white">Studio</span>
          </div>
          <p className="font-body text-xs text-[#7ba8b8]">
            © 2026 3DStudio. Crafted with Three.js & passion.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'Instagram', 'LinkedIn'].map((s) => (
              <a
                key={s}
                href="#"
                className="font-body text-xs text-[#7ba8b8] transition-colors hover:text-[#219ebc]"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
