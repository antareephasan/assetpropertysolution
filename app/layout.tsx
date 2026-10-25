import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-ink font-sans text-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
