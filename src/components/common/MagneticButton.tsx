import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { soundManager } from '../../utils/sound';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  variant?: 'primary' | 'secondary' | 'glass';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength = 0.35,
  variant = 'primary',
  className = '',
  onClick,
  ...rest
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });

    gsap.to(btnRef.current, {
      x: x * strength,
      y: y * strength,
      duration: 0.4,
      ease: 'power2.out',
    });

    if (textRef.current) {
      gsap.to(textRef.current, {
        x: x * (strength * 0.6),
        y: y * (strength * 0.6),
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundManager.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!btnRef.current) return;

    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.3)',
    });

    if (textRef.current) {
      gsap.to(textRef.current, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundManager.playClick();
    if (onClick) onClick(e);
  };

  let variantStyle = '';
  if (variant === 'primary') {
    variantStyle =
      'bg-gradient-to-r from-[#9a7c38] via-[#b8964d] to-[#856926] text-white font-semibold shadow-[0_8px_25px_rgba(154,124,56,0.35)] hover:shadow-[0_12px_35px_rgba(154,124,56,0.5)] border border-[#c8a96e]';
  } else if (variant === 'secondary') {
    variantStyle =
      'bg-white/80 text-[#141a29] border border-black/10 hover:border-[#9a7c38]/60 hover:bg-[#9a7c38]/10 shadow-[0_4px_16px_rgba(20,26,41,0.04)]';
  } else {
    variantStyle =
      'bg-white/90 backdrop-blur-md text-[#856926] border border-[#9a7c38]/30 hover:border-[#9a7c38] hover:bg-[#9a7c38]/15 shadow-sm';
  }

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-full px-7 py-3.5 text-sm uppercase tracking-[0.16em] transition-all duration-300 will-change-transform cursor-pointer ${variantStyle} ${className}`}
      {...rest}
    >
      {/* Dynamic cursor flare */}
      {isHovered && (
        <span
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-md transition-opacity duration-300"
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            width: '90px',
            height: '90px',
          }}
        />
      )}
      <span ref={textRef} className="relative z-10 flex items-center justify-center gap-2 will-change-transform">
        {children}
      </span>
    </button>
  );
};
