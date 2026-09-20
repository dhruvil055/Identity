import React from 'react';
import { Button } from '../common/Button';
import { FOUNDER_INFO } from '../../data/brandData';
import { Award } from 'lucide-react';

export const FounderSpotlight: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="identy-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Dual Image Composition */}
          <div style={{ position: 'relative', maxWidth: '520px', margin: '0 auto' }}>
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                backgroundColor: 'var(--color-bg-sand)',
              }}
            >
              <img
                src={FOUNDER_INFO.imageMain}
                alt={FOUNDER_INFO.name}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop';
                }}
              />
            </div>

            {/* Accent Overlapping Detail Photo */}
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-25px',
                width: '45%',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-modal)',
                border: '4px solid #ffffff',
              }}
            >
              <img
                src={FOUNDER_INFO.imageAccent}
                alt="Founder Detail"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop';
                }}
              />
            </div>
          </div>

          {/* Narrative Content */}
          <div>
            <span className="eyebrow">The Leadership Behind I-denty</span>
            <h2 style={{ marginBottom: '1.2rem', lineHeight: 1.18 }}>
              Founder Story
            </h2>

            <blockquote
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '1.25rem',
                color: 'var(--color-text-main)',
                fontStyle: 'italic',
                borderLeft: '3px solid var(--color-brand-gold)',
                paddingLeft: '1.25rem',
                margin: '1.5rem 0',
                lineHeight: 1.6,
              }}
            >
              {FOUNDER_INFO.quote}
            </blockquote>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.8rem' }}>
              {FOUNDER_INFO.paragraphs.map((p, index) => (
                <p key={index} style={{ fontSize: '0.96rem', color: 'var(--color-text-body)', lineHeight: 1.65 }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Awards Ribbon */}
            <div
              style={{
                backgroundColor: 'var(--color-bg-sand)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-light)',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.74rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  color: 'var(--color-brand-gold-dark)',
                  marginBottom: '0.5rem',
                }}
              >
                <Award size={14} />
                <span>Recognized Leadership Pedigree</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--color-text-main)' }}>
                {FOUNDER_INFO.awards.map((award, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: '#ffffff',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border-light)',
                    }}
                  >
                    {award}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Button variant="primary" href="/about" withArrow>
                Read Full Philosophy &amp; Story
              </Button>
              <Button variant="secondary" href="/memberships#consultation">
                Apply for Private 1:1 Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
