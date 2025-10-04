"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  MessageCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-[#0a0a0f] overflow-hidden"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Navigation />

      {/* Animated Background - giống các trang khác */}
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
        {/* Hero Section */}
        <section className="py-16 px-6 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium tracking-wide text-violet-200">
              Dự án Triết học & Giới tính
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
              Triết học & Giới tính
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Hành trình tư tưởng từ cổ đại đến hiện đại
          </motion.p>
        </section>

        {/* CTA Buttons */}
        <section className="py-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10"
            >
              <Link href="/timeline">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold py-4 px-9 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Khám phá Timeline</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>

              <Link href="/comic">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-bold py-4 px-9 rounded-full transition-all duration-300"
                >
                  Đọc Comic Strip
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: Clock,
                  title: "Timeline Triết học",
                  desc: "Sự tiến hóa của tư tưởng về giới qua các thời đại",
                  gradient: "from-violet-500 to-purple-600",
                  link: "/timeline",
                },
                {
                  icon: BookOpen,
                  title: "Comic Strip",
                  desc: "Đối thoại hài hước và triết lý giữa các triết gia",
                  gradient: "from-fuchsia-500 to-pink-600",
                  link: "/comic",
                },
                {
                  icon: MessageCircle,
                  title: "Thảo luận mở",
                  desc: "Chia sẻ quan điểm và tham gia tranh luận",
                  gradient: "from-violet-600 to-fuchsia-600",
                  link: "/discussion",
                },
                {
                  icon: Users,
                  title: "Giới thiệu Nhóm",
                  desc: "Tìm hiểu về dự án, nhóm thực hiện và minh bạch AI",
                  gradient: "from-purple-500 to-violet-500",
                  link: "/team",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 cursor-pointer"
                >
                  <Link href={feature.link}>
                    <div className="text-center">
                      <div
                        className={`inline-flex w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3
                        className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm text-gray-400 font-light leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 mb-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Giới thiệu
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed text-center">
                Xuyên suốt lịch sử triết học, "giới tính" không chỉ là vấn đề
                sinh học, mà còn là biểu tượng của quyền lực, đạo đức và nhân
                sinh quan. Trang web này tái hiện hành trình ấy qua các hình
                thức sinh động và tương tác.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Quote Section */}
        <section className="py-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Triết học luôn đặt câu hỏi: "Con người là gì?"
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Nhưng trong hàng nghìn năm, câu trả lời ấy chủ yếu đến từ nam
                giới. Trang web này tái hiện hành trình tư tưởng – nơi triết học
                và giới tính gặp nhau, va chạm, và cùng tiến hóa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/timeline">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300"
                  >
                    Khám phá Timeline
                  </motion.button>
                </Link>
                <Link href="/comic">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-bold py-4 px-8 rounded-full transition-all duration-300"
                  >
                    Đọc Comic Strip
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Timeline Preview */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Dòng thời gian Triết học về Giới tính
              </h2>
              <p className="text-xl text-gray-200 mb-8 text-center max-w-4xl mx-auto">
                Khám phá sự tiến hóa của tư tưởng về giới tính qua các thời đại,
                từ quan điểm cổ đại đến các lý thuyết hiện đại
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    era: "Cổ đại",
                    philosopher: "Plato",
                    idea: "Linh hồn phi giới",
                    color: "from-purple-500 to-violet-500",
                  },
                  {
                    era: "Trung cổ",
                    philosopher: "Aquinas",
                    idea: "Trật tự tự nhiên",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    era: "Hiện đại",
                    philosopher: "Beauvoir",
                    idea: "Giới tính là sản phẩm xã hội",
                    color: "from-pink-500 to-rose-500",
                  },
                  {
                    era: "Đương đại",
                    philosopher: "Butler",
                    idea: "Giới như màn trình diễn",
                    color: "from-fuchsia-500 to-purple-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.era}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.era}
                    </h3>
                    <p className="text-sm text-violet-300 font-medium mb-1">
                      {item.philosopher}
                    </p>
                    <p className="text-sm text-gray-400">{item.idea}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/timeline">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300"
                  >
                    Khám phá Timeline đầy đủ
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comic Preview */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Comic Strip Triết học
              </h2>
              <p className="text-xl text-gray-200 mb-8 text-center max-w-4xl mx-auto">
                Những cuộc đối thoại hài hước và sâu sắc giữa các triết gia về
                vấn đề giới tính
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Plato vs Aristotle
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-4">
                      <p className="text-sm text-purple-200 font-medium mb-1">
                        Plato:
                      </p>
                      <p className="text-gray-200">
                        "Linh hồn con người là bất biến. Giới tính chỉ là vỏ bọc
                        tạm thời."
                      </p>
                    </div>
                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                      <p className="text-sm text-blue-200 font-medium mb-1">
                        Aristotle:
                      </p>
                      <p className="text-gray-200">
                        "Nam là hình thức, nữ là vật chất. Đó là trật tự tự
                        nhiên."
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Beauvoir vs Butler
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-pink-600/20 border border-pink-500/30 rounded-lg p-4">
                      <p className="text-sm text-pink-200 font-medium mb-1">
                        Beauvoir:
                      </p>
                      <p className="text-gray-200">
                        "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ."
                      </p>
                    </div>
                    <div className="bg-fuchsia-600/20 border border-fuchsia-500/30 rounded-lg p-4">
                      <p className="text-sm text-fuchsia-200 font-medium mb-1">
                        Butler:
                      </p>
                      <p className="text-gray-200">
                        "Giới tính là màn trình diễn, không phải bản chất."
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <Link href="/comic">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-fuchsia-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all duration-300"
                  >
                    Đọc Comic Strip đầy đủ
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Discussion Preview */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Thảo luận Cộng đồng
              </h2>
              <p className="text-xl text-gray-200 mb-8 text-center max-w-4xl mx-auto">
                Tham gia khảo sát và chia sẻ quan điểm của bạn về các vấn đề
                triết học và giới tính
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-violet-400" />
                    Khảo sát hiện tại
                  </h3>
                  <p className="text-gray-300 mb-4">
                    "Giới tính là gì theo bạn?"
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Sinh học</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-violet-500 h-2 rounded-full"
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-400">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Xã hội</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-fuchsia-500 h-2 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-400">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Cả hai</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-400">20%</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-fuchsia-400" />
                    Thảo luận gần đây
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-violet-500 pl-4">
                      <p className="text-sm text-gray-300 mb-1">
                        "Tôi đồng ý với Beauvoir..."
                      </p>
                      <p className="text-xs text-gray-500">
                        - Nguyễn Văn A • 2 giờ trước
                      </p>
                    </div>
                    <div className="border-l-2 border-fuchsia-500 pl-4">
                      <p className="text-sm text-gray-300 mb-1">
                        "Theo tôi, giới tính là sự kết hợp..."
                      </p>
                      <p className="text-xs text-gray-500">
                        - Trần Thị B • 4 giờ trước
                      </p>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-4">
                      <p className="text-sm text-gray-300 mb-1">
                        "Butler đã mở ra một cách nhìn mới..."
                      </p>
                      <p className="text-xs text-gray-500">
                        - Lê Văn C • 6 giờ trước
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <Link href="/discussion">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300"
                  >
                    Tham gia Thảo luận
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent"
              >
                Bắt đầu hành trình khám phá
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-200 mb-8"
              >
                Sử dụng thanh điều hướng ở trên để khám phá các phần khác nhau
                của dự án
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/timeline">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300"
                  >
                    Timeline Tư tưởng
                  </motion.button>
                </Link>
                <Link href="/discussion">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-bold py-4 px-8 rounded-full transition-all duration-300"
                  >
                    Tham gia Thảo luận
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
