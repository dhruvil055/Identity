import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../common/Button';

interface FinderSectionProps {
  isReducedMotion: boolean;
}

const ARCHES = [
  {
    id: 0,
    label: 'Rebuilding',
    desc: 'Finding clarity, structure and alignment.',
    height: '62%',
    dotTop: '18%',
  },
  {
    id: 1,
    label: 'Expanding',
    desc: 'Seeking guided identity growth.',
    height: '81%',
    dotTop: '14%',
  },
  {
    id: 2,
    label: 'Refining',
    desc: 'Ready for deeper engagement and leadership.',
    height: '100%',
    dotTop: '10%',
  },
];

const NODES = [
  { id: 0, label: 'Free', sub: 'Journal', dot: 'Free' },
  { id: 1, label: '1', sub: 'Collective', dot: '1' },
  { id: 2, label: '2', sub: 'Inner Circle', dot: '2' },
  { id: 3, label: '3', sub: 'Private', dot: '3' },
  { id: 4, label: '1:1', sub: 'Consult', dot: '1:1' },
];

const TIER_DATA = [
  {
    name: 'The Collective',
    price: 19,
    year: 228,
    node: 1,
    cta: 'Begin Inside',
    color: 'var(--camel)',
    h: 55,
    forLine: 'Foundational access to the I-denty Ecosystem. For those finding clarity, structure and alignment.',
    why: 'Foundational access to the I-denty Ecosystem, for those finding clarity, structure and alignment.',
    includes: 'What you receive',
    feats: [
      'Full access to the I-denty Journal',
      'Curated lifestyle and fashion ecosystem',
      'Brand partner perks and curated offers',
      'Access to the Reinvention Framework, included',
      'Ability to revisit the Framework anytime',
    ],
    fw: '<b>Reinvention Framework:</b> included with membership. Fee credited if previously purchased.',
    nudge: 'Want live sessions and a smaller circle? The Inner Circle is $30 more a month.',
    nb: 'See The Inner Circle',
    nt: 1,
  },
  {
    name: 'The Inner Circle',
    price: 49,
    year: 588,
    node: 2,
    cta: 'Explore Deeper',
    color: 'var(--navy)',
    h: 75,
    forLine: 'Structured expansion. Deeper refinement. Created for individuals seeking guided identity growth and elevated ecosystem access.',
    why: 'Structured expansion. Deeper refinement. Created for individuals seeking guided identity growth and elevated ecosystem access.',
    includes: 'Everything in The Collective, plus',
    feats: [
      'Access to Live Reinvention Sessions',
      'Monthly guided reflection sessions',
      'Smaller group discussions',
      'Access to curated expert conversations',
      'Priority access to ecosystem experiences',
    ],
    fw: '<b>Reinvention Framework:</b> included. Completion is recommended before live sessions.',
    nudge: 'Want private groups and invitation-only events? Private Member adds them.',
    nb: 'See Private Member',
    nt: 2,
  },
  {
    name: 'Private Member',
    price: 129,
    year: 1548,
    node: 3,
    cta: 'Request Access',
    color: 'var(--char)',
    h: 100,
    forLine: 'Premium tier for deeper engagement and leadership within the ecosystem.',
    why: 'Premium tier for deeper engagement and leadership within the ecosystem.',
    includes: 'Everything in The Inner Circle, plus',
    feats: [
      'Small private session groups',
      'Priority access to curated brand collaborations',
      'Invitation-only experiences',
      'Eligibility for 1:1 consultation (apply separately)',
    ],
    fw: '<b>Reinvention Framework:</b> included, used as the foundation for deeper work.',
    nudge: 'Want one-to-one guidance? Consultations start from $500 an hour.',
    nb: 'Apply for a consultation',
    nt: 'c',
  },
];

const CHECK_SVG = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8.5l3.2 3L13 4.5" />
  </svg>
);

