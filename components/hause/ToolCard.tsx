'use client';

import Link from 'next/link';
import { Card, CardContent } from './Card';
import { Badge } from './Badge';

interface Tool {
  id: string;
  name: string;
  description: string;
  bestFor: string[];
  pricing: string;
  affiliateUrl: string;
  commissionRate: string;
  category?: string;
}

interface ToolCardProps {
  tool: Tool;
  variant?: 'tile' | 'full';
}

export const ToolCard = ({ tool, variant = 'tile' }: ToolCardProps) => {
  if (variant === 'full') {
    return (
      <Card hoverable interactive className="group">
        <div className="relative overflow-hidden rounded-lg p-6">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none bg-gradient-to-br from-primary-glow to-transparent" />
          
          <div className="relative space-y-4">
            <div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{tool.name}</h3>
              <p className="text-sm text-foreground-dim mt-2 line-clamp-2">{tool.description}</p>
            </div>

            <div className="space-y-3 text-xs">
              {/* Best For */}
              <div>
                <p className="text-foreground-muted uppercase tracking-wider mb-2 font-semibold">Best For</p>
                <div className="flex flex-wrap gap-2">
                  {tool.bestFor.slice(0, 2).map((use) => (
                    <Badge key={use} size="sm" variant="secondary">
                      {use}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div>
                <p className="text-foreground-muted uppercase tracking-wider mb-1 font-semibold">Pricing</p>
                <p className="text-foreground font-medium">{tool.pricing}</p>
              </div>

              {/* Commission */}
              <div>
                <p className="text-foreground-muted uppercase tracking-wider mb-1 font-semibold">Commission</p>
                <p className="text-primary font-medium">{tool.commissionRate}</p>
              </div>
            </div>

            <Link
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-primary hover:text-primary-hover transition-colors font-medium mt-2 group-hover:translate-x-1 transition-transform"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  // Tile variant (smaller, for home page)
  return (
    <a
      href={tool.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-surface border border-border rounded-lg p-5 hover:border-primary hover:shadow-glow-md transition-all duration-300 cursor-pointer block"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary-glow to-transparent" />
      
      <div className="relative space-y-3">
        <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">{tool.name}</h3>
        <p className="text-xs text-foreground-muted line-clamp-2">{tool.description}</p>
        
        <div className="pt-2 space-y-2 text-xs">
          <div>
            <p className="text-foreground-dimmer uppercase tracking-wider font-semibold">Pricing</p>
            <p className="text-foreground text-sm font-medium">{tool.pricing}</p>
          </div>
          <div>
            <p className="text-primary font-semibold">{tool.commissionRate}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
