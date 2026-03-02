import Link from 'next/link';
import { CategoryCard } from '@/components/CategoryCard';
import { ToolCard } from '@/components/ToolCard';
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
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#ff4e64]">
            HauseResource
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-600 hover:text-[#ff4e64] transition font-medium">
              Home
            </Link>
            <Link href="/comparisons" className="text-gray-600 hover:text-[#ff4e64] transition font-medium">
              Comparisons
            </Link>
            <a
              href="https://www.youtube.com/@HauseCollective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#ff4e64] transition font-medium"
            >
              YouTube
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
          AI Tools for Builders
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl">
          Curated tools we actually use and recommend. Transparent affiliate links that help us create better content.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link href="#categories" className="btn">
            Explore Tools
          </Link>
          <Link href="/comparisons" className="btn btn-ghost">
            View Comparisons
          </Link>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="bg-blue-50 border-t border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-gray-700 text-sm">
            📢 <strong>Affiliate Transparency:</strong> We earn commission on affiliate links. This doesn't affect your pricing. We only recommend tools we actually believe in.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="section container mx-auto px-6">
        <h2 className="section-title">Explore by Category</h2>
        <p className="section-subtitle">Start with the category that matters to you</p>
        <div className="grid-4">
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

      {/* Featured Tools */}
      <section className="section container mx-auto px-6">
        <h2 className="section-title">Featured Tools</h2>
        <p className="section-subtitle">Some of our most-used tools</p>
        <div className="grid-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/comparisons" className="btn">
            View All Tools & Comparisons
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to find your perfect tool?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Browse by category or check out our detailed comparisons to find the right AI tool for your workflow.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/#categories" className="btn">
              Browse Categories
            </Link>
            <a
              href="https://www.youtube.com/@HauseCollective"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">HauseResource</h3>
              <p className="text-gray-400 text-sm">
                Curated AI tools for builders, creators, and makers.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/comparisons" className="hover:text-white transition">
                    Comparisons
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@HauseCollective"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    YouTube Channel
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">About</h3>
              <p className="text-gray-400 text-sm">
                Built by the Hause Collective team. We share the tools we actually use.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-500 text-sm">
              💰 We earn commission on affiliate links. Learn more{' '}
              <a href="#" className="text-red-400 hover:text-red-300 transition">
                about our affiliate policy
              </a>
            </p>
            <p className="text-center text-gray-600 text-xs mt-4">
              © 2026 Hause Collective. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
