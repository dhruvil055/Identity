import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Compass } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from '../common/SocialIcons';
import { BRAND_CONFIG } from '../../data/brandData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 600);
  };

  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--color-border-light)',
        marginTop: 'auto',
      }}
    >
      {/* Upper Navigation & Newsletter Grid */}
      <div className="identy-container identy-container-wide section-padding-sm">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          {/* Col 1: Brand & Slogan */}
          <div style={{ maxWidth: '300px' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <img
                src={BRAND_CONFIG.logoUrl}
                alt="I-denty"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              The identity-led lifestyle ecosystem for high-capacity women reinventing their next chapter with clarity, structure, and elegance.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <a
                href={BRAND_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-main)',
                  transition: 'all 0.2s',
                }}
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={BRAND_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-main)',
                  transition: 'all 0.2s',
                }}
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={BRAND_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-main)',
                  transition: 'all 0.2s',
                }}
              >
                <FacebookIcon size={17} />
              </a>
              <a
                href={BRAND_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-main)',
                  transition: 'all 0.2s',
                }}
              >
                <YoutubeIcon size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Platform & Framework */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                marginBottom: '1.25rem',
              }}
            >
              The Ecosystem
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li>
                <Link to="/reinvention" style={{ color: 'var(--color-text-body)' }}>
                  Reinvention Journey
                </Link>
              </li>
              <li>
                <Link to="/framework" style={{ color: 'var(--color-text-body)' }}>
                  The 4-Stage Framework
                </Link>
              </li>
              <li>
                <Link to="/journal" style={{ color: 'var(--color-text-body)' }}>
                  Editorial Journal
                </Link>
              </li>
              <li>
                <Link to="/experiences" style={{ color: 'var(--color-text-body)' }}>
                  Sessions &amp; Masterclasses
                </Link>
              </li>
              <li>
                <Link to="/community" style={{ color: 'var(--color-text-body)' }}>
                  Private Community
                </Link>
              </li>
              <li>
                <Link to="/finder" style={{ color: 'var(--color-brand-gold-dark)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Compass size={14} />
                  <span>Path Finder Wizard</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Memberships */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                marginBottom: '1.25rem',
              }}
            >
              Memberships
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li>
                <Link to="/memberships#collective" style={{ color: 'var(--color-text-body)' }}>
                  The Collective ($19/mo)
                </Link>
              </li>
              <li>
                <Link to="/memberships#inner-circle" style={{ color: 'var(--color-text-body)' }}>
                  The Inner Circle ($49/mo)
                </Link>
              </li>
              <li>
                <Link to="/memberships#private-member" style={{ color: 'var(--color-text-body)' }}>
                  Private Member ($129/mo)
                </Link>
              </li>
              <li>
                <Link to="/memberships#comparison" style={{ color: 'var(--color-text-body)' }}>
                  Full Comparison Matrix
                </Link>
              </li>
              <li>
                <Link to="/memberships#consultation" style={{ color: 'var(--color-text-body)' }}>
                  Private 1:1 Consultation
                </Link>
              </li>
              <li>
                <Link to="/contact?tab=login" style={{ color: 'var(--color-text-body)' }}>
                  Member Portal Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: About & Legal */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                marginBottom: '1.25rem',
              }}
            >
              Organization
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li>
                <Link to="/about" style={{ color: 'var(--color-text-body)' }}>
                  Founder &amp; Philosophy
                </Link>
              </li>
              <li>
                <Link to="/about#partners" style={{ color: 'var(--color-text-body)' }}>
                  Brand Partnerships
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--color-text-body)' }}>
                  Contact &amp; Inquiries
                </Link>
              </li>
              <li>
                <Link to="/contact?tab=faq" style={{ color: 'var(--color-text-body)' }}>
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <a href="https://i-denty.com/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://i-denty.com/terms-conditions/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }}>
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div style={{ maxWidth: '340px' }}>
            <h4
              style={{
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                marginBottom: '0.5rem',
              }}
            >
              Join The Community
            </h4>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.5,
                marginBottom: '1.2rem',
              }}
            >
              Receive curated lifestyle essays, framework insights, and invitations to private monthly reinvention salons.
            </p>

            {isSubscribed ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-bg-sand)',
                  border: '1px solid var(--color-brand-gold)',
                  color: 'var(--color-text-main)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={18} color="var(--color-brand-gold)" />
                <span>Thank you. Welcome to I-denty.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-brand)',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ width: '100%', fontSize: '0.8rem', padding: '0.75rem 1rem' }}
                  >
                    <span>{isSubmitting ? 'Subscribing...' : 'Subscribe to Journal'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                  By subscribing, you agree to our privacy standards. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid var(--color-border-light)',
          backgroundColor: 'var(--color-bg-sand)',
          padding: '1.25rem 0',
        }}
      >
        <div
          className="identy-container identy-container-wide"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div>
            © I-denty 2026. All content rights reserved. Define your Identity. Elevate your presence.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link to="/reinvention" style={{ color: 'inherit' }}>Reinvention</Link>
            <Link to="/memberships" style={{ color: 'inherit' }}>Memberships</Link>
            <Link to="/journal" style={{ color: 'inherit' }}>Journal</Link>
            <Link to="/contact" style={{ color: 'inherit' }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
