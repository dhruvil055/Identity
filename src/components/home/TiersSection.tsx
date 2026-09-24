import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

interface TierCardProps {
  tier: typeof TIER_CARD_DATA[0];
  index: number;
  isMatch: boolean;
  isReducedMotion: boolean;
  onSelect: () => void;
}

const TIER_CARD_DATA = [
  {
    name: 'The Collective',
    price: 19,
    year: 228,
    node: 1,
    cta: 'Begin Inside',
    color: 'var(--camel)',
    h: 55,
    forLine: 'Foundational access to the I-denty Ecosystem. For those finding clarity, structure and alignment.',
    why: 'Foundational access to the I-denty Ecosystem, for those finding clarity, structure and alignment.',
    includes: 'What you receive',
    feats: [
      'Full access to the I-denty Journal',
      'Curated lifestyle and fashion ecosystem',
      'Brand partner perks and curated offers',
      'Access to the Reinvention Framework, included',
      'Ability to revisit the Framework anytime',
    ],
    fw: '<b>Reinvention Framework:</b> included with membership. Fee credited if previously purchased.',
    nudge: 'Want live sessions and a smaller circle? The Inner Circle is $30 more a month.',
    nb: 'See The Inner Circle',
    nt: 1,
  },
  {
    name: 'The Inner Circle',
    price: 49,
    year: 588,
    node: 2,
    cta: 'Explore Deeper',
    color: 'var(--navy)',
    h: 75,
    forLine: 'Structured expansion. Deeper refinement. Created for individuals seeking guided identity growth and elevated ecosystem access.',
    why: 'Structured expansion. Deeper refinement. Created for individuals seeking guided identity growth and elevated ecosystem access.',
    includes: 'Everything in The Collective, plus',
    feats: [
      'Access to Live Reinvention Sessions',
      'Monthly guided reflection sessions',
      'Smaller group discussions',
      'Access to curated expert conversations',
      'Priority access to ecosystem experiences',
    ],
    fw: '<b>Reinvention Framework:</b> included. Completion is recommended before live sessions.',
    nudge: 'Want private groups and invitation-only events? Private Member adds them.',
    nb: 'See Private Member',
    nt: 2,
  },
  {
    name: 'Private Member',
    price: 129,
    year: 1548,
    node: 3,
    cta: 'Request Access',
    color: 'var(--char)',
    h: 100,
    forLine: 'Premium tier for deeper engagement and leadership within the ecosystem.',
    why: 'Premium tier for deeper engagement and leadership within the ecosystem.',
    includes: 'Everything in The Inner Circle, plus',
    feats: [
      'Small private session groups',
      'Priority access to curated brand collaborations',
      'Invitation-only experiences',
      'Eligibility for 1:1 consultation (apply separately)',
    ],
    fw: '<b>Reinvention Framework:</b> included, used as the foundation for deeper work.',
    nudge: 'Want one-to-one guidance? Consultations start from $500 an hour.',
    nb: 'Apply for a consultation',
    nt: 'c',
  },
];

const CHECK_SVG = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8.5l3.2 3L13 4.5" />
  </svg>
);

