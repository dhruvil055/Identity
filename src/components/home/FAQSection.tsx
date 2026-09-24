import React, { useState, useEffect, useRef } from 'react';

interface FAQSectionProps {
  isReducedMotion: boolean;
}

const FAQ_ITEMS = [
  {
    q: 'Who is I-denty for?',
    a: 'I-denty is an identity-led lifestyle ecosystem built for high-capacity women navigating reinvention.',
  },
  {
    q: 'Do I pay for the Reinvention Framework?',
    a: 'It\'s included with every membership. If you bought it separately before, that fee is credited.',
  },
  {
    q: 'Where can I attend the live sessions?',
    a: 'Live access is available in The Inner Circle and Private Member. Replays are available inside The Collective.',
  },
  {
    q: 'Do I need to finish the Framework before live sessions?',
    a: 'For The Inner Circle, completing the Framework before live sessions is recommended.',
  },
  {
    q: 'How do I get a private consultation?',
    a: 'Private Members are eligible to apply, and it\'s booked separately. It\'s also available as a standalone option by application, from $500 per hour.',
  },
];

export const FAQSection: React.FC<FAQSectionProps> = ({ isReducedMotion }) => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const faqRef = useRef<HTMLDivElement>(null);

  const toggle = (index: number) => {
    setOpenIndices(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  // Scroll animation
  useEffect(() => {
    if (isReducedMotion || !faqRef.current) return;

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

    const details = faqRef.current.querySelectorAll('details');
    details.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
      (el as HTMLElement).style.transition = `opacity 0.8s cubic-bezier(0.2,0.8,0.2,1) ${i * 0.1}s, transform 0.8s cubic-bezier(0.2,0.8,0.2,1) ${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isReducedMotion]);

  return (
    <section id="faq" aria-labelledby="f-h" style={{ padding: '104px 0 0' }}>
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="sec-h" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '42px',
        }}>
          <h2 id="f-h" style={{
            fontSize: 'clamp(40px, 5.4vw, 68px)',
            maxWidth: '15ch',
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            lineHeight: 1.02,
            margin: 0,
            letterSpacing: '-0.015em',
          }}>
            Questions before you join.
          </h2>
        </div>

        <div className="faq" ref={faqRef} style={{ maxWidth: '820px' }}>
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              style={{
                borderTop: '1px solid var(--line)',
                borderBottom: index === FAQ_ITEMS.length - 1 ? '1px solid var(--line)' : 'none',
              }}
            >
              <summary
                onClick={() => toggle(index)}
                style={{
                  listStyle: 'none',
                  cursor: 'pointer',
                  padding: '22px 44px 22px 0',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  fontSize: '26px',
                  lineHeight: 1.15,
                  position: 'relative',
                }}
              >
                {item.q}
                <span
                  style={{
                    position: 'absolute',
                    right: '6px',
                    top: '14px',
                    fontSize: '30px',
                    fontWeight: 300,
                    color: 'var(--gold)',
                    transition: 'transform 0.25s',
                    fontFamily: 'var(--font-sans)',
                    transform: openIndices.has(index) ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </summary>
              <p style={{
                color: 'var(--muted)',
                padding: '0 44px 24px 0',
                fontFamily: 'var(--font-sans)',
              }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};