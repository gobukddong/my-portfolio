"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="z-10 text-center max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center shadow-2xl relative">
            <Clock size={40} className="text-slate-200" />
            <div className="absolute inset-0 border border-white/20 rounded-full animate-ping opacity-20" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          추후 추가예정
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 mb-12 text-lg"
        >
          현재 프로젝트 내용을 정리하고 있습니다. <br />
          곧 업데이트될 예정이니 조금만 기다려주세요!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-200 hover:text-white transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            돌아가기
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
