import { getToolsByCategory } from '@/lib/tools';
import Link from 'next/link';

export const metadata = {
  title: 'Tool Comparisons | HauseResource',
  description: 'Compare AI tools side-by-side to find the perfect fit.',
};

export default function ComparisonsPage() {
  const imageGenTools = getToolsByCategory('image-gen');
  const writingTools = getToolsByCategory('writing').slice(0, 3);
  const videoTools = getToolsByCategory('video').slice(0, 3);
  const codeTools = getToolsByCategory('code').slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-[#ff4e64]">
            HauseResource
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-20 bg-gradient-to-br from-white via-white to-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-[#ff4e64] hover:text-[#ff3a52] mb-6 text-sm font-semibold transition-colors">
            ← Back to Home
          </Link>
          <h1 className="section-title text-4xl md:text-5xl mb-4 leading-tight">
            Tool Comparisons
          </h1>
          <p className="section-subtitle text-base md:text-lg max-w-2xl">
            Compare tools side-by-side to find what works best for your needs.
          </p>
        </div>
      </section>

      {/* Comparisons */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Image Gen Comparison */}
        <div className="mb-16">
          <h2 className="section-title text-2xl md:text-3xl mb-6">Image Generation Tools</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Tool</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Price</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Best For</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Free Trial</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Commission</th>
                </tr>
              </thead>
              <tbody>
                {imageGenTools.map((tool) => (
                  <tr key={tool.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-gray-900">{tool.name}</td>
                    <td className="py-4 px-4 text-gray-700">{tool.pricing}</td>
                    <td className="py-4 px-4 text-gray-700">{tool.bestFor.join(', ')}</td>
                    <td className="py-4 px-4 text-gray-700">
                      {tool.name === 'DALL-E 3' || tool.name === 'Adobe Firefly' ? '✅' : '🔒'}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff4e64] hover:text-[#ff3a52] font-semibold transition-colors"
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

        {/* Writing Comparison */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h2 className="section-title text-2xl md:text-3xl mb-6">Writing & Content Tools</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Tool</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Price</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Best For</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Commission</th>
                </tr>
              </thead>
              <tbody>
                {writingTools.map((tool) => (
                  <tr key={tool.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-gray-900">{tool.name}</td>
                    <td className="py-4 px-4 text-gray-700">{tool.pricing}</td>
                    <td className="py-4 px-4 text-gray-700">{tool.bestFor[0]}</td>
                    <td className="py-4 px-4 text-center">
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff4e64] hover:text-[#ff3a52] font-semibold transition-colors"
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

        {/* Video Comparison */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h2 className="section-title text-2xl md:text-3xl mb-6">Video & Audio Tools</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Tool</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Price</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Best For</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Commission</th>
                </tr>
              </thead>
              <tbody>
                {videoTools.map((tool) => (
                  <tr key={tool.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-gray-900">{tool.name}</td>
                    <td className="py-4 px-4 text-gray-700">{tool.pricing}</td>
                    <td className="py-4 px-4 text-gray-700">{tool.bestFor[0]}</td>
                    <td className="py-4 px-4 text-center">
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff4e64] hover:text-[#ff3a52] font-semibold transition-colors"
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

        {/* Code Comparison */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h2 className="section-title text-2xl md:text-3xl mb-6">Code & Automation Tools</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Tool</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Price</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Best For</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Commission</th>
                </tr>
              </thead>
              <tbody>
                {codeTools.map((tool) => (
                  <tr key={tool.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-gray-900">{tool.name}</td>
                    <td className="py-4 px-4 text-gray-700">{tool.pricing}</td>
                    <td className="py-4 px-4 text-gray-700">{tool.bestFor[0]}</td>
                    <td className="py-4 px-4 text-center">
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff4e64] hover:text-[#ff3a52] font-semibold transition-colors"
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

        {/* CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12 text-center border-t border-gray-200 pt-16 mt-16">
          <p className="text-gray-700 mb-6 text-base">
            Want to see more tools? Check out the individual category pages for the complete list.
          </p>
          <Link href="/" className="btn">
            Browse All Categories
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-600 text-sm">
          <p>💰 We earn commission on affiliate links | © 2026 Hause Collective</p>
        </div>
      </footer>
    </div>
  );
}
