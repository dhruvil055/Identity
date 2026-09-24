import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect reduced motion or low performance
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // 1. Scene, Camera, Renderer (Light Editorial Theme)
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xfbf9f5, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 2. Lighting setup for Light Theme (Luminous Warm Sunlight)
    const ambientLight = new THREE.AmbientLight(0xfffdf7, 1.4);
    scene.add(ambientLight);

    const keyGoldLight = new THREE.PointLight(0xc5a059, 14, 25);
    keyGoldLight.position.set(4, 4, 5);
    scene.add(keyGoldLight);

    const fillGoldLight = new THREE.PointLight(0xe8cf96, 9, 20);
    fillGoldLight.position.set(-4, -2, 4);
    scene.add(fillGoldLight);

    const softRim = new THREE.PointLight(0x0284c7, 3, 15);
    softRim.position.set(0, -4, -2);
    scene.add(softRim);

    // 3. Central Identity Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // High Polish Champagne Gold Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xbfa05a,
      metalness: 0.9,
      roughness: 0.2,
      envMapIntensity: 1.5,
    });

    const innerGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4ba7d,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x9a7c38,
      emissiveIntensity: 0.15,
    });

    const crystalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.85,
      opacity: 0.95,
      transparent: true,
      roughness: 0.08,
      ior: 1.55,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
    });

    // Ring 1 (Outer equatorial)
    const ring1Geo = new THREE.TorusGeometry(2.35, 0.045, 24, 100);
    const ring1 = new THREE.Mesh(ring1Geo, goldMaterial);
    ring1.rotation.x = Math.PI / 2.3;
    coreGroup.add(ring1);

    // Ring 2 (Middle inclined)
    const ring2Geo = new THREE.TorusGeometry(1.85, 0.038, 24, 100);
    const ring2 = new THREE.Mesh(ring2Geo, innerGoldMaterial);
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.x = -Math.PI / 4;
    coreGroup.add(ring2);

    // Ring 3 (Inner vertical)
    const ring3Geo = new THREE.TorusGeometry(1.35, 0.032, 20, 80);
    const ring3 = new THREE.Mesh(ring3Geo, goldMaterial);
    ring3.rotation.z = Math.PI / 6;
    ring3.rotation.y = -Math.PI / 3;
    coreGroup.add(ring3);

    // Central Floating Polyhedral Crystal
    const crystalGeo = new THREE.IcosahedronGeometry(0.82, 0);
    const crystal = new THREE.Mesh(crystalGeo, crystalMaterial);
    coreGroup.add(crystal);

    // Wireframe cage over crystal
    const wireframeGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x9a7c38,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireframe = new THREE.Mesh(wireframeGeo, wireframeMat);
    coreGroup.add(wireframe);

    // 4. Stardust Quantum Particle Field (Calibrated for Light Theme)
    const particleCount = isMobile ? 400 : 1100;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.2 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);

      scaleArray[i / 3] = Math.random() * 0.035 + 0.01;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.035 : 0.045,
      color: 0x9a7c38,
      transparent: true,
      opacity: 0.65,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Mouse Parallax Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    if (!isReduced) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // 6. GSAP ScrollTrigger Scrubbing
    const scrollAnimation = gsap.to(coreGroup.rotation, {
      x: Math.PI * 1.5,
      y: Math.PI * 2,
      z: Math.PI * 0.5,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

    const scaleAnimation = gsap.to(coreGroup.scale, {
      x: 1.35,
      y: 1.35,
      z: 1.35,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

    const particlesScroll = gsap.to(particles.rotation, {
      y: Math.PI * 0.8,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    // 7. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      if (!isReduced) {
        ring1.rotation.z += 0.003;
        ring2.rotation.x += 0.004;
        ring3.rotation.y += 0.005;

        crystal.rotation.x += 0.002;
        crystal.rotation.y += 0.003;
        wireframe.rotation.x += 0.002;
        wireframe.rotation.y += 0.003;

        particles.rotation.y += 0.0008;

        currentMouseX += (targetMouseX - currentMouseX) * 0.04;
        currentMouseY += (targetMouseY - currentMouseY) * 0.04;

        camera.position.x = currentMouseX * 1.2;
        camera.position.y = -currentMouseY * 0.8;
        camera.lookAt(0, 0, 0);

        coreGroup.position.y = Math.sin(elapsed * 0.8) * 0.12;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // 9. Cleanup & Resource Disposal
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      scrollAnimation.kill();
      scaleAnimation.kill();
      particlesScroll.kill();

      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      crystalGeo.dispose();
      wireframeGeo.dispose();
      particleGeo.dispose();

      goldMaterial.dispose();
      innerGoldMaterial.dispose();
      crystalMaterial.dispose();
      wireframeMat.dispose();
      particleMat.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
};
