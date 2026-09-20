import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../common/SectionHeader';
import { MARKET_GAP_ITEMS } from '../../data/brandData';
import { ArrowRight } from 'lucide-react';

export const MarketGap: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-sand)' }}>
      <div className="identy-container">
        <SectionHeader
          eyebrow="The Market Reality"
          title="The Market Gap"
          subtitle="Modern high-capacity women are evolving faster than the traditional spaces built to support them."
          centered
        />

        {/* 4 Life Transition Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {MARKET_GAP_ITEMS.map((item) => (
            <div
              key={item.id}
              className="card-editorial"
              style={{
                backgroundColor: '#ffffff',
                padding: '2.2rem 1.8rem',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-md)',
                position: 'relative',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-bg-sand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  padding: '10px',
                }}
              >
                <img
                  src={item.iconSrc}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  onError={(e) => {
                    // fallback if remote asset has an issue
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Title & Subtitle */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--color-text-main)' }}>
                {item.title}
              </h3>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-brand-gold-dark)',
                  fontWeight: 500,
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {item.subtitle}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  flex: 1,
                }}
              >
                {item.description}
              </p>

              {/* Contextual Link to Reinvention Stage */}
              <Link
                to={item.suggestedPath}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-brand-gold-dark)',
                  transition: 'gap 0.2s ease',
                }}
              >
                <span>Explore Solution</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Closing Narrative Banner */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem 2.5rem',
            boxShadow: 'var(--shadow-subtle)',
          }}
        >
          <p style={{ fontSize: '1.12rem', color: 'var(--color-text-main)', lineHeight: 1.65, fontWeight: 400 }}>
            High-capacity women in transition often lack a structured ecosystem that integrates identity development, lifestyle alignment, community support, and curated brand access in one place.{' '}
            <strong style={{ color: 'var(--color-brand-gold-dark)' }}>I-denty was built to fill that gap.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
