import Link from 'next/link';
import { Card } from '@/components/hause/Card';
import { getToolsByCategory } from '@/lib/tools';

export const metadata = {
  title: 'Compare AI Tools | HauseResource',
  description: 'Compare AI tools side-by-side across pricing, features, and commission rates.',
};

export default function ComparisonsPage() {
  const imageGenTools = getToolsByCategory('image-gen');
  const writingTools = getToolsByCategory('writing');
  const videoTools = getToolsByCategory('video');
  const codeTools = getToolsByCategory('code');

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-block text-primary hover:text-primary-hover transition-colors text-sm font-semibold mb-6">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Compare Tools</h1>
          <p className="text-lg text-foreground-dim max-w-2xl">
            Side-by-side comparison of all AI tools. Filter by category, compare pricing, and see commission rates.
          </p>
        </div>
      </section>

      {/* Comparison Tables */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Image Generation */}
          <ComparisonTable title="🎨 Image Generation Tools" tools={imageGenTools} />

          {/* Writing */}
          <ComparisonTable title="✍️ Writing & Content Tools" tools={writingTools} />

          {/* Video */}
          <ComparisonTable title="🎬 Video & Audio Tools" tools={videoTools} />

          {/* Code */}
          <ComparisonTable title="💻 Code & Automation Tools" tools={codeTools} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Need help choosing?</h2>
          <p className="text-foreground-dim mb-8">
            Browse tools by category to see detailed descriptions and recommendations.
          </p>
          <Link href="/" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-hover transition-colors">
            View Categories
          </Link>
        </div>
      </section>
    </>
  );
}

interface Tool {
  id: string;
  name: string;
  pricing: string;
  bestFor: string[];
  commissionRate: string;
  affiliateUrl: string;
}

interface ComparisonTableProps {
  title: string;
  tools: Tool[];
}

function ComparisonTable({ title, tools }: ComparisonTableProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-display font-bold mb-8">{title}</h2>
      
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-semibold text-foreground">Tool</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">Price</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground hidden md:table-cell">Best For</th>
                <th className="text-center py-4 px-6 font-semibold text-foreground">Commission</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr
                  key={tool.id}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="py-4 px-6 text-foreground font-medium">
                    <a
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {tool.name}
                    </a>
                  </td>
                  <td className="py-4 px-6 text-foreground-dim">{tool.pricing}</td>
                  <td className="py-4 px-6 text-foreground-dim hidden md:table-cell text-xs">
                    {tool.bestFor.join(', ')}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <a
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-hover transition-colors font-semibold"
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
  );
}
