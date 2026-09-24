import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { REINVENTION_STAGES } from '../../data/frameworkData';
import { CheckCircle2 } from 'lucide-react';

export const FrameworkTeaser: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('recalibrate');

  const springConfig: Transition = { type: "spring", stiffness: 100, damping: 20 };

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="identy-container">
        <SectionHeader
          eyebrow="Proprietary Operating System"
          title="The I-denty Reinvention Framework™"
          subtitle="Reinvention is no longer a life exception — it is a recurring life stage. Here is your 4-step sequence."
          centered
        />

        <div className="glass-panel" style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-sand-light)' }}>
          <style>{`
            .framework-accordion {
              display: flex;
              flex-direction: row;
              gap: 0.5rem;
              height: clamp(480px, 62vh, 600px);
              width: 100%;
              overflow: hidden;
            }
            .framework-card-content {
              display: flex;
              flex-direction: row;
              width: 100%;
              height: 100%;
            }
            .framework-card-image {
              flex: 1;
              position: relative;
              min-width: 300px;
            }
            @media (max-width: 900px) {
              .framework-accordion {
                flex-direction: column;
                height: auto;
                min-height: 560px;
              }
              .framework-card-content {
                flex-direction: column;
              }
              .framework-card-image {
                min-width: 100%;
                min-height: 200px;
              }
              .framework-inactive-container {
                flex-direction: row !important;
                gap: 1.5rem;
                justify-content: flex-start !important;
                padding: 1rem 1.5rem !important;
              }
              .framework-inactive-text {
                writing-mode: horizontal-tb !important;
                transform: none !important;
              }
              .framework-inactive-number {
                margin-bottom: 0 !important;
              }
            }
            .framework-inactive-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              padding: 1.5rem;
              background-color: #ffffff;
            }
            .framework-inactive-text {
              writing-mode: vertical-rl;
              text-orientation: mixed;
              transform: rotate(180deg);
              font-size: 1.35rem;
              font-weight: 600;
              letter-spacing: 0.05em;
              color: var(--color-text-main);
              white-space: nowrap;
            }
          `}</style>
          <div className="framework-accordion">
            {REINVENTION_STAGES.map((stage) => {
              const isSelected = stage.id === selectedStageId;
              return (
                <motion.div
                  key={stage.id}
                  layout
                  onClick={() => setSelectedStageId(stage.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedStageId(stage.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  transition={springConfig}
                  style={{
                    flex: isSelected ? 3 : 1,
                    position: 'relative',
                    cursor: 'pointer',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    backgroundColor: isSelected ? 'var(--color-bg-sand)' : '#ffffff',
                    border: isSelected
                      ? '2px solid var(--color-brand-gold)'
                      : '1px solid var(--color-border-light)',
                    boxShadow: isSelected ? 'var(--shadow-card)' : 'none',
                    display: 'flex',
                  }}
                >
                  <AnimatePresence mode="wait">
                    {isSelected ? (
                        <motion.div
                        key="active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="framework-card-content"
                      >
                        {/* Left Side: Image */}
                        <div className="framework-card-image" style={{ backgroundColor: 'var(--color-bg-sand)' }}>
                          <img
                            src={stage.imageSrc}
                            alt={stage.title}
                            loading="lazy"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block',
                            }}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
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
                            Stage {stage.stepNumber} Focus
                          </div>
                        </div>

                        {/* Right Side: Content */}
                        <div style={{ flex: 1.2, padding: '2.5rem', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="eyebrow"
                          >
                            Operating Pillar {stage.stepNumber}
                          </motion.span>
                          
                          <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', marginBottom: '0.75rem', color: 'var(--color-text-main)' }}
                          >
                            {stage.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '1.5rem' }}
                          >
                            {stage.meaning}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{ marginBottom: '1.8rem' }}
                          >
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
                              {stage.learningOutcomes.map((outcome, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.94rem' }}>
                                  <CheckCircle2 size={17} color="var(--color-brand-gold)" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
                                  <span style={{ color: 'var(--color-text-main)' }}>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button variant="primary" href="/framework" withArrow>
                              Explore The Complete Framework
                            </Button>
                            <Link
                              to={`/journal/${stage.relevantArticleSlug}`}
                              className="btn-link"
                              style={{ fontSize: '0.85rem' }}
                            >
                              Read Associated Essay
                            </Link>
                          </motion.div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="inactive"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="framework-inactive-container"
                      >
                        <div
                          style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: 'var(--color-text-muted)',
                            marginBottom: '1.5rem',
                          }}
                          className="framework-inactive-number"
                        >
                          {stage.stepNumber}
                        </div>
                        <div className="framework-inactive-text">
                          {stage.title}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
