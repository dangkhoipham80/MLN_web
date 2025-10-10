"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Sparkles, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t backdrop-blur-xl"
      style={{
        borderColor: "#7A6A53",
        backgroundColor: "rgba(244, 239, 230, 0.8)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Project Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Triết học & Giới tính
              </h3>
              <p
                className="mb-6 leading-relaxed"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Dự án khám phá sự tiến hóa của tư tưởng về giới tính trong triết
                học, từ những quan điểm cổ đại đến các lý thuyết hiện đại về bản
                sắc và quyền cá nhân.
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#7A6A53" }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#C78B4E" }}
                  ></div>
                  <span>Đại học FPT</span>
                </div>
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#7A6A53" }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#7A6A53" }}
                  ></div>
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
              <h4
                className="text-lg font-bold mb-4"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Khám phá
              </h4>
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
                      className="transition-colors duration-300 flex items-center gap-2"
                      style={{
                        color: "#7A6A53",
                        fontFamily:
                          "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#C78B4E";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#7A6A53";
                      }}
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
              <h4
                className="text-lg font-bold mb-4"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Liên hệ
              </h4>
              <div className="space-y-3">
                <div
                  className="flex items-center gap-3"
                  style={{ color: "#7A6A53" }}
                >
                  <Mail className="w-4 h-4" style={{ color: "#C78B4E" }} />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    team@philosophy-gender.com
                  </span>
                </div>
                <div
                  className="flex items-center gap-3"
                  style={{ color: "#7A6A53" }}
                >
                  <Users className="w-4 h-4" style={{ color: "#7A6A53" }} />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Nhóm PBL Triết học
                  </span>
                </div>
                <div
                  className="flex items-center gap-3"
                  style={{ color: "#7A6A53" }}
                >
                  <BookOpen className="w-4 h-4" style={{ color: "#C78B4E" }} />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Môn: Triết học đại cương
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8" style={{ borderColor: "#7A6A53" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm"
              style={{ color: "#7A6A53" }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "#C78B4E" }} />
              <span
                style={{
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                © 2025 Triết học & Giới tính. Dự án PBL Đại học FPT.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-6"
            >
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "#7A6A53" }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#C78B4E" }}
                ></div>
                <span
                  style={{
                    fontFamily:
                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  AI-Assisted Development
                </span>
              </div>
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "#7A6A53" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#7A6A53" }}
                ></div>
                <span
                  style={{
                    fontFamily:
                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  Next.js 14
                </span>
              </div>
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "#7A6A53" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#C78B4E" }}
                ></div>
                <span
                  style={{
                    fontFamily:
                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  Framer Motion
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
