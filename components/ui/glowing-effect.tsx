"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface GlowingEffectProps {
  blur?: number
  inactiveZoneSize?: number
  proximity?: number
  spread?: number
  variant?: "default" | "white"
  className?: string
  disabled?: boolean
}

export const GlowingEffect = ({
  blur = 0,
  inactiveZoneSize = 0.2,
  proximity = 120,
  spread = 20,
  variant = "default",
  className,
  disabled = false,
}: GlowingEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isTargetWithinContainer = useRef(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container || disabled) return

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove, disabled])

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-300 md:opacity-100",
        disabled ? "hidden" : "block",
        className
      )}
      style={
        {
          "--blur": `${blur}px`,
          "--spread": `${spread}px`,
          "--proximity": `${proximity}px`,
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
          "--inactive-zone-size": `${inactiveZoneSize}`,
          maskImage: `radial-gradient(circle var(--proximity) at var(--mouse-x) var(--mouse-y), white, transparent)`,
          WebkitMaskImage: `radial-gradient(circle var(--proximity) at var(--mouse-x) var(--mouse-y), white, transparent)`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit] border-[2px] border-transparent",
          variant === "default" && "border-blue-500/50",
          variant === "white" && "border-white/50"
        )}
        style={{
          maskImage: `conic-gradient(from 0deg at var(--mouse-x) var(--mouse-y), transparent 0%, white 10%, white 90%, transparent 100%)`,
          WebkitMaskImage: `conic-gradient(from 0deg at var(--mouse-x) var(--mouse-y), transparent 0%, white 10%, white 90%, transparent 100%)`,
        }}
      />
    </div>
  )
}
