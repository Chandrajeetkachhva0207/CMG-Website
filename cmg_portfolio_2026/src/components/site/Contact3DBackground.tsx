import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, MeshDistortMaterial, Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ----------------------------------------------------------------
   DATA NODES — floating glowing spheres
---------------------------------------------------------------- */
function DataNode({
  position,
  color,
  size,
  speed,
  rotIntensity,
  floatIntensity,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  rotIntensity: number;
  floatIntensity: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={rotIntensity} floatIntensity={floatIntensity} position={position}>
      <Sphere args={[size, 24, 24]}>
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          distort={0.25}
          speed={2}
          roughness={0.05}
          metalness={0.95}
          transparent
          opacity={0.85}
        />
      </Sphere>
      {/* Glow halo */}
      <Sphere args={[size * 1.7, 12, 12]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.1}
          transparent
          opacity={0.1}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
}

/* ----------------------------------------------------------------
   NETWORK CONNECTIONS
---------------------------------------------------------------- */
function NetworkLines() {
  const n0: [number, number, number] = [-4, 2, -5];
  const n1: [number, number, number] = [5, -1, -8];
  const n2: [number, number, number] = [-3, -3, -6];
  const n3: [number, number, number] = [3, 3, -7];
  const n4: [number, number, number] = [0, 0, -4];

  const pairs: Array<[[number, number, number], [number, number, number]]> = [
    [n0, n4],
    [n1, n4],
    [n2, n4],
    [n3, n4],
    [n0, n1],
    [n2, n3],
  ];

  return (
    <>
      {pairs.map((pair, i) => (
        <Line
          key={i}
          points={pair}
          color="#8b5cf6"
          transparent
          opacity={0.12 + (i % 3) * 0.04}
          lineWidth={0.6}
        />
      ))}
    </>
  );
}

/* ----------------------------------------------------------------
   AMBIENT PARTICLES
---------------------------------------------------------------- */
function AmbientParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 600;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12 - 5;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#c084fc"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

/* ----------------------------------------------------------------
   MAIN SCENE
---------------------------------------------------------------- */
function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.06;
  });

  return (
    <group ref={groupRef}>
      {/* Primary data nodes */}
      <DataNode position={[-4, 2, -5]} color="#8b5cf6" size={0.8} speed={1.8} rotIntensity={1} floatIntensity={1.8} />
      <DataNode position={[5, -1, -8]} color="#d946ef" size={1.1} speed={1.3} rotIntensity={1.5} floatIntensity={1.5} />
      <DataNode position={[-3, -3, -6]} color="#6366f1" size={0.65} speed={2.2} rotIntensity={1.2} floatIntensity={2.2} />
      <DataNode position={[3, 3, -7]} color="#a855f7" size={0.5} speed={2.8} rotIntensity={2} floatIntensity={2.5} />
      <DataNode position={[0, 0, -4]} color="#c084fc" size={0.45} speed={1.5} rotIntensity={0.8} floatIntensity={1.2} />

      {/* Wireframe torus ring */}
      <Float speed={1} rotationIntensity={2} floatIntensity={1} position={[5, -1, -8]}>
        <Torus args={[2, 0.06, 12, 60]}>
          <meshStandardMaterial
            color="#d946ef"
            emissive="#d946ef"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.9}
            wireframe
            transparent
            opacity={0.45}
          />
        </Torus>
      </Float>

      {/* Small accent torus */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[-4, 2, -5]}>
        <Torus args={[1.2, 0.04, 8, 48]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
            roughness={0}
            metalness={1}
            wireframe
            transparent
            opacity={0.4}
          />
        </Torus>
      </Float>

      {/* Network connections */}
      <NetworkLines />

      {/* Ambient particles */}
      <AmbientParticles />
    </group>
  );
}

/* ----------------------------------------------------------------
   EXPORTED COMPONENT
---------------------------------------------------------------- */
export function Contact3DBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-50">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />
        <pointLight position={[0, 5, 5]} intensity={1.5} color="#d946ef" />
        <Scene />
      </Canvas>
    </div>
  );
}
