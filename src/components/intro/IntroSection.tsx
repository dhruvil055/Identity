import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fingerprint, Lock, Compass, Sparkles } from 'lucide-react';
import { soundManager } from '../../utils/sound';

gsap.registerPlugin(ScrollTrigger);

export const IntroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lines = lineContainerRef.current?.querySelectorAll('.reveal-line-inner');

    if (!isReduced && lines && lines.length > 0) {
      gsap.fromTo(
        lines,
        { yPercent: 120, rotateX: 20, opacity: 0 },
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: lineContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    } else if (lines) {
      gsap.set(lines, { opacity: 1, yPercent: 0 });
    }

    const pillarCards = cardsRef.current?.querySelectorAll('.pillar-card');
    if (!isReduced && pillarCards && pillarCards.length > 0) {
      gsap.fromTo(
        pillarCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    const canvas = canvasRef.current;
    if (!canvas || isReduced) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);

    const nodesCount = 42;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
    }> = [];

    for (let i = 0; i < nodesCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect close nodes with glowing amber filaments
      for (let i = 0; i < nodesCount; i++) {
        for (let j = i + 1; j < nodesCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.28;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(154, 124, 56, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const currentRadius = node.radius + Math.sin(node.pulse) * 0.8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = '#9a7c38';
        ctx.shadowColor = 'rgba(154, 124, 56, 0.4)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const pillars = [
    {
      icon: Fingerprint,
      title: 'Biometric Enclave',
      subtitle: 'ZERO-KNOWLEDGE AUTHENTICATION',
      desc: 'Cryptographic proof of self without surrendering raw personal telemetry. Sovereign keys generated locally on secure quantum hardware.',
    },
    {
      icon: Compass,
      title: 'Curated Reinvention',
      subtitle: 'BESPOKE LIFE EVOLUTION',
      desc: 'A synchronized architecture spanning high-performance mentorship, confidential private acquisitions, and continuous self-mastery.',
    },
    {
      icon: Lock,
      title: 'Consortium Sanctum',
      subtitle: 'SOVEREIGN PHYSICAL ACCESS',
      desc: 'Frictionless, cryptographic access to private clubs, private aviation terminals, and confidential residential sanctuaries worldwide.',
    },
  ];

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center py-28 px-6 bg-[#fbf9f5] overflow-hidden"
      aria-label="Value Proposition and Philosophy"
    >
      {/* Background ambient constellation canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
      />

      {/* Atmospheric lighting accents for light theme */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(229,184,105,0.12)_0%,transparent_70%)] blur-3xl z-0" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(2,132,199,0.06)_0%,transparent_70%)] blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.24em] text-[#856926]">
          <span className="w-8 h-[1px] bg-[#9a7c38]" />
          <span>Section 01 // The Core Manifesto</span>
        </div>

        {/* Masked Typographic Headline */}
        <div
          ref={lineContainerRef}
          className="perspective-[1000px] max-w-5xl"
        >
          <div className="overflow-hidden pb-1">
            <h2 className="reveal-line-inner font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#141a29] leading-[1.12]">
              Identity is no longer a static passport.
            </h2>
          </div>
          <div className="overflow-hidden pb-1 mt-1 sm:mt-2">
            <h2 className="reveal-line-inner font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient-gold leading-[1.12]">
              It is the sovereign operating system
            </h2>
          </div>
          <div className="overflow-hidden pb-2 mt-1 sm:mt-2">
            <h2 className="reveal-line-inner font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#2b3245] leading-[1.12]">
              for who you are choosing to become.
            </h2>
          </div>
        </div>

        {/* Narrative Expansion */}
        <div className="mt-10 max-w-3xl border-l-2 border-[#9a7c38]/40 pl-6 sm:pl-8">
          <p className="text-base sm:text-xl text-[#52596b] font-sans font-light leading-relaxed">
            In an era of ubiquitous digital noise and fragmented personas, true sovereignty is deliberate.
            <strong className="text-[#141a29] font-medium"> I-DENTY </strong>
            bridges zero-knowledge cryptography, autonomous personal trajectory modeling, and
            uncompromising real-world curation. One unified standard. Absolute agency.
          </p>
        </div>

        {/* The Three Pillars Grid */}
        <div
          ref={cardsRef}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                onMouseEnter={() => soundManager.playHover()}
                className="pillar-card group relative rounded-2xl glass-panel p-8 transition-all duration-500 hover:border-[#9a7c38]/50 hover:shadow-[0_20px_50px_rgba(154,124,56,0.14)] hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-[#9a7c38]/15 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="w-12 h-12 rounded-xl border border-[#9a7c38]/30 bg-[#9a7c38]/10 flex items-center justify-center text-[#856926] mb-6 group-hover:scale-110 group-hover:border-[#9a7c38] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#856926]">
                    0{idx + 1} // {pillar.subtitle}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#141a29] mt-2 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#52596b] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#585e70] group-hover:text-[#141a29] transition-colors">
                  <span>DISCOVER SPECIFICATION</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#9a7c38] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
