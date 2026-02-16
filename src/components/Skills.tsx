"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightCard } from "./ui/spotlight-card";

const skills = [
  {
    category: "언어",
    items: [
      { name: "Python" },
      { name: "C" },
      { name: "Java" },
      { name: "SQL" },
    ],
  },
  {
    category: "웹 개발",
    items: [
      { name: "React / Next.js" },
      { name: "Hugo" },
      { name: "Vercel" },
      { name: "Supabase" },
    ],
  },
  {
    category: "시스템 & 도구",
    items: [
      { name: "Linux" },
      { name: "Docker" },
      { name: "Arduino" },
      { name: "Excel" },
    ],
  },
];

export default function Skills() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">스택</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <SpotlightCard 
                className={`p-8 rounded-xl group hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer ${openCategory === section.category ? 'shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]' : ''}`} 
                spotlightColor="rgba(255, 255, 255, 0.1)"
                onClick={() => toggleCategory(section.category)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {section.category}
                  </h3>
                  <motion.div
                    animate={{ rotate: openCategory === section.category ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openCategory === section.category && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3">
                        {section.items.map((skill) => (
                          <div
                            key={skill.name}
                            className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover/item:border-white/30 transition-colors"
                          >
                            <span className="font-bold text-slate-200">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

