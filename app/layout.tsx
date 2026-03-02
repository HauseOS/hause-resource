import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/hause/Navigation';
import { Footer } from '@/components/hause/Footer';

export const metadata: Metadata = {
  title: 'HauseResource | Curated AI Tools for Builders',
  description: 'Discover the AI tools we actually use and recommend. Transparent affiliate links help us create better content.',
  keywords: 'AI tools, machine learning, design tools, writing tools, video tools, automation',
  authors: [{ name: 'Hause Collective' }],
  openGraph: {
    title: 'HauseResource | Curated AI Tools',
    description: 'Discover the AI tools we actually use and recommend.',
    url: 'https://hause-resource.vercel.app',
    siteName: 'HauseResource',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HauseResource',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HauseResource | Curated AI Tools',
    description: 'Discover the AI tools we actually use and recommend.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0908" />
      </head>
      <body className="bg-background text-foreground">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navigation />
        <main id="main-content" className="pt-[60px] min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
