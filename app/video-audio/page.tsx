import Link from 'next/link';
import { Card } from '@/components/hause/Card';
import { ToolCard } from '@/components/hause/ToolCard';
import { getToolsByCategory } from '@/lib/tools';

export const metadata = {
  title: 'Video & Audio AI Tools | HauseResource',
  description: 'Best AI tools for video production and audio synthesis.',
};

export default function VideoPage() {
  const tools = getToolsByCategory('video');

  return (
    <>
      <section className="px-6 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-block text-primary hover:text-primary-hover transition-colors text-sm font-semibold mb-6">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">🎬 Video & Audio Tools</h1>
          <p className="text-lg text-foreground-dim max-w-2xl">
            Create professional video and audio content with AI assistance.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} variant="full" />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8">Quick Comparison</h2>
          
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
                    <tr key={tool.id} className="border-b border-border hover:bg-surface/50 transition-colors">
                      <td className="py-4 px-6 text-foreground font-medium">{tool.name}</td>
                      <td className="py-4 px-6 text-foreground-dim">{tool.pricing}</td>
                      <td className="py-4 px-6 text-foreground-dim hidden md:table-cell text-xs">
                        {tool.bestFor[0]}
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
      </section>
    </>
  );
}
