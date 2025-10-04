"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Link from "next/link";

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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />

      <main className="pt-16">
        {/* Header */}
        <section className="py-20 px-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-4"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              background: "linear-gradient(135deg, #ffffff, #c4b5fd, #f0abfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Timeline Tư tưởng
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            "Giới tính trong Triết học qua các thời đại"
          </motion.p>
        </section>

        {/* Timeline Table */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 overflow-x-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
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
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Khám phá 3D Timeline
              </h2>
              <p className="text-gray-200 mb-8">
                Trải nghiệm timeline tương tác với các triết gia trong không
                gian 3D
              </p>
              <Link href="/timeline-3d">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Khám phá Timeline 3D
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-8"
            >
              Khám phá sâu hơn
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Click vào các triết gia để tìm hiểu chi tiết về quan điểm của họ
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/comic"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Đọc Comic Strip
              </a>
              <a
                href="/discussion"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Tham gia Thảo luận
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
