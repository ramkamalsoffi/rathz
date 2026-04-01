'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Clock, Eye, BarChart3, MessageSquare, FileSearch } from 'lucide-react';
import { GlowingEffect } from "@/components/ui/glowing-effect";

const ProblemSolution = () => {
  const painPoints = [
    {
      icon: Share2,
      title: "Employee Data Scattered Across Tools",
      desc: "Profiles in email, documents in Drive, leave history in someone's memory. One employee query takes 20 minutes to answer.",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Attendance & Leave Tracking Is a Nightmare",
      desc: "Manual punch-ins, missed leave applications, payroll errors every month — the same problems, month after month.",
      color: "emerald"
    },
    {
      icon: Eye,
      title: "Zero Visibility into Task Progress",
      desc: "You're always asking \"What's the update?\" instead of knowing. Deadlines slip without warning.",
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Performance Is Based on Gut Feel",
      desc: "You can't identify your top performers because there's no data — only impressions and opinions.",
      color: "cyan"
    },
    {
      icon: MessageSquare,
      title: "Announcements Get Lost in Group Chats",
      desc: "Critical company updates buried under memes and personal messages. Nobody reads them.",
      color: "pink"
    },
    {
      icon: FileSearch,
      title: "Documents Go Missing When You Need Them Most",
      desc: "Offer letters, contracts, and ID proofs scattered across folders, drives, and desktops.",
      color: "orange"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500">HR problems for growing businesses</h2>
          <h3 className="text-4xl md:text-6xl font-[1000] text-white tracking-tighter leading-none">
            Still Managing Your Team on <br />
            <span className="text-zinc-600">Spreadsheets and WhatsApp?</span>
          </h3>
          <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed pt-4">
            Modern Businesses Don&apos;t Fail for Lack of Effort — They Fail for Lack of Visibility <br />
            If your HR data lives in five different places, your attendance tracking is manual, 
            and nobody knows who&apos;s working on what — you&apos;re not alone. These are the exact 
            problems Sprintly was built to solve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass rounded-[2.5rem] p-8 overflow-hidden hover:border-white/10 transition-all duration-500"
            >
              <GlowingEffect blur={0} proximity={200} spread={50} variant="default" className="opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 leading-tight">{point.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl md:text-2xl font-bold text-white tracking-tight">
            You don&apos;t have a problem with people, <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">you have a system problem</span>. Sprintly fixes that.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;
