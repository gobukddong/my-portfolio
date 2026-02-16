"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "./ui/spotlight-card";
import { Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-950 pt-32">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">소개</h2>
      
      <SpotlightCard 
        className="max-w-7xl mx-auto p-8 md:p-12 rounded-2xl hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] transition-shadow duration-300" 
        spotlightColor="rgba(255, 255, 255, 0.1)"
      >
        <div className="flex flex-col items-center text-center">
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                보안 연구원 & 개발자
            </h3>
            
            <div className="space-y-6 text-slate-200 leading-relaxed max-w-4xl">
                <p>
                    현재 <strong>숭실대학교</strong> 소프트웨어학부에 재학 중입니다.
                </p>
                <p>
                    주로 <strong>웹 해킹</strong>과 <strong>소프트웨어 보안</strong>에 관심이 많습니다. <br></br>시스템 취약점을 깊이 파고들고, 이를 보안하기 위한 <strong>자동화 도구</strong>를 개발하는 것을 즐깁니다.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">  
                <SpotlightCard className="p-6 rounded-xl group hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300" spotlightColor="rgba(255, 255, 255, 0.1)">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-4">
                            
                            <div>
                                <h4 className="font-bold text-white">학력</h4>
                                <p className="text-sm text-slate-300">숭실대학교(2025.03 ~ )</p>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>

                <SpotlightCard className="p-6 rounded-xl group hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300" spotlightColor="rgba(255, 255, 255, 0.1)">
                    <div className="flex items-center justify-between w-full">
                         <div className="flex items-center gap-4">
                            
                            <div>
                                <h4 className="font-bold text-white">자격증</h4>
                                <ul className="text-sm text-slate-300 space-y-0.5">
                                    <li>정보처리기능사</li>
                                    <li>MOS Excel 2016 Expert</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
            </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
