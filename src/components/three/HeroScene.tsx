"use client";

import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Environment,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * Detect mobile viewport to reduce 3D complexity for performance.
 */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

/**
 * InteractiveGeometricShape
 * Low-poly icosahedron that tilts toward cursor and rotates continuously.
 */
function InteractiveGeometricShape({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Continuous subtle rotation
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += delta * 0.05;

    // Cursor tilt — lerp toward pointer position for spring-like feel
    targetRotation.current.y = pointer.x * 0.4;
    targetRotation.current.x = pointer.y * 0.3;

    meshRef.current.rotation.y += THREE.MathUtils.lerp(
      0,
      targetRotation.current.y - meshRef.current.rotation.y * 0.1,
      0.05
    );
    meshRef.current.rotation.x += THREE.MathUtils.lerp(
      0,
      targetRotation.current.x,
      0.05
    );

    // Gentle floating bob
    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={isMobile ? 1.6 : 2.2}>
        {/* Icosahedron = low-poly geometric shape */}
        <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#0e7490"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={2}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Inner glow core */}
      <mesh scale={0.5}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

/**
 * Scene lighting setup — atmospheric point + directional + ambient.
 */
function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-3, 2, -2]} intensity={0.6} color="#22d3ee" />
      <pointLight position={[3, -1, 3]} intensity={0.4} color="#a855f7" />
      <pointLight position={[0, 3, -4]} intensity={0.3} color="#3b82f6" />
    </>
  );
}

/**
 * Loading fallback spinner shown while 3D assets initialize.
 */
function CanvasLoader() {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      role="status"
      aria-label="Loading 3D scene"
    >
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-neon-cyan" />
        <div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-neon-purple [animation-direction:reverse] [animation-duration:1.5s]" />
      </div>
    </div>
  );
}

/**
 * HeroScene — full R3F canvas for the hero section background.
 */
export default function HeroScene() {
  const isMobile = useIsMobile();

  return (
    <div className="canvas-container" aria-hidden="true">
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          gl={{
            antialias: !isMobile,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <SceneLighting />
          <InteractiveGeometricShape isMobile={isMobile} />
          {!isMobile && (
            <Stars
              radius={80}
              depth={40}
              count={1500}
              factor={3}
              saturation={0}
              fade
              speed={0.5}
            />
          )}
          <Environment preset="night" />
        </Canvas>
      </Suspense>
    </div>
  );
}
