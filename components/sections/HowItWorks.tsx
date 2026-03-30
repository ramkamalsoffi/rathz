import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      step: "Step-01",
      title: "Set Up",
      description: "Add employees, roles, and departments in minutes.",
      number: "1"
    },
    {
      step: "Step-02",
      title: "Assign",
      description: "Use Kanban boards to structure and manage work.",
      number: "2"
    },
    {
      step: "Step-03",
      title: "Track",
      description: "Monitor productivity and identify top performers.",
      number: "3"
    },
    {
      step: "Step-04",
      title: "Scale",
      description: "Use insights to improve efficiency and grow faster.",
      number: "4"
    }
  ];

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Sprintly <span className="text-zinc-500 italic font-serif">Workflow</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden group hover:border-emerald-500/30 transition-all duration-700"
            >
              {/* Massive background number with gradient */}
              <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 text-[12rem] font-bold leading-none select-none pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:-translate-x-2">
                <span className="bg-gradient-to-b from-emerald-500/20 to-transparent bg-clip-text text-transparent opacity-40">
                  {step.number}
                </span>
              </div>

              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-6 block">
                  {step.step}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[80%] group-hover:text-zinc-400 transition-colors duration-500">
                  {step.description}
                </p>
              </div>

              {/* Decorative accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 transition-all duration-700 w-0 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Testimonial preview matching the reference bottom pill */}
        <div className="mt-32 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors cursor-pointer group shadow-2xl">
                <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800"></div>
                    ))}
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">Social Proof</span>
                    <span className="text-xs text-white font-medium">Trusted by 500+ Indian fast-growing teams</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-emerald-500 transition-colors ml-2">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
