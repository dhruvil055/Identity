import React, { useEffect, useState, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';

/**
 * ScrollProgressBar — a slim gold progress bar at the very top of the viewport
 * that fills as the user scrolls down the page.
 *
 * BackToTopButton — appears after the user scrolls 400px, animated in/out.
 * Respects prefers-reduced-motion for instant scroll.
 */

export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 9999,
        backgroundColor: 'transparent',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--color-brand-gold) 0%, #d4b98a 100%)',
          transition: 'width 0.1s linear',
          willChange: 'width',
          transformOrigin: 'left',
        }}
      />
    </div>
  );
};

export const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prefersReducedMotion = useCallback(() => {
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'instant' : 'smooth',
    });
  }, [prefersReducedMotion]);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="back-to-top-btn"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 999,
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-bg-dark)',
        color: '#ffffff',
        border: '1px solid rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.9)',
        transition: 'opacity 0.3s ease, transform 0.3s ease, background-color 0.2s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      tabIndex={visible ? 0 : -1}
    >
      <ChevronUp size={20} />
    </button>
  );
};
