import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HauseResource — The stack for lean creative businesses',
  description: 'Curated tools, honest reviews, and situation guides for lean creative businesses. From Hause Collective.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
