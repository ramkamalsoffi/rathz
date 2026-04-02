"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Ensure GSAP is aware of the environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sync ScrollTrigger with Lenis scroll events
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP's ticker to drive Lenis for perfect frame synchronization
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's own lag smoothing for better sync
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      ScrollTrigger.killAll();
    };
  }, []);

  return <>{children}</>;
}
