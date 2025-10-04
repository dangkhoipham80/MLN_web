"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Sparkles, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Project Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Triết học & Giới tính
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Dự án khám phá sự tiến hóa của tư tưởng về giới tính trong triết
                học, từ những quan điểm cổ đại đến các lý thuyết hiện đại về bản
                sắc và quyền cá nhân.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                  <span>Đại học FPT</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                  <span>2025</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-4">Khám phá</h4>
              <ul className="space-y-3">
                {[
                  { name: "Trang chủ", href: "/" },
                  { name: "Timeline Triết học", href: "/timeline" },
                  { name: "Comic Strip", href: "/comic" },
                  { name: "Thảo luận", href: "/discussion" },
                  { name: "Giới thiệu Nhóm", href: "/team" },
                ].map((link, index) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-violet-300 transition-colors duration-300 flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-white mb-4">Liên hệ</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-violet-400" />
                  <span className="text-sm">team@philosophy-gender.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Users className="w-4 h-4 text-fuchsia-400" />
                  <span className="text-sm">Nhóm PBL Triết học</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Môn: Triết học đại cương</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/[0.08] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>© 2025 Triết học & Giới tính. Dự án PBL Đại học FPT.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>AI-Assisted Development</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Next.js 14</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Three.js</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
