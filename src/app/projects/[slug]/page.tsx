import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projectsData } from '@/data/projects';
import { ProjectHeader } from '@/components/projects/ProjectHeader';
import { ArchitectureView } from '@/components/projects/ArchitectureView';
import { ProjectNav } from '@/components/projects/ProjectNav';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const baseUrl = 'https://www.erbibeksah.com.np';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const projectUrl = `${baseUrl}/projects/${project.slug}/`;

  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.title} | Bibek Sah`,
      description: project.tagline,
      url: projectUrl,
      siteName: 'Bibek Sah',
      type: 'article',
      images: [
        {
          url: `${baseUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Bibek Sah`,
      description: project.tagline,
      images: [`${baseUrl}${project.image}`],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : undefined;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : undefined;

  // JSON-LD structured data for Google software / tech article
  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    url: `${baseUrl}/projects/${project.slug}/`,
    image: `${baseUrl}${project.image}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cross-platform',
    description: project.overview,
    author: {
      '@type': 'Person',
      name: 'Bibek Kumar Sah',
      url: baseUrl,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <article className="min-h-screen py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectHeader project={project} />
          <ArchitectureView project={project} />
          <ProjectNav prevProject={prevProject} nextProject={nextProject} />
        </div>
      </article>
    </>
  );
}
