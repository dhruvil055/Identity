import React from 'react';
import { Button } from '../common/Button';
import { BRAND_CONFIG } from '../../data/brandData';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export const CommunityBanner: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        backgroundColor: '#121417',
        color: '#ffffff',
        overflow: 'hidden',
        paddingTop: 'clamp(5rem, 8vw, 8rem)',
        paddingBottom: 'clamp(5rem, 8vw, 8rem)',
        textAlign: 'center',
        perspective: '1200px'
      }}
    >
      {/* Background Video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0.45,
          transform: 'translateZ(-50px) scale(1.1)',
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
              'linear-gradient(180deg, rgba(18, 20, 23, 0.6) 0%, rgba(18, 20, 23, 0.2) 50%, rgba(18, 20, 23, 0.8) 100%)',
          }}
        />
      </div>

      <div
        className="identy-container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '960px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="glass-panel-dark"
          style={{
            padding: 'clamp(3rem, 6vw, 5rem)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div style={{ transform: 'translateZ(30px)' }}>
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
                textShadow: '0 4px 12px rgba(0,0,0,0.3)'
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
                transform: 'translateZ(15px)'
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
                transform: 'translateZ(25px)'
              }}
            >
              <Button variant="gold" href="/memberships" withArrow style={{ boxShadow: '0 10px 25px rgba(220,186,134,0.3)' }}>
                Join The I-denty Ecosystem
              </Button>
              <Button variant="ghost-light" href="/finder">
                Find Your Starting Point
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
