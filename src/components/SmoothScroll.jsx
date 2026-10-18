import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Watch for modal open state via document.body style overflow
    const observer = new MutationObserver(() => {
      if (document.body.style.overflow === 'hidden') {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
}
