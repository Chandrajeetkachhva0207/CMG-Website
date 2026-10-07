import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line, Text } from "@react-three/drei";
import * as THREE from "three";

function Node({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Sphere position={position} args={[0.2, 16, 16]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function Ecosystem() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      group.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  const n0: [number, number, number] = [0, 1.5, 0];
  const n1: [number, number, number] = [-1.2, -0.5, 1];
  const n2: [number, number, number] = [1.2, -0.5, 1];
  const n3: [number, number, number] = [0, -0.5, -1.5];

  return (
    <group ref={group}>
      <Node position={n0} color="#a855f7" />
      <Node position={n1} color="#3b82f6" />
      <Node position={n2} color="#ec4899" />
      <Node position={n3} color="#8b5cf6" />

      {/* Connections */}
      <Line points={[n0, n1]} color="#6366f1" opacity={0.5} transparent lineWidth={1} />
      <Line points={[n0, n2]} color="#6366f1" opacity={0.5} transparent lineWidth={1} />
      <Line points={[n0, n3]} color="#6366f1" opacity={0.5} transparent lineWidth={1} />

      <Line points={[n1, n2]} color="#6366f1" opacity={0.5} transparent lineWidth={1} />
      <Line points={[n2, n3]} color="#6366f1" opacity={0.5} transparent lineWidth={1} />
      <Line points={[n3, n1]} color="#6366f1" opacity={0.5} transparent lineWidth={1} />

      {/* Central Core */}
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial color="#8b5cf6" wireframe opacity={0.3} transparent />
      </Sphere>
    </group>
  );
}

export function About3D() {
  return (
    <div className="h-64 w-full md:h-80 lg:absolute lg:-right-10 lg:top-1/2 lg:-translate-y-1/2 lg:w-96 lg:h-96 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
        <Ecosystem />
      </Canvas>
    </div>
  );
}
