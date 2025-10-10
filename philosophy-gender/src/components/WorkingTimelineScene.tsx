"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Text, Html, RoundedBox } from "@react-three/drei";
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
  position: [number, number, number];
  philosopher: Philosopher;
  color: string;
  image: string;
  isActive?: boolean;
  onHover: (philosopher: Philosopher) => void;
  onLeave: () => void;
  onClick: (philosopher: Philosopher) => void;
}

function TimelineNode({
  position,
  philosopher,
  color,
  image,
  isActive = false,
  onHover,
  onLeave,
  onClick,
}: TimelineNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }

    const targetY = hovered || isActive ? position[1] + 0.5 : position[1];

    if (groupRef.current) {
      if (hovered || isActive) {
        groupRef.current.position.y =
          Math.sin(state.clock.getElapsedTime() * 2) * 0.15 + targetY;
      } else {
        groupRef.current.position.y +=
          (position[1] - groupRef.current.position.y) * 0.1;
      }
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Glowing base ring */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>

      {/* Connecting line to timeline */}
      <mesh position={[0, -0.75, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1.5, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Main sphere */}
      <Sphere
        ref={meshRef}
        args={[0.8, 64, 64]}
        onPointerEnter={() => {
          setHovered(true);
          onHover(philosopher);
        }}
        onPointerLeave={() => {
          setHovered(false);
          onLeave();
        }}
        onClick={() => onClick(philosopher)}
        scale={hovered || isActive ? 1.3 : 1}
      >
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={hovered || isActive ? 0.8 : 0.2}
        />
      </Sphere>

      {/* Outer glow sphere */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered || isActive ? 0.4 : 0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Orbiting particles */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI * 2) / 3) * 1.5,
            Math.sin((i * Math.PI * 2) / 3) * 0.3,
            Math.sin((i * Math.PI * 2) / 3) * 1.5,
          ]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}

      {/* Info card */}
      {hovered && (
        <Html position={[0, 2, 0]} center style={{ pointerEvents: "none" }}>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(20px)",
              border: `2px solid ${color}`,
              borderRadius: "20px",
              padding: "20px",
              minWidth: "280px",
              maxWidth: "320px",
              boxShadow: `0 20px 60px ${color}40`,
              transform: "translateY(-20px)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "15px",
              }}
            >
              <img
                src={image}
                alt={philosopher.name}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: `3px solid ${color}`,
                  objectFit: "cover",
                }}
              />
              <div>
                <h3
                  style={{
                    color: "white",
                    margin: "0 0 5px 0",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {philosopher.name}
                </h3>
                <p
                  style={{
                    color: color,
                    margin: 0,
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {philosopher.era}
                </p>
              </div>
            </div>
            <div
              style={{
                background: `linear-gradient(135deg, ${color}20, transparent)`,
                borderLeft: `3px solid ${color}`,
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            >
              <p
                style={{
                  color: "white",
                  margin: 0,
                  fontSize: "14px",
                  fontStyle: "italic",
                }}
              >
                "{philosopher.quote}"
              </p>
            </div>
            <p
              style={{
                color: "#cbd5e1",
                margin: 0,
                fontSize: "13px",
                lineHeight: "1.5",
              }}
            >
              {philosopher.summary}
            </p>
          </div>
        </Html>
      )}

      {/* Name label below - Fixed alignment */}
      <Html position={[0, -2.5, 0]} center>
        <div style={{ textAlign: "center", pointerEvents: "none" }}>
          <div
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "4px",
              textShadow: "0 0 10px rgba(0,0,0,0.8)",
            }}
          >
            {philosopher.name}
          </div>
          <div
            style={{
              color: color,
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {philosopher.era}
          </div>
        </div>
      </Html>
    </group>
  );
}

function Timeline({ activeIndex }: { activeIndex: number }) {
  return (
    <group position={[0, -1.5, 0]}>
      {/* Main timeline bar */}
      <RoundedBox args={[22, 0.3, 0.3]} radius={0.15}>
        <meshStandardMaterial
          color="#4c1d95"
          metalness={0.8}
          roughness={0.2}
          emissive="#6d28d9"
          emissiveIntensity={0.3}
        />
      </RoundedBox>

      {/* Timeline glow */}
      <mesh position={[0, 0, -0.2]}>
        <boxGeometry args={[22, 0.5, 0.1]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.2} />
      </mesh>

      {/* Era markers with highlight */}
      <Html position={[-10, -1.2, 0]} center>
        <div
          style={{
            color: activeIndex <= 1 ? "#8b5cf6" : "#6b7280",
            fontSize: "24px",
            fontWeight: "bold",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            textShadow: activeIndex <= 1 ? "0 0 20px #8b5cf6" : "none",
          }}
        >
          Cổ Đại
        </div>
      </Html>
      <Html position={[-2, -1.2, 0]} center>
        <div
          style={{
            color: activeIndex >= 2 && activeIndex <= 3 ? "#f59e0b" : "#6b7280",
            fontSize: "24px",
            fontWeight: "bold",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            textShadow:
              activeIndex >= 2 && activeIndex <= 3
                ? "0 0 20px #f59e0b"
                : "none",
          }}
        >
          Tân Đại
        </div>
      </Html>
      <Html position={[6, -1.2, 0]} center>
        <div
          style={{
            color: activeIndex >= 4 ? "#ec4899" : "#6b7280",
            fontSize: "24px",
            fontWeight: "bold",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            textShadow: activeIndex >= 4 ? "0 0 20px #ec4899" : "none",
          }}
        >
          Hiện Đại
        </div>
      </Html>
    </group>
  );
}

function BackgroundElements() {
  const particlesRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 40,
        ] as [number, number, number],
        scale: Math.random() * 0.1 + 0.05,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export default function WorkingTimelineScene() {
  const router = useRouter();
  const [hoveredPhilosopher, setHoveredPhilosopher] =
    useState<Philosopher | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const images = [
    "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  ];

  const colors = [
    "#8b5cf6",
    "#ef4444",
    "#f59e0b",
    "#10b981",
    "#ec4899",
    "#6366f1",
  ];

  const handlePhilosopherClick = (philosopher: Philosopher, index: number) => {
    setActiveIndex(index);
    setIsTransitioning(true);
    setTimeout(() => {
      const name = philosopher.name.toLowerCase().replace(/\s+/g, "-");
      router.push(`/philosopher/${name}`);
    }, 300);
  };

  const handleHover = (philosopher: Philosopher) => {
    setHoveredPhilosopher(philosopher);
  };

  const handleLeave = () => {
    setHoveredPhilosopher(null);
  };

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a78bfa" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.6}
        penumbra={1}
        intensity={1}
        color="#ffffff"
        castShadow
      />

      {/* Background elements */}
      <BackgroundElements />

      {/* Timeline */}
      <Timeline activeIndex={activeIndex} />

      {/* Philosophers */}
      {philosophers.map((philosopher, index) => {
        const position: [number, number, number] = [(index - 2.5) * 4, 0, 0];

        const isActive = index === activeIndex;
        const isDimmed = isTransitioning && !isActive;

        return (
          <group key={philosopher.name} opacity={isDimmed ? 0.3 : 1}>
            <TimelineNode
              position={position}
              philosopher={philosopher}
              color={colors[index]}
              image={images[index]}
              isActive={isActive}
              onHover={handleHover}
              onLeave={handleLeave}
              onClick={() => handlePhilosopherClick(philosopher, index)}
            />
          </group>
        );
      })}

      {/* Navigation Controls */}
      <Html position={[0, 4, 0]} center>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(20px)",
            padding: "15px 30px",
            borderRadius: "50px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
          }}
        >
          <button
            onClick={() => {
              if (activeIndex > 0) {
                setActiveIndex(activeIndex - 1);
              }
            }}
            disabled={activeIndex === 0}
            style={{
              background:
                activeIndex === 0
                  ? "rgba(100, 100, 100, 0.3)"
                  : "linear-gradient(135deg, #8b5cf6, #6d28d9)",
              border: "none",
              color: "white",
              padding: "10px 20px",
              borderRadius: "25px",
              cursor: activeIndex === 0 ? "not-allowed" : "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              opacity: activeIndex === 0 ? 0.5 : 1,
            }}
          >
            ← Trước
          </button>

          <div
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              minWidth: "180px",
              textAlign: "center",
            }}
          >
            {activeIndex + 1} / {philosophers.length}
          </div>

          <button
            onClick={() => {
              if (activeIndex < philosophers.length - 1) {
                setActiveIndex(activeIndex + 1);
              }
            }}
            disabled={activeIndex === philosophers.length - 1}
            style={{
              background:
                activeIndex === philosophers.length - 1
                  ? "rgba(100, 100, 100, 0.3)"
                  : "linear-gradient(135deg, #ec4899, #db2777)",
              border: "none",
              color: "white",
              padding: "10px 20px",
              borderRadius: "25px",
              cursor:
                activeIndex === philosophers.length - 1
                  ? "not-allowed"
                  : "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              opacity: activeIndex === philosophers.length - 1 ? 0.5 : 1,
            }}
          >
            Sau →
          </button>
        </div>
      </Html>

      {/* Floor reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          color="#0a0a0f"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.5}
        />
      </mesh>
    </>
  );
}
