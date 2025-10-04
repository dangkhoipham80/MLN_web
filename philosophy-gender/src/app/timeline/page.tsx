"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
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
          color: "bg-red-500",
          link: "/philosopher/plato",
        },
        {
          name: "Aristotle (384–322 TCN)",
          view: "Nam = lý trí, nữ = cảm tính → phân biệt tự nhiên.",
          influence: "Củng cố hệ thống gia trưởng.",
          color: "bg-orange-500",
          link: "/philosopher/aristotle",
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
          color: "bg-yellow-500",
          link: "/philosopher/mary-wollstonecraft",
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
          color: "bg-green-500",
          link: "/philosopher/john-stuart-mill",
        },
      ],
    },
    {
      era: "Hiện đại",
      philosophers: [
        {
          name: "Simone de Beauvoir (1949)",
          view: "Giới là sản phẩm xã hội, không cố định.",
          influence: "Triết học hiện sinh và nữ quyền.",
          color: "bg-blue-500",
          link: "/philosopher/simone-de-beauvoir",
        },
      ],
    },
    {
      era: "Đương đại",
      philosophers: [
        {
          name: "Judith Butler (1990s)",
          view: 'Giới là "màn trình diễn" – có thể lặp lại và thay đổi.',
          influence: "Cơ sở lý luận cho queer theory.",
          color: "bg-purple-500",
          link: "/philosopher/judith-butler",
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
          color: "bg-cyan-500",
          link: "/discussion",
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

      {/* Animated Background - giống HeroSection */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-fuchsia-950/30 to-[#0a0a0f]" />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-violet-600 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-fuchsia-600 rounded-full blur-[128px]"
        />

        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
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

        {/* Header */}
        <section className="py-16 px-6 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl border border-white/10 mb-8"
          >
            <Clock className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium tracking-wide text-violet-200">
              Timeline Triết học
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold mb-6"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
            }}
          >
            <span className="block bg-gradient-to-br from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              Timeline Tư tưởng
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            "Giới tính trong Triết học qua các thời đại" - Khám phá sự tiến hóa
            của tư tưởng từ cổ đại đến hiện đại
          </motion.p>
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

              {/* Desktop Table */}
              <div className="hidden lg:block">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-6 font-bold text-lg">
                        Giai đoạn
                      </th>
                      <th className="text-left py-4 px-6 font-bold text-lg">
                        Triết gia / Lý thuyết
                      </th>
                      <th className="text-left py-4 px-6 font-bold text-lg">
                        Quan điểm chính
                      </th>
                      <th className="text-left py-4 px-6 font-bold text-lg">
                        Ảnh hưởng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {timelineData.map((period, periodIndex) =>
                      period.philosophers.map(
                        (philosopher, philosopherIndex) => (
                          <motion.tr
                            key={`${period.era}-${philosopher.name}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: (periodIndex + philosopherIndex) * 0.1,
                            }}
                            className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                          >
                            <td className="py-4 px-6">
                              {philosopherIndex === 0 && (
                                <span className="font-semibold text-lg text-yellow-300">
                                  {period.era}
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-6">
                              <Link href={philosopher.link}>
                                <div className="flex items-center space-x-3 group cursor-pointer">
                                  <div
                                    className={`w-4 h-4 rounded-full ${philosopher.color}`}
                                  ></div>
                                  <span className="group-hover:text-yellow-300 transition-colors duration-200 font-medium">
                                    {philosopher.name}
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td className="py-4 px-6 text-gray-200">
                              {philosopher.view}
                            </td>
                            <td className="py-4 px-6 text-gray-300">
                              {philosopher.influence}
                            </td>
                          </motion.tr>
                        )
                      )
                    )}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-6">
                {timelineData.map((period, periodIndex) => (
                  <motion.div
                    key={period.era}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: periodIndex * 0.1 }}
                    className="bg-white/5 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-yellow-300 mb-4">
                      {period.era}
                    </h3>
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
                            className="bg-white/5 rounded-lg p-4"
                          >
                            <Link href={philosopher.link}>
                              <div className="flex items-center space-x-3 mb-3 group cursor-pointer">
                                <div
                                  className={`w-4 h-4 rounded-full ${philosopher.color}`}
                                ></div>
                                <span className="group-hover:text-yellow-300 transition-colors duration-200 font-medium text-lg">
                                  {philosopher.name}
                                </span>
                              </div>
                            </Link>
                            <div className="ml-7">
                              <p className="text-gray-200 mb-2">
                                <span className="font-semibold">
                                  Quan điểm:
                                </span>{" "}
                                {philosopher.view}
                              </p>
                              <p className="text-gray-300">
                                <span className="font-semibold">
                                  Ảnh hưởng:
                                </span>{" "}
                                {philosopher.influence}
                              </p>
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
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 text-center"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Khám phá 3D Timeline
              </h2>
              <p className="text-gray-400 text-xl mb-10 leading-relaxed">
                Trải nghiệm timeline tương tác với các triết gia trong không
                gian 3D
              </p>
              <Link href="/timeline-3d">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-9 rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
                >
                  <Clock className="w-5 h-5" />
                  <span>Khám phá Timeline 3D</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              <span className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Khám phá sâu hơn
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 mb-10"
            >
              Click vào các triết gia để tìm hiểu chi tiết về quan điểm của họ
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Link href="/comic">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-9 rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Đọc Comic Strip</span>
                </motion.button>
              </Link>

              <Link href="/discussion">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-bold py-4 px-9 rounded-full transition-all duration-300 flex items-center gap-3"
                >
                  <Users className="w-5 h-5" />
                  <span>Tham gia Thảo luận</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
