"use client";

import React from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section id="features" className="section-padding bg-black overflow-hidden pt-24 pb-24 md:pt-40 md:pb-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Your Entire HR Stack. <br />
            <span className="text-zinc-500 italic">One Unified Platform</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl leading-relaxed">
            Our platform is designed to simplify workforce management for growing businesses by
            combining HR operations, task tracking, and analytics into a single system.
          </p>
        </div>

        {/* ==========================================
            DESKTOP VIEW (Visible on tablet/desktop)
           ========================================== */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 1. Centralized Employee Management */}
          <div className="md:col-span-8 group relative bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-10 overflow-hidden hover:border-blue-500/30 transition-all duration-700">
            <GlowingEffect blur={0} proximity={240} spread={60} variant="default" className="opacity-0 group-hover:opacity-100" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.03] blur-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-6">Centralized Employee Directory</h3>
                <p className="text-zinc-500 max-w-sm leading-relaxed text-lg">Manage your entire workforce from a stunning, centralized hub. High-performance access to profiles and documents.</p>
                
                <div className="mt-8 flex gap-3">
                   <div className="px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-widest">Digital Vault</div>
                   <div className="px-4 py-2 rounded-full border border-white/5 bg-zinc-900 text-zinc-500 text-[10px] font-bold uppercase tracking-widest group-hover:border-blue-500/30 transition-colors">GDPR SECURE</div>
                </div>
              </div>

              {/* Mini Dashboard Component */}
              <div className="w-full md:w-80 space-y-3 relative group/directory">
                 <div className="bg-zinc-900 border border-white/5 rounded-2xl p-4 flex items-center gap-4 transition-all duration-700 hover:scale-[1.02] hover:bg-zinc-850 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover/directory:-translate-y-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold opacity-80 group-hover/directory:opacity-100">JD</div>
                    <div className="flex flex-col">
                       <span className="text-xs font-bold text-white">John Doe</span>
                       <span className="text-[10px] text-zinc-500">Sr. Product Designer</span>
                    </div>
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
                 </div>

                 <div className="bg-zinc-900 border border-white/5 rounded-2xl p-4 flex items-center gap-4 transition-all duration-700 hover:scale-[1.02] hover:bg-zinc-850 translate-x-4 shadow-xl z-20 group-hover/directory:translate-y-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold">AS</div>
                    <div className="flex flex-col">
                       <span className="text-xs font-bold text-white">Aditi Sharma</span>
                       <span className="text-[10px] text-zinc-500">Frontend Engineer</span>
                    </div>
                    <div className="ml-auto flex gap-1">
                       <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                       <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                       <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                    </div>
                 </div>

                 <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4 flex items-center gap-4 opacity-40 blur-[1px] group-hover/directory:opacity-80 group-hover/directory:blur-0 transition-all duration-1000 -translate-x-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-800"></div>
                    <div className="flex-1 space-y-1">
                       <div className="w-2/3 h-2 bg-zinc-800 rounded-full"></div>
                       <div className="w-1/2 h-1.5 bg-zinc-900 rounded-full"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* 2. Automated Leave & Attendance (Small) */}
          <div className="md:col-span-4 group relative bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-10 overflow-hidden hover:border-emerald-500/30 transition-all duration-700">
            <GlowingEffect blur={0} proximity={120} spread={40} variant="default" className="opacity-0 group-hover:opacity-100" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-4">Leave & Attendance</h3>
              <p className="text-zinc-500 text-sm mb-12 italic">Zero manual work. Automated tracking for leaves and holidays.</p>

              <div className="relative flex-1 flex items-center justify-center p-6 min-h-[220px] group/stack">
                <div className="absolute w-56 h-32 bg-zinc-900 border border-white/5 rounded-[2rem] p-5 shadow-2xl transition-all duration-700 
                     z-10 -rotate-6 -translate-x-4
                     group-hover/stack:z-30 group-hover/stack:rotate-0 group-hover/stack:translate-x-0 group-hover/stack:translate-y-4 group-hover/stack:border-emerald-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest">Attendance</span>
                    <span className="text-[9px] text-zinc-600 font-medium">09:30 AM</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full border-2 border-emerald-500/30 border-t-emerald-500 animate-spin"></div>
                    </div>
                    <span className="text-sm font-bold text-white tracking-tight">Syncing...</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500/40 w-2/3 animate-pulse"></div>
                  </div>
                </div>

                <div className="absolute w-60 h-36 bg-zinc-900 border border-emerald-500/20 rounded-[2rem] p-6 shadow-2xl transition-all duration-700
                     z-20 rotate-0 translate-y-0
                     group-hover/stack:z-10 group-hover/stack:-rotate-12 group-hover/stack:-translate-x-8 group-hover/stack:-translate-y-4 group-hover/stack:opacity-50 group-hover/stack:scale-90 group-hover/stack:border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-extrabold text-white uppercase tracking-wider">Leave Req</span>
                    <div className="px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-[9px] font-bold uppercase tracking-tight">Pending</div>
                  </div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-white/5 overflow-hidden"><div className="w-full h-full bg-gradient-to-br from-emerald-500 to-blue-500 opacity-40"></div></div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white tracking-tight">Rahul Sharma</span>
                      <span className="text-[10px] text-zinc-500 font-medium">2 Days Annual</span>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="w-6 h-6 rounded bg-zinc-950 border border-white/5 flex items-center justify-center text-[10px] text-zinc-500">✕</div>
                    <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-[10px] text-emerald-500">✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Task Allocation */}
          <div className="md:col-span-4 group relative bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-10 overflow-hidden hover:border-purple-500/30 transition-all duration-700">
            <GlowingEffect blur={0} proximity={120} spread={40} variant="default" className="opacity-0 group-hover:opacity-100" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Task Requests</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-12 italic">Assign, monitor, and manage tasks while enabling seamless requests.</p>
              <div className="mt-8 flex gap-3 h-24 items-end group/cards">
                <div className="flex-1 h-full bg-zinc-950 border border-white/5 rounded-xl p-2 flex flex-col gap-2 transition-all duration-500 group-hover:bg-zinc-900 group-hover:-translate-y-1">
                  <div className="w-full h-8 bg-zinc-800 rounded-lg"></div>
                  <div className="w-3/4 h-2 bg-zinc-800 rounded-full"></div>
                  <div className="w-1/2 h-1 bg-zinc-900 rounded-full"></div>
                </div>
                <div className="flex-1 h-full bg-zinc-950 border border-purple-500/30 rounded-xl p-2 flex flex-col gap-2 relative transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                  <div className="w-full h-10 bg-purple-500/20 border border-purple-500/50 rounded-lg"></div>
                  <div className="w-1/2 h-2 bg-zinc-800 rounded-full"></div>
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7] animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Performance Analytics */}
          <div className="md:col-span-8 group relative bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-10 overflow-hidden hover:border-cyan-500/30 transition-all duration-700">
            <GlowingEffect blur={0} proximity={240} spread={60} variant="default" className="opacity-0 group-hover:opacity-100" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Performance Analytics</h3>
                <p className="text-zinc-400 max-w-md">Identify top performers using real-time data based on productivity and activity patterns.</p>
              </div>
              <div className="mt-12 flex justify-end">
                <div className="flex items-end gap-3 h-28 px-4 border-b border-cyan-500/20">
                  {[0.3, 0.6, 0.4, 0.9, 0.7, 0.45].map((h, i) => (
                    <div
                      key={i}
                      className="w-10 bg-transparent border border-cyan-500/40 rounded-t-xl transition-all duration-700 ease-out group-hover:bg-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      style={{ height: `${h * 100}%`, transitionDelay: `${i * 50}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. Kanban Workflow System */}
          <div className="md:col-span-6 group relative bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-10 overflow-hidden hover:border-orange-500/30 transition-all duration-700">
            <GlowingEffect blur={0} proximity={300} spread={80} variant="default" className="opacity-0 group-hover:opacity-100" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/5 blur-[100px] pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Kanban Workflow</h3>
              <p className="text-zinc-500 text-sm mb-12">Visualize work stages from To Do to Done and identify bottlenecks instantly.</p>
              <div className="flex gap-4 min-h-[160px] group/kanban relative p-2">
                <div className="flex-1 border border-white/5 rounded-2xl bg-zinc-900/30 px-3 py-4 flex flex-col gap-2 transition-all duration-300 group-hover/kanban:bg-orange-500/5 group-hover/kanban:border-orange-500/10">
                  <span className="text-[8px] font-bold text-zinc-600 uppercase mb-2">To Do</span>
                  <div className="w-full h-12 bg-zinc-800/40 rounded-xl border border-white/5 opacity-0 animate-kanban-flow-1"></div>
                  <div className="w-3/4 h-2 bg-zinc-800 rounded-full opacity-20"></div>
                </div>
                <div className="flex-1 border border-white/5 rounded-2xl bg-zinc-950 px-3 py-4 flex flex-col gap-2 transition-all duration-300 group-hover/kanban:bg-purple-500/5 group-hover/kanban:border-purple-500/20">
                  <span className="text-[8px] font-bold text-zinc-600 uppercase mb-2">In Progress</span>
                  <div className="w-full h-12 bg-zinc-800/40 rounded-xl border border-white/5 opacity-0 animate-kanban-flow-2"></div>
                </div>
                <div className="flex-1 border border-white/5 rounded-2xl bg-zinc-900/30 px-3 py-4 flex flex-col gap-2 transition-all duration-300 group-hover/kanban:bg-emerald-500/5 group-hover/kanban:border-emerald-500/10">
                  <span className="text-[8px] font-bold text-zinc-600 uppercase mb-2">Done</span>
                  <div className="w-full h-12 bg-zinc-800/40 rounded-xl border border-white/5 opacity-0 animate-kanban-flow-3"></div>
                </div>

                {/* Animated Flying Card */}
                <div className="absolute top-[4.5rem] left-[1rem] w-[calc(33.33%-1rem)] h-12 bg-orange-500/20 border border-orange-500/50 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.15)] z-20 pointer-events-none group-hover/kanban:bg-orange-500 group-hover/kanban:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-500 flex items-center px-3 animate-kanban-drag">
                  <div className="w-full h-1.5 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Broadcast Announcements */}
          <div className="md:col-span-6 group relative bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-10 overflow-hidden hover:border-pink-500/30 transition-all duration-700">
            <GlowingEffect blur={0} proximity={240} spread={60} variant="default" className="opacity-0 group-hover:opacity-100" />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-4">Broadcast Announcements</h3>
              <p className="text-zinc-500 text-sm mb-12 italic">Send instant updates and ensure everyone stays informed.</p>

              <div className="relative flex-1 flex flex-col gap-3 min-h-[140px] group/notif">
                <div className="w-full bg-zinc-900 border border-white/5 rounded-2xl p-4 flex items-center gap-4 transition-all duration-700
                   group-hover/notif:-translate-y-12 group-hover/notif:opacity-0 group-hover/notif:scale-90">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white italic">New Policy Update</span>
                    <span className="text-[10px] text-zinc-500">Sent to all departments</span>
                  </div>
                </div>

                <div className="w-full bg-zinc-900 border border-pink-500/20 rounded-2xl p-4 flex items-center gap-4 absolute top-14 left-0 transition-all duration-700
                   group-hover/notif:top-0 group-hover/notif:border-pink-500 group-hover/notif:shadow-[0_0_20px_rgba(236,72,153,0.15)]">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 border border-pink-500/50 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs">📢</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white">Team Meeting @ 4PM</span>
                    <span className="text-[10px] text-zinc-400">Join via Dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Activity Tracking (Full Width) */}
          <div className="md:col-span-12 group relative bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-10 overflow-hidden hover:border-yellow-500/10 transition-all duration-700">
            <GlowingEffect blur={0} proximity={400} spread={100} variant="default" className="opacity-0 group-hover:opacity-100" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-white mb-6">Advanced Activity Intelligence</h3>
                <p className="text-zinc-500 leading-relaxed max-w-lg mb-8 italic text-lg">Harness real-time data to understand team work patterns. Peak productivity hours and heatmap analysis.</p>
                <div className="flex gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                    <div key={day} className="px-4 py-2 rounded-xl bg-zinc-900/50 border border-white/5 text-[8px] text-zinc-500 font-black">
                       {day}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full bg-zinc-900/30 border border-white/5 rounded-[2rem] p-8">
                 <div className="flex flex-wrap gap-2 justify-center">
                   {[...Array(40)].map((_, i) => (
                     <div key={i} className={`w-4 h-4 rounded-md ${i % 7 === 0 ? 'bg-yellow-500' : 'bg-zinc-900'}`}></div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            MOBILE VIEW (Simplified & Auto-Animated)
           ========================================== */}
        <div className="block md:hidden space-y-6">
           
           {/* Mobile Card 1: Directory */}
           <div className="bg-zinc-950 border border-white/5 rounded-3xl p-6 overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-3">Employee Directory</h3>
              <p className="text-zinc-500 text-sm mb-6">Identify top performers using real-time data based on productivity and activity patterns.</p>
              
              <div className="space-y-3">
                 <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-zinc-900 border border-white/5 rounded-xl p-3 flex items-center gap-3"
                 >
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">JD</div>
                    <span className="text-xs font-bold text-white">John Doe</span>
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                 </motion.div>
                 
                 <motion.div 
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="bg-zinc-900 border border-white/5 rounded-xl p-3 flex items-center gap-3 translate-x-3"
                 >
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white">AS</div>
                    <span className="text-xs font-bold text-white">Aditi Sharma</span>
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                 </motion.div>
              </div>
           </div>

           {/* Mobile Card 2 & 3: Leave & Task Grid */}
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-950 border border-white/5 rounded-3xl p-5 flex flex-col justify-between">
                 <h4 className="text-sm font-bold text-white mb-2">Leave & Attendance</h4>
                 <p className="text-zinc-500 text-[10px] mb-4">Identify top performers using real-time data based on productivity and activity patterns.</p>
                 <div className="w-full aspect-square bg-zinc-900 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-2">
                    <motion.div 
                       animate={{ rotate: 360 }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                       className="w-8 h-8 rounded-full border-2 border-emerald-500/20 border-t-emerald-500"
                    />
                    <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Syncing</span>
                 </div>
              </div>
              <div className="bg-zinc-950 border border-white/5 rounded-3xl p-5 flex flex-col justify-between">
                 <h4 className="text-sm font-bold text-white mb-2">Task Requests</h4>
                 <p className="text-zinc-500 text-[10px] mb-4">Identify top performers using real-time data based on productivity and activity patterns.</p>
                 <div className="w-full aspect-square bg-zinc-900 rounded-2xl border border-white/5 p-3 flex flex-col gap-2">
                    <div className="w-full h-8 bg-purple-500/20 border border-purple-500/30 rounded-lg"></div>
                    <motion.div 
                       animate={{ opacity: [0.3, 1, 0.3] }}
                       transition={{ duration: 2, repeat: Infinity }}
                       className="w-1/2 h-1.5 bg-zinc-800 rounded-full"
                    />
                 </div>
              </div>
           </div>

           {/* Mobile Card 4: Performance */}
           <div className="bg-zinc-950 border border-white/5 rounded-3xl p-6">
              <div className="flex justify-between items-end mb-4">
                 <div>
                    <h3 className="text-lg font-bold text-white">Performance</h3>
              <p className="text-zinc-500 text-xs mb-4">Identify top performers using real-time data based on productivity and activity patterns.</p>
                    <span className="text-[10px] text-zinc-500 uppercase italic">Real-time data</span>
                 </div>
                 <span className="text-cyan-500 font-black">+18%</span>
              </div>
              <div className="flex items-end gap-2 h-16 border-b border-cyan-500/10">
                 {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4].map((h, i) => (
                    <motion.div 
                       key={i}
                       animate={{ height: [`${h * 50}%`, `${h * 100}%`, `${h * 50}%`] }}
                       transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                       className="flex-1 bg-cyan-500/40 rounded-t-lg"
                    />
                 ))}
              </div>
           </div>

           {/* Mobile Card 5: Kanban */}
           <div className="bg-zinc-950 border border-white/5 rounded-3xl p-6 overflow-hidden">
              <h3 className="text-lg font-bold text-white mb-2">Kanban Flow</h3>
              <p className="text-zinc-500 text-xs mb-4">Identify top performers using real-time data based on productivity and activity patterns.</p>
              <div className="flex gap-2 relative h-32">
                 <div className="flex-1 bg-zinc-900/50 rounded-xl border border-white/5 p-2">
                    <div className="w-full h-1 bg-zinc-800 rounded-full mb-1"></div>
                 </div>
                 <div className="flex-1 bg-zinc-900/50 rounded-xl border border-white/5 p-2">
                    <div className="w-full h-1 bg-zinc-800 rounded-full mb-1"></div>
                 </div>
                 <div className="flex-1 bg-zinc-900/50 rounded-xl border border-white/5 p-2">
                    <div className="w-full h-1 bg-zinc-800 rounded-full mb-1"></div>
                 </div>
                 
                 <motion.div 
                    animate={{ 
                       x: [0, 80, 160, 0],
                       opacity: [0, 1, 1, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
                    className="absolute top-4 left-2 w-1/4 h-8 bg-orange-500/40 rounded-lg border border-orange-500/50"
                 />
              </div>
           </div>

           {/* Mobile Card 6: Broadcast */}
           <div className="bg-zinc-950 border border-white/5 rounded-3xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Broadcast</h3>
              <p className="text-zinc-500 text-xs mb-4">Identify top performers using real-time data based on productivity and activity patterns.</p>
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">📢</div>
                 <div>
                    <div className="text-xs font-bold text-white">Team Meeting @ 4PM</div>
                    <div className="text-[10px] text-zinc-500 tracking-tight">Tap to join dashboard</div>
                 </div>
              </div>
           </div>

           {/* Mobile Card 7: Heatmap */}
           <div className="bg-zinc-950 border border-white/5 rounded-3xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Activity Heatmap</h3>
              <p className="text-zinc-500 text-xs mb-4">Identify top performers using real-time data based on productivity and activity patterns.</p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                 {[...Array(32)].map((_, i) => (
                    <motion.div 
                       key={i}
                       animate={{ opacity: [0.1, 1, 0.1] }}
                       transition={{ duration: 4, repeat: Infinity, delay: i * 0.05 }}
                       className={`w-4 h-4 rounded-sm ${i % 9 === 0 ? 'bg-yellow-500' : 'bg-zinc-900'}`}
                    />
                 ))}
              </div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default Features;
