import Link from 'next/link';
import { getToolsByCategory } from '@/lib/tools';

export const metadata = {
  title: 'Image Generation Tools | HauseResource',
  description: 'Best AI image generation tools for designers and creators.',
};

export default function ImageGenerationPage() {
  const tools = getToolsByCategory('image-gen');

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
            <Link href="/comparisons" className="text-foreground-muted hover:text-primary transition-colors">Compare</Link>
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
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Image Generation Tools</h1>
          <p className="text-foreground-muted max-w-2xl">Create stunning visuals with AI. Perfect for designers, marketers, and content creators.</p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-8">Quick Comparison</h2>
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
                  <tr key={tool.id} className="border-b border-border hover:bg-surface/50 transition-colors">
                    <td className="py-4 px-4 text-foreground font-medium text-sm">{tool.name}</td>
                    <td className="py-4 px-4 text-foreground-muted text-sm">{tool.pricing}</td>
                    <td className="py-4 px-4 text-foreground-muted text-sm hidden sm:table-cell">{tool.bestFor[0]}</td>
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
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 text-center text-sm text-foreground-muted">
        <p className="mb-2">Made by <span className="text-foreground font-medium">Hause Collective</span></p>
        <p>Learning AI tools that actually work.</p>
      </footer>
    </div>
  );
}

function ToolCard({ tool }: { tool: any }) {
  return (
    <a
      href={tool.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-surface border border-border rounded-lg p-6 hover:border-primary hover:shadow-card-hover transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary-glow to-transparent" />
      
      <div className="relative">
        <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
        <p className="text-sm text-foreground-muted mb-6">{tool.description}</p>
        
        <div className="space-y-4 text-xs">
          <div>
            <p className="text-foreground-muted uppercase tracking-widest mb-2">Best For</p>
            <div className="flex flex-wrap gap-2">
              {tool.bestFor.map((use: string) => (
                <span key={use} className="px-2 py-1 bg-surface-hover border border-border rounded text-foreground text-xs">
                  {use}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-foreground-muted uppercase tracking-widest mb-1">Pricing</p>
            <p className="text-foreground font-medium">{tool.pricing}</p>
          </div>
          
          <div>
            <p className="text-foreground-muted uppercase tracking-widest mb-1">Commission</p>
            <p className="text-primary font-medium">{tool.commissionRate}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
