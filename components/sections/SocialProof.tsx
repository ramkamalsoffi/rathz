'use client';

import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We used to spend 3 hours every Monday syncing on tasks. Rathz cut that to 15 minutes. Our managers finally know what's happening without chasing anyone.",
    name: "Rahul Sharma",
    company: "TechCraft Solutions",
    role: "Operations Head",
    color: "from-blue-600 to-blue-400",
    bg: "#1a2a4a",
  },
  {
    quote: "Before Rathz, our HR team was drowning in spreadsheets. Now attendance, leaves, and tasks are all in one place. It's like we hired an extra HR manager — but at zero cost.",
    name: "Priya Menon",
    company: "FinServe India",
    role: "HR Director",
    color: "from-purple-600 to-purple-400",
    bg: "#1e1a3a",
  },
  {
    quote: "Rathz gave us visibility we never had. I can see who's doing what, who's overloaded, and who needs support — all in real time. Game changer for a growing startup.",
    name: "Arjun Nair",
    company: "ScaleUp Ventures",
    role: "Founder & CEO",
    color: "from-cyan-600 to-cyan-400",
    bg: "#0e2a32",
  },
  {
    quote: "The onboarding was ridiculously easy. We had our entire 80-person team on Rathz within a day. No IT support. No training sessions. Just works.",
    name: "Sneha Patel",
    company: "Retail Connect Pvt Ltd",
    role: "General Manager",
    color: "from-emerald-600 to-emerald-400",
    bg: "#0e2a1e",
  },
  {
    quote: "We replaced our WhatsApp task chaos with Rathz's Kanban boards. Deadlines are finally met, blockers are spotted early, and accountability is built in.",
    name: "Vikram Iyer",
    company: "DevMatrix Labs",
    role: "CTO",
    color: "from-orange-600 to-orange-400",
    bg: "#2a1e0a",
  },
];

const SIDE_COUNT = 2;
const INTERVAL_MS = 3500;

interface CardConfig {
  x: number;
  yPercent: number;
  rotateY: number;
  rotateZ: number;
  scale: number;
  opacity: number;
  zIndex: number;
}

function getConfig(offset: number): CardConfig {
  const abs = Math.abs(offset);
  const dir = offset >= 0 ? 1 : -1;

  if (offset === 0) {
    return { x: 0, yPercent: 0, rotateY: 0, rotateZ: 0, scale: 1, opacity: 1, zIndex: 20 };
  }
  if (abs === 1) {
    return {
      x: dir * 260,
      yPercent: 4,
      rotateY: dir * -32,
      rotateZ: dir * 9,
      scale: 0.78,
      opacity: 0.6,
      zIndex: 10,
    };
  }
  // abs === 2
  return {
    x: dir * 460,
    yPercent: 10,
    rotateY: dir * -52,
    rotateZ: dir * 18,
    scale: 0.58,
    opacity: 0.28,
    zIndex: 4,
  };
}

const SocialProof = () => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = testimonials.length;

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Compute shortest circular offset with symmetric balance
  const getOffset = (i: number, center: number) => {
    let offset = i - center;
    while (offset > total / 2) offset -= total;
    while (offset < -total / 2) offset += total;
    return offset;
  };

  // GSAP animate all cards to their correct positions for the given activeIdx
  const animateCards = useCallback((activeIdx: number, instant = false) => {
    testimonials.forEach((_, i) => {
      const el = cardRefs.current[i];
      if (!el) return;

      const offset = (() => {
        let o = i - activeIdx;
        while (o > total / 2) o -= total;
        while (o < -total / 2) o += total;
        return o;
      })();

      const isVisible = Math.abs(offset) <= SIDE_COUNT;
      const cfg = getConfig(offset);

      const props = {
        x: cfg.x,
        y: `${cfg.yPercent}%`,
        rotateY: cfg.rotateY,
        rotateZ: cfg.rotateZ,
        scale: cfg.scale,
        opacity: isVisible ? cfg.opacity : 0,
        zIndex: isVisible ? cfg.zIndex : 0,
        transformOrigin: '50% 50%',
        transformStyle: 'preserve-3d' as const,
      };

      if (instant) {
        gsap.set(el, props);
      } else {
        gsap.to(el, {
          ...props,
          duration: 0.75,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    });
  }, [total]);

  // Set initial positions instantly on mount
  useLayoutEffect(() => {
    animateCards(0, true);
  }, []);

  // Animate whenever active changes
  useEffect(() => {
    animateCards(active);
  }, [active, animateCards]);

  // Auto-play
  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, INTERVAL_MS);
  }, [total]);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (!isHovered) startTimer();
    else stopTimer();
    return stopTimer;
  }, [isHovered, startTimer, stopTimer]);

  const goTo = (idx: number) => {
    setActive(idx);
    // Restart timer on manual interaction
    startTimer();
  };

  return (
    <section className="py-12 md:py-20 bg-transparent relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
          <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-500">Testimonial</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
        </div>

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-6xl font-[1000] text-white tracking-tighter leading-tight">
            Our Clients Love to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Use Rathz
            </span>
          </h2>
        </div>

        <p className="text-zinc-500 text-base md:text-lg mb-12 font-medium tracking-wide">
          500+ Indian Businesses Already Made the Switch
        </p>

        {/* GSAP Fan Carousel */}
        <div
          className="relative w-full max-w-5xl h-[480px] md:h-[520px] flex items-center justify-center overflow-visible"
          style={{ perspective: '1400px' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              onClick={() => {
                const offset = getOffset(i, active);
                if (offset < 0) goTo((active - 1 + total) % total);
                else if (offset > 0) goTo((active + 1) % total);
              }}
              className="absolute w-[300px] md:w-[380px] lg:w-[420px] select-none"
              style={{ cursor: i === active ? 'default' : 'pointer' }}
            >
              {/* Card */}
              <div
                className="rounded-[2rem] p-7 md:p-9 min-h-[380px] flex flex-col justify-between border border-white/10 shadow-2xl glass"
                style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)' }}
              >
                {/* Active card: glowing border */}
                {i === active && (
                  <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-transparent to-purple-500/20 pointer-events-none" />
                )}

                {/* Quote icon */}
                <div className="flex justify-end mb-5">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br ${t.color} shadow-lg`}>
                    <Quote className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="flex-1 font-bold leading-relaxed tracking-tight text-white text-base md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-7 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex-shrink-0 bg-gradient-to-br ${t.color} flex items-center justify-center shadow-md`}>
                    <span className="text-white font-black text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-black text-sm tracking-tight">{t.name}</p>
                    <p className="text-zinc-500 text-xs font-bold tracking-wide mt-0.5">{t.role} · {t.company}</p>
                  </div>
                </div>

                {/* Active card: bottom glow line */}
                {i === active && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Nav dots */}
        <div className="flex items-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-400 rounded-full ${i === active
                  ? 'w-8 h-2 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                  : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-48 h-px bg-zinc-800 mt-6 overflow-hidden rounded-full">
          <div
            className="h-full bg-blue-500 transition-all duration-[3500ms] ease-linear rounded-full"
            style={{ width: `${((active + 1) / total) * 100}%` }}
          />
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          {[
            { dot: true, text: 'Rated #1 Workforce Tool for Indian SMBs' },
            { dot: true, text: '4.8/5 Average Customer Rating' },
            { dot: true, text: 'ISO-compliant Data Security' },
            { emoji: '🇮🇳', text: 'Made in India, for India' },
          ].map((b, i) => (
            <div key={i} className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/5 text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              {b.dot && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />}
              {b.emoji && <span className="text-base leading-none">{b.emoji}</span>}
              {b.text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
