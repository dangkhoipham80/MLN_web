"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Text } from "@react-three/drei";
import * as THREE from "three";

export default function SimpleTimelineScene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      {/* Simple rotating box */}
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>

      {/* Some spheres */}
      <Sphere position={[3, 0, 0]} args={[0.5, 32, 32]}>
        <meshStandardMaterial color="#ef4444" />
      </Sphere>

      <Sphere position={[-3, 0, 0]} args={[0.5, 32, 32]}>
        <meshStandardMaterial color="#22c55e" />
      </Sphere>

      <Text
        position={[0, 3, 0]}
        fontSize={1}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Timeline Triết học
      </Text>

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </>
  );
}
