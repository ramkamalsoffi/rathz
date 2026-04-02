"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

export default function FAQWithSpiral() {
  const spiralRef = useRef<HTMLDivElement | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Spiral configuration
  const [cfg, setCfg] = useState({
    points: 700,
    dotRadius: 1.8,
    duration: 3.0,
    color: "#0545B1",
    gradient: "ocean" as
      | "none"
      | "rainbow"
      | "sunset"
      | "ocean"
      | "fire"
      | "neon"
      | "pastel"
      | "grayscale",
    pulseEffect: true,
    opacityMin: 0.25,
    opacityMax: 0.9,
    sizeMin: 0.5,
    sizeMax: 1.4,
    background: "transparent",
  });

  // Gradient presets
  const gradients: Record<string, string[]> = useMemo(
    () => ({
      none: [],
      rainbow: ["#ff0000", "#ff9900", "#ffff00", "#00ff00", "#0099ff", "#6633ff"],
      sunset: ["#ff0000", "#ff9900", "#ffcc00"],
      ocean: ["#0066ff", "#00ccff", "#00ffcc"],
      fire: ["#ff0000", "#ff6600", "#ffcc00"],
      neon: ["#ff00ff", "#00ffff", "#ffff00"],
      pastel: ["#ffcccc", "#ccffcc", "#ccccff"],
      grayscale: ["#ffffff", "#999999", "#333333"],
    }),
    []
  );

  // --- Dev "tests" (runtime assertions) ------------------------------------
  // These are lightweight checks of key invariants; they don't affect users.
  useEffect(() => {
    try {
      console.assert(Array.isArray(gradients.none) && gradients.none.length === 0, "Gradient 'none' must be an empty array");
      console.assert(cfg.sizeMin <= cfg.sizeMax, "sizeMin should be <= sizeMax");
      console.assert(cfg.opacityMin <= cfg.opacityMax, "opacityMin should be <= opacityMax");
      // Search filter sanity check
      const sample = [
        { q: "Alpha", a: "Lorem" },
        { q: "Beta", a: "Ipsum yes" },
      ];
      const filtered = sample.filter(({ q, a }) => (q + a).toLowerCase().includes("yes"));
      console.assert(filtered.length === 1, "Filter should match one item containing 'yes'");
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === "h") setPanelOpen((v) => !v);
      if (k === "r") randomize();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Generate spiral SVG and mount
  useEffect(() => {
    if (!spiralRef.current) return;

    const SIZE = 560; // larger presence
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    const N = cfg.points;
    const DOT = cfg.dotRadius;
    const CENTER = SIZE / 2;
    const PADDING = 4;
    const MAX_R = CENTER - PADDING - DOT;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", String(SIZE));
    svg.setAttribute("height", String(SIZE));
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);

    // Gradient
    if (cfg.gradient !== "none") {
      const defs = document.createElementNS(svgNS, "defs");
      const g = document.createElementNS(svgNS, "linearGradient");
      g.setAttribute("id", "spiralGradient");
      g.setAttribute("gradientUnits", "userSpaceOnUse");
      g.setAttribute("x1", "0%");
      g.setAttribute("y1", "0%");
      g.setAttribute("x2", "100%");
      g.setAttribute("y2", "100%");
      gradients[cfg.gradient].forEach((color, idx, arr) => {
        const stop = document.createElementNS(svgNS, "stop");
        stop.setAttribute("offset", `${(idx * 100) / (arr.length - 1)}%`);
        stop.setAttribute("stop-color", color);
        g.appendChild(stop);
      });
      defs.appendChild(g);
      svg.appendChild(defs);
    }

    for (let i = 0; i < N; i++) {
      const idx = i + 0.5;
      const frac = idx / N;
      const r = Math.sqrt(frac) * MAX_R;
      const theta = idx * GOLDEN_ANGLE;
      const x = CENTER + r * Math.cos(theta);
      const y = CENTER + r * Math.sin(theta);

      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", x.toFixed(3));
      c.setAttribute("cy", y.toFixed(3));
      c.setAttribute("r", String(DOT));
      c.setAttribute("fill", cfg.gradient === "none" ? cfg.color : "url(#spiralGradient)");
      c.setAttribute("opacity", "0.6");

      if (cfg.pulseEffect) {
        const animR = document.createElementNS(svgNS, "animate");
        animR.setAttribute("attributeName", "r");
        animR.setAttribute("values", `${DOT * cfg.sizeMin};${DOT * cfg.sizeMax};${DOT * cfg.sizeMin}`);
        animR.setAttribute("dur", `${cfg.duration}s`);
        animR.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
        animR.setAttribute("repeatCount", "indefinite");
        animR.setAttribute("calcMode", "spline");
        animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
        c.appendChild(animR);

        const animO = document.createElementNS(svgNS, "animate");
        animO.setAttribute("attributeName", "opacity");
        animO.setAttribute("values", `${cfg.opacityMin};${cfg.opacityMax};${cfg.opacityMin}`);
        animO.setAttribute("dur", `${cfg.duration}s`);
        animO.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
        animO.setAttribute("repeatCount", "indefinite");
        animO.setAttribute("calcMode", "spline");
        animO.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
        c.appendChild(animO);
      }

      svg.appendChild(c);
    }

    spiralRef.current.innerHTML = "";
    spiralRef.current.appendChild(svg);
  }, [cfg, gradients]);

  // Randomizer with contrast awareness (b/w forward)
  const randomize = () => {
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    const lightColors = ["#ffffff"];
    const darkColors = ["#222222", "#111111"];
    const useLightBg = Math.random() > 0.5;

    setCfg((c) => ({
      ...c,
      points: Math.floor(rand(300, 1600)),
      dotRadius: rand(0.8, 3.2),
      duration: rand(1.2, 7.5),
      pulseEffect: Math.random() > 0.35,
      opacityMin: rand(0.1, 0.4),
      opacityMax: rand(0.6, 1.0),
      sizeMin: rand(0.4, 0.9),
      sizeMax: rand(1.2, 2.2),
      background: useLightBg ? "#f5f5f5" : "#000000",
      color: useLightBg
        ? darkColors[Math.floor(Math.random() * darkColors.length)]
        : lightColors[Math.floor(Math.random() * lightColors.length)],
      gradient:
        Math.random() > 0.6
          ? (["rainbow", "ocean", "grayscale", "neon"] as const)[
              Math.floor(Math.random() * 4)
            ]
          : "none",
    }));
  };

  // FAQ content (edit freely)
  const faqs = [
    {
      q: "What is an HRMS software?",
      a: "HRMS combines key HR tasks like attendance, internal chat, and employee management into a single unified platform.",
    },
    {
      q: "Is data stored in the cloud?",
      a: "Yes, all Rathz data is securely stored in the cloud with industry-standard encryption and regular backups.",
    },
    {
      q: "Do I need technical knowledge to use Rathz?",
      a: "Not at all. Rathz is designed to be intuitive and easy to use for HR teams, managers, and employees — with zero technical expertise needed.",
    },
    {
      q: "How is Rathz different from other HR software?",
      a: "Most HR tools only manage people. Rathz manages people, tasks, performance, and communication — all in one place. It's a complete workforce operating system, not just an HR tool.",
    },
    {
      q: "Can we customize Rathz for our company's specific HR policies?",
      a: "Yes. Rathz allows you to configure leave policies, attendance rules, and workflows according to your company's specific requirements — not a one-size-fits-all approach.",
    },
  ];

  const filtered = query
    ? faqs.filter(({ q, a }) => (q + a).toLowerCase().includes(query.toLowerCase()))
    : faqs;

  return (
    <div
      className="relative w-full overflow-hidden text-white"
      style={{ backgroundColor: cfg.background }}
    >
      {/* Background Spiral */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1),rgba(255,255,255,0.1)_60%,transparent_75%)]"
        style={{ mixBlendMode: "screen" }}
      >
        <div ref={spiralRef} />
      </div>

      {/* Layout */}
      <div className="relative mx-auto max-w-5xl px-6 pt-0 md:pt-8 pb-6 md:pb-12">
        {/* Header */}
        <header className="mb-4 md:mb-12 flex items-end justify-between border-b border-white/20 pb-2 md:pb-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">FAQ</h1>
            <p className="mt-2 text-sm md:text-base text-blue-500 font-bold uppercase tracking-widest">
              Everything you need to know about Rathz
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="relative">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {filtered.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i + 1} />
            ))}
          </div>
        </section>

        {/* Footer removed for the section version */}
      </div>

      {/* Control Panel Hidden */}
    </div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 glass p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={open}
      >
        <div className="flex items-baseline gap-3">
          <span className="text-xs text-white/40">{String(index).padStart(2, "0")}</span>
          <h3 className="text-base md:text-lg font-semibold leading-tight">{q}</h3>
        </div>
        <span className="ml-4 text-white/60 transition group-hover:text-white">{open ? "–" : "+"}</span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.4,0,.2,1)] ${open ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="text-sm text-white/70">{a}</p>
        </div>
      </div>
      {/* Hover halo */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100">
        <div
          className="absolute -inset-1 rounded-2xl border border-white/10"
          style={{ maskImage: "radial-gradient(180px_180px_at_var(--x,50%)_var(--y,50%),white,transparent)" }}
        />
      </div>
    </div>
  );
}

function Slider({
  label,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="mb-1 flex items-center justify-between">
        <span>{label}</span>
        <span className="tabular-nums text-white/50">{value.toFixed(2)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full"
      />
    </label>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between">
      <span>{label}</span>
      <button
        onClick={() => onChange(!value)}
        className={`h-6 w-10 rounded-full border border-white/20 transition ${value ? "bg-white" : "bg-transparent"}`}
        aria-pressed={value}
      >
        <span className={`block h-5 w-5 translate-x-0.5 rounded-full bg-black transition ${value ? "translate-x-4" : "translate-x-0"}`} />
      </button>
    </label>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <div className="mb-1">{label}</div>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-white/20 bg-black px-3 py-2 text-xs outline-none"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50">▾</span>
      </div>
    </label>
  );
}
