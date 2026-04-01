"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Why Us", href: "#why-us" },
    { label: "Pricing", href: "#pricing" },
    { label: "Customers", href: "#customers" },
    { label: "Resources", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: -150 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 glass border border-white/10 rounded-[2rem] shadow-2xl backdrop-blur-xl"
      >
        <div className="px-6 md:px-8 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/Logo-01.svg"
              alt="Sprintly Logo"
              width={250}
              height={80}
              className="h-20 w-auto brightness-200 group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-500 transition-all duration-500 ease-out group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-6">
            <button className="hidden sm:block text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Login</button>
            <button className="bg-primary text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 md:py-2.5 px-4 md:px-6 rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 active:scale-95 shrink-0 flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Start Trial
            </button>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white border border-white/10 rounded-xl glass hover:bg-white/5 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-[49] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>

        <aside className={`absolute top-0 right-0 w-[280px] h-full bg-zinc-950 border-l border-white/10 p-8 pt-24 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-white hover:text-white transition-colors flex items-center gap-4 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-[10px] text-zinc-800 group-hover:text-blue-500 transition-colors">0{index + 1}</span>
                {item.label}
              </Link>
            ))}
            <div className="w-full h-px bg-white/5 my-4"></div>
            <button className="w-full py-4 text-center text-sm font-bold text-white uppercase tracking-widest bg-zinc-900 border border-white/10 rounded-2xl hover:bg-zinc-800 transition-colors">
              Login
            </button>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Header;
