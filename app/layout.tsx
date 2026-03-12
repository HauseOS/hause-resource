import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HauseResource — The stack for lean creative businesses',
  description: 'Curated AI tools, honest reviews, and situation guides for lean creative businesses. No fluff — just the tools worth paying for. From Hause Collective.',
  metadataBase: new URL('https://hause-resource.vercel.app'),
  openGraph: {
    title: 'HauseResource — Your stack. No fluff.',
    description: 'Curated AI tools and situation guides for lean creative businesses. We\'ve done the testing — these are the ones worth paying for.',
    url: 'https://hause-resource.vercel.app',
    siteName: 'HauseResource',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HauseResource — Your stack. No fluff.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HauseResource — Your stack. No fluff.',
    description: 'Curated AI tools and situation guides for lean creative businesses. We\'ve done the testing — these are the ones worth paying for.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
