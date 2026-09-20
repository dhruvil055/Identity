import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { WhatIsIdenty } from '../components/home/WhatIsIdenty';
import { EcosystemMap } from '../components/home/EcosystemMap';
import { MarketGap } from '../components/home/MarketGap';
import { FrameworkTeaser } from '../components/home/FrameworkTeaser';
import { TheShift } from '../components/home/TheShift';
import { ValuePropCards } from '../components/home/ValuePropCards';
import { BrandEcosystem } from '../components/home/BrandEcosystem';
import { FounderSpotlight } from '../components/home/FounderSpotlight';
import { CommunityBanner } from '../components/home/CommunityBanner';
import { PathFinderWizard } from '../components/finder/PathFinderWizard';
import { SectionHeader } from '../components/common/SectionHeader';

export const HomePage: React.FC = () => {
  return (
    <main id="primary" className="site-main front-page">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. What Is I-denty (Concise, progressive disclosure) */}
      <WhatIsIdenty />

      {/* 3. Interactive Ecosystem Map */}
      <EcosystemMap />

      {/* 4. The Market Gap (4 transition scenarios) */}
      <MarketGap />

      {/* 5. Reinvention Framework Teaser (4 steps interactive) */}
      <FrameworkTeaser />

      {/* 6. The Shift (Before vs After 6 months) */}
      <TheShift />

      {/* 7. Membership Experience & Monthly Reinvention Session */}
      <ValuePropCards />

      {/* 8. Interactive Path Finder Diagnostic Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="identy-container">
          <SectionHeader
            eyebrow="Diagnostic Recommendation"
            title="Find Your Starting Point"
            subtitle="Answer 3 simple questions to determine which ecosystem tier, framework stage, and live sessions best match your current life stage."
            centered
          />
          <PathFinderWizard />
        </div>
      </section>

      {/* 9. The Brand Ecosystem & Platform Architecture */}
      <BrandEcosystem />

      {/* 10. Founder Story & Leadership Pedigree */}
      <FounderSpotlight />

      {/* 11. Closing Community Video Banner & Direct Invitation */}
      <CommunityBanner />
    </main>
  );
};
