import Link from 'next/link';
import { Card } from '@/components/hause/Card';
import { ToolCard } from '@/components/hause/ToolCard';
import { getToolsByCategory } from '@/lib/tools';

export const metadata = {
  title: 'Image Generation AI Tools | HauseResource',
  description: 'Best AI image generation tools for designers, marketers, and creators.',
};

export default function ImageGenerationPage() {
  const tools = getToolsByCategory('image-gen');

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 border-b border-border bg-gradient-to-b from-surface/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors text-sm font-semibold mb-8 group">
            <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            <span>Back to Home</span>
          </Link>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              🎨 Image Generation Tools
            </h1>
            <p className="text-xl text-foreground-dim max-w-3xl leading-relaxed">
              Create stunning visuals with AI-powered image generators. From photorealistic images to artistic designs, these tools help designers, marketers, and creators bring their visions to life.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Featured Tools</h2>
            <p className="text-foreground-dim">Curated image generation tools we recommend</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {tools.map((tool, idx) => (
              <div key={tool.id} style={{ animation: `fade-in 0.5s ease-out ${idx * 0.1}s both` }}>
                <ToolCard tool={tool} variant="full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Quick Comparison</h2>
            <p className="text-foreground-dim">Compare pricing, features, and affiliate rates side-by-side</p>
          </div>
          
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-surface/50">
                    <th className="text-left py-6 px-8 font-semibold text-foreground text-sm uppercase tracking-wider">Tool</th>
                    <th className="text-left py-6 px-8 font-semibold text-foreground text-sm uppercase tracking-wider">Price</th>
                    <th className="text-left py-6 px-8 font-semibold text-foreground text-sm uppercase tracking-wider hidden md:table-cell">Best For</th>
                    <th className="text-center py-6 px-8 font-semibold text-foreground text-sm uppercase tracking-wider">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map((tool) => (
                    <tr key={tool.id} className="border-b border-border/30 hover:bg-surface/50 transition-colors">
                      <td className="py-5 px-8 text-foreground font-medium">{tool.name}</td>
                      <td className="py-5 px-8 text-foreground-dim">{tool.pricing}</td>
                      <td className="py-5 px-8 text-foreground-dim hidden md:table-cell text-sm">
                        {tool.bestFor[0]}
                      </td>
                      <td className="py-5 px-8 text-center">
                        <a
                          href={tool.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-hover transition-colors font-bold"
                        >
                          {tool.commissionRate}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
