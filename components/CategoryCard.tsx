import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export function CategoryCard({ id, name, description, icon }: CategoryCardProps) {
  const slugs: { [key: string]: string } = {
    'image-gen': 'image-generation',
    writing: 'writing-content',
    video: 'video-audio',
    code: 'code-automation',
  };

  return (
    <Link href={`/${slugs[id]}`}>
      <Card className="cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-lg group">
        <CardHeader>
          <div className="text-5xl mb-4">{icon}</div>
          <CardTitle className="group-hover:text-primary transition-colors">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform inline-block">
            Explore →
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
