import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/motion/ScrollProgress';

export const metadata: Metadata = {
  metadataBase: new URL('https://assetpropertysolution.net'),
  title: {
    default: 'Asset Property Solution LLC — Property Preservation, Los Angeles',
    template: '%s | Asset Property Solution LLC',
  },
  description:
    'Property preservation and field services for lenders, servicers, investors and property managers. Inspections, securing, clean-outs, grounds and repairs — photo-documented, with 24–48h dispatch from Los Angeles.',
  keywords: [
    'property preservation',
    'field services',
    'property inspections',
    'REO services',
    'mortgage inspections',
    'Los Angeles',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://assetpropertysolution.net',
    siteName: 'Asset Property Solution LLC',
    title: 'Asset Property Solution LLC — Property Preservation, Los Angeles',
    description:
      'Property preservation and field services for banks, lenders, realtors, investors and property managers. Photo-documented reporting with 24–48h dispatch, nationwide coverage.',
    images: [
      {
        url: '/images/hero-sunset.jpg',
        width: 1920,
        height: 1309,
        alt: 'Craftsman home with lit windows at dusk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asset Property Solution LLC — Property Preservation, Los Angeles',
    description:
      'Field services for lenders, investors and property managers. Inspected, secured and documented — with 24–48h dispatch.',
    images: ['/images/hero-sunset.jpg'],
  },
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://assetpropertysolution.net/#organization',
  name: 'Asset Property Solution LLC',
  url: 'https://assetpropertysolution.net',
  logo: 'https://assetpropertysolution.net/images/logo.jpeg',
  image: 'https://assetpropertysolution.net/images/hero-sunset.jpg',
  description:
    'Property preservation and field services company providing inspections, securing and lock changes, debris clean-outs, lawn care, winterization and repairs with photo-documented reporting.',
  foundingDate: '2024',
  email: 'info@assetproperty.net',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Los Angeles, CA' },
    { '@type': 'Country', name: 'United States' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-paper font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[95] focus:bg-ink focus:px-5 focus:py-3 focus:text-xs focus:uppercase focus:tracking-widest focus:text-paper"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
