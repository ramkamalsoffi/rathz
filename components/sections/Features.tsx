import React from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-black overflow-hidden border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 md:mb-20 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Your Entire HR Stack. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-600 italic">One Unified Platform</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-base md:text-lg">
            Our platform is designed to simplify workforce management for growing businesses by
            combining HR operations, task tracking, and analytics into a single system.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

          {/* 1. Centralized Employee Management */}
          <div className="md:col-span-8 group relative bg-zinc-950/50 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 overflow-hidden hover:border-blue-500/20 transition-all duration-700">
            <GlowingEffect blur={0} proximity={240} spread={60} variant="default" className="opacity-0 group-hover:opacity-100" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-3xl font-extrabold text-white mb-4">Employee Directory</h3>
                <p className="text-zinc-500 max-w-sm mx-auto md:mx-0 leading-relaxed text-sm md:text-base">Manage your entire workforce from a stunning, centralized hub. High-performance access to profiles.</p>
                
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                   <div className="px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500 text-[9px] font-bold uppercase tracking-widest">Digital Vault</div>
                   <div className="px-3 py-1.5 rounded-full border border-white/5 bg-zinc-900 text-zinc-500 text-[9px] font-bold uppercase tracking-widest">SECURE</div>
                </div>
              </div>

              {/* Mini Dashboard Mob-Optimized */}
              <div className="w-full md:w-72 scale-90 md:scale-100 space-y-2 relative group/directory">
                 <div className="bg-zinc-900 border border-white/5 rounded-xl p-3 flex items-center gap-3 transition-all">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">JD</div>
                    <div className="flex flex-col">
                       <span className="text-[11px] font-bold text-white leading-none">John Doe</span>
                       <span className="text-[9px] text-zinc-500 mt-1">Sr. Designer</span>
                    </div>
                 </div>
                 <div className="bg-zinc-900 border border-white/5 rounded-xl p-3 flex items-center gap-3 translate-x-2 md:translate-x-4 shadow-xl">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white">AS</div>
                    <div className="flex flex-col">
                       <span className="text-[11px] font-bold text-white leading-none">Aditi Sharma</span>
                       <span className="text-[9px] text-zinc-500 mt-1">Engineer</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* 2. Automated Leave & Attendance */}
          <div className="md:col-span-4 group relative bg-zinc-950/50 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 overflow-hidden hover:border-emerald-500/20 transition-all duration-700">
            <GlowingEffect blur={0} proximity={120} spread={40} variant="default" className="opacity-0 group-hover:opacity-100" />
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left h-full">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Leave Tracking</h3>
              <p className="text-zinc-500 text-xs mb-8 italic">Automated workflows for requests.</p>

              {/* Stack Visual Smaller for Mobile */}
              <div className="relative flex-1 flex items-center justify-center w-full min-h-[160px] md:min-h-[220px] scale-[0.85] md:scale-100">
                <div className="absolute w-44 md:w-56 h-24 md:h-32 bg-zinc-900 border border-white/5 rounded-2xl p-4 transition-all -rotate-6 -translate-x-4">
                  <div className="w-full h-1 bg-zinc-950 rounded-full mt-auto"></div>
                </div>
                <div className="absolute w-48 md:w-60 h-28 md:h-36 bg-zinc-900 border border-emerald-500/20 rounded-2xl p-5 shadow-2xl relative z-10">
                   <div className="flex justify-between items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20"></div>
                      <div className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[8px] font-bold uppercase rounded">Pending</div>
                   </div>
                   <div className="w-2/3 h-2 bg-zinc-800 rounded-full mb-2"></div>
                   <div className="w-1/2 h-1.5 bg-zinc-850 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Task Allocation */}
          <div className="md:col-span-4 group relative bg-zinc-950/50 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 overflow-hidden hover:border-purple-500/20 transition-all duration-700">
            <GlowingEffect blur={0} proximity={120} spread={40} variant="default" className="opacity-0 group-hover:opacity-100" />
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Task Allocation</h3>
              <p className="text-zinc-500 text-xs italic">Seamlessly assign and monitor work.</p>
              <div className="mt-8 flex gap-2 h-16 md:h-20 items-end justify-center md:justify-start">
                <div className="w-1/3 h-full bg-zinc-900 rounded-lg"></div>
                <div className="w-1/3 h-[120%] bg-purple-500/10 border border-purple-500/20 rounded-lg relative">
                  <div className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Kanban Management */}
          <div className="md:col-span-8 group relative bg-zinc-950/50 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 overflow-hidden hover:border-orange-500/20 transition-all duration-700">
            <GlowingEffect blur={0} proximity={240} spread={60} variant="default" className="opacity-0 group-hover:opacity-100" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Kanban Workflow</h3>
                <p className="text-zinc-500 max-w-sm text-sm">Visualize work stages and identify bottlenecks with a simple dragging motion.</p>
              </div>
              
              <div className="w-full md:w-64 flex gap-2 scale-90 md:scale-100">
                 {[1,2,3].map(i => (
                    <div key={i} className="flex-1 h-20 md:h-24 bg-zinc-900/50 border border-white/5 rounded-xl p-2">
                       <div className={`w-full h-8 md:h-10 rounded-lg ${i === 2 ? 'bg-orange-500/10 border border-orange-500/30' : 'bg-zinc-800/30'}`}></div>
                    </div>
                 ))}
              </div>
            </div>
          </div>

          {/* 5. Activity Intelligence Full Width */}
          <div className="md:col-span-12 group relative bg-zinc-950 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 lg:p-16 overflow-hidden">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/[0.03] blur-[120px] pointer-events-none"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
                <div className="flex-1 text-center lg:text-left">
                   <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tighter">Activity Intelligence</h3>
                   <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 italic mb-8">
                      Real-time data visualization of work intensity and collaboration patterns.
                   </p>
                   <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      {['M','T','W','T','F'].map(d => (
                         <div key={d} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-zinc-900 text-zinc-500 font-bold border border-white/5 text-[10px]">
                            {d}
                         </div>
                      ))}
                   </div>
                </div>

                {/* Simplified Heatmap for Mobile */}
                <div className="w-full lg:w-[450px] bg-zinc-900/30 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 transition-all hover:bg-zinc-950 shadow-2xl">
                   <div className="flex flex-wrap gap-2 justify-center">
                     {[...Array(40)].map((_, i) => (
                        <div key={i} className={`w-4 h-4 md:w-5 md:h-5 rounded-md ${i % 11 === 0 ? 'bg-yellow-500' : 'bg-zinc-800'} opacity-40`}></div>
                     ))}
                   </div>
                   <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest leading-none mb-2">Growth</span>
                        <span className="text-xl md:text-2xl font-black text-yellow-500">+32%</span>
                      </div>
                      <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-yellow-500"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
