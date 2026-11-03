'use client';

import React, { useEffect, useRef, useState, useTransition } from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/types/portfolio';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  ExternalLink,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  Terminal,
} from 'lucide-react';

interface VideoModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(180); // default 3 min
  const [hasVideoError, setHasVideoError] = useState<boolean>(false);
  const [simulatedStep, setSimulatedStep] = useState<number>(0);

  // Reset state when project changes or modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsPlaying(true);
      setProgress(0);
      setCurrentTime(0);
      setHasVideoError(false);
      setSimulatedStep(0);
    } else {
      document.body.style.overflow = '';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, project]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Simulated playback timer for architectural walkthrough simulation when raw mp4 isn't yet provided
  useEffect(() => {
    if (!isOpen || !hasVideoError) return;

    let timer: NodeJS.Timeout | null = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          const next = prev + 1;
          setProgress((next / duration) * 100);
          setSimulatedStep(Math.floor((next / duration) * 4));
          return next;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isOpen, hasVideoError, isPlaying, duration]);

  if (!isOpen || !project) return null;

  const isExternalEmbed =
    project.videoUrl &&
    (project.videoUrl.includes('youtube.com') ||
      project.videoUrl.includes('youtu.be') ||
      project.videoUrl.includes('loom.com') ||
      project.videoUrl.includes('vimeo.com'));

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/') + '?autoplay=1';
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('loom.com/share/')) {
      return url.replace('/share/', '/embed/') + '?autoplay=1';
    }
    return url;
  };

  const togglePlay = () => {
    if (videoRef.current && !hasVideoError) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setCurrentTime(current);
      setDuration(total);
      setProgress((current / total) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setProgress(val);
    const newTime = (val / 100) * duration;
    setCurrentTime(newTime);
    if (videoRef.current && !hasVideoError) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const simulationSteps = [
    { title: 'Architecture Ingestion & Bootstrapping', status: 'COMPLETED - 200 OK', load: '12ms' },
    { title: 'Payload Decryption & WAF Security Scan', status: 'PASSED - ZERO ANOMALIES', load: '24ms' },
    { title: 'Distributed Cache Query & DB Stored Proc', status: 'EXECUTION COMPLETE', load: '18ms' },
    { title: 'Client Surface Live Event Broadcast', status: 'STREAMING ACTIVE', load: '4ms' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-2xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Modal Card - Zero border stroke, deep obsidian, soft elevation */}
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#0b0f17] rounded-3xl overflow-hidden shadow-2xl shadow-black/80"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080b11]">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              System Walkthrough &bull; {project.category}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-slate-400 bg-slate-800/60">
              {project.videoDuration || '3:00 min'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800 transition-colors"
            aria-label="Close walkthrough"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - 2 Columns: Video Screen (70%) + Meta Details (30%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          {/* Main Video Theatre (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-black relative">
            {/* Screen Container */}
            <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden bg-slate-950">
              {isExternalEmbed ? (
                <iframe
                  src={getEmbedUrl(project.videoUrl!)}
                  title={`${project.title} walkthrough`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : !hasVideoError && project.videoUrl ? (
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  poster={project.videoPoster || project.image}
                  className="w-full h-full object-contain"
                  playsInline
                  autoPlay
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  onError={() => setHasVideoError(true)}
                />
              ) : (
                /* Ultra-slick Interactive Architectural Simulation Player (if direct mp4 file not found) */
                <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#070a10] via-[#0b0f17] to-[#040609] overflow-hidden select-none">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                  {/* Top Status Readout */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Terminal className="w-4 h-4" />
                      <span>{project.slug}.run_stream()</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                      <span>TELEMETRY STREAM LIVE</span>
                    </div>
                  </div>

                  {/* Center Architectural Walkthrough Showcase */}
                  <div className="relative z-10 my-auto text-center px-4 py-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-4 shadow-lg shadow-emerald-500/10">
                      <Sparkles className="w-8 h-8 animate-pulse" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mb-6">
                      Interactive architectural execution walkthrough demonstrating production workflows, query pipeline execution, and performance benchmarks.
                    </p>

                    {/* Step Timeline Indicator */}
                    <div className="max-w-md mx-auto bg-[#080b11]/90 rounded-2xl p-4 shadow-lg shadow-black/40 text-left">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                        <span className="uppercase text-emerald-400 font-bold">
                          Phase {simulatedStep + 1} of 4:
                        </span>
                        <span className="text-slate-400 font-medium">
                          {simulationSteps[simulatedStep]?.load}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-slate-200 mb-1">
                        {simulationSteps[simulatedStep]?.title}
                      </div>
                      <div className="text-xs font-mono text-emerald-400">
                        {simulationSteps[simulatedStep]?.status}
                      </div>
                    </div>
                  </div>

                  {/* Helper notice */}
                  <div className="relative z-10 text-center">
                    <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-mono text-slate-400 bg-[#080b11]/80">
                      Drop real video into <code className="text-cyan-300">public{project.videoUrl}</code> or set Loom link in <code className="text-cyan-300">projects.ts</code>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Custom Video Controls (for HTML5 or simulated walkthrough) */}
            {!isExternalEmbed && (
              <div className="p-4 bg-[#080b11] flex flex-col gap-3">
                {/* Scrub Progress Bar */}
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-slate-400 w-10 text-right">
                    {formatTime(currentTime)}
                  </span>
                  <div className="relative flex-1 group">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="0.1"
                      value={progress}
                      onChange={handleSeek}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 w-10">
                    {formatTime(duration)}
                  </span>
                </div>

                {/* Control Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="p-2.5 rounded-full bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    <button
                      onClick={() => {
                        setCurrentTime(0);
                        setProgress(0);
                        if (videoRef.current) {
                          videoRef.current.currentTime = 0;
                          videoRef.current.play();
                          setIsPlaying(true);
                        }
                      }}
                      className="p-2.5 rounded-full text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800 transition-colors"
                      aria-label="Replay walkthrough"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-2.5 rounded-full text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800 transition-colors"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleFullscreen}
                      className="p-2.5 rounded-full text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800 transition-colors"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details Panel (lg:col-span-4) */}
          <div className="lg:col-span-4 p-6 sm:p-7 flex flex-col justify-between bg-[#0b0f17]">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-cyan-300 bg-cyan-950/40 font-semibold mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {project.tagline}
                </p>
              </div>

              {/* Verified Metrics Highlight */}
              <div className="bg-[#080b11] rounded-2xl p-4">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Key Verified Outcomes</span>
                </div>
                <div className="space-y-2.5">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">{metric.label}</span>
                      <span className="font-mono font-bold text-emerald-400">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Technologies &amp; Tools</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-300 bg-slate-800/60 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action CTA */}
            <div className="pt-6 mt-6 flex flex-col gap-2.5">
              <Link
                href={`/projects/${project.slug}`}
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#080b11] text-slate-300 hover:text-white hover:bg-slate-800 font-semibold text-xs tracking-wider transition-colors"
                >
                  <span>Visit Live System</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

