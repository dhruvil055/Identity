import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { REINVENTION_STAGES } from '../../data/frameworkData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const FrameworkTeaser: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('recalibrate');

  const activeStage =
    REINVENTION_STAGES.find((s) => s.id === selectedStageId) || REINVENTION_STAGES[0];

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="identy-container">
        <SectionHeader
          eyebrow="Proprietary Operating System"
          title="The I-denty Reinvention Framework™"
          subtitle="Reinvention is no longer a life exception — it is a recurring life stage. Here is your 4-step sequence."
          centered
        />

        {/* 4 Step Cards Progression */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {REINVENTION_STAGES.map((stage) => {
            const isSelected = stage.id === selectedStageId;
            return (
              <div
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className="card-editorial"
                style={{
                  cursor: 'pointer',
                  border: isSelected
                    ? '2px solid var(--color-brand-gold)'
                    : '1px solid var(--color-border-light)',
                  backgroundColor: isSelected ? 'var(--color-bg-sand-light)' : '#ffffff',
                  boxShadow: isSelected ? 'var(--shadow-card)' : 'none',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.8rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.25s ease',
                }}
              >
                {/* Step Number */}
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: isSelected ? 'var(--color-brand-gold-dark)' : 'var(--color-text-muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Step {stage.stepNumber}
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    marginBottom: '0.5rem',
                    color: 'var(--color-text-main)',
                  }}
                >
                  {stage.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-text-body)',
                    lineHeight: 1.55,
                    marginBottom: '1.25rem',
                    flex: 1,
                  }}
                >
                  {stage.shortDescription}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: isSelected ? 'var(--color-brand-gold-dark)' : 'var(--color-text-muted)',
                  }}
                >
                  <span>{isSelected ? 'Currently Viewing' : 'View Stage'}</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Stage Interactive Deep Dive */}
        <div
          className="animate-fade-in"
          key={activeStage.id}
          style={{
            backgroundColor: 'var(--color-bg-sand)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          }}
        >
          {/* Stage Image */}
          <div style={{ position: 'relative', minHeight: '340px' }}>
            <img
              src={activeStage.imageSrc}
              alt={activeStage.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '24px',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              Stage {activeStage.stepNumber} Focus
            </div>
          </div>

          {/* Stage Text & Learning Outcomes */}
          <div style={{ padding: 'clamp(2rem, 4vw, 3.2rem)' }}>
            <span className="eyebrow">Operating Pillar {activeStage.stepNumber}</span>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', marginBottom: '0.75rem', color: 'var(--color-text-main)' }}>
              {activeStage.title}
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {activeStage.meaning}
            </p>

            <div style={{ marginBottom: '1.8rem' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  color: 'var(--color-text-muted)',
                  marginBottom: '0.75rem',
                }}
              >
                Key Transformation Outcomes
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {activeStage.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.94rem' }}>
                    <CheckCircle2 size={17} color="var(--color-brand-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-text-main)' }}>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
              <Button variant="primary" href="/framework" withArrow>
                Explore The Complete Framework
              </Button>
              <Link
                to={`/journal/${activeStage.relevantArticleSlug}`}
                className="btn-link"
                style={{ fontSize: '0.85rem' }}
              >
                Read Associated Essay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
