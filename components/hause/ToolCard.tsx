'use client';

import Link from 'next/link';
import { Card } from './Card';
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
      <Card hoverable interactive className="group h-full flex flex-col">
        <div className="relative overflow-hidden p-0 h-full flex flex-col">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none bg-gradient-to-br from-primary-glow to-transparent rounded-lg" />
          
          <div className="relative p-8 h-full flex flex-col gap-8">
            {/* Header Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                {tool.name}
              </h3>
              <p className="text-base text-foreground-dim leading-relaxed">
                {tool.description}
              </p>
            </div>

            {/* Content Sections - Flex 1 to push CTA to bottom */}
            <div className="space-y-8 flex-1">
              {/* Best For */}
              <div className="space-y-4">
                <p className="text-xs text-foreground-muted uppercase tracking-widest font-bold letter-spacing-wide">
                  ✓ Best For
                </p>
                <div className="flex flex-wrap gap-3">
                  {tool.bestFor.map((use) => (
                    <Badge 
                      key={use} 
                      size="md" 
                      variant="secondary"
                      className="group/badge hover:border-primary/50 transition-all duration-200"
                    >
                      {use}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-3 pt-6 border-t border-border/30">
                <p className="text-xs text-foreground-muted uppercase tracking-widest font-bold">
                  💰 Pricing
                </p>
                <p className="text-base text-foreground font-semibold">{tool.pricing}</p>
              </div>

              {/* Commission */}
              <div className="space-y-3 pt-6 border-t border-border/30">
                <p className="text-xs text-foreground-muted uppercase tracking-widest font-bold">
                  🎯 Commission
                </p>
                <p className="text-base text-primary font-bold group-hover:text-primary-hover transition-colors duration-200">
                  {tool.commissionRate}
                </p>
              </div>
            </div>

            {/* CTA Button Section */}
            <div className="pt-6 border-t border-border/30 mt-auto">
              <Link
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 font-semibold group-hover:gap-3"
              >
                <span>Visit</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
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
      className="group relative bg-surface border border-border rounded-lg p-6 hover:border-primary/60 hover:shadow-glow-md transition-all duration-300 cursor-pointer block overflow-hidden h-full flex flex-col"
    >
      {/* Glow effect background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary-glow via-transparent to-transparent rounded-lg" />
      
      <div className="relative space-y-5 flex flex-col h-full">
        {/* Title Section */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
            {tool.name}
          </h3>
          <p className="text-sm text-foreground-dim line-clamp-2 leading-relaxed">
            {tool.description}
          </p>
        </div>
        
        {/* Data sections - flex 1 to push bottom section down */}
        <div className="space-y-4 flex-1">
          {/* Pricing */}
          <div className="pt-2">
            <p className="text-xs text-foreground-muted uppercase tracking-wider font-semibold mb-2">Pricing</p>
            <p className="text-sm text-foreground font-semibold">{tool.pricing}</p>
          </div>

          {/* Commission */}
          <div>
            <p className="text-xs text-foreground-muted uppercase tracking-wider font-semibold mb-2">Commission</p>
            <p className="text-sm text-primary font-bold group-hover:text-primary-hover transition-colors duration-200">
              {tool.commissionRate}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-xs text-foreground-dim group-hover:text-primary transition-colors duration-200 font-medium pt-3 border-t border-border/30">
          Click to visit →
        </div>
      </div>
    </a>
  );
};
