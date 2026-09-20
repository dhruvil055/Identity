import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Search, Compass, User, ArrowRight } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from '../common/SocialIcons';
import { BRAND_CONFIG } from '../../data/brandData';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close drawer on route change
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  if (!isOpen) return null;

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Reinvention Journey', href: '/reinvention' },
    { label: 'The 4-Stage Framework', href: '/framework' },
    { label: 'Memberships & Pricing', href: '/memberships' },
    { label: 'Journal & Insights', href: '/journal' },
    { label: 'Experiences & Sessions', href: '/experiences' },
    { label: 'Community', href: '/community' },
    { label: 'Philosophy & Founder', href: '/about' },
    { label: 'Contact & Inquiries', href: '/contact' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
      }}
    >
      {/* Backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(18, 20, 23, 0.65)',
          backdropFilter: 'blur(4px)',
        }}
        onClick={onClose}
      />

      {/* Drawer Body */}
      <div
        style={{
          position: 'relative',
          width: '85%',
          maxWidth: '380px',
          height: '100%',
          backgroundColor: '#ffffff',
          boxShadow: 'var(--shadow-modal)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
          animation: 'slideRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--color-border-light)',
          }}
        >
          <img
            src={BRAND_CONFIG.logoUrl}
            alt="I-denty"
            style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
          />
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              color: 'var(--color-text-main)',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Quick Search Button */}
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--color-border-light)' }}>
          <button
            onClick={onOpenSearch}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              width: '100%',
              padding: '0.8rem 1rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-bg-sand)',
              color: 'var(--color-text-muted)',
              fontSize: '0.9rem',
              minHeight: '44px',
            }}
          >
            <Search size={16} color="var(--color-brand-gold)" />
            <span>Search anything...</span>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
          }}
        >
          {links.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 0.5rem',
                  fontSize: '1.05rem',
                  color: isActive ? 'var(--color-brand-gold-dark)' : 'var(--color-text-main)',
                  fontWeight: isActive ? 600 : 400,
                  borderBottom: '1px solid var(--color-border-light)',
                  minHeight: '44px',
                }}
              >
                <span>{item.label}</span>
                <ArrowRight size={15} style={{ opacity: isActive ? 1 : 0.4 }} />
              </Link>
            );
          })}

          {/* Path Finder Featured Box */}
          <div
            style={{
              marginTop: '1.5rem',
              padding: '1.25rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-brand-gold-light)',
              border: '1px solid var(--color-brand-gold-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', color: 'var(--color-brand-gold-dark)', fontWeight: 600, fontSize: '0.9rem' }}>
              <Compass size={16} />
              <span>Find Your Starting Point</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-text-body)', marginBottom: '0.85rem' }}>
              Answer 4 simple questions to receive a tailored entry point into the I-denty ecosystem.
            </p>
            <Link
              to="/finder"
              className="btn btn-gold"
              style={{ width: '100%', fontSize: '0.78rem', padding: '0.65rem 1rem' }}
            >
              Start 2-Min Assessment
            </Link>
          </div>
        </div>

        {/* Drawer Footer */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid var(--color-border-light)',
            backgroundColor: 'var(--color-bg-sand-light)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Link
            to="/contact?tab=login"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-text-main)',
              fontSize: '0.9rem',
              fontWeight: 500,
              minHeight: '44px',
            }}
          >
            <User size={18} />
            <span>Member Login / Portal</span>
          </Link>

          {/* Socials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-muted)' }}>
            <a href={BRAND_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ padding: '0.4rem' }}>
              <InstagramIcon size={18} />
            </a>
            <a href={BRAND_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ padding: '0.4rem' }}>
              <LinkedinIcon size={18} />
            </a>
            <a href={BRAND_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ padding: '0.4rem' }}>
              <FacebookIcon size={18} />
            </a>
            <a href={BRAND_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ padding: '0.4rem' }}>
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
