import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { Compass, Sparkles, ShieldCheck, Users, Crown } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { TiltCard } from '../common/TiltCard';
import { MEMBERSHIP_TIERS } from '../../data/membershipsData';

const PATH_FINDER_STEPS = [
  {
    icon: Compass,
    title: 'Diagnose',
    desc: 'Answer 3 questions about your current transition, learning style, and growth focus.',
    color: 'var(--color-brand-gold)',
    gradient: 'linear-gradient(135deg, rgba(181,156,103,0.1), rgba(181,156,103,0.02))',
  },
  {
    icon: Sparkles,
    title: 'Match',
    desc: 'Our algorithm maps your responses to the ideal tier, framework stage, and session track.',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.02))',
  },
  {
    icon: ShieldCheck,
    title: 'Begin',
    desc: 'Receive a personalized entry point with curated content, live sessions, and community access.',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.02))',
  },
];

const TIER_PREVIEWS = [
  {
    tier: MEMBERSHIP_TIERS[0],
    icon: ShieldCheck,
    focus: 'Foundation',
    gradient: 'linear-gradient(135deg, rgba(181,156,103,0.1), rgba(181,156,103,0.02))',
    borderColor: 'var(--color-brand-gold-border)',
  },
  {
    tier: MEMBERSHIP_TIERS[1],
    icon: Users,
    focus: 'Integration',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.02))',
    borderColor: 'rgba(139,92,246,0.3)',
  },
  {
    tier: MEMBERSHIP_TIERS[2],
    icon: Crown,
    focus: 'Mastery',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.02))',
    borderColor: 'rgba(16,185,129,0.3)',
  },
];

