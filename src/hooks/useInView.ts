import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
}

/**
 * Intersection Observer hook — returns true when the ref'd element is in view.
 * Options:
 *  - threshold: root intersection threshold (default: 0.15)
 *  - rootMargin: margin around viewport (default: '0px 0px -60px 0px')
 *  - once: if true, observer disconnects after first intersection (default: true)
 *         if false, observer re-triggers when element leaves and re-enters view
 */
export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Don't auto-disconnect by default so animations can re-trigger
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
