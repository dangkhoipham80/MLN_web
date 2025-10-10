"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  MessageCircle,
  Sparkles,
  Clock,
  TrendingUp,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Animated Background - giống team page */}
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
        {/* Header */}
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
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Khám phá Timeline</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>

              <Link href="/comic">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-bold py-4 px-9 rounded-full transition-all duration-300 flex items-center gap-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <BookOpen className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
                  <span>Đọc Comic Strip</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {[
                {
                  icon: Clock,
                  title: "Timeline Triết học",
                  desc: "Sự tiến hóa của tư tưởng về giới qua các thời đại",
                  gradient: "from-violet-500 to-purple-600",
                  link: "/timeline",
                  image: "/assets/plato.jpg",
                },
                {
                  icon: BookOpen,
                  title: "Comic Strip",
                  desc: "Đối thoại hài hước và triết lý giữa các triết gia",
                  gradient: "from-fuchsia-500 to-pink-600",
                  link: "/comic",
                  image: "/assets/aristotle.jpg",
                },
                {
                  icon: MessageCircle,
                  title: "Thảo luận mở",
                  desc: "Chia sẻ quan điểm và tham gia tranh luận",
                  gradient: "from-violet-600 to-fuchsia-600",
                  link: "/discussion",
                  image: "/assets/wollstonecraft.jpg",
                },
                {
                  icon: Users,
                  title: "Giới thiệu Nhóm",
                  desc: "Tìm hiểu về dự án, nhóm thực hiện và minh bạch AI",
                  gradient: "from-purple-500 to-violet-500",
                  link: "/team",
                  image: "/assets/mill.jpg",
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
                      <div className="relative mb-4">
                        <div
                          className={`inline-flex w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg"
                        >
                          <img
                            src={feature.image}
                            alt={`${feature.title} philosopher`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
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
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-1.5 backdrop-blur-sm bg-white/5"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-gradient-to-b from-white to-gray-300 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
