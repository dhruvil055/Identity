import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { soundManager } from '../../utils/sound';
import { MagneticButton } from '../common/MagneticButton';

interface NavbarProps {
  onOpenModal: (triggerEl?: HTMLElement) => void;
  lenis: { scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => void } | null;
}


export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, lenis }) => {
  const [scrolled, setScrolled] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const enabled = soundManager.toggle();
    setSoundActive(enabled);
  };

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Philosophy', href: '#intro' },
    { label: 'Ecosystem', href: '#features' },
    { label: '3D Matrix', href: '#showcase' },
    { label: 'Validation', href: '#stats' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundManager.playClick();
    setMobileMenuOpen(false);

    if (lenis) {
      lenis.scrollTo(href, { offset: -60, duration: 1.2 });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-center px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <nav
          className={`w-full max-w-6xl mx-auto flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? 'glass-panel bg-white/80 border-[#9a7c38]/20 shadow-[0_10px_35px_rgba(20,26,41,0.06)] backdrop-blur-xl'
              : 'bg-transparent border border-black/[0.05]'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="I-DENTY Home"
          >
            <div className="relative w-8 h-8 rounded-full border border-[#9a7c38]/50 flex items-center justify-center bg-[#9a7c38]/10 group-hover:border-[#9a7c38] group-hover:bg-[#9a7c38]/20 transition-all duration-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9a7c38] shadow-[0_0_8px_#9a7c38] transition-transform duration-300 group-hover:scale-125" />
            </div>
            <span className="font-display text-lg font-bold tracking-[0.22em] text-[#141a29]">
              I-DENTY
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-black/[0.03] border border-black/[0.06] rounded-full p-1.5 px-4 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => soundManager.playHover()}
                className="text-xs uppercase tracking-[0.14em] text-[#585e70] hover:text-[#141a29] px-3.5 py-1.5 rounded-full hover:bg-black/[0.04] transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions: Sound Toggle + CTA */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              type="button"
              className="p-2.5 rounded-full border border-black/10 bg-white/70 text-[#585e70] hover:text-[#9a7c38] hover:border-[#9a7c38]/40 hover:bg-[#9a7c38]/10 transition-all duration-300 cursor-pointer shadow-sm"
              title={soundActive ? 'Mute Audio Atmosphere' : 'Enable Audio Atmosphere'}
              aria-label={soundActive ? 'Mute Audio Atmosphere' : 'Enable Audio Atmosphere'}
            >
              {soundActive ? (
                <Volume2 className="w-4 h-4 text-[#9a7c38] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Desktop CTA */}
            <div className="hidden sm:block">
              <MagneticButton
                variant="primary"
                onClick={(e) => onOpenModal(e.currentTarget)}
                className="!px-5 !py-2.5 !text-xs font-semibold"
              >
                <span>Access Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-full border border-black/10 text-[#141a29] hover:text-[#9a7c38]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col justify-center px-8 bg-[#fbf9f5]/95 backdrop-blur-2xl md:hidden transition-all">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-display font-medium tracking-widest text-[#141a29] hover:text-[#9a7c38]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 border-t border-black/10 flex flex-col items-center gap-4">
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  onOpenModal(e.currentTarget);
                }}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#9a7c38] via-[#b8964d] to-[#856926] text-white font-bold text-sm tracking-widest uppercase shadow-lg shadow-[#9a7c38]/25 cursor-pointer"
              >
                Access Portal
              </button>
              <div className="flex items-center gap-2 text-xs text-[#585e70] font-mono">
                <ShieldCheck className="w-4 h-4 text-[#9a7c38]" />
                ENCRYPTED & SOVEREIGN
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
