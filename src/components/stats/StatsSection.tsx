import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const statElements = statsContainerRef.current?.querySelectorAll('.stat-number');
    if (statElements) {
      statElements.forEach((el) => {
        const targetVal = parseFloat(el.getAttribute('data-target') || '0');
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);

        if (isReduced) {
          el.textContent = `${prefix}${targetVal.toLocaleString()}${suffix}`;
          return;
        }

        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetVal,
          duration: 2.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.textContent = `${prefix}${
              decimals > 0
                ? obj.val.toFixed(decimals)
                : Math.round(obj.val).toLocaleString()
            }${suffix}`;
          },
        });
      });
    }

    if (!isReduced && marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 28,
        ease: 'none',
      });
    }
  }, []);

  const stats = [
    {
      label: 'Sovereign Assets Safeguarded',
      target: 420,
      prefix: '$',
      suffix: 'M+',
      decimals: 0,
      sub: 'Enclave Vault Telemetry',
    },
    {
      label: 'ZK Cryptographic Uptime',
      target: 99.999,
      prefix: '',
      suffix: '%',
      decimals: 3,
      sub: 'Multi-Party Consensus',
    },
    {
      label: 'Global Sanctums & Enclaves',
      target: 48,
      prefix: '',
      suffix: '',
      decimals: 0,
      sub: 'Tokyo, Geneva, London, Zurich',
    },
    {
      label: 'Verified Consortium Members',
      target: 12500,
      prefix: '',
      suffix: '+',
      decimals: 0,
      sub: 'Strict Invitation-Only Tier',
    },
  ];

  const partners = [
    'GENEVA PRIVATE VAULT',
    'ST. MORITZ ALPINE SANCTUM',
    'TOKYO CYBER ENCLAVE',
    'LONDON CONSORTIUM ATELIER',
    'ZURICH SOVEREIGN TRUST',
    'NEW YORK EMBASSY',
    'MONACO MARITIME CLUB',
  ];

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative w-full py-32 px-6 bg-[#fbf9f5] overflow-hidden"
      aria-label="Statistics and Social Proof"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse,rgba(229,184,105,0.12)_0%,transparent_70%)] blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.24em] text-[#856926]">
          <span className="w-8 h-[1px] bg-[#9a7c38]" />
          <span>Section 04 // Cryptographic Validation</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#141a29] tracking-tight mb-16">
          Quantified <span className="text-gradient-gold">Integrity</span> & Global Reach.
        </h2>

        {/* Stats Grid */}
        <div
          ref={statsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl glass-panel p-8 flex flex-col justify-between border border-[#9a7c38]/20 hover:border-[#9a7c38]/40 hover:shadow-[0_12px_30px_rgba(154,124,56,0.12)] transition-all duration-300"
            >
              <div>
                <span className="font-mono text-[11px] text-[#856926] tracking-widest uppercase block mb-3 font-semibold">
                  {stat.sub}
                </span>
                <div
                  className="stat-number font-display text-4xl sm:text-5xl font-extrabold text-[#141a29] tracking-tight mb-2"
                  data-target={stat.target}
                  data-prefix={stat.prefix}
                  data-suffix={stat.suffix}
                  data-decimals={stat.decimals}
                >
                  {stat.prefix}0{stat.suffix}
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.06] text-xs text-[#585e70] font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Spotlight */}
        <div className="relative rounded-3xl glass-panel-glow p-8 sm:p-12 mb-20 overflow-hidden shadow-[0_20px_50px_rgba(20,26,41,0.08)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#9a7c38]/10 to-transparent blur-2xl" />

          <div className="relative z-10 max-w-3xl">
            <Quote className="w-10 h-10 text-[#9a7c38]/50 mb-6" />

            <blockquote className="font-display text-xl sm:text-3xl font-medium text-[#141a29] leading-relaxed mb-8">
              &ldquo;I-DENTY liberated our digital footprint from corporate surveillance while
              elevating our real-world sovereignty. The seamless fusion of ZK biometrics and
              bespoke physical access sets a new global benchmark.&rdquo;
            </blockquote>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-[#9a7c38] bg-[#9a7c38]/15 flex items-center justify-center font-display font-bold text-[#856926] text-base">
                  E.V.
                </div>
                <div>
                  <div className="text-[#141a29] font-medium text-base">Eveliene Van Den Bergh</div>
                  <div className="text-xs font-mono text-[#585e70]">
                    Founder & Sovereign Lifestyle Architect // Geneva
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#9a7c38]/10 border border-[#9a7c38]/30 text-xs font-mono text-[#856926]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CRYPTOGRAPHICALLY VERIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Hub Marquee Strip */}
        <div className="relative w-full overflow-hidden border-y border-black/[0.08] py-6">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fbf9f5] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fbf9f5] to-transparent z-10" />

          <div ref={marqueeRef} className="flex whitespace-nowrap gap-12 text-xs font-mono tracking-[0.25em] text-[#585e70]">
            {[...partners, ...partners].map((name, idx) => (
              <span key={idx} className="flex items-center gap-6 hover:text-[#141a29] transition-colors cursor-default">
                <span>{name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#9a7c38]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
