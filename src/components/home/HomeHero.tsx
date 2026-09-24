import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/brandData';
import './HomeHero.css';

const HERO_POSTER = 'https://i-denty.com/wp-content/themes/i-denty/assets/images/hero.png';
const MAX_SHIFT = 16;

/**
 * Premium immersive 3D hero — CSS-3D depth layers + cinematic video background.
 * - Content (eyebrow, H1, description, CTAs) preserved from brand config.
 * - CTAs: Join the Membership (/memberships), Explore Membership Levels
 *   (/memberships#comparison-matrix).
 * - Mouse parallax is rAF-throttled, transform-only, desktop/fine-pointer only,
 *   and fully disabled under prefers-reduced-motion.
 * - Video is skipped on reduced-motion and coarse-pointer (poster fallback).
 */
export const HomeHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);
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

  // Subtle mouse parallax — writes CSS vars consumed by .hh-px layers.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reducedMotion) {
      sectionRef.current?.style.setProperty('--mx', '0px');
      sectionRef.current?.style.setProperty('--my', '0px');
      return;
    }
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let running = false;

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el.style.setProperty('--mx', `${currentX.toFixed(2)}px`);
      el.style.setProperty('--my', `${currentY.toFixed(2)}px`);
      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };
    const kick = () => {
      if (!running) {
        running = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = nx * MAX_SHIFT;
      targetY = ny * MAX_SHIFT;
      kick();
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      kick();
    };

    el.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave, { passive: true });
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  const showVideo = !reducedMotion && !coarsePointer && !videoFailed;

  return (
    <section ref={sectionRef} className="hh" aria-label="I-denty — The identity-led lifestyle ecosystem">
      {/* Layer 0 — background media (poster always, video progressively enhances) */}
      <div className="hh-media hh-px" style={{ ['--d' as string]: 2.1 }} aria-hidden="true">
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

      {/* Layer 1 — cinematic overlays */}
      <div className="hh-shade" aria-hidden="true" />

      {/* Layer 2 — CSS 3D decor scene (purely decorative) */}
      <div className="hh-scene" aria-hidden="true">
        <div className="hh-orb hh-px" style={{ ['--d' as string]: 1.1 }} />
        <div className="hh-lines hh-px" style={{ ['--d' as string]: 0.5 }} />
        <div className="hh-ring hh-ring-a hh-px" style={{ ['--d' as string]: 1.7, ['--z' as string]: '-120px' }} />
        <div className="hh-ring hh-ring-b hh-px" style={{ ['--d' as string]: 1.2, ['--z' as string]: '-60px' }} />
        <div className="hh-ring hh-ring-c hh-px" style={{ ['--d' as string]: 0.8, ['--z' as string]: '40px' }} />
      </div>

      {/* Floating glass session card — keyboard-accessible, participates in parallax */}
      <Link to="/experiences" className="hh-card hh-px" style={{ ['--d' as string]: 0.55, ['--z' as string]: '90px' }}>
        <span className="hh-card-eyebrow">Monthly Reinvention Session</span>
        <span className="hh-card-title">Founder-led live, every month</span>
        <span className="hh-card-sub">90 minutes · Teaching + live Q&amp;A →</span>
      </Link>

      {/* Layer 3 — content */}
      <div className="hh-content hh-px" style={{ ['--d' as string]: -0.35 }}>
        <div className="hh-rise" style={{ ['--rd' as string]: '0.05s' }}>
          <span className="hh-pill">
            <span className="hh-pill-dot" aria-hidden="true">◈</span>
            <span>{BRAND_CONFIG.tagline}</span>
          </span>
        </div>

        <h1 className="hh-title hh-rise" style={{ ['--rd' as string]: '0.18s' }}>
          The identity-led lifestyle ecosystem
          <br className="hh-br" /> for women <em>reinventing</em> their next chapter.
        </h1>

        <p className="hh-sub hh-rise" style={{ ['--rd' as string]: '0.32s' }}>
          {BRAND_CONFIG.heroSubtitle}
        </p>

        <div className="hh-ctas hh-rise" style={{ ['--rd' as string]: '0.46s' }}>
          <Link to="/memberships" className="hh-btn hh-btn-primary">
            Join the Membership
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/memberships#comparison-matrix" className="hh-btn hh-btn-ghost">
            Explore Membership Levels
          </Link>
        </div>
      </div>

      {/* Layer 4 — scroll cue */}
      <a href="#what-is-identy" className="hh-cue hh-rise" style={{ ['--rd' as string]: '1s' }} aria-label="Scroll to discover more">
        <span>Scroll</span>
        <span className="hh-cue-line" aria-hidden="true" />
      </a>
    </section>
  );
};
