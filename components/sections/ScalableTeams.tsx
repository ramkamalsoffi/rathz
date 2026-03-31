import React from 'react';
import ShinyText from '@/components/ui/ShinyText';
import { Users, Zap, TrendingUp, Layers } from 'lucide-react';

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
          <p className="text-xl md:text-2xl text-zinc-500 max-w-4xl mx-auto leading-relaxed font-medium mb-16">
            Whether you're a startup or a scaling organization, our platform adapts to your workflow and 
            team size.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Flexible Teams", desc: "Easily manage growing headcounts without friction." },
              { icon: Zap, title: "Rapid Onboarding", desc: "Get new hires up and running in minutes, not days." },
              { icon: TrendingUp, title: "Performance Alpha", desc: "Drive growth with data-backed performance metrics." },
              { icon: Layers, title: "Deep Integration", desc: "Seamlessly fits into your existing tech stack." },
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-blue-500/30 transition-all duration-500 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <feature.icon className="w-12 h-12 text-blue-500/10" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-zinc-400 group-hover:text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalableTeams;
