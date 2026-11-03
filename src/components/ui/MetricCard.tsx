import React from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, value, className = '' }) => {
  return (
    <div
      className={`bg-[#0b0f17] rounded-2xl p-4 md:p-5 shadow-xl shadow-black/40 transition-all ${className}`}
    >
      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 tracking-tight">
        {value}
      </div>
      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1.5">
        {label}
      </div>
    </div>
  );
};
