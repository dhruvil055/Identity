import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TiltCard } from './TiltCard';
import { Cpu, ShieldCheck, Gem, Globe2, ArrowUpRight } from 'lucide-react';
import { soundManager } from '../../utils/sound';

gsap.registerPlugin(ScrollTrigger);

export const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const cards = cardsContainerRef.current?.querySelectorAll('.feature-card-wrapper');
    if (!cards || cards.length === 0) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        rotateX: -15,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const features = [
    {
      id: 'matrix',
      icon: Cpu,
      tag: 'PROTOCOL // 01',
      title: 'Neural Identity Matrix',
      desc: 'Self-sovereign biometric intelligence that adapts continuously. Your verified identity evolves dynamically without central vulnerability.',
      specs: ['ZK-Rollup Architecture', 'Biometric Enclave', 'Sub-millisecond Latency'],
      accent: 'rgba(154, 124, 56, 0.2)',
      graphic: (
        <svg className="w-16 h-16 text-[#9a7c38] animate-spin" style={{ animationDuration: '24s' }} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
          <polygon points="50,18 82,78 18,78" fill="none" stroke="#c8a96e" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="10" fill="#9a7c38" fillOpacity="0.2" stroke="#9a7c38" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'vault',
      icon: ShieldCheck,
      tag: 'SECURITY // 02',
      title: 'Private Enclave Vault',
      desc: 'Zero-knowledge cryptographic vaults securing deed titles, sovereign credentials, private wealth keys, and non-fungible agreements.',
      specs: ['Post-Quantum Encryption', 'Hardware Isolates', 'Multi-Party Computation'],
      accent: 'rgba(2, 132, 199, 0.16)',
      graphic: (
        <svg className="w-16 h-16 text-[#0284c7] animate-pulse" style={{ animationDuration: '4s' }} viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" rx="12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
          <circle cx="50" cy="50" r="18" fill="none" stroke="#9a7c38" strokeWidth="1.5" />
          <line x1="50" y1="38" x2="50" y2="62" stroke="#0284c7" strokeWidth="2" />
          <line x1="38" y1="50" x2="62" y2="50" stroke="#0284c7" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'atelier',
      icon: Gem,
      tag: 'LIFESTYLE // 03',
      title: 'Curated Commerce Atelier',
      desc: 'A confidential marketplace for bespoke luxury acquisitions, private jet chartering, haute horlogerie, and unlisted architectural residences.',
      specs: ['Sovereign Settlement', 'Bespoke Concierge', 'Zero-Intermediary'],
      accent: 'rgba(154, 124, 56, 0.2)',
      graphic: (
        <svg className="w-16 h-16 text-[#9a7c38]" viewBox="0 0 100 100">
          <polygon points="50,15 85,45 70,85 30,85 15,45" fill="none" stroke="#c8a96e" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="14" fill="none" stroke="#9a7c38" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="4" fill="#9a7c38" />
        </svg>
      ),
    },
    {
      id: 'consortium',
      icon: Globe2,
      tag: 'SANCTUARY // 04',
      title: 'Sovereign Consortium',
      desc: 'An invitation-only global collective of cultural pioneers and founders. Private embassies across London, Tokyo, Geneva, and St. Moritz.',
      specs: ['Global Embassy Network', 'Bilateral Trust Proof', 'Annual Summit'],
      accent: 'rgba(20, 26, 41, 0.12)',
      graphic: (
        <svg className="w-16 h-16 text-[#141a29]/70 animate-spin" style={{ animationDuration: '30s' }} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(20,26,41,0.15)" strokeWidth="1.5" />
          <ellipse cx="50" cy="50" rx="40" ry="18" fill="none" stroke="#9a7c38" strokeWidth="1.5" />
          <ellipse cx="50" cy="50" rx="18" ry="40" fill="none" stroke="#0284c7" strokeWidth="1.2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative min-h-screen w-full py-32 px-6 bg-[#fbf9f5] overflow-hidden"
      aria-label="Features and Services"
    >
      <div className="pointer-events-none absolute inset-0 noise-bg opacity-30" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(229,184,105,0.14)_0%,transparent_70%)] blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#856926]">
              <span className="w-8 h-[1px] bg-[#9a7c38]" />
              <span>Section 02 // Functional Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#141a29] tracking-tight">
              Engineered for <span className="text-gradient-gold">Sovereignty</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#585e70] font-sans font-light leading-relaxed">
            Four foundational pillars uniting cryptographic verification, private wealth stewardship,
            and unparalleled physical world access.
          </p>
        </div>

        {/* 4 Glassmorphic 3D Perspective Tilt Cards */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 perspective-[1000px]"
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="feature-card-wrapper h-full">
                <TiltCard glowColor={item.accent} className="h-full group">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl border border-black/10 bg-[#9a7c38]/10 flex items-center justify-center text-[#856926] group-hover:border-[#9a7c38] group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs tracking-widest text-[#856926] uppercase font-semibold">
                        {item.tag}
                      </span>
                    </div>

                    <div className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                      {item.graphic}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#141a29] mb-3 group-hover:text-[#856926] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#585e70] font-light leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-black/[0.08] mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.specs.map((spec) => (
                        <span
                          key={spec}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider bg-black/[0.03] text-[#585e70] border border-black/[0.06] group-hover:border-[#9a7c38]/30 group-hover:text-[#141a29] transition-all"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => soundManager.playClick()}
                      className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#856926] group-hover:text-[#141a29] transition-colors cursor-pointer"
                    >
                      <span>Explore Protocol</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
