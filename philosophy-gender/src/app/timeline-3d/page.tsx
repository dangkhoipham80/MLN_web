"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import WorkingTimelineScene from "@/components/WorkingTimelineScene";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Clock,
  Sparkles,
  Zap,
  Eye,
  MousePointer,
  ArrowRight,
  BookOpen,
  Users,
  Star,
  Globe,
} from "lucide-react";

export default function Timeline3DPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-hidden">
      <Navigation />

      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/60 via-fuchsia-950/40 to-purple-950/50" />

        {/* Multiple floating orbs with complex animations */}
        <motion.div
          animate={{
            scale: [1, 1.3, 0.8, 1.2, 1],
            opacity: [0.4, 0.7, 0.2, 0.6, 0.4],
            x: [0, 80, -60, 40, 0],
            y: [0, -40, 60, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-violet-600 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 0.7, 1.4, 0.9, 1],
            opacity: [0.3, 0.6, 0.1, 0.5, 0.3],
            x: [0, -60, 80, -30, 0],
            y: [0, 50, -40, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-fuchsia-600 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 0.6, 1.3, 1],
            opacity: [0.2, 0.5, 0.05, 0.4, 0.2],
            x: [0, 40, -80, 60, 0],
            y: [0, -60, 40, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-3/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full blur-[96px]"
        />
        <motion.div
          animate={{
            scale: [1, 0.8, 1.5, 0.7, 1],
            opacity: [0.25, 0.6, 0.08, 0.5, 0.25],
            x: [0, -80, 50, -40, 0],
            y: [0, 30, -50, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-600 rounded-full blur-[112px]"
        />

        {/* Animated noise texture */}
        <motion.div
          animate={{
            opacity: [0.02, 0.04, 0.01, 0.03, 0.02],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Enhanced floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-3d-${i}`}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 pt-16">
        {/* Enhanced Header */}
        <section className="py-24 px-6 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-xl border border-white/20 mb-12 shadow-lg shadow-violet-500/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-6 h-6 text-violet-400" />
            </motion.div>
            <span className="text-lg font-medium tracking-wide text-violet-200">
              Timeline 3D Tương tác
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-5 h-5 text-fuchsia-400" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-8xl md:text-9xl font-bold mb-8"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent bg-[length:300%_100%]"
            >
              Timeline 3D
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12"
          >
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-violet-300 font-medium"
            >
              Khám phá sự tiến hóa của tư tưởng về giới
            </motion.span>{" "}
            qua các thời đại trong không gian 3D đầy mê hoặc
          </motion.p>

          {/* Interactive Elements Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-8 mb-16"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
            >
              <MousePointer className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-gray-300">Kéo để xoay</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
            >
              <Eye className="w-4 h-4 text-fuchsia-400" />
              <span className="text-sm text-gray-300">Hover để xem</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
            >
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Click để khám phá</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced 3D Canvas Section */}
        <section
          className="relative mb-20"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-violet-500/20"
          >
            <Canvas style={{ width: "100%", height: "100%" }}>
              <PerspectiveCamera makeDefault position={[0, 3, 20]} fov={50} />
              <Suspense fallback={null}>
                <WorkingTimelineScene />
              </Suspense>
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={8}
                maxDistance={40}
                maxPolarAngle={Math.PI / 2}
                autoRotate={true}
                autoRotateSpeed={0.3}
              />
            </Canvas>

            {/* Enhanced Instructions Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-black/60 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20 shadow-lg"
              >
                <div className="flex items-center gap-4 text-gray-300">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <MousePointer className="w-5 h-5 text-violet-400" />
                  </motion.div>
                  <span className="text-sm font-medium">
                    Kéo để xoay • Hover để xem thông tin • Click để khám phá
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Star className="w-4 h-4 text-fuchsia-400" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Legend Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                Các Triết Gia Trong Timeline 3D
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Khám phá những tư tưởng gia vĩ đại đã định hình quan điểm về
                giới tính qua các thời đại
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Plato",
                  era: "427-347 TCN",
                  color: "from-purple-500 to-violet-500",
                  description: "Linh hồn phi giới, bình đẳng lý trí",
                  image:
                    "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=100&h=100&fit=crop&crop=face",
                  quote:
                    "Linh hồn con người là bất biến. Giới tính chỉ là vỏ bọc tạm thời.",
                },
                {
                  name: "Aristotle",
                  era: "384-322 TCN",
                  color: "from-red-500 to-orange-500",
                  description: "Phân biệt giới theo tự nhiên",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                  quote:
                    "Nam là hình thức, nữ là vật chất. Đó là trật tự tự nhiên.",
                },
                {
                  name: "Wollstonecraft",
                  era: "1759-1797",
                  color: "from-yellow-500 to-orange-500",
                  description: "Tiên phong nữ quyền, quyền giáo dục",
                  image:
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
                  quote: "Phụ nữ không yếu đuối bởi tự nhiên, mà bởi giáo dục.",
                },
                {
                  name: "J.S. Mill",
                  era: "1806-1873",
                  color: "from-green-500 to-emerald-500",
                  description: "Tự do cá nhân, bình đẳng giới",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                  quote: "Tự do cá nhân là nguyên tắc cao nhất của xã hội.",
                },
                {
                  name: "de Beauvoir",
                  era: "1908-1986",
                  color: "from-pink-500 to-rose-500",
                  description: "Giới là sản phẩm xã hội",
                  image:
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
                  quote:
                    "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.",
                },
                {
                  name: "Butler",
                  era: "1956-nay",
                  color: "from-indigo-500 to-purple-500",
                  description: "Giới là màn trình diễn",
                  image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                  quote: "Giới tính là màn trình diễn, không phải bản chất.",
                },
              ].map((philosopher, index) => (
                <motion.div
                  key={philosopher.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-violet-500/20"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-20 h-20 rounded-full overflow-hidden border-3 border-white/20 shadow-lg flex-shrink-0 relative group"
                    >
                      <img
                        src={philosopher.image}
                        alt={philosopher.name}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {philosopher.name}
                      </h3>
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${philosopher.color} mb-3`}
                      >
                        <Clock className="w-3 h-3 text-white" />
                        <span className="text-sm font-medium text-white">
                          {philosopher.era}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {philosopher.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border-l-4 border-violet-400 p-4 rounded-r-2xl"
                  >
                    <p className="text-gray-300 italic text-sm">
                      "{philosopher.quote}"
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                Khám phá sâu hơn
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Click vào các triết gia để tìm hiểu chi tiết về quan điểm của họ
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 text-center relative overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <BookOpen className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold text-white mb-6"
                >
                  Comic Strip Triết học
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 mb-8 text-lg leading-relaxed"
                >
                  Những cuộc đối thoại thú vị giữa các triết gia về chủ đề giới
                  tính
                </motion.p>
                <Link href="/comic">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 25px 50px rgba(251, 191, 36, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-8 rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 text-lg flex items-center gap-3 mx-auto"
                  >
                    <span>Đọc Comic Strip</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 text-center relative overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="w-20 h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Users className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold text-white mb-6"
                >
                  Thảo luận Cộng đồng
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 mb-8 text-lg leading-relaxed"
                >
                  Tham gia khảo sát và chia sẻ quan điểm của bạn về các vấn đề
                  triết học
                </motion.p>
                <Link href="/discussion">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 text-lg flex items-center gap-3 mx-auto"
                  >
                    <span>Tham gia Thảo luận</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
