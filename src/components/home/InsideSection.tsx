import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface InsideSectionProps {
  isReducedMotion: boolean;
}

export const InsideSection: React.FC<InsideSectionProps> = ({ isReducedMotion }) => {
  const [flipped, setFlipped] = useState(false);
  const flipInRef = useRef<HTMLDivElement>(null);

  const doFlip = () => {
    setFlipped(!flipped);
    if (!isReducedMotion && flipInRef.current) {
      flipInRef.current.style.transition = 'transform 1s cubic-bezier(0.2,0.8,0.2,1)';
      flipInRef.current.style.transform = `perspective(1500px) rotateY(${flipped ? 0 : 180}deg)`;
    } else if (flipInRef.current) {
      flipInRef.current.style.transform = `rotateY(${flipped ? 0 : 180}deg)`;
    }
  };

  // Initial animation
  useEffect(() => {
    if (!isReducedMotion && flipInRef.current) {
      flipInRef.current.style.transform = 'perspective(1500px) rotateY(35deg) translateX(50px)';
      flipInRef.current.style.opacity = '0';
      (flipInRef.current.style as any).transformPerspective = '1400px';
      flipInRef.current.style.transformOrigin = '50% 50%';

      // Trigger animation when in view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                flipInRef.current!.style.transition = 'opacity 1.1s cubic-bezier(0.2,0.8,0.2,1), transform 1.1s cubic-bezier(0.2,0.8,0.2,1)';
                flipInRef.current!.style.opacity = '1';
                flipInRef.current!.style.transform = 'perspective(1500px) rotateY(0deg) translateX(0px)';
              }, 100);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(flipInRef.current);

      return () => observer.disconnect();
    }
  }, [isReducedMotion]);

  return (
    <section id="inside" aria-labelledby="s-h" style={{ padding: '104px 0 0' }}>
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="dual" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr .9fr',
          gap: '34px',
          alignItems: 'stretch',
        }}>
          <div className="sess">
            <h2 id="s-h" style={{
              fontSize: 'clamp(38px, 4.6vw, 60px)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              lineHeight: 1.02,
              margin: 0,
              letterSpacing: '-0.015em',
            }}>
              The Monthly Reinvention Session™
            </h2>
            <p style={{
              color: 'var(--muted)',
              marginTop: '14px',
              maxWidth: '48ch',
              fontWeight: 300,
              fontSize: '17px',
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.35,
            }}>
              The core of I-denty. A founder-led live experience designed to recalibrate, reinforce and elevate member growth.
            </p>
            <div className="chips" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '18px',
            }}>
              <span className="chip" style={{
                background: 'var(--gold-bg)',
                borderRadius: '999px',
                padding: '7px 16px',
                fontSize: '14px',
                fontFamily: 'var(--font-sans)',
              }}>
                <b>Live:</b> Inner Circle and Private Member
              </span>
              <span className="chip" style={{
                background: 'var(--gold-bg)',
                borderRadius: '999px',
                padding: '7px 16px',
                fontSize: '14px',
                fontFamily: 'var(--font-sans)',
              }}>
                <b>Replays:</b> inside the Collective
              </span>
            </div>
            <div className="scards" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginTop: '26px',
              perspective: '1200px',
            }}>
              <motion.div
                className="sc"
                initial={{ opacity: 0, rotationY: -40, x: -30 } as any}
                animate={{ opacity: 1, rotationY: 0, x: 0 } as any}
                transition={{ duration: 0.9, stagger: 0.12, ease: [0.2, 0.8, 0.2, 1] } as any}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: '20px',
                  padding: '22px',
                  transformPerspective: '1000px',
                  transformOrigin: '0% 50%',
                }}
              >
                <h3 style={{ fontSize: '26px', lineHeight: 1.1, fontFamily: 'var(--font-serif)', fontWeight: 500, margin: 0, letterSpacing: '-0.015em' }}>
                  Structured teaching
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '14.5px', marginTop: '8px', fontFamily: 'var(--font-sans)' }}>
                  Aligned to the Reinvention Framework.
                </p>
              </motion.div>
              <motion.div
                className="sc"
                initial={{ opacity: 0, rotationY: -40, x: -30 } as any}
                animate={{ opacity: 1, rotationY: 0, x: 0 } as any}
                transition={{ duration: 0.9, stagger: 0.12, ease: [0.2, 0.8, 0.2, 1], delay: 0.12 } as any}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: '20px',
                  padding: '22px',
                  transformPerspective: '1000px',
                  transformOrigin: '0% 50%',
                }}
              >
                <h3 style={{ fontSize: '26px', lineHeight: 1.1, fontFamily: 'var(--font-serif)', fontWeight: 500, margin: 0, letterSpacing: '-0.015em' }}>
                  Strategic integration
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '14.5px', marginTop: '8px', fontFamily: 'var(--font-sans)' }}>
                  A discussion on applying what you learn.
                </p>
              </motion.div>
              <motion.div
                className="sc"
                initial={{ opacity: 0, rotationY: -40, x: -30 } as any}
                animate={{ opacity: 1, rotationY: 0, x: 0 } as any}
                transition={{ duration: 0.9, stagger: 0.12, ease: [0.2, 0.8, 0.2, 1], delay: 0.24 } as any}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: '20px',
                  padding: '22px',
                  transformPerspective: '1000px',
                  transformOrigin: '0% 50%',
                }}
              >
                <h3 style={{ fontSize: '26px', lineHeight: 1.1, fontFamily: 'var(--font-serif)', fontWeight: 500, margin: 0, letterSpacing: '-0.015em' }}>
                  Guided exercises
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '14.5px', marginTop: '8px', fontFamily: 'var(--font-sans)' }}>
                  Application exercises you complete in the session.
                </p>
              </motion.div>
              <motion.div
                className="sc"
                initial={{ opacity: 0, rotationY: -40, x: -30 } as any}
                animate={{ opacity: 1, rotationY: 0, x: 0 } as any}
                transition={{ duration: 0.9, stagger: 0.12, ease: [0.2, 0.8, 0.2, 1], delay: 0.36 } as any}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: '20px',
                  padding: '22px',
                  transformPerspective: '1000px',
                  transformOrigin: '0% 50%',
                }}
              >
                <h3 style={{ fontSize: '26px', lineHeight: 1.1, fontFamily: 'var(--font-serif)', fontWeight: 500, margin: 0, letterSpacing: '-0.015em' }}>
                  Live Q&A
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '14.5px', marginTop: '8px', fontFamily: 'var(--font-sans)' }}>
                  For deeper clarity on your own questions.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flip" id="flip" style={{ perspective: '1500px', minHeight: '440px' }}>
            <div className="flip-in" ref={flipInRef} id="flipIn" style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: '440px',
              transformStyle: 'preserve-3d',
            }}>
              <div className="face f1" style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '26px',
                padding: '34px',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--wash)',
                border: '1px solid var(--line)',
              }}>
                <h3 style={{ fontSize: '40px', fontFamily: 'var(--font-serif)', fontWeight: 500, lineHeight: 1.02, margin: 0, letterSpacing: '-0.015em' }}>
                  Where many members begin
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '20px 0 0',
                  display: 'grid',
                  gap: '12px',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '25px',
                  lineHeight: 1.15,
                }}>
                  <li>Successful but misaligned.</li>
                  <li>Holding everything together.</li>
                  <li>Quietly questioning what&apos;s next.</li>
                  <li>Living within outdated roles.</li>
                </ul>
                <button
                  className="flipbtn"
                  data-flip
                  onClick={doFlip}
                  style={{
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                    background: 'none',
                    border: '1px solid currentColor',
                    borderRadius: '999px',
                    padding: '9px 20px',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    fontFamily: 'var(--font-sans)',
                    cursor: 'pointer',
                  }}
                >
                  See where it leads
                </button>
              </div>

              <div className="face f2" style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '26px',
                padding: '34px',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--navy)',
                color: '#f6f2e4',
                transform: 'rotateY(180deg)',
              }}>
                <h3 style={{ fontSize: '40px', fontFamily: 'var(--font-serif)', fontWeight: 500, lineHeight: 1.02, margin: 0, letterSpacing: '-0.015em' }}>
                  Where they&apos;re heading
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '20px 0 0',
                  display: 'grid',
                  gap: '12px',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '25px',
                  lineHeight: 1.15,
                  color: '#f6f2e4',
                }}>
                  <li>Clear on identity.</li>
                  <li>Confident in decisions.</li>
                  <li>Living aligned with current self.</li>
                  <li>Expressing identity intentionally.</li>
                  <li>Supported by a structured community.</li>
                </ul>
                <button
                  className="flipbtn"
                  data-flip
                  onClick={doFlip}
                  style={{
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                    background: 'none',
                    border: '1px solid currentColor',
                    borderRadius: '999px',
                    padding: '9px 20px',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    fontFamily: 'var(--font-sans)',
                    cursor: 'pointer',
                    color: '#f6f2e4',
                  }}
                >
                  Back to the start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};