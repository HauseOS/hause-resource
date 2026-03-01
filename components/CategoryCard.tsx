import Link from 'next/link';

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
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-8 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 cursor-pointer group">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-2">
          {name}
        </h3>
        <p className="text-gray-400">{description}</p>
        <p className="text-red-400 text-sm mt-4 group-hover:translate-x-1 transition-transform">
          Explore →
        </p>
      </div>
    </Link>
  );
}
