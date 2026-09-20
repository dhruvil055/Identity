import React from 'react';
import { Button } from '../common/Button';
import { ChevronDown, Compass } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/brandData';

export const HeroSection: React.FC = () => {
  return (
    <section
      className="home-hero-section"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 110px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#121417',
        color: '#ffffff',
      }}
    >
      {/* Background Video with Poster Fallback */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://i-denty.com/wp-content/themes/i-denty/assets/images/hero.png"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.42,
          }}
        >
          <source src={BRAND_CONFIG.heroVideoUrl} type="video/mp4" />
        </video>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(18, 20, 23, 0.65) 0%, rgba(18, 20, 23, 0.4) 50%, rgba(18, 20, 23, 0.85) 100%)',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div
        className="identy-container"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: 'clamp(4rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          textAlign: 'center',
          maxWidth: '960px',
        }}
      >
        {/* Subtle Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.1rem',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(181, 156, 103, 0.15)',
            border: '1px solid rgba(181, 156, 103, 0.35)',
            color: '#ffffff',
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            fontWeight: 500,
            marginBottom: '1.8rem',
            animation: 'fadeIn 0.5s ease',
          }}
        >
          <span style={{ color: 'var(--color-brand-gold)' }}>◈</span>
          <span>{BRAND_CONFIG.tagline}</span>
        </div>

        {/* Primary Headline */}
        <h1
          style={{
            color: '#ffffff',
            fontSize: 'clamp(2.3rem, 5vw, 4.1rem)',
            fontWeight: 500,
            lineHeight: 1.14,
            letterSpacing: '-0.025em',
            marginBottom: '1.5rem',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.4)',
          }}
        >
          {BRAND_CONFIG.heroTitle}
        </h1>

        {/* Supporting Message */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.9vw, 1.28rem)',
            color: 'rgba(255, 255, 255, 0.88)',
            lineHeight: 1.65,
            maxWidth: '820px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '2.5rem',
            fontWeight: 300,
          }}
        >
          {BRAND_CONFIG.heroSubtitle}
        </p>

        {/* Dual High-Priority CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.1rem',
          }}
        >
          <Button variant="gold" href="/reinvention" withArrow>
            Explore I-denty
          </Button>

          <Button
            variant="ghost-light"
            href="/finder"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Compass size={16} />
            <span>Find Your Starting Point</span>
          </Button>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <a
        href="#what-is-identy"
        aria-label="Scroll to discover I-denty"
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: 'rgba(255, 255, 255, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.72rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          transition: 'color 0.2s',
        }}
      >
        <span>Discover</span>
        <ChevronDown size={16} style={{ animation: 'bounce 2s infinite' }} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(5px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
};
