import React from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/types/portfolio';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, ExternalLink, Calendar, Building, ShieldCheck } from 'lucide-react';

interface ProjectHeaderProps {
  project: ProjectItem;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div className="mb-12 pb-4">
      {/* Back button (Rounded-full, no border) */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-[#0b0f17] text-slate-300 hover:text-emerald-400 hover:bg-[#0e141f] transition-all mb-8 group shadow-md"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Projects</span>
      </Link>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge variant="cyan">{project.category}</Badge>
        <span className="text-slate-600 font-mono text-xs">•</span>
        <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5" /> Production Verified
        </span>
      </div>

      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1] mb-5">
        {project.title}
      </h1>

      <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
        {project.tagline}
      </p>

      {/* Project Meta details bar without stroke line */}
      <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 pt-4">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-slate-500" />
          <span>Timeline: {project.period}</span>
        </div>
        {project.client && (
          <div className="flex items-center gap-1.5">
            <Building className="w-4 h-4 text-slate-500" />
            <span>Organization: {project.client}</span>
          </div>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
          >
            <span>Live System</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};
