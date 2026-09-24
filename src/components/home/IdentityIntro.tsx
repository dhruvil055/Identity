import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Users, type LucideIcon } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import './IdentityIntro.css';

const PILLARS = [
  {
    icon: Compass,
    title: 'Identity Development',
    desc: 'A structured operating system guiding recalibration and expansion.',
  },
  {
    icon: Sparkles,
    title: 'Curated Commerce',
    desc: 'Luxury brand collaborations with private member privileges.',
  },
  {
    icon: Users,
    title: 'Private Community',
    desc: 'A confidential circle of high-capacity women in transition.',
  },
];

/**
 * Identity introduction — calm editorial brand statement between hero and
 * What Is I-denty. Copy paraphrased from existing ecosystem pillars.
 * Subtle pointer tilt on desktop; static centered stack on mobile.
 */
export const IdentityIntro: React.FC = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className={`ii section-padding${inView ? ' is-in' : ''}`} aria-label="The I-denty standard">
      <div className="identy-container">
        <div className="ii-inner">
          <div className="ii-rule ii-rise" style={{ ['--ed' as string]: '0ms' }} aria-hidden="true">
            <span>◈</span>
          </div>
          <h2 className="ii-statement ii-rise" style={{ ['--ed' as string]: '90ms' }}>
            You are not starting over. <em>You are becoming.</em>
          </h2>
          <p className="ii-sub ii-rise" style={{ ['--ed' as string]: '180ms' }}>
            I-denty exists for the woman whose outer life no longer matches her inner
            standard — and who refuses to navigate the distance alone. Identity
            development, lifestyle alignment, and community, integrated in one place.
          </p>
          <div className="ii-pillars ii-rise" style={{ ['--ed' as string]: '270ms' }}>
            {PILLARS.map((p) => (
              <TiltPillar key={p.title} icon={p.icon} title={p.title} desc={p.desc} />
            ))}
          </div>
          <div className="ii-rise" style={{ ['--ed' as string]: '360ms' }}>
            <Link to="/reinvention" className="btn-link">
              Discover the Reinvention Framework
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const TiltPillar: React.FC<{ icon: LucideIcon; title: string; desc: string }> = ({
  icon: Icon,
  title,
  desc,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  const m = useRef({ rx: 0, ry: 0, trx: 0, try_: 0, on: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const s = m.current;

    const tick = () => {
      s.rx += (s.trx - s.rx) * 0.14;
      s.ry += (s.try_ - s.ry) * 0.14;
      el.style.setProperty('--rx', `${s.rx.toFixed(2)}deg`);
      el.style.setProperty('--ry', `${s.ry.toFixed(2)}deg`);
      if (Math.abs(s.trx - s.rx) > 0.02 || Math.abs(s.try_ - s.ry) > 0.02 || s.on) {
        raf.current = requestAnimationFrame(tick);
      } else {
        s.on = false;
      }
    };
    const kick = () => {
      if (!s.on) {
        s.on = true;
        raf.current = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: React.PointerEvent) => {
      const r = el.getBoundingClientRect();
      s.try_ = ((e.clientX - r.left) / r.width - 0.5) * 7;
      s.trx = -((e.clientY - r.top) / r.height - 0.5) * 5;
      kick();
    };
    const onLeave = () => {
      s.trx = 0;
      s.try_ = 0;
      s.on = false;
      kick();
    };

    el.addEventListener('pointermove', onMove as any, { passive: true });
    el.addEventListener('pointerleave', onLeave, { passive: true });
    return () => {
      el.removeEventListener('pointermove', onMove as any);
      el.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div ref={ref} className="ii-pillar">
      <Icon size={22} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};