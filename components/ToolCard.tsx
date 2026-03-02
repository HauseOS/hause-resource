import { Tool } from '@/lib/tools';
import Link from 'next/link';

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="card group flex flex-col h-full">
      <div className="mb-6 flex-grow">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#ff4e64] transition-colors mb-2">
          {tool.name}
        </h3>
        <p className="text-sm text-gray-600">{tool.description}</p>
      </div>

      <div className="space-y-4 border-t border-gray-200 pt-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Best For
          </p>
          <div className="flex flex-wrap gap-2">
            {tool.bestFor.map((use) => (
              <span
                key={use}
                className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
            Pricing
          </p>
          <p className="text-sm text-gray-800 font-medium">{tool.pricing}</p>
        </div>

        <div className="pt-2">
          <p className="text-xs text-gray-500">
            Affiliate: <span className="font-medium">{tool.affiliateProgram}</span> ({tool.commissionRate})
          </p>
        </div>
      </div>

      <Link
        href={tool.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-6 w-full text-center"
      >
        Learn More
      </Link>

      <p className="text-xs text-gray-500 text-center mt-3">
        💰 We earn commission on this link
      </p>
    </div>
  );
}
