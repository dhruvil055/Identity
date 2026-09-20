import React, { useState } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { RelatedBridge } from '../components/common/RelatedBridge';
import { EXPERIENCES_DATA, type ExperienceItem } from '../data/experiencesData';
import { Calendar, MapPin, CheckCircle2, X, Sparkles } from 'lucide-react';

export const ExperiencesPage: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [activeModalExperience, setActiveModalExperience] = useState<ExperienceItem | null>(null);

  const formats = ['All', 'Live Digital', 'In-Person Event'];

  const filteredExperiences = EXPERIENCES_DATA.filter((exp) => {
    if (selectedFormat === 'All') return true;
    return exp.format === selectedFormat;
  });

  return (
    <main className="site-main page-experiences">
      {/* Hero */}
      <section
        style={{
          paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
          paddingBottom: 'clamp(4rem, 6vw, 5.5rem)',
          backgroundColor: '#16191e',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div className="identy-container">
          <Breadcrumb items={[{ label: 'Experiences & Workshops' }]} />

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
              Live Guidance & Curated Immersions
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
              The Monthly Reinvention Sessions & Salons
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.82)',
                fontWeight: 300,
                margin: 0,
              }}
            >
              Real-time strategic growth, guided integration with Founder Eveliene, and intimate international salons designed to maintain forward momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Format Filter Bar */}
      <section
        style={{
          paddingTop: '2rem',
          paddingBottom: '2rem',
          backgroundColor: '#faf8f5',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="identy-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#767d86', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Format Filter:
            </span>
            {formats.map((fmt) => {
              const isSelected = selectedFormat === fmt;
              return (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  style={{
                    padding: '0.45rem 1.15rem',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    border: isSelected ? '1px solid #16191e' : '1px solid rgba(0,0,0,0.1)',
                    backgroundColor: isSelected ? '#16191e' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#40454d',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {fmt}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section
        style={{
          paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
          backgroundColor: '#ffffff',
        }}
      >
        <div className="identy-container">
          <SectionHeader
            align="left"
            eyebrow="Curated Calendar"
            title="Upcoming Masterclasses & Strategic Sessions"
            subtitle="Explore our upcoming founder-led gatherings. All live sessions are recorded and archived for on-demand member access."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '2.5rem',
              marginTop: '3.5rem',
            }}
          >
            {filteredExperiences.map((exp) => (
              <div
                key={exp.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img
                    src={exp.heroImage}
                    alt={exp.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: '#16191e',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '2px',
                    }}
                  >
                    {exp.type}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      color: '#16191e',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '2px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <MapPin size={13} color="var(--color-brand-gold)" />
                    <span>{exp.format}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Date & Time */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.82rem',
                      color: 'var(--color-brand-gold)',
                      fontWeight: 600,
                      marginBottom: '0.85rem',
                    }}
                  >
                    <Calendar size={14} />
                    <span>{exp.dateFormatted}</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem',
                      fontWeight: 400,
                      color: '#16191e',
                      lineHeight: 1.3,
                      marginBottom: '0.85rem',
                    }}
                  >
                    {exp.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      lineHeight: 1.6,
                      color: '#555b64',
                      marginBottom: '1.5rem',
                      flex: 1,
                    }}
                  >
                    {exp.shortDescription}
                  </p>

                  {/* Who it's for */}
                  <div
                    style={{
                      backgroundColor: '#faf8f5',
                      padding: '0.9rem 1.1rem',
                      borderRadius: '2px',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        fontWeight: 600,
                        color: '#767d86',
                        marginBottom: '0.25rem',
                      }}
                    >
                      Audience Focus
                    </span>
                    <p style={{ margin: 0, fontSize: '0.86rem', color: '#16191e', lineHeight: 1.45 }}>
                      {exp.whoItIsFor}
                    </p>
                  </div>

                  {/* Action CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <span style={{ fontSize: '0.78rem', color: '#767d86', fontWeight: 500 }}>
                      Access: {exp.memberAccessLevel}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveModalExperience(exp)}
                      className="btn btn-primary"
                      style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem' }}
                    >
                      Explore Experience &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Detail Modal */}
      {activeModalExperience && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(22, 25, 30, 0.8)',
            backdropFilter: 'blur(6px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setActiveModalExperience(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '2px',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveModalExperience(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(0,0,0,0.06)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <X size={18} color="#16191e" />
            </button>

            {/* Modal Hero */}
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
              <img
                src={activeModalExperience.heroImage}
                alt={activeModalExperience.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(22,25,30,0.85) 100%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '2rem', right: '2rem' }}>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-brand-gold)', fontWeight: 600 }}>
                  {activeModalExperience.type} • {activeModalExperience.format}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1.5rem', margin: '0.35rem 0 0 0' }}>
                  {activeModalExperience.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: '1.5rem' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#767d86', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Date & Time</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#16191e' }}>{activeModalExperience.dateFormatted}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#767d86', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Duration</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#16191e' }}>{activeModalExperience.duration}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#767d86', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Session Host</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#16191e' }}>{activeModalExperience.host}</span>
                </div>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#16191e', marginBottom: '0.5rem' }}>
                  Overview & Strategic Intent
                </h4>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: '#40454d', margin: 0 }}>
                  {activeModalExperience.shortDescription}
                </p>
              </div>

              {/* Concrete Outcomes */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#16191e', marginBottom: '0.75rem' }}>
                  What You Will Gain
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {activeModalExperience.outcomes.map((out, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="var(--color-brand-gold)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span style={{ fontSize: '0.9rem', color: '#2b3038' }}>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Step / Conversion Bridge */}
              <div
                style={{
                  backgroundColor: '#faf8f5',
                  padding: '1.5rem',
                  borderRadius: '2px',
                  border: '1px solid rgba(181, 156, 103, 0.3)',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Sparkles size={16} color="var(--color-brand-gold)" />
                  <span style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--color-brand-gold)' }}>
                    Membership Privileges
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#40454d', lineHeight: 1.5, margin: '0 0 1rem 0' }}>
                  This experience is included within <strong>The {activeModalExperience.relatedMembershipTier === 'inner-circle' ? 'Inner Circle' : activeModalExperience.relatedMembershipTier === 'private-member' ? 'Private Member' : 'Collective'}</strong> tier, complete with replay archive and structured framework integration.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Button href={`/contact?intent=experience&session=${activeModalExperience.id}`} variant="primary" style={{ fontSize: '0.82rem' }}>
                    RSVP For Session
                  </Button>
                  <Button href="/memberships" variant="secondary" style={{ fontSize: '0.82rem' }}>
                    Join Membership To Access All Sessions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Dead Ends Bridge */}
      <RelatedBridge
        currentContext="Experiences & Workshops"
        eyebrow="Continue Your Journey"
        title="Looking For The Sequential Underlying Method?"
        description="Every workshop and live session builds directly on the principles established in the 4-pillar Reinvention Framework™."
        primaryAction={{
          label: 'Explore Reinvention Framework',
          href: '/framework',
        }}
        secondaryAction={{
          label: 'Compare Membership Tiers',
          href: '/memberships',
        }}
      />
    </main>
  );
};
