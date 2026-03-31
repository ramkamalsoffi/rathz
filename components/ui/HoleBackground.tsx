"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoleBackgroundProps {
  className?: string;
  dotColor?: string;
  dotSize?: number;
  gap?: number;
  maskSize?: number;
}

export const HoleBackground: React.FC<HoleBackgroundProps> = ({
  className,
  dotColor = "rgba(255, 255, 255, 0.2)",
  dotSize = 1.2,
  gap = 24,
  maskSize = 500,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end feel
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const backgroundStyle = {
    backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
    backgroundSize: `${gap}px ${gap}px`,
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "absolute inset-0 z-0 overflow-hidden bg-black/20",
        className
      )}
    >
      {/* 1. Underlying static grid (Always visible, very subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={backgroundStyle}
      />

      {/* 2. Interactive Spotlight Layer (Revealed by Mask) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          ...backgroundStyle,
          WebkitMaskImage: `radial-gradient(${maskSize}px circle at var(--x) var(--y), black, transparent)`,
          maskImage: `radial-gradient(${maskSize}px circle at var(--x) var(--y), black, transparent)`,
          // Use CSS variables updated by Framer Motion for the mask position
          // @ts-ignore
          "--x": springX,
          "--y": springY,
        } as any}
      />

      {/* 3. Mouse-following Glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(${maskSize / 1.5}px circle at var(--x) var(--y), rgba(37,99,235,0.2) 0%, transparent 100%)`,
          // @ts-ignore
          "--x": springX,
          "--y": springY,
        } as any}
      />
    </motion.div>
  );
};

export default HoleBackground;
