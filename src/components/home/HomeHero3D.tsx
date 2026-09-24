import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './HomeHero3D.css';

interface HomeHero3DProps {
  className?: string;
}

/**
 * Three interlocking golden rings — the signature I-denty membership element.
 * Gentle auto-rotation + mouse parallax via OrbitControls.
 */
const GoldenRings: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Slow, GPU-friendly auto rotation
    groupRef.current.rotation.y += delta * 0.15;
    // Subtle float bob
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
  });

  return (
    <group ref={groupRef} rotation={[-0.35, 0, 0.1]}>
      {/* Outer ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[1.6, 0.045, 24, 96]} />
        <meshStandardMaterial color="#85702f" metalness={0.85} roughness={0.25} />
      </mesh>

      {/* Middle ring — slightly tilted */}
      <mesh rotation={[-Math.PI / 2 + 0.3, 0.2, 0]} castShadow>
        <torusGeometry args={[1.2, 0.035, 24, 96]} />
        <meshStandardMaterial color="#b9a15a" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Inner ring */}
      <mesh rotation={[-Math.PI / 2 - 0.2, -0.15, 0]} castShadow>
        <torusGeometry args={[0.85, 0.03, 24, 96]} />
        <meshStandardMaterial color="#85702f" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
};

/**
 * Floating accent orbs — subtle depth cues in brand gold.
 */
const FloatingOrbs: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.children.forEach((child, i) => {
      const t = state.clock.elapsedTime * 0.5 + i * 1.4;
      child.position.y = Math.sin(t) * 0.15;
    });
  });

  const orbs = [
    { position: [2.4, 0.6, -1.2] as [number, number, number], scale: 0.09, color: '#b9a15a' },
    { position: [-2.2, -0.4, -0.8] as [number, number, number], scale: 0.07, color: '#85702f' },
    { position: [1.8, -0.9, 1.0] as [number, number, number], scale: 0.06, color: '#b9a15a' },
    { position: [-1.6, 1.0, 0.6] as [number, number, number], scale: 0.05, color: '#96683c' },
    { position: [0.4, 1.4, -1.6] as [number, number, number], scale: 0.08, color: '#85702f' },
  ];

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position} scale={orb.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={orb.color}
            metalness={0.7}
            roughness={0.35}
            emissive={orb.color}
            emissiveIntensity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
};

export const HomeHero3D: React.FC<HomeHero3DProps> = ({ className }) => {
  const [reducedMotion, setReducedMotion] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [coarsePointer, setCoarsePointer] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );

  useEffect(() => {
    const rmQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarseQuery = window.matchMedia('(pointer: coarse)');
    const onRm = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    const onCoarse = (e: MediaQueryListEvent) => setCoarsePointer(e.matches);
    rmQuery.addEventListener('change', onRm);
    coarseQuery.addEventListener('change', onCoarse);
    return () => {
      rmQuery.removeEventListener('change', onRm);
      coarseQuery.removeEventListener('change', onCoarse);
    };
  }, []);

  // Mobile / reduced-motion: render static hero without WebGL for performance
  const show3D = !reducedMotion && !coarsePointer;

  const heroContent = (
    <div className="hero-content">
      <div className="hero-eyebrow">Open Access &nbsp;|&nbsp; Elevated Standard</div>
      <h1>
        <span className="w"><span className="wi">Your</span></span>{' '}
        <span className="w"><span className="wi">Path</span></span>{' '}
        <span className="w"><span className="wi">Inside</span></span>{' '}
        <span className="w"><span className="wi">I-denty</span></span>
      </h1>
      <p className="lede">
        I-denty operates through structured access levels designed to support
        identity evolution at every stage of life.
      </p>
      <div className="hero-ctas">
        <a href="/finder" className="btn pill btn-primary-cta">
          Find My Level
        </a>
        <a href="/memberships" className="btn pill btn-secondary-cta">
          Explore Memberships
        </a>
      </div>
      <div className="hero-scroll-cue" aria-hidden="true">
        <span className="hero-scroll-line" />
      </div>
    </div>
  );

  return (
    <section
      className={`hero hero-3d ${className ?? ''}`}
      aria-label="I-denty — The identity-led lifestyle ecosystem"
    >
      {/* Layered gradient background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-glow hero-bg-glow-1" />
        <div className="hero-bg-glow hero-bg-glow-2" />
      </div>

      {/* Three.js scene — desktop, motion-allowed only */}
      {show3D && (
        <div className="hero-canvas-wrap" aria-hidden="true">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            frameloop="always"
          >
            {/* Warm ambient base */}
            <ambientLight intensity={0.55} color="#f6f2e8" />

            {/* Key light — directional with soft shadow */}
            <directionalLight
              position={[5, 6, 5]}
              intensity={1.4}
              color="#ffffff"
            />

            {/* Fill light in brand gold for warmth */}
            <pointLight position={[-4, -2, 3]} intensity={0.6} color="#b9a15a" distance={12} />

            {/* Hemisphere light — brand gold sky, sand ground */}
            <hemisphereLight intensity={0.4} color="#b9a15a" groundColor="#f6f2e8" />

            <GoldenRings />
            <FloatingOrbs />

            {/* Gentle mouse-driven camera drift */}
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableDamping
              dampingFactor={0.05}
              rotateSpeed={0.4}
              minPolarAngle={Math.PI / 2.6}
              maxPolarAngle={Math.PI / 1.7}
            />
          </Canvas>
        </div>
      )}

      {/* HTML content layer — always present for SEO & accessibility */}
      <div className="hero-inner identy-container">
        {heroContent}
      </div>
    </section>
  );
};
