import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { RelatedBridge } from '../components/common/RelatedBridge';
import { PathFinderWizard } from '../components/finder/PathFinderWizard';

export const PathFinderPage: React.FC = () => {
  return (
    <main className="site-main page-finder">
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
          paddingBottom: 'clamp(3.5rem, 5vw, 5rem)',
          backgroundColor: '#16191e',
          color: '#ffffff',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "linear-gradient(180deg, rgba(22, 25, 30, 0.85) 0%, rgba(22, 25, 30, 0.98) 100%), url('https://i-denty.com/wp-content/themes/i-denty/assets/images/reinvention-hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
        />

        <div className="identy-container" style={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumb items={[{ label: 'Find Your Starting Point' }]} />

          <div style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                fontWeight: 600,
                color: 'var(--color-brand-gold)',
                marginBottom: '1rem',
              }}
            >
              Interactive Transition Diagnostic
            </span>

            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.15,
                fontWeight: 400,
                marginBottom: '1.25rem',
              }}
            >
              Find Your Starting Point
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.82)',
                fontWeight: 300,
                margin: '0 auto',
                maxWidth: '640px',
              }}
            >
              Answer 4 brief questions to receive an immediate personalized roadmap — matching your transition with the right framework pillar, membership tier, and curated reading.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Wizard Container */}
      <section
        style={{
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
          backgroundColor: '#faf8f5',
        }}
      >
        <div className="identy-container" style={{ maxWidth: '860px' }}>
          <PathFinderWizard />
        </div>
      </section>

      {/* No Dead Ends Bridge */}
      <RelatedBridge
        currentContext="Path Finder Diagnostic"
        eyebrow="Explore Further"
        title="Prefer To Review The Complete Ecosystem First?"
        description="Browse our side-by-side comparison matrix or dive directly into the foundational essays inside the Journal."
        primaryAction={{
          label: 'Compare Membership Tiers',
          href: '/memberships',
        }}
        secondaryAction={{
          label: 'Explore The Journal',
          href: '/journal',
        }}
      />
    </main>
  );
};
