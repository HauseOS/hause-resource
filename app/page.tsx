import Link from 'next/link';
import { CategoryCard } from '@/components/CategoryCard';
import { ToolCard } from '@/components/ToolCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories, tools } from '@/lib/tools';

export const metadata = {
  title: 'HauseResource | AI Tools for Builders',
  description: 'Curated AI tools we actually use. Transparent affiliate links.',
};

const categoryIcons: { [key: string]: string } = {
  'image-gen': '🎨',
  writing: '✍️',
  video: '🎬',
  code: '💻',
};

export default function Home() {
  const featuredTools = tools.slice(0, 6);

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
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-background via-background to-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            AI Tools for Builders
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Curated tools we actually use and recommend. Transparent affiliate links that help us create better content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#categories">
              <Button size="lg">Explore Tools</Button>
            </Link>
            <Link href="/comparisons">
              <Button size="lg" variant="outline">View Comparisons</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-foreground">
            📢 <span className="font-semibold">Affiliate Transparency:</span> We earn commission on affiliate links. This doesn't affect your pricing. We only recommend tools we actually believe in.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Explore by Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Start with the category that matters to you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              description={category.description}
              icon={categoryIcons[category.id]}
            />
          ))}
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Featured Tools
          </h2>
          <p className="text-lg text-muted-foreground">
            Some of our most-used tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <Card className="bg-secondary">
          <CardContent className="pt-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Looking for more tools?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse all our curated tools organized by use case and category.
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
          <p>Made by <span className="font-semibold text-foreground">Hause Collective</span></p>
          <p className="mt-2">Learning AI tools that actually work.</p>
        </div>
      </footer>
    </div>
  );
}
