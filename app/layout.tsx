import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://assetpropertysolution.net'),
  title: {
    default: 'ASSET PROPERTY SOLUTION LLC | Property Preservation — Los Angeles, CA',
    template: '%s | ASSET PROPERTY SOLUTION LLC',
  },
  description:
    'Premier property preservation and field services company based in Los Angeles, CA. Inspections, securing, clean-outs, lawn care, winterization and repairs — photo-documented reports with 24–48h turnaround.',
  keywords: [
    'property preservation',
    'field services',
    'property inspections',
    'Los Angeles',
    'REO services',
    'mortgage inspections',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://assetpropertysolution.net',
    siteName: 'ASSET PROPERTY SOLUTION LLC',
    title: 'ASSET PROPERTY SOLUTION LLC | Property Preservation — Los Angeles, CA',
    description:
      'Property preservation and field services for banks, lenders, realtors, investors and property managers. Photo-documented reports with 24–48h dispatch, nationwide coverage.',
    images: [
      {
        url: '/images/hero-sunset.jpg',
        width: 1920,
        height: 1309,
        alt: 'Craftsman style home with glowing windows at dusk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASSET PROPERTY SOLUTION LLC | Property Preservation — Los Angeles, CA',
    description:
      'Property preservation and field services for banks, lenders, realtors, investors and property managers. Photo-documented reports with 24–48h dispatch.',
    images: ['/images/hero-sunset.jpg'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
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
  name: 'ASSET PROPERTY SOLUTION LLC',
  url: 'https://assetpropertysolution.net',
  logo: 'https://assetpropertysolution.net/images/logo.png',
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
      <body className="flex min-h-screen flex-col bg-ink font-sans text-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
