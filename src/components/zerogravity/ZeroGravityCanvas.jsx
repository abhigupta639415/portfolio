import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

/**
 * ZeroGravityCanvas
 * 
 * High-performance WebGL background using Three.js with:
 * - Instanced low-poly glass fragments & crystalline polyhedra
 * - Inverted gravity starlight motes drifting upwards (buoyant physics)
 * - Real-time cursor repulsion & spring relaxation
 * - Scroll inertia response
 * - Theme synchronization (Dark / Light)
 * - Automatic pause via IntersectionObserver when offscreen
 */
export default function ZeroGravityCanvas({
  className = '',
  fragmentCount = 45,
  particleCount = 120,
  interactive = true
}) {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch (e) {
      return;
    }

    let isVisible = true;
    let animId = null;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0x22221f : 0xffffff,
      isDark ? 1.5 : 2.0
    );
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(
      isDark ? 0xd4af37 : 0xc49a2c,
      isDark ? 1.8 : 1.4
    );
    dirLight.position.set(5, 8, 6);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(
      isDark ? 0x4f46e5 : 0x0284c7,
      isDark ? 0.8 : 0.4
    );
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    // 3. Floating Glass Shards & Polyhedra (Instanced for 1 Draw Call)
    const geometries = [
      new THREE.OctahedronGeometry(0.28, 0),
      new THREE.IcosahedronGeometry(0.24, 0),
      new THREE.TetrahedronGeometry(0.32, 0)
    ];

    // Pick a merged/primary geometry for instancing
    const shardGeo = geometries[1]; // Icosahedron shards
    const shardMat = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x1d1d1a : 0xf7f5ee,
      emissive: isDark ? 0x282415 : 0xede8d5,
      roughness: 0.15,
      metalness: 0.85,
      transparent: true,
      opacity: isDark ? 0.75 : 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const actualFragmentCount = isMobile ? Math.min(fragmentCount, 20) : fragmentCount;
    const actualParticleCount = isMobile ? Math.min(particleCount, 50) : particleCount;

    const instancedShards = new THREE.InstancedMesh(shardGeo, shardMat, actualFragmentCount);
    scene.add(instancedShards);

    // Physical state buffers for each fragment
    const dummy = new THREE.Object3D();
    const shardData = [];

    const xRange = isMobile ? 8 : 14;
    const yRange = 10;
    const zRange = 6;

    for (let i = 0; i < actualFragmentCount; i++) {
      const x = (Math.random() - 0.5) * xRange;
      const y = (Math.random() - 0.5) * yRange;
      const z = (Math.random() - 0.5) * zRange - 1;

      const scale = 0.6 + Math.random() * 0.8;

      shardData.push({
        basePos: new THREE.Vector3(x, y, z),
        curPos: new THREE.Vector3(x, y, z),
        vel: new THREE.Vector3(),
        rot: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        rotVel: new THREE.Euler(
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4
        ),
        phase: Math.random() * Math.PI * 2,
        freq: 0.4 + Math.random() * 0.6,
        amp: 0.15 + Math.random() * 0.25,
        scale
      });
    }

    // 4. Inverted-Gravity Starlight Motes (Ambient Upward Drift)
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(actualParticleCount * 3);
    const particleSpeeds = new Float32Array(actualParticleCount);
    const particlePhases = new Float32Array(actualParticleCount);

    for (let i = 0; i < actualParticleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * xRange;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * yRange;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * zRange;
      particleSpeeds[i] = 0.2 + Math.random() * 0.45; // upward drift speed
      particlePhases[i] = Math.random() * Math.PI * 2;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: isDark ? 0xd4af37 : 0xc49a2c,
      size: 0.045,
      transparent: true,
      opacity: isDark ? 0.5 : 0.4,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Cursor Coordinates & Raycasting for Repulsion Physics
    const mouse3D = new THREE.Vector3(999, 999, 0);
    const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const raycaster = new THREE.Raycaster();
    const mouseNorm = new THREE.Vector2(999, 999);

    let scrollY = window.scrollY || 0;
    let scrollVel = 0;
    let lastScrollY = scrollY;

    const onMouseMove = (e) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      mouseNorm.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNorm.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(mouseNorm, camera);
      raycaster.ray.intersectPlane(mousePlane, mouse3D);
    };

    const onMouseLeave = () => {
      mouse3D.set(999, 999, 0);
      mouseNorm.set(999, 999);
    };

    const onScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
      scrollVel = (scrollY - lastScrollY) * 0.02;
      lastScrollY = scrollY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // 6. Reduced Motion Detection
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 7. IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 8. Physics & Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = Math.min(clock.getDelta(), 0.1);
      const time = clock.getElapsedTime();

      // Decay scroll velocity
      scrollVel *= 0.92;

      if (!prefersReducedMotion) {
        // --- Shard Physics Update ---
        for (let i = 0; i < actualFragmentCount; i++) {
          const item = shardData[i];

          // Harmonic zero-gravity floating oscillation
          const floatY = Math.sin(time * item.freq + item.phase) * item.amp;
          const floatX = Math.cos(time * (item.freq * 0.7) + item.phase) * (item.amp * 0.6);

          const targetX = item.basePos.x + floatX;
          const targetY = item.basePos.y + floatY - scrollVel * 0.8;
          const targetZ = item.basePos.z;

          // Mouse Repulsion Field (Anti-Gravity push)
          if (interactive && mouse3D.x < 500) {
            const dx = item.curPos.x - mouse3D.x;
            const dy = item.curPos.y - mouse3D.y;
            const distSq = dx * dx + dy * dy;
            const repulseRadius = 3.5;

            if (distSq < repulseRadius * repulseRadius && distSq > 0.01) {
              const dist = Math.sqrt(distSq);
              const force = (1.0 - dist / repulseRadius) * 4.5;
              item.vel.x += (dx / dist) * force * delta;
              item.vel.y += (dy / dist) * force * delta;
            }
          }

          // Spring return to base orbit
          item.vel.x += (targetX - item.curPos.x) * 2.8 * delta;
          item.vel.y += (targetY - item.curPos.y) * 2.8 * delta;
          item.vel.z += (targetZ - item.curPos.z) * 2.8 * delta;

          // Drag / Damping
          item.vel.multiplyScalar(0.92);

          // Position update
          item.curPos.addScaledVector(item.vel, delta * 60);

          // Rotation drift
          item.rot.x += item.rotVel.x * delta;
          item.rot.y += item.rotVel.y * delta;
          item.rot.z += item.rotVel.z * delta;

          // Apply to InstancedMesh matrix
          dummy.position.copy(item.curPos);
          dummy.rotation.copy(item.rot);
          dummy.scale.setScalar(item.scale);
          dummy.updateMatrix();

          instancedShards.setMatrixAt(i, dummy.matrix);
        }
        instancedShards.instanceMatrix.needsUpdate = true;

        // --- Inverted Gravity Starlight Motes (Drifting Upwards) ---
        const posAttr = particleGeo.attributes.position;
        const positions = posAttr.array;

        for (let i = 0; i < actualParticleCount; i++) {
          const idx = i * 3;
          // Upward drift speed + scroll inertia boost
          const speed = (particleSpeeds[i] + Math.max(0, scrollVel * 0.5)) * delta;
          positions[idx + 1] += speed;

          // Subtle horizontal harmonic weave
          positions[idx] += Math.sin(time * 0.8 + particlePhases[i]) * 0.003;

          // Wrap around top boundary
          if (positions[idx + 1] > yRange * 0.5) {
            positions[idx + 1] = -yRange * 0.5;
            positions[idx] = (Math.random() - 0.5) * xRange;
          }
        }
        posAttr.needsUpdate = true;

        // Subtle camera parallax
        if (mouseNorm.x < 50) {
          camera.position.x += (mouseNorm.x * 0.4 - camera.position.x) * 0.04;
          camera.position.y += (mouseNorm.y * 0.3 - camera.position.y) * 0.04;
          camera.lookAt(0, 0, 0);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 10. Cleanup
    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometries.forEach((g) => g.dispose());
      shardMat.dispose();
      instancedShards.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [theme, fragmentCount, particleCount, interactive]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}
