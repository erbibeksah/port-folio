'use client';

import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import { ConnectModal } from './ConnectModal';

export const ConnectFab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#0f1420]/90 text-slate-100 shadow-2xl shadow-black/40 hover:bg-[#151c2e] hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-xl"
          aria-label="Connect With Me Quick Action"
        >
          {/* Subtle Pulse dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>

          <span className="text-xs font-bold tracking-tight text-slate-100 group-hover:text-emerald-300 transition-colors">
            Connect
          </span>

          <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/30 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      <ConnectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
