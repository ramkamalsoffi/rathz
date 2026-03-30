import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-12 lg:pt-56 lg:pb-32 overflow-hidden bg-black min-h-[90vh] md:min-h-screen flex flex-col justify-center">
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-zinc-800 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-400">10x Faster HR Operations</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          Workforce Management That <br />
          <span className="gradient-text">Scales with Your Business</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          All-in-One Platform to Manage Employees, Tasks, and Performance.
          The modern operating system for your professional team.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-20 text-center">
          <InteractiveHoverButton className="w-full sm:w-auto text-sm md:text-lg py-2.5 md:py-4 px-6 md:px-10">
            Start Free Trial
          </InteractiveHoverButton>
          
          <button className="w-full sm:w-auto glass text-white px-5 md:px-8 py-2.5 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:bg-zinc-900 transition-all border border-zinc-800 active:scale-95">
            Book a 15-Minute Demo
          </button>
        </div>
      </div>
      
      {/* Metrics strip */}
      <div className="w-full bg-zinc-950/80 backdrop-blur-sm py-8 md:py-10 mt-8 md:mt-20 border-y border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-12 gap-y-6 lg:justify-between items-center opacity-70">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">10x Faster</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">HR Operations</span>
          </div>
          <div className="w-px h-8 bg-zinc-800 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">100% VISIBILITY</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Work Status</span>
          </div>
          <div className="w-px h-8 bg-zinc-800 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">0 MANUAL WORK</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Automation</span>
          </div>
          <div className="w-px h-8 bg-zinc-800 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">1 UNIFIED</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Platform</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
