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
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium tracking-wide text-violet-200">
              Khám phá triết học
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
            className="text-xl text-gray-400 leading-relaxed mb-8 max-w-4xl mx-auto"
          >
            Hành trình tư tưởng từ cổ đại đến hiện đại. Từ những cuộc đối thoại
            của Plato đến lý thuyết giới của Judith Butler — cùng khám phá cách
            các triết gia nhìn nhận giới tính, vai trò, và tự do của con người
            trong xã hội.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            <Link href="/timeline">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold py-4 px-9 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 flex items-center gap-3"
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

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Timeline 3D</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm">Comic Triết học</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">Thảo luận</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">Nhóm</span>
            </div>
          </motion.div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 px-10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-8">Giới thiệu</h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Xuyên suốt lịch sử triết học, "giới tính" không chỉ là vấn đề
                sinh học, mà còn là biểu tượng của quyền lực, đạo đức và nhân
                sinh quan. Trang web này tái hiện hành trình ấy qua các hình
                thức sinh động:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Timeline Triết học",
                  description: "Sự tiến hóa của tư tưởng về giới",
                  icon: Clock,
                  link: "/timeline",
                  color: "from-red-500 to-pink-500",
                },
                {
                  title: "Comic Strip",
                  description: "Đối thoại giữa triết gia và thực tế đời sống",
                  icon: BookOpen,
                  link: "/comic",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Thảo luận mở",
                  description: "Nơi bạn chia sẻ quan điểm của mình",
                  icon: MessageCircle,
                  link: "/discussion",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Thông tin Nhóm",
                  description: "Về dự án và đội ngũ thực hiện",
                  icon: Users,
                  link: "/team",
                  color: "from-purple-500 to-violet-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={feature.link}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Quote Section */}
        <section className="py-20 px-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold text-white mb-8">
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                  >
                    Khám phá Timeline
                  </motion.button>
                </Link>
                <Link href="/comic">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                  >
                    Đọc Comic Strip
                  </motion.button>
                </Link>
              </div>
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
              Bắt đầu hành trình khám phá
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Sử dụng thanh điều hướng ở trên để khám phá các phần khác nhau của
              dự án
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/timeline">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Timeline Tư tưởng
                </motion.button>
              </Link>
              <Link href="/discussion">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Tham gia Thảo luận
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
