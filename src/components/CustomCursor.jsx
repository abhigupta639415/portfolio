import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Position state with lerp
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isPointerFine || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = target && (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive') ||
        target.classList?.contains('cursor-pointer')
      );
      setHovered(Boolean(isInteractive));
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Lerp loop for the trailing ring
    const render = () => {
      // Lerp ring towards mouse with 0.18 factor
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (!enabled) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Center pinpoint dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full pointer-events-none transition-transform duration-75 ${
          hovered ? 'scale-0' : clicked ? 'scale-75 bg-[#D4AF37]' : 'bg-[#D4AF37]'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Trailing inertial ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full pointer-events-none border transition-all duration-200 ease-out ${
          hovered
            ? 'w-12 h-12 -ml-6 -mt-6 border-[#D4AF37] bg-[#D4AF37]/10 backdrop-blur-[1px] scale-110 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
            : clicked
            ? 'w-7 h-7 -ml-3.5 -mt-3.5 border-[#D4AF37] scale-90'
            : 'w-8 h-8 border-[#D4AF37]/60'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
