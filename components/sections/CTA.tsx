import { Sparkles, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-8 bg-transparent relative overflow-hidden">
      {/* Dynamic Background: Orbiting Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0545B1]/10 blur-[160px] rounded-full"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#7402B1]/10 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#0545B1]/5 blur-[120px] rounded-full"></div>

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="relative overflow-hidden bg-blue-950/40 border border-[#0545B1]/20 rounded-[3rem] p-8 md:p-12 text-center backdrop-blur-xl">

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0545B1]/10 border border-[#0545B1]/20 mb-4 text-center">
              <Sparkles className="w-3 h-3 text-[#0545B1]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3b82f6]">Join the Transformation</span>
            </div>

            <h2 className="text-3xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter">
              Your Team Deserves a System <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500">That Actually Works</span>
            </h2>

            <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              No complicated setup. No lengthy sales calls. No credit card required.
              Just sign up, add your team, and start seeing results from day one.
            </p>

            {/* High-Impact Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 pt-4">
              <button className="w-full sm:w-auto text-sm md:text-lg py-3 md:py-4 px-8 md:px-10 bg-blue-600 text-white font-black uppercase tracking-widest rounded-full shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] active:scale-95 transition-all">
                Start Free Trial — 14 Days, Fully Free
              </button>

              <button className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-blue-950/40 border border-white/10 text-white font-bold text-sm md:text-lg rounded-full active:scale-95 flex items-center justify-center gap-3 hover:bg-blue-900/40 transition-colors">
                <Calendar className="w-5 h-5 text-white" />
                Book a 15-Minute Demo
              </button>
            </div>

            {/* Trust Hint / Reassurance Strip */}
            <div className="pt-8 border-t border-white/5 mt-8">
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
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Floating Elements */}
          <div className="absolute top-20 right-20 w-24 h-24 bg-[#0545B1]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#7402B1]/10 rounded-full blur-3xl"></div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
