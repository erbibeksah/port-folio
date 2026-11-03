import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { experienceData, certificatesData, achievementsData } from '@/data/experience';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { Download, Award, Trophy, GraduationCap, Briefcase } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const workExperience = experienceData.filter((item) => item.type === 'Full-time' || item.type === 'Internship');
  const education = experienceData.filter((item) => item.type === 'Education');

  return (
    <SectionContainer
      id="experience"
      badge="Career & Credentials"
      title="Work Experience & Education"
      subtitle="A detailed record of my production engineering roles, academic achievements, and industry certifications."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Work Experience (7 cols) */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2.5 tracking-tight">
              <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <span>Work Experience</span>
            </h3>
            <a
              href="/Bibek_Kumar_Sah_Resume.pdf"
              download="Bibek_Kumar_Sah_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          <div className="space-y-2">
            {workExperience.map((exp, idx) => (
              <TimelineItem
                key={exp.id}
                role={exp.role}
                organization={exp.company}
                location={exp.location}
                period={`${exp.startDate} - ${exp.endDate}`}
                type={exp.type}
                summary={exp.summary}
                bullets={exp.achievements}
                skills={exp.technologies}
                isLast={idx === workExperience.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Education, Certifications & Achievements (5 cols) */}
        <div className="lg:col-span-5 space-y-10">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2.5 tracking-tight">
              <div className="p-2 rounded-full bg-cyan-500/10 text-cyan-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span>Education</span>
            </h3>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-[#0b0f17] rounded-2xl p-6 shadow-2xl shadow-black/40 hover:bg-[#0e141f] transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-bold text-slate-100 text-base tracking-tight">{edu.role}</h4>
                      <div className="text-xs text-cyan-400 font-medium mt-0.5">
                        {edu.company} <span className="text-slate-500">• {edu.location}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/70 px-3 py-1 rounded-full">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>

                  {edu.grade && (
                    <div className="inline-block my-2 px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-mono font-bold text-emerald-400">
                      {edu.grade}
                    </div>
                  )}

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{edu.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Certifications (No border strokes) */}
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2.5 tracking-tight">
              <div className="p-2 rounded-full bg-amber-500/10 text-amber-400">
                <Award className="w-4 h-4" />
              </div>
              <span>Certificates</span>
            </h3>

            <div className="grid grid-cols-1 gap-2.5">
              {certificatesData.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b0f17] rounded-xl p-3.5 flex items-center justify-between text-xs hover:bg-[#0e141f] transition-colors shadow-lg shadow-black/30"
                >
                  <div>
                    <div className="font-semibold text-slate-200">{cert.title}</div>
                    <div className="text-[11px] text-slate-400">{cert.issuer}</div>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2.5 tracking-tight">
              <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-400">
                <Trophy className="w-4 h-4" />
              </div>
              <span>Key Achievement</span>
            </h3>

            {achievementsData.map((ach, idx) => (
              <div
                key={idx}
                className="bg-[#0b0f17] rounded-2xl p-5 shadow-2xl shadow-black/40 hover:bg-[#0e141f] transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-slate-100 text-sm tracking-tight">{ach.title}</h4>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    {ach.rank}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 mb-2">
                  {ach.organizer} • {ach.year}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{ach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
