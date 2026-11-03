'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { projectsData } from '@/data/projects';
import { ProjectItem } from '@/types/portfolio';
import { VideoModal } from '@/components/interactive/VideoModal';
import { ArrowRight, ExternalLink, ShieldCheck, Play } from 'lucide-react';

export const ProjectsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedVideoProject, setSelectedVideoProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Full Stack Web', 'Enterprise .NET', 'AI & Streaming', 'DevOps & Cloud'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <SectionContainer
      id="projects"
      badge="Portfolio"
      title="Featured Engineering Projects"
      subtitle="Selected production systems I've architected and contributed to across .NET Core enterprise apps, AI proctoring, video CDNs, and CI/CD pipelines."
    >
      {/* Category Tabs (Rounded-full, no harsh stroke) */}
      <div className="flex flex-wrap items-center gap-2.5 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all active:scale-95 ${
              activeCategory === category
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-[#0f1420] text-slate-400 hover:text-slate-100 hover:bg-[#151c2e]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid (No border stroke, rich dark surface) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#0b0f17] rounded-3xl overflow-hidden flex flex-col justify-between hover:bg-[#0e141f] shadow-2xl shadow-black/40 transition-all duration-300"
          >
            <div>
              {/* Banner Image with high-contrast protective scrim & Video Play Trigger */}
              <div 
                className="relative w-full h-56 bg-slate-950 overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideoProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                {/* Dual-direction scrim: darkens top for badge, darkens bottom for metadata */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-black/30 to-black/60 pointer-events-none" />

                {/* High-Contrast Category Pill */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#080b11]/90 backdrop-blur-md text-cyan-300 shadow-lg shadow-black/40">
                    {project.category}
                  </span>
                </div>

                {/* Interactive Center Play Trigger Pill */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 group-hover:bg-emerald-500 backdrop-blur-md text-emerald-400 group-hover:text-slate-950 shadow-xl shadow-black/60 transition-all duration-300 transform group-hover:scale-110">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-slate-950 group-hover:bg-slate-950 group-hover:text-emerald-400 transition-colors">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </span>
                    <span className="text-xs font-mono font-bold tracking-wide">
                      Watch Walkthrough
                    </span>
                    {project.videoDuration && (
                      <span className="text-[10px] font-mono opacity-80 pl-1 border-l border-emerald-500/30 group-hover:border-slate-950/30">
                        {project.videoDuration.split(' ')[0]}
                      </span>
                    )}
                  </div>
                </div>

                {/* High-Contrast Metadata Pill */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs font-mono px-3.5 py-1.5 rounded-xl bg-[#080b11]/90 backdrop-blur-md shadow-md shadow-black/30">
                  <span className="text-slate-300 font-medium">{project.period}</span>
                  <span className="text-emerald-400 font-semibold">{project.client}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-2.5 tracking-tight">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {project.tagline}
                </p>

                {/* Metrics Highlight Pill (No border stroke) */}
                <div className="bg-[#080b11]/80 rounded-2xl p-4 mb-5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Key Achievements &amp; Outcomes</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-xs">
                        <div className="text-emerald-400 font-bold font-mono text-sm">{metric.value}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges (Rounded-full, no border) */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-slate-300 bg-slate-800/60 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link footer without stroke line */}
            <div className="p-6 md:p-8 pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors font-mono"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedVideoProject(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/60 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 font-mono text-[11px] font-semibold transition-all active:scale-95"
                >
                  <Play className="w-3 h-3 fill-current text-emerald-400" />
                  <span>Demo</span>
                </button>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Live link"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Video Walkthrough Modal */}
      <VideoModal
        project={selectedVideoProject}
        isOpen={!!selectedVideoProject}
        onClose={() => setSelectedVideoProject(null)}
      />
    </SectionContainer>
  );
};
