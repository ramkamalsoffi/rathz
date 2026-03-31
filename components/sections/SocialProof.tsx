import React from 'react';
import { Quote, Star } from 'lucide-react';

const SocialProof = () => {
   return (
      <section className="py-16 bg-transparent relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">

            {/* Subtle background glow for social proof box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="mb-8 text-center">
               <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-zinc-600 mb-6">Social Proof</h2>
               <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tighter">
                  Trusted by <span className="text-blue-500">500+ Businesses</span> across India
               </h3>
               <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  ))}
               </div>
            </div>

            {/* Testimonial Box */}
            <div className="w-full max-w-4xl group relative">
               {/* Animated border glow */}
               <div className="absolute -inset-[1px] bg-gradient-to-r from-zinc-800 via-blue-500/20 to-zinc-800 rounded-[2rem] md:rounded-[3rem] opacity-30 group-hover:opacity-100 transition-opacity duration-1000 blur-sm"></div>

               <div className="relative bg-zinc-950/50 backdrop-blur-xl border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 text-center shadow-2xl hover:border-blue-500/10 transition-all duration-700 overflow-hidden">

                  {/* Quote icon watermark */}
                  <Quote className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 md:w-24 md:h-24 text-white/5 rotate-12 -z-10" />

                  <div className="max-w-2xl mx-auto space-y-6 md:space-y-10">
                     <blockquote className="text-xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                        “Rathz saved us 20 hours every week on HR tracking and task management.”
                     </blockquote>

                     <div className="flex flex-col items-center gap-4">
                        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-800 border-2 border-white/5 overflow-hidden">
                              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-40"></div>
                           </div>
                           <div className="text-left">
                              <p className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Growth Director</p>
                              <p className="text-[9px] md:text-[10px] text-zinc-600 font-bold tracking-tighter uppercase mt-1">Founding Member @ Scaled Corp</p>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>

         </div>
      </section>
   );
};

export default SocialProof;
