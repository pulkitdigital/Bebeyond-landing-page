"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "Is the audit really free? What's the catch?",
    a: "Completely free. No catch, no hidden fees. At the end of the call, we'll share how BeBeyond can help — but there's zero obligation. We believe if we show you real value, you'll want to work with us. That's our only strategy.",
  },
  {
    q: "Do you work with businesses outside Prayagraj?",
    a: "Yes! While we're based in Civil Lines, Prayagraj, we work with clients across India — from Mumbai to Bangalore to Delhi. All consultations can be done over video call or phone. We've served clients in multiple states.",
  },
  {
    q: "How long does it take to see results?",
    a: "For social media and Meta ads, you'll typically see activity within the first 2–4 weeks. For SEO, results build sustainably over 3–6 months. We're always transparent about timelines — no false promises.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. We offer month-to-month arrangements. We believe our work should speak for itself — not a contract that locks you in. Stay because you're getting results, not because you have to.",
  },
  {
    q: "What if I have a very small budget?",
    a: "We work with businesses at different budget levels. During your free audit, we'll recommend what makes sense for your specific situation. We believe every business deserves access to good marketing, regardless of size.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "We work with retail stores, restaurants and cafes, educational institutes, healthcare clinics, jewellers, hospitality brands, e-commerce stores, and professional service businesses. If you need customers, we can help.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <style>{`
        .faq-section {
          position: relative;
          z-index: 1;
          background: var(--cream);
          padding: 80px 5%;
        }
        .faq-inner { max-width: 780px; margin: 0 auto; }
        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .faq-item {
          background: var(--white);
          border-radius: 14px;
          transition: border-color 0.3s, box-shadow 0.3s;
          overflow: hidden;
        }
        .faq-item--open { box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
        .faq-btn {
          width: 100%;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          text-align: left;
          font: inherit;
          color: inherit;
        }
        .faq-btn:focus-visible {
          outline: 2px solid var(--blue);
          outline-offset: -2px;
          border-radius: 14px;
        }
        .faq-question {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: var(--ink);
          line-height: 1.4;
          flex: 1;
        }
        .faq-icon {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s, color 0.3s;
        }
        .faq-body {
          padding: 0 24px 20px;
          border-top: 1px solid var(--border);
        }
        .faq-answer {
          padding-top: 16px;
          font-size: 14px;
          color: var(--muted);
          line-height: 1.75;
          font-family: 'Public Sans', sans-serif;
          margin: 0;
        }
        @media (max-width: 600px) {
          .faq-section { padding: 56px 4%; }
          .faq-btn { padding: 16px 18px; }
          .faq-question { font-size: 14px; }
          .faq-body { padding: 0 18px 16px; }
          .faq-answer { font-size: 13.5px; }
        }
      `}</style>

      <section id="faq" ref={sectionRef} className="faq-section">
        <div className="faq-inner">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: "center", marginBottom: 52 }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--blue)",
                fontFamily: "'Public Sans', sans-serif",
                marginBottom: 12,
              }}
            >
              Common Questions
            </div>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(26px, 4vw, 42px)",
                fontWeight: 800,
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* FAQ Items — one by one */}
          <div className="faq-list">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;

              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`faq-item${isOpen ? " faq-item--open" : ""}`}
                  style={{
                    border: `1px solid ${isOpen ? "var(--blue)" : "var(--border)"}`,
                  }}
                >
                  <button
                    id={buttonId}
                    type="button"
                    className="faq-btn"
                    onClick={() => handleToggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="faq-question">{f.q}</span>
                    <motion.span
                      className="faq-icon"
                      animate={{
                        background: isOpen ? "var(--blue)" : "var(--light-grey)",
                        color: isOpen ? "white" : "var(--blue)",
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      aria-hidden="true"
                    >
                      <FiPlus size={16} />
                    </motion.span>
                  </button>

                  {/* Accordion panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="faq-body">
                          <p className="faq-answer">{f.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}