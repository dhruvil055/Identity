import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Sparkles, Layers, Shield, HeartHandshake, Check } from 'lucide-react';

export const WhatIsIdenty: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'integrated' | 'comparison'>('integrated');

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
    <section id="what-is-identy" className="section-padding" style={{ backgroundColor: 'var(--color-bg-sand-light)' }}>
      <div className="identy-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left: Editorial Image with Luxury Framing */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                backgroundColor: 'var(--color-bg-sand)',
              }}
            >
              <img
                src="https://i-denty.com/wp-content/themes/i-denty/assets/images/identy-brand.png"
                alt="What Is I-denty?"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.6s ease',
                }}
              />
            </div>

            {/* Accent Floating Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                backgroundColor: 'var(--color-bg-dark)',
                color: '#ffffff',
                padding: '1rem 1.4rem',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--color-brand-gold-border)',
                maxWidth: '240px',
              }}
            >
              <div style={{ color: 'var(--color-brand-gold)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600 }}>
                Ecosystem Standard
              </div>
              <div style={{ fontSize: '0.86rem', color: '#ffffff', marginTop: '0.2rem' }}>
                Where leadership discipline meets lived reinvention.
              </div>
            </div>
          </div>

          {/* Right: Content & Progressive Disclosure */}
          <div>
            <span className="eyebrow">The New Category</span>
            <h2 style={{ marginBottom: '1.2rem', lineHeight: 1.18 }}>
              What Is I-denty?
            </h2>

            <p style={{ fontSize: '1.12rem', color: 'var(--color-text-main)', lineHeight: 1.65, marginBottom: '1.5rem', fontWeight: 400 }}>
              I-denty is the first <strong>identity-led lifestyle ecosystem</strong> built specifically for high-capacity women navigating transitions.
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '2rem' }}>
              We bring together personal development, lifestyle structure, curated commerce, and peer connection into a single, scalable membership platform.
            </p>

            {/* Interactive Toggle Pill */}
            <div
              style={{
                display: 'inline-flex',
                padding: '4px',
                backgroundColor: 'var(--color-bg-sand-warm)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                marginBottom: '1.5rem',
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
                  boxShadow: activeTab === 'integrated' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.2s',
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
                  boxShadow: activeTab === 'comparison' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                Why Traditional Solutions Fail
              </button>
            </div>

            {/* Tab 1: Integrated Ecosystem */}
            {activeTab === 'integrated' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.2rem' }}>
                {integratedPillars.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--color-border-light)',
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
              </div>
            ) : (
              /* Tab 2: Why Other Spaces Fail */
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-light)',
                  marginBottom: '2.2rem',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
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
              </div>
            )}

            {/* CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="primary" href="/framework" withArrow>
                Explore The I-denty Approach
              </Button>
              <Button variant="secondary" href="/memberships">
                View Membership Levels
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
