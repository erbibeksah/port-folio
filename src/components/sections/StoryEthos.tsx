import React from 'react';
import Image from 'next/image';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { ethosData } from '@/data/ethos';
import { profileData } from '@/data/profile';
import { Card } from '@/components/ui/Card';
import { Quote, HeartHandshake, ShieldCheck, Cpu, User, Compass } from 'lucide-react';

export const StoryEthos: React.FC = () => {
  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'heart-handshake':
        return <HeartHandshake className="w-5 h-5 text-amber-400" />;
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      default:
        return <Compass className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <SectionContainer
      id="about"
      badge="About Me"
      title="Background, Culture & Engineering Philosophy"
      subtitle="A personal look at my journey from Siraha, Nepal, to engineering secure, high-performance web systems."
    >
      {/* Featured Quote Callout (No border stroke, soft solid dark surface) */}
      <div className="relative bg-[#0b0f17] rounded-2xl p-6 sm:p-8 mb-12 shadow-2xl shadow-black/40">
        <Quote className="w-8 h-8 text-emerald-500/25 mb-2" />
        <p className="text-base sm:text-xl font-serif italic text-slate-200 leading-relaxed">
          &ldquo;{ethosData.quote}&rdquo;
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-mono">
          <span>— Bibek Kumar Sah</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Software Engineer</span>
        </div>
      </div>

      {/* Two-Column Story Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Journey */}
        <Card className="flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row gap-5 items-start mb-5">
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden shrink-0 shadow-lg bg-slate-900">
                <Image
                  src="/images/profile-img.jpg"
                  alt={profileData.name}
                  fill
                  sizes="120px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-400">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 tracking-tight">
                    {ethosData.storyTitle}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {ethosData.personalStory}
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {ethosData.rootsAndHeritage}
            </p>
          </div>
        </Card>

        {/* How I Work with Teams */}
        <Card className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-full bg-cyan-500/10 text-cyan-400">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 tracking-tight">
                How I Work &amp; Collaborate
              </h3>
            </div>

            <div className="space-y-4">
              {ethosData.howIWork.map((item, idx) => (
                <div key={idx} className="bg-[#080b11]/50 rounded-xl p-3.5 hover:bg-[#080b11]/80 transition-colors">
                  <div className="text-sm font-bold text-slate-200 mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* 3 Core Strengths */}
      <div>
        <h3 className="text-xl font-bold text-slate-200 mb-6 tracking-tight">
          Core Engineering Focus
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ethosData.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#0b0f17] rounded-2xl p-6 hover:bg-[#0e141f] transition-all flex flex-col justify-between shadow-2xl shadow-black/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-slate-800/80">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                    {pillar.badge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-100 mb-2 tracking-tight">{pillar.title}</h4>
                <p className="text-xs text-emerald-400/90 italic mb-3 font-mono">
                  &ldquo;{pillar.quote}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
