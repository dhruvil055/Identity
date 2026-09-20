import React from 'react';
import { Button } from './Button';
import { Sparkles, Compass } from 'lucide-react';

interface CtaItem {
  label: string;
  href: string;
}

interface RelatedBridgeProps {
  currentContext?: string;
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: CtaItem;
  secondaryCta?: CtaItem;
  primaryAction?: CtaItem;
  secondaryAction?: CtaItem;
  pathFinderHint?: boolean;
  className?: string;
}

export const RelatedBridge: React.FC<RelatedBridgeProps> = ({
  currentContext,
  eyebrow = 'Your Next Step in the Ecosystem',
  title,
  description,
  primaryCta,
  secondaryCta,
  primaryAction,
  secondaryAction,
  pathFinderHint = true,
  className = '',
}) => {
  const pAction = primaryAction || primaryCta || { label: 'Explore Next Step', href: '/memberships' };
  const sAction = secondaryAction || secondaryCta;

  return (
    <div
      className={`related-bridge-card ${className}`}
      style={{
        background: 'linear-gradient(145deg, #16191e 0%, #101216 100%)',
        border: '1px solid rgba(181, 156, 103, 0.3)',
        borderRadius: 'var(--radius-md)',
        padding: 'clamp(2.5rem, 5vw, 3.8rem)',
        color: '#ffffff',
        marginTop: 'clamp(3.5rem, 6vw, 5.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '220px',
          height: '220px',
          background: 'radial-gradient(circle, rgba(181, 156, 103, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '780px', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--color-brand-gold)',
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            fontWeight: 600,
            marginBottom: '0.85rem',
          }}
        >
          <Sparkles size={14} />
          <span>{currentContext ? `${currentContext} • ${eyebrow}` : eyebrow}</span>
        </div>

        <h3
          style={{
            color: '#ffffff',
            fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
            fontWeight: 500,
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: 'var(--color-text-light-muted)',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            marginBottom: '2rem',
          }}
        >
          {description}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Button variant="gold" href={pAction.href} withArrow>
            {pAction.label}
          </Button>

          {sAction && (
            <Button variant="ghost-light" href={sAction.href}>
              {sAction.label}
            </Button>
          )}

          {pathFinderHint && (
            <div
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                color: 'var(--color-text-light-muted)',
              }}
            >
              <Compass size={14} color="var(--color-brand-gold)" />
              <span>Unsure where to start?</span>
              <a
                href="/finder"
                style={{
                  color: 'var(--color-brand-gold)',
                  textDecoration: 'underline',
                  fontWeight: 500,
                  marginLeft: '0.2rem',
                }}
              >
                Take the 2-min Path Finder
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
