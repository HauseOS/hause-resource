import { ToolCard } from '@/components/ToolCard';
import { getToolsByCategory } from '@/lib/tools';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Writing & Content AI Tools | HauseResource',
  description: 'Best AI writing and content creation tools for writers and creators.',
};

export default function WritingContentPage() {
  const tools = getToolsByCategory('writing');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            HauseResource
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/comparisons" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Comparisons
            </Link>
            <a
              href="https://www.youtube.com/@HauseCollective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              YouTube
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-24 bg-gradient-to-br from-background via-background to-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 text-sm font-semibold transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Writing & Content Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Write, create, and brainstorm faster with AI-powered tools.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">Featured Tools</h2>
          <p className="text-muted-foreground">Best AI writing and content tools</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">Quick Comparison</h2>
          <p className="text-muted-foreground">Side-by-side comparison of writing tools</p>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Tool</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Price</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Best For</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map((tool) => (
                    <tr key={tool.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-foreground">{tool.name}</td>
                      <td className="py-4 px-4 text-muted-foreground">{tool.pricing}</td>
                      <td className="py-4 px-4 text-muted-foreground">{tool.bestFor[0]}</td>
                      <td className="py-4 px-4 text-center">
                        <a
                          href={tool.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 font-semibold transition-colors"
                        >
                          {tool.commissionRate}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <Card className="bg-secondary">
          <CardContent className="pt-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Browse all categories</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore tools for image generation, video, code, and automation.
            </p>
            <Link href="/comparisons">
              <Button size="lg">View All Tools</Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>📢 <span className="font-semibold text-foreground">Affiliate Transparency:</span> We earn commission on affiliate links. This doesn't affect your pricing.</p>
          <p className="mt-2">Made by <span className="font-semibold text-foreground">Hause Collective</span></p>
        </div>
      </footer>
    </div>
  );
}
