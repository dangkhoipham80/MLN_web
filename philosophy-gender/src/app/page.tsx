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
        {/* Hero Section */}
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
              style={{ color: "#F4EFE6" }}
            >
              Dự án Triết học & Giới tính
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
            <span className="block">Triết học & Giới tính</span>
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
            Hành trình tư tưởng từ cổ đại đến hiện đại
          </motion.p>
        </section>

        {/* CTA Buttons */}
        <section className="py-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10"
            >
              <Link href="/timeline">
                <motion.button
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative font-semibold py-4 px-9 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 flex items-center gap-3"
                  style={{
                    backgroundColor: "#C78B4E",
                    color: "#F4EFE6",
                    border: "1px solid #7A6A53",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  <span>Khám phá Timeline</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
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
                  link: "/timeline",
                },
                {
                  icon: BookOpen,
                  title: "Comic Strip",
                  desc: "Đối thoại hài hước và triết lý giữa các triết gia",
                  link: "/comic",
                },
                {
                  icon: MessageCircle,
                  title: "Thảo luận mở",
                  desc: "Chia sẻ quan điểm và tham gia tranh luận",
                  link: "/discussion",
                },
                {
                  icon: Users,
                  title: "Giới thiệu Nhóm",
                  desc: "Tìm hiểu về dự án, nhóm thực hiện và minh bạch AI",
                  link: "/team",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative rounded-lg p-8 cursor-pointer shadow-sm hover:shadow-md transition-all duration-500"
                  style={{
                    backgroundColor: "#F4EFE6",
                    border: "1px solid #7A6A53",
                  }}
                >
                  <Link href={feature.link}>
                    <div className="text-center">
                      <div
                        className="inline-flex w-16 h-16 rounded-lg items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500 shadow-sm"
                        style={{ backgroundColor: "#C78B4E" }}
                      >
                        <feature.icon
                          className="w-8 h-8"
                          style={{ color: "#F4EFE6" }}
                        />
                      </div>
                      <h3
                        className="text-lg font-bold mb-3 transition-colors duration-500"
                        style={{
                          color: "#3B3A36",
                          fontFamily:
                            "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "#3B3A36",
                          fontFamily:
                            "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                        }}
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
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-lg p-12 mb-8 shadow-sm hover:shadow-md transition-all duration-500"
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
                Giới thiệu
              </h2>
              <p
                className="text-xl max-w-4xl mx-auto leading-relaxed text-center"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
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
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-lg p-12 shadow-sm hover:shadow-md transition-all duration-500"
              style={{
                backgroundColor: "#F4EFE6",
                border: "1px solid #7A6A53",
              }}
            >
              <h2
                className="text-3xl font-bold mb-8"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Triết học luôn đặt câu hỏi: "Con người là gì?"
              </h2>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Nhưng trong hàng nghìn năm, câu trả lời ấy chủ yếu đến từ nam
                giới. Trang web này tái hiện hành trình tư tưởng – nơi triết học
                và giới tính gặp nhau, va chạm, và cùng tiến hóa.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/timeline">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="font-semibold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#C78B4E",
                      color: "#F4EFE6",
                      border: "1px solid #7A6A53",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    Khám phá Timeline
                  </motion.button>
                </Link>
                <Link href="/comic">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="font-semibold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
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
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Timeline Preview */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2
                className="text-5xl font-bold mb-6"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Dòng thời gian Triết học về Giới tính
              </h2>
              <p
                className="text-xl max-w-4xl mx-auto leading-relaxed"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Khám phá sự tiến hóa của tư tưởng về giới tính qua các thời đại,
                từ quan điểm cổ đại đến các lý thuyết hiện đại
              </p>
            </motion.div>

            {/* Timeline with Philosopher Images */}
            <div className="relative">
              {/* Timeline Line */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full"
                style={{ backgroundColor: "#C78B4E" }}
              ></div>

              <div className="space-y-20">
                {[
                  {
                    era: "Cổ đại (427-347 TCN)",
                    philosopher: "Plato",
                    idea: "Linh hồn phi giới, bình đẳng lý trí",
                    image: "/assets/plato.jpg",
                    side: "left",
                    quote:
                      "Linh hồn con người là bất biến. Giới tính chỉ là vỏ bọc tạm thời.",
                  },
                  {
                    era: "Trung cổ (384-322 TCN)",
                    philosopher: "Aristotle",
                    idea: "Phân biệt giới theo tự nhiên",
                    image: "/assets/aristotle.jpg",
                    side: "right",
                    quote:
                      "Nam là hình thức, nữ là vật chất. Đó là trật tự tự nhiên.",
                  },
                  {
                    era: "Hiện đại (1908-1986)",
                    philosopher: "Simone de Beauvoir",
                    idea: "Giới tính là sản phẩm xã hội",
                    image: "/assets/beauvoir.jpg",
                    side: "left",
                    quote:
                      "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.",
                  },
                  {
                    era: "Đương đại (1956-nay)",
                    philosopher: "Judith Butler",
                    idea: "Giới như màn trình diễn",
                    image: "/assets/butler.jpg",
                    side: "right",
                    quote: "Giới tính là màn trình diễn, không phải bản chất.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.era}
                    initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className={`flex items-center ${
                      item.side === "left" ? "flex-row" : "flex-row-reverse"
                    } gap-12`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        item.side === "left" ? "text-right" : "text-left"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.01, y: -3 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-500"
                        style={{
                          backgroundColor: "#F4EFE6",
                          border: "1px solid #7A6A53",
                        }}
                      >
                        <div
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6"
                          style={{ backgroundColor: "#C78B4E" }}
                        >
                          <Clock
                            className="w-4 h-4"
                            style={{ color: "#F4EFE6" }}
                          />
                          <span
                            className="text-sm font-medium"
                            style={{
                              color: "#F4EFE6",
                              fontFamily:
                                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                            }}
                          >
                            {item.era}
                          </span>
                        </div>
                        <h3
                          className="text-3xl font-bold mb-4"
                          style={{
                            color: "#3B3A36",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          {item.philosopher}
                        </h3>
                        <p
                          className="text-lg mb-6"
                          style={{
                            color: "#3B3A36",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          {item.idea}
                        </p>
                        <blockquote
                          className="italic pl-4"
                          style={{
                            color: "#3B3A36",
                            borderLeft: "4px solid #C78B4E",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          "{item.quote}"
                        </blockquote>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10">
                      <div
                        className="w-6 h-6 rounded-full border-4 shadow-md"
                        style={{
                          backgroundColor: "#C78B4E",
                          borderColor: "#F4EFE6",
                        }}
                      ></div>
                    </div>

                    {/* Image */}
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.02, rotate: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative group"
                      >
                        <div
                          className="w-64 h-64 mx-auto rounded-lg overflow-hidden shadow-lg"
                          style={{ border: "2px solid #7A6A53" }}
                        >
                          <img
                            src={item.image}
                            alt={item.philosopher}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div
                            className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500"
                            style={{ backgroundColor: "#C78B4E" }}
                          ></div>
                        </div>
                        <div
                          className="absolute -top-4 -right-4 w-12 h-12 rounded-lg flex items-center justify-center shadow-md"
                          style={{ backgroundColor: "#C78B4E" }}
                        >
                          <span
                            className="font-bold text-lg"
                            style={{
                              color: "#F4EFE6",
                              fontFamily:
                                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                            }}
                          >
                            {index + 1}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <Link href="/timeline">
                <motion.button
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-semibold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 text-lg"
                  style={{
                    backgroundColor: "#C78B4E",
                    color: "#F4EFE6",
                    border: "1px solid #7A6A53",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  Khám phá Timeline đầy đủ
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* Comic Preview */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2
                className="text-5xl font-bold mb-6"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Comic Strip Triết học
              </h2>
              <p
                className="text-xl max-w-4xl mx-auto leading-relaxed"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Những cuộc đối thoại thú vị giữa các triết gia về chủ đề giới
                tính qua hình thức comic strip sinh động
              </p>
            </motion.div>

            {/* Comic Dialogues */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Ancient Dialogue */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    Cuộc đối thoại Cổ đại
                  </h3>
                  <p
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    Plato vs Aristotle
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.01, x: 5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#F4EFE6",
                      border: "1px solid #7A6A53",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-16 h-16 rounded-lg overflow-hidden shadow-sm"
                        style={{ border: "2px solid #7A6A53" }}
                      >
                        <img
                          src="/assets/plato.jpg"
                          alt="Plato"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4
                          className="text-lg font-bold"
                          style={{
                            color: "#3B3A36",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          Plato
                        </h4>
                        <p
                          className="text-sm"
                          style={{
                            color: "#C78B4E",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          427-347 TCN
                        </p>
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-r-lg"
                      style={{
                        backgroundColor: "#F4EFE6",
                        borderLeft: "4px solid #C78B4E",
                      }}
                    >
                      <p
                        className="italic text-lg"
                        style={{
                          color: "#3B3A36",
                          fontFamily:
                            "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                        }}
                      >
                        "Linh hồn con người là bất biến. Giới tính chỉ là vỏ bọc
                        tạm thời mà thôi!"
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01, x: -5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#F4EFE6",
                      border: "1px solid #7A6A53",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-16 h-16 rounded-lg overflow-hidden shadow-sm"
                        style={{ border: "2px solid #7A6A53" }}
                      >
                        <img
                          src="/assets/aristotle.jpg"
                          alt="Aristotle"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4
                          className="text-lg font-bold"
                          style={{
                            color: "#3B3A36",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          Aristotle
                        </h4>
                        <p
                          className="text-sm"
                          style={{
                            color: "#C78B4E",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          384-322 TCN
                        </p>
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-r-lg"
                      style={{
                        backgroundColor: "#F4EFE6",
                        borderLeft: "4px solid #C78B4E",
                      }}
                    >
                      <p
                        className="italic text-lg"
                        style={{
                          color: "#3B3A36",
                          fontFamily:
                            "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                        }}
                      >
                        "Nhưng anh có thể phủ nhận sự khác biệt tự nhiên giữa
                        nam và nữ được không?"
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Modern Dialogue */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    Cuộc đối thoại Hiện đại
                  </h3>
                  <p
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    Beauvoir vs Butler
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.01, x: 5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#F4EFE6",
                      border: "1px solid #7A6A53",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-16 h-16 rounded-lg overflow-hidden shadow-sm"
                        style={{ border: "2px solid #7A6A53" }}
                      >
                        <img
                          src="/assets/beauvoir.jpg"
                          alt="Beauvoir"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4
                          className="text-lg font-bold"
                          style={{
                            color: "#3B3A36",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          Simone de Beauvoir
                        </h4>
                        <p
                          className="text-sm"
                          style={{
                            color: "#C78B4E",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          1908-1986
                        </p>
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-r-lg"
                      style={{
                        backgroundColor: "#F4EFE6",
                        borderLeft: "4px solid #C78B4E",
                      }}
                    >
                      <p
                        className="italic text-lg"
                        style={{
                          color: "#3B3A36",
                          fontFamily:
                            "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                        }}
                      >
                        "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ!"
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01, x: -5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#F4EFE6",
                      border: "1px solid #7A6A53",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-16 h-16 rounded-lg overflow-hidden shadow-sm"
                        style={{ border: "2px solid #7A6A53" }}
                      >
                        <img
                          src="/assets/butler.jpg"
                          alt="Butler"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4
                          className="text-lg font-bold"
                          style={{
                            color: "#3B3A36",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          Judith Butler
                        </h4>
                        <p
                          className="text-sm"
                          style={{
                            color: "#C78B4E",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          1956-nay
                        </p>
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-r-lg"
                      style={{
                        backgroundColor: "#F4EFE6",
                        borderLeft: "4px solid #C78B4E",
                      }}
                    >
                      <p
                        className="italic text-lg"
                        style={{
                          color: "#3B3A36",
                          fontFamily:
                            "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                        }}
                      >
                        "Giới tính là màn trình diễn, không phải bản chất!"
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <Link href="/comic">
                <motion.button
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-semibold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 text-lg"
                  style={{
                    backgroundColor: "#C78B4E",
                    color: "#F4EFE6",
                    border: "1px solid #7A6A53",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  Đọc Comic Strip đầy đủ
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* Discussion Preview */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2
                className="text-5xl font-bold mb-6"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Thảo luận Cộng đồng
              </h2>
              <p
                className="text-xl max-w-4xl mx-auto leading-relaxed"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Tham gia khảo sát và chia sẻ quan điểm của bạn về các vấn đề
                triết học và giới tính
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Survey Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-500"
                style={{
                  backgroundColor: "#F4EFE6",
                  border: "1px solid #7A6A53",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#C78B4E" }}
                  >
                    <MessageCircle
                      className="w-6 h-6"
                      style={{ color: "#F4EFE6" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{
                        color: "#3B3A36",
                        fontFamily:
                          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                      }}
                    >
                      Khảo sát hiện tại
                    </h3>
                    <p
                      style={{
                        color: "#3B3A36",
                        fontFamily:
                          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                      }}
                    >
                      "Giới tính là gì theo bạn?"
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      label: "Sinh học",
                      percentage: 35,
                    },
                    {
                      label: "Xã hội",
                      percentage: 45,
                    },
                    {
                      label: "Cả hai",
                      percentage: 20,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
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
                          className="font-bold"
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
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + 0.3,
                            duration: 1.2,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full shadow-sm"
                          style={{ backgroundColor: "#C78B4E" }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Comments Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-500"
                style={{
                  backgroundColor: "#F4EFE6",
                  border: "1px solid #7A6A53",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#C78B4E" }}
                  >
                    <Users className="w-6 h-6" style={{ color: "#F4EFE6" }} />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{
                        color: "#3B3A36",
                        fontFamily:
                          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                      }}
                    >
                      Bình luận gần đây
                    </h3>
                    <p
                      style={{
                        color: "#3B3A36",
                        fontFamily:
                          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                      }}
                    >
                      Cộng đồng đang thảo luận
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      name: "Alex Nguyen",
                      avatar: "A",
                      comment:
                        "Tôi nghĩ giới tính là sự kết hợp của cả sinh học và xã hội. Butler đã mở ra một cách nhìn hoàn toàn mới!",
                      time: "2 giờ trước",
                    },
                    {
                      name: "Minh Tran",
                      avatar: "M",
                      comment:
                        "Beauvoir đã thay đổi cách tôi nhìn về vai trò của phụ nữ trong xã hội. Thật sự là một cuộc cách mạng!",
                      time: "5 giờ trước",
                    },
                    {
                      name: "Linh Pham",
                      avatar: "L",
                      comment:
                        "Timeline này giúp tôi hiểu rõ hơn về sự tiến hóa của tư tưởng. Cảm ơn nhóm đã tạo ra dự án này!",
                      time: "1 ngày trước",
                    },
                  ].map((comment, index) => (
                    <motion.div
                      key={comment.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:shadow-sm transition-all duration-500"
                      style={{
                        backgroundColor: "#F4EFE6",
                        border: "1px solid #7A6A53",
                      }}
                    >
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
                          {comment.avatar}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4
                            className="font-medium"
                            style={{
                              color: "#3B3A36",
                              fontFamily:
                                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                            }}
                          >
                            {comment.name}
                          </h4>
                          <span
                            className="text-sm"
                            style={{
                              color: "#7A6A53",
                              fontFamily:
                                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                            }}
                          >
                            {comment.time}
                          </span>
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            color: "#3B3A36",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          {comment.comment}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <Link href="/discussion">
                <motion.button
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-semibold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 text-lg"
                  style={{
                    backgroundColor: "#C78B4E",
                    color: "#F4EFE6",
                    border: "1px solid #7A6A53",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  Tham gia Thảo luận
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-lg p-12 shadow-sm hover:shadow-md transition-all duration-500"
              style={{
                backgroundColor: "#F4EFE6",
                border: "1px solid #7A6A53",
              }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-4xl font-bold mb-8"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Bắt đầu hành trình khám phá
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
                className="text-xl mb-8"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Sử dụng thanh điều hướng ở trên để khám phá các phần khác nhau
                của dự án
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Link href="/timeline">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="font-semibold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#C78B4E",
                      color: "#F4EFE6",
                      border: "1px solid #7A6A53",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    Timeline Tư tưởng
                  </motion.button>
                </Link>
                <Link href="/discussion">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="font-semibold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#F4EFE6",
                      color: "#3B3A36",
                      border: "1px solid #7A6A53",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
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
