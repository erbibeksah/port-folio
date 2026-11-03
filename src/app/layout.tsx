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
    default: 'Bibek Sah',
    template: '%s | Bibek Sah',
  },
  description:
    'Software Engineer with 3+ years of experience in the .NET ecosystem, ASP.NET Core, application security (VAPT), and database optimization.',
  keywords: [
    'Bibek Sah',
    'Bibek Kumar Sah',
    'Software Engineer',
    'ASP.NET Core',
    '.NET Developer',
    'Application Security',
    'VAPT',
    'Kathmandu Nepal',
  ],
  authors: [{ name: 'Bibek Kumar Sah', url: baseUrl }],
  creator: 'Bibek Kumar Sah',
  alternates: {
    canonical: baseUrl,
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
    title: 'Bibek Sah | Software Engineer',
    description:
      'Software Engineer with 3+ years in ASP.NET Core, application security (VAPT), and database optimization.',
    url: baseUrl,
    siteName: 'Bibek Sah',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: `${baseUrl}/images/profile-img2.jpg`,
        width: 717,
        height: 1080,
        alt: 'Bibek Kumar Sah - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@erbibeksah',
    creator: '@erbibeksah',
    title: 'Bibek Sah | Software Engineer',
    description:
      'Software Engineer with 3+ years in ASP.NET Core, application security (VAPT), and database optimization.',
    images: [`${baseUrl}/images/profile-img2.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: 'Bibek Kumar Sah',
        alternateName: 'Bibek Sah',
        jobTitle: 'Software Engineer',
        worksFor: {
          '@type': 'Organization',
          name: 'Darvilab Pvt. Ltd.',
        },
        alumnusOf: {
          '@type': 'CollegeOrUniversity',
          name: 'RK University',
        },
        url: baseUrl,
        email: 'mailto:er.bibeksah@gmail.com',
        telephone: '+977-9862967315',
        image: `${baseUrl}/images/profile-img2.jpg`,
        sameAs: [
          'https://linkedin.com/in/erbibeksah',
          'https://github.com/erbibeksah',
          'https://erbibeksah.com.np',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kathmandu',
          addressCountry: 'Nepal',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Bibek Sah Portfolio',
        description:
          'Software Engineer specializing in .NET ecosystem, ASP.NET Core, application security (VAPT), and database optimization.',
        publisher: {
          '@id': `${baseUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
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
