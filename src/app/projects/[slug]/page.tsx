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
  const seoTitle = `${project.title} — Case Study`;
  const seoDescription = project.tagline.length > 150 ? `${project.tagline.slice(0, 147)}...` : project.tagline;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      project.title,
      ...project.techStack,
      'Bibek Kumar Sah',
      'Engineering Case Study',
      'Software Architecture',
      'Production System Design',
      project.category,
    ],
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.title} — Case Study | Bibek Kumar Sah`,
      description: seoDescription,
      url: projectUrl,
      siteName: 'Bibek Kumar Sah',
      type: 'article',
      images: [
        {
          url: `${baseUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: `${project.title} - Architecture & System Case Study`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Case Study | Bibek Kumar Sah`,
      description: seoDescription,
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

  // JSON-LD structured data: SoftwareApplication schema
  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    url: `${baseUrl}/projects/${project.slug}/`,
    image: `${baseUrl}${project.image}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cross-platform',
    description: project.overview,
    featureList: project.features.join('; '),
    author: {
      '@type': 'Person',
      name: 'Bibek Kumar Sah',
      url: `${baseUrl}/`,
      sameAs: [
        'https://linkedin.com/in/erbibeksah',
        'https://github.com/erbibeksah',
      ],
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  // JSON-LD BreadcrumbList schema (enables Google Rich Snippet Breadcrumbs)
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Featured Projects',
        item: `${baseUrl}/#projects`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${baseUrl}/projects/${project.slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
