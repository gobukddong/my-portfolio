"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { AccordionItem } from "@/components/ui/accordion";

export default function ASCPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={18} /> 뒤로가기
        </Link>
        
        <header className="mb-12 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-bold text-white mb-2">ASC</h1>
          <p className="text-slate-300">숭실대학교 보안동아리</p>
        </header>

        <section className="space-y-8">
           <h2 className="text-xl font-bold text-white flex items-center gap-2">
             활동
           </h2>

           <div className="space-y-4">
             <AccordionItem title="웹 해킹 스터디" subtitle="2025.11 ~ 2026.01" defaultOpen>
               <ul className="space-y-2">
                 <li className="flex justify-between">
                   <span>Cookie Sandwich Technique</span>
                   <span className="text-slate-300 text-xs">Cookie Injection</span>
                 </li>
                 <li className="flex justify-between">
                   <span>Script Gadget Technique</span>
                   <span className="text-slate-300 text-xs">DOM-based XSS</span>
                 </li>
                 <li className="flex justify-between">
                   <span>Impedance Mismatch Technique</span>
                   <span className="text-slate-300 text-xs">SQL Injection</span>
                 </li>
               </ul>
             </AccordionItem>

             <AccordionItem title="프로젝트" subtitle="2025.10 ~ 2026.02">
                <ul className="space-y-2">
                 <li className="flex justify-between">
                   <span>리눅스 취약점 스캐너</span>
                   <span className="text-slate-300 text-xs">Bash Shell</span>
                 </li>
                 <li className="flex justify-between">
                   <span>React2shell 취약점 분석 및 연구</span>
                   <span className="text-slate-300 text-xs">React</span>
                 </li>
               </ul>
             </AccordionItem>
             
             <AccordionItem title="세미나" subtitle="2025.12 ~ 2026.02">
               <ul className="space-y-2">
                 <li className="flex justify-between">
                   <span>ASC & Swing 연합 세미나</span>
                   <span className="text-slate-300 text-xs">2025.12.20</span>
                  
                 </li>
                 <li className="flex justify-between">
                   <span>ASC 최종발표회</span>
                   <span className="text-slate-300 text-xs">2026.02.14</span>
                  
                 </li>
               </ul>
             </AccordionItem>

             <AccordionItem title="블록체인 스터디" subtitle="2025.09">
               <ul className="space-y-2">
                 <li className="flex justify-between">
                   <span>Ethernaut Openzeppelin(문제 1-11,17)</span>
                   <span className="text-slate-300 text-xs">ethernaut CTF</span>
                 </li>
                 <li className="flex justify-between">
                   <span>CryptoZombies(Lesson 1,2)</span>
                   <span className="text-slate-300 text-xs">Solidity</span>
                 </li>
               </ul>
             </AccordionItem>
           </div>
        </section>

        <div className="mt-12 text-right">
             <a href="https://instagram.com/ssu_asc" target="_blank" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                ASC 인스타그램 <ExternalLink size={14} />
             </a>
        </div>
      </div>
    </main>
  );
}
