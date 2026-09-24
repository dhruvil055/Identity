import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Preloader } from './components/common/Preloader';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { IntroSection } from './components/intro/IntroSection';
import { FeaturesSection } from './components/features/FeaturesSection';
import { ShowcasePinnedSection } from './components/showcase/ShowcasePinnedSection';
import { StatsSection } from './components/stats/StatsSection';
import { CTASection } from './components/cta/CTASection';
import { Footer } from './components/footer/Footer';
import { Modal } from './components/common/Modal';
import {
  AccessPortalContent,
  InitializeIdentityContent,
  ExploreDimensionsContent,
  ClaimSovereignKeyContent,
  InitializeApplicationContent,
} from './components/modal/ModalContents';
import { soundManager } from './utils/sound';

gsap.registerPlugin(ScrollTrigger);

export type ModalType =
  | 'access-portal'
  | 'initialize-identity'
  | 'explore-dimensions'
  | 'claim-key'
  | 'initialize-application'
  | null;

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [modalTriggerEl, setModalTriggerEl] = useState<HTMLElement | null>(null);

  const lenisRef = useRef<Lenis | null>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis + GSAP ScrollTrigger synchronization
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReduced) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', (e: { velocity: number }) => {
      ScrollTrigger.update();

      // Velocity-based subtle skew on high scroll velocity
      if (contentWrapperRef.current) {
        const clampedVelocity = Math.min(Math.max(e.velocity / 60, -1.5), 1.5);
        contentWrapperRef.current.style.transform = `skewY(${clampedVelocity * 0.4}deg)`;
        contentWrapperRef.current.style.transition = 'transform 0.15s ease-out';
      }
    });

    // Run Lenis in GSAP ticker for perfect frame synchronization
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    } else if (typeof target === 'string') {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    }
  };

  const stop = () => lenisRef.current?.stop();
  const start = () => lenisRef.current?.start();

  const lenisProxy = { scrollTo, stop, start };

  const handleOpenModal = (type: NonNullable<ModalType>, triggerEl?: HTMLElement) => {
    soundManager.playClick();
    setModalTriggerEl(triggerEl || (document.activeElement as HTMLElement) || null);
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  // Compute modal titles and subtitles dynamically
  const getModalConfig = () => {
    switch (activeModal) {
      case 'access-portal':
        return {
          title: 'Access Sovereign Portal',
          subtitle: 'AUTHENTICATION PROTOCOL // 01',
          maxWidth: 'md' as const,
        };
      case 'initialize-identity':
        return {
          title: 'Initialize Sovereign Identity',
          subtitle: 'ONBOARDING SEQUENCE // GENESIS',
          maxWidth: 'md' as const,
        };
      case 'explore-dimensions':
        return {
          title: 'Ecosystem Dimensions',
          subtitle: 'ARCHITECTURE SPECIFICATION // 03',
          maxWidth: 'lg' as const,
        };
      case 'claim-key':
        return {
          title: 'Claim Sovereign Key Pass',
          subtitle: 'EXHIBITION ARTIFACT // TOKEN MINT',
          maxWidth: 'md' as const,
        };
      case 'initialize-application':
        return {
          title: 'Sovereign Admissions Cohort 2026',
          subtitle: 'CONFIDENTIAL ADMISSIONS // COHORT 2026',
          maxWidth: 'lg' as const,
        };
      default:
        return {
          title: '',
          subtitle: '',
          maxWidth: 'md' as const,
        };
    }
  };

  const modalConfig = getModalConfig();

  return (
    <div className="relative min-h-screen bg-[#fbf9f5] text-[#141a29] selection:bg-[#9a7c38]/25 selection:text-[#141a29] overflow-x-hidden">
      {/* 1. Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 2. Fluid Custom Cursor */}
      <CustomCursor />

      {/* 3. Floating Navbar */}
      <Navbar
        onOpenModal={(triggerEl) => handleOpenModal('access-portal', triggerEl)}
        lenis={lenisProxy}
      />

      {/* 4. Velocity-aware Single Page Scroll Container */}
      <div ref={contentWrapperRef} className="will-change-transform">
        <main id="main-content">
          {/* Section 1: Hero */}
          <HeroSection
            onOpenModal={(type, triggerEl) => handleOpenModal(type, triggerEl)}
            lenis={lenisProxy}
          />

          {/* Section 2: Intro & Value Proposition */}
          <IntroSection />

          {/* Section 3: Features & Services (3D Glassmorphic Perspective Tilt Cards) */}
          <FeaturesSection />

          {/* Section 4: Showcase (Pinned Scroll-Jacking 3D Artifact) */}
          <ShowcasePinnedSection
            onOpenModal={(type, triggerEl) => handleOpenModal(type, triggerEl)}
          />

          {/* Section 5: Stats & Social Proof */}
          <StatsSection />

          {/* Section 6: Call to Action */}
          <CTASection
            onOpenModal={(type, triggerEl) => handleOpenModal(type, triggerEl)}
          />
        </main>

        {/* Section 7: Footer */}
        <Footer lenis={lenisProxy} />
      </div>

      {/* ONE Reusable Universal Modal Component Rendered via Portal to document.body */}
      <Modal
        isOpen={activeModal !== null}
        onClose={handleCloseModal}
        title={modalConfig.title}
        subtitle={modalConfig.subtitle}
        maxWidth={modalConfig.maxWidth}
        triggerElement={modalTriggerEl}
        lenis={lenisProxy}
      >

        {activeModal === 'access-portal' && (
          <AccessPortalContent onClose={handleCloseModal} />
        )}
        {activeModal === 'initialize-identity' && (
          <InitializeIdentityContent onClose={handleCloseModal} />
        )}
        {activeModal === 'explore-dimensions' && (
          <ExploreDimensionsContent
            onSwitchToApplication={() => setActiveModal('initialize-application')}
            onClose={handleCloseModal}
          />
        )}
        {activeModal === 'claim-key' && (
          <ClaimSovereignKeyContent onClose={handleCloseModal} />
        )}
        {activeModal === 'initialize-application' && (
          <InitializeApplicationContent onClose={handleCloseModal} />
        )}
      </Modal>
    </div>
  );
};

export default App;
