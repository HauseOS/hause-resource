import Link from 'next/link';
import { getToolsByCategory } from '@/lib/tools';

export const metadata = {
  title: 'Tool Comparisons | HauseResource',
  description: 'Compare AI tools side-by-side to find the perfect fit.',
};

export default function ComparisonsPage() {
  const imageGenTools = getToolsByCategory('image-gen');
  const writingTools = getToolsByCategory('writing');
  const videoTools = getToolsByCategory('video');
  const codeTools = getToolsByCategory('code');

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border backdrop-blur-sm bg-background/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm border border-primary bg-surface flex items-center justify-center text-primary font-bold text-sm">
              H
            </div>
            <span className="font-serif font-bold text-lg">HauseResource</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm">
            <Link href="/" className="text-foreground-muted hover:text-primary transition-colors">Home</Link>
            <span className="text-foreground">Compare</span>
            <a href="https://www.youtube.com/@HauseCollective" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-primary transition-colors">YouTube</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-primary hover:text-primary-hover transition-colors text-sm font-medium mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Compare Tools</h1>
          <p className="text-foreground-muted max-w-2xl">Side-by-side comparison across all categories to help you choose.</p>
        </div>
      </section>

      {/* Tables */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Image Generation */}
          <ComparisonTable
            title="🎨 Image Generation"
            tools={imageGenTools}
          />

          {/* Writing */}
          <ComparisonTable
            title="✍️ Writing & Content"
            tools={writingTools}
          />

          {/* Video */}
          <ComparisonTable
            title="🎬 Video & Audio"
            tools={videoTools}
          />

          {/* Code */}
          <ComparisonTable
            title="💻 Code & Automation"
            tools={codeTools}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Need more tools?</h2>
          <p className="text-foreground-muted mb-8">Browse tools by category to see detailed descriptions and more recommendations.</p>
          <Link href="/" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors">
            View Categories
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 text-center text-sm text-foreground-muted">
        <p className="mb-2">Made by <span className="text-foreground font-medium">Hause Collective</span></p>
        <p>Learning AI tools that actually work.</p>
      </footer>
    </div>
  );
}

function ComparisonTable({ title, tools }: { title: string; tools: any[] }) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold mb-6">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 font-semibold text-foreground text-sm">Tool</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground text-sm">Price</th>
              <th className="text-left py-4 px-4 font-semibold text-foreground text-sm hidden sm:table-cell">Best For</th>
              <th className="text-center py-4 px-4 font-semibold text-foreground text-sm">Commission</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr
                key={tool.id}
                className="border-b border-border hover:bg-surface/50 transition-colors"
              >
                <td className="py-4 px-4 text-foreground font-medium text-sm">
                  <a
                    href={tool.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {tool.name}
                  </a>
                </td>
                <td className="py-4 px-4 text-foreground-muted text-sm">{tool.pricing}</td>
                <td className="py-4 px-4 text-foreground-muted text-sm hidden sm:table-cell">
                  {tool.bestFor[0]}
                </td>
                <td className="py-4 px-4 text-center">
                  <a
                    href={tool.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover transition-colors font-medium text-sm"
                  >
                    {tool.commissionRate}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
