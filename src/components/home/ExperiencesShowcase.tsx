import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { EXPERIENCES_DATA } from '../../data/experiencesData';
import { useInView } from '../../hooks/useInView';
import './ExperiencesShowcase.css';

/**
 * Experiences showcase — asymmetric editorial layout from real
 * EXPERIENCES_DATA: one feature session + two stacked sessions.
 * CLS-safe image boxes, lazy below-fold imagery, honest content only.
 */
export const ExperiencesShowcase: React.FC = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });
  const [feature, ...rest] = EXPERIENCES_DATA.slice(0, 3);

  if (!feature) return null;

  return (
    <section ref={ref} className={`es section-padding${inView ? ' is-in' : ''}`} aria-label="I-denty experiences">
      <div className="identy-container">
        <div className="es-rise" style={{ ['--ed' as string]: '0ms' }}>
          <SectionHeader
            eyebrow="Lifestyle & Experiences"
            title="Live the Reinvention"
            subtitle="Founder-led sessions, masterclasses, and salons — where insight becomes embodiment."
            centered
          />
        </div>

        <div className="es-grid">
          <Link
            to={`/experiences#${feature.id}`}
            className="es-feature es-rise"
            style={{ ['--ed' as string]: '120ms' }}
            aria-label={`${feature.title} — view experience`}
          >
            <img
              src={feature.heroImage}
              alt=""
              loading="lazy"
              onLoad={(e) => e.currentTarget.classList.add('is-loaded')}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="es-feature-shade" aria-hidden="true" />
            <div className="es-feature-body">
              <span className="es-tag">
                {feature.type} · {feature.format}
              </span>
              <h3>{feature.title}</h3>
              <p className="es-meta">
                {feature.dateFormatted} · {feature.duration} · Hosted by {feature.host}
              </p>
              <span className="es-cta">
                Reserve Your Place <ArrowRight size={14} aria-hidden="true" />
              </span>
            </div>
          </Link>

          <div className="es-side">
            {rest.map((item, i) => (
              <Link
                key={item.id}
                to={`/experiences#${item.id}`}
                className="es-row-card es-rise"
                style={{ ['--ed' as string]: `${200 + i * 80}ms` }}
                aria-label={`${item.title} — view experience`}
              >
                <span className="es-row-img" aria-hidden="true">
                  <img
                    src={item.heroImage}
                    alt=""
                    loading="lazy"
                    onLoad={(e) => e.currentTarget.classList.add('is-loaded')}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </span>
                <span className="es-row-body">
                  <span className="es-tag" style={{ color: 'var(--color-brand-gold-dark)' }}>
                    {item.type}
                  </span>
                  <h3>{item.title}</h3>
                  <p className="es-meta">
                    {item.dateFormatted} · {item.duration}
                  </p>
                  <span className="es-cta" style={{ color: 'var(--color-brand-gold-dark)' }}>
                    View Details <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="es-foot es-rise" style={{ ['--ed' as string]: '360ms' }}>
          <Link to="/experiences" className="btn btn-secondary">
            View All Experiences <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};