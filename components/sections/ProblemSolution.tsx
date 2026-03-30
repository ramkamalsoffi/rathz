import React from 'react';
import Image from 'next/image';

const ProblemSolution = () => {
  return (
    <section className="py-12 lg:py-20 bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Content */}
          <div className="flex-1 space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Struggling to Manage <br />
              <span className="text-blue-500 italic">Employees, Tasks, and Performance?</span>
              <br /> We Fix That.
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-zinc-300 font-medium leading-relaxed">
                Modern businesses don’t fail because of lack of effort — they fail due to <span className="text-white italic">lack of clarity, visibility, and structure</span>.
              </p>
              
              <p className="text-zinc-500 leading-relaxed text-lg">
                Our workforce management platform helps you bring everything into one place — from employee 
                data to task tracking and performance insights.
              </p>
              
              <p className="border-l-2 border-blue-500/30 pl-6 text-zinc-400 italic text-lg leading-relaxed">
                With a centralized system, your team works smarter, tasks move faster, and performance 
                becomes measurable.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tighter">100%</span>
                  <span className="text-[10px] font-black uppercase text-zinc-600 tracking-widest">Visibility</span>
               </div>
               <div className="w-px h-10 bg-zinc-900"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tighter">Instant</span>
                  <span className="text-[10px] font-black uppercase text-zinc-600 tracking-widest">Analytics</span>
               </div>
            </div>
          </div>

          {/* Right Side: Visual Image */}
          <div className="flex-1 w-full relative group">
            {/* Decorative background border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-zinc-950 border border-white/5 rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl">
              <Image 
                src="/hr_dashboard_aesthetic_1774865988358.png"
                alt="Workforce Dashboard"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              {/* Overlay glass effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-zinc-900 border border-white/10 p-5 rounded-3xl shadow-3xl backdrop-blur-xl animate-bounce-slow">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                     <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                     <p className="text-xs font-bold text-white">Live Performance Feed</p>
                     <p className="text-[10px] text-zinc-500 tracking-widest">REAL-TIME DATA SYNC</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
