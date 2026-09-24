import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { ArrowRight, Compass, Users, BookOpen, Calendar, ShieldCheck } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

export const IdentyModel: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('reinvention');
  const sectionRef = useRef<HTMLElement>(null);
  const { inView } = useInView<HTMLElement>({ threshold: 0.1 });

  const nodes = [
    {
      id: 'reinvention',
      title: 'Reinvention',
      subtitle: 'The Proprietary Framework',
      description: 'The structured operating system guiding members through Recalibration, Redefinition, Expression, and Expansion.',
      role: 'FOUNDATION & OPERATING SYSTEM',
      link: '/reinvention',
      actionText: 'Explore Framework',
      icon: <Compass size={22} color="var(--color-brand-gold)" />,
    },
    {
      id: 'community',
      title: 'Community',
      subtitle: 'The Private Circle',
      description: 'A confidential, ad-free sanctuary connecting high-capacity women who normalize bold evolution and high standards.',
      role: 'PEER RESONANCE & SANCTUARY',
      link: '/community',
      actionText: 'Discover Community',
      icon: <Users size={22} color="var(--color-brand-gold)" />,
    },
    {
      id: 'journal',
      title: 'Journal',
      subtitle: 'Editorial Insights',
      description: 'Deep-dive essays and analytical frameworks covering identity alignment, lifestyle architecture, style, and personal power.',
      role: 'INTELLECTUAL CALIBRATION',
      link: '/journal',
      actionText: 'Read The Journal',
      icon: <BookOpen size={22} color="var(--color-brand-gold)" />,
    },
    {
      id: 'experiences',
      title: 'Experiences',
      subtitle: 'Sessions & Masterclasses',
      description: 'Founder-led Monthly Reinvention Sessions, live strategic integration, style masterclasses, and executive retreats.',
      role: 'LIVE GROWTH & RECALIBRATION',
      link: '/experiences',
      actionText: 'View Experiences',
      icon: <Calendar size={22} color="var(--color-brand-gold)" />,
    },
    {
      id: 'membership',
      title: 'Membership',
      subtitle: 'The Tiered Access Model',
      description: 'Three distinct tiers designed to meet you where you are: The Collective, The Inner Circle, and Private Member.',
      role: 'ACCESS & SUSTAINED TRANSFORMATION',
      link: '/memberships',
      actionText: 'Compare Memberships',
      icon: <ShieldCheck size={22} color="var(--color-brand-gold)" />,
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <section
      ref={sectionRef}
      className={`section-padding${inView ? ' is-in' : ''}`}
      style={{ backgroundColor: '#ffffff' }}
      aria-label="The I-denty Model"
    >
      <div className="identy-container">
        <div className="ii-rise" style={{ ['--ed' as string]: '0ms' }}>
          <SectionHeader
            eyebrow="The I-denty Model"
            title="An Integrated Editorial Ecosystem"
            subtitle="Unlike disparate programs, every element inside I-denty connects to reinforce your reinvention journey."
            centered
          />
        </div>

        {/* Editorial Interactive Tabs Strip */}
        <div
          role="tablist"
          aria-label="Ecosystem Elements"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: 'var(--section-block-gap)',
          }}
          onKeyDown={(e) => {
            const currentIndex = nodes.findIndex((n) => n.id === activeNodeId);
            let nextIndex = currentIndex;
            if (e.key === 'ArrowRight') {
              nextIndex = (currentIndex + 1) % nodes.length;
            } else if (e.key === 'ArrowLeft') {
              nextIndex = (currentIndex - 1 + nodes.length) % nodes.length;
            } else if (e.key === 'Home') {
              nextIndex = 0;
            } else if (e.key === 'End') {
              nextIndex = nodes.length - 1;
            } else {
              return;
            }
            e.preventDefault();
            const nextId = nodes[nextIndex].id;
            setActiveNodeId(nextId);
            document.getElementById(`tab-${nextId}`)?.focus();
          }}
        >
          {nodes.map((node) => {
            const isSelected = node.id === activeNodeId;
            return (
              <button
                key={node.id}
                id={`tab-${node.id}`}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${node.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveNodeId(node.id)}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.borderBottomColor = 'var(--color-brand-gold)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.opacity = '0.85';
                    e.currentTarget.style.borderBottomColor = 'var(--color-border-light)';
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1.4rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isSelected ? 'var(--color-bg-dark)' : 'var(--color-bg-sand)',
                  color: isSelected ? '#ffffff' : 'var(--color-text-main)',
                  border: isSelected ? '1px solid var(--color-bg-dark)' : '1px solid var(--color-border-light)',
                  borderBottom: isSelected ? '1px solid var(--color-bg-dark)' : '1px solid var(--color-border-light)',
                  opacity: isSelected ? 1 : 0.85,
                  fontSize: '0.85rem',
                  fontWeight: isSelected ? 600 : 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  minHeight: '48px',
                }}
              >
                <span>{node.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Node Detail Card with Spatial Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            id={`panel-${activeNode.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeNode.id}`}
            className="glass-panel"
            key={activeNode.id}
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -40, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              maxWidth: '960px',
              margin: '0 auto',
              position: 'relative',
              perspective: '1000px'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                alignItems: 'center',
              }}
            >
              {/* Left Detail */}
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-brand-gold-dark)',
                    fontSize: '0.74rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}
                >
                  {activeNode.icon}
                  <span>{activeNode.role}</span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
                  {activeNode.title}
                </h3>

                <div
                  style={{
                    fontSize: '1rem',
                    color: 'var(--color-brand-gold)',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-editorial)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {activeNode.subtitle}
                </div>

                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '2rem' }}>
                  {activeNode.description}
                </p>

                <Link to={activeNode.link} className="btn btn-primary">
                  <span>{activeNode.actionText}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Right: Ecosystem Connections Flow */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1.8rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-light)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <h4
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--color-text-muted)',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    borderBottom: '1px solid var(--color-border-light)',
                    paddingBottom: '0.5rem',
                  }}
                >
                  How It Connects To The Whole
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--color-brand-gold)', fontWeight: 600 }}>•</span>
                    <span><strong>Discovered</strong> through Journal insights</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--color-brand-gold)', fontWeight: 600 }}>•</span>
                    <span><strong>Structured</strong> through the Reinvention Framework</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--color-brand-gold)', fontWeight: 600 }}>•</span>
                    <span><strong>Reinforced</strong> in live Monthly Founder Sessions</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--color-brand-gold)', fontWeight: 600 }}>•</span>
                    <span><strong>Sustained</strong> within the private membership tier</span>
                  </div>
                </div>

                <div style={{ marginTop: '1.4rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
                  <Link
                    to="/finder"
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--color-brand-gold-dark)',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <Compass size={14} />
                    <span>Not sure where you fit? Take the Path Finder →</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IdentyModel;