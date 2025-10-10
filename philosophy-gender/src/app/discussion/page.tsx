"use client";

import { useState, useEffect } from "react";
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
import Footer from "@/components/Footer";
import Link from "next/link";

// Types
interface Comment {
  id: number;
  author: string;
  content: string;
  likes: number;
  dislikes: number;
  timestamp: string;
}

interface SurveyData {
  [key: string]: number;
}

// Utility functions for localStorage
const STORAGE_KEYS = {
  SURVEY_DATA: "philosophy-gender-survey",
  COMMENTS: "philosophy-gender-comments",
  USER_VOTES: "philosophy-gender-user-votes",
};

const getStoredData = (key: string, defaultValue: any): any => {
  if (typeof window === "undefined") return defaultValue;
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const setStoredData = (key: string, data: any): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

export default function DiscussionPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [surveyData, setSurveyData] = useState<SurveyData>({});
  const [newComment, setNewComment] = useState("");

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedComments = getStoredData(STORAGE_KEYS.COMMENTS, [
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

    const storedSurveyData = getStoredData(STORAGE_KEYS.SURVEY_DATA, {
      "1": 15,
      "2": 35,
      "3": 40,
      "4": 10,
    });

    const userVote = getStoredData(STORAGE_KEYS.USER_VOTES, null);

    setComments(storedComments);
    setSurveyData(storedSurveyData);
    setSelectedAnswer(userVote);
    setHasVoted(!!userVote);
  }, []);

  const handleVote = (answer: string) => {
    if (!hasVoted) {
      setSelectedAnswer(answer);
      setHasVoted(true);

      // Update survey data
      const newSurveyData = { ...surveyData };
      newSurveyData[answer] = (newSurveyData[answer] || 0) + 1;

      // Save to localStorage
      setStoredData(STORAGE_KEYS.SURVEY_DATA, newSurveyData);
      setStoredData(STORAGE_KEYS.USER_VOTES, answer);

      setSurveyData(newSurveyData);
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(), // Use timestamp as unique ID
        author: "Bạn",
        content: newComment,
        likes: 0,
        dislikes: 0,
        timestamp: "Vừa xong",
      };

      const updatedComments = [comment, ...comments];
      setComments(updatedComments);
      setStoredData(STORAGE_KEYS.COMMENTS, updatedComments);
      setNewComment("");
    }
  };

  // Calculate survey percentages
  const calculateSurveyPercentages = () => {
    const totalVotes = Object.values(surveyData).reduce(
      (sum, count) => sum + count,
      0
    );
    if (totalVotes === 0) return {};

    const percentages: { [key: string]: number } = {};
    Object.keys(surveyData).forEach((key) => {
      percentages[key] = Math.round((surveyData[key] / totalVotes) * 100);
    });

    return percentages;
  };

  const surveyPercentages = calculateSurveyPercentages();

  const handleLikeComment = (commentId: number) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    );
    setComments(updatedComments);
    setStoredData(STORAGE_KEYS.COMMENTS, updatedComments);
  };

  const handleDislikeComment = (commentId: number) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, dislikes: comment.dislikes + 1 }
        : comment
    );
    setComments(updatedComments);
    setStoredData(STORAGE_KEYS.COMMENTS, updatedComments);
  };

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#F4EFE6",
        fontFamily:
          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
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
                  "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
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
                  "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
              }}
            >
              Thảo luận & Khảo sát
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
                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
              fontWeight: 400,
            }}
          >
            <span className="block">Thảo luận Triết học</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-xl leading-relaxed"
            style={{
              color: "#3B3A36",
              fontFamily:
                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
            }}
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
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-lg p-10 mb-8 shadow-sm hover:shadow-md transition-all duration-500"
              style={{
                backgroundColor: "#F4EFE6",
                border: "1px solid #7A6A53",
              }}
            >
              <h2
                className="text-4xl font-bold mb-8 text-center"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Khảo sát: Giới tính là gì theo bạn?
              </h2>

              <div className="grid lg:grid-cols-2 gap-10">
                {/* Survey Question */}
                <div>
                  <h3
                    className="text-xl font-bold mb-6 flex items-center gap-2"
                    style={{
                      color: "#C78B4E",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#C78B4E" }}
                    />
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
                      const getButtonStyle = () => {
                        if (selectedAnswer === option.id) {
                          return {
                            backgroundColor: "#C78B4E",
                            color: "#F4EFE6",
                            border: "1px solid #7A6A53",
                          };
                        }
                        if (hasVoted) {
                          return {
                            backgroundColor: "#F4EFE6",
                            color: "#7A6A53",
                            border: "1px solid #7A6A53",
                          };
                        }
                        return {
                          backgroundColor: "#F4EFE6",
                          color: "#3B3A36",
                          border: "1px solid #7A6A53",
                        };
                      };

                      return (
                        <motion.button
                          key={option.id}
                          whileHover={{ scale: 1.01, y: -2 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => handleVote(option.id)}
                          disabled={hasVoted}
                          className="w-full p-6 rounded-lg text-left transition-all duration-500 shadow-sm hover:shadow-md"
                          style={{
                            ...getButtonStyle(),
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
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
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="mt-6 p-6 rounded-lg shadow-sm"
                      style={{
                        backgroundColor: "#F4EFE6",
                        border: "1px solid #7A6A53",
                      }}
                    >
                      <p
                        className="font-medium text-lg"
                        style={{
                          color: "#3B3A36",
                          fontFamily:
                            "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                        }}
                      >
                        ✅ Cảm ơn bạn đã tham gia khảo sát!
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Survey Results */}
                <div>
                  <h3
                    className="text-xl font-bold mb-6 flex items-center gap-2"
                    style={{
                      color: "#C78B4E",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    <BarChart3 className="w-5 h-5" />
                    Kết quả khảo sát hiện tại
                    <span className="text-sm font-normal opacity-70">
                      (
                      {Object.values(surveyData).reduce(
                        (sum, count) => sum + count,
                        0
                      )}{" "}
                      phiếu bầu)
                    </span>
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        id: "1",
                        label: "Bản chất sinh học",
                        percentage: surveyPercentages["1"] || 0,
                        color: "bg-red-500",
                      },
                      {
                        id: "2",
                        label: "Cấu trúc xã hội",
                        percentage: surveyPercentages["2"] || 0,
                        color: "bg-blue-500",
                      },
                      {
                        id: "3",
                        label: "Sự kết hợp của cả hai",
                        percentage: surveyPercentages["3"] || 0,
                        color: "bg-yellow-500",
                      },
                      {
                        id: "4",
                        label: 'Một dạng "trình diễn" cá nhân',
                        percentage: surveyPercentages["4"] || 0,
                        color: "bg-purple-500",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span
                            className="font-medium"
                            style={{
                              color: "#3B3A36",
                              fontFamily:
                                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                            }}
                          >
                            {item.label}
                          </span>
                          <span
                            className="text-sm font-bold"
                            style={{
                              color: "#3B3A36",
                              fontFamily:
                                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                            }}
                          >
                            {item.percentage}%
                          </span>
                        </div>
                        <div
                          className="w-full rounded-full h-3 overflow-hidden"
                          style={{ backgroundColor: "#7A6A53" }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percentage}%` }}
                            transition={{
                              duration: 1.2,
                              delay: index * 0.2,
                              ease: "easeOut",
                            }}
                            className="h-3 rounded-full shadow-sm"
                            style={{ backgroundColor: "#C78B4E" }}
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
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-lg p-10 shadow-sm hover:shadow-md transition-all duration-500"
              style={{
                backgroundColor: "#F4EFE6",
                border: "1px solid #7A6A53",
              }}
            >
              <h2
                className="text-4xl font-bold mb-8 text-center"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Thảo luận cộng đồng
              </h2>

              {/* Comment Form */}
              <div className="mb-10">
                <h3
                  className="text-xl font-bold mb-6 flex items-center gap-2"
                  style={{
                    color: "#C78B4E",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
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
                      className="flex-1 p-4 rounded-lg border transition-all duration-300 focus:outline-none focus:shadow-md"
                      style={{
                        backgroundColor: "#F4EFE6",
                        color: "#3B3A36",
                        border: "1px solid #7A6A53",
                        fontFamily:
                          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                      }}
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01, y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="px-8 py-4 font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
                      style={{
                        backgroundColor: "#C78B4E",
                        color: "#F4EFE6",
                        border: "1px solid #7A6A53",
                        fontFamily:
                          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                      }}
                    >
                      Gửi
                    </motion.button>
                  </div>
                </form>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                <h3
                  className="text-xl font-bold mb-6 flex items-center gap-2"
                  style={{
                    color: "#C78B4E",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  <Users className="w-5 h-5" />
                  Bình luận nổi bật
                </h3>
                {comments.map((comment, index) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#F4EFE6",
                      border: "1px solid #7A6A53",
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
                          style={{ backgroundColor: "#C78B4E" }}
                        >
                          <span
                            className="font-bold text-sm"
                            style={{
                              color: "#F4EFE6",
                              fontFamily:
                                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                            }}
                          >
                            {comment.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4
                            className="font-bold"
                            style={{
                              color: "#3B3A36",
                              fontFamily:
                                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                            }}
                          >
                            {comment.author}
                          </h4>
                          <span
                            className="text-sm"
                            style={{
                              color: "#7A6A53",
                              fontFamily:
                                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                            }}
                          >
                            {comment.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p
                      className="mb-4 leading-relaxed"
                      style={{
                        color: "#3B3A36",
                        fontFamily:
                          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                      }}
                    >
                      {comment.content}
                    </p>
                    <div className="flex space-x-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleLikeComment(comment.id)}
                        className="flex items-center space-x-2 transition-colors duration-300 hover:text-green-600"
                        style={{
                          color: "#7A6A53",
                          fontFamily:
                            "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                        }}
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {comment.likes}
                        </span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDislikeComment(comment.id)}
                        className="flex items-center space-x-2 transition-colors duration-300 hover:text-red-600"
                        style={{
                          color: "#7A6A53",
                          fontFamily:
                            "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                        }}
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
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl font-bold mb-6"
              style={{
                color: "#3B3A36",
                fontFamily:
                  "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
              }}
            >
              Khám phá thêm
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
              className="text-xl mb-10"
              style={{
                color: "#3B3A36",
                fontFamily:
                  "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
              }}
            >
              Hãy xem lại Timeline Tư tưởng hoặc Comic Strip để tìm triết gia
              bạn đồng cảm nhất.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Link href="/timeline">
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
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Khám phá Timeline</span>
                </motion.button>
              </Link>

              <Link href="/comic">
                <motion.button
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-semibold py-4 px-9 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
                  style={{
                    backgroundColor: "#F4EFE6",
                    color: "#3B3A36",
                    border: "1px solid #7A6A53",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  Đọc Comic Strip
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
