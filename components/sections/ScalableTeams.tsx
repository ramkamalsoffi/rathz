'use client';

import React from 'react';
import ShinyText from '@/components/ui/ShinyText';
import { Rocket, Code2, Factory, Stethoscope, GraduationCap, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlowingEffect } from "@/components/ui/glowing-effect";

const ScalableTeams = () => {
  const industries = [
    {
      icon: Rocket,
      title: "Startups & SMEs",
      desc: "Get structured from day one. Build HR processes that scale as your team grows without hiring a full HR department."
    },
    {
      icon: Code2,
      title: "IT & Software Companies",
      desc: "Manage projects, allocate developer tasks, track utilisation, and run performance reviews all in one place."
    },
    {
      icon: Factory,
      title: "Manufacturing & Operations",
      desc: "Track shift attendance, department-wise task completion, and floor-level accountability with ease."
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Clinics",
      desc: "Organise staff schedules, leave applications, compliance documents, and announcements across multiple locations."
    },
    {
      icon: GraduationCap,
      title: "Schools & Institutions",
      desc: "Manage teaching staff, administrative roles, attendance, and communications across single or multiple campuses."
    },
    {
      icon: ShoppingBag,
      title: "Retail & Field Sales",
      desc: "Keep distributed teams accountable with mobile-friendly task tracking, activity logs, and real-time reporting."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-transparent relative">
      {/* Decorative background effects */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500">Industries We Serve</h2>
          <h3 className="text-3xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight">
            Built for Every Industry. <br />
            <ShinyText
              text="Crafted for Global Businesses"
              disabled={false}
              speed={3}
              className="text-zinc-400"
              shineColor="#0545B1"
            />
          </h3>
          <p className="text-lg md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed font-medium">
            Whether You&apos;re a 10-Person Startup or a 500-Person Enterprise — Rathz Adapts to You.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] glass border border-white/5 hover:border-blue-500/20 transition-all duration-500 text-left relative overflow-hidden backdrop-blur-sm"
            >
              <GlowingEffect blur={8} proximity={200} spread={50} color="#0545B1" className="opacity-0 group-hover:opacity-100" />
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <item.icon className="w-16 h-16 text-blue-500/5" />
              </div>
              <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
                <item.icon className="w-7 h-7 text-zinc-400 group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 leading-tight">{item.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full glass border border-white/10 group hover:border-blue-500/30 transition-all">
            <span className="text-white/80 font-bold tracking-tight">If you have a team, Rathz is built for you.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalableTeams;
