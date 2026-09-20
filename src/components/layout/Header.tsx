import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, ChevronDown, Compass } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/brandData';
import { SearchModal } from './SearchModal';
import { MobileDrawer } from './MobileDrawer';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'Reinvention',
      href: '/reinvention',
      dropdown: [
        { label: 'The Reinvention Journey', href: '/reinvention' },
        { label: 'The 4-Stage Framework', href: '/framework' },
        { label: 'Standalone Enrollment', href: '/reinvention#reinvention-tiers' },
      ],
    },
    {
      label: 'Memberships',
      href: '/memberships',
      dropdown: [
        { label: 'Overview & Tiers', href: '/memberships' },
        { label: 'Tier Comparison Matrix', href: '/memberships#comparison' },
        { label: 'Private 1:1 Advisory', href: '/memberships#consultation' },
      ],
    },
    {
      label: 'Journal',
      href: '/journal',
      dropdown: [
        { label: 'All Journal Essays', href: '/journal' },
        { label: 'Identity', href: '/journal?cat=Identity' },
        { label: 'Structure', href: '/journal?cat=Structure' },
        { label: 'Style & Presence', href: '/journal?cat=Style' },
        { label: 'Lifestyle Architecture', href: '/journal?cat=Lifestyle' },
        { label: 'Expansion & Leadership', href: '/journal?cat=Expansion' },
      ],
    },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Community', href: '/community' },
    { label: 'Philosophy', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`site-header-wrapper ${isScrolled ? 'is-sticky' : ''}`}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',
          backgroundColor: '#ffffff',
          transition: 'all 0.3s ease',
          boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.05)' : 'none',
          borderBottom: '1px solid var(--color-border-light)',
        }}
      >
        {/* Top Branding Slogan Bar */}
        <div
          style={{
            backgroundColor: 'var(--color-bg-sand)',
            borderBottom: '1px solid var(--color-border-light)',
            padding: '0.42rem 1.5rem',
            textAlign: 'center',
            fontSize: '0.76rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-text-main)',
            fontWeight: 500,
          }}
        >
          <span>{BRAND_CONFIG.tagline}</span>
        </div>

        {/* Main Header Bar */}
        <div className="identy-container identy-container-wide">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '74px',
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              aria-label="I-denty Home"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                height: '42px',
              }}
            >
              <img
                src={BRAND_CONFIG.logoUrl}
                alt="I-denty Logo"
                style={{
                  height: '38px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav
              className="desktop-nav"
              aria-label="Main Navigation"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(1rem, 2vw, 2.2rem)',
              }}
            >
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.href ||
                  (link.href !== '/' && location.pathname.startsWith(link.href));

                return (
                  <div
                    key={link.label}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.88rem',
                        letterSpacing: '0.04em',
                        color: isActive ? 'var(--color-text-main)' : 'var(--color-text-body)',
                        fontWeight: isActive ? 600 : 400,
                        padding: '0.6rem 0',
                        borderBottom: isActive ? '2px solid var(--color-brand-gold)' : '2px solid transparent',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>{link.label}</span>
                      {link.dropdown && <ChevronDown size={13} style={{ opacity: 0.6 }} />}
                    </Link>

                    {/* Dropdown Menu */}
                    {link.dropdown && activeDropdown === link.label && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          minWidth: '220px',
                          backgroundColor: '#ffffff',
                          boxShadow: 'var(--shadow-card)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--color-border-light)',
                          padding: '0.6rem 0',
                          zIndex: 1010,
                          animation: 'fadeIn 0.2s ease forwards',
                        }}
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            style={{
                              display: 'block',
                              padding: '0.65rem 1.25rem',
                              fontSize: '0.84rem',
                              color: 'var(--color-text-body)',
                              transition: 'background 0.15s, color 0.15s',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--color-bg-sand)';
                              e.currentTarget.style.color = 'var(--color-brand-gold-dark)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'var(--color-text-body)';
                            }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Header Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}
            >
              {/* Path Finder CTA Button */}
              <Link
                to="/finder"
                className="btn-path-finder-header"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-brand-gold-light)',
                  color: 'var(--color-brand-gold-dark)',
                  border: '1px solid var(--color-brand-gold-border)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-brand-gold)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-brand-gold-light)';
                  e.currentTarget.style.color = 'var(--color-brand-gold-dark)';
                }}
              >
                <Compass size={14} />
                <span>Find Your Path</span>
              </Link>

              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search website"
                title="Search website (Ctrl+K)"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text-main)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-bg-sand)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <Search size={19} />
              </button>

              {/* Login / Portal Link */}
              <Link
                to="/contact?tab=login"
                aria-label="Member login"
                title="Member Portal"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  color: 'var(--color-text-body)',
                  padding: '0.4rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'color 0.2s',
                }}
              >
                <User size={18} />
                <span className="hide-mobile">Login</span>
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                className="mobile-toggle-btn"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open mobile menu"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  color: 'var(--color-text-main)',
                }}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Full-screen Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenSearch={() => {
          setIsMobileOpen(false);
          setIsSearchOpen(true);
        }}
      />

      <style>{`
        @media (max-width: 980px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: inline-flex !important;
          }
          .btn-path-finder-header {
            display: none !important;
          }
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
