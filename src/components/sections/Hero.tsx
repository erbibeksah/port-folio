'use client';

import React from 'react';
import Image from 'next/image';
import { Download, ArrowDown, MapPin, CheckCircle, Mail, Sparkles, ShieldCheck, Trophy } from 'lucide-react';
import { profileData } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { GsapReveal } from '@/components/ui/GsapReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-4 md:pt-10 md:pb-6 overflow-hidden">
      {/* Ambient Hero Background from original site */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center filter blur-[1px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080b11] via-[#080b11]/70 to-[#080b11]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Content (7 cols) */}
          <div className="lg:col-span-7 text-left">
            <GsapReveal delay={0.05} yOffset={20}>
              {/* Location & Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111726]/90 text-xs text-slate-300 mb-5 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Kathmandu, Nepal
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-400" /> Open to Opportunities
                </span>
              </div>
            </GsapReveal>

            <GsapReveal delay={0.15} yOffset={30}>
              {/* Urban Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.08] mb-5">
                Hi, I&apos;m <span className="text-emerald-400">Bibek Kumar Sah</span>.
                <span className="block text-2xl sm:text-4xl lg:text-5xl text-slate-300 font-bold mt-2">
                  Software Engineer &amp; .NET Specialist
                </span>
              </h1>
            </GsapReveal>

            <GsapReveal delay={0.25} yOffset={30}>
              {/* Natural Human Copy */}
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-7 max-w-2xl font-normal">
                With 3+ years of experience across the{' '}
                <strong className="text-slate-200 font-semibold">.NET ecosystem (ASP.NET Core)</strong>,{' '}
                <strong className="text-slate-200 font-semibold">Microsoft SQL Server</strong> database
                optimization, and hands-on{' '}
                <strong className="text-slate-200 font-semibold">vulnerability assessments (VAPT)</strong>. Currently
                building AI exam proctoring and video streaming CDN solutions at Darvilab.
              </p>
            </GsapReveal>

            <GsapReveal delay={0.35} yOffset={25}>
              {/* Rounded-full Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <a
                  href="/Bibek_Kumar_Sah_Resume.pdf"
                  download="Bibek_Kumar_Sah_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download CV (PDF)</span>
                </a>

                <Button
                  asLink
                  href="#projects"
                  variant="secondary"
                  size="md"
                  className="hover:-translate-y-0.5 transition-transform"
                >
                  <span>View Projects</span>
                  <ArrowDown className="w-4 h-4" />
                </Button>

                <Button
                  asLink
                  href="#contact"
                  variant="outline"
                  size="md"
                  className="hover:-translate-y-0.5 transition-transform"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Contact</span>
                </Button>
              </div>
            </GsapReveal>

            <GsapReveal delay={0.45} yOffset={25}>
              {/* Stat Chips with uniform heights, pristine typography, zero border stroke, and deep dark obsidian surface */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {/* Chip 1 */}
                <div className="group bg-[#0b0f17] rounded-2xl p-4 hover:bg-[#0e141f] hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between">
                  <div className="h-8 flex items-baseline whitespace-nowrap">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
                      <AnimatedCounter value={3} suffix="+" duration={1.5} />
                    </span>
                    <span className="text-xs font-sans text-emerald-500/80 ml-1.5 font-normal">Yrs</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1.5 font-medium whitespace-nowrap group-hover:text-slate-300 transition-colors">
                    Industrial Exp
                  </div>
                </div>

                {/* Chip 2 */}
                <div className="group bg-[#0b0f17] rounded-2xl p-4 hover:bg-[#0e141f] hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between">
                  <div className="h-8 flex items-baseline whitespace-nowrap">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
                      <AnimatedCounter value={9.15} decimals={2} duration={2} />
                    </span>
                    <span className="text-xs text-slate-500 ml-1">/10</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1.5 font-medium whitespace-nowrap group-hover:text-slate-300 transition-colors">
                    B.Tech CGPA
                  </div>
                </div>

                {/* Chip 3 - Fancy Hackathon Rank */}
                <div className="group bg-[#0b0f17] rounded-2xl p-4 hover:bg-[#0e141f] hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between">
                  <div className="h-8 flex items-baseline whitespace-nowrap">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">
                      <AnimatedCounter value={2} suffix="nd" duration={1.6} />
                    </span>
                    <span className="text-xs font-sans text-amber-400/90 ml-1.5 font-normal flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-amber-400 inline" /> Place
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1.5 font-medium whitespace-nowrap group-hover:text-slate-300 transition-colors">
                    Hackathon Award
                  </div>
                </div>

                {/* Chip 4 */}
                <div className="group bg-[#0b0f17] rounded-2xl p-4 hover:bg-[#0e141f] hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between">
                  <div className="h-8 flex items-center gap-1.5 whitespace-nowrap">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-100">OWASP</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1.5 font-medium whitespace-nowrap group-hover:text-slate-300 transition-colors">
                    VAPT Defense
                  </div>
                </div>
              </div>
            </GsapReveal>
          </div>

          {/* Profile Visual (5 cols) with Floating Animation */}
          <div className="lg:col-span-5 flex justify-center">
            <GsapReveal delay={0.2} yOffset={35} className="w-full max-w-sm">
              <div className="animate-float bg-[#0b0f17] rounded-3xl p-5 shadow-2xl shadow-black/50 hover:shadow-emerald-500/10 transition-shadow">
                {/* Photo container with crystal clear visibility */}
                <div className="relative w-full aspect-[4/4.8] rounded-2xl overflow-hidden bg-slate-900 mb-4 shadow-inner">
                  <Image
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Subtle edge illumination - zero face obscuring */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Status chip */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200 bg-[#080b11]/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Darvilab Pvt. Ltd.
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Software Engineer</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-100 text-lg tracking-tight">{profileData.name}</h3>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-full font-semibold">
                      B.Tech
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Engineering reliable backend and security solutions from Kathmandu. Focused on clean architecture and high-availability systems.
                  </p>

                  <div className="pt-3 flex items-center justify-between text-xs text-slate-400">
                    <span>RK University (2020-2024)</span>
                    <a
                      href="/Bibek_Kumar_Sah_Resume.pdf"
                      download="Bibek_Kumar_Sah_Resume.pdf"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" /> Resume PDF
                    </a>
                  </div>
                </div>
              </div>
            </GsapReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
