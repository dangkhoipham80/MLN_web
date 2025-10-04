"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Html, Sphere, Cylinder } from "@react-three/drei";
import * as THREE from "three";
import { useRouter } from "next/navigation";

interface TimelineNodeProps {
  position: [number, number, number];
  era: string;
  philosopher: string;
  year: string;
  color: string;
  onHover: (philosopher: string) => void;
  onLeave: () => void;
  onClick: (philosopher: string) => void;
}

function TimelineNode({
  position,
  era,
  philosopher,
  year,
  color,
  onHover,
  onLeave,
  onClick,
}: TimelineNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[0.5, 32, 32]}
        onPointerOver={() => {
          setHovered(true);
          onHover(philosopher);
        }}
        onPointerOut={() => {
          setHovered(false);
          onLeave();
        }}
        onClick={() => onClick(philosopher)}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>

      <Text
        position={[0, 1.2, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {philosopher}
      </Text>

      <Text
        position={[0, 0.8, 0]}
        fontSize={0.2}
        color="yellow"
        anchorX="center"
        anchorY="middle"
      >
        {year}
      </Text>

      <Text
        position={[0, 0.4, 0]}
        fontSize={0.15}
        color="lightblue"
        anchorX="center"
        anchorY="middle"
      >
        {era}
      </Text>
    </group>
  );
}

export default function SimpleTimelineScene() {
  const [hoveredPhilosopher, setHoveredPhilosopher] = useState<string | null>(
    null
  );
  const router = useRouter();

  const philosophers = [
    {
      position: [-8, 0, 0] as [number, number, number],
      era: "Cổ đại",
      philosopher: "Plato",
      year: "427-347 TCN",
      color: "#8B5CF6",
      description: "Linh hồn không mang giới, bình đẳng về lý trí",
      route: "plato",
    },
    {
      position: [-6, 0, 0] as [number, number, number],
      era: "Cổ đại",
      philosopher: "Aristotle",
      year: "384-322 TCN",
      color: "#7C3AED",
      description: "Nam = lý trí, nữ = cảm tính → phân biệt tự nhiên",
      route: "aristotle",
    },
    {
      position: [-3, 0, 0] as [number, number, number],
      era: "Khai sáng",
      philosopher: "Wollstonecraft",
      year: "1759-1797",
      color: "#EC4899",
      description: "Phụ nữ cần được giáo dục như nam giới",
      route: "wollstonecraft",
    },
    {
      position: [0, 0, 0] as [number, number, number],
      era: "Hiện đại sớm",
      philosopher: "J.S. Mill",
      year: "1806-1873",
      color: "#F59E0B",
      description: "Tự do cá nhân, phản đối bất bình đẳng giới",
      route: "mill",
    },
    {
      position: [3, 0, 0] as [number, number, number],
      era: "Hiện đại",
      philosopher: "de Beauvoir",
      year: "1908-1986",
      color: "#10B981",
      description: "Giới là sản phẩm xã hội, không cố định",
      route: "beauvoir",
    },
    {
      position: [6, 0, 0] as [number, number, number],
      era: "Đương đại",
      philosopher: "Butler",
      year: "1956-nay",
      color: "#3B82F6",
      description: "Giới là 'màn trình diễn' – có thể lặp lại và thay đổi",
      route: "butler",
    },
  ];

  const handlePhilosopherClick = (philosopher: string) => {
    const philosopherData = philosophers.find(
      (p) => p.philosopher === philosopher
    );
    if (philosopherData) {
      router.push(`/philosopher/${philosopherData.route}`);
    }
  };

  const timelineRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (timelineRef.current) {
      timelineRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={timelineRef}>
      {/* Timeline Line */}
      <Cylinder
        args={[0.05, 0.05, 20, 8]}
        position={[0, -1, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="#4B5563" />
      </Cylinder>

      {/* Timeline Nodes */}
      {philosophers.map((philosopher, index) => (
        <TimelineNode
          key={philosopher.philosopher}
          position={philosopher.position}
          era={philosopher.era}
          philosopher={philosopher.philosopher}
          year={philosopher.year}
          color={philosopher.color}
          onHover={setHoveredPhilosopher}
          onLeave={() => setHoveredPhilosopher(null)}
          onClick={handlePhilosopherClick}
        />
      ))}

      {/* Information Panel */}
      {hoveredPhilosopher && (
        <Html position={[0, 3, 0]} center>
          <div className="bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg max-w-sm">
            <h3 className="text-xl font-bold mb-2">
              {
                philosophers.find((p) => p.philosopher === hoveredPhilosopher)
                  ?.philosopher
              }
            </h3>
            <p className="text-sm text-gray-300 mb-2">
              {
                philosophers.find((p) => p.philosopher === hoveredPhilosopher)
                  ?.year
              }
            </p>
            <p className="text-sm">
              {
                philosophers.find((p) => p.philosopher === hoveredPhilosopher)
                  ?.description
              }
            </p>
          </div>
        </Html>
      )}

      {/* Era Labels */}
      <Text
        position={[-8, -2, 0]}
        fontSize={0.4}
        color="#8B5CF6"
        anchorX="center"
        anchorY="middle"
      >
        Cổ đại
      </Text>

      <Text
        position={[-1.5, -2, 0]}
        fontSize={0.4}
        color="#EC4899"
        anchorX="center"
        anchorY="middle"
      >
        Khai sáng
      </Text>

      <Text
        position={[1.5, -2, 0]}
        fontSize={0.4}
        color="#10B981"
        anchorX="center"
        anchorY="middle"
      >
        Hiện đại
      </Text>

      <Text
        position={[8, -2, 0]}
        fontSize={0.4}
        color="#6366F1"
        anchorX="center"
        anchorY="middle"
      >
        Đương đại
      </Text>
    </group>
  );
}
