import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollParallaxProps {
  children: React.ReactNode;
  offset?: number; // How much parallax effect (e.g., 50 means moves 50px up/down)
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
}

/**
 * Subtle scroll parallax wrapper — translate-only drift at half amplitude.
 * Opacity is intentionally left at 1: fading sections at viewport edges made
 * the page feel disconnected and blanked content gated behind inner reveals.
 */
export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  offset = 40,
  className = '',
  id,
  ariaLabelledBy
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Gentle drift only — half the requested offset so sections stay connected.
  const y = useTransform(scrollYProgress, [0, 1], [offset * 0.5, -offset * 0.5]);

  return (
    <div
      ref={ref}
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`perspective-container ${className}`}
    >
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};
