import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Search, Compass, User, ArrowRight } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from '../common/SocialIcons';
import { BRAND_CONFIG } from '../../data/brandData';
import './Header.css';

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
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      const mainEl = document.querySelector('main') || document.getElementById('primary');
      if (mainEl) mainEl.setAttribute('aria-hidden', 'true');

      setTimeout(() => {
        const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable && focusable.length > 0) focusable[0].focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      const mainEl = document.querySelector('main') || document.getElementById('primary');
      if (mainEl) mainEl.removeAttribute('aria-hidden');
      if (previousFocusRef.current) previousFocusRef.current.focus();
    }
    return () => {
      document.body.style.overflow = '';
      const mainEl = document.querySelector('main') || document.getElementById('primary');
      if (mainEl) mainEl.removeAttribute('aria-hidden');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close drawer on route change (skip initial mount so the drawer can open)
  const prevPathRef = useRef(location.pathname);
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      onClose();
    }
  }, [location.pathname, onClose]);

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
      ref={drawerRef}
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
      <div className="lux-drawer-backdrop" onClick={onClose} aria-hidden="true" />

      {/* Drawer Body */}
      <div className="lux-drawer">
        {/* Drawer Header */}
        <div className="lux-drawer-head">
          <img
            src={BRAND_CONFIG.logoUrl}
            alt="I-denty"
            style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
          />
          <button onClick={onClose} aria-label="Close menu" className="lux-close-btn">
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        {/* Quick Search Button */}
        <div className="lux-drawer-search">
          <button onClick={onOpenSearch} className="lux-drawer-search-btn" aria-label="Search website">
            <Search size={16} color="var(--color-brand-gold)" aria-hidden="true" />
            <span>Search anything...</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="lux-drawer-links" aria-label="Mobile">
          {links.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`lux-drawer-link ${isActive ? 'is-active' : ''}`}
              >
                <span>{item.label}</span>
                <ArrowRight size={15} style={{ opacity: isActive ? 1 : 0.4 }} aria-hidden="true" />
              </Link>
            );
          })}

          {/* Path Finder Featured Box */}
          <div className="lux-drawer-finder">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', color: 'var(--color-brand-gold-dark)', fontWeight: 600, fontSize: '0.9rem' }}>
              <Compass size={16} aria-hidden="true" />
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
        </nav>

        {/* Drawer Footer */}
        <div className="lux-drawer-foot">
          <Link to="/contact?tab=login" className="lux-drawer-login">
            <User size={18} aria-hidden="true" />
            <span>Member Login / Portal</span>
          </Link>

          {/* Socials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-text-muted)' }}>
            <a href={BRAND_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ padding: '0.6rem', minWidth: '44px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <InstagramIcon size={18} />
            </a>
            <a href={BRAND_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ padding: '0.6rem', minWidth: '44px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <LinkedinIcon size={18} />
            </a>
            <a href={BRAND_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ padding: '0.6rem', minWidth: '44px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <FacebookIcon size={18} />
            </a>
            <a href={BRAND_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ padding: '0.6rem', minWidth: '44px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
