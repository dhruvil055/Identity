import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/brandData';
import { useInView } from '../../hooks/useInView';
import './BrandStatement.css';

/**
 * Closing brand statement — editorial finale using the existing tagline
 * and hero value proposition, bridging the invitation banner and footer.
 */
export const BrandStatement: React.FC = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.25 });

  return (
    <section ref={ref} className={`bs section-padding${inView ? ' is-in' : ''}`} aria-label="I-denty brand statement">
      <div className="identy-container">
        <p className="bs-mark bs-rise" style={{ ['--ed' as string]: '0ms' }}>
          Define your Identity. <em>Elevate your presence.</em>
        </p>
        <div className="bs-rule bs-rise" style={{ ['--ed' as string]: '120ms' }} aria-hidden="true">
          <span>◈</span>
        </div>
        <p className="bs-line bs-rise" style={{ ['--ed' as string]: '200ms' }}>
          {BRAND_CONFIG.heroTitle} Begin with a single step — explore the
          ecosystem, or let the Path Finder place you.
        </p>
        <div className="bs-ctas bs-rise" style={{ ['--ed' as string]: '300ms' }}>
          <Link to="/memberships" className="btn btn-gold">
            Join the Membership <ArrowRight size={15} className="btn-icon-arrow" aria-hidden="true" />
          </Link>
          <Link to="/finder" className="btn btn-secondary">
            Find Your Path
          </Link>
        </div>
      </div>
    </section>
  );
};