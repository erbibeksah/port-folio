import React from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/types/portfolio';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectNavProps {
  prevProject?: ProjectItem;
  nextProject?: ProjectItem;
}

export const ProjectNav: React.FC<ProjectNavProps> = ({ prevProject, nextProject }) => {
  return (
    <div className="pt-8 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prevProject ? (
        <Link
          href={`/projects/${prevProject.slug}`}
          className="group p-5 rounded-2xl bg-[#0b0f17] hover:bg-[#0e141f] transition-colors flex items-center gap-3.5 shadow-xl shadow-black/40"
        >
          <ArrowLeft className="w-5 h-5 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
          <div className="text-left">
            <div className="text-[11px] font-mono text-slate-400 uppercase">Previous Case Study</div>
            <div className="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
              {prevProject.title}
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextProject && (
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group p-5 rounded-2xl bg-[#0b0f17] hover:bg-[#0e141f] transition-colors flex items-center justify-between text-right sm:col-start-2 shadow-xl shadow-black/40"
        >
          <div className="text-right flex-1 mr-3">
            <div className="text-[11px] font-mono text-slate-400 uppercase">Next Case Study</div>
            <div className="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
              {nextProject.title}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};
