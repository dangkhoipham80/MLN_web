"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Text, Html } from "@react-three/drei";
import { useRouter } from "next/navigation";
import * as THREE from "three";

interface Philosopher {
  name: string;
  era: string;
  nationality: string;
  quote: string;
  summary: string;
  keyIdeas: string[];
  works: string[];
  influence: string;
  modernRelevance: string;
}

interface TimelineNodeProps {
  readonly position: [number, number, number];
  readonly philosopher: Philosopher;
  readonly color: string;
  readonly onHover: (philosopher: Philosopher) => void;
  readonly onLeave: () => void;
  readonly onClick: (philosopher: Philosopher) => void;
}

function TimelineNode({
  position,
  philosopher,
  color,
  onHover,
  onLeave,
  onClick,
}: TimelineNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
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
        <meshStandardMaterial color={color} />
      </Sphere>

      <Text
        position={[0, -1, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {philosopher.name}
      </Text>

      <Text
        position={[0, -1.3, 0]}
        fontSize={0.2}
        color="gray"
        anchorX="center"
        anchorY="middle"
      >
        {philosopher.era}
      </Text>
    </group>
  );
}

export default function WorkingTimelineScene() {
  const router = useRouter();
  const [hoveredPhilosopher, setHoveredPhilosopher] =
    useState<Philosopher | null>(null);

  const philosophers: Philosopher[] = [
    {
      name: "Plato",
      era: "427-347 TCN",
      nationality: "Hy Lạp",
      quote:
        "Linh hồn con người là bất biến. Giới tính chỉ là vỏ bọc tạm thời.",
      summary:
        "Plato trong Republic nói về linh hồn không phân biệt giới, đặt nền móng cho tư tưởng bình đẳng tinh thần.",
      keyIdeas: [
        "Linh hồn phi giới",
        "Bình đẳng lý trí",
        "Học viện cho cả nam và nữ",
      ],
      works: ["The Republic", "Phaedrus", "Symposium"],
      influence: "Khởi đầu cho tư tưởng bình đẳng tinh thần",
      modernRelevance: "Nền tảng cho giáo dục bình đẳng giới",
    },
    {
      name: "Aristotle",
      era: "384-322 TCN",
      nationality: "Hy Lạp",
      quote: "Nam là hình thức, nữ là vật chất. Đó là trật tự tự nhiên.",
      summary:
        "Aristotle cho rằng nam giới có lý trí, nữ giới có cảm tính, củng cố hệ thống gia trưởng.",
      keyIdeas: [
        "Phân biệt giới tự nhiên",
        "Nam = lý trí, nữ = cảm tính",
        "Trật tự xã hội",
      ],
      works: ["Politics", "Nicomachean Ethics", "Generation of Animals"],
      influence: "Củng cố hệ thống gia trưởng phương Tây",
      modernRelevance: "Vẫn ảnh hưởng đến quan niệm giới truyền thống",
    },
    {
      name: "Mary Wollstonecraft",
      era: "1759-1797",
      nationality: "Anh",
      quote:
        "Nếu phụ nữ không được học, làm sao họ có thể trở nên lý trí như đàn ông?",
      summary:
        "Tiên phong trong phong trào nữ quyền, đòi quyền giáo dục cho phụ nữ.",
      keyIdeas: [
        "Quyền giáo dục phụ nữ",
        "Bình đẳng lý trí",
        "Phê phán định kiến",
      ],
      works: [
        "A Vindication of the Rights of Woman",
        "Thoughts on the Education of Daughters",
      ],
      influence: "Tiền đề cho nữ quyền hiện đại",
      modernRelevance: "Nền tảng cho giáo dục bình đẳng giới",
    },
    {
      name: "John Stuart Mill",
      era: "1806-1873",
      nationality: "Anh",
      quote: "Tự do cá nhân là nguyên tắc cơ bản của xã hội văn minh.",
      summary:
        "Triết gia tự do, phản đối bất bình đẳng giới và ủng hộ quyền phụ nữ.",
      keyIdeas: ["Tự do cá nhân", "Bình đẳng giới", "Chủ nghĩa tự do"],
      works: ["On Liberty", "The Subjection of Women", "Utilitarianism"],
      influence: "Mở đường cho chủ nghĩa tự do nữ quyền",
      modernRelevance: "Nền tảng cho quyền cá nhân và bình đẳng",
    },
    {
      name: "Simone de Beauvoir",
      era: "1908-1986",
      nationality: "Pháp",
      quote: "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.",
      summary:
        "Triết gia hiện sinh, tiên phong trong phong trào nữ quyền thế kỷ 20.",
      keyIdeas: [
        "Giới là sản phẩm xã hội",
        "Hiện sinh nữ quyền",
        "Giải phóng ý thức",
      ],
      works: [
        "The Second Sex",
        "The Ethics of Ambiguity",
        "Memoirs of a Dutiful Daughter",
      ],
      influence: "Triết học hiện sinh và nữ quyền",
      modernRelevance: "Cơ sở lý luận cho phong trào nữ quyền hiện đại",
    },
    {
      name: "Judith Butler",
      era: "1956-nay",
      nationality: "Mỹ",
      quote: "Giới không phải là cái ta có, mà là cái ta làm mỗi ngày.",
      summary:
        "Triết gia hậu hiện đại, phát triển lý thuyết performativity về giới.",
      keyIdeas: ["Giới là màn trình diễn", "Performativity", "Queer theory"],
      works: ["Gender Trouble", "Bodies That Matter", "Undoing Gender"],
      influence: "Cơ sở lý luận cho queer theory",
      modernRelevance: "Ảnh hưởng sâu sắc đến hiểu biết về giới hiện đại",
    },
  ];

  const handlePhilosopherClick = (philosopher: Philosopher) => {
    const name = philosopher.name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/philosopher/${name}`);
  };

  const handleHover = (philosopher: Philosopher) => {
    setHoveredPhilosopher(philosopher);
  };

  const handleLeave = () => {
    setHoveredPhilosopher(null);
  };

  return (
    <>
      {/* Timeline Axis */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 20, 8]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>

      {/* Philosopher Nodes */}
      {philosophers.map((philosopher, index) => {
        const x = (index - (philosophers.length - 1) / 2) * 3;
        const y = Math.sin(index * 0.5) * 2;
        const z = Math.cos(index * 0.3) * 2;

        const colors = [
          "#ef4444",
          "#f97316",
          "#eab308",
          "#22c55e",
          "#3b82f6",
          "#8b5cf6",
        ];
        const color = colors[index % colors.length];

        return (
          <TimelineNode
            key={philosopher.name}
            position={[x, y, z]}
            philosopher={philosopher}
            color={color}
            onHover={handleHover}
            onLeave={handleLeave}
            onClick={handlePhilosopherClick}
          />
        );
      })}

      {/* Hover Information */}
      {hoveredPhilosopher && (
        <Html position={[0, 3, 0]} center>
          <div className="bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg max-w-sm border border-white/20">
            <h3 className="font-bold text-lg mb-2">
              {hoveredPhilosopher.name}
            </h3>
            <p className="text-sm text-gray-300 mb-2">
              {hoveredPhilosopher.era}
            </p>
            <p className="text-sm italic mb-2">"{hoveredPhilosopher.quote}"</p>
            <p className="text-xs text-gray-400">
              {hoveredPhilosopher.summary}
            </p>
          </div>
        </Html>
      )}

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
    </>
  );
}
