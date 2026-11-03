import React from 'react';
import { ProjectItem } from '@/types/portfolio';
import { MetricCard } from '@/components/ui/MetricCard';
import { Shield, Server, CheckCircle2, Layers } from 'lucide-react';

interface ArchitectureViewProps {
  project: ProjectItem;
}

export const ArchitectureView: React.FC<ArchitectureViewProps> = ({ project }) => {
  return (
    <div className="space-y-12">
      {/* 1. Verified Impact Metrics */}
      <div>
        <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>Key Verified Outcomes</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((metric, idx) => (
            <MetricCard key={idx} label={metric.label} value={metric.value} />
          ))}
        </div>
      </div>

      {/* 2. Overview & Architecture Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Architecture Story (8 cols) - No border strokes */}
        <div className="lg:col-span-8 space-y-8">
          {/* Overview */}
          <div className="bg-[#0b0f17] rounded-3xl p-6 sm:p-9 shadow-2xl shadow-black/40">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3.5 flex items-center gap-2.5 tracking-tight">
              <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-400">
                <Server className="w-5 h-5" />
              </div>
              <span>The Architectural Challenge</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* How It Was Built */}
          <div className="bg-[#0b0f17] rounded-3xl p-6 sm:p-9 shadow-2xl shadow-black/40">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3.5 flex items-center gap-2.5 tracking-tight">
              <div className="p-2 rounded-full bg-cyan-500/10 text-cyan-400">
                <Layers className="w-5 h-5" />
              </div>
              <span>Engineering Execution &amp; Deep Dive</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              {project.architectureStory}
            </p>

            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3.5">
              Core Technical Features:
            </h4>
            <ul className="space-y-3">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Engineering */}
          {project.securityHighlights && project.securityHighlights.length > 0 && (
            <div className="bg-[#0f1420] rounded-3xl p-6 sm:p-9 shadow-xl shadow-black/15">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3.5 flex items-center gap-2.5 tracking-tight">
                <div className="p-2 rounded-full bg-amber-500/10 text-amber-400">
                  <Shield className="w-5 h-5" />
                </div>
                <span>Security Hardening &amp; VAPT</span>
              </h3>
              <ul className="space-y-3">
                {project.securityHighlights.map((sec, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="text-amber-400 font-mono mt-0.5">✦</span>
                    <span className="leading-relaxed">{sec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tech Stack Sidebar (4 cols) - Border strokes removed */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0b0f17] rounded-3xl p-6 sm:p-7 shadow-2xl shadow-black/40">
            <h3 className="text-xs font-mono uppercase text-slate-300 tracking-wider mb-4">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-[#080b11] text-xs font-mono text-emerald-400 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#0b0f17] rounded-3xl p-6 text-xs text-slate-400 leading-relaxed shadow-2xl shadow-black/40">
            <div className="text-slate-200 font-bold mb-2 uppercase tracking-wider text-[11px] font-mono">
              Engineering Governance
            </div>
            This project follows strict code review guidelines, automated static code analysis, and regression verification before production deployment.
          </div>
        </div>
      </div>
    </div>
  );
};
