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
      <section className="relative px-6 py-28 md:py-40 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-5 bg-primary pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-widest text-foreground-muted font-bold mb-6 bg-surface/50 px-4 py-2 rounded-full border border-border/50">
              Curated Directory
            </span>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8 tracking-tight">
              AI Tools for <span className="text-primary">Builders</span>
            </h1>

            <p className="text-xl text-foreground-dim max-w-3xl mx-auto mb-12 leading-relaxed">
              We've tested dozens of AI tools. Here are the ones we actually use and recommend. Transparent affiliate links help us create better content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="#tools">
                <Button size="lg">Explore Tools</Button>
              </Link>
              <Link href="/comparisons">
                <Button size="lg" variant="secondary">Compare All</Button>
              </Link>
            </div>
          </div>

          {/* Affiliate disclosure - more prominent */}
          <div className="max-w-2xl mx-auto">
            <div className="p-6 rounded-lg border border-border/50 bg-surface/30 backdrop-blur-sm">
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">💰</span>
                <div>
                  <p className="font-semibold text-foreground mb-2">Affiliate Transparency</p>
                  <p className="text-sm text-foreground-dim leading-relaxed">
                    We earn commission on affiliate links, but this doesn't affect your pricing. We only recommend tools we deeply believe in and have tested ourselves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="px-6 py-24 border-t border-border bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Image Generation */}
          <div className="animate-fade-in group/section">
            <div className="mb-12 pb-12 border-b border-border/30">
              <h2 className="text-5xl font-display font-bold mb-4 group-hover/section:text-primary transition-colors duration-300">
                🎨 Image Generation
              </h2>
              <p className="text-lg text-foreground-dim max-w-2xl">
                Create stunning visuals with AI-powered image generators. From photorealistic to artistic styles.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {imageGenTools.map((tool, idx) => (
                <div key={tool.id} style={{ animation: `fade-in 0.5s ease-out ${idx * 0.1}s both` }}>
                  <ToolCard tool={tool} variant="tile" />
                </div>
              ))}
            </div>
            <Link 
              href="/image-generation" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-all duration-200 font-semibold text-base group/link hover:translate-x-1"
            >
              <span>View all image generation tools</span>
              <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
            </Link>
          </div>

          {/* Writing */}
          <div className="animate-fade-in group/section" style={{ animationDelay: '0.1s' }}>
            <div className="mb-12 pb-12 border-b border-border/30">
              <h2 className="text-5xl font-display font-bold mb-4 group-hover/section:text-primary transition-colors duration-300">
                ✍️ Writing & Content
              </h2>
              <p className="text-lg text-foreground-dim max-w-2xl">
                AI-powered writing tools for creators and builders. Generate, edit, and refine content at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {writingTools.map((tool, idx) => (
                <div key={tool.id} style={{ animation: `fade-in 0.5s ease-out ${0.1 + idx * 0.1}s both` }}>
                  <ToolCard tool={tool} variant="tile" />
                </div>
              ))}
            </div>
            <Link 
              href="/writing-content" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-all duration-200 font-semibold text-base group/link hover:translate-x-1"
            >
              <span>View all writing tools</span>
              <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
            </Link>
          </div>

          {/* Video */}
          <div className="animate-fade-in group/section" style={{ animationDelay: '0.2s' }}>
            <div className="mb-12 pb-12 border-b border-border/30">
              <h2 className="text-5xl font-display font-bold mb-4 group-hover/section:text-primary transition-colors duration-300">
                🎬 Video & Audio
              </h2>
              <p className="text-lg text-foreground-dim max-w-2xl">
                Professional video and audio production with AI. Create, edit, and optimize content faster.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {videoTools.map((tool, idx) => (
                <div key={tool.id} style={{ animation: `fade-in 0.5s ease-out ${0.2 + idx * 0.1}s both` }}>
                  <ToolCard tool={tool} variant="tile" />
                </div>
              ))}
            </div>
            <Link 
              href="/video-audio" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-all duration-200 font-semibold text-base group/link hover:translate-x-1"
            >
              <span>View all video tools</span>
              <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
            </Link>
          </div>

          {/* Code & Automation */}
          <div className="animate-fade-in group/section" style={{ animationDelay: '0.3s' }}>
            <div className="mb-12">
              <h2 className="text-5xl font-display font-bold mb-4 group-hover/section:text-primary transition-colors duration-300">
                💻 Code & Automation
              </h2>
              <p className="text-lg text-foreground-dim max-w-2xl">
                Build faster with AI-powered development tools. Automate workflows and write code smarter.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {codeTools.map((tool, idx) => (
                <div key={tool.id} style={{ animation: `fade-in 0.5s ease-out ${0.3 + idx * 0.1}s both` }}>
                  <ToolCard tool={tool} variant="tile" />
                </div>
              ))}
            </div>
            <Link 
              href="/code-automation" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-all duration-200 font-semibold text-base group/link hover:translate-x-1"
            >
              <span>View all code tools</span>
              <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-28 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-border/40 bg-gradient-to-br from-surface/80 to-surface/40 p-16 text-center overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-glow via-transparent to-transparent rounded-2xl" />
            
            {/* Animated background circles */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl opacity-5 bg-primary animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-2xl opacity-5 bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative space-y-8">
              <div>
                <h2 className="text-5xl font-display font-bold mb-6">Compare All Tools</h2>
                <p className="text-xl text-foreground-dim max-w-2xl mx-auto leading-relaxed">
                  See pricing, features, and affiliate rates for all our recommended tools in one place. Filter by category and find the perfect fit for your needs.
                </p>
              </div>
              <Link href="/comparisons">
                <Button size="lg" className="text-lg px-10 py-4">
                  Browse Comparison Table
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
