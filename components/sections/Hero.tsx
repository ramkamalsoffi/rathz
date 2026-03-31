import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Orb from "@/components/ui/Orb";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-black flex flex-col items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          size={0.9}
          backgroundColor="#000000"
        />
      </div>

      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-20 flex-1 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-zinc-800 shadow-lg mx-auto">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-400">10x Faster HR Operations</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[900] tracking-tighter mb-8 leading-[1.1]">
          Workforce Management That <br />
          <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-purple-500 bg-clip-text text-transparent italic">
            Scales with Your Business
          </span>
        </h1>

        <p className="text-sm md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          All-in-One Platform to Manage Employees, Tasks, and Performance.
          The modern operating system for your professional team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <InteractiveHoverButton className="w-full sm:w-auto h-12 px-8 text-sm font-bold">
            Start Free Trial
          </InteractiveHoverButton>

          <button className="w-full sm:w-auto bg-zinc-950/50 backdrop-blur-md text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-zinc-900 transition-all border border-white/10 active:scale-95 shadow-xl">
            Book a 15-Minute Demo
          </button>
        </div>
      </div>

      {/* Metrics strip - Integrated at bottom */}
      <div className="w-full mt-auto py-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-4 md:gap-y-8">
          {[
            { label: "10x Faster", sub: "HR OPERATIONS" },
            { label: "100% VISIBILITY", sub: "WORK STATUS" },
            { label: "0 MANUAL WORK", sub: "AUTOMATION" },
            { label: "1 UNIFIED", sub: "PLATFORM" },
          ].map((m, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center group">
                <span className="text-sm md:text-2xl font-black text-white group-hover:text-blue-500 transition-colors uppercase tracking-tight">{m.label}</span>
                <span className="text-[8px] md:text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mt-1">{m.sub}</span>
              </div>
              {i < 3 && <div className="hidden lg:block w-px h-8 bg-zinc-800/50"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
