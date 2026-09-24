import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, ContactShadows, PresentationControls } from '@react-three/drei';
import { motion, type Variants } from 'framer-motion';
import { Button } from '../common/Button';
import { Compass, ChevronDown } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/brandData';
import * as THREE from 'three';

// The 3D Interactive Object
const IdentitySculpture = () => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((_state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.15;
      mesh.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh} scale={2}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial 
          backside
          backsideThickness={5}
          thickness={2}
          chromaticAberration={0.08}
          anisotropicBlur={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2.5}
          color="#d4b98a"
          transmission={1}
          roughness={0.05}
          metalness={0.2}
        />
      </mesh>
    </Float>
  );
};

export const HeroSection: React.FC = () => {
  // framer-motion orchestration
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
  };
  
  const item: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: "spring", stiffness: 70, damping: 20 } }
  };

  return (
    <section
      className="home-hero-section"
      aria-label="I-denty — The identity-led lifestyle ecosystem"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 110px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#0a0b0d', // Deep dark for 3D contrast
        color: '#ffffff',
      }}
    >
      {/* Interactive 3D Canvas Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
          <color attach="background" args={['#0a0b0d']} />
          <ambientLight intensity={0.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <IdentitySculpture />
          </PresentationControls>
          
          <Environment preset="city" />
          <ContactShadows position={[0, -3, 0]} opacity={0.6} scale={15} blur={2} far={4} color="#b59c67" />
        </Canvas>
      </div>

      {/* HTML Overlay Content with Fluid Animations */}
      <motion.div
        className="identy-container"
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: 'clamp(4rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          textAlign: 'center',
          maxWidth: '960px',
          pointerEvents: 'none' // Allow mouse to interact with 3D canvas behind
        }}
      >
        <motion.div variants={item} style={{ marginBottom: '1.8rem', pointerEvents: 'auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(181, 156, 103, 0.35)',
              color: '#ffffff',
              fontSize: '0.78rem',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontWeight: 500,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}
          >
            <span style={{ color: 'var(--color-brand-gold)' }}>◈</span>
            <span>{BRAND_CONFIG.tagline}</span>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          style={{
            color: '#ffffff',
            fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            textShadow: '0 8px 40px rgba(0, 0, 0, 0.6)',
            pointerEvents: 'auto'
          }}
        >
          {BRAND_CONFIG.heroTitle}
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.65,
            maxWidth: '780px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '3rem',
            fontWeight: 300,
            pointerEvents: 'auto'
          }}
        >
          {BRAND_CONFIG.heroSubtitle}
        </motion.p>

        <motion.div variants={item} style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.2rem',
          pointerEvents: 'auto'
        }}>
          <Button 
            variant="gold" 
            href="/reinvention" 
            withArrow 
            style={{ 
              boxShadow: '0 0 25px rgba(181,156,103,0.35)',
              border: 'none'
            }}
          >
            Explore I-denty
          </Button>
          <Button
            variant="ghost-light"
            href="/finder"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)'
            }}
          >
            <Compass size={16} />
            <span>Find Your Starting Point</span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Cue */}
      <motion.a
        href="#what-is-identy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: 'rgba(255, 255, 255, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.7rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
        }}
      >
        <span>Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
};
