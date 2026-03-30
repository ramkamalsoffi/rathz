import { Sparkles, Calendar } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const CTA = () => {
  return (
    <section className="py-12 bg-black relative overflow-hidden">
      {/* Dynamic Background: Orbiting Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[160px] rounded-full animate-pulse-slow"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="relative group overflow-hidden bg-zinc-950/50 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 lg:p-24 text-center">
          
          {/* Animated Internal Border Glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-md"></div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-bounce-slow">
              <Sparkles className="w-3 h-3 text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 italic">Join the Transformation</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter">
              Connect, Manage, and <br />
              Grow Your Workforce <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 italic">Seamlessly</span>
            </h2>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of businesses transforming the way they manage their workforce. Start your journey towards smarter workforce management today.
            </p>

            {/* High-Impact Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 pt-8">
               <InteractiveHoverButton className="w-full sm:w-auto text-sm md:text-lg py-2.5 md:py-5 px-6 md:px-10">
                  Start Free Trial
               </InteractiveHoverButton>

               <button className="group/demo w-full sm:w-auto px-6 md:px-10 py-2.5 md:py-5 bg-zinc-900 border border-white/10 text-white font-bold text-sm md:text-lg rounded-full transition-all hover:bg-zinc-800 hover:border-white/20 active:scale-95 flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 text-zinc-500 group-hover/demo:text-blue-400 transition-colors" />
                  Book a 15-Minute Demo
               </button>
            </div>

            {/* Trust Hint */}
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] pt-4">
              ✨ No Credit Card Required • Instant Activation
            </p>
          </div>

          {/* Decorative Floating Elements */}
          <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
