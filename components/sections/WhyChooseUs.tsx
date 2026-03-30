import React from 'react';
import { MousePointer2, Landmark, LineChart, LayoutGrid, Layers } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      icon: <MousePointer2 className="w-5 h-5" />,
      title: "Simple and intuitive interface",
      desc: "Designed for rapid adoption without complex training.",
      color: "blue"
    },
    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Built specifically for Indian businesses",
      desc: "Adapts to local compliance, culture, and operational workflows.",
      color: "emerald"
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Real-time analytics and insights",
      desc: "Actionable data that moves as fast as your business.",
      color: "purple"
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: "All-in-one solution",
      desc: "Zero tool-fatigue. Everything in a single unified dashboard.",
      color: "cyan"
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Scalable for growing teams",
      desc: "Growth-locked architecture that expands with your headcount.",
      color: "orange"
    }
  ];

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      {/* Dynamic background "Scan Line" animation layer */}
      <div className="absolute inset-0 z-0 opacity-10">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent animate-scan-beam"></div>
         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent animate-scan-beam delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-20">
        
        {/* Left Side: Sticky Headline */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-8">
            Why <br />
            <span className="text-zinc-500 italic">Choose Us</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-blue-500 mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-zinc-600 max-w-sm leading-relaxed">
            Eliminate complexity and consolidate your stack into a single, high-performance ecosystem.
          </p>
        </div>

        {/* Right Side: Visual List (Not Cards) */}
        <div className="flex-1 space-y-12 md:space-y-16">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start relative transition-all duration-500"
            >
              {/* Animated Item Number */}
              <div className="hidden md:block text-[10px] font-black text-zinc-900 absolute -left-12 top-2 group-hover:text-blue-500 transition-colors">
                 0{index + 1}
              </div>

              {/* Progress Line */}
              <div className="hidden md:block absolute left-[-2rem] top-12 bottom-[-4rem] w-px bg-zinc-900 group-last:hidden">
                 <div className="h-0 group-hover:h-full w-full bg-blue-500/50 transition-all duration-1000 origin-top"></div>
              </div>

              <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]`}>
                {point.icon}
              </div>

              <div className="space-y-4 flex-1">
                <h4 className="text-xl md:text-3xl font-bold text-white group-hover:translate-x-3 transition-transform duration-500 ease-out leading-snug">
                   {point.title}
                </h4>
                <p className="text-base md:text-lg text-zinc-500 max-w-xl group-hover:text-zinc-300 transition-colors">
                   {point.desc}
                </p>
                <div className="h-px w-full bg-zinc-900 mt-6 md:mt-8 group-hover:bg-blue-500/20"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
