"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import WorkingTimelineScene from "@/components/WorkingTimelineScene";
import Navigation from "@/components/Navigation";

export default function Timeline3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />

      <main className="pt-16">
        {/* Header */}
        <section className="py-20 px-10 text-center">
          <h1
            className="text-6xl md:text-7xl font-bold mb-4"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              background: "linear-gradient(135deg, #ffffff, #c4b5fd, #f0abfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Timeline 3D Tương tác
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Khám phá sự tiến hóa của tư tưởng về giới qua các thời đại trong
            không gian 3D
          </p>
        </section>

        {/* 3D Canvas */}
        <section className="relative" style={{ height: "calc(100vh - 200px)" }}>
          <Canvas
            camera={{ position: [0, 2, 18], fov: 60 }}
            style={{ width: "100%", height: "100%" }}
          >
            <WorkingTimelineScene />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={5}
              maxDistance={50}
            />
          </Canvas>

          {/* Instructions */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
            <p className="text-sm text-gray-300 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
              🖱️ Kéo để xoay • Hover để xem thông tin • Click để khám phá
            </p>
          </div>
        </section>

        {/* Legend */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Các Triết Gia Trong Timeline 3D
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Plato",
                    era: "427-347 TCN",
                    color: "bg-red-500",
                    description: "Linh hồn phi giới, bình đẳng lý trí",
                  },
                  {
                    name: "Aristotle",
                    era: "384-322 TCN",
                    color: "bg-orange-500",
                    description: "Phân biệt giới theo tự nhiên",
                  },
                  {
                    name: "Wollstonecraft",
                    era: "1759-1797",
                    color: "bg-yellow-500",
                    description: "Tiên phong nữ quyền, quyền giáo dục",
                  },
                  {
                    name: "J.S. Mill",
                    era: "1806-1873",
                    color: "bg-green-500",
                    description: "Tự do cá nhân, bình đẳng giới",
                  },
                  {
                    name: "de Beauvoir",
                    era: "1908-1986",
                    color: "bg-blue-500",
                    description: "Giới là sản phẩm xã hội",
                  },
                  {
                    name: "Butler",
                    era: "1956-nay",
                    color: "bg-purple-500",
                    description: "Giới là màn trình diễn",
                  },
                ].map((philosopher, index) => (
                  <div
                    key={philosopher.name}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg"
                  >
                    <div
                      className={`w-4 h-4 rounded-full ${philosopher.color}`}
                    ></div>
                    <div>
                      <h3 className="text-white font-bold">
                        {philosopher.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{philosopher.era}</p>
                      <p className="text-gray-300 text-xs">
                        {philosopher.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Khám phá sâu hơn
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Click vào các triết gia để tìm hiểu chi tiết về quan điểm của họ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/timeline"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Xem Timeline Bảng
              </a>
              <a
                href="/comic"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Đọc Comic Strip
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
