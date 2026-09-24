import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices or reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || isReduced) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button, a, input, textarea, select, [role="button"], canvas, .interactive-hover')
        );
        setIsHovered(isInteractive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const render = () => {
      ringX = lerp(ringX, mouseX, 0.16);
      ringY = lerp(ringY, mouseY, 0.16);

      dotX = lerp(dotX, mouseX, 0.55);
      dotY = lerp(dotY, mouseY, 0.55);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 hidden md:block">
      {/* Outer ambient glowing ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none transition-[width,height,border-color,background-color] duration-300 ease-out will-change-transform ${
          !isVisible ? 'opacity-0' : 'opacity-100'
        } ${
          isHovered
            ? 'w-14 h-14 border-[#9a7c38] bg-[#9a7c38]/15 shadow-[0_0_20px_rgba(154,124,56,0.3)]'
            : isClicking
            ? 'w-8 h-8 border-[#b8964d] bg-[#9a7c38]/20'
            : 'w-10 h-10 border-[#9a7c38]/40 bg-transparent'
        }`}
        style={{ backfaceVisibility: 'hidden' }}
      />

      {/* Center sharp dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-[width,height,opacity,background-color] duration-150 will-change-transform ${
          !isVisible ? 'opacity-0' : 'opacity-100'
        } ${
          isHovered
            ? 'w-2 h-2 bg-[#9a7c38] shadow-[0_0_8px_#9a7c38]'
            : isClicking
            ? 'w-3 h-3 bg-[#141a29]'
            : 'w-1.5 h-1.5 bg-[#9a7c38]'
        }`}
        style={{ backfaceVisibility: 'hidden' }}
      />
    </div>
  );
};
