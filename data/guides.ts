// DATA LAYER — Source of truth for all tool/guide content. Future: pull from Baserow API.

export type Guide = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryClass: 'badge-video' | 'badge-writing' | 'badge-design' | 'badge-ops';
  description: string;
  toolSlugs: string[];
  readTime: string;
  updatedDate: string;
  hausePick: boolean;
  status: 'live' | 'coming-soon';
  tldr: string;
};

export const guides: Guide[] = [
  {
    id: 'youtube-channel',
    title: 'Running a YouTube channel',
    subtitle: 'with 2 people',
    category: 'Video',
    categoryClass: 'badge-video',
    description:
      'Editing, thumbnails, repurposing, distribution. The full stack for a lean video business — 7 tools, honest tradeoffs.',
    toolSlugs: ['descript', 'opus-clip', 'canva-pro', 'claude', 'make', 'figma', 'perplexity'],
    readTime: '8 min read',
    updatedDate: 'Mar 2026',
    hausePick: true,
    status: 'live',
    tldr: 'A complete video production workflow for small teams. From transcript-based editing with Descript to AI-powered clips with Opus, plus design, automation, and research tools to run a sustainable YouTube channel.',
  },
  {
    id: 'newsletter',
    title: 'Launching a newsletter',
    subtitle: 'from scratch',
    category: 'Writing',
    categoryClass: 'badge-writing',
    description:
      'Platform, writing workflow, design, distribution, monetisation. Zero to 1,000 subscribers — what the stack looks like.',
    toolSlugs: ['beehiiv', 'claude', 'convertkit'],
    readTime: '6 min read',
    updatedDate: 'Mar 2026',
    hausePick: false,
    status: 'coming-soon',
    tldr: 'Start a profitable newsletter from nothing. Choose your platform (beehiiv for growth tools), write with AI assistance (Claude), and scale with ConvertKit when monetisation becomes a priority.',
  },
  {
    id: 'client-creative-work',
    title: 'Client creative work',
    subtitle: 'without a design team',
    category: 'Design',
    categoryClass: 'badge-design',
    description: '',
    toolSlugs: [],
    readTime: '',
    updatedDate: '',
    hausePick: false,
    status: 'coming-soon',
    tldr: '',
  },
  {
    id: 'building-product',
    title: 'Building a product',
    subtitle: 'with no dev team',
    category: 'Build',
    categoryClass: 'badge-ops',
    description: '',
    toolSlugs: [],
    readTime: '',
    updatedDate: '',
    hausePick: false,
    status: 'coming-soon',
    tldr: '',
  },
  {
    id: 'growing-social',
    title: 'Growing a content brand',
    subtitle: 'on social',
    category: 'Video',
    categoryClass: 'badge-video',
    description: '',
    toolSlugs: [],
    readTime: '',
    updatedDate: '',
    hausePick: false,
    status: 'coming-soon',
    tldr: '',
  },
];
