import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Sparkles, ArrowRight, RotateCcw, BookOpen, Calendar, ShieldCheck } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '../../data/membershipsData';
import { JOURNAL_ARTICLES } from '../../data/journalData';
import { EXPERIENCES_DATA } from '../../data/experiencesData';

interface Question {
  id: number;
  question: string;
  context: string;
  options: {
    label: string;
    description: string;
    targetTier: 'collective' | 'inner-circle' | 'private-member';
    targetStage: 'recalibrate' | 'redefine' | 'express' | 'expand';
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'What brings you to I-denty at this moment?',
    context: 'Understanding your immediate inflection point helps us calibrate your roadmap.',
    options: [
      {
        label: "I'm navigating a significant life transition",
        description: 'Relationship shift, corporate departure, divorce, or relocation requiring space to re-anchor.',
        targetTier: 'collective',
        targetStage: 'recalibrate',
      },
      {
        label: "I'm ready for structured personal reinvention",
        description: 'My current life works, but I know I have outgrown my former identity and routines.',
        targetTier: 'inner-circle',
        targetStage: 'redefine',
      },
      {
        label: 'I want to elevate my presence, wardrobe, and lifestyle',
        description: 'Aligning my physical aesthetics and living spaces with my true authority and taste.',
        targetTier: 'inner-circle',
        targetStage: 'express',
      },
      {
        label: 'I am seeking high-caliber peer resonance & leadership expansion',
        description: 'Looking for confidential executive cohorts, strategic mentorship, and confidential circles.',
        targetTier: 'private-member',
        targetStage: 'expand',
      },
    ],
  },
  {
    id: 2,
    question: 'How do you prefer to absorb and apply new growth?',
    context: 'Every woman processes change differently. Select what honors your current energy.',
    options: [
      {
        label: 'Self-paced reflection with clear, structured frameworks',
        description: 'I value independent pacing, deep-dive reading, and personal introspection tools.',
        targetTier: 'collective',
        targetStage: 'recalibrate',
      },
      {
        label: 'Live monthly guidance and real-time interactive teaching',
        description: 'I thrive when I can listen to a trusted founder, ask questions, and attend monthly rituals.',
        targetTier: 'inner-circle',
        targetStage: 'redefine',
      },
      {
        label: 'Intimate small-group masterminds and bespoke advisory',
        description: 'I seek high-touch strategic counsel and confidential peers who operate at my level.',
        targetTier: 'private-member',
        targetStage: 'expand',
      },
    ],
  },
  {
    id: 3,
    question: 'Which area of your life feels most ready for refinement?',
    context: 'We calibrate our recommendations around your highest-leverage starting point.',
    options: [
      {
        label: 'Identity Alignment: Releasing outdated expectations and roles',
        description: 'Clarifying who you are when no one is asking you to perform.',
        targetTier: 'collective',
        targetStage: 'recalibrate',
      },
      {
        label: 'Lifestyle Structure: Daily rhythms, calendar boundaries, and energy',
        description: 'Designing an operating system that eliminates burnout and preserves focus.',
        targetTier: 'inner-circle',
        targetStage: 'redefine',
      },
      {
        label: 'Aesthetic Presence: Wardrobe, executive authority, and environment',
        description: 'Curating non-verbal presence so you walk into any room with calm power.',
        targetTier: 'inner-circle',
        targetStage: 'express',
      },
      {
        label: 'Strategic Horizon: Next-chapter ventures, leadership, and legacy',
        description: 'Architecting executive ventures, board advisory, or high-impact chapters.',
        targetTier: 'private-member',
        targetStage: 'expand',
      },
    ],
  },
];

