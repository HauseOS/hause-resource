export type Category = 'video' | 'writing' | 'design' | 'build' | 'automate' | 'ops' | 'research';

export type Tool = {
  id: string;
  name: string;
  emoji: string;
  category: Category;
  tagline: string;
  description: string;
  pricing: string;
  pricingFrom: string;
  hasFree: boolean;
  isAiNative: boolean;
  hausePick: boolean;
  affiliateUrl: string;
  commission?: string;
};

export type Guide = {
  slug: string;
  title: string;
  shortTitle: string;
  category: Category;
  readTime: string;
  updatedAt: string;
  lede: string;
  toolSlugs: string[];
  live: boolean;
  hausePick?: boolean;
};

export const TOOLS: Tool[] = [
  {
    id: 'descript',
    name: 'Descript',
    emoji: '✂️',
    category: 'video',
    tagline: 'Edit video by editing the transcript.',
    description: 'The fastest path from raw footage to polished, captioned YouTube content. Delete words in the transcript — the video clip disappears. Built for talking-head content creators.',
    pricing: 'Creator $24/mo · Pro $40/mo',
    pricingFrom: '$24/mo',
    hasFree: true,
    isAiNative: true,
    hausePick: true,
    affiliateUrl: '#',
    commission: '15%',
  },
  {
    id: 'opus-clip',
    name: 'Opus Clip',
    emoji: '🎯',
    category: 'video',
    tagline: 'AI repurposing that actually works.',
    description: 'Upload a long video, get 5 short clips with captions and a virality score. The AI finds the best moments, crops to vertical, and exports ready-to-post. 80% right out of the box.',
    pricing: 'Pro $15/mo · 150 mins/mo',
    pricingFrom: '$15/mo',
    hasFree: true,
    isAiNative: true,
    hausePick: true,
    affiliateUrl: '#',
    commission: '20%',
  },
  {
    id: 'claude',
    name: 'Claude',
    emoji: '🤖',
    category: 'writing',
    tagline: 'The best AI for thinking and long-form content.',
    description: 'Our daily driver for scripting, strategy, email drafts, and anything that needs genuine reasoning. Better than GPT-4 for nuanced, long-form work.',
    pricing: 'Pro $20/mo',
    pricingFrom: '$20/mo',
    hasFree: true,
    isAiNative: true,
    hausePick: true,
    affiliateUrl: '#',
  },
  {
    id: 'beehiiv',
    name: 'beehiiv',
    emoji: '🐝',
    category: 'writing',
    tagline: 'The newsletter platform built for growth.',
    description: 'Monetisation tools, referral programs, and serious analytics built in from day one. The platform that grows with you, unlike Substack.',
    pricing: 'Scale $42/mo',
    pricingFrom: 'Free to start',
    hasFree: true,
    isAiNative: false,
    hausePick: false,
    affiliateUrl: '#',
    commission: '30%',
  },
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    emoji: '🎨',
    category: 'design',
    tagline: 'Thumbnails, graphics, and brand assets — fast.',
    description: 'Pro is worth it for Brand Kit alone. Keeps every thumbnail, social graphic, and presentation consistent without a designer. Templates are actually good.',
    pricing: 'Pro $15/mo',
    pricingFrom: '$15/mo',
    hasFree: true,
    isAiNative: false,
    hausePick: false,
    affiliateUrl: '#',
    commission: '15%',
  },
  {
    id: 'make',
    name: 'Make',
    emoji: '⚡',
    category: 'automate',
    tagline: 'Visual automation — more power per dollar than Zapier.',
    description: 'Build workflows that would take a VA 10 hours/week. More complex than Zapier but significantly cheaper for the same automation power.',
    pricing: 'Core $9/mo · Pro $16/mo',
    pricingFrom: 'Free · 1K ops/mo',
    hasFree: true,
    isAiNative: false,
    hausePick: false,
    affiliateUrl: '#',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    emoji: '🔍',
    category: 'research',
    tagline: 'Search + AI synthesis with real sources.',
    description: 'Research, competitor analysis, quick facts — faster than a tab of Google searches. Sources are cited and linkable. Pro adds unlimited Claude/GPT-4 access.',
    pricing: 'Pro $20/mo',
    pricingFrom: 'Free',
    hasFree: true,
    isAiNative: true,
    hausePick: false,
    affiliateUrl: '#',
    commission: '25%',
  },
  {
    id: 'notion',
    name: 'Notion',
    emoji: '📋',
    category: 'ops',
    tagline: 'Content calendar, CRM, SOPs — one place.',
    description: 'The operating system for a lean team. Content calendar, partnership CRM, process docs, and team wiki all live here. Free tier is genuinely enough for most solo creators.',
    pricing: 'Plus $10/mo',
    pricingFrom: 'Free',
    hasFree: true,
    isAiNative: false,
    hausePick: false,
    affiliateUrl: '#',
  },
  {
    id: 'figma',
    name: 'Figma',
    emoji: '🖼️',
    category: 'design',
    tagline: 'Industry-standard design. Free tier is generous.',
    description: 'Product design, brand guidelines, social templates — Figma handles all of it. The free tier allows 3 projects which is genuinely enough for most solo teams.',
    pricing: 'Pro $15/mo/seat',
    pricingFrom: 'Free',
    hasFree: true,
    isAiNative: false,
    hausePick: false,
    affiliateUrl: '#',
  },
];

