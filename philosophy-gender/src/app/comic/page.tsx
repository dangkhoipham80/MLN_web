"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";

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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />

      <main className="pt-16">
        {/* Header */}
        <section className="py-20 px-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Comic Strip
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Hài hước, triết lý, và đôi khi châm biếm — những đoạn hội thoại
            tưởng tượng giúp bạn cảm nhận cách triết học cổ đại và hiện đại
            tranh luận về giới.
          </motion.p>
        </section>

        {/* Comic Viewer */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden">
              {/* Navigation */}
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={prevComic}
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {comics[currentComic].title}
                  </h2>
                  <p className="text-gray-300 text-sm">
                    {comics[currentComic].setting}
                  </p>
                  <p className="text-yellow-400 text-sm font-medium">
                    {comics[currentComic].era}
                  </p>
                </div>

                <button
                  onClick={nextComic}
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Comic Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentComic}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Dialogue */}
                  <div className="space-y-4">
                    {comics[currentComic].dialogue.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`p-4 rounded-lg ${line.color} text-white`}
                      >
                        <div className="font-bold text-lg mb-2">
                          {line.speaker}:
                        </div>
                        <div className="text-lg leading-relaxed">
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
                    className="bg-yellow-500/20 border-l-4 border-yellow-500 p-6 rounded-r-lg"
                  >
                    <h3 className="text-xl font-bold text-yellow-300 mb-3">
                      Ý nghĩa:
                    </h3>
                    <p className="text-white text-lg leading-relaxed">
                      {comics[currentComic].meaning}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Comic Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {comics.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentComic(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentComic ? "bg-yellow-400" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Discussion Section */}
        <section className="py-20 px-10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-8"
            >
              Thảo luận về Comic
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Bạn đồng ý hay phản đối quan điểm nào?
              </h3>
              <p className="text-gray-200 mb-6">
                Hãy chia sẻ suy nghĩ của bạn về các cuộc đối thoại này
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Tham gia thảo luận</span>
                </button>

                <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Đọc thêm về triết gia</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
