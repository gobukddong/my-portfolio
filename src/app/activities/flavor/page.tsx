"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Youtube } from "lucide-react";
import { AccordionItem } from "@/components/ui/accordion";

export default function FlavorPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={18} /> 뒤로가기
        </Link>
        
        <header className="mb-12 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-bold text-white mb-2">Flavor</h1>
          <p className="text-slate-300">숭실대학교 중앙 스트릿 댄스 동아리</p>
        </header>

        <section className="space-y-8">
           <h2 className="text-xl font-bold text-white flex items-center gap-2">
             활동
           </h2>

           <div className="space-y-4">
             <AccordionItem title="배틀" subtitle="2025.05 ~ 2025.06">
               <ul className="space-y-4">
                 <li className="flex items-center justify-between flex-wrap gap-2">
                   <span>ROF(Rookies Of Flavor)</span>
                   <a href="https://www.youtube.com/watch?v=mZ-XEEZqCHo" target="_blank" className="flex items-center gap-1 text-sm text-red-400 hover:text-red-300">
                     <Youtube size={14} /> 보기
                   </a>
                 </li>
                 <li className="flex items-center justify-between flex-wrap gap-2">
                   <span>FOF(Future Of Flavor)</span>
                   <a href="https://www.youtube.com/watch?v=ihZwH00fPTU" target="_blank" className="flex items-center gap-1 text-sm text-red-400 hover:text-red-300">
                     <Youtube size={14} /> 보기
                   </a>
                 </li>
               </ul>
             </AccordionItem>

             <AccordionItem title="공연" subtitle="2026.01">
                <ul className="space-y-4">
                 <li className="flex items-center justify-between flex-wrap gap-2">
                   <span>27기 기수곡</span>
                   <a href="https://www.youtube.com/watch?v=wMJUFnZeuYk" target="_blank" className="flex items-center gap-1 text-sm text-red-400 hover:text-red-300">
                     <Youtube size={14} /> 보기
                   </a>
                 </li>
                 <li className="flex items-center justify-between flex-wrap gap-2">
                   <span>브레이킹 장르곡</span>
                   <a href="https://www.youtube.com/watch?v=EbcXJz660Cg" target="_blank" className="flex items-center gap-1 text-sm text-red-400 hover:text-red-300">
                     <Youtube size={14} /> 보기
                   </a>
                 </li>
               </ul>
             </AccordionItem>
           </div>
        </section>

        <div className="mt-12 text-right">
             <a href="https://instagram.com/flavor_ssu" target="_blank" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
               Flavor 인스타그램 <ExternalLink size={14} />
             </a>
        </div>
      </div>
    </main>
  );
}
