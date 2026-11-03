'use client';

import React, { useEffect, useState } from 'react';
import { Clock, Radio, Sparkles } from 'lucide-react';

export const LiveStatusTicker: React.FC = () => {
  const [kathmanduTime, setKathmanduTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kathmandu',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setKathmanduTime(formatter.format(new Date()));
      } catch {
        setKathmanduTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const marqueeItems = [
    { label: 'ASP.NET Core 8', category: 'Backend' },
    { label: 'OWASP Top 10 Hardened', category: 'Security' },
    { label: 'MSSQL Execution Plan Tuning', category: 'Database' },
    { label: 'AI Video CDN & Streaming', category: 'Distributed' },
    { label: 'Clean Architecture & CQRS', category: 'Design Pattern' },
    { label: 'Docker & CI/CD Pipelines', category: 'DevOps' },
    { label: 'Automated VAPT Mitigation', category: 'Security' },
    { label: 'Entity Framework Core', category: 'ORM' },
    { label: 'Next.js 15 & React 19', category: 'Frontend' },
  ];

  return (
    <div className="w-full relative z-20 py-4 bg-[#080b11]/90 backdrop-blur-md overflow-hidden">
      {/* Top Bar: Kathmandu Live Clock & Availability */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b0f17] text-slate-200 shadow-md">
            <Clock className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="font-mono font-semibold text-emerald-300">
              {kathmanduTime || '12:00:00 PM'}
            </span>
            <span className="text-slate-500 font-mono">NPT (Kathmandu)</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="hidden sm:inline text-slate-400 font-mono">UTC +5:45</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-medium">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Active Engineering Status:</span>
            <strong className="text-emerald-200">Open to Engagements</strong>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative flex overflow-x-hidden mask-gradient-x">
        <div className="flex shrink-0 animate-marquee items-center gap-3 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0f17] text-xs font-mono text-slate-300 hover:text-emerald-300 hover:bg-[#111726] transition-all cursor-default shadow-sm"
            >
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span className="font-semibold text-slate-200">{item.label}</span>
              <span className="text-[10px] text-slate-500 bg-[#080b11] px-2 py-0.5 rounded-full">
                {item.category}
              </span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-3 whitespace-nowrap" aria-hidden="true">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div
              key={`dup-${idx}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0f17] text-xs font-mono text-slate-300 hover:text-emerald-300 hover:bg-[#111726] transition-all cursor-default shadow-sm"
            >
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span className="font-semibold text-slate-200">{item.label}</span>
              <span className="text-[10px] text-slate-500 bg-[#080b11] px-2 py-0.5 rounded-full">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

