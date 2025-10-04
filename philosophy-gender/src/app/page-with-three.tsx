"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { BookOpen, Users, MessageCircle, Clock } from "lucide-react";
import TimelineScene from "@/components/TimelineScene";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />

      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* 3D Timeline Section */}
        <section className="h-screen relative">
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <Suspense fallback={<Html center>Loading 3D Timeline...</Html>}>
              <TimelineScene />
              <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
              />
            </Suspense>
          </Canvas>

          {/* Overlay Content */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-4xl font-bold mb-4"
              >
                Timeline Triết học
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-lg max-w-md"
              >
                Khám phá sự tiến hóa của tư tưởng về giới tính qua các thời đại
              </motion.p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center text-white mb-16"
            >
              Khám phá qua các hình thức sinh động
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <Clock className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-4">Timeline Triết học</h3>
                <p className="text-gray-200">
                  Sự tiến hóa của tư tưởng về giới qua các thời đại, từ cổ đại
                  đến hiện đại
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-pink-400" />
                <h3 className="text-2xl font-bold mb-4">Comic Strip</h3>
                <p className="text-gray-200">
                  Đối thoại hài hước và triết lý giữa các triết gia về vấn đề
                  giới tính
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <MessageCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
                <h3 className="text-2xl font-bold mb-4">Thảo luận mở</h3>
                <p className="text-gray-200">
                  Chia sẻ quan điểm và tham gia tranh luận về giới tính trong
                  triết học
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 px-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-8"
            >
              Triết học & Giới tính
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 text-gray-200"
            >
              Hành trình tư tưởng từ cổ đại đến hiện đại
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 space-y-4"
            >
              <p>
                Xuyên suốt lịch sử triết học, "giới tính" không chỉ là vấn đề
                sinh học, mà còn là biểu tượng của quyền lực, đạo đức và nhân
                sinh quan.
              </p>
              <p>
                Trang web này tái hiện hành trình ấy qua các hình thức sinh
                động: Timeline triết học, Comic strip, và Thảo luận mở.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 px-10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center text-white mb-16"
            >
              Giới thiệu nhóm
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="text-center text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Dự án PBL Triết học & Giới tính
                </h3>
                <p className="text-gray-200 mb-6">
                  Từ cổ đại đến hiện đại - Khám phá hành trình tư tưởng về giới
                  tính trong triết học
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Minh bạch AI
                  </h4>
                  <p className="text-gray-200 mb-4">
                    AI được sử dụng để hỗ trợ viết, tạo hình minh họa và bố cục
                    nội dung. Mọi thông tin triết học được kiểm tra và chỉnh sửa
                    thủ công.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Tài liệu tham khảo
                  </h4>
                  <ul className="text-gray-200 space-y-2">
                    <li>• The Second Sex – Simone de Beauvoir</li>
                    <li>• Gender Trouble – Judith Butler</li>
                    <li>• The Republic – Plato</li>
                    <li>• Politics – Aristotle</li>
                    <li>• On Liberty – John Stuart Mill</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
