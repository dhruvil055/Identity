import React, { useState } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { RelatedBridge } from '../components/common/RelatedBridge';
import {
  MEMBERSHIP_TIERS,
  MEMBERSHIP_COMPARISON,
  CONSULTATION_DETAILS,
} from '../data/membershipsData';
import {
  Check,
  X,
  ArrowRight,
  Clock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const MembershipPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'annual' | 'monthly'>('annual');
  const [openAccordionIdx, setOpenAccordionIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenAccordionIdx(openAccordionIdx === idx ? null : idx);
  };

  return (
    <main className="site-main page-membership">
      {/* 1. Hero Section */}
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
            opacity: 0.4,
          }}
        />

        <div className="identy-container" style={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumb items={[{ label: 'Membership' }]} />

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
              Different Stages • Different Levels of Access
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
              An Intentional Sanctuary for Evolution
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
              I-denty is not a social network or generic subscription. It is a curated ecosystem providing the structure, peer mirrors, and founder guidance required to step boldly into your next chapter.
            </p>

            {/* Billing Toggle */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '0.35rem',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <button
                type="button"
                onClick={() => setBillingPeriod('annual')}
                style={{
                  padding: '0.6rem 1.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderRadius: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: billingPeriod === 'annual' ? 'var(--color-brand-gold)' : 'transparent',
                  color: billingPeriod === 'annual' ? '#16191e' : '#ffffff',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>Annual Billing</span>
                <span
                  style={{
                    backgroundColor: billingPeriod === 'annual' ? '#16191e' : 'var(--color-brand-gold)',
                    color: billingPeriod === 'annual' ? '#ffffff' : '#16191e',
                    fontSize: '0.7rem',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '10px',
                    fontWeight: 700,
                  }}
                >
                  Save ~20%
                </span>
              </button>

              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                style={{
                  padding: '0.6rem 1.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderRadius: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: billingPeriod === 'monthly' ? 'var(--color-brand-gold)' : 'transparent',
                  color: billingPeriod === 'monthly' ? '#16191e' : '#ffffff',
                  transition: 'all 0.25s ease',
                }}
              >
                Monthly Flexible
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Membership Tiers Cards */}
      <section
        id="membership-tiers"
        style={{
          paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
          backgroundColor: '#faf8f5',
        }}
      >
        <div className="identy-container">
          <SectionHeader
            align="center"
            eyebrow="Tiers of Engagement"
            title="Select Your Level of Immersion"
            subtitle="Whether you seek self-paced structural clarity or intimate executive guidance, each tier is thoughtfully calibrated."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch',
              marginTop: '3.5rem',
            }}
          >
            {MEMBERSHIP_TIERS.map((tier) => {
              const isPopular = tier.isPopular;
              const displayPrice =
                billingPeriod === 'annual' ? tier.priceAnnualPerMonth : tier.priceMonthly;
              const billingTotalText =
                billingPeriod === 'annual'
                  ? `$${tier.priceAnnual} billed annually`
                  : 'Billed monthly, cancel anytime';

              return (
                <div
                  key={tier.id}
                  style={{
                    backgroundColor: isPopular ? '#16191e' : '#ffffff',
                    color: isPopular ? '#ffffff' : '#16191e',
                    border: isPopular
                      ? '1px solid var(--color-brand-gold)'
                      : '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '2px',
                    padding: 'clamp(2rem, 3vw, 2.75rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    boxShadow: isPopular
                      ? '0 20px 48px rgba(0,0,0,0.18)'
                      : '0 8px 24px rgba(0,0,0,0.04)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'var(--color-brand-gold)',
                        color: '#16191e',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        padding: '0.3rem 0.85rem',
                        borderRadius: '12px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tier.badge}
                    </div>
                  )}

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.75rem',
                        fontWeight: 400,
                        color: isPopular ? '#ffffff' : '#16191e',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {tier.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: isPopular ? 'rgba(255,255,255,0.7)' : '#767d86',
                        margin: 0,
                      }}
                    >
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div
                    style={{
                      paddingBottom: '1.5rem',
                      marginBottom: '1.5rem',
                      borderBottom: isPopular
                        ? '1px solid rgba(255,255,255,0.12)'
                        : '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                      <span
                        style={{
                          fontSize: '3rem',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 500,
                          lineHeight: 1,
                          color: isPopular ? 'var(--color-brand-gold)' : '#16191e',
                        }}
                      >
                        ${displayPrice}
                      </span>
                      <span
                        style={{
                          fontSize: '0.92rem',
                          color: isPopular ? 'rgba(255,255,255,0.65)' : '#767d86',
                        }}
                      >
                        / month
                      </span>
                    </div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        marginTop: '0.4rem',
                        color: isPopular ? 'rgba(255,255,255,0.6)' : '#8a919a',
                      }}
                    >
                      {billingTotalText}
                    </span>
                  </div>

                  {/* Ideal For */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.74rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        fontWeight: 600,
                        color: isPopular ? 'var(--color-brand-gold)' : '#767d86',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Designed For
                    </span>
                    <p
                      style={{
                        fontSize: '0.92rem',
                        lineHeight: 1.55,
                        margin: 0,
                        color: isPopular ? 'rgba(255,255,255,0.85)' : '#40454d',
                      }}
                    >
                      {tier.idealFor}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div style={{ flex: 1, marginBottom: '2rem' }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.74rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        fontWeight: 600,
                        color: isPopular ? 'var(--color-brand-gold)' : '#767d86',
                        marginBottom: '0.8rem',
                      }}
                    >
                      What's Included
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {tier.keyHighlights.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                          <Check
                            size={16}
                            color={isPopular ? 'var(--color-brand-gold)' : 'var(--color-brand-gold)'}
                            style={{ flexShrink: 0, marginTop: '0.15rem' }}
                          />
                          <span
                            style={{
                              fontSize: '0.88rem',
                              lineHeight: 1.5,
                              color: isPopular ? 'rgba(255,255,255,0.9)' : '#2b3038',
                            }}
                          >
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div>
                    <Button
                      href={`/contact?tier=${tier.id}&billing=${billingPeriod}`}
                      variant={isPopular ? 'gold' : 'primary'}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {tier.ctaText}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Visual Progression Path */}
      <section
        style={{
          paddingTop: 'clamp(4rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 6vw, 5.5rem)',
          backgroundColor: '#ffffff',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="identy-container">
          <SectionHeader
            align="center"
            eyebrow="The Evolutionary Ladder"
            title="A Fluid Path to Match Your Stage of Life"
            subtitle="You do not need to leap immediately into high-touch advisory. Enter the ecosystem where you are, and deepen as your transition evolves."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              marginTop: '3.5rem',
              position: 'relative',
            }}
          >
            {[
              {
                stage: '01. Discover',
                name: 'The Public Journal & Framework',
                desc: 'Explore the essays, assess the market gap, and complete the introductory diagnostic.',
                cta: 'Read Journal',
                href: '/journal',
              },
              {
                stage: '02. Foundational',
                name: 'The Collective',
                desc: 'Full self-directed immersion in the Reinvention Framework and digital community.',
                cta: '$19/mo with Annual',
                href: '#membership-tiers',
              },
              {
                stage: '03. Guided',
                name: 'The Inner Circle',
                desc: 'Live founder guidance, monthly live reinforcement, and facilitated peer breakouts.',
                cta: '$49/mo with Annual',
                href: '#membership-tiers',
              },
              {
                stage: '04. High-Touch',
                name: 'Private Member',
                desc: 'Confidential executive cohorts, international retreats, and bespoke consultation.',
                cta: 'Request Access',
                href: '/contact?tier=private-member',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#fbfaf8',
                  padding: '2rem 1.75rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: 'var(--color-brand-gold)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {step.stage}
                  </span>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: '#16191e',
                      margin: '0 0 0.75rem 0',
                    }}
                  >
                    {step.name}
                  </h4>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.55, color: '#767d86', margin: '0 0 1.5rem 0' }}>
                    {step.desc}
                  </p>
                </div>
                <a
                  href={step.href}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#16191e',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span>{step.cta}</span>
                  <ArrowRight size={14} color="var(--color-brand-gold)" />
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <span style={{ fontSize: '0.94rem', color: '#767d86', marginRight: '0.75rem' }}>
              Not certain which entry point aligns with your current transition?
            </span>
            <a
              href="/finder"
              style={{
                fontSize: '0.94rem',
                fontWeight: 600,
                color: '#16191e',
                textDecoration: 'underline',
              }}
            >
              Take the 2-Minute Diagnostic &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 4. Detailed Comparison Matrix */}
      <section
        id="comparison-matrix"
        style={{
          paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
          backgroundColor: '#faf8f5',
        }}
      >
        <div className="identy-container">
          <SectionHeader
            align="center"
            eyebrow="Side-by-Side Clarity"
            title="Comprehensive Feature Comparison"
            subtitle="Examine precisely what is included across each tier. No hidden tiers, no confusing asterisks."
          />

          {/* Desktop Table View */}
          <div
            className="membership-table-desktop"
            style={{
              marginTop: '3.5rem',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(0,0,0,0.03)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#16191e', color: '#ffffff' }}>
                  <th style={{ padding: '1.5rem', width: '38%', fontSize: '0.88rem', letterSpacing: '0.08em', fontWeight: 600 }}>
                    FEATURE / ACCESS AREA
                  </th>
                  <th style={{ padding: '1.5rem', width: '20%', textAlign: 'center', fontSize: '0.88rem', letterSpacing: '0.08em', fontWeight: 600 }}>
                    THE COLLECTIVE
                  </th>
                  <th style={{ padding: '1.5rem', width: '22%', textAlign: 'center', backgroundColor: '#21262d', color: 'var(--color-brand-gold)', fontSize: '0.88rem', letterSpacing: '0.08em', fontWeight: 600 }}>
                    THE INNER CIRCLE ★
                  </th>
                  <th style={{ padding: '1.5rem', width: '20%', textAlign: 'center', fontSize: '0.88rem', letterSpacing: '0.08em', fontWeight: 600 }}>
                    PRIVATE MEMBER
                  </th>
                </tr>
              </thead>
              <tbody>
                {MEMBERSHIP_COMPARISON.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    {/* Category Divider Header */}
                    <tr style={{ backgroundColor: '#f5f3ee', borderTop: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                      <td colSpan={4} style={{ padding: '0.9rem 1.5rem', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#16191e' }}>
                        {cat.categoryName}
                      </td>
                    </tr>

                    {/* Features in this category */}
                    {cat.features.map((row, rowIdx) => (
                      <tr
                        key={rowIdx}
                        style={{
                          borderBottom: '1px solid rgba(0,0,0,0.06)',
                          backgroundColor: rowIdx % 2 === 0 ? '#ffffff' : '#fcfbf9',
                        }}
                      >
                        <td style={{ padding: '1.1rem 1.5rem' }}>
                          <span style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, color: '#16191e' }}>
                            {row.name}
                          </span>
                          {row.description && (
                            <span style={{ display: 'block', fontSize: '0.8rem', color: '#767d86', marginTop: '0.2rem' }}>
                              {row.description}
                            </span>
                          )}
                        </td>

                        {/* Collective */}
                        <td style={{ padding: '1.1rem 1rem', textAlign: 'center' }}>
                          {typeof row.collective === 'boolean' ? (
                            row.collective ? (
                              <Check size={18} color="var(--color-brand-gold)" style={{ margin: '0 auto' }} />
                            ) : (
                              <X size={16} color="#c0c5cc" style={{ margin: '0 auto' }} />
                            )
                          ) : (
                            <span style={{ fontSize: '0.85rem', color: '#16191e', fontWeight: 500 }}>
                              {row.collective}
                            </span>
                          )}
                        </td>

                        {/* Inner Circle (Highlighted) */}
                        <td style={{ padding: '1.1rem 1rem', textAlign: 'center', backgroundColor: 'rgba(181, 156, 103, 0.05)' }}>
                          {typeof row.innerCircle === 'boolean' ? (
                            row.innerCircle ? (
                              <Check size={18} color="var(--color-brand-gold)" style={{ margin: '0 auto' }} />
                            ) : (
                              <X size={16} color="#c0c5cc" style={{ margin: '0 auto' }} />
                            )
                          ) : (
                            <span style={{ fontSize: '0.85rem', color: '#16191e', fontWeight: 600 }}>
                              {row.innerCircle}
                            </span>
                          )}
                        </td>

                        {/* Private Member */}
                        <td style={{ padding: '1.1rem 1rem', textAlign: 'center' }}>
                          {typeof row.privateMember === 'boolean' ? (
                            row.privateMember ? (
                              <Check size={18} color="var(--color-brand-gold)" style={{ margin: '0 auto' }} />
                            ) : (
                              <X size={16} color="#c0c5cc" style={{ margin: '0 auto' }} />
                            )
                          ) : (
                            <span style={{ fontSize: '0.85rem', color: '#16191e', fontWeight: 600 }}>
                              {row.privateMember}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion View */}
          <div className="membership-accordion-mobile" style={{ marginTop: '2rem', display: 'none' }}>
            {MEMBERSHIP_COMPARISON.map((cat, catIdx) => {
              const isOpen = openAccordionIdx === catIdx;
              return (
                <div
                  key={catIdx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '2px',
                    marginBottom: '0.85rem',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(catIdx)}
                    style={{
                      width: '100%',
                      padding: '1.1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: isOpen ? '#f5f3ee' : '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#16191e' }}>
                      {cat.categoryName}
                    </span>
                    {isOpen ? <ChevronUp size={18} color="#16191e" /> : <ChevronDown size={18} color="#767d86" />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      {cat.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          style={{
                            paddingBottom: '1rem',
                            marginBottom: '1rem',
                            borderBottom: fIdx < cat.features.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                          }}
                        >
                          <span style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, color: '#16191e', marginBottom: '0.2rem' }}>
                            {feature.name}
                          </span>
                          {feature.description && (
                            <span style={{ display: 'block', fontSize: '0.78rem', color: '#767d86', marginBottom: '0.65rem' }}>
                              {feature.description}
                            </span>
                          )}

                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', backgroundColor: '#faf8f5', padding: '0.65rem', borderRadius: '2px', fontSize: '0.78rem', textAlign: 'center' }}>
                            <div>
                              <span style={{ display: 'block', color: '#767d86', fontSize: '0.7rem', fontWeight: 600 }}>COLLECTIVE</span>
                              <span style={{ fontWeight: 600, color: '#16191e' }}>
                                {typeof feature.collective === 'boolean' ? (feature.collective ? '✓ Yes' : '— No') : feature.collective}
                              </span>
                            </div>
                            <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', borderRight: '1px solid rgba(0,0,0,0.08)' }}>
                              <span style={{ display: 'block', color: 'var(--color-brand-gold)', fontSize: '0.7rem', fontWeight: 700 }}>INNER CIRCLE</span>
                              <span style={{ fontWeight: 600, color: '#16191e' }}>
                                {typeof feature.innerCircle === 'boolean' ? (feature.innerCircle ? '✓ Yes' : '— No') : feature.innerCircle}
                              </span>
                            </div>
                            <div>
                              <span style={{ display: 'block', color: '#767d86', fontSize: '0.7rem', fontWeight: 600 }}>PRIVATE</span>
                              <span style={{ fontWeight: 600, color: '#16191e' }}>
                                {typeof feature.privateMember === 'boolean' ? (feature.privateMember ? '✓ Yes' : '— No') : feature.privateMember}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <style>{`
            @media (max-width: 860px) {
              .membership-table-desktop {
                display: none !important;
              }
              .membership-accordion-mobile {
                display: block !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* 5. Private 1:1 Strategic Consultation Spotlight */}
      <section
        id="private-consultation"
        style={{
          paddingTop: 'clamp(4.5rem, 7vw, 6rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6rem)',
          backgroundColor: '#16191e',
          color: '#ffffff',
        }}
      >
        <div className="identy-container" style={{ maxWidth: '980px' }}>
          <div
            style={{
              border: '1px solid rgba(181, 156, 103, 0.3)',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              borderRadius: '2px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.76rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  fontWeight: 600,
                  color: 'var(--color-brand-gold)',
                  marginBottom: '0.85rem',
                }}
              >
                {CONSULTATION_DETAILS.subtitle}
              </span>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  color: '#ffffff',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                }}
              >
                {CONSULTATION_DETAILS.title}
              </h2>

              <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.78)', marginBottom: '1.75rem' }}>
                For senior executives, board leaders, and women navigating complex, confidential life restructuring who require direct strategic counsel with Founder Eveliene.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {CONSULTATION_DETAILS.scope.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Check size={16} color="var(--color-brand-gold)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.9)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-brand-gold)', fontSize: '0.86rem' }}>
                <Clock size={16} />
                <span>{CONSULTATION_DETAILS.availability}</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#21262e',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '2.5rem 2rem',
                textAlign: 'center',
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
                  marginBottom: '0.5rem',
                }}
              >
                Bespoke Advisory Retainer
              </span>
              <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-heading)', color: '#ffffff', marginBottom: '0.5rem' }}>
                {CONSULTATION_DETAILS.rate}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginBottom: '2rem' }}>
                Requires an introductory discovery application to assess strategic alignment and scheduling availability.
              </p>

              <Button
                href="/contact?intent=advisory"
                variant="gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Inquire For Advisory Availability
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. No Dead Ends Bridge */}
      <RelatedBridge
        currentContext="Membership Tiers"
        eyebrow="Explore Further"
        title="Still Deciding Where To Begin?"
        description="Our 2-minute diagnostic matches your current life inflection point with the ideal tier, introductory framework pillar, and recommended reading."
        primaryAction={{
          label: 'Take Path Finder Diagnostic',
          href: '/finder',
        }}
        secondaryAction={{
          label: 'Explore Upcoming Live Sessions',
          href: '/experiences',
        }}
      />
    </main>
  );
};
