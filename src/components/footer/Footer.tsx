import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowRight, Globe, Check } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface FooterProps {
  lenis: { scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => void } | null;
}

export const Footer: React.FC<FooterProps> = ({ lenis }) => {
  const [utcTime, setUtcTime] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = () => {
    soundManager.playClick();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    soundManager.playChime();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="relative w-full bg-[#f4eee3] border-t border-[#9a7c38]/20 pt-20 pb-12 px-6 overflow-hidden">
      {/* Subtle animated gradient horizon line */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#9a7c38]/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(229,184,105,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-black/[0.08]">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border border-[#9a7c38] bg-[#9a7c38]/10 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9a7c38]" />
                </div>
                <span className="font-display text-xl font-bold tracking-[0.24em] text-[#141a29]">
                  I-DENTY
                </span>
              </div>
              <p className="text-sm text-[#585e70] font-light max-w-sm leading-relaxed mb-6">
                The global sovereign ecosystem uniting autonomous human reinvention,
                zero-knowledge biometric infrastructure, and elevated private living standards.
              </p>
            </div>

            {/* Encrypted Network Status Indicator */}
            <div className="flex items-center gap-3 text-xs font-mono text-[#585e70]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0284c7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0284c7]" />
              </span>
              <span className="font-medium text-[#141a29]">NETWORK STATUS: OPTIMAL // 100% ENCRYPTED</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 col-span-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#856926] font-semibold mb-4">
              Architecture
            </h4>
            <ul className="space-y-3 text-sm text-[#585e70]">
              <li>
                <a href="#hero" className="hover:text-[#141a29] transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#intro" className="hover:text-[#141a29] transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#141a29] transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-[#141a29] transition-colors">
                  Artifact 3D
                </a>
              </li>
              <li>
                <a href="#stats" className="hover:text-[#141a29] transition-colors">
                  Consortium
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Protocol Column */}
          <div className="md:col-span-2 col-span-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#856926] font-semibold mb-4">
              Governance
            </h4>
            <ul className="space-y-3 text-sm text-[#585e70]">
              <li>
                <span className="hover:text-[#141a29] transition-colors cursor-pointer">
                  ZK-SNARK Spec
                </span>
              </li>
              <li>
                <span className="hover:text-[#141a29] transition-colors cursor-pointer">
                  Consortium Charter
                </span>
              </li>
              <li>
                <span className="hover:text-[#141a29] transition-colors cursor-pointer">
                  Privacy Enclave
                </span>
              </li>
              <li>
                <span className="hover:text-[#141a29] transition-colors cursor-pointer">
                  Hardware Audits
                </span>
              </li>
              <li>
                <span className="hover:text-[#141a29] transition-colors cursor-pointer">
                  Geneva Treaty
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Dispatch Column */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#856926] font-semibold mb-4">
              Private Dispatch
            </h4>
            <p className="text-xs text-[#585e70] font-light leading-relaxed mb-4">
              Receive confidential briefings regarding cohort admissions, enclave openings, and research releases.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="identity@sovereign.xyz"
                className="w-full px-4 py-3 rounded-full bg-white border border-[#9a7c38]/25 text-xs font-mono text-[#141a29] placeholder-[#8990a2] focus:outline-none focus:border-[#9a7c38] transition-colors pr-11 shadow-sm"
              />
              <button
                type="submit"
                aria-label="Subscribe to Private Dispatch"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-full bg-[#9a7c38] text-white flex items-center justify-center hover:bg-[#b8964d] transition-colors cursor-pointer"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </form>
            {subscribed && (
              <span className="block mt-2 text-[11px] font-mono text-[#856926]">
                ✓ ENCRYPTED DISPATCH CONFIRMED
              </span>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#585e70]">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#9a7c38]" />
            <span>GLOBAL CLOCK: {utcTime || 'SYNCHRONIZING...'}</span>
          </div>

          <div>
            © 2026 I-DENTY ECOSYSTEM. SOVEREIGN PROTOCOL. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={handleBackToTop}
            type="button"
            className="flex items-center gap-2 text-[#141a29] hover:text-[#856926] transition-colors cursor-pointer group"
          >
            <span className="font-semibold">RETURN TO SUMMIT</span>
            <div className="w-7 h-7 rounded-full border border-black/15 group-hover:border-[#9a7c38] flex items-center justify-center transition-colors bg-white/70">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#141a29]" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
