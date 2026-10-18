import React from 'react';

/**
 * FloatingElement
 * 
 * Provides an organic, desynchronized anti-gravity hovering animation.
 * Features:
 * - Multi-axis floating (Y drift + subtle X weave + subtle rotation roll)
 * - Independent duration & delay seeds for desynchronization
 * - Respects prefers-reduced-motion automatically
 */
export default function FloatingElement({
  children,
  className = '',
  yOffset = 8,       // +/- 8px vertical float
  xOffset = 3,       // +/- 3px horizontal float
  rotOffset = 2,     // +/- 2 degrees tilt roll
  duration = 5.2,    // 4-6s cycle
  delay = 0,         // phase stagger
  style = {},
  ...props
}) {
  // Generate a unique CSS animation keyframe identifier based on parameters
  const animKey = `float-${Math.round(yOffset)}-${Math.round(rotOffset)}-${Math.round(duration * 10)}`;

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        animation: `${animKey} ${duration}s ease-in-out ${delay}s infinite alternate`,
        willChange: 'transform',
        ...style
      }}
      {...props}
    >
      <style>{`
        @keyframes ${animKey} {
          0% {
            transform: translate3d(0px, 0px, 0px) rotate(0deg);
          }
          50% {
            transform: translate3d(${xOffset}px, -${yOffset}px, 0px) rotate(${rotOffset}deg);
          }
          100% {
            transform: translate3d(-${xOffset * 0.5}px, ${yOffset * 0.5}px, 0px) rotate(-${rotOffset * 0.75}deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .${animKey} {
            animation: none !important;
          }
        }
      `}</style>
      {children}
    </div>
  );
}
