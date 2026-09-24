import React, { useEffect, useRef } from 'react';
import { Button } from '../common/Button';

interface ExpertConsultSectionProps {
  isReducedMotion: boolean;
}

export const ExpertConsultSection: React.FC<ExpertConsultSectionProps> = ({ isReducedMotion }) => {
  const expertRef = useRef<HTMLDivElement>(null);
  const consultRef = useRef<HTMLDivElement>(null);

  // Scroll animations
  useEffect(() => {
    if (isReducedMotion) return;

    const elements = [expertRef.current, consultRef.current].filter(Boolean) as HTMLElement[];

    const observers = elements.map((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).style.opacity = '1';
              (entry.target as HTMLElement).style.transform = 'translateY(0)';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return observer;
    });

    // Set initial state
    elements.forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = 'opacity 0.9s cubic-bezier(0.2,0.8,0.2,1), transform 0.9s cubic-bezier(0.2,0.8,0.2,1)';
    });

    return () => observers.forEach(o => o.disconnect());
  }, [isReducedMotion]);

  return (
    <>
      <section id="consult" aria-labelledby="p-h" style={{ padding: '104px 0 0' }}>
        <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="expert" ref={expertRef} style={{
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto 64px',
          }}>
            <h3 style={{
              fontSize: 'clamp(34px, 4vw, 52px)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              lineHeight: 1.02,
              margin: 0,
              letterSpacing: '-0.015em',
            }}>
              Expert integration.
            </h3>
            <p style={{
              color: 'var(--muted)',
              marginTop: '14px',
              fontSize: '24px',
              fontWeight: 300,
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.35,
            }}>
              I-denty is founder-led and contributor-curated. Curated experts are introduced progressively throughout the year to expand perspective, without compromising ecosystem standards.
            </p>
          </div>

          <div className="consult" ref={consultRef} style={{
            background: 'var(--gold-bg)',
            borderRadius: '30px',
            padding: '56px',
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: '36px',
            alignItems: 'center',
          }}>
            <div>
              <h2 id="p-h" style={{
                fontSize: 'clamp(36px, 4.4vw, 58px)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                lineHeight: 1.02,
                margin: 0,
                letterSpacing: '-0.015em',
              }}>
                Private consultation (standalone option).
              </h2>
              <p style={{
                marginTop: '14px',
                color: 'var(--muted)',
                maxWidth: '50ch',
                fontFamily: 'var(--font-sans)',
              }}>
                Limited capacity. Application required. For individuals seeking personalised strategic direction and priority positioning within the ecosystem.
              </p>
            </div>
            <div className="side" style={{ justifySelf: 'end', textAlign: 'right' }}>
              <div className="big" style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '54px',
                lineHeight: 1,
                fontWeight: 500,
              }}>
                From $500
                <small style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  color: 'var(--muted)',
                  margin: '6px 0 16px',
                  fontWeight: 400,
                }}>
                  per hour
                </small>
              </div>
              <Button
                variant="primary"
                href="#"
                data-cta
                className="mag"
                style={{
                  background: 'var(--ink)',
                  color: '#fff',
                  borderRadius: '999px',
                  padding: '16px 30px',
                  fontWeight: 500,
                  fontSize: '15px',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  border: 'none',
                  transition: 'filter 0.2s, background 0.4s',
                  willChange: 'transform',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Apply for Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};