import React from 'react';
import { CheckCircle2, TrendingUp, Clock, FileCheck } from 'lucide-react';

const RealResults = () => {
  const results = [
    {
      icon: <Clock className="w-5 h-5 text-[#0545B1]" />,
      title: "Save up to 20+ hours",
      desc: "Per week on HR operations and manual overhead.",
      metric: "-20hrs"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
      title: "100% Visibility",
      desc: "Across all teams, tasks, and productivity metrics.",
      metric: "100%"
    },
    {
      icon: <FileCheck className="w-5 h-5 text-[#7402B1]" />,
      title: "Zero Manual Errors",
      desc: "Remove paperwork and human error from the equation.",
      metric: "0 ERR"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-cyan-500" />,
      title: "Better Productivity",
      desc: "Measurable accountability across your entire organization.",
      metric: "+40%"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Left: Content */}
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter">
              Real Results <br />
              <span className="text-white font-[1000] uppercase tracking-tighter shadow-sm blur-[0.4px]">That Matter.</span>
            </h2>
            <p className="text-lg md:text-xl text-white max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We don't just provide software; we provide measurable impact that transforms your business efficiency from day one.
            </p>
          </div>

          {/* Right: Data Visualization Grid */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((item, index) => (
              <div
                key={index}
                className="p-6 md:p-8 rounded-[2rem] bg-zinc-950 border border-white/5 relative overflow-hidden group hover:border-[#0545B1]/10 transition-all duration-700"
              >
                <div className="absolute top-4 right-6 text-[10px] font-black text-zinc-800 tracking-widest group-hover:text-[#0545B1]/50 transition-colors">METRIC</div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#0545B1] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tighter group-hover:text-[#0545B1] transition-colors">{item.metric}</div>
                <p className="text-xs text-white leading-relaxed max-w-[200px] md:max-w-[120px]">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealResults;
