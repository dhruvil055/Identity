import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../common/SectionHeader';
import { MARKET_GAP_ITEMS, type MarketGapItem } from '../../data/brandData';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import './MarketGap.css';

/** Per-card resting depth — outer cards sit slightly forward. */
const CARD_DEPTH = ['34px', '10px', '10px', '34px'];
const MAX_RX = 5;
const MAX_RY = 7;

/* ---------- Brand fallback iconography (thin-stroke, gold) ---------- */
const FallbackIcon: React.FC<{ id: string }> = ({ id }) => {
  const common = {
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  } as const;
  switch (id) {
    case 'divorce':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M7 13a8 8 0 0 1 13-4.5" />
          <path d="M25 19a8 8 0 0 1-13 4.5" />
          <path d="M16 4v3M16 25v3" />
        </svg>
      );
    case 'career-shifts':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 26h6v-6h6v-6h6V8" />
          <path d="M18 8h4v4" />
        </svg>
      );
    case 'relocation':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M16 29s10-9.6 10-17A10 10 0 1 0 6 12c0 7.4 10 17 10 17z" />
          <circle cx="16" cy="12" r="3.4" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden="true">
          <path d="M26 16a10 10 0 0 1-17.5 6.6" />
          <path d="M6 16a10 10 0 0 1 17.5-6.6" />
          <path d="M8.5 18.5v4h-4M23.5 13.5v-4h4" />
        </svg>
      );
  }
};

/** Medallion: brand PNG when available, engraved SVG fallback underneath. */
const GapIcon: React.FC<{ item: MarketGapItem }> = ({ item }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="mg-medal" aria-hidden="true">
      <FallbackIcon id={item.id} />
      {!failed && (
        <img
          src={item.iconSrc}
          alt=""
          loading="lazy"
          style={{ position: 'absolute', width: 34, height: 34, objectFit: 'contain' }}
          onLoad={(e) => e.currentTarget.classList.add('is-loaded')}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

/** One 3D tilt card — pointer-tracked, rAF-lerped, transform-only. */
const GapCard: React.FC<{ item: MarketGapItem; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  const motion = useRef({ rx: 0, ry: 0, trx: 0, try_: 0, active: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const m = motion.current;

    const tick = () => {
      m.rx += (m.trx - m.rx) * 0.12;
      m.ry += (m.try_ - m.ry) * 0.12;
      el.style.setProperty('--rx', `${m.rx.toFixed(2)}deg`);
      el.style.setProperty('--ry', `${m.ry.toFixed(2)}deg`);
      el.style.setProperty('--lift', m.active ? '-7px' : '0px');
      if (Math.abs(m.trx - m.rx) > 0.02 || Math.abs(m.try_ - m.ry) > 0.02 || m.active) {
        raf.current = requestAnimationFrame(tick);
      } else {
        m.active = false;
      }
    };
    const kick = () => {
      if (!m.active) {
        m.active = true;
        raf.current = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      m.try_ = nx * MAX_RY;
      m.trx = -ny * MAX_RX;
      el.style.setProperty('--gx', `${((nx + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty('--gy', `${((ny + 0.5) * 100).toFixed(1)}%`);
      kick();
    };
    const onLeave = () => {
      m.trx = 0;
      m.try_ = 0;
      m.active = false;
      kick();
    };

    el.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave, { passive: true });
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      role="listitem"
      className="mg-card mg-rise"
      style={
        {
          ['--tz' as string]: CARD_DEPTH[index % CARD_DEPTH.length],
          ['--ed' as string]: `${150 + index * 70}ms`,
        } as React.CSSProperties
      }
    >
      <div className="mg-card-body">
        <span className="mg-num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <GapIcon item={item} />
        <div className="mg-copy">
          <h3>{item.title}</h3>
          <div className="mg-kicker">{item.subtitle}</div>
          <p>{item.description}</p>
          <Link to={item.suggestedPath} className="mg-link">
            <span>Explore Solution</span>
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const MarketGap: React.FC = () => {
  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.12 });

  return (
    <section ref={sectionRef} className={`mg section-padding${inView ? ' is-in' : ''}`} aria-label="The Market Gap">
      <div className="identy-container mg-inner">
        {/* Heading + subtitle */}
        <div className="mg-rise" style={{ ['--ed' as string]: '0ms' }}>
          <SectionHeader
            eyebrow="The Market Reality"
            title="The Market Gap"
            subtitle="Modern high-capacity women are evolving faster than the traditional spaces built to support them."
            centered
          />
        </div>

        {/* 2x2 3D card stage */}
        <div className="mg-grid" role="list" aria-label="Life transitions">
          {MARKET_GAP_ITEMS.map((item, i) => (
            <GapCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Closing narrative banner */}
        <div className="mg-rise mg-banner" style={{ ['--ed' as string]: '500ms' }}>
          <p>
            High-capacity women in transition often lack a structured ecosystem that integrates identity
            development, lifestyle alignment, community support, and curated brand access in one place.{' '}
            <strong>I-denty was built to fill that gap.</strong>
          </p>
        </div>

        {/* Transition line */}
        <p className="mg-rise mg-note" style={{ ['--ed' as string]: '650ms' }}>
          This is why we built the I-denty Reinvention Framework™ — a structured operating system for every
          stage of your next chapter.
        </p>
      </div>
    </section>
  );
};