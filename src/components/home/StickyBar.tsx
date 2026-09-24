import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

interface StickyBarProps {
  isReducedMotion: boolean;
  selectedIndex: number;
}

const TIER_DATA = [
  { name: 'The Collective', price: 19, cta: 'Begin Inside', node: 1 },
  { name: 'The Inner Circle', price: 49, cta: 'Explore Deeper', node: 2 },
  { name: 'Private Member', price: 129, cta: 'Request Access', node: 3 },
];

const fmt = (n: number) => '$' + n.toLocaleString('en-US');

export const StickyBar: React.FC<StickyBarProps> = ({ isReducedMotion, selectedIndex }) => {
  const [show, setShow] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const finderRef = useRef<HTMLDivElement>(null);
  const captureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion) return;

    const handleScroll = () => {
      if (!finderRef.current || !captureRef.current || !barRef.current) return;
      const finderRect = finderRef.current.getBoundingClientRect();
      const captureRect = captureRef.current.getBoundingClientRect();
      const shouldShow = finderRect.bottom < 0 && captureRect.top > window.innerHeight * 0.85;
      if (shouldShow !== show) setShow(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReducedMotion, show]);

  const tier = TIER_DATA[selectedIndex];

  return (
    <motion.div
      className="bar"
      id="bar"
      ref={barRef}
      role="region"
      aria-label="Your recommended level"
      initial={{ y: 120 }}
      animate={{ y: show ? 0 : 120 }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 40,
        padding: `12px 16px calc(12px + env(safe-area-inset-bottom, 0px))`,
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      <div className="bar-in" style={{
        pointerEvents: 'auto',
        maxWidth: '720px',
        margin: '0 auto',
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: '999px',
        padding: '8px 8px 8px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '14px',
        boxShadow: '0 22px 44px -18px rgba(24,33,59,.4)',
      }}>
        <span style={{ fontSize: '15px', fontFamily: 'var(--font-sans)' }}>
          Your match: <b id="bar-name" style={{ fontWeight: 500 }}>{tier.name}</b> <small id="bar-price" style={{ color: 'var(--muted)' }}>· {fmt(tier.price)} / month</small>
        </span>
        <Button
          href="#"
          id="bar-cta"
          data-cta
          className="mag"
          style={{
            padding: '12px 22px',
            whiteSpace: 'nowrap',
            background: 'var(--accent)',
            color: '#fff',
            borderRadius: '999px',
            fontWeight: 500,
            fontSize: '15px',
            letterSpacing: '0.04em',
            textDecoration: 'none',
            border: 'none',
            transition: 'filter 0.2s, background 0.4s',
            willChange: 'transform',
          }}
        >
          {tier.cta}
        </Button>
      </div>
    </motion.div>
  );
};