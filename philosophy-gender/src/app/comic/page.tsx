"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  MessageCircle,
  Sparkles,
  ArrowLeft,
  Quote,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const comics = [
  {
    id: 1,
    title: "Plato và 'Linh hồn phi giới'",
    setting: "Học viện Athens, Plato đang giảng bài",
    dialogue: [
      {
        speaker: "Plato",
        text: "Linh hồn con người là bất biến. Giới tính chỉ là vỏ bọc tạm thời.",
        color: "bg-purple-600",
      },
      {
        speaker: "Học trò",
        text: "Vậy phụ nữ có thể trở thành triết gia như đàn ông không?",
        color: "bg-blue-600",
      },
      {
        speaker: "Plato",
        text: "Nếu linh hồn họ có cùng lý trí, tại sao không?",
        color: "bg-purple-600",
      },
    ],
    meaning:
      "Quan điểm về linh hồn vượt lên trên giới tính, đặt nền móng cho ý tưởng bình đẳng tinh thần.",
    era: "Cổ đại (427-347 TCN)",
  },
  {
    id: 2,
    title: "Aristotle và 'Trật tự tự nhiên'",
    setting: "Phòng giảng Aristotle",
    dialogue: [
      {
        speaker: "Aristotle",
        text: "Nam là hình thức, nữ là vật chất. Đó là trật tự tự nhiên.",
        color: "bg-indigo-600",
      },
      {
        speaker: "Học trò",
        text: "Nhưng nếu trật tự đó được con người tạo ra thì sao?",
        color: "bg-blue-600",
      },
      {
        speaker: "Aristotle",
        text: "Khi đó triết học sẽ không còn là triết học.",
        color: "bg-indigo-600",
      },
    ],
    meaning:
      "Quan điểm phân biệt giới tính theo tự nhiên, ảnh hưởng lâu dài trong xã hội phương Tây.",
    era: "Cổ đại (384-322 TCN)",
  },
  {
    id: 3,
    title: "Simone de Beauvoir và 'Không sinh ra là phụ nữ'",
    setting: "Paris, năm 1949",
    dialogue: [
      {
        speaker: "Beauvoir",
        text: "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.",
        color: "bg-pink-600",
      },
      {
        speaker: "Bạn đồng hành",
        text: "Thế đàn ông thì sao?",
        color: "bg-green-600",
      },
      {
        speaker: "Beauvoir",
        text: "Họ cũng bị xã hội dạy phải 'làm đàn ông'.",
        color: "bg-pink-600",
      },
    ],
    meaning:
      "Lý thuyết giới như sản phẩm xã hội – bước ngoặt trong triết học hiện đại.",
    era: "Hiện đại (1908-1986)",
  },
  {
    id: 4,
    title: "Judith Butler và 'Giới trong thời đại AI'",
    setting: "Phòng thí nghiệm công nghệ",
    dialogue: [
      {
        speaker: "Butler",
        text: "Nếu giới tính là biểu diễn, AI có thể 'diễn' giới tính không?",
        color: "bg-cyan-600",
      },
      {
        speaker: "AI",
        text: "Tôi có dữ liệu thiên vị theo giới. Liệu tôi có giới không?",
        color: "bg-gray-600",
      },
    ],
    meaning:
      "Giới tính trong kỷ nguyên công nghệ, đặt lại câu hỏi về bản sắc và tự do.",
    era: "Đương đại (1956-nay)",
  },
];

export default function ComicPage() {
  const [currentComic, setCurrentComic] = useState(0);

  const nextComic = () => {
    setCurrentComic((prev) => (prev + 1) % comics.length);
  };

  const prevComic = () => {
    setCurrentComic((prev) => (prev - 1 + comics.length) % comics.length);
  };

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
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium tracking-wide text-violet-200">
              Comic Strip Triết học
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
              Comic Strip
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Hài hước, triết lý, và đôi khi châm biếm — những đoạn hội thoại
            tưởng tượng giúp bạn cảm nhận cách triết học cổ đại và hiện đại
            tranh luận về giới.
          </motion.p>
        </section>

        {/* Comic Viewer */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Navigation */}
              <div className="flex justify-between items-center mb-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevComic}
                  className="p-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] rounded-2xl transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>

                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                    {comics[currentComic].title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-2">
                    {comics[currentComic].setting}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full">
                    <span className="text-yellow-300 text-sm font-medium">
                      {comics[currentComic].era}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextComic}
                  className="p-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] rounded-2xl transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              {/* Comic Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentComic}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Dialogue */}
                  <div className="space-y-6">
                    {comics[currentComic].dialogue.map((line, index) => (
                      <motion.div
                        key={`${line.speaker}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`p-6 rounded-2xl ${line.color} text-white shadow-lg`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {line.speaker.charAt(0)}
                            </span>
                          </div>
                          <div className="font-bold text-xl">
                            {line.speaker}
                          </div>
                        </div>
                        <div className="text-lg leading-relaxed pl-13">
                          "{line.text}"
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Meaning */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 p-8 rounded-2xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Quote className="w-6 h-6 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-yellow-300">
                        Ý nghĩa triết học
                      </h3>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      {comics[currentComic].meaning}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Comic Navigation Dots */}
              <div className="flex justify-center space-x-3 mt-10">
                {comics.map((comic, index) => (
                  <motion.button
                    key={comic.id}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentComic(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentComic
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg shadow-yellow-500/30"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Discussion Section */}
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
                Thảo luận về Comic
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Bạn đồng ý hay phản đối quan điểm nào?
              </h3>
              <p className="text-gray-400 text-xl mb-10 leading-relaxed">
                Hãy chia sẻ suy nghĩ của bạn về các cuộc đối thoại này và tham
                gia thảo luận với cộng đồng.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/discussion">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-9 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Tham gia thảo luận</span>
                  </motion.button>
                </Link>

                <Link href="/timeline">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-bold py-4 px-9 rounded-full transition-all duration-300 flex items-center gap-3"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Đọc thêm về triết gia</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
