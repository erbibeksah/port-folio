'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/types/portfolio';
import { VideoModal } from '@/components/interactive/VideoModal';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Activity,
  Terminal,
  Video,
} from 'lucide-react';

interface ProjectVideoSectionProps {
  project: ProjectItem;
}

export const ProjectVideoSection: React.FC<ProjectVideoSectionProps> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(180);
  const [hasVideoError, setHasVideoError] = useState<boolean>(false);
  const [simulatedStep, setSimulatedStep] = useState<number>(0);
  const [isTheatreOpen, setIsTheatreOpen] = useState<boolean>(false);

  // Simulated playback when raw mp4 isn't yet provided
  useEffect(() => {
    if (!hasVideoError || !isPlaying) return;

    const timer = setInterval(() => {
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

    return () => clearInterval(timer);
  }, [hasVideoError, isPlaying, duration]);

  const isExternalEmbed =
    project.videoUrl &&
    (project.videoUrl.includes('youtube.com') ||
      project.videoUrl.includes('youtu.be') ||
      project.videoUrl.includes('loom.com') ||
      project.videoUrl.includes('vimeo.com'));

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('loom.com/share/')) {
      return url.replace('/share/', '/embed/');
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const simulationSteps = [
    { title: 'Core Runtime Initialization & DB Handshake', status: '200 OK - 14ms' },
    { title: 'WAF Rule Evaluation & Request Authentication', status: 'VERIFIED - ZERO VULNERABILITIES' },
    { title: 'Data Processing Engine & Query Acceleration', status: 'OPTIMIZED - 25% FASTER' },
    { title: 'Real-Time WebSocket Sync & Audit Telemetry', status: 'STREAMING STABLE - 99.9%' },
  ];

  return (
    <div className="bg-[#0b0f17] rounded-3xl p-6 sm:p-9 shadow-2xl shadow-black/40">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-400">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
              Live System Walkthrough &amp; Demonstration
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-0.5">
              Visual walkthrough of core application features, system architecture, and performance.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {project.videoDuration && (
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/40">
              {project.videoDuration}
            </span>
          )}
          <button
            onClick={() => setIsTheatreOpen(true)}
            className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-300 hover:text-white bg-[#080b11] hover:bg-slate-800 transition-colors flex items-center gap-1.5"
          >
            <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Theatre Mode</span>
          </button>
        </div>
      </div>

      {/* Video Screen Area */}
      <div
        ref={containerRef}
        className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-2xl shadow-black/60 group"
      >
        {isExternalEmbed ? (
          <iframe
            src={getEmbedUrl(project.videoUrl!)}
            title={`${project.title} demo`}
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
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onError={() => setHasVideoError(true)}
          />
        ) : (
          /* Architectural Simulation Showcase */
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#070a10] via-[#0b0f17] to-[#040609] overflow-hidden select-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-400">
                <Terminal className="w-4 h-4" />
                <span>{project.slug}.run_stream()</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                <span>TELEMETRY STREAM ACTIVE</span>
              </div>
            </div>

            {/* Center Visual */}
            <div className="relative z-10 my-auto text-center px-4">
              <button
                onClick={togglePlay}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:scale-105 transition-all shadow-xl shadow-emerald-500/20 mb-4"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
              </button>
              <h4 className="text-lg sm:text-xl font-bold text-slate-100 mb-2">
                {project.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-4">
                Architecture simulation &bull; {simulationSteps[simulatedStep]?.title}
              </p>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#080b11] text-emerald-400">
                {simulationSteps[simulatedStep]?.status}
              </div>
            </div>

            {/* Bottom helper */}
            <div className="relative z-10 text-center">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono text-slate-400 bg-[#080b11]/80">
                Place video at <code className="text-cyan-300">public{project.videoUrl}</code> to play your custom screen recording
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Video Controls Bar */}
      {!isExternalEmbed && (
        <div className="mt-4 p-4 rounded-2xl bg-[#080b11] flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-400 w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <div className="relative flex-1">
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
                aria-label="Replay"
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

            <button
              onClick={() => setIsTheatreOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full Screen Theatre</span>
            </button>
          </div>
        </div>
      )}

      {/* Modal Theatre */}
      <VideoModal
        project={project}
        isOpen={isTheatreOpen}
        onClose={() => setIsTheatreOpen(false)}
      />
    </div>
  );
};

