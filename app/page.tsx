import Link from 'next/link';
import { getToolsByCategory } from '@/lib/tools';

export const metadata = {
  title: 'HauseResource | AI Tools for Builders',
  description: 'Curated AI tools we actually use and recommend. Transparent affiliate links.',
};

export default function Home() {
  const imageGenTools = getToolsByCategory('image-gen').slice(0, 4);
  const writingTools = getToolsByCategory('writing').slice(0, 4);
  const videoTools = getToolsByCategory('video').slice(0, 4);
  const codeTools = getToolsByCategory('code').slice(0, 3);

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
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/comparisons" className="text-foreground-muted hover:text-primary transition-colors">Compare</Link>
            <a href="https://www.youtube.com/@HauseCollective" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-primary transition-colors">YouTube</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 -top-40 -right-40 w-80 h-80 bg-primary-glow blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute inset-0 -bottom-40 -left-40 w-80 h-80 bg-primary-glow blur-3xl opacity-10 pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-foreground-muted mb-4">Curated Directory</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI Tools for <span className="text-primary">Builders</span>
          </h1>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            We've tested dozens of AI tools. Here are the ones we actually use and recommend. Transparent affiliate links help us keep the lights on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#tools" className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors">
              Explore Tools
            </Link>
            <Link href="/comparisons" className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-surface transition-colors">
              Compare All
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-foreground-muted">
            💰 <span className="text-foreground">Affiliate Transparency:</span> We earn commission on affiliate links. This doesn't affect your pricing. We only recommend tools we deeply believe in.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-widest text-foreground-muted mb-4">Explore Categories</p>
            <h2 className="font-serif text-4xl font-bold">Featured Tools</h2>
          </div>

          {/* Image Generation */}
          <div className="mb-20">
            <h3 className="font-serif text-2xl font-bold mb-6">🎨 Image Generation</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {imageGenTools.map((tool) => (
                <ToolTile key={tool.id} tool={tool} />
              ))}
            </div>
            <Link href="/image-generation" className="inline-block mt-6 text-primary hover:text-primary-hover transition-colors text-sm font-medium">
              View all → 
            </Link>
          </div>

          {/* Writing */}
          <div className="mb-20">
            <h3 className="font-serif text-2xl font-bold mb-6">✍️ Writing & Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {writingTools.map((tool) => (
                <ToolTile key={tool.id} tool={tool} />
              ))}
            </div>
            <Link href="/writing-content" className="inline-block mt-6 text-primary hover:text-primary-hover transition-colors text-sm font-medium">
              View all →
            </Link>
          </div>

          {/* Video */}
          <div className="mb-20">
            <h3 className="font-serif text-2xl font-bold mb-6">🎬 Video & Audio</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {videoTools.map((tool) => (
                <ToolTile key={tool.id} tool={tool} />
              ))}
            </div>
            <Link href="/video-audio" className="inline-block mt-6 text-primary hover:text-primary-hover transition-colors text-sm font-medium">
              View all →
            </Link>
          </div>

          {/* Code & Automation */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">💻 Code & Automation</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {codeTools.map((tool) => (
                <ToolTile key={tool.id} tool={tool} />
              ))}
            </div>
            <Link href="/code-automation" className="inline-block mt-6 text-primary hover:text-primary-hover transition-colors text-sm font-medium">
              View all →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface border border-border rounded-xl p-12 text-center hover:border-border-hover transition-colors">
            <h2 className="font-serif text-3xl font-bold mb-4">Compare Side-by-Side</h2>
            <p className="text-foreground-muted mb-8 leading-relaxed">
              See pricing, features, and affiliate rates for all tools in one place.
            </p>
            <Link href="/comparisons" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors">
              Browse All Tools
            </Link>
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

function ToolTile({ tool }: { tool: any }) {
  return (
    <a
      href={tool.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-surface border border-border rounded-lg p-6 hover:border-primary hover:shadow-card-hover transition-all duration-300 cursor-pointer"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary-glow to-transparent" />
      
      <div className="relative">
        <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
        <p className="text-sm text-foreground-muted mb-4 line-clamp-2">{tool.description}</p>
        
        <div className="space-y-3 text-xs">
          <div>
            <p className="text-foreground-muted uppercase tracking-widest mb-1">Pricing</p>
            <p className="text-foreground font-medium">{tool.pricing}</p>
          </div>
          
          <div>
            <p className="text-foreground-muted uppercase tracking-widest mb-1">Commission</p>
            <p className="text-primary font-medium">{tool.commissionRate}</p>
          </div>
        </div>
        
        <p className="text-xs text-foreground-muted mt-4 group-hover:text-primary transition-colors">
          Learn more →
        </p>
      </div>
    </a>
  );
}
