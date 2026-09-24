import React from 'react';
import { MEMBERSHIP_TIERS } from '../../data/membershipsData';
import { Button } from '../common/Button';
import { ChevronDown } from 'lucide-react';

export const MembershipAccordion: React.FC = () => {
  return (
    <div
      className="membership-accordion-container"
      style={{ display: 'none' }}
    >
      <style>{`
        @media (max-width: 768px) {
          .membership-accordion-container {
            display: block !important;
            width: 100%;
            margin-top: 2rem;
          }
        }
        .membership-details {
          background: #fff;
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .membership-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          min-height: 56px;
          cursor: pointer;
          list-style: none;
          font-family: var(--font-brand);
          gap: 0.75rem;
        }
        .membership-summary::-webkit-details-marker {
          display: none;
        }
        .membership-details[open] .accordion-chevron {
          transform: rotate(180deg);
        }
        .membership-detail-content {
          padding: 0 1.25rem 1.25rem;
          font-family: var(--font-brand);
        }
        .membership-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
          font-size: 0.92rem;
          line-height: 1.5;
          color: var(--color-text-body);
        }
        .membership-feature-check {
          color: var(--color-brand-gold);
          flex-shrink: 0;
          margin-top: 0.1em;
        }
        .most-chosen-badge {
          font-size: 0.7rem;
          background: var(--color-brand-gold);
          color: #fff;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 0.35rem;
          display: inline-block;
        }
      `}</style>

      {MEMBERSHIP_TIERS.map((tier) => (
        <details key={tier.id} className="membership-details">
          <summary className="membership-summary">
            <div style={{ flex: 1 }}>
              {tier.isPopular && (
                <div className="most-chosen-badge">Most Chosen</div>
              )}
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 500 }}>
                {tier.name}
              </h3>
              <p style={{
                margin: '0.25rem 0 0',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
              }}>
                {tier.tagline} · ${tier.priceAnnualPerMonth}/mo
              </p>
            </div>
            <ChevronDown className="accordion-chevron" size={18} />
          </summary>
          <div className="membership-detail-content">
            <p style={{
              fontSize: '0.88rem',
              marginBottom: '1rem',
              color: 'var(--color-text-body)',
            }}>
              <strong>Ideal for:</strong> {tier.idealFor}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {tier.keyHighlights.map((feature, idx) => (
                <li key={idx} className="membership-feature-item">
                  <span className="membership-feature-check" aria-hidden="true">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={tier.isPopular ? 'gold' : 'secondary'}
              href={tier.ctaHref}
              withArrow
            >
              {tier.ctaText}
            </Button>
          </div>
        </details>
      ))}
    </div>
  );
};
