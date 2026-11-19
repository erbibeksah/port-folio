import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ConnectFab } from '@/components/connect/ConnectFab';
import { CommandPalette } from '@/components/interactive/CommandPalette';

const baseUrl = 'https://www.erbibeksah.com.np';

export const viewport: Viewport = {
  themeColor: '#080b11',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Bibek Kumar Sah | Software Engineer (.NET & Next.js) | Nepal',
    template: '%s | Bibek Kumar Sah',
  },
  description:
    'Software Engineer based in Kathmandu, Nepal. 3+ years in ASP.NET Core, Next.js, Django, multi-tenant architectures, and VAPT application security.',
  keywords: [
    'Bibek Kumar Sah',
    'Bibek Sah',
    'Er. Bibek Sah',
    'erbibeksah',
    'Software Engineer Nepal',
    'Software Engineer Kathmandu',
    'ASP.NET Core Developer',
    '.NET Specialist Nepal',
    'Full Stack Developer Nepal',
    'Next.js 16 Developer',
    'Django REST Framework',
    'Multi-Tenant Architecture',
    'Application Security Engineer',
    'VAPT Specialist',
    'Database Optimization',
    'PostgreSQL Specialist',
    'Kaazii Developer',
    'Darvilab Software Engineer',
  ],
  authors: [{ name: 'Bibek Kumar Sah', url: baseUrl }],
  creator: 'Bibek Kumar Sah',
  publisher: 'Bibek Kumar Sah',
  alternates: {
    canonical: `${baseUrl}/`,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Bibek Kumar Sah | Software Engineer & Systems Architect',
    description:
      'Software Engineer based in Kathmandu, Nepal. 3+ years engineering enterprise systems in ASP.NET Core, Next.js, Django, multi-tenant architectures, and VAPT security.',
    url: `${baseUrl}/`,
    siteName: 'Bibek Kumar Sah',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: `${baseUrl}/images/profile-img2.jpg`,
        width: 717,
        height: 1080,
        alt: 'Bibek Kumar Sah - Software Engineer & Systems Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@erbibeksah',
    creator: '@erbibeksah',
    title: 'Bibek Kumar Sah | Software Engineer',
    description:
      'Software Engineer based in Kathmandu, Nepal. 3+ years in ASP.NET Core, Next.js, Django, multi-tenant architectures, and application security.',
    images: [`${baseUrl}/images/profile-img2.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    other: {
      'msvalidate.01': 'BBC64C03892C16107158511EE5CF6B00',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Google Official ProfilePage & Person Structured Data (Schema.org)
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${baseUrl}/#profilepage`,
    url: `${baseUrl}/`,
    name: 'Bibek Kumar Sah Portfolio',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: 'Bibek Kumar Sah - Official Portfolio & Engineering Case Studies',
      description:
        'Software Engineer specializing in .NET ecosystem, Next.js, Django, multi-tenant systems, application security (VAPT), and database optimization.',
    },
    mainEntity: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Bibek Kumar Sah',
      alternateName: ['Bibek Sah', 'Er. Bibek Sah', 'erbibeksah'],
      jobTitle: 'Software Engineer',
      description:
        'Software Engineer with 3+ years of experience specializing in ASP.NET Core, Next.js, Django REST Framework, multi-tenant architectures, and OWASP application security.',
      worksFor: {
        '@type': 'Organization',
        name: 'Darvilab Pvt. Ltd.',
        url: 'https://darvilab.com',
      },
      alumnusOf: {
        '@type': 'CollegeOrUniversity',
        name: 'RK University',
        url: 'https://rku.ac.in',
      },
      url: `${baseUrl}/`,
      email: 'mailto:er.bibeksah@gmail.com',
      telephone: '+977-9862967315',
      image: `${baseUrl}/images/profile-img2.jpg`,
      sameAs: [
        'https://linkedin.com/in/erbibeksah',
        'https://github.com/erbibeksah',
        'https://x.com/erbibeksah',
        'https://erbibeksah.com.np',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kathmandu',
        addressCountry: 'Nepal',
      },
      knowsAbout: [
        'ASP.NET Core',
        'C#',
        '.NET Framework',
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Django REST Framework',
        'Python',
        'PostgreSQL',
        'Microsoft SQL Server',
        'Multi-Tenant Architecture',
        'Vulnerability Assessment and Penetration Testing (VAPT)',
        'OWASP Top 10 Security',
        'Redis & WebSockets',
        'Docker',
        'CI/CD Pipelines',
        'MinIO S3 Storage',
      ],
      knowsLanguage: ['English', 'Nepali', 'Hindi', 'Maithili'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: `${baseUrl}/`,
    name: 'Bibek Kumar Sah Portfolio',
    description:
      'Official portfolio of Bibek Kumar Sah. Software Engineer specializing in ASP.NET Core, Next.js, Django, multi-tenancy, and application security.',
    publisher: {
      '@id': `${baseUrl}/#person`,
    },
    inLanguage: 'en-US',
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#080b11] text-slate-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300 relative">
        <div className="ambient-canvas" aria-hidden="true" />
        <Navbar />
        <div className="flex-1 pt-16 relative z-10">{children}</div>
        <Footer />
        <ConnectFab />
        <CommandPalette />
      </body>
    </html>
  );
}
