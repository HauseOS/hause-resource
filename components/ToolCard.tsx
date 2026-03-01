import { Tool } from '@/lib/tools';
import Link from 'next/link';

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="group rounded-lg border border-gray-800 bg-gray-900 p-6 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
          {tool.name}
        </h3>
        <p className="text-sm text-gray-400 mt-2">{tool.description}</p>
      </div>

      <div className="mb-4 space-y-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Best For</p>
          <div className="flex flex-wrap gap-2">
            {tool.bestFor.map((use) => (
              <span
                key={use}
                className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">Pricing</p>
          <p className="text-sm text-gray-300">{tool.pricing}</p>
        </div>

        <div className="pt-2 border-t border-gray-800">
          <p className="text-xs text-gray-500 mb-1">
            Affiliate: {tool.affiliateProgram} ({tool.commissionRate})
          </p>
        </div>
      </div>

      <Link
        href={tool.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors"
      >
        Learn More
      </Link>

      <p className="text-xs text-gray-500 mt-3 text-center">
        💰 We earn commission on this link
      </p>
    </div>
  );
}
