import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { RelatedBridge } from '../components/common/RelatedBridge';
import { Sparkles } from 'lucide-react';

export const CommunityPage: React.FC = () => {
  return (
    <main className="site-main page-community">
      {/* 1. Hero */}
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
              "linear-gradient(180deg, rgba(22, 25, 30, 0.8) 0%, rgba(22, 25, 30, 0.95) 100%), url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
        />

        <div className="identy-container" style={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumb items={[{ label: 'Community' }]} />

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
              The Sanctuary of Peers
            </span>

            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.15,
                fontWeight: 400,
                marginBottom: '1.25rem',
              }}
            >
              An Intentional Circle for High-Capacity Women
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
              No noise. No performative networking. A private, confidential sanctuary where accomplished women navigating inflection points speak freely, calibrate standards, and expand together.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/memberships" variant="gold">
                Join As A Member
              </Button>
              <Button href="#community-principles" variant="ghost-light">
                Read Community Code
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What the Community Is & Who It Is For */}
      <section
        style={{
          paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
          backgroundColor: '#faf8f5',
        }}
      >
        <div className="identy-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center',
            }}
          >
            <div>
              <SectionHeader
                eyebrow="Curated Standards"
                title="Why Traditional Social Networks Fail During Major Transitions"
                subtitle="When you step away from an established title, marriage, or country, casual acquaintances often project their own discomfort onto your choices."
              />

              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#40454d', marginBottom: '1.75rem' }}>
                The I-denty Community was designed specifically to eliminate the isolation that inevitably accompanies high-standards growth. Here, ambitious career pivots, lifestyle edits, and self-sovereignty are not considered radical — they are normalized.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  {
                    title: 'Vetted Peer Caliber',
                    desc: 'Founders, corporate executives, creative directors, and professionals in purposeful transition.',
                  },
                  {
                    title: 'Confidential Digital Salons',
                    desc: 'Small, unrecorded breakout discussions addressing high-stakes personal and strategic questions.',
                  },
                  {
                    title: 'Ad-Free & Friction-Free',
                    desc: 'Hosted in a private dedicated portal without algorithms, advertisements, or superficial metrics.',
                  },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div
                      style={{
                        backgroundColor: 'rgba(181, 156, 103, 0.15)',
                        color: 'var(--color-brand-gold)',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '0.15rem',
                      }}
                    >
                      <Sparkles size={14} />
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 0.2rem 0', fontSize: '1rem', fontWeight: 600, color: '#16191e' }}>
                        {item.title}
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#767d86', lineHeight: 1.5 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Quote Card */}
            <div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '2px',
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.04)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontSize: '3rem',
                    fontFamily: 'serif',
                    color: 'var(--color-brand-gold)',
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  “
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontStyle: 'italic',
                    color: '#16191e',
                    lineHeight: 1.5,
                    marginBottom: '2rem',
                  }}
                >
                  Finding I-denty during my divorce and executive sabbatical was like finding water in a desert. To be among women who did not pity my transition, but treated it as my greatest strategic opportunity, shifted everything.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.25rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#16191e',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                    }}
                  >
                    MC
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, color: '#16191e' }}>
                      Inner Circle Member
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#767d86' }}>
                      Former VP of Strategy, Paris & Singapore
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Community Principles / Code */}
      <section
        id="community-principles"
        style={{
          paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
          backgroundColor: '#16191e',
          color: '#ffffff',
        }}
      >
        <div className="identy-container">
          <SectionHeader
            align="center"
            eyebrow="The Code of Conduct"
            title="Our Non-Negotiable Community Standard"
            subtitle="To safeguard psychological safety and elevate conversation, all members honor four foundational tenets."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '3.5rem',
            }}
          >
            {[
              {
                num: '01',
                title: 'Strict Confidentiality',
                desc: 'What is shared inside live salons and breakout sessions remains strictly protected. We operate under Chatham House Rule standards.',
              },
              {
                num: '02',
                title: 'No Unsolicited Pitching',
                desc: 'Commercial partnerships emerge organically from deep trust, not transactional sales pitches or self-promotion.',
              },
              {
                num: '03',
                title: 'Radical Self-Responsibility',
                desc: 'We support one another without emotional caretaking or unsolicited advice. Sovereignty begins with owning your choices.',
              },
              {
                num: '04',
                title: 'Elevated Generosity',
                desc: 'Members share resources, insights, and introductions freely, knowing that another woman’s elevation accelerates the collective.',
              },
            ].map((rule, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '2.2rem 2rem',
                  borderRadius: '2px',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-brand-gold)',
                    marginBottom: '1rem',
                  }}
                >
                  {rule.num}
                </span>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#ffffff', margin: '0 0 0.75rem 0' }}>
                  {rule.title}
                </h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.72)', margin: 0 }}>
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pathway to Membership */}
      <section
        style={{
          paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
          backgroundColor: '#ffffff',
        }}
      >
        <div className="identy-container" style={{ maxWidth: '840px', textAlign: 'center' }}>
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
            Access Through Membership
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              fontWeight: 400,
              color: '#16191e',
              lineHeight: 1.25,
              marginBottom: '1.25rem',
            }}
          >
            How To Enter The Circle
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#555b64', marginBottom: '2.5rem' }}>
            Community access is integrated directly into all three membership tiers — beginning at $19/month inside The Collective, and expanding into live founder-facilitated cohorts inside The Inner Circle.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/memberships" variant="primary">
              View Membership Tiers &rarr;
            </Button>
            <Button href="/finder" variant="secondary">
              Find Your Starting Point
            </Button>
          </div>
        </div>
      </section>

      {/* 5. No Dead Ends Bridge */}
      <RelatedBridge
        currentContext="Community Sanctuary"
        eyebrow="Explore Further"
        title="Experience The Community in Real-Time"
        description="Join our upcoming Monthly Reinvention Session™ to experience the caliber of dialogue and founder guidance firsthand."
        primaryAction={{
          label: 'View Upcoming Live Sessions',
          href: '/experiences',
        }}
        secondaryAction={{
          label: 'Read The Journal',
          href: '/journal',
        }}
      />
    </main>
  );
};
