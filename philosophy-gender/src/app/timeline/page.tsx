"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Clock, Users, BookOpen } from "lucide-react";

export default function TimelinePage() {
  const timelineData = [
    {
      era: "Cổ đại",
      philosophers: [
        {
          name: "Plato (427–347 TCN)",
          view: "Linh hồn không mang giới, bình đẳng về lý trí.",
          influence: "Khởi đầu cho tư tưởng bình đẳng tinh thần.",
          color: "from-purple-500 to-violet-500",
          link: "/philosopher/plato",
          image:
            "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=200&h=200&fit=crop&crop=face",
          quote:
            "Linh hồn con người là bất biến. Giới tính chỉ là vỏ bọc tạm thời.",
        },
        {
          name: "Aristotle (384–322 TCN)",
          view: "Nam = lý trí, nữ = cảm tính → phân biệt tự nhiên.",
          influence: "Củng cố hệ thống gia trưởng.",
          color: "from-blue-500 to-cyan-500",
          link: "/philosopher/aristotle",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
          quote: "Nam là hình thức, nữ là vật chất. Đó là trật tự tự nhiên.",
        },
      ],
    },
    {
      era: "Khai sáng",
      philosophers: [
        {
          name: "Mary Wollstonecraft (1759–1797)",
          view: "Phụ nữ cần được giáo dục như nam giới.",
          influence: "Tiền đề cho nữ quyền hiện đại.",
          color: "from-yellow-500 to-orange-500",
          link: "/philosopher/mary-wollstonecraft",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
          quote: "Phụ nữ không yếu đuối bởi tự nhiên, mà bởi giáo dục.",
        },
      ],
    },
    {
      era: "Hiện đại sớm",
      philosophers: [
        {
          name: "John Stuart Mill (1806–1873)",
          view: "Tự do cá nhân, phản đối bất bình đẳng giới.",
          influence: "Mở đường cho chủ nghĩa tự do nữ quyền.",
          color: "from-green-500 to-emerald-500",
          link: "/philosopher/john-stuart-mill",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
          quote: "Tự do cá nhân là nguyên tắc cao nhất của xã hội.",
        },
      ],
    },
    {
      era: "Hiện đại",
      philosophers: [
        {
          name: "Simone de Beauvoir (1908–1986)",
          view: "Giới là sản phẩm xã hội, không cố định.",
          influence: "Triết học hiện sinh và nữ quyền.",
          color: "from-pink-500 to-rose-500",
          link: "/philosopher/simone-de-beauvoir",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
          quote: "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.",
        },
      ],
    },
    {
      era: "Đương đại",
      philosophers: [
        {
          name: "Judith Butler (1956–nay)",
          view: 'Giới là "màn trình diễn" – có thể lặp lại và thay đổi.',
          influence: "Cơ sở lý luận cho queer theory.",
          color: "from-fuchsia-500 to-purple-500",
          link: "/philosopher/judith-butler",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
          quote: "Giới tính là màn trình diễn, không phải bản chất.",
        },
      ],
    },
    {
      era: "Hậu hiện đại – AI",
      philosophers: [
        {
          name: "Giới trong công nghệ",
          view: "Dữ liệu và thuật toán phản ánh thiên kiến giới.",
          influence: "Triết học về giới trong AI và Ethics.",
          color: "from-cyan-500 to-blue-500",
          link: "/discussion",
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=200&fit=crop&crop=face",
          quote: "AI phản ánh thiên kiến của những người tạo ra nó.",
        },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#0a0a0f] overflow-hidden"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Navigation />

      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-fuchsia-950/30 to-[#0a0a0f]" />

        {/* Multiple floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.2, 0.3],
            x: [0, 50, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-violet-600 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 0.8, 1.3, 1],
            opacity: [0.2, 0.5, 0.1, 0.2],
            x: [0, -40, 60, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-fuchsia-600 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.1, 0.3, 0.05, 0.1],
            x: [0, 30, -50, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-3/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full blur-[96px]"
        />
        <motion.div
          animate={{
            scale: [1, 0.9, 1.2, 1],
            opacity: [0.15, 0.4, 0.08, 0.15],
            x: [0, -60, 40, 0],
            y: [0, 30, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-600 rounded-full blur-[112px]"
        />

        {/* Animated noise texture */}
        <motion.div
          animate={{
            opacity: [0.015, 0.025, 0.01, 0.015],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
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

      {/* Content */}
      <div className="relative z-10 pt-16">
        {/* Back Button */}
        <div className="pt-8 px-6 max-w-7xl mx-auto">
          <Link href="/">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Về trang chủ</span>
            </motion.button>
          </Link>
        </div>

        {/* Enhanced Header */}
        <section className="py-20 px-6 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-xl border border-white/20 mb-10 shadow-lg shadow-violet-500/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Clock className="w-5 h-5 text-violet-400" />
            </motion.div>
            <span className="text-sm font-medium tracking-wide text-violet-200">
              Timeline Triết học
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-7xl md:text-8xl font-bold mb-8"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Timeline Tư tưởng
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-violet-300 font-medium"
            >
              "Giới tính trong Triết học qua các thời đại"
            </motion.span>{" "}
            - Khám phá sự tiến hóa của tư tưởng từ cổ đại đến hiện đại
          </motion.p>

          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-violet-400 rounded-full mx-auto flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-gradient-to-b from-violet-400 to-fuchsia-400 rounded-full mt-2"
              />
            </motion.div>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-sm text-gray-400 mt-2"
            >
              Cuộn để khám phá
            </motion.p>
          </motion.div>
        </section>

        {/* Timeline Table */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 overflow-x-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Dòng thời gian Triết học về Giới tính
              </h2>

              {/* Desktop Cards */}
              <div className="hidden lg:block space-y-8">
                {timelineData.map((period, periodIndex) => (
                  <motion.div
                    key={period.era}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: periodIndex * 0.1 }}
                    className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {period.era}
                        </h3>
                        <p className="text-gray-400">Thời kỳ triết học</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {period.philosophers.map(
                        (philosopher, philosopherIndex) => (
                          <motion.div
                            key={philosopher.name}
                            initial={{ opacity: 0, x: -30, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: (periodIndex + philosopherIndex) * 0.1,
                              duration: 0.6,
                              ease: "easeOut",
                            }}
                            whileHover={{
                              scale: 1.03,
                              y: -8,
                              rotateY: 5,
                              transition: { duration: 0.3 },
                            }}
                            className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-violet-500/20"
                          >
                            <div className="flex items-start gap-4 mb-4">
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                                className="w-16 h-16 rounded-full overflow-hidden border-3 border-white/20 shadow-lg flex-shrink-0 relative group"
                              >
                                <motion.img
                                  src={philosopher.image}
                                  alt={philosopher.name}
                                  className="w-full h-full object-cover"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  whileHover={{ opacity: 1 }}
                                  className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent"
                                />
                              </motion.div>
                              <div className="flex-1">
                                <Link href={philosopher.link}>
                                  <h4 className="text-lg font-bold text-white hover:text-violet-300 transition-colors duration-200 cursor-pointer">
                                    {philosopher.name}
                                  </h4>
                                </Link>
                                <div
                                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${philosopher.color} mt-2`}
                                >
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                  <span className="text-xs font-medium text-white">
                                    Triết gia
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-medium text-gray-300 mb-1">
                                  Quan điểm:
                                </p>
                                <p className="text-gray-200 text-sm">
                                  {philosopher.view}
                                </p>
                              </div>

                              <div>
                                <p className="text-sm font-medium text-gray-300 mb-1">
                                  Ảnh hưởng:
                                </p>
                                <p className="text-gray-200 text-sm">
                                  {philosopher.influence}
                                </p>
                              </div>

                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay:
                                    (periodIndex + philosopherIndex) * 0.1 +
                                    0.3,
                                }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border-l-4 border-violet-400 p-3 rounded-r-lg relative overflow-hidden"
                              >
                                <motion.div
                                  initial={{ scaleX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay:
                                      (periodIndex + philosopherIndex) * 0.1 +
                                      0.5,
                                    duration: 0.8,
                                  }}
                                  className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 origin-left"
                                />
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay:
                                      (periodIndex + philosopherIndex) * 0.1 +
                                      0.7,
                                  }}
                                  className="text-gray-300 italic text-sm relative z-10"
                                >
                                  "{philosopher.quote}"
                                </motion.p>
                              </motion.div>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-6">
                {timelineData.map((period, periodIndex) => (
                  <motion.div
                    key={period.era}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: periodIndex * 0.1 }}
                    className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {period.era}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {period.philosophers.map(
                        (philosopher, philosopherIndex) => (
                          <motion.div
                            key={philosopher.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: (periodIndex + philosopherIndex) * 0.1,
                            }}
                            className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-xl p-4"
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-lg flex-shrink-0">
                                <img
                                  src={philosopher.image}
                                  alt={philosopher.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <Link href={philosopher.link}>
                                  <h4 className="text-base font-bold text-white hover:text-violet-300 transition-colors duration-200 cursor-pointer">
                                    {philosopher.name}
                                  </h4>
                                </Link>
                                <div
                                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${philosopher.color} mt-1`}
                                >
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  <span className="text-xs font-medium text-white">
                                    Triết gia
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div>
                                <p className="text-xs font-medium text-gray-300 mb-1">
                                  Quan điểm:
                                </p>
                                <p className="text-gray-200 text-sm">
                                  {philosopher.view}
                                </p>
                              </div>

                              <div>
                                <p className="text-xs font-medium text-gray-300 mb-1">
                                  Ảnh hưởng:
                                </p>
                                <p className="text-gray-200 text-sm">
                                  {philosopher.influence}
                                </p>
                              </div>

                              <div className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border-l-3 border-violet-400 p-2 rounded-r-lg">
                                <p className="text-gray-300 italic text-xs">
                                  "{philosopher.quote}"
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive 3D Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                Khám phá 3D Timeline
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Trải nghiệm timeline tương tác với các triết gia trong không
                gian 3D
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Timeline 3D Tương tác
                </h3>
              </div>

              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Khám phá sự tiến hóa của tư tưởng về giới qua các thời đại trong
                không gian 3D
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <span className="text-white font-bold text-lg">1</span>
                  </motion.div>
                  <h4 className="text-white font-bold mb-2">Kéo để xoay</h4>
                  <p className="text-gray-400 text-sm">
                    Điều khiển góc nhìn 360°
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <span className="text-white font-bold text-lg">2</span>
                  </motion.div>
                  <h4 className="text-white font-bold mb-2">Hover để xem</h4>
                  <p className="text-gray-400 text-sm">
                    Thông tin chi tiết triết gia
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(236, 72, 153, 0.4)",
                        "0 0 0 10px rgba(236, 72, 153, 0)",
                        "0 0 0 0 rgba(236, 72, 153, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <span className="text-white font-bold text-lg">3</span>
                  </motion.div>
                  <h4 className="text-white font-bold mb-2">
                    Click để khám phá
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Điều hướng đến trang chi tiết
                  </p>
                </motion.div>
              </div>

              <Link href="/timeline-3d">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 text-lg"
                >
                  Khám phá Timeline 3D
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
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
                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 text-center relative overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <BookOpen className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-white mb-4"
                >
                  Comic Strip Triết học
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 mb-6"
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
                      boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300"
                  >
                    Đọc Comic Strip
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 text-center relative overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  className="w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-white mb-4"
                >
                  Thảo luận Cộng đồng
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 mb-6"
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
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300"
                  >
                    Tham gia Thảo luận
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
