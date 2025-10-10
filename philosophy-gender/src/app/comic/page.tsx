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
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#F4EFE6",
        fontFamily:
          "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23C78B4E' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <Navigation />

      {/* Philosophical Study Background */}
      <div className="fixed inset-0 z-0">
        {/* Subtle parchment texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='paper' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 10h20M10 0v20' stroke='%23C78B4E' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23paper)'/%3E%3C/svg%3E")`,
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
              className="flex items-center gap-2 transition-colors duration-300"
              style={{
                color: "#7A6A53",
                fontFamily:
                  "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
              }}
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
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mb-8 shadow-sm"
            style={{
              backgroundColor: "#C78B4E",
              border: "1px solid #7A6A53",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#F4EFE6" }} />
            <span
              className="text-sm font-medium tracking-wide"
              style={{
                color: "#F4EFE6",
                fontFamily:
                  "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
              }}
            >
              Comic Strip Triết học
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-7xl font-bold mb-6"
            style={{
              color: "#3B3A36",
              fontFamily:
                "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
            }}
          >
            <span className="block">Comic Strip</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-xl leading-relaxed"
            style={{
              color: "#3B3A36",
              fontFamily:
                "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
            }}
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
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-lg p-10 shadow-sm hover:shadow-md transition-all duration-500"
              style={{
                backgroundColor: "#F4EFE6",
                border: "1px solid #7A6A53",
              }}
            >
              {/* Navigation */}
              <div className="flex justify-between items-center mb-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevComic}
                  className="p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  style={{
                    backgroundColor: "#F4EFE6",
                    border: "1px solid #7A6A53",
                  }}
                >
                  <ChevronLeft
                    className="w-6 h-6"
                    style={{ color: "#3B3A36" }}
                  />
                </motion.button>

                <div className="text-center">
                  <h2
                    className="text-3xl font-bold mb-3"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    {comics[currentComic].title}
                  </h2>
                  <p
                    className="text-lg mb-2"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    {comics[currentComic].setting}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg"
                    style={{
                      backgroundColor: "#C78B4E",
                      border: "1px solid #7A6A53",
                    }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: "#F4EFE6",
                        fontFamily:
                          "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      {comics[currentComic].era}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextComic}
                  className="p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  style={{
                    backgroundColor: "#F4EFE6",
                    border: "1px solid #7A6A53",
                  }}
                >
                  <ChevronRight
                    className="w-6 h-6"
                    style={{ color: "#3B3A36" }}
                  />
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
                        transition={{
                          delay: index * 0.2,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
                        style={{
                          backgroundColor: "#F4EFE6",
                          border: "1px solid #7A6A53",
                        }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
                            style={{ backgroundColor: "#C78B4E" }}
                          >
                            <span
                              className="font-bold text-sm"
                              style={{
                                color: "#F4EFE6",
                                fontFamily:
                                  "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                              }}
                            >
                              {line.speaker.charAt(0)}
                            </span>
                          </div>
                          <div
                            className="font-bold text-xl"
                            style={{
                              color: "#3B3A36",
                              fontFamily:
                                "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                            }}
                          >
                            {line.speaker}
                          </div>
                        </div>
                        <div
                          className="text-lg leading-relaxed pl-13"
                          style={{
                            color: "#3B3A36",
                            fontFamily:
                              "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                          }}
                        >
                          "{line.text}"
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Meaning */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    className="p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#F4EFE6",
                      border: "1px solid #7A6A53",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Quote className="w-6 h-6" style={{ color: "#C78B4E" }} />
                      <h3
                        className="text-2xl font-bold"
                        style={{
                          color: "#3B3A36",
                          fontFamily:
                            "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                        }}
                      >
                        Ý nghĩa triết học
                      </h3>
                    </div>
                    <p
                      className="text-lg leading-relaxed"
                      style={{
                        color: "#3B3A36",
                        fontFamily:
                          "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                      }}
                    >
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
                      index === currentComic ? "shadow-md" : "hover:opacity-70"
                    }`}
                    style={{
                      backgroundColor:
                        index === currentComic ? "#C78B4E" : "#7A6A53",
                    }}
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
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl font-bold mb-6"
              style={{
                color: "#3B3A36",
                fontFamily:
                  "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
              }}
            >
              Thảo luận về Comic
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
              className="rounded-lg p-10 shadow-sm hover:shadow-md transition-all duration-500"
              style={{
                backgroundColor: "#F4EFE6",
                border: "1px solid #7A6A53",
              }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Bạn đồng ý hay phản đối quan điểm nào?
              </h3>
              <p
                className="text-xl mb-10 leading-relaxed"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Hãy chia sẻ suy nghĩ của bạn về các cuộc đối thoại này và tham
                gia thảo luận với cộng đồng.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/discussion">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="font-semibold py-4 px-9 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 flex items-center justify-center gap-3"
                    style={{
                      backgroundColor: "#C78B4E",
                      color: "#F4EFE6",
                      border: "1px solid #7A6A53",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Tham gia thảo luận</span>
                  </motion.button>
                </Link>

                <Link href="/timeline">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="font-semibold py-4 px-9 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 flex items-center gap-3"
                    style={{
                      backgroundColor: "#F4EFE6",
                      color: "#3B3A36",
                      border: "1px solid #7A6A53",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
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
