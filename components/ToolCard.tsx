import { Tool } from '@/lib/tools';
import Link from 'next/link';

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="group rounded-lg border border-gray-200 bg-white p-6 hover:border-[#ff4e64] hover:shadow-md transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#ff4e64] transition-colors">
          {tool.name}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{tool.description}</p>
      </div>

      <div className="mb-4 space-y-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1 font-semibold">Best For</p>
          <div className="flex flex-wrap gap-2">
            {tool.bestFor.map((use) => (
              <span
                key={use}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Pricing</p>
          <p className="text-sm text-gray-800">{tool.pricing}</p>
        </div>

        <div className="pt-2 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-1">
            Affiliate: {tool.affiliateProgram} ({tool.commissionRate})
          </p>
        </div>
      </div>

      <Link
        href={tool.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center py-2 px-4 bg-[#ff4e64] hover:bg-[#ff3a52] text-white font-medium rounded-lg transition-colors"
      >
        Learn More
      </Link>

      <p className="text-xs text-gray-500 mt-3 text-center">
        💰 We earn commission on this link
      </p>
    </div>
  );
}
