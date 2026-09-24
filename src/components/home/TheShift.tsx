import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { BRAND_CONFIG } from '../../data/brandData';
import { Check } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { TiltCard } from '../common/TiltCard';

export const TheShift: React.FC = () => {
  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  const beforePoints = [
    'Successful externally, but quietly misaligned internally.',
    'Holding everything together through sheer willpower and exhaustion.',
    'Quietly questioning what is next after major life disruption.',
    'Living within outdated roles and expectations of others.',
    'Fragmented support across therapists, stylists, and casual social clubs.',
  ];

  const afterPoints = [
    'Unshakeable clarity on authentic personal sovereignty and identity.',
    'Decisive, calm authority in high-stakes professional and life choices.',
    'Living completely aligned with current truth and high standards.',
    'Wardrobe and environment express intentional power and ease.',
    'Supported by an elite, confidential community and ongoing live founder sessions.',
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: '#0a0b0d', // Deep dark for 3D contrast
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Background Video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0.28,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={BRAND_CONFIG.shiftVideoUrl} type="video/mp4" />
        </video>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(10, 11, 13, 0.5) 0%, rgba(10, 11, 13, 1) 100%)',
          }}
        />
      </div>

      <div className="identy-container" style={{ position: 'relative', zIndex: 2, perspective: '1200px' }}>
        {/* Section Header */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateZ(40px) translateY(0)' : 'translateZ(0) translateY(24px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            transformStyle: 'preserve-3d'
          }}
        >
          <SectionHeader
            eyebrow="The Measurable Transformation"
            title="The Shift"
            subtitle="How six months inside the I-denty ecosystem fundamentally transforms your trajectory."
            centered
            light
          />
        </div>

        {/* Comparison Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1040px',
            margin: '0 auto 4rem auto',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Card 1: Before I-denty */}
          <TiltCard
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
            className="glass-panel-dark"
          >
            <div style={{ padding: 'clamp(2rem, 4vw, 2.8rem)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  fontWeight: 600,
                  color: '#abb1bc',
                  marginBottom: '0.5rem',
                  transform: 'translateZ(20px)'
                }}
              >
                The Friction Point
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 500, transform: 'translateZ(30px)' }}>
                Before I-denty
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', flex: 1, transform: 'translateZ(10px)' }}>
                {beforePoints.map((point, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.94rem',
                      color: '#c4c8d0',
                      lineHeight: 1.5,
                      opacity: inView ? 1 : 0,
                      transition: `opacity 0.5s ease ${0.4 + index * 0.08}s`,
                    }}
                  >
                    <span style={{ color: '#ff6b6b', fontWeight: 700, marginTop: '-1px' }}>—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>

          {/* Card 2: After 6 Months */}
          <TiltCard
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s',
              border: '1px solid rgba(181, 156, 103, 0.4)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(181, 156, 103, 0.1)'
            }}
            className="glass-panel-dark"
          >
            <div style={{ padding: 'clamp(2rem, 4vw, 2.8rem)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: 'rgba(181, 156, 103, 0.2)',
                  color: 'var(--color-brand-gold)',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  padding: '0.3rem 0.7rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-brand-gold)',
                  transform: 'translateZ(40px)'
                }}
              >
                Sustainable Evolution
              </div>

              <div
                style={{
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  fontWeight: 600,
                  color: 'var(--color-brand-gold)',
                  marginBottom: '0.5rem',
                  transform: 'translateZ(20px)'
                }}
              >
                The Integrated Outcome
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 500, transform: 'translateZ(30px)' }}>
                After 6 Months
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', flex: 1, transform: 'translateZ(10px)' }}>
                {afterPoints.map((point, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.94rem',
                      color: '#ffffff',
                      lineHeight: 1.5,
                      opacity: inView ? 1 : 0,
                      transition: `opacity 0.5s ease ${0.55 + index * 0.08}s`,
                    }}
                  >
                    <Check size={18} color="var(--color-brand-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        </div>

        {/* CTA Bridge */}
        <div
          style={{
            textAlign: 'center',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateZ(40px) translateY(0)' : 'translateZ(0) translateY(16px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
            transformStyle: 'preserve-3d'
          }}
        >
          <Button variant="gold" href="/memberships" withArrow style={{ boxShadow: '0 10px 30px rgba(181, 156, 103, 0.2)' }}>
            Begin Your Shift Inside The Ecosystem
          </Button>
        </div>
      </div>
    </section>
  );
};
