import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface JourneySectionProps {
  isReducedMotion: boolean;
}

const STOPS = [
  {
    pin: 'Free',
    kind: 'START HERE',
    title: 'Read the I-denty Journal',
    desc: 'Essays on identity, lifestyle and reinvention, open to everyone.',
    cta: 'Browse the journal',
    href: '#',
  },
  {
    pin: 'Free',
    kind: 'FREE RESOURCE',
    title: 'Get the Reinvention primer',
    desc: 'A short introduction to the framework, plus a note on which level suits you.',
    cta: 'Send me the primer',
    href: '#capture',
  },
  {
    pin: 'Try',
    kind: 'SINGLE SESSION',
    title: 'Attend a workshop',
    desc: 'Try guided reinvention once, before you decide on a membership.',
    cta: 'See upcoming workshops',
    href: '#',
  },
  {
    pin: 'Join',
    kind: 'MEMBERSHIP',
    title: 'Become a member',
    desc: 'The Collective, The Inner Circle or Private Member, depending on how much guidance you want.',
    cta: 'Find my level',
    href: '#finder',
  },
  {
    pin: '1:1',
    kind: 'BY APPLICATION',
    title: 'Private consultation',
    desc: 'Personalised strategic direction and priority positioning within the ecosystem.',
    cta: 'Apply for consultation',
    href: '#consult',
  },
];

export const JourneySection: React.FC<JourneySectionProps> = ({ isReducedMotion }) => {
  const journeyElRef = useRef<HTMLDivElement>(null);
  const jFillRef = useRef<HTMLDivElement>(null);
  const stopsRef = useRef<HTMLDivElement[]>([]);
  const [activeStops, setActiveStops] = useState<Set<number>>(new Set());

  // Scroll-triggered animations
  useEffect(() => {
    if (isReducedMotion) {
      if (jFillRef.current) jFillRef.current.style.transform = 'scaleY(1)';
      return;
    }

    // Line fill animation
    const jFill = jFillRef.current;
    if (jFill && journeyElRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // We'll handle this with scroll position in a scroll listener
            }
          });
        },
        { threshold: 0 }
      );
      observer.observe(journeyElRef.current);

      const handleScroll = () => {
        if (!journeyElRef.current || !jFill) return;
        const rect = journeyElRef.current.getBoundingClientRect();
        const start = window.innerHeight * 0.6;
        const end = window.innerHeight * 0.3;
        const progress = 1 - Math.min(Math.max((rect.top - end) / (start - end), 0), 1);
        jFill.style.transform = `scaleY(${progress})`;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }
  }, [isReducedMotion]);

  // Stop pin animations
  useEffect(() => {
    if (isReducedMotion) {
      setActiveStops(new Set([0, 1, 2, 3, 4]));
      return;
    }

    const stopElements = stopsRef.current.map((_, i) => document.querySelector(`.stop[data-index="${i}"]`)).filter(Boolean) as HTMLElement[];

    const observers = stopElements.map((el, i) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStops(prev => new Set([...prev, i]));
            } else {
              setActiveStops(prev => {
                const next = new Set(prev);
                next.delete(i);
                return next;
              });
            }
          });
        },
        { rootMargin: '0px 0px -30% 0px', threshold: 0.1 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach(o => o.disconnect());
  }, [isReducedMotion]);

  return (
    <section id="journey" aria-labelledby="j-h" style={{ padding: '104px 0 0' }}>
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="j-grid" style={{
          display: 'grid',
          gridTemplateColumns: '.85fr 1.15fr',
          gap: '60px',
          alignItems: 'start',
        }}>
          <div className="j-side" style={{ position: 'sticky', top: '160px' }}>
            <h2 id="j-h" style={{
              fontSize: 'clamp(38px, 4.8vw, 62px)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              lineHeight: 1.02,
              margin: 0,
              letterSpacing: '-0.015em',
            }}>
              You don&apos;t have to start with a membership.
            </h2>
            <p style={{
              color: 'var(--muted)',
              marginTop: '14px',
              maxWidth: '38ch',
              fontWeight: 300,
              fontSize: '17px',
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.35,
            }}>
              Every part of I-denty leads to the next. Begin with something free, and move forward at your own pace.
            </p>
          </div>

          <div className="journey" ref={journeyElRef} id="journeyEl" style={{
            position: 'relative',
            paddingLeft: '76px',
          }}>
            <div className="j-line" style={{
              position: 'absolute',
              left: '19px',
              top: '10px',
              bottom: '70px',
              width: '2px',
              background: 'var(--line)',
            }}>
              <div className="j-fill" ref={jFillRef} style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                background: 'var(--gold)',
                transform: 'scaleY(0)',
                transformOrigin: 'top',
                transition: isReducedMotion ? 'none' : 'transform 0.1s linear',
              }} />
            </div>

            {STOPS.map((stop, index) => (
              <motion.div
                key={index}
                className="stop"
                ref={(el) => { stopsRef.current[index] = el!; }}
                data-index={index}
                initial={{ opacity: 0, x: -30 } as any}
                animate={{ opacity: 1, x: 0 } as any}
                transition={{ duration: 0.8, stagger: 0.12, ease: [0.2, 0.8, 0.2, 1] } as any}
                style={{
                  position: 'relative',
                  padding: '0 0 52px',
                }}
              >
                <span
                  className="pin"
                  style={{
                    position: 'absolute',
                    left: '-76px',
                    top: 0,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: activeStops.has(index) ? 'var(--gold)' : 'var(--surface)',
                    border: `2px solid ${activeStops.has(index) ? 'var(--gold)' : 'var(--line)'}`,
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: activeStops.has(index) ? '#fff' : 'var(--muted)',
                    transition: 'all 0.4s',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {stop.pin}
                </span>
                <div className="kind" style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--gold)',
                  letterSpacing: '0.06em',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {stop.kind}
                </div>
                <h3 style={{
                  fontSize: '38px',
                  marginTop: '2px',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  lineHeight: 1.02,
                  letterSpacing: '-0.015em',
                }}>
                  {stop.title}
                </h3>
                <p style={{
                  color: 'var(--muted)',
                  marginTop: '8px',
                  maxWidth: '46ch',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {stop.desc}
                </p>
                <a
                  href={stop.href}
                  data-cta
                  style={{
                    display: 'inline-block',
                    marginTop: '12px',
                    fontWeight: 500,
                    fontSize: '15px',
                    textUnderlineOffset: '4px',
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--ink)',
                    textDecoration: 'underline',
                  }}
                >
                  {stop.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};