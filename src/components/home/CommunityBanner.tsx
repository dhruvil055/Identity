import React from 'react';
import { Button } from '../common/Button';
import { BRAND_CONFIG } from '../../data/brandData';

export const CommunityBanner: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#121417',
        color: '#ffffff',
        overflow: 'hidden',
        paddingTop: 'clamp(5rem, 8vw, 8rem)',
        paddingBottom: 'clamp(5rem, 8vw, 8rem)',
        textAlign: 'center',
      }}
    >
      {/* Background Video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0.35,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={BRAND_CONFIG.communityVideoUrl} type="video/mp4" />
        </video>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(18, 20, 23, 0.7) 0%, rgba(18, 20, 23, 0.4) 50%, rgba(18, 20, 23, 0.9) 100%)',
          }}
        />
      </div>

      <div
        className="identy-container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '860px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            fontWeight: 600,
            color: 'var(--color-brand-gold)',
            marginBottom: '1.25rem',
          }}
        >
          The Invitation
        </div>

        <h2
          style={{
            color: '#ffffff',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            lineHeight: 1.22,
            fontWeight: 500,
            marginBottom: '1.8rem',
          }}
        >
          Reinvention isn’t starting over.
          <br />
          <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>
            It’s recalibrating intentionally.
          </span>
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.7,
            maxWidth: '720px',
            margin: '0 auto 2.5rem auto',
          }}
        >
          If you are ready to evolve into your next chapter with high-level structure, curated aesthetics, and an aligned peer circle, I-denty is designed for you.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.2rem',
          }}
        >
          <Button variant="gold" href="/memberships" withArrow>
            Join The I-denty Ecosystem
          </Button>
          <Button variant="ghost-light" href="/finder">
            Find Your Starting Point
          </Button>
        </div>
      </div>
    </section>
  );
};
