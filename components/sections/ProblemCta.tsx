import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProblemCta = () => {
  const problems = [
    {
      subtitle: "FOR DATA FRAGMENTATION",
      title: "Employee data scattered across tools and spreadsheets",
    },
    {
      subtitle: "FOR OPERATIONAL EFFICIENCY",
      title: "Poor leave and attendance tracking",
    },
    {
      subtitle: "FOR PROJECT VISIBILITY",
      title: "No visibility into tasks and team progress",
    },
    {
      subtitle: "FOR INTERNAL SYNERGY",
      title: "Communication gaps across teams",
    },
    {
      subtitle: "FOR INFORMATION SECURITY",
      title: "Document mismanagement and access issues",
    },
    {
      subtitle: "FOR GROWTH ANALYTICS",
      title: "No clear performance tracking system",
    },
    {
      subtitle: "FOR TEAM ACCOUNTABILITY",
      title: "Lack of activity monitoring",
    },
    {
      subtitle: "FOR SCALABLE PROCESSES",
      title: "No structured workflow system",
    },
  ];

  return (
    <section className="section-padding bg-transparent border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white mb-6">Core Problems We Solve</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 leading-tight">Designed for Exceptional <br /> <span className="text-white">Business Clarity</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 md:gap-y-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-center py-4 md:py-8 border-b border-zinc-900 overflow-hidden cursor-pointer w-full"
            >
              <div className="relative z-10 flex flex-col gap-2 pr-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-primary transition-colors duration-500">
                  {problem.subtitle}
                </span>
                <h4 className="text-lg md:text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-500 ease-out leading-snug">
                  {problem.title}
                </h4>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemCta;
