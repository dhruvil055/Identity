import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { Sparkles, Calendar, Check } from 'lucide-react';

export const ValuePropCards: React.FC = () => {
  const membershipItems = [
    'Access to the full Reinvention Framework™ operating system',
    'Personal styling and non-verbal executive presence guidance',
    'Curated luxury brand collaborations & private member privileges',
    'Structured lifestyle alignment and energy architecture modules',
    'Private member digital community and confidential peer circles',
    'Full audio & video archive of all historical reinvention sessions',
  ];

  const monthlySessionItems = [
    'Structured teaching aligned to the active Reinvention Framework stage',
    'Strategic lifestyle integration & executive recalibration discussion',
    'Guided live application exercises and reflective inquiry',
    'Direct interactive Q&A with Founder Eveliene for real-time clarity',
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-sand)' }}>
      <div className="identy-container">
        <SectionHeader
          eyebrow="Inside The Membership"
          title="The Core Pillars of Growth"
          subtitle="Everything in I-denty is built around practical transformation and ongoing reinforcement."
          centered
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Card 1: The Membership Experience */}
          <div
            className="card-editorial"
            style={{
              backgroundColor: '#ffffff',
              padding: 'clamp(2.2rem, 4vw, 3rem)',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: 'var(--color-brand-gold-dark)',
                fontSize: '0.76rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontWeight: 600,
                marginBottom: '0.6rem',
              }}
            >
              <Sparkles size={14} />
              <span>Comprehensive Living Ecosystem</span>
            </div>

            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.8rem', color: 'var(--color-text-main)' }}>
              The Membership Experience
            </h3>

            <p style={{ fontSize: '0.96rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Designed as your sustained operating system. Members receive holistic integration across mind, environment, wardrobe, and circle.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem', flex: 1 }}>
              {membershipItems.map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem' }}>
                  <Check size={16} color="var(--color-brand-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--color-border-light)',
                marginBottom: '1.75rem',
                fontSize: '0.78rem',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              <span>A Living Ecosystem</span>
              <span>•</span>
              <span>Ongoing Support</span>
              <span>•</span>
              <span>Long-Term Evolution</span>
            </div>

            <Button variant="primary" href="/memberships" withArrow>
              Explore Membership Levels
            </Button>
          </div>

          {/* Card 2: The Monthly Reinvention Session */}
          <div
            className="card-editorial"
            style={{
              backgroundColor: '#ffffff',
              padding: 'clamp(2.2rem, 4vw, 3rem)',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-brand-gold-border)',
              position: 'relative',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'var(--color-brand-gold-light)',
                color: 'var(--color-brand-gold-dark)',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 700,
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-brand-gold-border)',
              }}
            >
              Founder-Led Live
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: 'var(--color-brand-gold-dark)',
                fontSize: '0.76rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontWeight: 600,
                marginBottom: '0.6rem',
              }}
            >
              <Calendar size={14} />
              <span>Signature Live Ritual</span>
            </div>

            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.8rem', color: 'var(--color-text-main)' }}>
              The Monthly Reinvention Session™
            </h3>

            <p style={{ fontSize: '0.96rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              At the heart of I-denty is our 90-minute monthly live session led directly by Founder Eveliene — designed to recalibrate focus and elevate momentum.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem', flex: 1 }}>
              {monthlySessionItems.map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem' }}>
                  <Check size={16} color="var(--color-brand-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                backgroundColor: 'var(--color-bg-sand)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '1.75rem',
                fontSize: '0.84rem',
                color: 'var(--color-text-body)',
                lineHeight: 1.5,
              }}
            >
              <strong>Tier Access:</strong> Live attendance is included in <em>Inner Circle</em> &amp; <em>Private Member</em>. On-demand video replays are archived inside <em>The Collective</em>.
            </div>

            <Button variant="gold" href="/experiences" withArrow>
              View Upcoming Sessions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
