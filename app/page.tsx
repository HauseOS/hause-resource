import Link from 'next/link';
import { Button } from '@/components/hause/Button';
import { ToolCard } from '@/components/hause/ToolCard';
import { getToolsByCategory } from '@/lib/tools';

export default function Home() {
  const imageGenTools = getToolsByCategory('image-gen').slice(0, 3);
  const writingTools = getToolsByCategory('writing').slice(0, 3);
  const videoTools = getToolsByCategory('video').slice(0, 3);
  const codeTools = getToolsByCategory('code').slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-5 bg-primary pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-widest text-foreground-muted font-semibold">Curated Directory</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
            AI Tools for <span className="text-primary">Builders</span>
          </h1>

          <p className="text-lg text-foreground-dim max-w-2xl mx-auto mb-8 leading-relaxed">
            We've tested dozens of AI tools. Here are the ones we actually use and recommend. Transparent affiliate links help us keep creating.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#tools">
              <Button size="lg">Explore Tools</Button>
            </Link>
            <Link href="/comparisons">
              <Button size="lg" variant="secondary">Compare All</Button>
            </Link>
          </div>

          {/* Affiliate disclosure */}
          <div className="mt-12 p-4 rounded-lg border border-border bg-surface/50">
            <p className="text-xs text-foreground-muted">
              <span className="font-semibold">💰 Affiliate Transparency:</span> We earn commission on affiliate links. This doesn't affect your pricing. We only recommend tools we believe in.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="px-6 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Image Generation */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-display font-bold mb-3">🎨 Image Generation</h2>
              <p className="text-foreground-dim">Create stunning visuals with AI-powered image generators</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {imageGenTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} variant="tile" />
              ))}
            </div>
            <Link href="/image-generation" className="inline-block text-primary hover:text-primary-hover transition-colors font-semibold text-sm">
              View all image generation tools →
            </Link>
          </div>

          {/* Writing */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="mb-8">
              <h2 className="text-4xl font-display font-bold mb-3">✍️ Writing & Content</h2>
              <p className="text-foreground-dim">AI-powered writing tools for creators and builders</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {writingTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} variant="tile" />
              ))}
            </div>
            <Link href="/writing-content" className="inline-block text-primary hover:text-primary-hover transition-colors font-semibold text-sm">
              View all writing tools →
            </Link>
          </div>

          {/* Video */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8">
              <h2 className="text-4xl font-display font-bold mb-3">🎬 Video & Audio</h2>
              <p className="text-foreground-dim">Professional video and audio production with AI</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {videoTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} variant="tile" />
              ))}
            </div>
            <Link href="/video-audio" className="inline-block text-primary hover:text-primary-hover transition-colors font-semibold text-sm">
              View all video tools →
            </Link>
          </div>

          {/* Code & Automation */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="mb-8">
              <h2 className="text-4xl font-display font-bold mb-3">💻 Code & Automation</h2>
              <p className="text-foreground-dim">Build faster with AI-powered development tools</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {codeTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} variant="tile" />
              ))}
            </div>
            <Link href="/code-automation" className="inline-block text-primary hover:text-primary-hover transition-colors font-semibold text-sm">
              View all code tools →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-xl border border-border bg-surface/50 p-12 text-center overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-glow to-transparent rounded-xl" />
            
            <div className="relative">
              <h2 className="text-3xl font-display font-bold mb-4">Compare Tools Side-by-Side</h2>
              <p className="text-foreground-dim mb-8 max-w-xl mx-auto">
                See pricing, features, and affiliate rates for all tools in one place.
              </p>
              <Link href="/comparisons">
                <Button size="lg">Browse All Tools</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