export const PathFinderCTA: React.FC = () => {
  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.03, scale: 1 } : {}}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          fontSize: '60rem',
          fontWeight: 900,
          color: 'var(--color-brand-gold)',
          zIndex: 0,
          pointerEvents: 'none',
          fontFamily: 'var(--font-brand)',
        }}
        aria-hidden="true"
      >
        \u25C8
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.02, scale: 1 } : {}}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          fontSize: '40rem',
          fontWeight: 900,
          color: 'var(--color-brand-gold)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        \u25CF
      </motion.div>

      <div className="identy-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <SectionHeader
            eyebrow="Interactive Diagnostic"
            title="Find Your Entry Point in 90 Seconds"
            subtitle="Not sure which tier fits your current chapter? Our Path Finder maps your transition profile to the right ecosystem level, framework stage, and live session track."
            centered
          />
        </div>

        {/* 3-Step Process Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: '1.5rem',
            marginBottom: 'var(--section-block-gap)',
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {PATH_FINDER_STEPS.map((step, index) => (
            <TiltCard
              key={step.title}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.8s ease ${0.3 + index * 0.1}s, transform 0.8s ease ${0.3 + index * 0.1}s`,
              }}
            >
              <div
                className="glass-panel"
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-light)',
                  background: step.gradient,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 100, damping: 15 }}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    transform: 'translateZ(20px)',
                  }}
                >
                  <step.icon size={28} color={step.color} />
                </motion.div>

                <div style={{ transform: 'translateZ(15px)' }}>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      fontWeight: 700,
                      color: step.color,
                      marginBottom: '0.5rem',
                    }}
                  >
                    Step {index + 1}
                  </div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-text-main)', marginBottom: '0.75rem', fontWeight: 500 }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>

                {/* Progress connector line */}
                {index < 2 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '96px',
                      right: '-0.75rem',
                      width: '1.5rem',
                      height: '2px',
                      background: `linear-gradient(90deg, ${step.color}, transparent)`,
                      transform: 'translateZ(10px)',
                    }}
                  />
                )}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Tier Preview Cards - Horizontal Scroll */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s',
          }}
        >
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>
              Your Potential Starting Points
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Each tier is a complete ecosystem. The diagnostic will recommend your ideal entry level based on where you are today.
            </p>
          </div>

          <div
            role="region"
            aria-label="Membership tier previews — scroll horizontally to explore"
            tabIndex={0}
            style={{
              display: 'flex',
              gap: '1.5rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              padding: '0.5rem 0 2rem',
              margin: '0 calc(-1 * clamp(1.25rem, 4vw, 2.5rem))',
              paddingLeft: 'clamp(1.25rem, 4vw, 2.5rem)',
              paddingRight: 'clamp(1.25rem, 4vw, 2.5rem)',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {TIER_PREVIEWS.map((preview, index) => (
              <motion.div
                key={preview.tier.id}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 100, damping: 20 }}
                style={{
                  scrollSnapAlign: 'center',
                  flexShrink: 0,
                  width: '300px',
                }}
              >
                <TiltCard>
                  <div
                    className="glass-panel"
                    style={{
                      padding: '2rem',
                      borderRadius: 'var(--radius-md)',
                      border: `1px solid ${preview.borderColor}`,
                      background: preview.gradient,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      minHeight: '380px',
                      position: 'relative',
                    }}
                  >
                    {/* Tier Icon */}
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                        transform: 'translateZ(20px)',
                      }}
                    >
                      <preview.icon size={24} color="var(--color-brand-gold)" />
                    </div>

                    {/* Tier Name & Badge */}
                    <div style={{ transform: 'translateZ(15px)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                        <h4 style={{ fontSize: '1.35rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                          {preview.tier.name}
                        </h4>
                        {preview.tier.badge && (
                          <span
                            style={{
                              fontSize: '0.65rem',
                              textTransform: 'uppercase',
                              letterSpacing: '0.08em',
                              fontWeight: 700,
                              color: 'var(--color-brand-gold-dark)',
                              backgroundColor: 'rgba(181,156,103,0.1)',
                              padding: '0.2rem 0.5rem',
                              borderRadius: 'var(--radius-sm)',
                              border: '1px solid var(--color-brand-gold-border)',
                            }}
                          >
                            {preview.tier.badge}
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          fontSize: '0.85rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          fontWeight: 600,
                          color: 'var(--color-brand-gold)',
                          marginBottom: '1rem',
                        }}
                      >
                        Focus: {preview.focus}
                      </div>

                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                        {preview.tier.description}
                      </p>

                      {/* Price */}
                      <div
                        style={{
                          padding: '1rem',
                          backgroundColor: 'rgba(255,255,255,0.5)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--color-border-light)',
                          marginBottom: '1.5rem',
                        }}
                      >
                        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>
                          Annual Investment
                        </div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                          <span style={{ fontSize: '1.75rem', fontWeight: 300, color: 'var(--color-text-main)' }}>
                            ${preview.tier.priceAnnualPerMonth}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>/mo</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-brand-gold)', fontWeight: 500, marginLeft: '0.25rem' }}>
                            (${preview.tier.priceAnnual}/yr)
                          </span>
                        </div>
                      </div>

                      {/* Key Features */}
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem', flex: 1 }}>
                        {preview.tier.keyHighlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                            <span style={{ color: 'var(--color-brand-gold)', marginTop: '1px' }}>✦</span>
                            <span style={{ color: 'var(--color-text-main)' }}>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button
                        variant="primary"
                        href={preview.tier.ctaHref}
                        withArrow
                        style={{ width: '100%', transform: 'translateZ(30px)' }}
                      >
                        {preview.tier.ctaText}
                      </Button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Scroll hint */}
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Scroll horizontally to explore all tiers \u2192
          </p>
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
          style={{ textAlign: 'center', marginTop: 'var(--section-block-gap)', paddingTop: '2rem', borderTop: '1px solid var(--color-border-light)' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-brand-gold-dark)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Compass size={14} />
            <span>Ready to Begin?</span>
          </div>

          <Button
            variant="gold"
            href="/finder"
            withArrow
            style={{
              boxShadow: '0 16px 40px rgba(181, 156, 103, 0.25)',
              padding: '1.1rem 2.5rem',
              fontSize: '0.85rem',
            }}
          >
            Start The Path Finder
          </Button>

          <p style={{ marginTop: '1.5rem', fontSize: '0.88rem', color: 'var(--color-text-muted)', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Takes 90 seconds. No email required. Your personalized roadmap appears instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};