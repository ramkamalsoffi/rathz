import React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

export const BorderBeam = ({
  className,
  duration = 4,
  borderWidth = 2,
  colorFrom = "#0545B1",
  colorTo = "#7402B1",
}: BorderBeamProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
      style={{
        "--border-width": `${borderWidth}px`,
      } as React.CSSProperties}
    >
      {/* The background bloom layer - outside the mask for true glow aura */}
      <div 
        className="absolute inset-[-20%] animate-spin blur-2xl opacity-15 pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${colorFrom} 60deg, ${colorTo} 120deg, transparent 200deg)`,
          animationDuration: `${duration}s`,
        }}
      />

      <div 
        className="absolute inset-0 rounded-[inherit] [border:var(--border-width)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(white,white)]"
      >
        {/* The primary sharp beam */}
        <div 
          className="absolute inset-[-1000%] animate-spin"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${colorFrom} 60deg, ${colorTo} 120deg, transparent 200deg)`,
            animationDuration: `${duration}s`,
          }}
        />
        
        {/* The secondary glow layer - inside the border */}
        <div 
          className="absolute inset-[-1000%] animate-spin blur-[4px] opacity-70"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${colorFrom} 60deg, ${colorTo} 120deg, transparent 200deg)`,
            animationDuration: `${duration}s`,
          }}
        />
      </div>
    </div>
  );
};
