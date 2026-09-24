import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from '../common/MagneticButton';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CTASectionProps {
  onOpenModal: (type: 'initialize-application', triggerEl?: HTMLElement) => void;
}


export const CTASection: React.FC<CTASectionProps> = ({ onOpenModal }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isReduced && titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
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
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);

    const particles: Array<{
      angle: number;
      radius: number;
      speed: number;
      size: number;
      color: string;
    }> = [];

    const numP = 85;
    const colors = ['#9a7c38', '#c8a96e', '#141a29', '#0284c7'];

    for (let i = 0; i < numP; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 260 + 50,
        speed: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2.2 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const centerX = width / 2;
    const centerY = height / 2;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const grad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 280);
      grad.addColorStop(0, 'rgba(154, 124, 56, 0.18)');
      grad.addColorStop(0.5, 'rgba(154, 124, 56, 0.04)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 280, 0, Math.PI * 2);
      ctx.fill();

      for (const p of particles) {
        p.angle += p.speed;
        const x = centerX + Math.cos(p.angle) * p.radius;
        const y = centerY + Math.sin(p.angle) * (p.radius * 0.45);

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
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

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative min-h-[85vh] w-full flex items-center justify-center py-28 px-6 bg-[#fbf9f5] overflow-hidden"
      aria-label="Call to Action"
    >
      {/* 3D Gravitational Orbit Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
      />

      {/* Atmospheric lighting backdrop */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(229,184,105,0.18)_0%,transparent_60%)] blur-3xl z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#9a7c38]/30 bg-white/80 backdrop-blur-md mb-8 text-xs uppercase tracking-[0.2em] font-mono text-[#856926] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#9a7c38]" />
          <span>ADMISSIONS COHORT 2026 // NOW ACCEPTING</span>
        </div>

        {/* High-Impact Headline */}
        <h2
          ref={titleRef}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#141a29] leading-[1.08] mb-8"
        >
          CLAIM YOUR <span className="text-gradient-gold">SOVEREIGN</span>{' '}
          <br className="hidden sm:inline" />
          FREQUENCY.
        </h2>

        <p className="max-w-xl text-base sm:text-lg text-[#585e70] font-sans font-light leading-relaxed mb-12">
          Admissions to the sovereign enclave are strictly evaluated to ensure peer alignment,
          uncompromised discretion, and ecosystem synergy.
        </p>

        {/* Magnetic Glow CTA Button */}
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#9a7c38] via-[#d4b56f] to-[#0284c7] opacity-35 blur-xl group-hover:opacity-70 transition duration-500" />

          <MagneticButton
            variant="primary"
            onClick={(e) => onOpenModal('initialize-application', e.currentTarget)}
            className="!px-10 !py-5 !text-base font-bold shadow-[0_12px_40px_rgba(154,124,56,0.4)] cursor-pointer"
          >
            <span>Initialize Application</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </MagneticButton>

        </div>

        {/* Guarantee and Compliance footnote */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#585e70]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#9a7c38]" />
            <span>CONFIDENTIAL ZK AUDITING</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div>PRIVATE PASS KEY DISPATCH</div>
          <span className="hidden sm:inline">•</span>
          <div>ZERO DISCLOSURE GUARANTEE</div>
        </div>
      </div>
    </section>
  );
};
