"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Users, Github, Mail, BookOpen } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />

      <main className="pt-16">
        {/* Header */}
        <section className="py-20 px-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-4"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              background: "linear-gradient(135deg, #ffffff, #c4b5fd, #f0abfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Giới thiệu Nhóm
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            Dự án Triết học & Giới tính - Từ cổ đại đến hiện đại
          </motion.p>
        </section>

        {/* Project Info */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Thông tin Dự án
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-4">
                    Tên dự án
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Triết học & Giới tính – Từ cổ đại đến hiện đại
                  </p>

                  <h3 className="text-xl font-bold text-yellow-300 mb-4">
                    Mục tiêu
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Khám phá sự tiến hóa của tư tưởng về giới tính trong triết
                    học, từ những quan điểm cổ đại đến các lý thuyết hiện đại về
                    bản sắc và quyền cá nhân.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-4">
                    Phương pháp
                  </h3>
                  <ul className="text-gray-200 space-y-2 mb-6">
                    <li>• Timeline tương tác 3D</li>
                    <li>• Comic strip triết học</li>
                    <li>• Thảo luận và khảo sát</li>
                    <li>• Trang chi tiết triết gia</li>
                  </ul>

                  <h3 className="text-xl font-bold text-yellow-300 mb-4">
                    Công nghệ
                  </h3>
                  <ul className="text-gray-200 space-y-2">
                    <li>• Next.js 14</li>
                    <li>• Three.js & React Three Fiber</li>
                    <li>• Framer Motion</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Nhóm thực hiện
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Thành viên 1",
                    role: "Frontend Developer",
                    description: "Phát triển giao diện và tương tác 3D",
                    icon: Users,
                  },
                  {
                    name: "Thành viên 2",
                    role: "Content Creator",
                    description: "Nghiên cứu và viết nội dung triết học",
                    icon: BookOpen,
                  },
                  {
                    name: "Thành viên 3",
                    role: "UI/UX Designer",
                    description: "Thiết kế giao diện và trải nghiệm người dùng",
                    icon: Github,
                  },
                ].map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 rounded-lg p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <member.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-yellow-300 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {member.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Transparency */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Minh bạch AI
              </h2>
              <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-6">
                <p className="text-gray-200 mb-4">
                  <strong className="text-yellow-300">
                    AI được sử dụng để:
                  </strong>
                </p>
                <ul className="text-gray-200 space-y-2 mb-4">
                  <li>• Hỗ trợ viết code và tạo giao diện</li>
                  <li>• Tạo hình minh họa và bố cục nội dung</li>
                  <li>• Tối ưu hóa trải nghiệm người dùng</li>
                </ul>
                <p className="text-gray-200">
                  <strong className="text-yellow-300">Lưu ý:</strong> Mọi thông
                  tin triết học được kiểm tra và chỉnh sửa thủ công để đảm bảo
                  tính chính xác.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* References */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Tài liệu tham khảo
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-4">
                    Sách chính
                  </h3>
                  <ul className="text-gray-200 space-y-2">
                    <li>• The Second Sex – Simone de Beauvoir</li>
                    <li>• Gender Trouble – Judith Butler</li>
                    <li>• The Republic – Plato</li>
                    <li>• Politics – Aristotle</li>
                    <li>• On Liberty – John Stuart Mill</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-4">
                    Thông tin dự án
                  </h3>
                  <ul className="text-gray-200 space-y-2">
                    <li>• Trường: Đại học FPT</li>
                    <li>• Môn: Triết học đại cương</li>
                    <li>• Loại: Dự án PBL (Project-Based Learning)</li>
                    <li>• Năm: 2025</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-8"
            >
              Liên hệ
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Có câu hỏi về dự án? Hãy liên hệ với chúng tôi!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="mailto:team@philosophy-gender.com"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Nhóm</span>
              </a>
              <a
                href="/"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Về Trang chủ
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
