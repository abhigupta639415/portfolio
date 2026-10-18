import React, { useRef, useState, useCallback } from 'react';

/**
 * MagneticButton
 * 
 * Attracts toward cursor when within a magnetic proximity radius.
 * When cursor exits, snaps back to resting equilibrium with spring damping.
 */
export default function MagneticButton({
  children,
  className = '',
  magnetStrength = 0.35, // displacement ratio
  radius = 60,           // magnetic field radius in px beyond element bounds
  onClick,
  ...props
}) {
  const btnRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isAttracted, setIsAttracted] = useState(false);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const activeDist = Math.max(rect.width, rect.height) / 2 + radius;

    if (dist < activeDist) {
      setIsAttracted(true);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({
          x: dx * magnetStrength,
          y: dy * magnetStrength
        });
      });
    } else {
      if (isAttracted) {
        setIsAttracted(false);
        setPos({ x: 0, y: 0 });
      }
    }
  }, [magnetStrength, radius, isAttracted]);

  const handleMouseLeave = () => {
    setIsAttracted(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate3d(${pos.x.toFixed(2)}px, ${pos.y.toFixed(2)}px, 0px)`,
        transition: isAttracted
          ? 'transform 0.12s cubic-bezier(0.2, 0, 0, 1)'
          : 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // spring overshoot
        willChange: 'transform'
      }}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
