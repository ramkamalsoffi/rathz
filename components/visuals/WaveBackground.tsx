'use client';

import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const WaveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();

  // Map scroll progress to wave speed or direction factor
  const speedFactor = useTransform(scrollYProgress, [0, 1], [1, 2]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawLine = (y: number, color: string, alpha: number, offset: number, amplitude: number, frequency: number) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 2; // Thicker lines for better glow

      ctx.shadowBlur = 15;
      ctx.shadowColor = color;

      for (let x = 0; x <= canvas.width; x += 10) {
        // Dynamic direction factor based on scroll
        const scrollOffset = scrollYProgress.get() * 1200; 
        const dx = (x + scrollOffset * (offset + 1)) * frequency;
        const dy = Math.sin(dx + time + offset) * amplitude;
        
        if (x === 0) {
          ctx.moveTo(x, y + dy);
        } else {
          ctx.lineTo(x, y + dy);
        }
      }

      ctx.stroke();
    };

    const animate = () => {
      time += 0.015 * speedFactor.get();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create many more lines for that "fiber-optic" look
      const linesCount = 20; 
      const baseAlpha = 0.6; 

      for (let i = 0; i < linesCount; i++) {
        const offset = i * (Math.PI / 10);
        const y = canvas.height * 0.5 + (i - linesCount / 2) * 35;
        const color = i % 3 === 0 ? '#00f7ff' : i % 3 === 1 ? '#9d00ff' : '#ff00d4'; 
        
        drawLine(
          y,
          color,
          (baseAlpha - (i * 0.02)) * 0.4, 
          offset,
          60 + i * 12,
          0.0012 + i * 0.0001
        );
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speedFactor, scrollYProgress]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-[1] pointer-events-none bg-[#030303] overflow-hidden"
    >
      {/* Intense background radial glows */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"></div>
      
      <canvas 
        ref={canvasRef} 
        className="block relative z-10"
      />
      
      {/* Noise filter overlay for premium feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 filter contrast-150 brightness-150 mix-blend-overlay z-20"></div>
    </div>
  );
};

export default WaveBackground;
