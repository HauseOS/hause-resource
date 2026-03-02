import { getToolsByCategory } from '@/lib/tools';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
            <Link href="/comparisons" className="text-sm font-medium text-foreground transition-colors">
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
      <section className="px-6 py-16 md:py-20 bg-gradient-to-br from-background via-background to-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 text-sm font-semibold transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Tool Comparisons
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Compare tools side-by-side to find what works best for your needs.
          </p>
        </div>
      </section>

      {/* Comparisons */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        {/* Image Gen Comparison */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Image Generation Tools
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary">
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Tool</th>
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Price</th>
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Best For</th>
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Free Trial</th>
                      <th className="text-center py-4 px-4 font-semibold text-foreground">Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {imageGenTools.map((tool) => (
                      <tr key={tool.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                        <td className="py-4 px-4 font-semibold text-foreground">{tool.name}</td>
                        <td className="py-4 px-4 text-muted-foreground">{tool.pricing}</td>
                        <td className="py-4 px-4 text-muted-foreground">{tool.bestFor.join(', ')}</td>
                        <td className="py-4 px-4 text-muted-foreground">
                          {tool.name === 'DALL-E 3' || tool.name === 'Adobe Firefly' ? '✅' : '🔒'}
                        </td>
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
        </div>

        {/* Writing Comparison */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Writing & Content Tools
          </h2>
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
                    {writingTools.map((tool) => (
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
        </div>

        {/* Video Comparison */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Video & Audio Tools
          </h2>
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
                    {videoTools.map((tool) => (
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
        </div>

        {/* Code Comparison */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Code & Automation Tools
          </h2>
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
                    {codeTools.map((tool) => (
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
        </div>

        {/* CTA */}
        <Card className="bg-secondary">
          <CardContent className="pt-12 text-center pb-12">
            <p className="text-muted-foreground mb-6 text-base">
              Want to see more tools? Check out the individual category pages for the complete list.
            </p>
            <Link href="/">
              <Button size="lg">Browse All Categories</Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center text-muted-foreground text-sm">
          <p>💰 We earn commission on affiliate links | © 2026 Hause Collective</p>
        </div>
      </footer>
    </div>
  );
}
