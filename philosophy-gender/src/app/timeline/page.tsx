"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PhilosopherCarousel from "@/components/PhilosopherCarousel";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Users,
  BookOpen,
  Sparkles,
  Zap,
  Eye,
  MousePointer,
  Globe,
} from "lucide-react";

export default function TimelinePage() {
  const philosophers = [
    {
      name: "Plato",
      era: "427-347 TCN",
      description: "Linh hồn phi giới, bình đẳng lý trí",
      image: "/assets/plato.jpg",
      quote:
        "Linh hồn con người là bất biến. Giới tính chỉ là vỏ bọc tạm thời.",
    },
    {
      name: "Aristotle",
      era: "384-322 TCN",
      description: "Phân biệt giới theo tự nhiên",
      image: "/assets/aristotle.jpg",
      quote: "Nam là hình thức, nữ là vật chất. Đó là trật tự tự nhiên.",
    },
    {
      name: "Wollstonecraft",
      era: "1759-1797",
      description: "Tiên phong nữ quyền, quyền giáo dục",
      image: "/assets/wollstonecraft.jpg",
      quote: "Phụ nữ không yếu đuối bởi tự nhiên, mà bởi giáo dục.",
    },
    {
      name: "J.S. Mill",
      era: "1806-1873",
      description: "Tự do cá nhân, bình đẳng giới",
      image: "/assets/mill.jpg",
      quote: "Tự do cá nhân là nguyên tắc cao nhất của xã hội.",
    },
    {
      name: "de Beauvoir",
      era: "1908-1986",
      description: "Giới là sản phẩm xã hội",
      image: "/assets/beauvoir.jpg",
      quote: "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.",
    },
    {
      name: "Butler",
      era: "1956-nay",
      description: "Giới là màn trình diễn",
      image: "/assets/butler.jpg",
      quote: "Giới tính là màn trình diễn, không phải bản chất.",
    },
  ];

  const timelineData = [
    {
      era: "Cổ đại",
      philosophers: [
        {
          name: "Plato (427–347 TCN)",
          view: "Linh hồn không mang giới, bình đẳng về lý trí.",
          influence: "Khởi đầu cho tư tưởng bình đẳng tinh thần.",
          color: "from-purple-500 to-violet-500",
          link: "/philosopher/plato",
          image: "/assets/plato.jpg",
          quote:
            "Linh hồn con người là bất biến. Giới tính chỉ là vỏ bọc tạm thời.",
        },
        {
          name: "Aristotle (384–322 TCN)",
          view: "Nam = lý trí, nữ = cảm tính → phân biệt tự nhiên.",
          influence: "Củng cố hệ thống gia trưởng.",
          color: "from-blue-500 to-cyan-500",
          link: "/philosopher/aristotle",
          image: "/assets/aristotle.jpg",
          quote: "Nam là hình thức, nữ là vật chất. Đó là trật tự tự nhiên.",
        },
      ],
    },
    {
      era: "Khai sáng",
      philosophers: [
        {
          name: "Mary Wollstonecraft (1759–1797)",
          view: "Phụ nữ cần được giáo dục như nam giới.",
          influence: "Tiền đề cho nữ quyền hiện đại.",
          color: "from-yellow-500 to-orange-500",
          link: "/philosopher/mary-wollstonecraft",
          image: "/assets/wollstonecraft.jpg",
          quote: "Phụ nữ không yếu đuối bởi tự nhiên, mà bởi giáo dục.",
        },
      ],
    },
    {
      era: "Hiện đại sớm",
      philosophers: [
        {
          name: "John Stuart Mill (1806–1873)",
          view: "Tự do cá nhân, phản đối bất bình đẳng giới.",
          influence: "Mở đường cho chủ nghĩa tự do nữ quyền.",
          color: "from-green-500 to-emerald-500",
          link: "/philosopher/john-stuart-mill",
          image: "/assets/mill.jpg",
          quote: "Tự do cá nhân là nguyên tắc cao nhất của xã hội.",
        },
      ],
    },
    {
      era: "Hiện đại",
      philosophers: [
        {
          name: "Simone de Beauvoir (1908–1986)",
          view: "Giới là sản phẩm xã hội, không cố định.",
          influence: "Triết học hiện sinh và nữ quyền.",
          color: "from-pink-500 to-rose-500",
          link: "/philosopher/simone-de-beauvoir",
          image: "/assets/beauvoir.jpg",
          quote: "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.",
        },
      ],
    },
    {
      era: "Đương đại",
      philosophers: [
        {
          name: "Judith Butler (1956–nay)",
          view: 'Giới là "màn trình diễn" – có thể lặp lại và thay đổi.',
          influence: "Cơ sở lý luận cho queer theory.",
          color: "from-fuchsia-500 to-purple-500",
          link: "/philosopher/judith-butler",
          image: "/assets/butler.jpg",
          quote: "Giới tính là màn trình diễn, không phải bản chất.",
        },
      ],
    },
    {
      era: "Hậu hiện đại – AI",
      philosophers: [
        {
          name: "Giới trong công nghệ",
          view: "Dữ liệu và thuật toán phản ánh thiên kiến giới.",
          influence: "Triết học về giới trong AI và Ethics.",
          color: "from-cyan-500 to-blue-500",
          link: "/discussion",
          image: "/assets/ai-gender.jpg",
          quote: "AI phản ánh thiên kiến của những người tạo ra nó.",
        },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#F4EFE6",
        fontFamily:
          "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
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
                  "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
              }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Về trang chủ</span>
            </motion.button>
          </Link>
        </div>

        {/* Enhanced Header */}
        <section className="py-24 px-6 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-xl border shadow-sm mb-12"
            style={{
              backgroundColor: "#C78B4E",
              border: "1px solid #7A6A53",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-6 h-6" style={{ color: "#F4EFE6" }} />
            </motion.div>
            <span
              className="text-lg font-medium tracking-wide"
              style={{
                color: "#F4EFE6",
                fontFamily:
                  "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
              }}
            >
              Timeline Tương tác
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-5 h-5" style={{ color: "#F4EFE6" }} />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-8xl md:text-9xl font-bold mb-8"
            style={{
              color: "#3B3A36",
              fontFamily:
                "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
            }}
          >
            Timeline Triết học
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl leading-relaxed max-w-4xl mx-auto mb-12"
            style={{
              color: "#3B3A36",
              fontFamily:
                "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
            }}
          >
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="font-medium"
              style={{ color: "#C78B4E" }}
            >
              Khám phá sự tiến hóa của tư tưởng về giới
            </motion.span>{" "}
            qua các thời đại trong không gian đầy mê hoặc
          </motion.p>

          {/* Interactive Elements Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-8 mb-16"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl rounded-full border shadow-sm"
              style={{
                backgroundColor: "#F4EFE6",
                border: "1px solid #7A6A53",
              }}
            >
              <MousePointer className="w-4 h-4" style={{ color: "#C78B4E" }} />
              <span
                className="text-sm"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Kéo để xoay
              </span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl rounded-full border shadow-sm"
              style={{
                backgroundColor: "#F4EFE6",
                border: "1px solid #7A6A53",
              }}
            >
              <Eye className="w-4 h-4" style={{ color: "#C78B4E" }} />
              <span
                className="text-sm"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Hover để xem
              </span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl rounded-full border shadow-sm"
              style={{
                backgroundColor: "#F4EFE6",
                border: "1px solid #7A6A53",
              }}
            >
              <Zap className="w-4 h-4" style={{ color: "#C78B4E" }} />
              <span
                className="text-sm"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Click để khám phá
              </span>
            </motion.div>
          </motion.div>
        </section>

        {/* Philosopher Carousel Section */}
        <section
          id="carousel"
          className="relative mb-20"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full rounded-lg overflow-hidden border shadow-lg"
            style={{
              border: "1px solid #7A6A53",
            }}
          >
            <PhilosopherCarousel philosophers={philosophers} />
          </motion.div>
        </section>

        {/* Timeline Table */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-lg p-10 shadow-sm hover:shadow-md transition-all duration-500 overflow-x-auto"
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
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Dòng thời gian Triết học về Giới tính
              </h2>

              {/* Desktop Cards */}
              <div className="hidden lg:block space-y-8">
                {timelineData.map((period, periodIndex) => (
                  <motion.div
                    key={period.era}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: periodIndex * 0.1,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#F4EFE6",
                      border: "1px solid #7A6A53",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: "#C78B4E" }}
                      >
                        <Clock
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
                              "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                          }}
                        >
                          {period.era}
                        </h3>
                        <p
                          style={{
                            color: "#7A6A53",
                            fontFamily:
                              "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                          }}
                        >
                          Thời kỳ triết học
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {period.philosophers.map(
                        (philosopher, philosopherIndex) => (
                          <motion.div
                            key={philosopher.name}
                            initial={{ opacity: 0, x: -30, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: (periodIndex + philosopherIndex) * 0.1,
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                            whileHover={{
                              scale: 1.03,
                              y: -8,
                              rotateY: 5,
                              transition: { duration: 0.3 },
                            }}
                            className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500"
                            style={{
                              backgroundColor: "#F4EFE6",
                              border: "1px solid #7A6A53",
                            }}
                          >
                            <div className="flex items-start gap-4 mb-4">
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                                className="w-16 h-16 rounded-full overflow-hidden border-3 shadow-lg flex-shrink-0 relative group"
                                style={{ borderColor: "#7A6A53" }}
                              >
                                <motion.img
                                  src={philosopher.image}
                                  alt={philosopher.name}
                                  className="w-full h-full object-cover"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  whileHover={{ opacity: 1 }}
                                  className="absolute inset-0"
                                  style={{
                                    backgroundColor: "rgba(199, 139, 78, 0.2)",
                                  }}
                                />
                              </motion.div>
                              <div className="flex-1">
                                <Link href={philosopher.link}>
                                  <h4
                                    className="text-lg font-bold hover:opacity-70 transition-colors duration-200 cursor-pointer"
                                    style={{
                                      color: "#3B3A36",
                                      fontFamily:
                                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                    }}
                                  >
                                    {philosopher.name}
                                  </h4>
                                </Link>
                                <div
                                  className="inline-flex items-center gap-1 px-2 py-1 rounded-full mt-2"
                                  style={{ backgroundColor: "#C78B4E" }}
                                >
                                  <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: "#F4EFE6" }}
                                  ></div>
                                  <span
                                    className="text-xs font-medium"
                                    style={{
                                      color: "#F4EFE6",
                                      fontFamily:
                                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                    }}
                                  >
                                    Triết gia
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <p
                                  className="text-sm font-medium mb-1"
                                  style={{
                                    color: "#C78B4E",
                                    fontFamily:
                                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                  }}
                                >
                                  Quan điểm:
                                </p>
                                <p
                                  className="text-sm"
                                  style={{
                                    color: "#3B3A36",
                                    fontFamily:
                                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                  }}
                                >
                                  {philosopher.view}
                                </p>
                              </div>

                              <div>
                                <p
                                  className="text-sm font-medium mb-1"
                                  style={{
                                    color: "#C78B4E",
                                    fontFamily:
                                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                  }}
                                >
                                  Ảnh hưởng:
                                </p>
                                <p
                                  className="text-sm"
                                  style={{
                                    color: "#3B3A36",
                                    fontFamily:
                                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                  }}
                                >
                                  {philosopher.influence}
                                </p>
                              </div>

                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay:
                                    (periodIndex + philosopherIndex) * 0.1 +
                                    0.3,
                                  duration: 0.8,
                                  ease: "easeOut",
                                }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="border-l-4 p-3 rounded-r-lg relative overflow-hidden"
                                style={{
                                  backgroundColor: "#F4EFE6",
                                  borderLeftColor: "#C78B4E",
                                }}
                              >
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay:
                                      (periodIndex + philosopherIndex) * 0.1 +
                                      0.5,
                                    duration: 0.8,
                                    ease: "easeOut",
                                  }}
                                  className="italic text-sm relative z-10"
                                  style={{
                                    color: "#3B3A36",
                                    fontFamily:
                                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                  }}
                                >
                                  "{philosopher.quote}"
                                </motion.p>
                              </motion.div>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-6">
                {timelineData.map((period, periodIndex) => (
                  <motion.div
                    key={period.era}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: periodIndex * 0.1,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#F4EFE6",
                      border: "1px solid #7A6A53",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: "#C78B4E" }}
                      >
                        <Clock
                          className="w-5 h-5"
                          style={{ color: "#F4EFE6" }}
                        />
                      </div>
                      <h3
                        className="text-xl font-bold"
                        style={{
                          color: "#3B3A36",
                          fontFamily:
                            "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                        }}
                      >
                        {period.era}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {period.philosophers.map(
                        (philosopher, philosopherIndex) => (
                          <motion.div
                            key={philosopher.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: (periodIndex + philosopherIndex) * 0.1,
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                            className="rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-500"
                            style={{
                              backgroundColor: "#F4EFE6",
                              border: "1px solid #7A6A53",
                            }}
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div
                                className="w-12 h-12 rounded-full overflow-hidden border-2 shadow-lg flex-shrink-0"
                                style={{ borderColor: "#7A6A53" }}
                              >
                                <img
                                  src={philosopher.image}
                                  alt={philosopher.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <Link href={philosopher.link}>
                                  <h4
                                    className="text-base font-bold hover:opacity-70 transition-colors duration-200 cursor-pointer"
                                    style={{
                                      color: "#3B3A36",
                                      fontFamily:
                                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                    }}
                                  >
                                    {philosopher.name}
                                  </h4>
                                </Link>
                                <div
                                  className="inline-flex items-center gap-1 px-2 py-1 rounded-full mt-1"
                                  style={{ backgroundColor: "#C78B4E" }}
                                >
                                  <div
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ backgroundColor: "#F4EFE6" }}
                                  ></div>
                                  <span
                                    className="text-xs font-medium"
                                    style={{
                                      color: "#F4EFE6",
                                      fontFamily:
                                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                    }}
                                  >
                                    Triết gia
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div>
                                <p
                                  className="text-xs font-medium mb-1"
                                  style={{
                                    color: "#C78B4E",
                                    fontFamily:
                                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                  }}
                                >
                                  Quan điểm:
                                </p>
                                <p
                                  className="text-sm"
                                  style={{
                                    color: "#3B3A36",
                                    fontFamily:
                                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                  }}
                                >
                                  {philosopher.view}
                                </p>
                              </div>

                              <div>
                                <p
                                  className="text-xs font-medium mb-1"
                                  style={{
                                    color: "#C78B4E",
                                    fontFamily:
                                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                  }}
                                >
                                  Ảnh hưởng:
                                </p>
                                <p
                                  className="text-sm"
                                  style={{
                                    color: "#3B3A36",
                                    fontFamily:
                                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                  }}
                                >
                                  {philosopher.influence}
                                </p>
                              </div>

                              <div
                                className="border-l-3 p-2 rounded-r-lg"
                                style={{
                                  backgroundColor: "#F4EFE6",
                                  borderLeftColor: "#C78B4E",
                                }}
                              >
                                <p
                                  className="italic text-xs"
                                  style={{
                                    color: "#3B3A36",
                                    fontFamily:
                                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                                  }}
                                >
                                  "{philosopher.quote}"
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Timeline Section */}
        {/* <section className="py-16 px-6">
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
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Khám phá Timeline Tương tác
              </h2>
              <p
                className="text-xl max-w-4xl mx-auto leading-relaxed"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Trải nghiệm timeline tương tác với các triết gia trong không
                gian đầy mê hoặc
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-lg p-10 shadow-sm hover:shadow-md transition-all duration-500 text-center"
              style={{
                backgroundColor: "#F4EFE6",
                border: "1px solid #7A6A53",
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: "#C78B4E" }}
                >
                  <Clock className="w-6 h-6" style={{ color: "#F4EFE6" }} />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{
                    color: "#3B3A36",
                    fontFamily:
                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  Timeline Tương tác
                </h3>
              </div>

              <p
                className="text-lg mb-8 max-w-2xl mx-auto"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Khám phá sự tiến hóa của tư tưởng về giới qua các thời đại trong
                không gian đầy mê hoặc
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500"
                  style={{
                    backgroundColor: "#F4EFE6",
                    border: "1px solid #7A6A53",
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm"
                    style={{ backgroundColor: "#C78B4E" }}
                  >
                    <span
                      className="font-bold text-lg"
                      style={{ color: "#F4EFE6" }}
                    >
                      1
                    </span>
                  </motion.div>
                  <h4
                    className="font-bold mb-2"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Kéo để xoay
                  </h4>
                  <p
                    className="text-sm"
                    style={{
                      color: "#7A6A53",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Điều khiển góc nhìn 360°
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500"
                  style={{
                    backgroundColor: "#F4EFE6",
                    border: "1px solid #7A6A53",
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm"
                    style={{ backgroundColor: "#7A6A53" }}
                  >
                    <span
                      className="font-bold text-lg"
                      style={{ color: "#F4EFE6" }}
                    >
                      2
                    </span>
                  </motion.div>
                  <h4
                    className="font-bold mb-2"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Hover để xem
                  </h4>
                  <p
                    className="text-sm"
                    style={{
                      color: "#7A6A53",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Thông tin chi tiết triết gia
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500"
                  style={{
                    backgroundColor: "#F4EFE6",
                    border: "1px solid #7A6A53",
                  }}
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(199, 139, 78, 0.4)",
                        "0 0 0 10px rgba(199, 139, 78, 0)",
                        "0 0 0 0 rgba(199, 139, 78, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm"
                    style={{ backgroundColor: "#C78B4E" }}
                  >
                    <span
                      className="font-bold text-lg"
                      style={{ color: "#F4EFE6" }}
                    >
                      3
                    </span>
                  </motion.div>
                  <h4
                    className="font-bold mb-2"
                    style={{
                      color: "#3B3A36",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Click để khám phá
                  </h4>
                  <p
                    className="text-sm"
                    style={{
                      color: "#7A6A53",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Điều hướng đến trang chi tiết
                  </p>
                </motion.div>
              </div>

              <Link href="#carousel">
                <motion.button
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-bold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 text-lg"
                  style={{
                    backgroundColor: "#C78B4E",
                    color: "#F4EFE6",
                    border: "1px solid #7A6A53",
                    fontFamily:
                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  Khám phá Timeline Tương tác
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-5xl font-bold mb-6"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Khám phá sâu hơn
              </h2>
              <p
                className="text-xl max-w-4xl mx-auto leading-relaxed"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                }}
              >
                Click vào các triết gia để tìm hiểu chi tiết về quan điểm của họ
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-500 text-center relative overflow-hidden"
                style={{
                  backgroundColor: "#F4EFE6",
                  border: "1px solid #7A6A53",
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"
                  style={{ backgroundColor: "#C78B4E" }}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <BookOpen
                      className="w-8 h-8"
                      style={{ color: "#F4EFE6" }}
                    />
                  </motion.div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  className="text-2xl font-bold mb-4"
                  style={{
                    color: "#3B3A36",
                    fontFamily:
                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  Comic Strip Triết học
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="mb-6"
                  style={{
                    color: "#3B3A36",
                    fontFamily:
                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  Những cuộc đối thoại thú vị giữa các triết gia về chủ đề giới
                  tính
                </motion.p>
                <Link href="/comic">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    whileHover={{
                      scale: 1.01,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.99 }}
                    className="font-bold py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#C78B4E",
                      color: "#F4EFE6",
                      border: "1px solid #7A6A53",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Đọc Comic Strip
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-500 text-center relative overflow-hidden"
                style={{
                  backgroundColor: "#F4EFE6",
                  border: "1px solid #7A6A53",
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"
                  style={{ backgroundColor: "#7A6A53" }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Users className="w-8 h-8" style={{ color: "#F4EFE6" }} />
                  </motion.div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  className="text-2xl font-bold mb-4"
                  style={{
                    color: "#3B3A36",
                    fontFamily:
                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  Thảo luận Cộng đồng
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="mb-6"
                  style={{
                    color: "#3B3A36",
                    fontFamily:
                      "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  Tham gia khảo sát và chia sẻ quan điểm của bạn về các vấn đề
                  triết học
                </motion.p>
                <Link href="/discussion">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    whileHover={{
                      scale: 1.01,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.99 }}
                    className="font-bold py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
                    style={{
                      backgroundColor: "#7A6A53",
                      color: "#F4EFE6",
                      border: "1px solid #7A6A53",
                      fontFamily:
                        "'EB Garamond', 'Crimson Pro', 'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Tham gia Thảo luận
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
