import React, { useRef, useState, useCallback } from 'react';

/**
 * TiltCard
 * 
 * High-performance 3D perspective tilt container with:
 * - perspective(1000px) rotateX and rotateY physics
 * - Smooth spring damping on mouse leave
 * - Physical translateZ layer lift-off
 * - Interactive cursor-following specular sheen / glare
 * - Zero external dependencies (uses requestAnimationFrame physics)
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  perspective = 1000,
  scaleOnHover = 1.02,
  liftZ = 24,
  showGlare = true,
  glareOpacity = 0.18,
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1; // -1 to 1
    const normY = (y / rect.height) * 2 - 1; // -1 to 1

    const rotX = -normY * maxTilt;
    const rotY = normX * maxTilt;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      setTransform(
        `perspective(${perspective}px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(${liftZ}px) scale(${scaleOnHover})`
      );
      if (showGlare) {
        setGlarePos({
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
          opacity: glareOpacity
        });
      }
    });
  }, [maxTilt, perspective, liftZ, scaleOnHover, showGlare, glareOpacity]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    // Smooth spring return to zero-gravity equilibrium
    setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)`);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: isHovered
          ? 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)'
          : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        willChange: 'transform'
      }}
      className={`relative group ${className}`}
      {...props}
    >
      {/* Lift-off ambient shadow expansion */}
      <div
        className={`absolute -inset-1 rounded-3xl transition-opacity duration-500 pointer-events-none -z-10 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(16px)'
        }}
      />

      {/* Main Content (Child layers can use transform: translateZ(px) for parallax depth) */}
      <div style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>

      {/* Specular Glare Surface */}
      {showGlare && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.4), rgba(212, 175, 55, 0.08) 50%, transparent 80%)`,
            mixBlendMode: 'overlay'
          }}
        />
      )}
    </div>
  );
}
