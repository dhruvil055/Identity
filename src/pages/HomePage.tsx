import React, { useState, useEffect } from 'react';
import { HomeHero3D } from '../components/home/HomeHero3D';
import { HomeLoader } from '../components/home/HomeLoader';
import { IdentityIntro } from '../components/home/IdentityIntro';
import { WhatIsIdenty } from '../components/home/WhatIsIdenty';
import { MarketGap } from '../components/home/MarketGap';
import { IdentyModel } from '../components/home/IdentyModel';
import { FrameworkTeaser } from '../components/home/FrameworkTeaser';
import { TheShift } from '../components/home/TheShift';
import { ValuePropCards } from '../components/home/ValuePropCards';
import { BrandEcosystem } from '../components/home/BrandEcosystem';
import { FounderSpotlight } from '../components/home/FounderSpotlight';
import { ContinueJourney } from '../components/home/ContinueJourney';
import { BrandStatement } from '../components/home/BrandStatement';
import { Footer } from '../components/home/Footer';
import { ScrollParallax } from '../components/common/ScrollParallax';
import { ExperiencesShowcase } from '../components/home/ExperiencesShowcase';
import { PathFinderCTA } from '../components/home/PathFinderCTA';
import { CommunityBanner } from '../components/home/CommunityBanner';

export const HomePage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Premium homepage loader: minimum 500ms for brand polish,
  // hard cap ~1200ms, skipped fast when the page is already complete.
  // Reduced-motion users get a near-instant fade.
  useEffect(() => {
    if (!mounted) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minMs = reduced ? 150 : 500;
    const maxMs = reduced ? 400 : 1200;
    const start = performance.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minMs - elapsed);
      window.setTimeout(() => {
        setLoaderDone(true);
        // Remove overlay after fade; restore scroll in case it was locked.
        window.setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = '';
        }, reduced ? 10 : 480);
      }, wait);
    };

    document.body.style.overflow = 'hidden';
    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
    }
    const cap = window.setTimeout(finish, maxMs);
    return () => {
      window.removeEventListener('load', finish);
      window.clearTimeout(cap);
      document.body.style.overflow = '';
    };
  }, [mounted]);

  if (!mounted) {
    return <div style={{ minHeight: '100vh', background: 'var(--color-bg-body)' }} />;
  }

  return (
    <>
      {loading && <HomeLoader done={loaderDone} />}
      <main id="primary" className="site-main front-page">
        {/* 1. Premium 3D Hero Section */}
        <HomeHero3D />

        {/* 2. Identity introduction — the standard */}
        <IdentityIntro />

        {/* 3. What Is I-denty */}
        <ScrollParallax id="what-is-identy" offset={60}>
          <WhatIsIdenty />
        </ScrollParallax>

        {/* 4. The Market Gap */}
        <ScrollParallax id="market-gap" offset={50}>
          <MarketGap />
        </ScrollParallax>

        {/* 5. The I-denty Model (interactive ecosystem) */}
        <ScrollParallax id="ecosystem" offset={40}>
          <IdentyModel />
        </ScrollParallax>

        {/* 6. Reinvention Framework Teaser */}
        <ScrollParallax id="framework" offset={70}>
          <FrameworkTeaser />
        </ScrollParallax>

        {/* 7. Lifestyle & Experiences showcase */}
        <ExperiencesShowcase />

        {/* 8. The Shift (Before vs After 6 months) - Enhanced 3D */}
        <ScrollParallax id="the-shift" offset={30}>
          <TheShift />
        </ScrollParallax>

        {/* 9. 3D Horizontal Scrolling Membership Tiers */}
        <ScrollParallax id="membership-tiers-3d" offset={80}>
          <ValuePropCards />
        </ScrollParallax>

        {/* 10. Membership Experience & Monthly Reinvention Session */}
        <ScrollParallax id="membership" offset={50}>
          <BrandEcosystem />
        </ScrollParallax>

        {/* 11. Interactive Path Finder CTA Section */}
        <ScrollParallax id="path-finder-cta" offset={60}>
          <PathFinderCTA />
        </ScrollParallax>

        {/* 12. The Brand Ecosystem & Platform Architecture */}
        <ScrollParallax id="brand-ecosystem" offset={40}>
          <BrandEcosystem />
        </ScrollParallax>

        {/* 13. Founder Story & Leadership Pedigree */}
        <ScrollParallax id="founder" offset={50}>
          <FounderSpotlight />
        </ScrollParallax>

        {/* 14. Continue Your Journey — Navigation Bridge */}
        <ScrollParallax offset={20}>
          <ContinueJourney />
        </ScrollParallax>

        {/* 15. Closing Community Video Banner & Direct Invitation */}
        <ScrollParallax offset={10}>
          <CommunityBanner />
        </ScrollParallax>

        {/* 16. Final brand statement */}
        <BrandStatement />
      </main>

      <Footer />
    </>
  );
};