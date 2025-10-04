"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  BarChart3,
  Users,
  Heart,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { PieChart, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

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

  const surveyData = {
    labels: [
      "Bản chất sinh học",
      "Cấu trúc xã hội",
      "Sự kết hợp của cả hai",
      'Một dạng "trình diễn" cá nhân',
    ],
    datasets: [
      {
        data: [15, 35, 40, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderWidth: 0,
      },
    ],
  };

  const eraData = {
    labels: ["Cổ đại", "Khai sáng", "Hiện đại sớm", "Hiện đại", "Đương đại"],
    datasets: [
      {
        label: "Mức độ quan tâm đến giới tính",
        data: [20, 30, 45, 80, 95],
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

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
            Thảo luận & Khảo sát
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Triết học không chỉ để học, mà để tranh luận. Hãy chia sẻ cách bạn
            hiểu "giới tính" trong thời đại hôm nay.
          </motion.p>
        </section>

        {/* Survey Section */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Survey Question */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Giới tính là gì theo bạn?
                </h2>

                <div className="space-y-4">
                  {[
                    { id: "1", text: "Bản chất sinh học", emoji: "🧬" },
                    { id: "2", text: "Cấu trúc xã hội", emoji: "🏛️" },
                    { id: "3", text: "Sự kết hợp của cả hai", emoji: "⚖️" },
                    {
                      id: "4",
                      text: 'Một dạng "trình diễn" cá nhân',
                      emoji: "🎭",
                    },
                  ].map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleVote(option.id)}
                      disabled={hasVoted}
                      className={`w-full p-4 rounded-lg text-left transition-all duration-200 ${
                        selectedAnswer === option.id
                          ? "bg-yellow-500 text-black"
                          : hasVoted
                          ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                          : "bg-white/20 hover:bg-white/30 text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{option.emoji}</span>
                        <span className="text-lg font-medium">
                          {option.text}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {hasVoted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg"
                  >
                    <p className="text-green-300 font-medium">
                      ✅ Cảm ơn bạn đã tham gia khảo sát!
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Survey Results */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2" />
                  Kết quả khảo sát
                </h3>

                <div className="h-80">
                  <PieChart data={surveyData} options={pieOptions} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Interest Chart */}
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Mức độ quan tâm đến giới tính qua các thời đại
              </h3>

              <div className="h-80">
                <Bar data={eraData} options={chartOptions} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                Bình luận nổi bật
              </h3>

              {/* Comment Form */}
              <form onSubmit={handleSubmitComment} className="mb-8">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Chia sẻ quan điểm của bạn..."
                    className="flex-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:border-yellow-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors duration-200"
                  >
                    Gửi
                  </button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white">{comment.author}</h4>
                      <span className="text-gray-400 text-sm">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-gray-200 mb-3">{comment.content}</p>
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-green-400 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{comment.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors">
                        <ThumbsDown className="w-4 h-4" />
                        <span>{comment.dislikes}</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
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
              Bạn muốn hiểu thêm?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Hãy xem lại Timeline Tư tưởng hoặc Comic Strip để tìm triết gia
              bạn đồng cảm nhất.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Khám phá Timeline
              </a>
              <a
                href="/comic"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Đọc Comic Strip
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
