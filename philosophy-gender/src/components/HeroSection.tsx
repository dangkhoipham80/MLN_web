"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  MessageCircle,
  Sparkles,
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
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-fuchsia-950/30 to-[#0a0a0f]" />

        {/* Floating orbs */}
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

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 py-20 max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl border border-white/10 mb-12"
        >
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium tracking-wide text-violet-200">
            Khám phá tư tưởng triết học
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <h1
            className="text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tight leading-none mb-4"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block bg-gradient-to-br from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              Triết học
            </span>
            <span className="block bg-gradient-to-br from-violet-200 via-fuchsia-200 to-white bg-clip-text text-transparent">
              & Giới tính
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl mb-6 font-light tracking-wide"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
            Hành trình tư tưởng từ cổ đại đến hiện đại
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-14 text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Từ những cuộc đối thoại của Plato đến lý thuyết giới của Judith Butler
          — cùng khám phá cách các triết gia nhìn nhận giới tính, vai trò, và tự
          do của con người.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24"
        >
          <Link href="/timeline">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden bg-white text-black font-medium py-4 px-9 rounded-full text-base shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 transition-all duration-300 flex items-center gap-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="relative z-10">Khám phá Timeline</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-100 to-fuchsia-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-medium py-4 px-9 rounded-full text-base transition-all duration-300 flex items-center gap-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <BookOpen className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
            <span>Đọc Comic</span>
          </motion.button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {[
            {
              icon: BookOpen,
              title: "Timeline Triết học",
              desc: "Dòng thời gian tư tưởng",
              gradient: "from-violet-500 to-purple-600",
            },
            {
              icon: Users,
              title: "Comic Strip",
              desc: "Truyện tranh minh họa",
              gradient: "from-fuchsia-500 to-pink-600",
            },
            {
              icon: MessageCircle,
              title: "Thảo luận mở",
              desc: "Cộng đồng chia sẻ",
              gradient: "from-cyan-500 to-blue-600",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <div
                className={`inline-flex w-14 h-14 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 rounded-xl flex items-center justify-center mb-4 transition-all duration-300`}
              >
                <feature.icon className={`w-7 h-7 text-white`} />
              </div>
              <h3
                className="text-lg font-medium text-white mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm text-gray-500 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
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
          className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
      Ư
    </section>
  );
}
