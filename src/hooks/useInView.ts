import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
  /**
   * Safety fallback (ms): reveal anyway if the observer never fires
   * (e.g. element permanently below threshold, observer throttled).
   * Content must never stay invisible — visibility wins over animation.
   * Set to 0 to disable. Defaults to 4500.
   */
  fallbackMs?: number;
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
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true, fallbackMs = 4500 } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let settled = false;
    const reveal = () => {
      if (settled) return;
      settled = true;
      setInView(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    const fallback = fallbackMs > 0 ? setTimeout(reveal, fallbackMs) : undefined;
    return () => {
      observer.disconnect();
      if (fallback) clearTimeout(fallback);
    };
  }, [threshold, rootMargin, once, fallbackMs]);

  return { ref, inView };
}