const TierCard: React.FC<TierCardProps> = ({ tier, index, isMatch, isReducedMotion, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion || !cardRef.current) return;

    const el = cardRef.current;
    el.style.transformStyle = 'preserve-3d';
    (el.style as any).transformPerspective = '1000px';

    // Set the --tc CSS variable for the tier color
    el.style.setProperty('--tc', tier.color);

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      el.style.setProperty('--gx', `${x * 100}%`);
      el.style.setProperty('--gy', `${y * 100}%`);
      el.style.transform = `perspective(1000px) rotateY(${(x - 0.5) * 12}deg) rotateX(${-(y - 0.5) * 10}deg)`;
    };

    const handlePointerLeave = () => {
      el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [isReducedMotion, tier.color]);

  const fmt = (n: number) => '$' + n.toLocaleString('en-US');

  return (
    <motion.div
      className="tw"
      initial={{ opacity: 0, rotateX: -24, y: 70 } as any}
      animate={{ opacity: 1, rotateX: 0, y: 0 } as any}
      transition={{ duration: 1, stagger: 0.16, ease: [0.2, 0.8, 0.2, 1] } as any}
      style={{
        transformPerspective: '1200px',
        transformOrigin: '50% 100%',
        display: 'flex',
      }}
    >
      <article
        ref={cardRef}
        className="tier"
        data-i={index}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--surface)',
          border: isMatch ? `1px solid ${tier.color}` : '1px solid var(--line)',
          borderRadius: '26px',
          cursor: 'pointer',
          transition: 'border-color 0.3s, box-shadow 0.35s',
          willChange: 'transform',
          boxShadow: isMatch ? 'var(--shadow-card)' : 'none',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100%',
        }}
        onClick={(e) => {
          if (!(e.target as HTMLElement).closest('a')) onSelect();
        }}
      >

        <div className="t-head" style={{
          background: tier.color,
          color: '#fff',
          padding: '28px 28px 0',
          height: '160px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '25px 25px 0 0',
        }}>
          <h3 style={{
            fontSize: '42px',
            position: 'relative',
            zIndex: 1,
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            lineHeight: 1.02,
            margin: 0,
            letterSpacing: '-0.015em',
          }}>
            {tier.name}
          </h3>
          <span className="tag" style={{
            position: 'absolute',
            top: '26px',
            right: '22px',
            fontSize: '13px',
            fontWeight: 500,
            background: '#fff',
            color: tier.color,
            padding: '3px 12px',
            borderRadius: '999px',
            opacity: isMatch ? 1 : 0,
            transform: isMatch ? 'translateY(0)' : 'translateY(-6px)',
            transition: 'all 0.3s',
            zIndex: 1,
            fontFamily: 'var(--font-sans)',
          }}>
            Your match
          </span>
          <i className="mini" style={{
            position: 'absolute',
            right: '28px',
            bottom: 0,
            width: '74px',
            background: 'rgba(255,255,255,.18)',
            borderRadius: '999px 999px 0 0',
            height: `${tier.h * 0.62}%`,
          }} />
          <i className="mini" style={{
            position: 'absolute',
            right: '110px',
            bottom: 0,
            width: '54px',
            background: 'rgba(255,255,255,.1)',
            borderRadius: '999px 999px 0 0',
            height: `${tier.h * 0.4}%`,
          }} />
        </div>

        <div className="t-body" style={{
          padding: '26px 28px 28px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}>
          <p className="for" style={{
            color: 'var(--muted)',
            fontSize: '15px',
            minHeight: '96px',
            fontFamily: 'var(--font-sans)',
          }}>
            {tier.forLine}
          </p>

          <div className="amt" style={{
            marginTop: '16px',
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: '62px',
            lineHeight: 1,
            transform: 'translateZ(30px)',
          }}>
            {fmt(tier.price)} <small style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: 'var(--muted)',
              fontWeight: 400,
            }}> / month</small>
          </div>
          <div className="yr" style={{
            fontSize: '13px',
            color: 'var(--muted)',
            marginTop: '2px',
            fontFamily: 'var(--font-sans)',
          }}>
            or {fmt(tier.year)} billed annually
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '20px 0 16px' }} />

          <div className="inc" style={{
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '10px',
            fontFamily: 'var(--font-sans)',
          }}>
            {tier.includes}
          </div>

          <ul style={{
            listStyle: 'none',
            margin: '0 0 20px',
            padding: 0,
            display: 'grid',
            gap: '9px',
            fontSize: '15px',
            fontFamily: 'var(--font-sans)',
          }}>
            {tier.feats.map((feat, i) => (
              <li key={i} style={{ display: 'flex', gap: '10px' }}>
                <span style={{ flex: 'none', marginTop: '5px', color: tier.color }}>
                  {CHECK_SVG}
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <div className="fwbox" style={{
            marginTop: 'auto',
            background: 'var(--wash)',
            borderRadius: '12px',
            padding: '12px 14px',
            fontSize: '13.5px',
            color: 'var(--muted)',
            marginBottom: '18px',
            fontFamily: 'var(--font-sans)',
          }}>
            <span dangerouslySetInnerHTML={{ __html: tier.fw }} />
          </div>

          <Button
            variant="gold"
            href="#"
            data-cta
            className="mag"
            style={{
              width: '100%',
              background: tier.color,
              transform: 'translateZ(40px)',
              borderRadius: '999px',
              padding: '16px 30px',
              fontWeight: 500,
              fontSize: '15px',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              border: 'none',
              color: '#fff',
              transition: 'filter 0.2s, background 0.4s',
              willChange: 'transform',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {tier.cta}
          </Button>
        </div>
      </article>
    </motion.div>
  );
};

interface TiersSectionProps {
  selectedIndex: number;
  onSelect: (index: number) => void;
  isReducedMotion: boolean;
}

export const TiersSection: React.FC<TiersSectionProps> = ({ selectedIndex, onSelect, isReducedMotion }) => {
  return (
    <section id="tiers" aria-labelledby="t-h" style={{ padding: '104px 0 0' }}>
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="sec-h" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '42px',
        }}>
          <h2 id="t-h" style={{
            fontSize: 'clamp(40px, 5.4vw, 68px)',
            maxWidth: '15ch',
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            lineHeight: 1.02,
            margin: 0,
            letterSpacing: '-0.015em',
          }}>
            Three levels. Each builds on the last.
          </h2>
          <p style={{
            color: 'var(--muted)',
            maxWidth: '44ch',
            fontWeight: 300,
            fontSize: '17px',
            fontFamily: 'var(--font-serif)',
            lineHeight: 1.35,
          }}>
            The I-denty Ecosystem is structured to meet you where you are, and support who you are becoming.
          </p>
        </div>

        <div className="tiers" id="tierGrid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          alignItems: 'stretch',
        }}>
          {TIER_CARD_DATA.map((tier, index) => (
            <TierCard
              key={tier.name}
              tier={tier}
              index={index}
              isMatch={index === selectedIndex}
              isReducedMotion={isReducedMotion}
              onSelect={() => onSelect(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};