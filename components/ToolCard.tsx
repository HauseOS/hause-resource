import { Tool } from '@/lib/tools';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{tool.name}</CardTitle>
        <CardDescription className="text-sm">{tool.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow space-y-4">
        <div>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
            Best For
          </p>
          <div className="flex flex-wrap gap-2">
            {tool.bestFor.map((use) => (
              <Badge key={use} variant="outline" className="text-xs">
                {use}
              </Badge>
            ))}
          </div>
        </div>

        <div className="border-t pt-3">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
            Pricing
          </p>
          <p className="text-sm font-medium text-gray-900">{tool.pricing}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">
            Affiliate: <span className="font-medium">{tool.affiliateProgram}</span> ({tool.commissionRate})
          </p>
        </div>
      </CardContent>

      <CardContent className="pt-0 space-y-3">
        <Link href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer" className="block">
          <Button className="w-full">Learn More</Button>
        </Link>
        <p className="text-xs text-gray-500 text-center">
          💰 We earn commission on this link
        </p>
      </CardContent>
    </Card>
  );
}
