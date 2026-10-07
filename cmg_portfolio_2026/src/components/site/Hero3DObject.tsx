import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Points, PointMaterial, Torus, Line } from "@react-three/drei";
import * as THREE from "three";

/* ----------------------------------------------------------------
   NODE — glowing sphere with inner core
---------------------------------------------------------------- */
function Node({
  position,
  color,
  size = 0.14,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.scale.setScalar(1 + 0.06 * Math.sin(t * 2 + position[0]));
    }
  });

  return (
    <group position={position}>
      {/* Outer glow sphere */}
      <Sphere ref={ref} args={[size * 1.5, 16, 16]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}
          transparent
          opacity={0.18}
          roughness={0}
          metalness={1}
        />
      </Sphere>
      {/* Core */}
      <Sphere args={[size, 16, 16]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </group>
  );
}

/* ----------------------------------------------------------------
   CONNECTION LINE between two points
---------------------------------------------------------------- */
function Connection({
  start,
  end,
  opacity = 0.25,
}: {
  start: [number, number, number];
  end: [number, number, number];
  opacity?: number;
}) {
  return (
    <Line points={[start, end]} color="#a855f7" transparent opacity={opacity} lineWidth={0.5} />
  );
}

/* ----------------------------------------------------------------
   ORBIT RING with a glowing dot travelling around it
---------------------------------------------------------------- */
function OrbitRing({
  radius,
  rotation,
  color,
  speed,
  dotOffset = 0,
}: {
  radius: number;
  rotation: [number, number, number];
  color: string;
  speed: number;
  dotOffset?: number;
}) {
  const dotRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!dotRef.current) return;
    const t = state.clock.getElapsedTime() * speed + dotOffset;
    dotRef.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t) * radius * 0.3,
      Math.sin(t) * radius,
    );
  });

  return (
    <group rotation={rotation}>
      <Torus args={[radius, 0.008, 8, 120]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.35}
          roughness={0}
          metalness={1}
        />
      </Torus>
      {/* Travelling dot */}
      <Sphere ref={dotRef} args={[0.07, 12, 12]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </group>
  );
}

/* ----------------------------------------------------------------
   MAIN ECOSYSTEM
---------------------------------------------------------------- */
function Ecosystem({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<THREE.Group>(null);

  // Explicitly typed node positions to avoid `| undefined` from array indexing
  const n0: [number, number, number] = [0, 0, 0];
  const n1: [number, number, number] = [1.6, 0.8, 0.5];
  const n2: [number, number, number] = [-1.5, 0.9, -0.3];
  const n3: [number, number, number] = [0.3, -1.6, 0.8];
  const n4: [number, number, number] = [-0.5, -1.4, -0.9];
  const n5: [number, number, number] = [1.8, -0.6, -0.7];
  const n6: [number, number, number] = [-1.8, -0.5, 0.6];
  const n7: [number, number, number] = [0.0, 1.9, -0.4];

  const nodes: [number, number, number][] = [n0, n1, n2, n3, n4, n5, n6, n7];

  const connections: Array<[[number, number, number], [number, number, number]]> = [
    [n0, n1],
    [n0, n2],
    [n0, n3],
    [n0, n4],
    [n0, n7],
    [n1, n5],
    [n2, n6],
    [n3, n5],
    [n4, n6],
    [n1, n7],
    [n2, n7],
  ];

  const nodeColors: string[] = [
    "#a855f7",
    "#8b5cf6",
    "#d946ef",
    "#6366f1",
    "#c084fc",
    "#7c3aed",
    "#db2777",
    "#9333ea",
  ];

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.06 + mouseX * 0.5;
    groupRef.current.rotation.x = -0.15 + mouseY * 0.3;
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((pos, i) => (
        <Node
          key={i}
          position={pos}
          color={nodeColors[i % nodeColors.length] ?? "#a855f7"}
          size={i === 0 ? 0.22 : 0.13}
        />
      ))}

      {/* Connections */}
      {connections.map(([start, end], i) => (
        <Connection key={i} start={start} end={end} opacity={0.18 + (i % 3) * 0.05} />
      ))}

      {/* Center distort sphere */}
      <Sphere args={[0.48, 48, 48]}>
        <MeshDistortMaterial
          color="#1a0a2e"
          emissive="#7c3aed"
          emissiveIntensity={0.35}
          distort={0.45}
          speed={1.8}
          roughness={0.05}
          metalness={0.95}
          transparent
          opacity={0.9}
        />
      </Sphere>

      {/* Inner core glow */}
      <Sphere args={[0.28, 32, 32]}>
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={1.5}
          transparent
          opacity={0.7}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </group>
  );
}

/* ----------------------------------------------------------------
   FLOATING PARTICLES
---------------------------------------------------------------- */
function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 1800;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.8 + Math.random() * 2.4;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.04;
    ref.current.rotation.z = t * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c084fc"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/* ----------------------------------------------------------------
   CAMERA RIG — smoothly follows mouse
---------------------------------------------------------------- */
function CameraRig({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const { camera } = useThree();
  const targetX = useRef(0);
  const targetY = useRef(0);

  useFrame(() => {
    targetX.current += (mouseX * 1.2 - targetX.current) * 0.04;
    targetY.current += (-mouseY * 0.8 - targetY.current) * 0.04;
    camera.position.x += (targetX.current - camera.position.x) * 0.06;
    camera.position.y += (targetY.current - camera.position.y) * 0.06;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ----------------------------------------------------------------
   EXPORTED COMPONENT
---------------------------------------------------------------- */
export function Hero3DObject({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={2.5} color="#a855f7" />
      <pointLight position={[-4, -4, -4]} intensity={1.5} color="#6366f1" />
      <pointLight position={[0, 5, -3]} intensity={1.2} color="#d946ef" />
      <pointLight position={[0, 0, 0]} intensity={0.8} color="#a855f7" />

      {/* Camera follows mouse */}
      <CameraRig mouseX={mouseX} mouseY={mouseY} />

      {/* Orbit rings */}
      <OrbitRing radius={2.6} rotation={[0.4, 0, 0]} color="#8b5cf6" speed={0.4} />
      <OrbitRing
        radius={3.2}
        rotation={[1.1, 0.3, 0]}
        color="#d946ef"
        speed={-0.28}
        dotOffset={Math.PI}
      />
      <OrbitRing
        radius={2.0}
        rotation={[0, 0, 0.8]}
        color="#6366f1"
        speed={0.55}
        dotOffset={Math.PI * 0.5}
      />

      {/* Main ecosystem */}
      <Ecosystem mouseX={mouseX} mouseY={mouseY} />

      {/* Particle cloud */}
      <Particles />
    </>
  );
}
