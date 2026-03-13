import { getTools, getGuides } from '@/lib/resource-data';

export default async function sitemap() {
  const [tools, guides] = await Promise.all([getTools(), getGuides()]);

  const base = 'https://hause-resource.vercel.app';

  const toolUrls = tools.map((t) => ({
    url: `${base}/tools/${t.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const guideUrls = guides
    .filter((g) => g.status === 'live')
    .map((g) => ({
      url: `${base}/guides/${g.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...guideUrls,
    ...toolUrls,
  ];
}
