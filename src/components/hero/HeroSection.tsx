import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles, ChevronRight, Shield } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { MagneticButton } from '../common/MagneticButton';
import { soundManager } from '../../utils/sound';

interface HeroSectionProps {
  onOpenModal: (type: 'initialize-identity' | 'explore-dimensions', triggerEl?: HTMLElement) => void;
  lenis: { scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => void } | null;
}


export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal, lenis }) => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const telemetryRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tl = gsap.timeline({ delay: 0.3 });

    if (isReduced) {
      tl.to(
        [
          badgeRef.current,
          headlineRef.current,
          subtextRef.current,
          ctaGroupRef.current,
          telemetryRef.current,
          scrollCueRef.current,
        ],
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
        }
      );
      return;
    }

    const words = headlineRef.current?.querySelectorAll('.hero-word');

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    if (words && words.length > 0) {
      tl.fromTo(
        words,
        { opacity: 0, y: 60, rotateX: -30 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.1,
          stagger: 0.06,
          ease: 'power4.out',
        },
        '-=0.5'
      );
    }

    tl.fromTo(
      subtextRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.6'
    );

    tl.fromTo(
      ctaGroupRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );

    tl.fromTo(
      [telemetryRef.current, scrollCueRef.current],
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.4'
    );

    const mouseWheel = scrollCueRef.current?.querySelector('.mouse-wheel');
    if (mouseWheel) {
      gsap.to(mouseWheel, {
        y: 8,
        opacity: 0.2,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  const handleScrollCueClick = () => {
    soundManager.playClick();
    if (lenis) {
      lenis.scrollTo('#intro', { offset: -40, duration: 1.2 });
    } else {
      document.querySelector('#intro')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center pt-28 pb-12 px-6 overflow-hidden bg-[#fbf9f5]"
      aria-label="Hero Section"
    >
      {/* Three.js 3D WebGL Background Scene */}
      <Hero3DCanvas />

      {/* Atmospheric Radial Gradients for Light Theme */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(229,184,105,0.18)_0%,transparent_70%)] blur-3xl z-0" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fbf9f5] via-[#fbf9f5]/70 to-transparent z-10" />

      {/* Top telemetry HUD tag */}
      <div
        ref={badgeRef}
        className="relative z-10 opacity-0 flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#9a7c38]/30 bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(154,124,56,0.1)] mb-6 text-xs uppercase tracking-[0.2em] font-mono text-[#856926]"
      >
        <Sparkles className="w-3.5 h-3.5 animate-spin text-[#9a7c38]" style={{ animationDuration: '6s' }} />
        <span>Sovereign Identity Protocol v4.8</span>
      </div>

      {/* Hero Center Text Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <h1
          ref={headlineRef}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04] text-[#141a29] perspective-[1000px]"
        >
          <span className="inline-block hero-word">THE</span>{' '}
          <span className="inline-block hero-word text-gradient-gold">ARCHITECTURE</span>{' '}
          <span className="inline-block hero-word">OF</span>{' '}
          <br className="hidden sm:inline" />
          <span className="inline-block hero-word">WHO</span>{' '}
          <span className="inline-block hero-word">YOU</span>{' '}
          <span className="inline-block hero-word text-gradient-silver">BECOME</span>
        </h1>

        <p
          ref={subtextRef}
          className="opacity-0 mt-7 max-w-2xl text-base sm:text-lg md:text-xl text-[#585e70] font-sans font-light leading-relaxed tracking-wide"
        >
          A sovereign ecosystem uniting autonomous identity, biometric zero-knowledge
          cryptography, and curated reinvention for extraordinary living.
        </p>

        {/* CTA Group */}
        <div
          ref={ctaGroupRef}
          className="opacity-0 mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <MagneticButton
            variant="primary"
            onClick={(e) => onOpenModal('initialize-identity', e.currentTarget)}
            className="!px-8 !py-4 !text-sm font-bold flex items-center gap-3 shadow-[0_10px_35px_rgba(154,124,56,0.35)]"
          >
            <span>Initialize Identity</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            onClick={(e) => onOpenModal('explore-dimensions', e.currentTarget)}
            className="!px-8 !py-4 !text-sm flex items-center gap-3 backdrop-blur-lg"
          >
            <Shield className="w-4 h-4 text-[#9a7c38]" />
            <span>Explore Dimensions</span>
          </MagneticButton>
        </div>

      </div>

      {/* Bottom Floating Telemetry & Scroll Cue */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-end justify-between mt-12 pt-4">
        {/* Left Telemetry Coordinate */}
        <div
          ref={telemetryRef}
          className="opacity-0 hidden sm:flex flex-col text-[11px] font-mono text-[#585e70] tracking-widest uppercase"
        >
          <span className="flex items-center gap-1.5 text-[#141a29] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-ping" />
            LIVE LATENCY: 12ms
          </span>
          <span>LOCATION: 46.2044° N, 6.1432° E [GENEVA SANCTUM]</span>
        </div>

        {/* Center Scroll Cue */}
        <div
          ref={scrollCueRef}
          onClick={handleScrollCueClick}
          className="opacity-0 mx-auto sm:mx-0 flex flex-col items-center gap-2 cursor-pointer group"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleScrollCueClick()}
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#585e70] group-hover:text-[#9a7c38] uppercase transition-colors">
            Scroll to Enter
          </span>
          <div className="w-5 h-9 rounded-full border border-black/20 group-hover:border-[#9a7c38]/60 flex items-start justify-center p-1 transition-colors bg-white/50">
            <div className="mouse-wheel w-1.5 h-2 rounded-full bg-[#9a7c38]" />
          </div>
          <ArrowDown className="w-3.5 h-3.5 text-[#585e70] group-hover:text-[#9a7c38] group-hover:translate-y-1 transition-all" />
        </div>

        {/* Right Telemetry Protocol */}
        <div className="opacity-0 hidden sm:flex flex-col text-right text-[11px] font-mono text-[#585e70] tracking-widest uppercase">
          <span className="text-[#856926] font-medium">CONSORTIUM PROTOCOL 802.1</span>
          <span>ESTABLISHED 2026 // ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </section>
  );
};
