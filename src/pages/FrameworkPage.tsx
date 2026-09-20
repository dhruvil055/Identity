import React, { useState } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { RelatedBridge } from '../components/common/RelatedBridge';
import { FRAMEWORK_PRICING } from '../data/frameworkData';
import { CheckCircle2, ShieldCheck, Sparkles, BookOpen, Layers } from 'lucide-react';

export const FrameworkPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('recalibrate');

  const stepsDetail = [
    {
      id: 'recalibrate',
      stepNum: 'Step 01',
      title: 'Identity Alignment',
      subtitle: 'Clarifying who you are beyond outdated expectations',
      description:
        'Before constructing new routines or outward markers, we conduct an intentional audit of internalized narratives, historical roles, and energy compromises. Identity precedes action.',
      outcome: 'A clear definition of your sovereign self and non-negotiable personal boundaries.',
      tools: ['The Identity Alignment Matrix', 'Historical Role Release Protocol', 'Core Sovereign Values Audit'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
      relatedEssay: 'The Anatomy of Recalibration: Why Transformation Begins in Silence',
      relatedSlug: 'the-anatomy-of-recalibration',
    },
    {
      id: 'redefine',
      stepNum: 'Step 02',
      title: 'Lifestyle Structure',
      subtitle: 'Architecting time, energy, and daily operating rhythms',
      description:
        'Transforming insights into sustainable living architecture. We eliminate daily decision fatigue by structuring your calendar, sleep protocols, financial vitality, and deep work blocks.',
      outcome: 'An operating system that insulates your peace and fuels your highest ambitions without burnout.',
      tools: ['The Lifestyle Architecture Blueprint', 'Energy Zoning System', 'Rhythm & Habit Protocol'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
      relatedEssay: 'Lifestyle as an Operating System: How High-Capacity Women Prevent Friction',
      relatedSlug: 'lifestyle-as-an-operating-system',
    },
    {
      id: 'express',
      stepNum: 'Step 03',
      title: 'Curated Environment & Presence',
      subtitle: 'Harmonizing spaces, wardrobe, and physical presence',
      description:
        'Outer curation accelerates inner conviction. Aligning your living spaces with light and sensory calm, while streamlining your wardrobe to communicate calm, unforced authority.',
      outcome: 'Physical spaces and an elevated wardrobe that reflect your standard of self-respect.',
      tools: ['The 18-Piece Capsule Architecture', 'Spatial Harmonization Diagnostic', 'Non-Verbal Presence Playbook'],
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
      relatedEssay: 'Wardrobe as Identity Architecture: Dressing for the Next Chapter',
      relatedSlug: 'wardrobe-as-identity-architecture',
    },
    {
      id: 'expand',
      stepNum: 'Step 04',
      title: 'Personal Expansion',
      subtitle: 'Connecting, collaborating, and sustaining momentum',
      description:
        'Sustained evolution requires aligned mirrors. We integrate you into high-trust peer circles, founder-led monthly integration, and strategic collaboration opportunities.',
      outcome: 'Unwavering forward momentum reinforced by a global circle of peer resonance.',
      tools: ['The Monthly Reinvention Session™', 'Peer Mastermind Directory', 'Strategic Partnerships Access'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
      relatedEssay: 'The Power of Aligned Circles: Escaping the Loneliness of Growth',
      relatedSlug: 'the-power-of-aligned-circles',
    },
  ];

  const currentStep = stepsDetail.find((s) => s.id === activeStep) || stepsDetail[0];

  return (
    <main className="site-main page-framework">
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
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
              "linear-gradient(180deg, rgba(22, 25, 30, 0.8) 0%, rgba(22, 25, 30, 0.95) 100%), url('https://i-denty.com/wp-content/themes/i-denty/assets/images/reinvention-hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.45,
          }}
        />

        <div className="identy-container" style={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumb items={[{ label: 'Reinvention', href: '/reinvention' }, { label: 'Reinvention Framework' }]} />

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
              The Proprietary Methodology
            </span>

            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.15,
                fontWeight: 400,
                marginBottom: '1.5rem',
              }}
            >
              The Reinvention Framework™
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.82)',
                fontWeight: 300,
                marginBottom: '2.5rem',
                maxWidth: '680px',
              }}
            >
              A four-pillar sequential operating system engineered for women navigating significant life transitions — turning ambiguity into structured, sovereign momentum.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="#framework-steps" variant="gold">
                Explore The 4 Steps
              </Button>
              <Button href="/memberships" variant="ghost-light">
                Explore Membership Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Sequence Overview */}
      <section
        id="framework-steps"
        style={{
          paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
          backgroundColor: '#fbfaf8',
        }}
      >
        <div className="identy-container">
          <SectionHeader
            align="center"
            eyebrow="Structured Evolution"
            title="The 4-Step Sequential Architecture"
            subtitle="Reinvention is not random. Each pillar builds upon the stability of the previous stage, ensuring lasting change rather than fleeting enthusiasm."
          />

          {/* Interactive Step Selector Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginTop: '3rem',
              marginBottom: '3.5rem',
            }}
          >
            {stepsDetail.map((step) => {
              const isSelected = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  style={{
                    textAlign: 'left',
                    padding: '1.4rem 1.5rem',
                    backgroundColor: isSelected ? '#16191e' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#16191e',
                    border: isSelected ? '1px solid #16191e' : '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 10px 24px rgba(0,0,0,0.08)' : 'none',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.6rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        color: isSelected ? 'var(--color-brand-gold)' : '#767d86',
                      }}
                    >
                      {step.stepNum}
                    </span>
                    <Layers size={15} color={isSelected ? 'var(--color-brand-gold)' : '#a1a7b0'} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      margin: 0,
                      color: isSelected ? '#ffffff' : '#16191e',
                    }}
                  >
                    {step.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: '2px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 16px 40px rgba(0,0,0,0.04)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(2.5rem, 5vw, 4.5rem)',
                alignItems: 'center',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'rgba(181, 156, 103, 0.12)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '2px',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Sparkles size={14} color="var(--color-brand-gold)" />
                  <span
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-brand-gold)',
                    }}
                  >
                    {currentStep.stepNum} • Active Focus
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.9rem, 3vw, 2.5rem)',
                    fontWeight: 400,
                    color: '#16191e',
                    lineHeight: 1.2,
                    marginBottom: '0.75rem',
                  }}
                >
                  {currentStep.title}
                </h2>

                <p
                  style={{
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    color: '#767d86',
                    marginBottom: '1.5rem',
                  }}
                >
                  {currentStep.subtitle}
                </p>

                <p
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.7,
                    color: '#40454d',
                    marginBottom: '2rem',
                  }}
                >
                  {currentStep.description}
                </p>

                {/* Measurable Outcome */}
                <div
                  style={{
                    backgroundColor: '#fbfaf8',
                    borderLeft: '3px solid var(--color-brand-gold)',
                    padding: '1.25rem 1.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      fontWeight: 600,
                      color: 'var(--color-brand-gold)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Defined Outcome
                  </span>
                  <p style={{ margin: 0, fontSize: '0.98rem', color: '#16191e', fontWeight: 500 }}>
                    {currentStep.outcome}
                  </p>
                </div>

                {/* Practical Tools & Diagnostic Worksheets */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      fontWeight: 600,
                      color: '#767d86',
                      marginBottom: '0.9rem',
                    }}
                  >
                    Included Diagnostic Instruments
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {currentStep.tools.map((tool, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <CheckCircle2 size={16} color="var(--color-brand-gold)" />
                        <span style={{ fontSize: '0.94rem', color: '#16191e' }}>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Essay Bridge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <BookOpen size={18} color="var(--color-brand-gold)" />
                  <div style={{ flex: 1 }}>
                    <span style={{ display: 'block', fontSize: '0.74rem', color: '#767d86' }}>
                      Recommended Supporting Reading:
                    </span>
                    <a
                      href={`/journal/${currentStep.relatedSlug}`}
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: '#16191e',
                        textDecoration: 'none',
                        borderBottom: '1px solid var(--color-brand-gold)',
                      }}
                    >
                      {currentStep.relatedEssay} &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Step Visual */}
              <div>
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/5',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    boxShadow: '0 16px 36px rgba(0,0,0,0.08)',
                  }}
                >
                  <img
                    src={currentStep.image}
                    alt={currentStep.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1.5rem',
                      left: '1.5rem',
                      right: '1.5rem',
                      backgroundColor: 'rgba(22, 25, 30, 0.88)',
                      backdropFilter: 'blur(8px)',
                      padding: '1.2rem',
                      color: '#ffffff',
                      borderRadius: '2px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.74rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                        color: 'var(--color-brand-gold)',
                        display: 'block',
                        marginBottom: '0.3rem',
                      }}
                    >
                      Operating Rhythm
                    </span>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
                      Revisitable at every future life transition inside your member portal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Policy & Pricing Transparency Section */}
      <section
        style={{
          paddingTop: 'clamp(4rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 6vw, 5.5rem)',
          backgroundColor: '#ffffff',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="identy-container" style={{ maxWidth: '980px' }}>
          <div
            style={{
              border: '1px solid rgba(181, 156, 103, 0.4)',
              backgroundColor: '#faf8f5',
              padding: 'clamp(2.5rem, 5vw, 3.5rem)',
              borderRadius: '2px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-brand-gold)',
                  marginBottom: '1rem',
                }}
              >
                <ShieldCheck size={18} />
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.16em', fontWeight: 600 }}>
                  100% Investment Protection
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)',
                  fontWeight: 400,
                  color: '#16191e',
                  lineHeight: 1.25,
                  marginBottom: '1rem',
                }}
              >
                Standalone Enrollment with Guaranteed Membership Credit
              </h2>

              <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: '#40454d', marginBottom: '1.5rem' }}>
                You may enroll in the complete Reinvention Framework™ as an independent diagnostic experience. When you subsequently choose to deepen your journey inside an Annual Membership, <strong>100% of your ${FRAMEWORK_PRICING.launchPrice} framework fee is credited directly toward your dues</strong>.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16191e', fontSize: '0.92rem' }}>
                <CheckCircle2 size={16} color="var(--color-brand-gold)" />
                <span>Example: The Collective Annual ($228) &minus; ${FRAMEWORK_PRICING.launchPrice} credit = <strong>${FRAMEWORK_PRICING.exampleDifference}</strong> remaining</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                padding: '2.2rem 2rem',
                textAlign: 'center',
                borderRadius: '2px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
              }}
            >
              <span
                style={{
                  fontSize: '0.74rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#767d86',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Standalone Framework Enrollment
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', fontWeight: 500, color: '#16191e' }}>
                  ${FRAMEWORK_PRICING.launchPrice}
                </span>
                <span style={{ fontSize: '1rem', color: '#888f98', textDecoration: 'line-through' }}>
                  ${FRAMEWORK_PRICING.standardPrice}
                </span>
              </div>
              <span style={{ display: 'block', fontSize: '0.82rem', color: '#767d86', marginBottom: '1.8rem' }}>
                One-time enrollment • Lifetime framework access
              </span>

              <Button
                href="/contact?intent=framework"
                variant="primary"
                style={{ width: '100%', justifyContent: 'center', marginBottom: '0.85rem' }}
              >
                Enroll In Framework
              </Button>

              <a
                href="/memberships"
                style={{
                  display: 'inline-block',
                  fontSize: '0.82rem',
                  color: '#16191e',
                  textDecoration: 'underline',
                }}
              >
                Or view full membership tiers &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* No Dead Ends Bridge */}
      <RelatedBridge
        currentContext="Reinvention Framework"
        eyebrow="Continue Your Journey"
        title="Explore How Framework Integrates With Membership"
        description="While the framework provides the sequential structure, membership provides ongoing founder guidance, monthly live reinforcement, and high-trust peer salons."
        primaryAction={{
          label: 'Compare Membership Tiers',
          href: '/memberships',
        }}
        secondaryAction={{
          label: 'Find Your Starting Point',
          href: '/finder',
        }}
      />
    </main>
  );
};
