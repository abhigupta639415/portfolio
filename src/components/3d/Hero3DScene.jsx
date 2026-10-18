import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles, Code2, Layers, Server } from 'lucide-react';

/**
 * Creates a high-DPI dynamic texture for the laptop screen
 */
function createScreenTexture(isDark) {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // Background
  ctx.fillStyle = isDark ? '#141412' : '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Top Title Bar
  ctx.fillStyle = isDark ? '#1D1D1A' : '#F4F2EC';
  ctx.fillRect(0, 0, canvas.width, 38);

  // Window control buttons
  const dots = [
    { x: 22, color: '#FF5F56' },
    { x: 40, color: '#FFBD2E' },
    { x: 58, color: '#27C93F' }
  ];
  dots.forEach((dot) => {
    ctx.beginPath();
    ctx.arc(dot.x, 19, 5.5, 0, Math.PI * 2);
    ctx.fillStyle = dot.color;
    ctx.fill();
  });

  // Tab
  ctx.fillStyle = isDark ? '#141412' : '#FFFFFF';
  ctx.roundRect(85, 8, 160, 30, [6, 6, 0, 0]);
  ctx.fill();

  ctx.fillStyle = isDark ? '#D4AF37' : '#C49A2C';
  ctx.font = 'bold 12px "JetBrains Mono", monospace';
  ctx.fillText('⚡ developer.ts', 100, 26);

  // Code editor lines
  ctx.textBaseline = 'top';
  const startY = 56;
  const lineHeight = 24;

  const lines = [
    [
      { text: 'const ', color: isDark ? '#E5C07B' : '#B45309' },
      { text: 'developer ', color: isDark ? '#61AFEF' : '#2563EB' },
      { text: '= {', color: isDark ? '#ABB2BF' : '#4B5563' }
    ],
    [
      { text: '  name: ', color: isDark ? '#E06C75' : '#DC2626' },
      { text: '"Abhishek Gupta"', color: isDark ? '#98C379' : '#15803D' },
      { text: ',', color: isDark ? '#ABB2BF' : '#4B5563' }
    ],
    [
      { text: '  role: ', color: isDark ? '#E06C75' : '#DC2626' },
      { text: '"Full-Stack Developer | AI"', color: isDark ? '#98C379' : '#15803D' },
      { text: ',', color: isDark ? '#ABB2BF' : '#4B5563' }
    ],
    [
      { text: '  stack: [', color: isDark ? '#ABB2BF' : '#4B5563' },
      { text: '"React"', color: isDark ? '#98C379' : '#15803D' },
      { text: ', ', color: isDark ? '#ABB2BF' : '#4B5563' },
      { text: '"Node.js"', color: isDark ? '#98C379' : '#15803D' },
      { text: ', ', color: isDark ? '#ABB2BF' : '#4B5563' },
      { text: '"MongoDB"', color: isDark ? '#98C379' : '#15803D' },
      { text: '],', color: isDark ? '#ABB2BF' : '#4B5563' }
    ],
    [
      { text: '  ai: [', color: isDark ? '#ABB2BF' : '#4B5563' },
      { text: '"OpenAI GPT"', color: isDark ? '#E5C07B' : '#B45309' },
      { text: ', ', color: isDark ? '#ABB2BF' : '#4B5563' },
      { text: '"Google Gemini"', color: isDark ? '#E5C07B' : '#B45309' },
      { text: '],', color: isDark ? '#ABB2BF' : '#4B5563' }
    ],
    [
      { text: '  status: ', color: isDark ? '#E06C75' : '#DC2626' },
      { text: '"Available for Hire"', color: isDark ? '#98C379' : '#15803D' }
    ],
    [
      { text: '};', color: isDark ? '#ABB2BF' : '#4B5563' }
    ]
  ];

  ctx.font = '13px "JetBrains Mono", Consolas, monospace';

  lines.forEach((tokens, idx) => {
    let curX = 35;
    const curY = startY + idx * lineHeight;

    // Line number
    ctx.fillStyle = isDark ? '#4B5263' : '#9CA3AF';
    ctx.fillText(String(idx + 1).padStart(2, ' '), 12, curY);

    tokens.forEach((tok) => {
      ctx.fillStyle = tok.color;
      ctx.fillText(tok.text, curX, curY);
      curX += ctx.measureText(tok.text).width;
    });
  });

  // Bottom Status Bar
  ctx.fillStyle = isDark ? '#1D1D1A' : '#F4F2EC';
  ctx.fillRect(0, canvas.height - 30, canvas.width, 30);

  ctx.fillStyle = isDark ? '#D4AF37' : '#C49A2C';
  ctx.beginPath();
  ctx.arc(20, canvas.height - 15, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillStyle = isDark ? '#B7B4AA' : '#66645F';
  ctx.fillText('Production-Ready Architecture · KIET 2023–2027', 32, canvas.height - 22);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Creates a high-DPI texture for a floating technology card
 */
function createCardTexture(tech, isDark) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // Background card rounded rect
  ctx.fillStyle = isDark ? '#1D1D1A' : '#FFFFFF';
  ctx.roundRect(4, 4, canvas.width - 8, canvas.height - 8, 14);
  ctx.fill();

  // Subtle border
  ctx.strokeStyle = tech.highlight
    ? isDark ? '#D4AF37' : '#C49A2C'
    : isDark ? '#34332E' : '#E7E3D8';
  ctx.lineWidth = tech.highlight ? 2.5 : 1.5;
  ctx.stroke();

  // Accent badge / pill on left or top
  if (tech.highlight) {
    ctx.fillStyle = isDark ? '#D4AF37' : '#C49A2C';
    ctx.roundRect(14, 14, 4, canvas.height - 28, 2);
    ctx.fill();
  }

  // Symbol / Icon
  ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = tech.color;
  ctx.fillText(tech.icon, 28, 42);

  // Title
  ctx.font = 'bold 15px "Inter", system-ui, sans-serif';
  ctx.fillStyle = isDark ? '#F5F3EA' : '#171717';
  ctx.fillText(tech.name, 62, 38);

  // Subtitle / category
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillStyle = isDark ? '#B7B4AA' : '#66645F';
  ctx.fillText(tech.category, 62, 58);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

const TECH_ITEMS = [
  { name: 'React.js', icon: '⚛', category: 'Frontend Architecture', color: '#61DAFB', pos: [-2.1, 0.9, 0.6], highlight: false },
  { name: 'Node.js', icon: '⬢', category: 'Backend Systems', color: '#68A063', pos: [2.1, 0.8, 0.8], highlight: false },
  { name: 'OpenAI GPT', icon: '✦', category: 'LLM & Multimodal', color: '#D4AF37', pos: [1.8, 1.8, -0.4], highlight: true },
  { name: 'MongoDB', icon: '🍃', category: 'Cloud Database', color: '#4DB33D', pos: [-1.9, -0.6, 0.8], highlight: false },
  { name: 'Gemini AI', icon: '✧', category: 'Vision & Inference', color: '#CE8946', pos: [-1.7, 1.9, -0.3], highlight: true },
  { name: 'AWS Cloud', icon: '☁', category: 'Cloud Practitioner', color: '#FF9900', pos: [2.0, -0.6, 0.5], highlight: false },
  { name: 'JavaScript', icon: 'JS', category: 'Modern ES6+ / TS', color: '#F7DF1E', pos: [-0.9, -1.2, 1.0], highlight: false },
  { name: 'Git & GitHub', icon: '⌥', category: 'Version Control', color: '#F05032', pos: [0.9, -1.2, 1.0], highlight: false },
];

export default function Hero3DScene() {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch (e) {
      setHasWebGL(false);
      return;
    }

    let isVisible = true;
    let animationFrameId = null;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0.35, 5.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0x22221f : 0xffffff,
      isDark ? 1.6 : 1.8
    );
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(
      isDark ? 0xfffaea : 0xffffff,
      isDark ? 1.8 : 2.0
    );
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const goldAccentLight = new THREE.PointLight(
      isDark ? 0xd4af37 : 0xc49a2c,
      isDark ? 2.5 : 2.0,
      12
    );
    goldAccentLight.position.set(-3, 2, 2.5);
    scene.add(goldAccentLight);

    const rimLight = new THREE.DirectionalLight(
      isDark ? 0x667799 : 0xccddee,
      isDark ? 0.9 : 0.6
    );
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // 3. Main Workspace Group
    const workspaceGroup = new THREE.Group();
    scene.add(workspaceGroup);

    // --- A. LAPTOP MODEL ---
    const laptopGroup = new THREE.Group();
    workspaceGroup.add(laptopGroup);

    // Laptop Base chassis
    const baseGeo = new THREE.BoxGeometry(2.1, 0.05, 1.45);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x1d1d1a : 0xf2f0e8,
      roughness: 0.35,
      metalness: 0.55
    });
    const laptopBase = new THREE.Mesh(baseGeo, chassisMat);
    laptopBase.position.set(0, -0.45, 0);
    laptopBase.receiveShadow = true;
    laptopBase.castShadow = true;
    laptopGroup.add(laptopBase);

    // Keyboard recess plate
    const kbGeo = new THREE.BoxGeometry(1.9, 0.01, 0.75);
    const kbMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x131311 : 0xd8d5ca,
      roughness: 0.7,
      metalness: 0.2
    });
    const keyboardPlate = new THREE.Mesh(kbGeo, kbMat);
    keyboardPlate.position.set(0, -0.42, -0.18);
    laptopGroup.add(keyboardPlate);

    // Trackpad plate
    const padGeo = new THREE.BoxGeometry(0.65, 0.008, 0.42);
    const padMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x242420 : 0xe5e2d6,
      roughness: 0.3,
      metalness: 0.4
    });
    const trackpad = new THREE.Mesh(padGeo, padMat);
    trackpad.position.set(0, -0.42, 0.44);
    laptopGroup.add(trackpad);

    // Laptop Lid & Screen Group (hinge rotation)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, -0.43, -0.72);
    lidGroup.rotation.x = THREE.MathUtils.degToRad(108); // slightly tilted open
    laptopGroup.add(lidGroup);

    // Lid chassis backing
    const lidGeo = new THREE.BoxGeometry(2.1, 1.35, 0.04);
    const lidMesh = new THREE.Mesh(lidGeo, chassisMat);
    lidMesh.position.set(0, 0.67, 0);
    lidMesh.castShadow = true;
    lidGroup.add(lidMesh);

    // Screen Bezel Inner Border
    const screenBorderGeo = new THREE.BoxGeometry(1.98, 1.25, 0.005);
    const screenBorderMat = new THREE.MeshBasicMaterial({ color: isDark ? 0x0a0a09 : 0x222220 });
    const screenBorder = new THREE.Mesh(screenBorderGeo, screenBorderMat);
    screenBorder.position.set(0, 0.67, 0.021);
    lidGroup.add(screenBorder);

    // Display Panel with Dynamic Canvas Texture
    const screenTexture = createScreenTexture(isDark);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      toneMapped: false
    });
    const screenGeo = new THREE.PlaneGeometry(1.92, 1.18);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.67, 0.025);
    lidGroup.add(screenMesh);

    // Gold subtle rim around laptop screen
    const screenGlowGeo = new THREE.RingGeometry(0.95, 0.96, 4);
    const screenGlowMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0xd4af37 : 0xc49a2c,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide
    });
    const screenGlow = new THREE.Mesh(screenGlowGeo, screenGlowMat);
    screenGlow.scale.set(1.02, 0.64, 1);
    screenGlow.position.set(0, 0.67, 0.024);
    lidGroup.add(screenGlow);

    // --- B. FLOATING TECHNOLOGY CARDS ---
    const cardsGroup = new THREE.Group();
    workspaceGroup.add(cardsGroup);

    const cardMeshes = [];
    const cardTextures = [];
    const cardGeos = [];
    const cardMats = [];

    TECH_ITEMS.forEach((tech) => {
      const tex = createCardTexture(tech, isDark);
      cardTextures.push(tex);

      const cGeo = new THREE.PlaneGeometry(1.0, 0.38);
      cardGeos.push(cGeo);

      const cMat = new THREE.MeshStandardMaterial({
        map: tex,
        transparent: true,
        roughness: 0.2,
        metalness: 0.1,
        side: THREE.DoubleSide
      });
      cardMats.push(cMat);

      const cMesh = new THREE.Mesh(cGeo, cMat);
      cMesh.position.set(tech.pos[0], tech.pos[1], tech.pos[2]);
      cMesh.castShadow = true;

      // Initial card angle for natural 3D depth
      cMesh.rotation.y = tech.pos[0] > 0 ? -0.15 : 0.15;
      cMesh.rotation.x = 0.04;

      cMesh.userData = {
        basePos: [...tech.pos],
        floatSpeed: 0.8 + Math.random() * 0.4,
        floatPhase: Math.random() * Math.PI * 2,
        floatAmp: 0.04 + Math.random() * 0.02,
        rotSpeed: 0.2 + Math.random() * 0.2
      };

      cardsGroup.add(cMesh);
      cardMeshes.push(cMesh);
    });

    // --- C. FLOATING GEOMETRIC SHAPES ---
    const geoGroup = new THREE.Group();
    workspaceGroup.add(geoGroup);

    // 1. Sleek metallic gold Torus ring
    const torusGeo = new THREE.TorusGeometry(0.32, 0.022, 16, 64);
    const goldMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0xd4af37 : 0xc49a2c,
      roughness: 0.25,
      metalness: 0.85
    });
    const torusMesh = new THREE.Mesh(torusGeo, goldMat);
    torusMesh.position.set(1.4, 1.4, -0.6);
    torusMesh.castShadow = true;
    geoGroup.add(torusMesh);

    // 2. Rounded minimal cube
    const cubeGeo = new THREE.BoxGeometry(0.24, 0.24, 0.24);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x2a2a24 : 0xeeebe2,
      roughness: 0.3,
      metalness: 0.6
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
    cubeMesh.position.set(-1.4, -1.0, 0.2);
    cubeMesh.castShadow = true;
    geoGroup.add(cubeMesh);

    // 3. Small smooth floating sphere
    const sphereGeo = new THREE.SphereGeometry(0.12, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0xd4af37 : 0xce8946,
      roughness: 0.2,
      metalness: 0.7
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.position.set(-1.4, 1.1, -0.5);
    geoGroup.add(sphereMesh);

    // 4. Abstract Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(0.14, 0);
    const icoMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x3a3934 : 0xe0ddd3,
      wireframe: true,
      roughness: 0.4
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(1.6, -0.9, -0.3);
    geoGroup.add(icoMesh);

    // --- D. AMBIENT PARTICLES ---
    const particleCount = 36;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 5.5;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 4.0;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 3.0;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: isDark ? 0xd4af37 : 0xc49a2c,
      size: 0.035,
      transparent: true,
      opacity: isDark ? 0.45 : 0.35
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    workspaceGroup.add(particles);

    // --- E. DATA CONNECTION LINES (Abstract Neural/Network lines) ---
    const lineMat = new THREE.LineBasicMaterial({
      color: isDark ? 0xd4af37 : 0xc49a2c,
      transparent: true,
      opacity: isDark ? 0.22 : 0.16
    });

    const connections = [
      [[-2.1, 0.9, 0.6], [0, 0.2, 0]],
      [[2.1, 0.8, 0.8], [0, 0.2, 0]],
      [[1.8, 1.8, -0.4], [0, 0.4, 0]],
      [[-1.7, 1.9, -0.3], [0, 0.4, 0]]
    ];

    connections.forEach(([start, end]) => {
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(...start),
        new THREE.Vector3((start[0] + end[0]) * 0.5, Math.max(start[1], end[1]) + 0.3, (start[2] + end[2]) * 0.5),
        new THREE.Vector3(...end)
      );
      const points = curve.getPoints(24);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeo, lineMat);
      workspaceGroup.add(line);
    });

    // 4. Mouse Interaction & Physics interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let curRotX = 0;
    let curRotY = 0;
    let scrollY = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleMouseMove = (e) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      // Max rotation: ~6 degrees (0.1 rad)
      targetRotY = normX * 0.11;
      targetRotX = -normY * 0.08;
    };

    const handleScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 5. IntersectionObserver (Pause RAF when offscreen)
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 6. Smooth Entrance Animation
    let entranceProgress = 0;
    workspaceGroup.position.y = -0.55;
    workspaceGroup.position.z = -0.5;
    workspaceGroup.scale.set(0.9, 0.9, 0.9);

    // 7. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Entrance interpolation
      if (entranceProgress < 1) {
        entranceProgress = Math.min(entranceProgress + delta * 1.2, 1);
        const ease = 1 - Math.pow(1 - entranceProgress, 3); // cubic out
        workspaceGroup.position.y = -0.55 + ease * 0.55;
        workspaceGroup.position.z = -0.5 + ease * 0.5;
        const s = 0.9 + ease * 0.1;
        workspaceGroup.scale.set(s, s, s);
      }

      if (!prefersReducedMotion) {
        // Smooth lerp mouse parallax
        curRotY += (targetRotY - curRotY) * 0.06;
        curRotX += (targetRotX - curRotX) * 0.06;

        // Idle floating oscillation
        const idleY = Math.sin(elapsedTime * 0.85) * 0.055;
        const idleRotZ = Math.sin(elapsedTime * 0.45) * 0.015;

        // Scroll parallax reaction (moves back and dims gently as user scrolls down)
        const scrollFactor = Math.min(scrollY / 600, 1);
        workspaceGroup.position.z = -scrollFactor * 1.2;
        workspaceGroup.position.y = idleY - scrollFactor * 0.35;
        workspaceGroup.rotation.y = curRotY + Math.sin(elapsedTime * 0.3) * 0.02 - scrollFactor * 0.15;
        workspaceGroup.rotation.x = curRotX + scrollFactor * 0.1;
        workspaceGroup.rotation.z = idleRotZ;

        // Animate floating tech cards
        cardMeshes.forEach((mesh) => {
          const { basePos, floatSpeed, floatPhase, floatAmp } = mesh.userData;
          mesh.position.y = basePos[1] + Math.sin(elapsedTime * floatSpeed + floatPhase) * floatAmp;
          mesh.position.x = basePos[0] + Math.cos(elapsedTime * (floatSpeed * 0.6) + floatPhase) * 0.02;
          mesh.rotation.y = (mesh.userData.basePos[0] > 0 ? -0.15 : 0.15) + curRotY * 0.5;
        });

        // Rotate geometric shapes slowly
        torusMesh.rotation.x += delta * 0.45;
        torusMesh.rotation.y += delta * 0.6;
        cubeMesh.rotation.x += delta * 0.3;
        cubeMesh.rotation.y += delta * 0.4;
        icoMesh.rotation.y += delta * 0.35;
        sphereMesh.position.y = 1.1 + Math.sin(elapsedTime * 1.1) * 0.05;

        // Slowly drift particles
        particles.rotation.y = elapsedTime * 0.03;
      }

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // 8. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;

      // Adjust camera distance for mobile / tablet screens
      if (width < 480) {
        camera.position.z = 7.2;
      } else if (width < 768) {
        camera.position.z = 6.4;
      } else {
        camera.position.z = 5.8;
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // 9. Cleanup & Memory Management
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      baseGeo.dispose();
      kbGeo.dispose();
      padGeo.dispose();
      lidGeo.dispose();
      screenBorderGeo.dispose();
      screenGeo.dispose();
      screenGlowGeo.dispose();
      torusGeo.dispose();
      cubeGeo.dispose();
      sphereGeo.dispose();
      icoGeo.dispose();
      particleGeo.dispose();

      chassisMat.dispose();
      kbMat.dispose();
      padMat.dispose();
      screenBorderMat.dispose();
      screenMat.dispose();
      screenGlowMat.dispose();
      goldMat.dispose();
      cubeMat.dispose();
      sphereMat.dispose();
      icoMat.dispose();
      particleMat.dispose();
      lineMat.dispose();

      cardGeos.forEach((g) => g.dispose());
      cardMats.forEach((m) => m.dispose());
      cardTextures.forEach((t) => t.dispose());
      screenTexture.dispose();

      renderer.dispose();
    };
  }, [theme]); // Re-run cleanly when theme toggles (dark/light) to rebuild materials with precise palette tokens

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden flex items-center justify-center select-none"
      role="img"
      aria-label="Interactive 3D visualization of Abhishek Gupta's full-stack development technology stack."
    >
      {/* Subtle background ambient aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C49A2C]/5 via-transparent to-[#CE8946]/5 dark:from-[#D4AF37]/5 dark:to-transparent pointer-events-none rounded-3xl" />
      <div className="absolute inset-0 border border-[#E7E3D8]/80 dark:border-[#34332E]/80 rounded-3xl pointer-events-none" />

      {/* Floating badges indicator / hint */}
      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA] pointer-events-none z-10 px-2">
        <span className="flex items-center gap-1.5 bg-[#FFFFFF]/80 dark:bg-[#1D1D1A]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#E7E3D8] dark:border-[#34332E]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C49A2C] dark:bg-[#D4AF37] animate-pulse" />
          Interactive 3D &middot; Move Cursor
        </span>
        <span className="hidden sm:inline-block bg-[#FFFFFF]/80 dark:bg-[#1D1D1A]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#E7E3D8] dark:border-[#34332E]">
          Full-Stack &middot; AI Core
        </span>
      </div>

      {/* Graceful Static Fallback for WebGL-disabled devices */}
      {!hasWebGL && (
        <div className="w-full h-full p-6 flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#1D1D1A] rounded-3xl border border-[#E7E3D8] dark:border-[#34332E]">
          <div className="flex items-center justify-between border-b border-[#E7E3D8] dark:border-[#34332E] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C49A2C] dark:bg-[#D4AF37]" />
              <span className="text-xs font-mono font-bold text-[#171717] dark:text-[#F5F3EA]">
                Engineering Workstation
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA]">
              Full-Stack &bull; AI
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs p-4 rounded-xl bg-[#FAFAF8] dark:bg-[#131311] border border-[#E7E3D8] dark:border-[#34332E]">
            <div className="text-[#66645F] dark:text-[#B7B4AA]">// developer.ts</div>
            <div className="text-[#171717] dark:text-[#F5F3EA]">
              <span className="text-[#C49A2C] dark:text-[#D4AF37]">const</span> stack = [
              <span className="text-emerald-600 dark:text-emerald-400">"React"</span>,{' '}
              <span className="text-emerald-600 dark:text-emerald-400">"Node.js"</span>,{' '}
              <span className="text-emerald-600 dark:text-emerald-400">"MongoDB"</span>];
            </div>
            <div className="text-[#171717] dark:text-[#F5F3EA]">
              <span className="text-[#C49A2C] dark:text-[#D4AF37]">const</span> ai = [
              <span className="text-amber-600 dark:text-amber-400">"OpenAI GPT"</span>,{' '}
              <span className="text-amber-600 dark:text-amber-400">"Google Gemini"</span>];
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />
              <span>React Architecture</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] flex items-center gap-2">
              <Server className="w-4 h-4 text-[#CE8946]" />
              <span>Node.js / Express</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
