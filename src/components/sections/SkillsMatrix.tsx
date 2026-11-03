import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { skillsData } from '@/data/skills';
import { Card } from '@/components/ui/Card';

export const SkillsMatrix: React.FC = () => {
  return (
    <SectionContainer
      id="skills"
      badge="Technical Expertise"
      title="Skills & Engineering Competencies"
      subtitle="Proven technical capabilities spanning backend systems, offensive/defensive security, databases, cloud CI/CD, and modern reactive interfaces."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((group, idx) => (
          <Card key={idx} className="flex flex-col justify-between">
            <div>
              <div className="mb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight">
                  {group.category}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                {group.description}
              </p>

              {/* Skills badges without border stroke, rounded-full */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`inline-flex items-center text-xs font-mono px-3 py-1 rounded-full transition-colors ${
                      skill.highlight
                        ? 'bg-emerald-500/15 text-emerald-300 font-semibold'
                        : 'bg-slate-800/60 text-slate-300'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};
