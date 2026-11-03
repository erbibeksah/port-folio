import { Hero } from '@/components/sections/Hero';
import { LiveStatusTicker } from '@/components/interactive/LiveStatusTicker';
import { StoryEthos } from '@/components/sections/StoryEthos';
import { ProjectsGallery } from '@/components/sections/ProjectsGallery';
import { InteractiveTechConsole } from '@/components/interactive/InteractiveTechConsole';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { SkillsMatrix } from '@/components/sections/SkillsMatrix';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <LiveStatusTicker />
      <StoryEthos />
      <ProjectsGallery />
      <InteractiveTechConsole />
      <ExperienceTimeline />
      <SkillsMatrix />
      <ContactSection />
    </main>
  );
}
