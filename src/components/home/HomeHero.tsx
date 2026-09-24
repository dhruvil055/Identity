import React, { useEffect, useRef, useState } from 'react';
import { BRAND_CONFIG } from '../../data/brandData';
import './HomeHero.css';

const HERO_POSTER = 'https://i-denty.com/wp-content/themes/i-denty/assets/images/hero.png';

/**
 * Premium immersive 3D hero — Membership V3 Style
 * - 3D rings with CSS 3D transforms
 * - Editorial typography with word-by-word entrance
 * - Cinematic video background
 * - Staggered entrance animations
 * - Mouse parallax (desktop/fine-pointer only)
 * - Video skipped on reduced-motion and coarse-pointer
 */
export const HomeHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [coarsePointer, setCoarsePointer] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const rmQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarseQuery = window.matchMedia('(pointer: coarse)');
    const onRm = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    const onCoarse = (e: MediaQueryListEvent) => setCoarsePointer(e.matches);
    rmQuery.addEventListener('change', onRm);
    coarseQuery.addEventListener('change', onCoarse);
    return () => {
      rmQuery.removeEventListener('change', onRm);
      coarseQuery.removeEventListener('change', onCoarse);
    };
  }, []);

  // Mouse parallax for 3D rings
  useEffect(() => {
    const rings = ringsRef.current;
    if (!rings || reducedMotion) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let running = false;

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      rings.style.transform = `rotate(-18deg) rotateX(62deg) translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };
    const kick = () => {
      if (!running) {
        running = true;
        requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = rings.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = nx * 20;
      targetY = ny * 20;
      kick();
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      kick();
    };

    rings.addEventListener('pointermove', onMove, { passive: true });
    rings.addEventListener('pointerleave', onLeave, { passive: true });
    return () => {
      rings.removeEventListener('pointermove', onMove);
      rings.removeEventListener('pointerleave', onLeave);
    };
  }, [reducedMotion]);

  const showVideo = !reducedMotion && !coarsePointer && !videoFailed;

  return (
    <section ref={sectionRef} className="hero" aria-label="I-denty — The identity-led lifestyle ecosystem">
      {/* Background media */}
      <div className="hero-media" aria-hidden="true">
        <img src={HERO_POSTER} alt="" fetchPriority="high" decoding="async" />
        {showVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
            aria-hidden="true"
            tabIndex={-1}
            onError={() => setVideoFailed(true)}
          >
            <source src={BRAND_CONFIG.heroVideoUrl} type="video/mp4" />
          </video>
        )}
      </div>

      {/* 3D Rings */}
      <div ref={ringsRef} className="rings" aria-hidden="true">
        <div className="rings-in">
          <div className="ring" />
          <div className="ring" />
          <div className="ring" />
        </div>
      </div>

      {/* Hero content */}
      <div className="hero-top">
        <div>
          <h1 aria-label="Your Path Inside I-denty">
            <span className="w"><span className="wi">Your</span></span>{' '}
            <span className="w"><span className="wi">Path</span></span>{' '}
            <span className="w"><span className="wi">Inside</span></span>{' '}
            <span className="w"><span className="wi">I-denty</span></span>
          </h1>
          <p className="lede">
            I-denty operates through structured access levels designed to support identity evolution at every stage of life.
          </p>
          <div className="std">
            OPEN ACCESS &nbsp;|&nbsp; ELEVATED STANDARD
          </div>
          <div className="trust">
            <span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8.5l3.2 3L13 4.5" />
              </svg>
              Reinvention Framework in every level
            </span>
            <span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8.5l3.2 3L13 4.5" />
              </svg>
              Earlier framework fee credited
            </span>
          </div>
        </div>

        <div className="hero-side">
          <a href="/finder" className="btn pill">
            Find My Level
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#what-is-identy" className="hero-scroll" aria-label="Scroll to discover more">
        <span>Scroll</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
};