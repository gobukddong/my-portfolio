"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Hello!\nI am Yang sangyun, majoring in Software.\nI am currently dedicating my research to Software Security, specifically diving deep into Web Hacking techniques.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 relative overflow-hidden">
        {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl w-full space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
          <h1 className="text-5xl md:text-8xl font-black text-slate-100 relative z-10 glitch-text" data-text="RESUME">
            RESUME
          </h1>
          {/* Glitch effect styles would be needed or global css */}
        </motion.div>

        <div className="glass-card p-8 rounded-xl min-h-[160px]">
          <p className="font-mono text-lg md:text-xl text-slate-300 whitespace-pre-wrap leading-relaxed">
            {text}
            <span className="animate-pulse text-white">_</span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex gap-4"
        >
            <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/5 text-slate-300 border border-white/10 rounded-md text-sm">Web Hacking</span>
                <span className="px-3 py-1 bg-white/5 text-slate-300 border border-white/10 rounded-md text-sm">Security</span>
                <span className="px-3 py-1 bg-white/5 text-slate-300 border border-white/10 rounded-md text-sm">Seoul, KR</span>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
