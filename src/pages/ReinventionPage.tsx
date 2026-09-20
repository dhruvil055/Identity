import React, { useState } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { RelatedBridge } from '../components/common/RelatedBridge';
import { REINVENTION_STAGES, FRAMEWORK_PRICING } from '../data/frameworkData';
import { CheckCircle2, Compass, ShieldCheck } from 'lucide-react';

export const ReinventionPage: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('recalibrate');

  const activeStage =
    REINVENTION_STAGES.find((s) => s.id === activeStageId) || REINVENTION_STAGES[0];

  return (
    <main className="site-main page-reinvention">
      {/* 1. Hero */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
          paddingBottom: 'clamp(5rem, 8vw, 7.5rem)',
          backgroundColor: '#16191e',
          color: '#ffffff',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "linear-gradient(180deg, rgba(22, 25, 30, 0.75) 0%, rgba(22, 25, 30, 0.9) 100%), url('https://i-denty.com/wp-content/themes/i-denty/assets/images/reinvention-hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
          }}
        />

        <div className="identy-container" style={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumb items={[{ label: 'Reinvention' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                fontWeight: 600,
                color: 'var(--color-brand-gold)',
                marginBottom: '1rem',
              }}
            >
              The Operating System For Life Transitions
            </span>

            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                lineHeight: 1.15,
                fontWeight: 500,
                marginBottom: '1.5rem',
              }}
            >
              Reinvention Requires Structure.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.88)',
                lineHeight: 1.65,
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}
            >
              The I-denty Reinvention Framework is a structured, repeatable experience designed to support identity recalibration, lifestyle alignment, and intentional evolution.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button variant="gold" href="#journey" withArrow>
                Explore The 4 Stages
              </Button>
              <Button variant="ghost-light" href="#standalone-pricing">
                Enroll In Framework ($149)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy: Recalibration Begins Quietly */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="identy-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow">The Core Philosophy</span>
            <h2 style={{ marginBottom: '1.25rem' }}>
              True Reinvention Rarely Begins With Dramatic Action
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '1.4rem',
                color: 'var(--color-brand-gold-dark)',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                lineHeight: 1.45,
              }}
            >
              “It begins quietly — through recalibration.”
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '3rem' }}>
              When external roles dissolve or change, your standards shift, tolerance alters, and identity naturally seeks realignment. The I-denty Framework was built to provide clarity and safety during these moments of transition.
            </p>
          </div>

          {/* 3 Pillars of Shift */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            <div
              className="card-editorial"
              style={{
                backgroundColor: 'var(--color-bg-sand-light)',
                padding: '2.2rem 1.8rem',
                textAlign: 'center',
              }}
            >
              <div style={{ width: '48px', height: '48px', margin: '0 auto 1.25rem auto' }}>
                <img
                  src="https://i-denty.com/wp-content/themes/i-denty/assets/images/standards-shift.png"
                  alt="Standards shift"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--color-text-main)' }}>
                Standards Shift
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)' }}>
                What once felt acceptable no longer aligns with your capacity, peace, or energy.
              </p>
            </div>

            <div
              className="card-editorial"
              style={{
                backgroundColor: 'var(--color-bg-sand-light)',
                padding: '2.2rem 1.8rem',
                textAlign: 'center',
              }}
            >
              <div style={{ width: '48px', height: '48px', margin: '0 auto 1.25rem auto' }}>
                <img
                  src="https://i-denty.com/wp-content/themes/i-denty/assets/images/tolerance-changes.png"
                  alt="Tolerance changes"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--color-text-main)' }}>
                Tolerance Changes
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)' }}>
                You stop accommodating hollow commitments and protect cognitive space.
              </p>
            </div>

            <div
              className="card-editorial"
              style={{
                backgroundColor: 'var(--color-bg-sand-light)',
                padding: '2.2rem 1.8rem',
                textAlign: 'center',
              }}
            >
              <div style={{ width: '48px', height: '48px', margin: '0 auto 1.25rem auto' }}>
                <img
                  src="https://i-denty.com/wp-content/themes/i-denty/assets/images/identity-begins-to-realign.png"
                  alt="Identity begins to realign"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--color-text-main)' }}>
                Identity Realigns
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)' }}>
                You design your presence, lifestyle, and relationships from who you are now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4-Stage Interactive Journey */}
      <section id="journey" className="section-padding" style={{ backgroundColor: 'var(--color-bg-sand)' }}>
        <div className="identy-container">
          <SectionHeader
            eyebrow="The Sequential Progression"
            title="The Reinvention Journey"
            subtitle="Recalibrate ↓ Redefine ↓ Express ↓ Expand. Click any stage to explore its outcomes and tools."
            centered
          />

          {/* Stepper Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0.85rem',
              maxWidth: '1020px',
              margin: '0 auto 3rem auto',
            }}
          >
            {REINVENTION_STAGES.map((stage) => {
              const isSelected = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  style={{
                    padding: '1.2rem 1.4rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isSelected ? 'var(--color-bg-dark)' : '#ffffff',
                    color: isSelected ? '#ffffff' : 'var(--color-text-main)',
                    border: isSelected ? '1px solid var(--color-bg-dark)' : '1px solid var(--color-border)',
                    textAlign: 'left',
                    boxShadow: isSelected ? 'var(--shadow-card)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      fontWeight: 700,
                      color: isSelected ? 'var(--color-brand-gold)' : 'var(--color-text-muted)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Stage {stage.stepNumber}
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 600 }}>
                    {stage.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Showcase */}
          <div
            className="animate-fade-in"
            key={activeStage.id}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-card)',
              overflow: 'hidden',
              maxWidth: '1020px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', minHeight: '380px' }}>
              <img
                src={activeStage.imageSrc}
                alt={activeStage.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Deep-Dive Copy & Checklist */}
            <div style={{ padding: 'clamp(2rem, 4vw, 3.2rem)' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  fontWeight: 700,
                  color: 'var(--color-brand-gold-dark)',
                  marginBottom: '0.5rem',
                }}
              >
                <Compass size={14} />
                <span>Operating Stage {activeStage.stepNumber}</span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>
                {activeStage.title}
              </h3>

              <p style={{ fontSize: '1.02rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {activeStage.meaning}
              </p>

              {/* What You Learn */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.6rem' }}>
                  What You Master
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {activeStage.learningOutcomes.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem' }}>
                      <CheckCircle2 size={16} color="var(--color-brand-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ color: 'var(--color-text-main)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Tools */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.6rem' }}>
                  Included Calibration Instruments
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {activeStage.practicalTools.map((tool, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.82rem',
                        backgroundColor: 'var(--color-bg-sand)',
                        color: 'var(--color-text-main)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border-light)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Next Step Navigation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Button variant="primary" href="/framework" withArrow>
                  Explore Detailed Framework
                </Button>
                <a
                  href={`/journal/${activeStage.relevantArticleSlug}`}
                  className="btn-link"
                  style={{ fontSize: '0.84rem' }}
                >
                  Read Relevant Essay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Standalone Enrollment & Credit Toward Annual Membership */}
      <section id="standalone-pricing" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="identy-container">
          <div
            style={{
              backgroundColor: 'var(--color-bg-sand-light)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
              }}
            >
              {/* Standalone Pricing Box */}
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--color-brand-gold-dark)',
                    fontSize: '0.74rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                  }}
                >
                  <ShieldCheck size={14} />
                  <span>Standalone Program</span>
                </div>

                <h3 style={{ fontSize: '1.9rem', color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>
                  Reinvention Framework™
                </h3>

                <p style={{ fontSize: '0.94rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Complete self-paced immersion in the 4-stage operating system with all workbooks, calibration diagnostic tools, and lifetime replay access.
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <span style={{ fontSize: '2.4rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
                      ${FRAMEWORK_PRICING.launchPrice}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginLeft: '0.35rem' }}>
                      launch price
                    </span>
                  </div>
                  <span style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', textDecoration: 'line-through' }}>
                    ${FRAMEWORK_PRICING.standardPrice} standard
                  </span>
                </div>

                <Button variant="primary" href="/contact?program=framework" withArrow style={{ width: '100%' }}>
                  Enroll In Standalone Program
                </Button>
              </div>

              {/* 100% Credit Guarantee */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-brand-gold-border)',
                }}
              >
                <div style={{ color: 'var(--color-brand-gold-dark)', fontWeight: 600, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                  The I-denty Credit Guarantee
                </div>

                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>
                  100% of Fee Credited Toward Membership
                </h4>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  If you complete the framework independently and later decide to upgrade to an Annual Membership, your entire ${FRAMEWORK_PRICING.launchPrice} payment is applied as an immediate credit.
                </p>

                {/* Calculation Example */}
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-sand)',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.86rem',
                    color: 'var(--color-text-main)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span>Annual Membership Dues:</span>
                    <span>${FRAMEWORK_PRICING.exampleAnnual}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-brand-gold-dark)', marginBottom: '0.5rem' }}>
                    <span>Framework Fee Credited:</span>
                    <span>- ${FRAMEWORK_PRICING.launchPrice}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, borderTop: '1px solid var(--color-border)', paddingTop: '0.5rem' }}>
                    <span>You Only Pay Difference:</span>
                    <span>${FRAMEWORK_PRICING.exampleDifference}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contextual Bridge: No Dead Ends */}
          <RelatedBridge
            eyebrow="Continue Your Journey"
            title="Ready for live guidance alongside the framework?"
            description="Explore our membership levels to receive live founder sessions, private community access, and curated luxury brand edits."
            primaryCta={{
              label: 'Explore Membership Levels',
              href: '/memberships',
            }}
            secondaryCta={{
              label: 'Read The Journal',
              href: '/journal',
            }}
          />
        </div>
      </section>
    </main>
  );
};
