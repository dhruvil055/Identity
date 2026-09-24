import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { soundManager } from '../../utils/sound';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(154, 124, 56, 0.14)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState<{ x: number; y: number; opacity: number }>({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlight({ x, y, opacity: 1 });

    if (isReduced) return;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.02,
      duration: 0.35,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseEnter = () => {
    soundManager.playHover();
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl glass-panel border border-[#9a7c38]/20 p-8 transition-colors duration-300 will-change-transform ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* Content wrapper with depth translation */}
      <div
        className="relative z-10 h-full flex flex-col justify-between"
        style={{ transform: 'translateZ(30px)' }}
      >
        {children}
      </div>
    </div>
  );
};
