"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  BarChart3,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  ArrowLeft,
  Users,
  TrendingUp,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function DiscussionPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Nguyễn Văn A",
      content:
        "Tôi đồng ý với Beauvoir rằng giới tính là sản phẩm của xã hội. Chúng ta được dạy cách 'làm đàn ông' hoặc 'làm phụ nữ' từ nhỏ.",
      likes: 12,
      dislikes: 2,
      timestamp: "2 giờ trước",
    },
    {
      id: 2,
      author: "Trần Thị B",
      content:
        "Theo tôi, giới tính là sự kết hợp của cả sinh học và xã hội. Không thể phủ nhận hoàn toàn yếu tố tự nhiên.",
      likes: 8,
      dislikes: 1,
      timestamp: "4 giờ trước",
    },
    {
      id: 3,
      author: "Lê Văn C",
      content:
        "Butler đã mở ra một cách nhìn mới về giới tính. Việc coi giới như 'màn trình diễn' giúp chúng ta hiểu được tính linh hoạt của bản sắc.",
      likes: 15,
      dislikes: 0,
      timestamp: "6 giờ trước",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleVote = (answer: string) => {
    if (!hasVoted) {
      setSelectedAnswer(answer);
      setHasVoted(true);
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "Bạn",
        content: newComment,
        likes: 0,
        dislikes: 0,
        timestamp: "Vừa xong",
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
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
              Thảo luận & Khảo sát
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
              Thảo luận Triết học
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Triết học không chỉ để học, mà để tranh luận. Hãy chia sẻ cách bạn
            hiểu "giới tính" trong thời đại hôm nay.
          </motion.p>
        </section>

        {/* Survey Section */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 mb-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Khảo sát: Giới tính là gì theo bạn?
              </h2>

              <div className="grid lg:grid-cols-2 gap-10">
                {/* Survey Question */}
                <div>
                  <h3 className="text-xl font-bold text-amber-300 mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                    Chọn quan điểm của bạn
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        id: "1",
                        text: "Bản chất sinh học",
                        emoji: "🧬",
                        color: "from-red-500 to-pink-500",
                      },
                      {
                        id: "2",
                        text: "Cấu trúc xã hội",
                        emoji: "🏛️",
                        color: "from-blue-500 to-cyan-500",
                      },
                      {
                        id: "3",
                        text: "Sự kết hợp của cả hai",
                        emoji: "⚖️",
                        color: "from-yellow-500 to-orange-500",
                      },
                      {
                        id: "4",
                        text: 'Một dạng "trình diễn" cá nhân',
                        emoji: "🎭",
                        color: "from-purple-500 to-violet-500",
                      },
                    ].map((option) => {
                      const getButtonClass = () => {
                        if (selectedAnswer === option.id) {
                          return "bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg shadow-yellow-500/30";
                        }
                        if (hasVoted) {
                          return "bg-white/[0.05] text-gray-400 cursor-not-allowed border border-white/[0.1]";
                        }
                        return "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] hover:border-white/[0.2]";
                      };

                      return (
                        <motion.button
                          key={option.id}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleVote(option.id)}
                          disabled={hasVoted}
                          className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${getButtonClass()}`}
                        >
                          <div className="flex items-center space-x-4">
                            <span className="text-3xl">{option.emoji}</span>
                            <span className="text-lg font-medium">
                              {option.text}
                            </span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  {hasVoted && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl"
                    >
                      <p className="text-green-300 font-medium text-lg">
                        ✅ Cảm ơn bạn đã tham gia khảo sát!
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Survey Results */}
                <div>
                  <h3 className="text-xl font-bold text-amber-300 mb-6 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Kết quả khảo sát hiện tại
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        label: "Bản chất sinh học",
                        percentage: 15,
                        color: "bg-red-500",
                      },
                      {
                        label: "Cấu trúc xã hội",
                        percentage: 35,
                        color: "bg-blue-500",
                      },
                      {
                        label: "Sự kết hợp của cả hai",
                        percentage: 40,
                        color: "bg-yellow-500",
                      },
                      {
                        label: 'Một dạng "trình diễn" cá nhân',
                        percentage: 10,
                        color: "bg-purple-500",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">
                            {item.label}
                          </span>
                          <span className="text-white text-sm font-bold">
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-white/[0.1] rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className={`h-3 rounded-full ${item.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Thảo luận cộng đồng
              </h2>

              {/* Comment Form */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-amber-300 mb-6 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chia sẻ quan điểm của bạn
                </h3>
                <form onSubmit={handleSubmitComment}>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Viết bình luận của bạn về quan điểm giới tính..."
                      className="flex-1 p-4 rounded-2xl bg-white/[0.05] text-white placeholder-gray-400 border border-white/[0.1] focus:outline-none focus:border-yellow-400 focus:bg-white/[0.08] transition-all duration-300"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-yellow-500/30"
                    >
                      Gửi
                    </motion.button>
                  </div>
                </form>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-amber-300 mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Bình luận nổi bật
                </h3>
                {comments.map((comment, index) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/[0.05] rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {comment.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">
                            {comment.author}
                          </h4>
                          <span className="text-gray-400 text-sm">
                            {comment.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-200 mb-4 leading-relaxed">
                      {comment.content}
                    </p>
                    <div className="flex space-x-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {comment.likes}
                        </span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors duration-300"
                      >
                        <ThumbsDown className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {comment.dislikes}
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                Khám phá thêm
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 mb-10"
            >
              Hãy xem lại Timeline Tư tưởng hoặc Comic Strip để tìm triết gia
              bạn đồng cảm nhất.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Link href="/timeline">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-9 rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Khám phá Timeline</span>
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
      </div>
    </div>
  );
}
