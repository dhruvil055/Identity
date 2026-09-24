import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Sparkles, Layers, Shield, HeartHandshake, Check } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatIsIdenty: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'integrated' | 'comparison'>('integrated');
  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

  const integratedPillars = [
    {
      title: 'Proprietary Reinvention Framework™',
      desc: 'A structured operating system guiding recalibration, lifestyle alignment, and identity expansion.',
      icon: <Layers size={18} color="var(--color-brand-gold)" />,
    },
    {
      title: 'Curated Commerce & Capsule Edits',
      desc: 'Exclusive partnerships with luxury brands offering private member access and tailored styling.',
      icon: <Sparkles size={18} color="var(--color-brand-gold)" />,
    },
    {
      title: 'Founder-Led Monthly Reinvention Sessions',
      desc: 'Real-time strategic growth teaching, interactive integration exercises, and live Q&A.',
      icon: <Shield size={18} color="var(--color-brand-gold)" />,
    },
    {
      title: 'High-Trust Private Community',
      desc: 'An intimate, confidential space for high-capacity women navigating transitions and expansion.',
      icon: <HeartHandshake size={18} color="var(--color-brand-gold)" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      aria-label="What Is I-denty"
      style={{ backgroundColor: 'var(--color-bg-sand)', overflow: 'hidden' }}
    >
      <div className="identy-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>
        
        {/* Deep Background 3D Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.05, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ position: 'absolute', top: '-10%', right: '-5%', fontSize: '40rem', fontWeight: 900, color: 'var(--color-brand-gold)', zIndex: 0, pointerEvents: 'none' }}
        >
          I
        </motion.div>

        {/* Spatial Grid Layout */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
            width: '100%',
          }}
        >
          {/* Back Layer: Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: 15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ type: "spring", stiffness: 60, damping: 25 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '650px',
              zIndex: 1,
              perspective: '1200px'
            }}
          >
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
                transformStyle: 'preserve-3d',
                transform: 'translateZ(0)'
              }}
            >
              <motion.img
                src="https://i-denty.com/wp-content/themes/i-denty/assets/images/identy-brand.png"
                alt="What Is I-denty?"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </motion.div>

          <style>{`
            .what-is-overlap {
              margin-left: clamp(-40px, -8vw, -120px);
              margin-top: clamp(2rem, 5vw, 4rem);
            }
            @media (max-width: 768px) {
              .what-is-overlap {
                margin-left: 0;
                margin-top: -30px;
              }
            }
          `}</style>

          {/* Front Layer: Glassmorphism Content overlapping the image */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 50 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.2 }}
            className="glass-panel what-is-overlap"
            style={{
              width: '100%',
              maxWidth: '600px',
              zIndex: 3,
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
              position: 'relative',
              backgroundColor: 'rgba(255, 255, 255, 0.9)', // Increased opacity for better mobile contrast
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)'
            }}
          >
            <span className="eyebrow" style={{ transform: 'translateZ(20px)', display: 'block' }}>The New Category</span>
            <h2 style={{ marginBottom: '1.2rem', lineHeight: 1.18, transform: 'translateZ(30px)' }}>
              What Is I-denty?
            </h2>

            <p style={{ fontSize: '1.12rem', color: 'var(--color-text-main)', lineHeight: 1.65, marginBottom: '1.5rem', fontWeight: 400, transform: 'translateZ(20px)' }}>
              I-denty is the first <strong>identity-led lifestyle ecosystem</strong> built specifically for high-capacity women navigating transitions.
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '2rem', transform: 'translateZ(10px)' }}>
              We bring together personal development, lifestyle structure, curated commerce, and peer connection into a single, scalable membership platform.
            </p>

            {/* Interactive Toggle Pill */}
            <div
              style={{
                display: 'inline-flex',
                padding: '4px',
                backgroundColor: 'rgba(255,255,255,0.4)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255,255,255,0.5)',
                marginBottom: '1.5rem',
                transform: 'translateZ(30px)'
              }}
            >
              <button
                onClick={() => setActiveTab('integrated')}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'integrated' ? '#ffffff' : 'transparent',
                  color: activeTab === 'integrated' ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                  boxShadow: activeTab === 'integrated' ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                What You Receive
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'comparison' ? '#ffffff' : 'transparent',
                  color: activeTab === 'comparison' ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                  boxShadow: activeTab === 'comparison' ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                Why Traditional Solutions Fail
              </button>
            </div>

            {/* Tab Content with AnimatePresence for smooth spatial swapping */}
            <div style={{ minHeight: '280px', transform: 'translateZ(20px)' }}>
              <AnimatePresence mode="wait">
                {activeTab === 'integrated' ? (
                  <motion.div 
                    key="integrated"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.2rem' }}
                  >
                    {integratedPillars.map((p, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.85rem',
                          padding: '0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'rgba(255,255,255,0.7)',
                          border: '1px solid rgba(255,255,255,0.8)',
                        }}
                      >
                        <div style={{ marginTop: '2px' }}>{p.icon}</div>
                        <div>
                          <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.2rem' }}>
                            {p.title}
                          </h4>
                          <p style={{ fontSize: '0.86rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="comparison"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.7)',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(255,255,255,0.8)',
                      marginBottom: '2.2rem',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <span style={{ color: '#cf2e2e', fontWeight: 700, fontSize: '0.95rem' }}>✕</span>
                        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)' }}>
                          <strong>Personal development platforms</strong> focus exclusively on mindset, ignoring daily lifestyle architecture and physical presence.
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <span style={{ color: '#cf2e2e', fontWeight: 700, fontSize: '0.95rem' }}>✕</span>
                        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)' }}>
                          <strong>Luxury lifestyle brands</strong> focus on external aesthetics, offering no internal roadmap for real life transitions.
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <span style={{ color: '#cf2e2e', fontWeight: 700, fontSize: '0.95rem' }}>✕</span>
                        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)' }}>
                          <strong>Casual social communities</strong> focus on open conversation without structured guidance, accountability, or privacy.
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', borderTop: '1px solid var(--color-border-light)', paddingTop: '0.75rem' }}>
                        <Check size={18} color="var(--color-brand-gold)" />
                        <p style={{ fontSize: '0.92rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                          <strong>I-denty integrates all four</strong> into one cohesive, confidential operating system.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', transform: 'translateZ(40px)' }}>
              <Button variant="primary" href="/framework" withArrow style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                Explore The I-denty Approach
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
