import React from 'react';
import ShinyText from '@/components/ui/ShinyText';

const ScalableTeams = () => {
  return (
    <section className="py-12 md:py-24 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Decorative vertical gradient lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <div className="py-0 md:py-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-600 mb-6 italic flex items-center justify-center gap-4">
             <span className="w-12 h-px bg-zinc-800"></span>
             Scaling Capabilities
             <span className="w-12 h-px bg-zinc-800"></span>
          </h2>
          <h3 className="text-3xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter leading-tight">
            Built for <ShinyText 
              text="Fast-Growing" 
              disabled={false} 
              speed={3} 
              className="italic text-zinc-400" 
              shineColor="#3b82f6"
            /> Teams.
          </h3>
          <p className="text-zinc-500 font-bold italic tracking-[0.2em] uppercase text-xs mb-10">Perfect for Modern Businesses in India</p>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-4xl mx-auto leading-relaxed font-medium">
            Whether you're a startup or a scaling organization, our platform adapts to your workflow and 
            team size.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScalableTeams;
