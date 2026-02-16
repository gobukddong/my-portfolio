"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, X } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight-card";

const roadmapData = [
  {
    date: "2025.03.01",
    title: "숭실대 입학",
    description: "소프트웨어학부 25학번",
    status: "completed",
  },

{
    date: "2025.09.11 - 11.21",
    title: "해양 중금속 제거 시스템",
    description: "팀 위잉위잉어푸어푸, 숭실대학교 창의적발명경진대회, 1차 합격",
    status: "completed",
  },
  {
    date: "2025.10.22-12.28",
    title: "리눅스 취약점 스캐너 제작",
    description: "Bash shell 기반 프로젝트, KISA 취약점 항목에 대한 스캐너 제작",
    status: "completed",
  },

  {
    date: "2025.10.27-12.07",
    title: "에어드럼",
    description: "팀 bit killer, 숭실대학교내 대회, Arduino 기반 프로젝트, 장려상",
    status: "completed",
  },

  {
    date: "2025.12.28-2026.02.13",
    title: "React2shell 스캐너 제작",
    description: "React 기반 프로젝트, React2shell 취약점 분석",
    status: "completed",
  },
  {
    date: "2026.01.26 - 01.30",
    title: "Web App 개발",
    description: "Meetplz 배포 (https://meetplz.vercel.app)",
    status: "completed",
  },
  {
    date: "2026.02.02 - 2026.02.05",
    title: "GSAT 집중교육 수강",
    description: "해커스 교육, 수리/추리 영역 20시간",
    status: "completed",
  },
  {
    date: "2026.04 - 2027.10",
    title: "군대",
    description: "군바",
    status: "upcoming",
  },
];

export default function RoadmapTimeline() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed top-3 left-3 z-[100] flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full text-slate-200 hover:text-white hover:bg-slate-800 transition-all shadow-lg hover:shadow-white/10 group cursor-pointer"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Map size={18} className="text-white group-hover:text-slate-200 transition-colors" />
            <span className="font-semibold text-sm">로드맵</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-300 hover:text-white transition-colors z-50 cursor-pointer"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-4xl max-h-[85vh] overflow-y-auto px-4 relative [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 mt-8">
                로드맵
              </h2>

              <div className="relative pb-20">
                {/* Central Vertical Line (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-slate-500 to-transparent -translate-x-1/2"></div>
                
                {/* Vertical Line (Mobile) */}
                <div className="md:hidden absolute left-[20px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-slate-500 to-transparent"></div>

                <div className="space-y-12">
                  {roadmapData.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-start md:items-center ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Spacer for Desktop Zigzag */}
      <div className="hidden md:block w-1/2" />

      {/* Central Dot */}
      <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-slate-950 border-2 border-white z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)] mt-1.5 md:mt-0">
        {item.status === "completed" && <div className="w-2 h-2 bg-white rounded-full" />}
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
        <SpotlightCard
          className="p-6 rounded-xl border border-white/5 bg-slate-900/40 hover:bg-slate-800/60 transition-colors group"
          spotlightColor="rgba(255, 255, 255, 0.1)"
        >
          <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-slate-200 bg-white/10 rounded-full border border-white/20">
            {item.date}
          </span>
          <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {item.description}
          </p>
        </SpotlightCard>
      </div>
    </motion.div>
  );
}
