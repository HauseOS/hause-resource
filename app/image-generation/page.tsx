import { ToolCard } from '@/components/ToolCard';
import { getToolsByCategory } from '@/lib/tools';
import Link from 'next/link';

export const metadata = {
  title: 'Image Generation Tools | HauseResource',
  description: 'Best AI image generation tools for designers and creators.',
};

export default function ImageGenerationPage() {
  const tools = getToolsByCategory('image-gen');

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-950 bg-opacity-80 backdrop-blur border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-red-400">
            HauseResource
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 mb-6">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-black mb-4">Image Generation Tools</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Create stunning visuals with AI. Perfect for designers, marketers, and content creators.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="container mx-auto px-6 py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12">Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-4 font-bold">Tool</th>
                <th className="text-left py-4 px-4 font-bold">Price</th>
                <th className="text-left py-4 px-4 font-bold">Best For</th>
                <th className="text-left py-4 px-4 font-bold">Commission</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr key={tool.id} className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="py-4 px-4 font-semibold">{tool.name}</td>
                  <td className="py-4 px-4 text-gray-300">{tool.pricing}</td>
                  <td className="py-4 px-4 text-gray-300">{tool.bestFor[0]}</td>
                  <td className="py-4 px-4">
                    <span className="text-red-400 font-semibold">{tool.commissionRate}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-20">
        <div className="container mx-auto px-6 py-12">
          <p className="text-center text-gray-500 text-sm">
            💰 We earn commission on affiliate links | © 2026 Hause Collective
          </p>
        </div>
      </footer>
    </div>
  );
}
