import { Sparkles, Calendar } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const CTA = () => {
  return (
    <section className="py-8 bg-transparent relative overflow-hidden">
      {/* Dynamic Background: Orbiting Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0545B1]/10 blur-[160px] rounded-full animate-pulse-slow"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#7402B1]/10 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#0545B1]/5 blur-[120px] rounded-full"></div>

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="relative group overflow-hidden bg-zinc-950/50 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-8 md:p-16 text-center">

          {/* Animated Internal Border Glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#0545B1]/20 via-[#7402B1]/20 to-[#0545B1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-md"></div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-12">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0545B1]/10 border border-[#0545B1]/20 mb-8 animate-bounce-slow">
              <Sparkles className="w-3 h-3 text-[#0545B1]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3b82f6]">Join the Transformation</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter">
              Your Team Deserves a System <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500">That Actually Works</span>
            </h2>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              No complicated setup. No lengthy sales calls. No credit card required.
              Just sign up, add your team, and start seeing results from day one.
            </p>

            {/* High-Impact Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 pt-8">
              <InteractiveHoverButton className="w-full sm:w-auto text-sm md:text-lg py-2.5 md:py-5 px-6 md:px-10">
                Start Free Trial — 14 Days, Fully Free
              </InteractiveHoverButton>

              <button className="group/demo w-full sm:w-auto px-6 md:px-10 py-2.5 md:py-5 bg-zinc-900 border border-white/10 text-white font-bold text-sm md:text-lg rounded-full transition-all hover:bg-zinc-800 hover:border-white/20 active:scale-95 flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-white group-hover/demo:text-blue-500 transition-colors" />
                Book a 15-Minute Demo
              </button>
            </div>

            {/* Trust Hint / Reassurance Strip */}
            <div className="pt-12 border-t border-white/5 mt-12">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {[
                  "Free 14-day trial",
                  "No setup fees",
                  "Full feature access",
                  "Dedicated support",
                  "Cancel anytime"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Floating Elements */}
          <div className="absolute top-20 right-20 w-24 h-24 bg-[#0545B1]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#7402B1]/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
