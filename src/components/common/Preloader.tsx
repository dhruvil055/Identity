import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = isReduced ? 0.3 : 1.2;

    const obj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: isReduced ? 0.2 : 0.8,
            ease: 'power3.inOut',
            onComplete,
          });
        } else {
          onComplete();
        }
      },
    });

    tl.to(obj, {
      val: 100,
      duration: duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.round(obj.val));
      },
    });

    if (!isReduced && ringRef.current) {
      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 2.5,
        repeat: -1,
        ease: 'none',
      });
    }

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fbf9f5] text-[#141a29] selection:bg-transparent"
      style={{ willChange: 'transform' }}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated concentric geometric rings */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          <svg
            ref={ringRef}
            className="w-full h-full text-[#9a7c38]"
            viewBox="0 0 100 100"
            fill="none"
          >
            {/* Outer dotted orbit */}
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="rgba(154,124,56,0.2)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />
            {/* Middle progress arc */}
            <circle
              cx="50"
              cy="50"
              r="38"
              stroke="#9a7c38"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={238}
              strokeDashoffset={238 - (238 * progress) / 100}
              className="transition-[stroke-dashoffset] duration-75"
            />
            {/* Inner counter-rotating ring */}
            <circle
              cx="50"
              cy="50"
              r="28"
              stroke="rgba(20,26,41,0.2)"
              strokeWidth="1"
              strokeDasharray="8 12"
            />
          </svg>

          {/* Central Monogram */}
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xs font-bold tracking-widest text-[#9a7c38]">
            {progress}%
          </div>
        </div>

        {/* Brand Label and Telemetry status */}
        <div ref={textRef} className="text-center">
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-[#141a29]">
            I-DENTY
          </h2>
          <p className="mt-2 text-xs font-mono tracking-wider text-[#585e70]">
            SYNCHRONIZING SOVEREIGN MATRIX...
          </p>
        </div>
      </div>

      {/* Bottom status badge */}
      <div className="absolute bottom-10 flex items-center gap-3 text-[11px] font-mono text-[#585e70] tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9a7c38] animate-pulse" />
        CRYPTOGRAPHIC CORE v4.8 &nbsp;|&nbsp; 60 FPS WEBGL PIPELINE
      </div>
    </div>
  );
};
