import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { GsapReveal } from '@/components/ui/GsapReveal';

interface SectionContainerProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  badge,
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <section id={id} className={`py-8 md:py-12 relative ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GsapReveal yOffset={30}>
          <div className="mb-8 md:mb-12">
            {badge && (
              <div className="mb-3">
                <Badge variant="emerald">{badge}</Badge>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </GsapReveal>
        <GsapReveal delay={0.15} yOffset={35}>
          {children}
        </GsapReveal>
      </div>
    </section>
  );
};
