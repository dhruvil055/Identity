import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ShieldCheck, Users, Crown, Sparkles } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '../../data/membershipsData';
import { useInView } from '../../hooks/useInView';

interface TierCardProps {
  tier: typeof MEMBERSHIP_TIERS[0];
  index: number;
  scrollXProgress: MotionValue<number>;
  isActive: boolean;
  onActivate: () => void;
}

const TierCard: React.FC<TierCardProps> = ({ tier, index, scrollXProgress, isActive, onActivate }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(scrollXProgress, [index - 0.5, index, index + 0.5], [0.85, 1, 0.85]);
  const zIndex = useTransform(scrollXProgress, [index - 0.5, index, index + 0.5], [10, 100, 10]);
  const opacity = useTransform(scrollXProgress, [index - 1, index - 0.5, index + 0.5, index + 1], [0.4, 1, 1, 0.4]);
  const rotateY = useTransform(scrollXProgress, [index - 0.5, index, index + 0.5], [15, 0, -15]);
  const blur = useTransform(scrollXProgress, [index - 0.5, index, index + 0.5], [3, 0, 3]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        x: 0,
        scale,
        zIndex,
        opacity,
        rotateY,
        filter: `blur(${blur}px)`,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onMouseEnter={onActivate}
      onClick={onActivate}
      className="perspective-container"
    >
      <div
        style={{
          backgroundColor: isActive ? 'var(--color-bg-dark)' : '#ffffff',
          border: isActive ? '2px solid var(--color-brand-gold)' : '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(2rem, 4vw, 2.5rem)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          minHeight: '520px',
          width: '340px',
          flexShrink: 0,
          boxShadow: isActive
            ? '0 30px 60px rgba(0,0,0,0.2), 0 0 0 1px var(--color-brand-gold)'
            : '0 20px 40px rgba(0,0,0,0.08)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow effect when active */}
        <motion.div
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            inset: '-2px',
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, var(--color-brand-gold), transparent, var(--color-brand-gold))',
            zIndex: -1,
            opacity: 0.3,
            filter: 'blur(20px)',
          }}
        />

        {/* Tier Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.4rem 0.9rem',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: isActive ? 'rgba(181, 156, 103, 0.15)' : 'var(--color-bg-sand)',
            border: isActive ? '1px solid var(--color-brand-gold)' : '1px solid var(--color-border-light)',
            marginBottom: '1.5rem',
            width: 'fit-content',
            transform: 'translateZ(30px)',
          }}
        >
          {tier.badge && (
            <span
              style={{
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700,
                color: isActive ? 'var(--color-brand-gold)' : 'var(--color-brand-gold-dark)',
              }}
            >
              {tier.badge}
            </span>
          )}
          {tier.id === 'collective' && <ShieldCheck size={12} color="var(--color-brand-gold)" />}
          {tier.id === 'inner-circle' && <Users size={12} color="var(--color-brand-gold)" />}
          {tier.id === 'private-member' && <Crown size={12} color="var(--color-brand-gold)" />}
        </div>

        {/* Tier Name */}
        <h3
          style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
            color: isActive ? '#ffffff' : 'var(--color-text-main)',
            marginBottom: '0.4rem',
            fontWeight: 500,
            transform: 'translateZ(20px)',
          }}
        >
          {tier.name}
        </h3>

        {/* Tier Tagline */}
        <p
          style={{
            fontSize: '0.95rem',
            color: isActive ? 'rgba(255,255,255,0.7)' : 'var(--color-text-muted)',
            marginBottom: '1rem',
            fontStyle: 'italic',
            fontFamily: 'var(--font-editorial)',
            transform: 'translateZ(15px)',
          }}
        >
          {tier.tagline}
        </p>

        {/* Price */}
        <div
          style={{
            marginBottom: '2rem',
            paddingBottom: '1.5rem',
            borderBottom: isActive ? '1px solid rgba(181,156,103,0.3)' : '1px solid var(--color-border-light)',
            transform: 'translateZ(10px)',
          }}
        >
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: isActive ? 'rgba(255,255,255,0.5)' : 'var(--color-text-muted)', marginBottom: '0.3rem' }}>
            Annual Billing
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 'clamp(2.5rem, 4vw, 3.2rem)', fontWeight: 300, color: isActive ? '#ffffff' : 'var(--color-text-main)', lineHeight: 1 }}>
              ${tier.priceAnnualPerMonth}
            </span>
            <span style={{ fontSize: '0.9rem', color: isActive ? 'rgba(255,255,255,0.5)' : 'var(--color-text-muted)' }}>
              /mo
            </span>
            <span style={{ fontSize: '0.8rem', color: isActive ? 'rgba(181,156,103,0.8)' : 'var(--color-brand-gold)', marginLeft: '0.5rem', fontWeight: 500 }}>
              (${tier.priceAnnual}/yr)
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '0.92rem',
            color: isActive ? 'rgba(255,255,255,0.8)' : 'var(--color-text-body)',
            lineHeight: 1.6,
            marginBottom: '2rem',
            flex: 1,
            transform: 'translateZ(10px)',
          }}
        >
          {tier.description}
        </p>

        {/* Key Highlights */}
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', transform: 'translateZ(10px)' }}>
          {tier.keyHighlights.slice(0, 4).map((highlight, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem' }}>
              <Sparkles size={16} color={isActive ? 'var(--color-brand-gold)' : 'var(--color-brand-gold)'} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ color: isActive ? 'rgba(255,255,255,0.85)' : 'var(--color-text-main)' }}>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          variant={isActive ? 'gold' : 'primary'}
          href={tier.ctaHref}
          withArrow
          style={{
            width: '100%',
            transform: 'translateZ(40px)',
            boxShadow: isActive ? '0 10px 30px rgba(181,156,103,0.3)' : 'none',
          }}
        >
          {tier.ctaText}
        </Button>
      </div>
    </motion.div>
  );
};

