import React from 'react';
import { Button } from '../common/Button';
import { FOUNDER_INFO } from '../../data/brandData';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export const FounderSpotlight: React.FC = () => {
  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

  return (
    <section 
      ref={sectionRef} 
      className="section-padding" 
      style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}
    >
      <div className="identy-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>
        
        {/* Background Name Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 0.03, x: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ 
            position: 'absolute', 
            top: '5%', 
            left: '-10%', 
            fontSize: 'clamp(8rem, 20vw, 15rem)', 
            fontWeight: 800, 
            color: 'var(--color-bg-dark)', 
            zIndex: 0, 
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            fontFamily: 'var(--font-editorial)'
          }}
        >
          {FOUNDER_INFO.name}
        </motion.div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
            width: '100%',
          }}
        >
          {/* Back Layer: Dual Image Composition */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px', zIndex: 1, perspective: '1200px' }}>
            <motion.div
              initial={{ opacity: 0, rotateY: -15, z: -100 }}
              animate={inView ? { opacity: 1, rotateY: 0, z: 0 } : {}}
              transition={{ type: "spring", stiffness: 60, damping: 25 }}
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.img
                src={FOUNDER_INFO.imageMain}
                alt={FOUNDER_INFO.name}
                aria-label="Decorative portrait of the founder"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop';
                }}
              />
            </motion.div>

            {/* Accent Overlapping Detail Photo */}
            <motion.div
              initial={{ opacity: 0, y: 50, z: 100 }}
              animate={inView ? { opacity: 1, y: 0, z: 50 } : {}}
              transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.3 }}
              style={{
                position: 'absolute',
                bottom: '-40px',
                right: 'clamp(-20px, -5vw, -60px)',
                width: '45%',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                border: '6px solid #ffffff',
                transformStyle: 'preserve-3d'
              }}
            >
              <img
                src={FOUNDER_INFO.imageAccent}
                alt="Founder Detail"
                aria-label="Decorative portrait of the founder"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop';
                }}
              />
            </motion.div>
          </div>

          <style>{`
            .founder-overlap {
              margin-left: clamp(-20px, -6vw, -100px);
              margin-top: clamp(3rem, 6vw, 5rem);
            }
            @media (max-width: 768px) {
              .founder-overlap {
                margin-left: 0;
                margin-top: 1.5rem;
              }
            }
          `}</style>

          {/* Front Layer: Narrative Content as Glassmorphism Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 30 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.4 }}
            className="glass-panel founder-overlap"
            style={{
              width: '100%',
              maxWidth: '650px',
              zIndex: 3,
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.95)', // Increased opacity for contrast
              border: '1px solid rgba(255, 255, 255, 0.9)',
              position: 'relative',
              perspective: '1000px'
            }}
          >
            <div style={{ transform: 'translateZ(20px)' }}>
              <span className="eyebrow">The Leadership Behind I-denty</span>
              <h2 style={{ marginBottom: '1.2rem', lineHeight: 1.18, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Founder Story
              </h2>

              <blockquote
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  color: 'var(--color-text-main)',
                  fontStyle: 'italic',
                  borderLeft: '3px solid var(--color-brand-gold)',
                  paddingLeft: '1.25rem',
                  margin: '1.5rem 0 2rem 0',
                  lineHeight: 1.6,
                }}
              >
                {FOUNDER_INFO.quote}
              </blockquote>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {FOUNDER_INFO.paragraphs.map((p, index) => (
                  <p key={index} style={{ fontSize: '0.96rem', color: 'var(--color-text-body)', lineHeight: 1.65 }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Awards Ribbon (Hovering inside panel) */}
              <div
                style={{
                  backgroundColor: 'rgba(248, 246, 242, 0.8)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-light)',
                  marginBottom: '2.5rem',
                  transform: 'translateZ(15px)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontWeight: 600,
                    color: 'var(--color-brand-gold-dark)',
                    marginBottom: '0.75rem',
                  }}
                >
                  <Award size={16} />
                  <span>Recognized Leadership Pedigree</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--color-text-main)' }}>
                  {FOUNDER_INFO.awards.map((award, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: '#ffffff',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border-light)',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
                      }}
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', transform: 'translateZ(30px)' }}>
                <Button variant="primary" href="/about" withArrow style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                  Explore the I-denty Philosophy
                </Button>
                <Button variant="secondary" href="/memberships#consultation">
                  Apply for Private 1:1 Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