export const PathFinderWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...answers];
    updated[currentStep] = optionIndex;
    setAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  // Determine recommendation based on weighted selections
  let recommendedTierId: 'collective' | 'inner-circle' | 'private-member' = 'inner-circle';
  let recommendedStageId: 'recalibrate' | 'redefine' | 'express' | 'expand' = 'recalibrate';

  if (answers.length > 0) {
    const counts = { collective: 0, 'inner-circle': 0, 'private-member': 0 };
    answers.forEach((ansIndex, qIndex) => {
      const q = QUESTIONS[qIndex];
      if (q && q.options[ansIndex]) {
        counts[q.options[ansIndex].targetTier]++;
        if (qIndex === 2) {
          recommendedStageId = q.options[ansIndex].targetStage;
        }
      }
    });

    if (counts['private-member'] >= 2) {
      recommendedTierId = 'private-member';
    } else if (counts.collective >= 2) {
      recommendedTierId = 'collective';
    } else {
      recommendedTierId = 'inner-circle';
    }
  }

  const recommendedTier =
    MEMBERSHIP_TIERS.find((t) => t.id === recommendedTierId) || MEMBERSHIP_TIERS[1];

  const recommendedArticle =
    JOURNAL_ARTICLES.find((a) => a.relatedFrameworkStage === recommendedStageId) ||
    JOURNAL_ARTICLES[0];

  const recommendedExperience =
    EXPERIENCES_DATA.find((e) => e.relatedMembershipTier === recommendedTierId) ||
    EXPERIENCES_DATA[0];

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        padding: 'clamp(2rem, 5vw, 3.8rem)',
        boxShadow: 'var(--shadow-card)',
        maxWidth: '840px',
        margin: '0 auto',
      }}
    >
      {!isCompleted ? (
        <div>
          {/* Progress Bar & Step Indicator */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontWeight: 600,
                color: 'var(--color-brand-gold-dark)',
                marginBottom: '0.8rem',
              }}
            >
              <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
              <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% Completed</span>
            </div>

            <div
              role="progressbar"
              aria-label="Assessment progress"
              aria-valuemin={0}
              aria-valuemax={QUESTIONS.length}
              aria-valuenow={currentStep + 1}
              aria-valuetext={`Question ${currentStep + 1} of ${QUESTIONS.length}`}
              style={{
                height: '4px',
                width: '100%',
                backgroundColor: 'var(--color-bg-sand)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${((currentStep + 1) / QUESTIONS.length) * 100}%`,
                  backgroundColor: 'var(--color-brand-gold)',
                  transition: 'width 0.4s ease',
                }}
              />
            </div>
          </div>

          {/* Question Title */}
          <h3
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 1.95rem)',
              color: 'var(--color-text-main)',
              marginBottom: '0.5rem',
              fontWeight: 500,
            }}
          >
            {QUESTIONS[currentStep].question}
          </h3>

          <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            {QUESTIONS[currentStep].context}
          </p>

          {/* Options */}
          <div role="radiogroup" aria-label={QUESTIONS[currentStep].question} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2rem' }}>
            {QUESTIONS[currentStep].options.map((option, idx) => {
              const isSelected = answers[currentStep] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className="card-editorial"
                  role="radio"
                  aria-checked={isSelected}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem 1.4rem',
                    borderRadius: 'var(--radius-sm)',
                    border: isSelected
                      ? '2px solid var(--color-brand-gold)'
                      : '1px solid var(--color-border)',
                    backgroundColor: isSelected ? 'var(--color-bg-sand-light)' : '#ffffff',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      border: isSelected
                        ? '6px solid var(--color-brand-gold)'
                        : '2px solid var(--color-border)',
                      marginTop: '2px',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: '1.02rem',
                        fontWeight: 600,
                        color: 'var(--color-text-main)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {option.label}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                      {option.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              style={{
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 500,
              }}
            >
              ← Back to previous question
            </button>
          )}
        </div>
      ) : (
        /* Results View */
        <div className="animate-fade-in">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: 'var(--color-brand-gold-dark)',
              fontSize: '0.78rem',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              fontWeight: 600,
              marginBottom: '0.5rem',
            }}
          >
            <Sparkles size={14} />
            <span>Diagnostic Synthesis</span>
          </div>

          <h3
            style={{
              fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
              color: 'var(--color-text-main)',
              marginBottom: '0.75rem',
              fontWeight: 500,
            }}
          >
            Your Curated Starting Point
          </h3>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '2.5rem' }}>
            Based on your responses, we have mapped your primary focus to{' '}
            <strong style={{ color: 'var(--color-brand-gold-dark)', textTransform: 'capitalize' }}>
              Stage: {recommendedStageId}
            </strong>
            . Here is the recommended combination within the I-denty ecosystem:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {/* Recommended Tier */}
            <div
              style={{
                backgroundColor: 'var(--color-bg-sand)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.75rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  color: 'var(--color-brand-gold-dark)',
                  marginBottom: '0.5rem',
                }}
              >
                <ShieldCheck size={14} />
                <span>Recommended Membership</span>
              </div>
              <h4 style={{ fontSize: '1.35rem', color: 'var(--color-text-main)', marginBottom: '0.35rem' }}>
                {recommendedTier.name}
              </h4>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-brand-gold)', fontWeight: 600, marginBottom: '0.85rem' }}>
                ${recommendedTier.priceAnnualPerMonth}/mo (${recommendedTier.priceAnnual}/yr)
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                {recommendedTier.description}
              </p>
              <Button variant="primary" href={`/memberships#${recommendedTier.id}`} withArrow style={{ width: '100%', fontSize: '0.78rem' }}>
                Explore {recommendedTier.name}
              </Button>
            </div>

            {/* Recommended Content & Session */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Article Recommendation */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.4rem' }}>
                  <BookOpen size={13} color="var(--color-brand-gold)" aria-hidden="true" />
                  <span>Recommended Reading</span>
                </div>
                <h5 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.35rem' }}>
                  {recommendedArticle.title}
                </h5>
                <a
                  href={`/journal/${recommendedArticle.slug}`}
                  style={{ fontSize: '0.82rem', color: 'var(--color-brand-gold-dark)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  <span>Read Essay ({recommendedArticle.readTime})</span>
                  <ArrowRight size={12} aria-hidden="true" />
                </a>
              </div>

              {/* Experience Recommendation */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.4rem' }}>
                  <Calendar size={13} color="var(--color-brand-gold)" aria-hidden="true" />
                  <span>Upcoming Relevant Session</span>
                </div>
                <h5 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.35rem' }}>
                  {recommendedExperience.title}
                </h5>
                <a
                  href={`/experiences#${recommendedExperience.id}`}
                  style={{ fontSize: '0.82rem', color: 'var(--color-brand-gold-dark)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  <span>View Details &amp; RSVP</span>
                  <ArrowRight size={12} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border-light)',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <button
              onClick={handleReset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.84rem',
                color: 'var(--color-text-muted)',
                fontWeight: 500,
              }}
            >
              <RotateCcw size={14} aria-hidden="true" />
              <span>Retake Assessment</span>
            </button>

            <Button variant="gold" href="/reinvention" withArrow>
              Explore Your Path Inside The Ecosystem
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
