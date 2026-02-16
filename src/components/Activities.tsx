"use client";

import Link from "next/link";
import { ArrowRight, Users, Music, Code, GitPullRequest, BookOpen } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight-card";

export default function Activities() {
  return (
    <section id="activities" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">활동</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Algorithm Card */}
        <Link href="https://www.acmicpc.net/user/gobukddang" target="_blank" className="col-span-1 md:col-span-2 block group">
          <SpotlightCard className="p-6 rounded-xl h-full hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300" spotlightColor="rgba(255, 255, 255, 0.1)">
              <div className="flex items-center justify-between w-full mb-4">
                  <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 rounded-lg text-white">
                          <Code size={24} />
                      </div>
                      <div>
                          <h3 className="font-bold text-lg text-slate-200">백준</h3>
                          <p className="text-sm text-slate-300">C, Python</p>
                      </div>
                  </div>
                  <div className="text-slate-300 group-hover:text-white transition-colors">
                      <ArrowRight size={20} />
                  </div>
              </div>
              <div className="w-full flex justify-center bg-white/5 rounded-lg p-4">
                 {/* Using img tag to avoid next/image hostname config issues for external API */}
                 <img
                    src="http://mazassumnida.wtf/api/v2/generate_badge?boj=gobukddang" 
                    alt="Solved.ac Profile" 
                    className="h-32 object-contain"
                 />
              </div>
          </SpotlightCard>
        </Link>

        {/* ASC Club */}
        <Link href="/activities/asc" className="block group">
          <SpotlightCard className="p-6 rounded-xl h-full hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300" spotlightColor="rgba(255, 255, 255, 0.1)">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-white">
                    <Users size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-slate-200">ASC</h3>
                    <p className="text-sm text-slate-300">숭실대학교 보안동아리</p>
                    <span className="text-xs text-slate-300 mt-1 block">2025.10 ~</span>
                </div>
              </div>
              <div className="text-slate-300 group-hover:text-white transition-colors">
                <ArrowRight size={20} />
              </div>
            </div>
          </SpotlightCard>
        </Link>

        {/* Flavor Club */}
        <Link href="/activities/flavor" className="block group">
          <SpotlightCard className="p-6 rounded-xl h-full hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300" spotlightColor="rgba(255, 255, 255, 0.1)">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-white">
                    <Music size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-slate-200">Flavor</h3>
                    <p className="text-sm text-slate-300">숭실대학교 중앙 스트릿 댄스 동아리</p>
                    <span className="text-xs text-slate-300 mt-1 block">2025.03 ~ 2026.01</span>
                </div>
              </div>
              <div className="text-slate-300 group-hover:text-white transition-colors">
                <ArrowRight size={20} />
              </div>
            </div>
          </SpotlightCard>
        </Link>

        {/* Tech Blog (Dummy) */}
        <Link href="https://yangsangyunblog.tistory.com/" target="_blank" className="block group">
          <SpotlightCard className="p-6 rounded-xl h-full hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300" spotlightColor="rgba(255, 255, 255, 0.1)">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-white">
                    <BookOpen size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-slate-200">기술 블로그</h3>
                    <p className="text-sm text-slate-300">기술 블로그 운영 및 지식 공유</p>
                    <span className="text-xs text-slate-300 mt-1 block">2025.12 ~</span>
                </div>
              </div>
              <div className="text-slate-300 group-hover:text-white transition-colors">
                <ArrowRight size={20} />
              </div>
            </div>
          </SpotlightCard>
        </Link>
      </div>
    </section>
  );
}
