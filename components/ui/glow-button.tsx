"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative group cursor-pointer inline-flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-950 px-8 py-3 sm:py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/5 shadow-2xl",
          className
        )}
        {...props}
      >
        <BorderBeam 
          duration={4}
          colorFrom="#0545B1"
          colorTo="#7402B1"
          borderWidth={2}
        />
        
        <span className="relative z-10 text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-white">
          {children}
        </span>
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
