import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, ChevronDown, Compass } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/brandData';
import { SearchModal } from './SearchModal';
import { MobileDrawer } from './MobileDrawer';
import './Header.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  // Close dropdown on Escape or click-outside (preserves hover + keyboard toggle)
  useEffect(() => {
    if (!activeDropdown) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveDropdown(null);
    };
    const handlePointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [activeDropdown]);

  // Navigation structure
  const navLinks = [
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
      <header className={`lux-header is-entering ${isScrolled ? 'is-scrolled' : ''}`}>
        {/* Gold announcement / tagline strip */}
        <div className="lux-strip">
          <span>{BRAND_CONFIG.tagline}</span>
        </div>

        {/* Main Header Bar */}
        <div className="identy-container identy-container-wide">
          <div className="lux-bar">
            {/* Logo — the primary Home control (client-side navigation, no refresh) */}
            <Link
              to="/"
              aria-label="I-denty Home"
              aria-current={isHome ? 'page' : undefined}
              className={`lux-logo${isHome ? ' is-home' : ''}`}
            >
              <img src={BRAND_CONFIG.logoUrl} alt="I-denty Logo" />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav ref={navRef} className="lux-nav" aria-label="Main Navigation">
              {navLinks.map((link, idx) => {
                const isActive =
                  location.pathname === link.href ||
                  (link.href !== '/' && location.pathname.startsWith(link.href));
                const isOpen = activeDropdown === link.label;

                return (
                  <div
                    key={link.label}
                    className={`lux-nav-item${isOpen ? ' is-open' : ''}`}
                    style={{ ['--i' as string]: idx } as React.CSSProperties}
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                    onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                    onFocus={() => link.dropdown && setActiveDropdown(link.label)}
                    onBlur={(e) => {
                      if (link.dropdown && !e.currentTarget.contains(e.relatedTarget as Node)) {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <Link
                      to={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      aria-haspopup={link.dropdown ? 'true' : undefined}
                      aria-expanded={link.dropdown ? isOpen : undefined}
                      className={`lux-nav-link ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveDropdown(null)}
                      onKeyDown={(e) => {
                        if (link.dropdown) {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActiveDropdown(isOpen ? null : link.label);
                          } else if (e.key === 'Escape') {
                            setActiveDropdown(null);
                          }
                        }
                      }}
                    >
                      <span>{link.label}</span>
                      {link.dropdown && <ChevronDown size={13} className="lux-chevron" aria-hidden="true" />}
                    </Link>

                    {/* Dropdown Menu */}
                    {link.dropdown && isOpen && (
                      <div className="lux-dropdown" role="menu" aria-label={`${link.label} submenu`}>
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            role="menuitem"
                            className="lux-dropdown-link"
                            onClick={() => setActiveDropdown(null)}
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
            <div className="lux-actions">
              {/* Path Finder CTA Button */}
              <Link to="/finder" className="lux-finder-btn">
                <Compass size={14} aria-hidden="true" />
                <span>Find Your Path</span>
              </Link>

              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search website"
                title="Search website (Ctrl+K)"
                className="lux-icon-btn"
              >
                <Search size={19} aria-hidden="true" />
              </button>

              {/* Login / Portal Link */}
              <Link
                to="/contact?tab=login"
                aria-label="Member login"
                title="Member Portal"
                className="lux-login"
              >
                <User size={18} aria-hidden="true" />
                <span className="lux-login-text">Login</span>
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                className="lux-burger"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={isMobileOpen}
              >
                <Menu size={24} aria-hidden="true" />
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
    </>
  );
};