export const MembershipTiers3D: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Inner Circle
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  const scrollX = useMotionValue(0);
  const { scrollXProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  // Sync scrollXProgress to scrollX for card animations
  useEffect(() => {
    const unsubscribe = scrollXProgress.on('change', (v) => {
      scrollX.set(v * (MEMBERSHIP_TIERS.length - 1));
    });
    return unsubscribe;
  }, [scrollXProgress, scrollX]);

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    e.preventDefault();
    containerRef.current?.scrollBy({ left: e.deltaY, behavior: 'smooth' });
  };

  const scrollToCard = (index: number) => {
    const cardWidth = 340 + 24; // card width + gap
    const containerWidth = containerRef.current?.offsetWidth || 1200;
    const scrollLeft = index * cardWidth - (containerWidth - cardWidth) / 2;
    containerRef.current?.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-sand)', overflow: 'hidden' }}
    >
      <div className="identy-container">
        {/* Section Header */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <SectionHeader
            eyebrow="Tiered Access Architecture"
            title="Three Levels. One Integrated Ecosystem."
            subtitle="Each tier builds upon the last. Start where you are. Evolve at your pace."
            centered
          />
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={containerRef}
          onWheel={handleWheel}
          style={{
            display: 'flex',
            gap: '1.5rem',
            padding: '1rem 0 3rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollPadding: '0 24px',
            margin: '0 calc(-1 * clamp(1.25rem, 4vw, 2.5rem))',
            paddingLeft: 'clamp(1.25rem, 4vw, 2.5rem)',
            paddingRight: 'clamp(1.25rem, 4vw, 2.5rem)',
            perspective: '1200px',
          }}
        >
          {MEMBERSHIP_TIERS.map((tier, index) => (
            <TierCard
              key={tier.id}
              tier={tier}
              index={index}
              scrollXProgress={scrollX}
              isActive={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '-1rem', marginBottom: '2rem' }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
            Scroll or click cards to explore
          </p>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ display: 'inline-flex', gap: '4px' }}
          >
            {MEMBERSHIP_TIERS.map((_, i) => (
              <motion.div
                key={i}
                style={{
                  width: activeIndex === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: activeIndex === i ? 'var(--color-brand-gold)' : 'var(--color-border)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Keyboard Navigation Hint */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            Use \u2190 \u2192 arrow keys to navigate between tiers
          </p>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: 1 }}
        style={{ position: 'fixed', top: -100, left: -100, pointerEvents: 'none' }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            setActiveIndex(Math.max(0, activeIndex - 1));
            scrollToCard(activeIndex - 1);
          } else if (e.key === 'ArrowRight') {
            setActiveIndex(Math.min(MEMBERSHIP_TIERS.length - 1, activeIndex + 1));
            scrollToCard(activeIndex + 1);
          }
        }}
        tabIndex={-1}
        autoFocus
      />
    </section>
  );
};