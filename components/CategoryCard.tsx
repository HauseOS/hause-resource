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
      <div className="card group cursor-pointer">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#ff4e64] transition-colors mb-2">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-[#ff4e64] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
          Explore →
        </p>
      </div>
    </Link>
  );
}
