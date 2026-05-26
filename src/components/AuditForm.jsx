'use client'
import { useState } from 'react'
import { FiArrowRight, FiChevronDown, FiLock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi2'

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    business: '',
    type: '',
    challenge: '',
  })

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.business.trim()) {
      alert('Please fill in your name, phone number, and business name.')
      return
    }
    if (form.phone.replace(/\D/g, '').length < 10) {
      alert('Please enter a valid 10-digit phone number.')
      return
    }
    setSubmitted(true)
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

  return (
    <section id="audit-form" style={{ background: 'var(--white)', padding: '80px 5%' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div
          style={{
            background: 'var(--cream)',
            border: '1px solid var(--border)',
            borderRadius: 24,
            padding: '48px 40px',
          }}
        >
          {!submitted ? (
            <>
              <h2
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 28,
                  fontWeight: 800,
                  color: 'var(--ink)',
                  marginBottom: 8,
                }}
              >
                Book Your Free 30-Minute Digital Audit
              </h2>
              <p
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
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input
                    style={inputStyle}
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--blue)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)'
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    Phone Number *{' '}
                    <span
                      style={{
                        fontWeight: 400,
                        opacity: 0.6,
                        textTransform: 'none',
                        letterSpacing: 0,
                      }}
                    >
                      (We&apos;ll call/WhatsApp on this)
                    </span>
                  </label>
                  <input
                    style={inputStyle}
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--blue)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)'
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Business Name *</label>
                  <input
                    style={inputStyle}
                    placeholder="e.g. Sharma Jewellers"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--blue)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)'
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Business Type</label>
                  <div style={{ position: 'relative' }}>
                    <select
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
                      ].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    <FiChevronDown
                      className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]"
                      aria-hidden
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Biggest Challenge</label>
                  <div style={{ position: 'relative' }}>
                    <select
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
                      ].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    <FiChevronDown
                      className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]"
                      aria-hidden
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  style={{
                    width: '100%',
                    padding: '17px',
                    background: 'var(--orange)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 10,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 20px rgba(251,133,0,0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(251,133,0,0.45)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(251,133,0,0.3)'
                  }}
                >
                  Send My Audit Request
                  <FiArrowRight className="h-5 w-5 shrink-0" />
                </button>

                <div
                  style={{
                    textAlign: 'center',
                    fontSize: 13,
                    color: 'var(--muted)',
                    fontFamily: "'Public Sans', sans-serif",
                    position: 'relative',
                    padding: '8px 0',
                  }}
                >
                  <span
                    style={{
                      background: 'var(--cream)',
                      padding: '0 12px',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    or reach us directly
                  </span>
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      right: 0,
                      height: 1,
                      background: 'var(--border)',
                    }}
                  />
                </div>

                <a
                  href="https://wa.me/919918671867?text=Hi%2C%20I%20want%20to%20book%20a%20free%20digital%20audit%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
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
                    transition: 'background 0.2s',
                  }}
                >
                  <FaWhatsapp className="h-5 w-5 shrink-0" />
                  Chat on WhatsApp — +91 99 1867 1867
                </a>

                <p
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
                  }}
                >
                  <FiLock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  <span>
                    Your information is 100% private. We never share or sell your data. We typically
                    respond within 2–4 business hours, Monday–Saturday.
                  </span>
                </p>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <HiCheckCircle
                className="mx-auto mb-5 h-16 w-16 text-[#16a34a]"
                aria-hidden
              />
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 24,
                  fontWeight: 800,
                  color: '#16a34a',
                  marginBottom: 12,
                }}
              >
                Request Sent Successfully!
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                  fontFamily: "'Public Sans', sans-serif",
                  marginBottom: 24,
                }}
              >
                Thank you! We&apos;ve received your audit request.
                <br />
                Our team will reach out within <strong>24 hours</strong> to schedule your free call.
              </p>
              <a
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
                <FaWhatsapp className="h-5 w-5 shrink-0" />
                WhatsApp Us Now
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
