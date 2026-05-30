'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

interface OrbShaderMaterialProps {
  args?: [THREE.ShaderMaterial];
}

const OrbCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const pulseRef = useRef({ value: 0 });
  const { mouse } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  // Update mouse tracking
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;

    // Slow rotation
    meshRef.current.rotation.x += 0.0005;
    meshRef.current.rotation.y += 0.0008;

    // Pulse effect
    pulseRef.current.value += 0.02;
    const pulse = Math.sin(pulseRef.current.value) * 0.15 + 1;
    meshRef.current.scale.set(pulse, pulse, pulse);

    // Cursor reaction (subtle)
    meshRef.current.position.x = mouseRef.current.x * 0.1;
    meshRef.current.position.y = mouseRef.current.y * 0.1;

    // Emissive pulse
    const emissiveIntensity = Math.sin(pulseRef.current.value * 0.5) * 0.3 + 0.5;
    materialRef.current.emissiveIntensity = emissiveIntensity;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#0066ff"
        emissive="#0044cc"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
        wireframe={false}
      />
    </mesh>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const positionRef = useRef<THREE.BufferAttribute | null>(null);

  useEffect(() => {
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    positionRef.current = new THREE.BufferAttribute(positions, 3);
  }, []);

  useFrame(() => {
    if (!particlesRef.current || !positionRef.current) return;

    particlesRef.current.rotation.x += 0.0002;
    particlesRef.current.rotation.y += 0.0003;

    const positions = positionRef.current.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += (Math.random() - 0.5) * 0.01;
      positions[i + 1] += (Math.random() - 0.5) * 0.01;
      positions[i + 2] += (Math.random() - 0.5) * 0.01;
    }
    positionRef.current.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionRef.current?.count || 0}
          array={positionRef.current?.array || new Float32Array()}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ff88"
        sizeAttenuation={true}
        transparent
        opacity={0.6}
      />
    </points>
  );
};

const Glow = () => {
  return (
    <mesh>
      <sphereGeometry args={[1.3, 64, 64]} />
      <meshBasicMaterial
        color="#0066ff"
        transparent
        opacity={0.1}
        side={THREE.BackSide}
      />
    </mesh>
  )
};

const SparklesEmitter = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0005;
      pointsRef.current.rotation.y += 0.0008;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    const radius = 3.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi);
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#0066ff" sizeAttenuation={true} transparent opacity={0.6} />
    </points>
  );
};

export const AIOrb = () => {
  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-background via-background to-slate-950/50">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#0066ff" />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#00ff88" />

        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <Glow />
          <OrbCore />
          <ParticleField />
          <SparklesEmitter />
        </Float>
      </Canvas>

      {/* Gradient overlay for atmosphere */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40 pointer-events-none" />
    </div>
  );
};
