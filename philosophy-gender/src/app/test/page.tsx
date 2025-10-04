"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-white"
      >
        <BookOpen className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
        <h1 className="text-4xl font-bold mb-4">Test Page</h1>
        <p className="text-xl">
          If you can see this, the basic setup is working!
        </p>
      </motion.div>
    </div>
  );
}
