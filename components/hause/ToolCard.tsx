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
      <Card hoverable interactive className="group h-full">
        <div className="relative overflow-hidden rounded-lg p-8 h-full flex flex-col">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none bg-gradient-to-br from-primary-glow to-transparent" />
          
          <div className="relative space-y-6 flex-1 flex flex-col">
            {/* Header */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                {tool.name}
              </h3>
              <p className="text-sm text-foreground-dim leading-relaxed">
                {tool.description}
              </p>
            </div>

            {/* Content sections */}
            <div className="space-y-5 flex-1">
              {/* Best For */}
              <div className="space-y-3">
                <p className="text-xs text-foreground-muted uppercase tracking-widest font-semibold">Best For</p>
                <div className="flex flex-wrap gap-2">
                  {tool.bestFor.slice(0, 3).map((use) => (
                    <Badge 
                      key={use} 
                      size="sm" 
                      variant="secondary"
                      className="group/badge hover:border-primary/50 transition-all duration-200"
                    >
                      {use}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-2 pt-2 border-t border-border/50">
                <p className="text-xs text-foreground-muted uppercase tracking-widest font-semibold">Pricing</p>
                <p className="text-sm text-foreground font-medium">{tool.pricing}</p>
              </div>

              {/* Commission */}
              <div className="space-y-2 pt-2 border-t border-border/50">
                <p className="text-xs text-foreground-muted uppercase tracking-widest font-semibold">Commission</p>
                <p className="text-sm text-primary font-medium">{tool.commissionRate}</p>
              </div>
            </div>

            {/* CTA Link */}
            <Link
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-hover transition-all duration-200 font-medium mt-4 group-hover:translate-x-0.5"
            >
              <span>Learn more</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
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
      className="group relative bg-surface border border-border rounded-lg p-6 hover:border-primary/60 hover:shadow-glow-md active:shadow-glow transition-all duration-300 cursor-pointer block overflow-hidden"
    >
      {/* Glow effect background */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary-glow via-transparent to-transparent" />
      
      {/* Border shift effect */}
      <div className="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/40 transition-colors duration-300 pointer-events-none" />
      
      <div className="relative space-y-4">
        {/* Title */}
        <div>
          <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors duration-200">
            {tool.name}
          </h3>
          <p className="text-xs text-foreground-muted line-clamp-2 mt-2 leading-relaxed">
            {tool.description}
          </p>
        </div>
        
        {/* Data sections */}
        <div className="space-y-3 pt-2">
          {/* Pricing */}
          <div>
            <p className="text-xs text-foreground-dimmer uppercase tracking-wider font-semibold mb-1">Pricing</p>
            <p className="text-sm text-foreground font-medium">{tool.pricing}</p>
          </div>

          {/* Commission */}
          <div>
            <p className="text-xs text-foreground-dimmer uppercase tracking-wider font-semibold mb-1">Commission</p>
            <p className="text-sm text-primary font-semibold group-hover:text-primary-hover transition-colors duration-200">
              {tool.commissionRate}
            </p>
          </div>
        </div>

        {/* Subtle CTA indicator */}
        <div className="text-xs text-foreground-dimmer group-hover:text-primary transition-colors duration-200 pt-1">
          Click to visit →
        </div>
      </div>
    </a>
  );
};
