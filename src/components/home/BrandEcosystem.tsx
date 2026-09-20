import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { PLATFORM_TIMELINE } from '../../data/brandData';


export const BrandEcosystem: React.FC = () => {
  const brandPillars = [
    'Curated e-commerce & styling integrations',
    'Exclusive capsule collaborations with luxury partners',
    'Invitation-only private member salons & dinners',
    'Multi-category expansion guided strictly by member demand',
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-sand-light)' }}>
      <div className="identy-container">
        <SectionHeader
          eyebrow="Commercial Architecture"
          title="The Brand Ecosystem"
          subtitle="I-denty partners with aligned luxury and lifestyle brands seeking genuine resonance with high-capacity, financially empowered women."
          centered
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
            marginBottom: '4.5rem',
          }}
        >
          {/* Left: Graphic Asset */}
          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border-light)',
            }}
          >
            <img
              src="https://i-denty.com/wp-content/themes/i-denty/assets/images/Group%203255.png"
              alt="The Brand Ecosystem"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop';
              }}
            />
          </div>

          {/* Right: Narrative */}
          <div>
            <span className="eyebrow">Strategic Value</span>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', marginBottom: '1rem', color: 'var(--color-text-main)' }}>
              Beyond Traditional Influencer Marketing
            </h3>

            <p style={{ fontSize: '1.02rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Our members are not passive consumers; they are decision-makers, executives, and leaders who invest in enduring quality. Brand integrations inside I-denty are curated to ensure mutual integrity.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              {brandPillars.map((pillar, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.94rem', color: 'var(--color-text-main)' }}>
                  <span style={{ color: 'var(--color-brand-gold)', fontWeight: 700 }}>◈</span>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="primary" href="/about#partners" withArrow>
                Partner With I-denty
              </Button>
              <Button variant="secondary" href="/memberships">
                Explore Member Brand Perks
              </Button>
            </div>
          </div>
        </div>

        {/* Scalable Platform Architecture & Timeline */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            boxShadow: 'var(--shadow-subtle)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
            <span className="eyebrow">The Evolution Roadmap</span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>
              Scalable Platform Architecture
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
              I-denty operates on a layered ecosystem model designed for multi-category global expansion.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {PLATFORM_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-bg-sand)',
                  padding: '1.8rem 1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  borderTop: '3px solid var(--color-brand-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--color-brand-gold-dark)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.year}
                </div>
                <h4 style={{ fontSize: '1.12rem', color: 'var(--color-text-main)', marginBottom: '0.75rem', fontWeight: 600 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.55 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
