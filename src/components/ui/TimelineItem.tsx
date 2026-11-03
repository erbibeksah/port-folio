'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Badge } from './Badge';

interface TimelineItemProps {
  role: string;
  organization: string;
  location: string;
  period: string;
  type?: 'Full-time' | 'Contract' | 'Education' | 'Internship';
  summary: string;
  bullets: string[];
  skills?: string[];
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  role,
  organization,
  location,
  period,
  type = 'Full-time',
  summary,
  bullets,
  skills = [],
  isLast = false,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Parallax & Ripple scroll state
  const [parallaxY, setParallaxY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (itemRef.current) {
            const rect = itemRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if item is in view
            const inView = rect.top < windowHeight * 0.9 && rect.bottom > windowHeight * 0.1;
            setIsInView(inView);

            // Compute dynamic parallax offset
            const viewportCenter = windowHeight / 2;
            const itemCenter = rect.top + rect.height / 2;
            const distance = (viewportCenter - itemCenter) * 0.08;
            const clampedY = Math.max(-25, Math.min(25, distance));
            setParallaxY(clampedY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div ref={itemRef} className="relative pl-7 sm:pl-10 pb-10 group">
      {/* Timeline track line with gradient flow */}
      {!isLast && (
        <div
          className={`absolute left-[11px] top-6 bottom-0 w-[2px] transition-all duration-700 ${
            isInView ? 'bg-gradient-to-b from-emerald-400 via-emerald-500/50 to-slate-800' : 'bg-slate-800/80'
          }`}
        />
      )}

      {/* Timeline Node with Concentric Scroll Ripple Effect */}
      <div className="absolute left-0 top-1.5 w-6 h-6 flex items-center justify-center">
        {/* Animated Ripple Rings on Scroll */}
        <span className="absolute w-7 h-7 rounded-full bg-emerald-500/40 timeline-ripple-1 pointer-events-none" />
        <span className="absolute w-7 h-7 rounded-full bg-emerald-400/30 timeline-ripple-2 pointer-events-none" />
        <span className="absolute w-7 h-7 rounded-full bg-cyan-400/25 timeline-ripple-3 pointer-events-none" />

        {/* Center Node Dot */}
        <div className="relative w-4 h-4 rounded-full bg-[#080b11] border-2 border-emerald-400 flex items-center justify-center z-10 shadow-md shadow-emerald-500/60">
          <div
            className={`w-2 h-2 rounded-full bg-emerald-400 transition-all duration-300 ${
              isInView ? 'scale-125 bg-emerald-300' : 'scale-100'
            }`}
          />
        </div>
      </div>

      {/* Content Card with Smooth Parallax Float & Mouse Ripple Layer */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translateY(${parallaxY}px)`,
          transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
        }}
        className="relative bg-[#0b0f17] rounded-3xl p-6 sm:p-7 shadow-2xl shadow-black/40 overflow-hidden hover:bg-[#0e141f] hover:-translate-y-1 transition-all duration-300 will-change-transform"
      >
        {/* Interactive Mouse Ripple Glow */}
        {mousePos && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.16), transparent 70%)`,
            }}
          />
        )}

        {/* Parallax Year Watermark in Background */}
        <div
          style={{
            transform: `translateY(${-parallaxY * 0.9}px)`,
          }}
          className="absolute right-4 bottom-2 text-6xl sm:text-7xl font-extrabold font-mono text-slate-800/15 pointer-events-none select-none tracking-tighter transition-transform duration-200"
        >
          {period.slice(0, 4)}
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight">{role}</h4>
              <div className="text-sm font-semibold text-emerald-400 mt-0.5">
                {organization}{' '}
                <span className="text-slate-500 font-normal">• {location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-300 bg-slate-800/80 px-3.5 py-1 rounded-full">
                {period}
              </span>
              <Badge variant={type === 'Education' ? 'cyan' : type === 'Internship' ? 'amber' : 'emerald'}>
                {type}
              </Badge>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-4 font-normal">{summary}</p>

          <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-400">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-emerald-400 mt-0.5 select-none font-bold">▹</span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          {skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-slate-300 bg-slate-800/50 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
