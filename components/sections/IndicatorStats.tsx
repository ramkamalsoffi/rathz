'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const IndicatorStats = () => {
  const stats = [
    {
      value: "500+",
      label: "Businesses Onboarded",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      value: "20+ hrs",
      label: "Saved per week",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      value: "10x",
      label: "Faster HR ops",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      value: "0",
      label: "Manual errors",
      gradient: "from-emerald-400 to-teal-600"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Background SVG Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "url('/Gro34up.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(2px)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Heading & Rating */}
          <div className="flex-1 space-y-10 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Indicator</span>
              <h2 className="text-4xl md:text-6xl font-[1000] text-white leading-[1.1] tracking-tighter">
                We proud to have <br />
                <span className="text-zinc-500">great indicator</span>
              </h2>
            </div>

            <div className="inline-flex items-center gap-6 p-4 rounded-3xl glass border border-white/10 backdrop-blur-xl">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${i === 1 ? 'from-blue-500 to-purple-500' : i === 2 ? 'from-purple-500 to-pink-500' : 'from-pink-500 to-orange-500'} opacity-80`} />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-lg font-bold text-white">4.9/5</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={12} className="fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                </div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Based on 500+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Grid */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-center md:text-left">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2 group flex flex-col items-center md:items-start"
                >
                  <div className={`text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} group-hover:scale-105 transition-transform duration-500 origin-center md:origin-left`}>
                    {stat.value}
                  </div>
                  <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs md:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndicatorStats;
