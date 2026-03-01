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
    <div className="bg-gray-950 min-h-screen">
      <header className="sticky top-0 z-50 bg-gray-950 bg-opacity-80 backdrop-blur border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-red-400">
            HauseResource
          </Link>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 mb-6">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-black mb-4">Tool Comparisons</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Compare tools side-by-side to find what works best for your needs.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        {/* Image Gen Comparison */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Image Generation Tools</h2>
          <div className="overflow-x-auto bg-gray-900 rounded-lg border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-800">
                  <th className="text-left py-4 px-4 font-bold">Tool</th>
                  <th className="text-left py-4 px-4 font-bold">Price</th>
                  <th className="text-left py-4 px-4 font-bold">Best For</th>
                  <th className="text-left py-4 px-4 font-bold">Free Trial</th>
                  <th className="text-center py-4 px-4 font-bold">Commission</th>
                </tr>
              </thead>
              <tbody>
                {imageGenTools.map((tool) => (
                  <tr key={tool.id} className="border-b border-gray-800 hover:bg-gray-800 transition">
                    <td className="py-4 px-4 font-semibold text-white">{tool.name}</td>
                    <td className="py-4 px-4 text-gray-300">{tool.pricing}</td>
                    <td className="py-4 px-4 text-gray-300">{tool.bestFor.join(', ')}</td>
                    <td className="py-4 px-4 text-gray-300">
                      {tool.name === 'DALL-E 3' || tool.name === 'Adobe Firefly' ? '✅' : '🔒'}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-semibold"
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
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Writing & Content Tools</h2>
          <div className="overflow-x-auto bg-gray-900 rounded-lg border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-800">
                  <th className="text-left py-4 px-4 font-bold">Tool</th>
                  <th className="text-left py-4 px-4 font-bold">Price</th>
                  <th className="text-left py-4 px-4 font-bold">Best For</th>
                  <th className="text-center py-4 px-4 font-bold">Commission</th>
                </tr>
              </thead>
              <tbody>
                {writingTools.map((tool) => (
                  <tr key={tool.id} className="border-b border-gray-800 hover:bg-gray-800 transition">
                    <td className="py-4 px-4 font-semibold text-white">{tool.name}</td>
                    <td className="py-4 px-4 text-gray-300">{tool.pricing}</td>
                    <td className="py-4 px-4 text-gray-300">{tool.bestFor[0]}</td>
                    <td className="py-4 px-4 text-center">
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-semibold"
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
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Video & Audio Tools</h2>
          <div className="overflow-x-auto bg-gray-900 rounded-lg border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-800">
                  <th className="text-left py-4 px-4 font-bold">Tool</th>
                  <th className="text-left py-4 px-4 font-bold">Price</th>
                  <th className="text-left py-4 px-4 font-bold">Best For</th>
                  <th className="text-center py-4 px-4 font-bold">Commission</th>
                </tr>
              </thead>
              <tbody>
                {videoTools.map((tool) => (
                  <tr key={tool.id} className="border-b border-gray-800 hover:bg-gray-800 transition">
                    <td className="py-4 px-4 font-semibold text-white">{tool.name}</td>
                    <td className="py-4 px-4 text-gray-300">{tool.pricing}</td>
                    <td className="py-4 px-4 text-gray-300">{tool.bestFor[0]}</td>
                    <td className="py-4 px-4 text-center">
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-semibold"
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
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Code & Automation Tools</h2>
          <div className="overflow-x-auto bg-gray-900 rounded-lg border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-800">
                  <th className="text-left py-4 px-4 font-bold">Tool</th>
                  <th className="text-left py-4 px-4 font-bold">Price</th>
                  <th className="text-left py-4 px-4 font-bold">Best For</th>
                  <th className="text-center py-4 px-4 font-bold">Commission</th>
                </tr>
              </thead>
              <tbody>
                {codeTools.map((tool) => (
                  <tr key={tool.id} className="border-b border-gray-800 hover:bg-gray-800 transition">
                    <td className="py-4 px-4 font-semibold text-white">{tool.name}</td>
                    <td className="py-4 px-4 text-gray-300">{tool.pricing}</td>
                    <td className="py-4 px-4 text-gray-300">{tool.bestFor[0]}</td>
                    <td className="py-4 px-4 text-center">
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-semibold"
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

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">
            Want to see more tools? Check out the individual category pages for the complete list.
          </p>
          <Link href="/" className="inline-block px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition">
            Browse All Categories
          </Link>
        </div>
      </section>

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
