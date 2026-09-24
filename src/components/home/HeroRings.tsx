import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface HeroRingsProps {
  isReducedMotion: boolean;
}

export const HeroRings: React.FC<HeroRingsProps> = ({ isReducedMotion }) => {
  const ringsInRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion || !ringsInRef.current) return;

    // Initial rotation
    ringsInRef.current.style.transform = 'perspective(900px) rotateX(62deg) rotateZ(-18deg)';

    // Ambient rotation animation for each ring
    const rings = ringsInRef.current.querySelectorAll('.ring');
    rings.forEach((ring, k) => {
      const el = ring as HTMLElement;
      el.style.animation = `ringRotate${k} ${26 + k * 10}s linear infinite`;
    });

    // Add keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ringRotate0 {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(360deg); }
      }
      @keyframes ringRotate1 {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(-360deg); }
      }
      @keyframes ringRotate2 {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(360deg); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      rings.forEach((ring) => {
        (ring as HTMLElement).style.animation = '';
      });
      document.head.removeChild(style);
    };
  }, [isReducedMotion]);

  return (
    <motion.div
      className="rings"
      aria-hidden="true"
      ref={ringsInRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
      style={{
        position: 'absolute',
        right: '-30px',
        top: '-10px',
        width: 'min(520px, 52vw)',
        aspectRatio: '1',
        perspective: '900px',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <div className="rings-in" style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
        <div className="ring" style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid var(--gold-l)', opacity: 0.75 }} />
        <div className="ring" style={{ position: 'absolute', inset: '9%', borderRadius: '50%', border: '1px solid var(--gold-l)', opacity: 0.55 }} />
        <div className="ring" style={{ position: 'absolute', inset: '19%', borderRadius: '50%', border: '1px solid var(--gold-l)', opacity: 0.4 }} />
      </div>
    </motion.div>
  );
};