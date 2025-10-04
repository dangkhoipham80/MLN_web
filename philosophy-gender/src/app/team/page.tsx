"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Github,
  Mail,
  BookOpen,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Nguyễn Văn A",
      role: "Frontend Developer",
      description: "Phát triển giao diện và tương tác 3D với Three.js",
      icon: Users,
      color: "#8B5CF6",
    },
    {
      name: "Trần Thị B",
      role: "Content Creator",
      description: "Nghiên cứu và viết nội dung triết học",
      icon: BookOpen,
      color: "#EC4899",
    },
    {
      name: "Lê Văn C",
      role: "UI/UX Designer",
      description: "Thiết kế giao diện và trải nghiệm người dùng",
      icon: Github,
      color: "#3B82F6",
    },
  ];

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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium tracking-wide text-violet-200">
              Về dự án
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
              Giới thiệu Nhóm
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 leading-relaxed"
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
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 mb-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Thông tin Dự án
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold text-amber-300 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                    Tên dự án
                  </h3>
                  <p className="text-gray-200 mb-8 leading-relaxed">
                    Triết học & Giới tính – Từ cổ đại đến hiện đại
                  </p>

                  <h3 className="text-xl font-bold text-amber-300 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                    Mục tiêu
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    Khám phá sự tiến hóa của tư tưởng về giới tính trong triết
                    học, từ những quan điểm cổ đại đến các lý thuyết hiện đại về
                    bản sắc và quyền cá nhân.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-300 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                    Phương pháp
                  </h3>
                  <ul className="text-gray-200 space-y-2 mb-8">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-violet-400 rounded-full" />
                      Timeline tương tác 3D
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-violet-400 rounded-full" />
                      Comic strip triết học
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-violet-400 rounded-full" />
                      Thảo luận và khảo sát
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-violet-400 rounded-full" />
                      Trang chi tiết triết gia
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-amber-300 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                    Công nghệ
                  </h3>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-fuchsia-400 rounded-full" />
                      Next.js 14
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-fuchsia-400 rounded-full" />
                      Three.js & React Three Fiber
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-fuchsia-400 rounded-full" />
                      Framer Motion
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-fuchsia-400 rounded-full" />
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
              className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent"
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
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
                >
                  <div
                    className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}, ${member.color}80)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                      style={{ background: member.color }}
                    />
                    <member.icon className="w-10 h-10 text-white relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-amber-300 font-medium mb-3 text-center text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm text-center leading-relaxed">
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
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Minh bạch AI
              </h2>
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8">
                <p className="text-gray-200 mb-6">
                  <strong className="text-amber-300 text-lg">
                    AI được sử dụng để:
                  </strong>
                </p>
                <ul className="text-gray-200 space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
                    <span>Hỗ trợ viết code và tạo giao diện tương tác</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
                    <span>Tạo hình minh họa và bố cục nội dung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
                    <span>Tối ưu hóa trải nghiệm người dùng</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-amber-500/20">
                  <p className="text-gray-200">
                    <strong className="text-amber-300">Lưu ý:</strong> Mọi thông
                    tin triết học được kiểm tra và chỉnh sửa thủ công để đảm bảo
                    tính chính xác.
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
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Tài liệu tham khảo
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Sách chính
                  </h3>
                  <ul className="text-gray-200 space-y-3">
                    {[
                      "The Second Sex – Simone de Beauvoir",
                      "Gender Trouble – Judith Butler",
                      "The Republic – Plato",
                      "Politics – Aristotle",
                      "On Liberty – John Stuart Mill",
                    ].map((book, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2" />
                        <span>{book}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Thông tin dự án
                  </h3>
                  <ul className="text-gray-200 space-y-3">
                    {[
                      { label: "Trường", value: "Đại học FPT" },
                      { label: "Môn", value: "Triết học đại cương" },
                      { label: "Loại", value: "Dự án PBL" },
                      { label: "Năm", value: "2025" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full" />
                        <strong className="text-gray-300">{item.label}:</strong>
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
              className="text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              <span className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Liên hệ
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 mb-10"
            >
              Có câu hỏi về dự án? Hãy liên hệ với chúng tôi!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <motion.a
                href="mailto:team@philosophy-gender.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold py-4 px-9 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                <span>Email Nhóm</span>
              </motion.a>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-bold py-4 px-9 rounded-full transition-all duration-300"
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
