import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function CursorGlow() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const glowRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const curPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafId = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const render = () => {
      // Smooth lerp
      curPos.current.x += (pos.current.x - curPos.current.x) * 0.08;
      curPos.current.y += (pos.current.y - curPos.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${curPos.current.x}px, ${curPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle cursor spotlight */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 -ml-[250px] -mt-[250px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-50 dark:opacity-40 transition-opacity duration-500"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(99, 102, 241, 0.04) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(196, 154, 44, 0.07) 0%, rgba(206, 137, 70, 0.03) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />
    </div>
  );
}
