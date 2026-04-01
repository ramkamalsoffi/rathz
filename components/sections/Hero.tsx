import React from "react";
import Orb from "@/components/ui/Orb";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80 scale-150">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          color1="#7d00ff"
          color2="#0024ff"
          color3="#00018b"
          size={1.5}
        />
      </div>

      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-20 w-full py-12 md:py-20 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-zinc-800 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-white">10x Faster HR Operations</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[1000] tracking-tighter mb-8 leading-[1.1] text-white animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Workforce Management <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Scales with You
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 mb-12 max-w-2xl leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            All-in-One Platform to Manage Employees, Tasks, and Performance.
            The modern operating system for your professional team.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <InteractiveHoverButton className="w-full sm:w-auto h-14 px-10 text-base font-black tracking-widest uppercase shadow-[0_20px_50px_-10px_rgba(37,99,235,0.5)]">
              Start Free Trial
            </InteractiveHoverButton>

            <button className="w-full sm:w-auto bg-zinc-950/50 backdrop-blur-xl text-white px-10 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-zinc-900 transition-all border border-white/10 active:scale-95 shadow-2xl">
              Book a Private Demo
            </button>
          </div>
        </div>
      </div>

      {/* Metrics strip - Integrated at bottom with premium depth */}
      <div className="w-full mt-auto py-10 border-t border-white/[0.05] bg-white/[0.02] backdrop-blur-xl relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 md:gap-y-12">
          {[
            { label: "10x Faster", sub: "HR OPERATIONS" },
            { label: "100% VISIBILITY", sub: "WORK STATUS" },
            { label: "0 MANUAL WORK", sub: "AUTOMATION" },
            { label: "1 UNIFIED", sub: "PLATFORM" },
          ].map((m, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center group">
                <span className="text-2xl md:text-3xl font-[1000] text-white group-hover:text-blue-500 transition-colors uppercase tracking-tighter">{m.label}</span>
                <span className="text-[10px] md:text-[12px] font-black text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase tracking-[0.3em] mt-2">{m.sub}</span>
              </div>
              {i < 3 && <div className="hidden lg:block w-px h-10 bg-white/10"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
