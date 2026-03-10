import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DM_Serif_Display } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/nav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HauseResource — The stack for lean creative businesses',
  description:
    'Curated tools, honest reviews, and situation guides for lean creative businesses. From Hause Collective.',
  openGraph: {
    title: 'HauseResource',
    description: 'The stack for lean creative businesses.',
    siteName: 'HauseResource',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-border mt-16">
          <div className="max-w-[1200px] mx-auto px-7 py-7 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-5">
              <span className="font-display text-sm text-muted">HauseResource</span>
              <nav className="flex gap-4">
                {['Guides', 'Tools', 'For Merchants'].map((l) => (
                  <a key={l} href="#" className="text-xs text-muted-2 hover:text-muted transition-colors">
                    {l}
                  </a>
                ))}
                <a href="https://hause.co" className="text-xs text-muted-2 hover:text-muted transition-colors">
                  Hause.co
                </a>
              </nav>
            </div>
            <span className="text-xs text-muted-2">© 2026 Hause Collective · Affiliate disclosure</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
