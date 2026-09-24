import React from 'react';
import { Button } from '../common/Button';
import { SectionHeader } from '../common/SectionHeader';
import { useInView } from '../../hooks/useInView';
import { EVENTS, trackEvent } from '../../hooks/useAnalytics';
import { motion } from 'framer-motion';

export const ContinueJourney: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, once: true });

  const links = [
    { label: 'Read the Journal', to: '/journal', eventName: 'Journal' },
    { label: 'Discover Reinvention', to: '/reinvention', eventName: 'Reinvention' },
    { label: 'Explore Membership', to: '/memberships', eventName: 'Membership' },
  ];

  return (
    <section 
      ref={ref} 
      className="section-padding-sm" 
      style={{ backgroundColor: 'var(--color-bg-sand)', position: 'relative' }}
    >
      <div className="identy-container" style={{ position: 'relative', zIndex: 2, perspective: '1000px' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="glass-panel"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: 'clamp(2rem, 5vw, 4rem)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div style={{ transform: 'translateZ(20px)' }}>
            <SectionHeader 
              eyebrow="Continue your journey"
              title="Explore the I-denty Ecosystem"
              align="center"
            />
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              justifyContent: 'center',
              marginTop: '2.5rem'
            }}>
              {links.map((link, i) => (
                <motion.div 
                  key={link.to}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  style={{ transform: 'translateZ(10px)' }}
                >
                  <Button
                    variant="link"
                    href={link.to}
                    withArrow
                    onClick={() => trackEvent(EVENTS.CONTINUE_JOURNEY_CLICK, { destination: link.eventName })}
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
