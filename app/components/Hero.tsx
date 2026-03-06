// components/Hero.tsx
"use client";
import { useEffect, useRef } from "react";
import { personalInfo } from "../data/data";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle / dot grid animation
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 80; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(167,139,250,0.25)";
        ctx.fill();
      });

      // Connect nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(167,139,250,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a78bfa]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-[#a78bfa]/30 rounded-full text-[#a78bfa] text-xs tracking-[0.2em] uppercase animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="font-display text-6xl md:text-8xl font-black tracking-tight text-white leading-none mb-6 animate-slide-up">
          {personalInfo.name.split(" ")[0]}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#6366f1]">
            {personalInfo.name.split(" ")[1]}
          </span>
        </h1>

        {/* Title */}
        <p className="text-gray-400 text-lg md:text-xl tracking-[0.15em] uppercase mb-10 animate-slide-up animation-delay-200">
          {personalInfo.title}
          <span className="text-[#a78bfa] mx-3">·</span>
          Kochi, Kerala
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up animation-delay-400">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#a78bfa] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
          >
            View Work
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-3 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
