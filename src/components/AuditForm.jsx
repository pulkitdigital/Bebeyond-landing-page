'use client'
import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiChevronDown, FiLock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi2'
import emailjs from '@emailjs/browser'

// ── EmailJS config ──────────────────────────────────────────────
const EJS_SERVICE  = 'service_x0ammcq'
const EJS_TEMPLATE = 'template_tlz9frl'   // 👈 replace karo
const EJS_PUBLIC   = 'UmIkK9F57SH7BDnNh'    // 👈 replace karo

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const inputStyle = {
  width: '100%',
  padding: '13px 16px',
  border: '1.5px solid var(--border)',
  borderRadius: 10,
  fontSize: 15,
  fontFamily: "'Public Sans', sans-serif",
  color: 'var(--ink)',
  background: 'white',
  outline: 'none',
  transition: 'border-color 0.2s',
  appearance: 'none',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--ink)',
  marginBottom: 8,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  fontFamily: "'Public Sans', sans-serif",
}

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')

  const [form, setForm] = useState({
    name: '',
    phone: '',
    business: '',
    type: '',
    challenge: '',
  })

  const sectionRef = useRef()
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' })

  const handleSubmit = async () => {
    setError('')

    if (!form.name.trim() || !form.phone.trim() || !form.business.trim()) {
      setError('Please fill in your name, phone number, and business name.')
      return
    }
    if (form.phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit phone number.')
      return
    }

    setLoading(true)
    try {
      await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        {
          from_name     : form.name.trim(),
          phone         : form.phone.trim(),
          business      : form.business.trim(),
          business_type : form.type      || 'Not specified',
          challenge     : form.challenge || 'Not specified',
          time          : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        },
        EJS_PUBLIC
      )
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try WhatsApp instead.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="audit-form" style={{ background: 'var(--white)', padding: '80px 5%' }}>
      <style>{`
        .audit-input:focus { border-color: var(--blue) !important; }
        .audit-btn-shimmer { position: relative; overflow: hidden; }
        .audit-btn-shimmer::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: rgba(255,255,255,0.18);
          transform: skewX(-20deg);
          animation: shimmer 3s ease-in-out infinite 1s;
        }
        @keyframes shimmer { 0%{left:-75%} 40%{left:125%} 100%{left:125%} }
        .audit-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 13px;
          font-family: 'Public Sans', sans-serif;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        @media (max-width: 600px) {
          #audit-form          { padding: 50px 4% !important; }
          #audit-card          { padding: 28px 18px !important; border-radius: 16px !important; }
          #audit-card h2       { font-size: 20px !important; }
          .whatsapp-text-full  { display: none; }
          .whatsapp-text-short { display: inline !important; }
        }
        .whatsapp-text-short { display: none; }
      `}</style>

      <div ref={sectionRef} style={{ maxWidth: 680, margin: '0 auto' }}>
        <motion.div
          id="audit-card"
          initial={{ opacity: 0, y: 48 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'var(--cream)',
            border: '1px solid var(--border)',
            borderRadius: 24,
            padding: '48px 40px',
          }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 28,
                    fontWeight: 800,
                    color: 'var(--ink)',
                    marginBottom: 8,
                  }}
                >
                  Book Your Free 30-Minute Digital Audit
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontSize: 15,
                    color: 'var(--muted)',
                    fontFamily: "'Public Sans', sans-serif",
                    marginBottom: 32,
                    lineHeight: 1.6,
                  }}
                >
                  Fill in the form below. We&apos;ll reach out within 24 hours to schedule your call.
                  No spam, ever.
                </motion.p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                  {/* Name */}
                  <motion.div custom={0} variants={fieldVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      className="audit-input"
                      style={inputStyle}
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div custom={1} variants={fieldVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <label style={labelStyle}>
                      Phone Number *{' '}
                      <span style={{ fontWeight: 400, opacity: 0.6, textTransform: 'none', letterSpacing: 0 }}>
                        (We&apos;ll call/WhatsApp on this)
                      </span>
                    </label>
                    <input
                      className="audit-input"
                      style={inputStyle}
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </motion.div>

                  {/* Business Name */}
                  <motion.div custom={2} variants={fieldVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <label style={labelStyle}>Business Name *</label>
                    <input
                      className="audit-input"
                      style={inputStyle}
                      placeholder="e.g. Sharma Jewellers"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                    />
                  </motion.div>

                  {/* Business Type */}
                  <motion.div custom={3} variants={fieldVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <label style={labelStyle}>Business Type</label>
                    <div style={{ position: 'relative' }}>
                      <select
                        className="audit-input"
                        style={{ ...inputStyle, paddingRight: 36 }}
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                      >
                        <option value="">Select your business type</option>
                        {[
                          'Retail Store',
                          'Education / Coaching Institute',
                          'Food & Beverage / Restaurant / Cafe',
                          'Healthcare / Clinic',
                          'E-Commerce / Online Store',
                          'Service Business',
                          'Hospitality / Events',
                          'Other',
                        ].map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <FiChevronDown
                        className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]"
                        aria-hidden
                      />
                    </div>
                  </motion.div>

                  {/* Challenge */}
                  <motion.div custom={4} variants={fieldVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <label style={labelStyle}>Biggest Challenge</label>
                    <div style={{ position: 'relative' }}>
                      <select
                        className="audit-input"
                        style={{ ...inputStyle, paddingRight: 36 }}
                        value={form.challenge}
                        onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                      >
                        <option value="">What&apos;s your main goal?</option>
                        {[
                          'Need more customers / enquiries',
                          'Build or fix my website',
                          'Run effective ads',
                          'Manage my social media',
                          'Improve Google ranking (SEO)',
                          'Not sure — need advice',
                        ].map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <FiChevronDown
                        className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]"
                        aria-hidden
                      />
                    </div>
                  </motion.div>

                  {/* Error message */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        className="audit-error"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                      >
                        ⚠️ {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <motion.div custom={5} variants={fieldVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <motion.button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="audit-btn-shimmer"
                      whileHover={!loading ? { translateY: -2, boxShadow: '0 8px 28px rgba(251,133,0,0.45)' } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      style={{
                        width: '100%',
                        padding: '17px',
                        background: loading ? '#f0a050' : 'var(--orange)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 10,
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        fontSize: 17,
                        cursor: loading ? 'not-allowed' : 'pointer',
                        boxShadow: '0 4px 20px rgba(251,133,0,0.3)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        transition: 'background 0.2s',
                      }}
                    >
                      {loading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            style={{ display: 'inline-block', width: 18, height: 18, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%' }}
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send My Audit Request
                          <FiArrowRight style={{ width: 20, height: 20, flexShrink: 0 }} />
                        </>
                      )}
                    </motion.button>
                  </motion.div>

                  {/* Divider */}
                  <motion.div
                    custom={6} variants={fieldVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    style={{
                      textAlign: 'center',
                      fontSize: 13,
                      color: 'var(--muted)',
                      fontFamily: "'Public Sans', sans-serif",
                      position: 'relative',
                      padding: '8px 0',
                    }}
                  >
                    <span style={{ background: 'var(--cream)', padding: '0 12px', position: 'relative', zIndex: 1 }}>
                      or reach us directly
                    </span>
                    <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'var(--border)' }} />
                  </motion.div>

                  {/* WhatsApp */}
                  <motion.div custom={7} variants={fieldVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <motion.a
                      href="https://wa.me/919918671867?text=Hi%2C%20I%20want%20to%20book%20a%20free%20digital%20audit%20for%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        width: '100%',
                        padding: '15px',
                        background: '#25D366',
                        color: 'white',
                        borderRadius: 10,
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        textDecoration: 'none',
                        boxSizing: 'border-box',
                      }}
                    >
                      <FaWhatsapp style={{ width: 20, height: 20, flexShrink: 0 }} />
                      <span className="whatsapp-text-full">Chat on WhatsApp — +91 99 1867 1867</span>
                      <span className="whatsapp-text-short">WhatsApp — +91 99 1867 1867</span>
                    </motion.a>
                  </motion.div>

                  {/* Privacy note */}
                  <motion.p
                    custom={8} variants={fieldVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    style={{
                      fontSize: 13,
                      color: 'var(--muted)',
                      fontFamily: "'Public Sans', sans-serif",
                      lineHeight: 1.6,
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      gap: 8,
                      margin: 0,
                    }}
                  >
                    <FiLock style={{ marginTop: 2, width: 16, height: 16, flexShrink: 0 }} aria-hidden />
                    <span>
                      Your information is 100% private. We never share or sell your data. We typically
                      respond within 2–4 business hours, Monday–Saturday.
                    </span>
                  </motion.p>

                </div>
              </motion.div>
            ) : (
              /* ── Success State ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ textAlign: 'center', padding: '40px 20px' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                >
                  <HiCheckCircle
                    style={{ display: 'block', margin: '0 auto 20px', width: 64, height: 64, color: '#16a34a' }}
                    aria-hidden
                  />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 24,
                    fontWeight: 800,
                    color: '#16a34a',
                    marginBottom: 12,
                  }}
                >
                  Request Sent Successfully!
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  style={{
                    fontSize: 16,
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                    fontFamily: "'Public Sans', sans-serif",
                    marginBottom: 24,
                  }}
                >
                  Thank you, <strong>{form.name}</strong>! We&apos;ve received your audit request.
                  <br />
                  Our team will reach out within <strong>24 hours</strong> to schedule your free call.
                </motion.p>

                <motion.a
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wa.me/919918671867?text=Hi%2C%20I%20just%20submitted%20the%20audit%20form%20and%20want%20to%20schedule%20my%20call."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '13px 24px',
                    background: '#25D366',
                    color: 'white',
                    borderRadius: 8,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  <FaWhatsapp style={{ width: 20, height: 20, flexShrink: 0 }} />
                  WhatsApp Us Now
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}