"use client";

import Link from "next/link";
import { Shield, Music, Bug, Award, ArrowRight } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight-card";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">프로젝트</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <Link href="/projects/coming-soon" key={i} className="block group">
            <SpotlightCard
              className={`p-6 rounded-xl h-full hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300 ${
                item.className || ""
              }`}
              spotlightColor="rgba(255, 255, 255, 0.1)"
            >
              <div className="flex items-center justify-between w-full h-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-white shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-200">{item.title}</h3>
                    <div className="text-sm text-slate-300 mt-1">{item.description}</div>
                  </div>
                </div>
                <div className="text-slate-300 group-hover:text-white transition-colors shrink-0">
                    <ArrowRight size={20} />
                </div>
              </div>
            </SpotlightCard>
          </Link>
        ))}
      </div>
    </section>
  );
}

const items = [
  {
    title: "리눅스 취약점 스캐너",
    description: "KISA 정의 12개 취약점 항목 자동 점검 도구",
    icon: <Shield size={24} />,
    className: "bg-slate-950",
  },
  {
    title: "BitKiller (에어 드럼)",
    description: "IoT 모션 감지 악기 프로젝트",
    icon: <Music size={24} />,
    className: "bg-slate-950",
  },
  {
    title: "React2Shell 분석",
    description: "React 기반 취약점 분석 및 연구",
    icon: <Bug size={24} />,
    className: "bg-slate-950",
  },
  {
    title: "해양 중금속 제거 시스템",
    description: "숭실대학교 창의적발명경진대회 출품작",
    icon: <Award size={24} />,
    className: "bg-slate-950",
  },
];
