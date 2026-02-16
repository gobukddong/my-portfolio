"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, Instagram } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight-card";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gobukddang@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">연락하기</h2>
        
        <div className="flex justify-center gap-8">
          <button
            onClick={handleCopyEmail}
            className="group relative"
            aria-label="Copy Email"
          >
            <SpotlightCard 
                className="p-4 rounded-full w-20 h-20 flex items-center justify-center hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300" 
                spotlightColor="rgba(255, 255, 255, 0.1)"
            >
                <Mail size={32} className="text-slate-200 group-hover:text-white transition-colors" />
            </SpotlightCard>
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
                >
                  복사됨!
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <a
            href="https://github.com/gobukddong"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="GitHub"
          >
            <SpotlightCard 
                className="p-4 rounded-full w-20 h-20 flex items-center justify-center hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300" 
                spotlightColor="rgba(255, 255, 255, 0.1)"
            >
                <Github size={32} className="text-slate-200 group-hover:text-white transition-colors" />
            </SpotlightCard>
          </a>

          <a
            href="https://instagram.com/meetplz_admin"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Instagram"
          >
            <SpotlightCard 
                className="p-4 rounded-full w-20 h-20 flex items-center justify-center hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300" 
                spotlightColor="rgba(255, 255, 255, 0.1)"
            >
                <Instagram size={32} className="text-slate-200 group-hover:text-white transition-colors" />
            </SpotlightCard>
          </a>
        </div>
      </div>
    </section>
  );
}
