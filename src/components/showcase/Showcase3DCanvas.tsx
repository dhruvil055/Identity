import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Showcase3DCanvasProps {
  onProgressUpdate?: (progress: number) => void;
}

export const Showcase3DCanvas: React.FC<Showcase3DCanvasProps> = ({ onProgressUpdate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xfbf9f5, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

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

    // 2. Lighting setup for Light Theme
    const ambientLight = new THREE.AmbientLight(0xfffdfa, 1.3);
    scene.add(ambientLight);

    const mainGoldLight = new THREE.DirectionalLight(0xc5a059, 4.5);
    mainGoldLight.position.set(5, 5, 5);
    scene.add(mainGoldLight);

    const bluePoint = new THREE.PointLight(0x0284c7, 6, 20);
    bluePoint.position.set(-4, -2, 3);
    scene.add(bluePoint);

    const bottomGlow = new THREE.PointLight(0xe8cf96, 8, 15);
    bottomGlow.position.set(0, -3, 2);
    scene.add(bottomGlow);

    // 3. Artifact Group
    const artifactGroup = new THREE.Group();
    scene.add(artifactGroup);

    // Materials
    const obsidianMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x181c2b,
      metalness: 0.92,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const coreEnergyMaterial = new THREE.MeshBasicMaterial({
      color: 0x9a7c38,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });

    // Outer Slabs
    const slabGeo = new THREE.BoxGeometry(0.75, 3.4, 0.25);
    const slabTL = new THREE.Mesh(slabGeo, obsidianMaterial);
    const slabTR = new THREE.Mesh(slabGeo, obsidianMaterial);
    const slabBL = new THREE.Mesh(slabGeo, obsidianMaterial);
    const slabBR = new THREE.Mesh(slabGeo, obsidianMaterial);

    slabTL.position.set(-0.45, 0, 0);
    slabTR.position.set(0.45, 0, 0);
    slabBL.position.set(0, 0, -0.45);
    slabBR.position.set(0, 0, 0.45);

    const slabsGroup = new THREE.Group();
    slabsGroup.add(slabTL, slabTR, slabBL, slabBR);
    artifactGroup.add(slabsGroup);

    // Gold Bevel Edge Frame
    const frameGeo = new THREE.BoxGeometry(1.9, 3.6, 1.2);
    const edges = new THREE.EdgesGeometry(frameGeo);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x9a7c38, transparent: true, opacity: 0.65 });
    const wireframeBox = new THREE.LineSegments(edges, lineMat);
    artifactGroup.add(wireframeBox);

    // Inner Quantum Singularity Core
    const coreGeo = new THREE.OctahedronGeometry(0.85, 2);
    const coreMesh = new THREE.Mesh(coreGeo, coreEnergyMaterial);
    artifactGroup.add(coreMesh);

    // Inner glowing sphere
    const glowSphereGeo = new THREE.SphereGeometry(0.45, 24, 24);
    const glowSphereMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      emissive: 0xc5a059,
      emissiveIntensity: 1.2,
      roughness: 0.1,
    });
    const glowSphere = new THREE.Mesh(glowSphereGeo, glowSphereMat);
    artifactGroup.add(glowSphere);

    // Concentric Scanning Laser Rings
    const ringGeo = new THREE.TorusGeometry(2.2, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x0284c7, transparent: true, opacity: 0.65 });
    const scanRing1 = new THREE.Mesh(ringGeo, ringMat);
    scanRing1.rotation.x = Math.PI / 2;
    artifactGroup.add(scanRing1);

    const ringMatGold = new THREE.MeshBasicMaterial({ color: 0x9a7c38, transparent: true, opacity: 0.75 });
    const scanRing2 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.025, 16, 100), ringMatGold);
    scanRing2.rotation.y = Math.PI / 3;
    artifactGroup.add(scanRing2);

    // Particles Cloud around showcase
    const pCount = isMobile ? 300 : 700;
    const pGeo = new THREE.BufferGeometry();
    const pCoords = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i += 3) {
      pCoords[i] = (Math.random() - 0.5) * 8;
      pCoords[i + 1] = (Math.random() - 0.5) * 8;
      pCoords[i + 2] = (Math.random() - 0.5) * 6;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pCoords, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x9a7c38,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // 4. GSAP ScrollTrigger Scrubbing
    const scrubProgress = { val: 0 };

    const st = ScrollTrigger.create({
      trigger: '#showcase',
      start: 'top top',
      end: '+=200%',
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        scrubProgress.val = self.progress;
        if (onProgressUpdate) onProgressUpdate(self.progress);

        const p = self.progress;

        artifactGroup.rotation.y = p * Math.PI * 3.5;
        artifactGroup.rotation.x = Math.sin(p * Math.PI) * 0.45;

        scanRing1.position.y = Math.sin(p * Math.PI * 4) * 1.5;
        scanRing2.rotation.z = p * Math.PI * 4;

        if (p < 0.5) {
          const explosion = Math.min(1, p * 2.2);
          slabTL.position.x = -0.45 - explosion * 1.2;
          slabTL.position.y = explosion * 0.4;
          slabTR.position.x = 0.45 + explosion * 1.2;
          slabTR.position.y = -explosion * 0.4;
          slabBL.position.z = -0.45 - explosion * 1.2;
          slabBR.position.z = 0.45 + explosion * 1.2;

          wireframeBox.scale.setScalar(1 + explosion * 0.5);
          wireframeBox.material.opacity = 0.5 + explosion * 0.5;

          glowSphere.scale.setScalar(1 + explosion * 0.9);
          coreMesh.scale.setScalar(1 + explosion * 0.7);
        } else {
          const synthesis = (p - 0.5) * 2;
          const remainingExplosion = 1 - synthesis;

          slabTL.position.x = -0.45 - remainingExplosion * 1.2;
          slabTR.position.x = 0.45 + remainingExplosion * 1.2;
          slabBL.position.z = -0.45 - remainingExplosion * 1.2;
          slabBR.position.z = 0.45 + remainingExplosion * 1.2;

          artifactGroup.scale.setScalar(1 + synthesis * 0.4);
          glowSphere.scale.setScalar(1.5 + synthesis * 0.5);
        }

        camera.position.z = 9 - Math.sin(p * Math.PI) * 1.8;
      },
    });

    // 5. Render Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      if (!isReduced) {
        coreMesh.rotation.y = elapsed * 0.5;
        coreMesh.rotation.x = elapsed * 0.3;
        particles.rotation.y = elapsed * 0.05;
        scanRing2.rotation.x = elapsed * 0.4;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      st.kill();

      slabGeo.dispose();
      frameGeo.dispose();
      edges.dispose();
      coreGeo.dispose();
      glowSphereGeo.dispose();
      ringGeo.dispose();
      pGeo.dispose();

      obsidianMaterial.dispose();
      coreEnergyMaterial.dispose();
      lineMat.dispose();
      glowSphereMat.dispose();
      ringMat.dispose();
      ringMatGold.dispose();
      pMat.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onProgressUpdate]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};
