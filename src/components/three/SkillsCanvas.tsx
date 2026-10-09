"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { skillCategories } from "@/data/portfolio";

/**
 * FloatingSkillOrb — individual 3D orb representing a skill category.
 */
function FloatingSkillOrb({
  position,
  color,
  index,
}: {
  position: [number, number, number];
  color: string;
  index: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3 + index;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2 + index * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[0.35, 0]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.7}
          distort={0.2}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

/**
 * SkillsCanvas — mini 3D scene with floating orbs for the skills section.
 */
function SkillsScene() {
  const orbs = skillCategories.map((cat, i) => {
    const angle = (i / skillCategories.length) * Math.PI * 2;
    const radius = 2;
    return {
      position: [
        Math.cos(angle) * radius,
        Math.sin(i * 1.2) * 0.5,
        Math.sin(angle) * radius,
      ] as [number, number, number],
      color: cat.color,
      index: i,
    };
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 3, 0]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[-3, 0, 2]} intensity={0.4} color="#a855f7" />
      {orbs.map((orb, i) => (
        <FloatingSkillOrb key={i} {...orb} />
      ))}
      <Text
        position={[0, -2, 0]}
        fontSize={0.2}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
      >
        Hover cards to explore →
      </Text>
    </>
  );
}

export default function SkillsCanvas() {
  return (
    <div className="h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px]" aria-hidden="true">
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 1, 5], fov: 45 }}
          gl={{ alpha: true, antialias: true }}
        >
          <SkillsScene />
        </Canvas>
      </Suspense>
    </div>
  );
}