export const FinderSection: React.FC<FinderSectionProps> = ({ isReducedMotion }) => {
  const [selectedArch, setSelectedArch] = useState(0);
  const archesInRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const fLeftRef = useRef<HTMLDivElement>(null);
  const recoRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLSpanElement>(null);

  // Scroll-linked parallax for arches
  useEffect(() => {
    if (isReducedMotion || !fLeftRef.current) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = fLeftRef.current!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = 0.5 - (e.clientY - rect.top) / rect.height;
      if (archesInRef.current) {
        archesInRef.current.style.transform = `perspective(1100px) rotateY(${x * 22}deg) rotateX(${y * 10}deg)`;
      }
    };

    const handlePointerLeave = () => {
      if (archesInRef.current) {
        archesInRef.current.style.transform = 'perspective(1100px) rotateY(0deg) rotateX(0deg)';
      }
    };

    fLeftRef.current.addEventListener('pointermove', handlePointerMove);
    fLeftRef.current.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      fLeftRef.current?.removeEventListener('pointermove', handlePointerMove);
      fLeftRef.current?.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [isReducedMotion]);

  const animatePrice = (targetPrice: number) => {
    if (!priceRef.current || isReducedMotion) {
      if (priceRef.current) priceRef.current.textContent = String(targetPrice);
      return;
    }

    const current = parseFloat(priceRef.current.textContent || '0');
    const duration = 800;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // power3.out
      const value = Math.round(current + (targetPrice - current) * eased);
      priceRef.current!.textContent = String(value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const renderSelection = (index: number, animate = true) => {
    setSelectedArch(index);

    const t = TIER_DATA[index];

    // Update path fill
    if (fillRef.current) {
      fillRef.current.style.width = `${(t.node / 4) * 100}%`;
    }

    // Update arches
    if (archesInRef.current) {
      const arches = archesInRef.current.querySelectorAll('.arch');
      arches.forEach((arch, k) => {
        arch.setAttribute('aria-checked', k === index ? 'true' : 'false');
        if (!isReducedMotion) {
          (arch as HTMLElement).style.transform = `translateZ(${k === index ? 80 : k * 16}px)`;
        }
      });
    }

    // Update tier cards (will be handled by parent via props or context)
    // For now, we'll use a custom event
    window.dispatchEvent(new CustomEvent('finder-select', { detail: { index, tier: t } }));

    // Animate recommendation content
    if (recoRef.current && animate && !isReducedMotion) {
      const targets = recoRef.current.querySelectorAll(':scope > *');
      targets.forEach((el) => {
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.transform = 'translateY(6px)';
      });

      setTimeout(() => {
        updateRecoContent(t);
        targets.forEach((el, i) => {
          setTimeout(() => {
            (el as HTMLElement).style.opacity = '1';
            (el as HTMLElement).style.transform = 'translateY(0)';
            (el as HTMLElement).style.transition = 'opacity 0.45s cubic-bezier(0.2,0.8,0.2,1), transform 0.45s cubic-bezier(0.2,0.8,0.2,1)';
          }, i * 50);
        });
      }, 140);

      animatePrice(t.price);
    } else {
      updateRecoContent(t);
      if (priceRef.current) priceRef.current.textContent = String(t.price);
    }
  };

  const updateRecoContent = (t: typeof TIER_DATA[0]) => {
    if (!recoRef.current) return;
    recoRef.current.innerHTML = `
      <h3 style="font-size: 52px; font-family: var(--font-serif); font-weight: 500; line-height: 1.02; margin: 0; letter-spacing: -0.015em;">${t.name}</h3>
      <p class="why" style="color: var(--muted); margin-top: 8px; max-width: 46ch; font-size: 15.5px; font-family: var(--font-sans);">${t.why}</p>
      <ul style="list-style: none; margin: 18px 0 0; padding: 0; display: grid; gap: 9px;">
        ${t.feats.slice(0, 4).map(f => `<li style="display: flex; gap: 10px; font-size: 15px; font-family: var(--font-sans);">${CHECK_SVG}<span>${f}</span></li>`).join('')}
      </ul>
    `;
  };

  const handleArchClick = (i: number) => {
    if (i !== selectedArch) renderSelection(i, true);
  };

  const handleArchKeyDown = (e: React.KeyboardEvent, i: number) => {
    let n: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % 3;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i + 2) % 3;
    if (n !== null) {
      e.preventDefault();
      renderSelection(n, true);
      const arches = archesInRef.current?.querySelectorAll('.arch');
      (arches?.[n] as HTMLElement)?.focus();
    }
  };

  const handleNodeClick = (k: number) => {
    if (k >= 1 && k <= 3) renderSelection(k - 1, true);
    else if (k === 0) {
      document.getElementById('journey')?.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
    } else {
      document.getElementById('consult')?.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
    }
  };

  const handleNudgeClick = (e: React.MouseEvent) => {
    const btn = (e.target as HTMLElement).closest('[data-goto]');
    if (!btn) return;
    const g = btn.getAttribute('data-goto');
    if (!g) return;
    if (g === 'c') {
      document.getElementById('consult')?.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
    } else {
      renderSelection(parseInt(g, 10), true);
    }
  };

  // Initial render
  useEffect(() => {
    renderSelection(0, false);
  }, []);

  return (
    <div className="finder" id="finder" style={{
      position: 'relative',
      zIndex: 1,
      marginTop: '48px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: '30px',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
    }}>
      <div className="f-left" ref={fLeftRef} style={{
        padding: '36px 30px 0',
        background: 'linear-gradient(180deg, var(--wash), var(--surface) 92%)',
        position: 'relative',
      }}>
        <h2 style={{
          fontSize: '36px',
          maxWidth: '16ch',
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          lineHeight: 1.02,
          margin: 0,
          letterSpacing: '-0.015em',
        }}>
          Reinvention does not look the same for everyone.
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '8px', fontFamily: 'var(--font-sans)' }}>
          Some are rebuilding. Some are expanding. Some are refining. Which are you?
        </p>
        <div className="arches" style={{
          perspective: '1100px',
          height: '340px',
          marginTop: '20px',
        }}>
          <div className="arches-in" ref={archesInRef} role="radiogroup" aria-label="Where are you right now?" style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '12px',
            height: '100%',
            transformStyle: 'preserve-3d',
          }}>
            {ARCHES.map((arch) => (
              <button
                key={arch.id}
                className="arch"
                role="radio"
                aria-checked={arch.id === selectedArch}
                onClick={() => handleArchClick(arch.id)}
                onKeyDown={(e) => handleArchKeyDown(e, arch.id)}
                style={{
                  flex: 1,
                  border: arch.id === selectedArch ? '1px solid var(--accent)' : '1px solid var(--line)',
                  borderBottom: 'none',
                  background: arch.id === selectedArch ? 'var(--accent)' : 'var(--surface)',
                  color: arch.id === selectedArch ? '#fff' : 'inherit',
                  borderRadius: '999px 999px 0 0',
                  padding: '0 12px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  textAlign: 'center',
                  position: 'relative',
                  boxShadow: arch.id === selectedArch
                    ? '0 -30px 50px -20px rgba(24,33,59,.45)'
                    : '0 -18px 30px -20px rgba(24,33,59,.25)',
                  transition: 'background 0.4s, color 0.4s, border-color 0.4s, box-shadow 0.4s',
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d',
                }}
              >
                <strong style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  fontSize: '27px',
                  lineHeight: 1.05,
                  display: 'block',
                }}>
                  {arch.label}
                </strong>
                <span style={{
                  fontSize: '13px',
                  color: arch.id === selectedArch ? 'rgba(255,255,255,.88)' : 'var(--muted)',
                  lineHeight: 1.35,
                  marginTop: '6px',
                  transition: 'color 0.4s',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {arch.desc}
                </span>
                <span
                  style={{
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    top: arch.dotTop,
                    width: '14px',
                    height: '14px',
                    marginLeft: '-7px',
                    borderRadius: '50%',
                    border: arch.id === selectedArch ? '2px solid #fff' : '2px solid var(--line)',
                    background: arch.id === selectedArch ? '#fff' : 'transparent',
                    transition: 'all 0.3s',
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="f-right" style={{
        padding: '32px 30px 28px',
        borderLeft: '1px solid var(--line)',
      }}>
        <div className="path" aria-label="Your path through I-denty" style={{ position: 'relative' }}>
          <div className="rail" style={{
            position: 'absolute',
            left: '10%',
            right: '10%',
            top: '15px',
            height: '2px',
            background: 'var(--line)',
          }}>
            <i ref={fillRef} style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: 0,
              background: 'var(--accent)',
              transition: 'width 0.7s cubic-bezier(0.2,0.8,0.2,1)',
            }} />
          </div>
          <div className="nodes" style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            textAlign: 'center',
          }}>
            {NODES.map((node) => (
              <button
                key={node.id}
                className="node"
                onClick={() => handleNodeClick(node.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                <span className="dot" style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--surface)',
                  border: '2px solid var(--line)',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--muted)',
                  transition: 'all 0.35s',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {node.dot}
                </span>
                <span className="lbl" style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  color: 'var(--muted)',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {node.sub}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="reco" ref={recoRef} style={{ marginTop: '26px' }}>
          {/* Content rendered via updateRecoContent */}
        </div>

        <div className="buy" style={{
          marginTop: '24px',
          paddingTop: '22px',
          borderTop: '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '18px',
          flexWrap: 'wrap',
        }}>
          <div>
            <div className="price" style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              fontSize: '68px',
              lineHeight: 1,
            }}>
              <span ref={priceRef}>19</span><small style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'var(--muted)',
                marginLeft: '4px',
                fontWeight: 400,
              }}>
                / month
              </small>
            </div>
            <div className="perday" id="r-day" style={{
              fontSize: '13.5px',
              color: 'var(--muted)',
              marginTop: '2px',
              fontFamily: 'var(--font-sans)',
            }} />
          </div>
          <Button
            variant="gold"
            href="#"
            data-cta
            id="r-cta"
            className="mag"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              borderRadius: '999px',
              padding: '16px 30px',
              fontWeight: 500,
              fontSize: '15px',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              border: 'none',
              transition: 'filter 0.2s, background 0.4s',
              willChange: 'transform',
            }}
          >
            Begin Inside
          </Button>
        </div>

        <p className="micro" id="r-micro" style={{
          fontSize: '13px',
          color: 'var(--muted)',
          marginTop: '14px',
          fontFamily: 'var(--font-sans)',
        }} />

        <div className="nudge" id="r-nudge" onClick={handleNudgeClick} style={{
          marginTop: '16px',
          background: 'var(--wash)',
          borderRadius: '14px',
          padding: '14px 16px',
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          fontFamily: 'var(--font-sans)',
        }} />
      </div>
    </div>
  );
};