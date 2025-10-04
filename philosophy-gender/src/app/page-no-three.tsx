"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, MessageCircle, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

export default function HomeSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-20 px-10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center text-white mb-16"
            >
              Khám phá qua các hình thức sinh động
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <Clock className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-4">Timeline Triết học</h3>
                <p className="text-gray-200">
                  Sự tiến hóa của tư tưởng về giới qua các thời đại, từ cổ đại
                  đến hiện đại
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-pink-400" />
                <h3 className="text-2xl font-bold mb-4">Comic Strip</h3>
                <p className="text-gray-200">
                  Đối thoại hài hước và triết lý giữa các triết gia về vấn đề
                  giới tính
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <MessageCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
                <h3 className="text-2xl font-bold mb-4">Thảo luận mở</h3>
                <p className="text-gray-200">
                  Chia sẻ quan điểm và tham gia tranh luận về giới tính trong
                  triết học
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 px-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-8"
            >
              Triết học & Giới tính
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 text-gray-200"
            >
              Hành trình tư tưởng từ cổ đại đến hiện đại
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 space-y-4"
            >
              <p>
                Xuyên suốt lịch sử triết học, "giới tính" không chỉ là vấn đề
                sinh học, mà còn là biểu tượng của quyền lực, đạo đức và nhân
                sinh quan.
              </p>
              <p>
                Trang web này tái hiện hành trình ấy qua các hình thức sinh
                động: Timeline triết học, Comic strip, và Thảo luận mở.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