export const GUIDES: Guide[] = [
  {
    slug: 'youtube-channel',
    title: 'Running a YouTube channel with 2 people',
    shortTitle: 'YouTube channel with 2 people',
    category: 'video',
    readTime: '8 min',
    updatedAt: 'Mar 2026',
    lede: "Production, editing, thumbnails, repurposing, distribution. The full stack for a lean video business — 7 tools, honest tradeoffs, and what we'd actually do.",
    toolSlugs: ['descript', 'opus-clip', 'canva-pro', 'claude', 'notion'],
    live: true,
    hausePick: true,
  },
  {
    slug: 'newsletter',
    title: 'Launching a newsletter from scratch',
    shortTitle: 'Newsletter from scratch',
    category: 'writing',
    readTime: '6 min',
    updatedAt: 'Mar 2026',
    lede: 'Platform choice, writing workflow, design, distribution, and monetisation. Everything to go from zero to first 1,000 subscribers.',
    toolSlugs: ['beehiiv', 'claude', 'notion'],
    live: true,
    hausePick: false,
  },
  {
    slug: 'client-design-work',
    title: 'Client creative work without a design team',
    shortTitle: 'Client design work solo',
    category: 'design',
    readTime: '7 min',
    updatedAt: 'Coming soon',
    lede: 'Figma, AI design tools, client delivery — working solo at agency quality.',
    toolSlugs: ['figma', 'canva-pro'],
    live: false,
  },
  {
    slug: 'build-no-dev',
    title: 'Building a digital product with no dev team',
    shortTitle: 'Digital product without developers',
    category: 'build',
    readTime: '9 min',
    updatedAt: 'Coming soon',
    lede: 'No-code, AI builders, deployment — ship a real product without engineers.',
    toolSlugs: [],
    live: false,
  },
];

export const CATEGORY_LABELS: Record<Category, string> = {
  video: 'Video',
  writing: 'Writing',
  design: 'Design',
  build: 'Build',
  automate: 'Automate',
  ops: 'Ops',
  research: 'Research',
};

export const CATEGORY_COLORS: Record<Category, { bg: string; text: string }> = {
  video:    { bg: 'bg-brand/10',   text: 'text-brand' },
  writing:  { bg: 'bg-blue-500/10',  text: 'text-blue-400' },
  design:   { bg: 'bg-violet-500/10', text: 'text-violet-400' },
  build:    { bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
  automate: { bg: 'bg-yellow-500/10', text: 'text-yellow-400' },
  ops:      { bg: 'bg-orange-500/10', text: 'text-orange-400' },
  research: { bg: 'bg-cyan-500/10',   text: 'text-cyan-400' },
};
