"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SimpleTimelineScene from "@/components/SimpleTimelineScene";
import Navigation from "@/components/Navigation";

export default function SimpleTimelinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />

      <main className="pt-16">
        {/* Header */}
        <section className="py-20 px-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
            Timeline Triết học - Test
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Khám phá sự tiến hóa của tư tưởng về giới qua các thời đại
          </p>
        </section>

        {/* 3D Canvas */}
        <section className="relative" style={{ height: "calc(100vh - 200px)" }}>
          <Canvas
            camera={{ position: [0, 2, 10], fov: 60 }}
            style={{ width: "100%", height: "100%" }}
          >
            <SimpleTimelineScene />
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
              🖱️ Kéo để xoay • Scroll để zoom
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
