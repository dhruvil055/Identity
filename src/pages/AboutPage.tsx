import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { RelatedBridge } from '../components/common/RelatedBridge';
import { FOUNDER_INFO, PLATFORM_TIMELINE, BRAND_CONFIG } from '../data/brandData';
import { Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <main className="site-main page-about">
      {/* 1. Hero */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
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
              "linear-gradient(180deg, rgba(22, 25, 30, 0.82) 0%, rgba(22, 25, 30, 0.95) 100%), url('https://i-denty.com/wp-content/themes/i-denty/assets/images/Rectangle%20773.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
        />

        <div className="identy-container" style={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumb items={[{ label: 'About I-denty' }]} />

          <div style={{ maxWidth: '820px' }}>
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
              The Brand & Philosophy
            </span>

            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.15,
                fontWeight: 400,
                marginBottom: '1.25rem',
              }}
            >
              Where Corporate Rigor Meets Lived Life Transitions
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.82)',
                fontWeight: 300,
                marginBottom: '2.5rem',
                maxWidth: '680px',
              }}
            >
              {BRAND_CONFIG.heroSubtitle}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/framework" variant="gold">
                Explore The Methodology
              </Button>
              <Button href="#founder-story" variant="ghost-light">
                Meet Founder Eveliene
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Philosophy & Mission */}
      <section
        style={{
          paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
          backgroundColor: '#faf8f5',
        }}
      >
        <div className="identy-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(3rem, 6vw, 5rem)',
              alignItems: 'center',
            }}
          >
            <div>
              <SectionHeader
                eyebrow="Our Thesis"
                title="Transitions Require Structure, Not Just Inspiration"
                subtitle="Most lifestyle platforms offer superficial motivational slogans. When an executive steps down, relocates across the globe, or navigates divorce, inspiration is insufficient."
              />

              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#40454d', marginBottom: '1.5rem' }}>
                True reinvention requires operational architecture: clearing outdated energy leaks, recalibrating the nervous system, engineering sustainable daily routines, and elevating physical presence and wardrobe.
              </p>

              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#40454d', margin: 0 }}>
                I-denty brings executive governance into personal sovereignty. We treat your life transition with the exact strategic seriousness that an elite enterprise brings to a multi-billion dollar organizational pivot.
              </p>
            </div>

            {/* Visual Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  title: 'Identity Precedes Routine',
                  desc: 'Until internal standards are clarified, new habits crumble under the gravitational pull of old expectations.',
                },
                {
                  title: 'Environment Accelerates Conviction',
                  desc: 'Your living spaces and capsule wardrobe are not superficial luxuries; they are non-verbal cognition.',
                },
                {
                  title: 'Peer Resonance Sustains Momentum',
                  desc: 'You cannot ask people who benefited from your past identity to validate your evolving standards.',
                },
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.07)',
                    padding: '1.8rem 2rem',
                    borderRadius: '2px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      color: 'var(--color-brand-gold)',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Pillar 0{idx + 1}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#16191e', margin: '0 0 0.4rem 0' }}>
                    {pillar.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#767d86', lineHeight: 1.55 }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder Spotlight */}
      <section
        id="founder-story"
        style={{
          paddingTop: 'clamp(5rem, 8vw, 7rem)',
          paddingBottom: 'clamp(5rem, 8vw, 7rem)',
          backgroundColor: '#ffffff',
        }}
      >
        <div className="identy-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'clamp(3rem, 6vw, 5rem)',
              alignItems: 'center',
            }}
          >
            {/* Founder Photography */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  boxShadow: '0 20px 48px rgba(0,0,0,0.08)',
                }}
              >
                <img
                  src={FOUNDER_INFO.imageMain}
                  alt={FOUNDER_INFO.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
              </div>

              {/* Floating Quote Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  right: '-1.5rem',
                  backgroundColor: '#16191e',
                  color: '#ffffff',
                  padding: '1.5rem 1.75rem',
                  maxWidth: '320px',
                  borderRadius: '2px',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.15)',
                  display: 'none', // shown on larger screens via CSS or clean flex
                }}
                className="desktop-floating-badge"
              >
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-brand-gold)', display: 'block', marginBottom: '0.35rem' }}>
                  Founder Note
                </span>
                <p style={{ margin: 0, fontSize: '0.86rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', lineHeight: 1.45 }}>
                  {FOUNDER_INFO.quote}
                </p>
              </div>
            </div>

            {/* Founder Editorial Content */}
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.76rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  fontWeight: 600,
                  color: 'var(--color-brand-gold)',
                  marginBottom: '0.85rem',
                }}
              >
                Leadership Pedigree
              </span>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: 400,
                  color: '#16191e',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                }}
              >
                {FOUNDER_INFO.headline}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {FOUNDER_INFO.paragraphs.map((p, idx) => (
                  <p key={idx} style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#40454d', margin: 0 }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Honors & Recognitions */}
              <div
                style={{
                  backgroundColor: '#faf8f5',
                  borderLeft: '3px solid var(--color-brand-gold)',
                  padding: '1.5rem 1.75rem',
                  marginBottom: '2.5rem',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.74rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    fontWeight: 600,
                    color: 'var(--color-brand-gold)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Global Recognitions
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {FOUNDER_INFO.awards.map((award, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <Award size={16} color="var(--color-brand-gold)" />
                      <span style={{ fontSize: '0.94rem', fontWeight: 600, color: '#16191e' }}>{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button href="/contact?intent=advisory" variant="primary">
                Inquire For Strategic Advisory &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Platform Evolution Roadmap (2026-2028) */}
      <section
        style={{
          paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
          backgroundColor: '#16191e',
          color: '#ffffff',
        }}
      >
        <div className="identy-container">
          <SectionHeader
            align="center"
            eyebrow="The Strategic Horizon"
            title="Building the Global Infrastructure for Identity Evolution"
            subtitle="I-denty is structured for multi-stage international scale, uniting digital governance with physical luxury clubhouses."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              marginTop: '4rem',
            }}
          >
            {PLATFORM_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '2.5rem 2rem',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-brand-gold)',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    display: 'block',
                  }}
                >
                  {item.year}
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    color: '#ffffff',
                    margin: '0 0 1rem 0',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    color: 'rgba(255, 255, 255, 0.72)',
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. No Dead Ends Bridge */}
      <RelatedBridge
        currentContext="About I-denty"
        eyebrow="Step Inside"
        title="Find The Exact Entry Point For Your Next Chapter"
        description="Our diagnostic takes 2 minutes to assess your transition scenario and suggests the tailored starting step across our ecosystem."
        primaryAction={{
          label: 'Find Your Starting Point',
          href: '/finder',
        }}
        secondaryAction={{
          label: 'Compare Memberships',
          href: '/memberships',
        }}
      />
    </main>
  );
};
