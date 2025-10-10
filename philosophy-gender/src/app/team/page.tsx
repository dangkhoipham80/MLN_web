"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Mail, BookOpen, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Phạm Đăng Khôi",
      role: "Frontend Developer",
      description: "Phát triển giao diện, AI chat và tương tác 3D với Three.js",
      icon: Users,
      color: "#8B5CF6",
    },
    {
      name: "Nguyễn Thị Trúc Ly, Nguyễn Sơn Nam",
      role: "Content Creator",
      description: "Nghiên cứu và viết nội dung triết học, Comic strip",
      icon: BookOpen,
      color: "#EC4899",
    },
    {
      name: "Nguyễn Hoàng Đức Minh",
      role: "UI/UX Designer, Game Developer",
      description:
        "Thiết kế giao diện và trải nghiệm người dùng, tạo trò chơi.",
      icon: Users,
      color: "#3B82F6",
    },
  ];

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
        {/* <div className="pt-8 px-6 max-w-7xl mx-auto">
          <Link href="/">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Về trang chủ</span>
            </motion.button>
          </Link>
        </div> */}

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
              Về dự án
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
            <span className="block">Giới thiệu Nhóm</span>
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
            Dự án Triết học & Giới tính - Từ cổ đại đến hiện đại
          </motion.p>
        </section>

        {/* Project Info */}
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
                Thông tin Dự án
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3
                    className="text-xl font-bold mb-3 flex items-center gap-2"
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
                    Tên dự án
                  </h3>
                  <p
                    className="mb-8 leading-relaxed"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    Triết học & Giới tính – Từ cổ đại đến hiện đại
                  </p>

                  <h3
                    className="text-xl font-bold mb-3 flex items-center gap-2"
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
                    Mục tiêu
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    Khám phá sự tiến hóa của tư tưởng về giới tính trong triết
                    học, từ những quan điểm cổ đại đến các lý thuyết hiện đại về
                    bản sắc và quyền cá nhân.
                  </p>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-3 flex items-center gap-2"
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
                    Phương pháp
                  </h3>
                  <ul
                    className="space-y-2 mb-8"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    <li className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: "#C78B4E" }}
                      />
                      Timeline tương tác 3D
                    </li>
                    <li className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: "#C78B4E" }}
                      />
                      Comic strip triết học
                    </li>
                    <li className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: "#C78B4E" }}
                      />
                      Thảo luận và khảo sát
                    </li>
                    <li className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: "#C78B4E" }}
                      />
                      Trang chi tiết triết gia
                    </li>
                  </ul>

                  <h3
                    className="text-xl font-bold mb-3 flex items-center gap-2"
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
                    Công nghệ
                  </h3>
                  <ul
                    className="space-y-2"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    <li className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: "#7A6A53" }}
                      />
                      Next.js 14
                    </li>
                    <li className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: "#7A6A53" }}
                      />
                      Three.js & React Three Fiber
                    </li>
                    <li className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: "#7A6A53" }}
                      />
                      Framer Motion
                    </li>
                    <li className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: "#7A6A53" }}
                      />
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl font-bold mb-12 text-center"
              style={{
                color: "#3B3A36",
                fontFamily:
                  "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
              }}
            >
              Nhóm thực hiện
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-500"
                  style={{
                    backgroundColor: "#F4EFE6",
                    border: "1px solid #7A6A53",
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-lg mx-auto mb-6 flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: "#C78B4E" }}
                  >
                    <member.icon
                      className="w-10 h-10"
                      style={{ color: "#F4EFE6" }}
                    />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2 text-center"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="font-medium mb-3 text-center text-sm"
                    style={{
                      color: "#C78B4E",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-sm text-center leading-relaxed"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Transparency */}
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
                Minh bạch AI
              </h2>
              <div
                className="rounded-lg p-8 shadow-sm"
                style={{
                  backgroundColor: "#F4EFE6",
                  border: "1px solid #7A6A53",
                }}
              >
                <p
                  className="mb-6"
                  style={{
                    color: "#3B3A36",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  <strong className="text-lg" style={{ color: "#C78B4E" }}>
                    AI được sử dụng để:
                  </strong>
                </p>
                <ul
                  className="space-y-3 mb-6"
                  style={{
                    color: "#3B3A36",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  <li className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: "#C78B4E" }}
                    />
                    <span>Hỗ trợ viết code và tạo giao diện tương tác</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: "#C78B4E" }}
                    />
                    <span>Tạo hình minh họa và bố cục nội dung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: "#C78B4E" }}
                    />
                    <span>Tối ưu hóa trải nghiệm người dùng</span>
                  </li>
                </ul>
                <div
                  className="pt-6"
                  style={{ borderTop: "1px solid #7A6A53" }}
                >
                  <p
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    <strong style={{ color: "#C78B4E" }}>Lưu ý:</strong> Mọi
                    thông tin triết học được kiểm tra và chỉnh sửa thủ công để
                    đảm bảo tính chính xác.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* References */}
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
                Tài liệu tham khảo
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3
                    className="text-xl font-bold mb-4 flex items-center gap-2"
                    style={{
                      color: "#C78B4E",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    <BookOpen className="w-5 h-5" />
                    Sách chính
                  </h3>
                  <ul
                    className="space-y-3"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    {[
                      "The Second Sex – Simone de Beauvoir",
                      "Gender Trouble – Judith Butler",
                      "The Republic – Plato",
                      "Politics – Aristotle",
                      "On Liberty – John Stuart Mill",
                    ].map((book, i) => (
                      <li
                        key={`book-${book.split(" – ")[0]}`}
                        className="flex items-start gap-2"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2"
                          style={{ backgroundColor: "#C78B4E" }}
                        />
                        <span>{book}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-4 flex items-center gap-2"
                    style={{
                      color: "#C78B4E",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    <Users className="w-5 h-5" />
                    Thông tin dự án
                  </h3>
                  <ul
                    className="space-y-3"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                    }}
                  >
                    {[
                      { label: "Trường", value: "Đại học FPT" },
                      { label: "Môn", value: "Triết học đại cương" },
                      { label: "Loại", value: "Dự án PBL" },
                      { label: "Năm", value: "2025" },
                    ].map((item, i) => (
                      <li
                        key={`project-${item.label}`}
                        className="flex items-center gap-2"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "#7A6A53" }}
                        />
                        <strong style={{ color: "#3B3A36" }}>
                          {item.label}:
                        </strong>
                        <span>{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
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
              <span>Liên hệ</span>
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
              Có câu hỏi về dự án? Hãy liên hệ với chúng tôi!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <motion.a
                href="mailto:team@philosophy-gender.com"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative overflow-hidden font-bold py-4 px-9 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 flex items-center justify-center gap-3"
                style={{
                  backgroundColor: "#C78B4E",
                  color: "#F4EFE6",
                  border: "1px solid #7A6A53",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                <Mail className="w-5 h-5" />
                <span>Email Nhóm</span>
              </motion.a>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-bold py-4 px-9 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
                  style={{
                    backgroundColor: "#F4EFE6",
                    color: "#3B3A36",
                    border: "1px solid #7A6A53",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  Về Trang chủ
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
