// DATA LAYER — Source of truth for all tool/guide content. Future: pull from Baserow API.

export type Tool = {
  id: string;
  name: string;
  emoji: string;
  category: 'Video' | 'Writing' | 'Design' | 'Automate' | 'Research' | 'Ops';
  tagClass: 'badge-video' | 'badge-writing' | 'badge-design' | 'badge-ops';
  description: string;
  pricing: string;
  pricingNumeric: number;
  affiliateUrl: string;
  hausePick: boolean;
  verdict: string;
};

export const tools: Tool[] = [
  {
    id: 'descript',
    name: 'Descript',
    emoji: '✂️',
    category: 'Video',
    tagClass: 'badge-video',
    description:
      'Edit video by editing the transcript. The fastest path from raw footage to polished, captioned YouTube content.',
    pricing: '$24/mo',
    pricingNumeric: 24,
    affiliateUrl: '',
    hausePick: true,
    verdict: '',
  },
  {
    id: 'opus-clip',
    name: 'Opus Clip',
    emoji: '🎯',
    category: 'Video',
    tagClass: 'badge-video',
    description:
      'Upload a long video, get 5 short clips with captions and a virality score. AI repurposing that actually works.',
    pricing: '$15/mo',
    pricingNumeric: 15,
    affiliateUrl: '',
    hausePick: true,
    verdict: '',
  },
  {
    id: 'claude',
    name: 'Claude',
    emoji: '🤖',
    category: 'Writing',
    tagClass: 'badge-writing',
    description:
      'The best AI for long-form content, scripting, and strategic thinking. Our daily driver for everything written.',
    pricing: '$20/mo',
    pricingNumeric: 20,
    affiliateUrl: '',
    hausePick: true,
    verdict: '',
  },
  {
    id: 'beehiiv',
    name: 'beehiiv',
    emoji: '🐝',
    category: 'Writing',
    tagClass: 'badge-writing',
    description:
      'The newsletter platform built for growth. Monetisation tools and analytics built in from day one.',
    pricing: 'Free to start',
    pricingNumeric: 0,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    emoji: '🎨',
    category: 'Design',
    tagClass: 'badge-design',
    description:
      'Thumbnails, social graphics, presentations. Pro is worth it for Brand Kit alone — keeps everything consistent.',
    pricing: '$15/mo',
    pricingNumeric: 15,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },
  {
    id: 'make',
    name: 'Make',
    emoji: '⚡',
    category: 'Automate',
    tagClass: 'badge-ops',
    description:
      'Visual automation builder. More powerful than Zapier per dollar. Build workflows that would take a VA 10 hours/week.',
    pricing: 'Free · 1K ops',
    pricingNumeric: 0,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    emoji: '🔍',
    category: 'Research',
    tagClass: 'badge-writing',
    description:
      'Search + AI synthesis with real sources cited. Research, competitor analysis, quick facts — faster than Google.',
    pricing: '$20/mo',
    pricingNumeric: 20,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },
  {
    id: 'notion',
    name: 'Notion',
    emoji: '📋',
    category: 'Ops',
    tagClass: 'badge-ops',
    description:
      'Content calendar, CRM, SOPs, and knowledge base — all in one place. The operating system for a lean team.',
    pricing: 'Free · Plus $10/mo',
    pricingNumeric: 10,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },
  {
    id: 'figma',
    name: 'Figma',
    emoji: '🖼️',
    category: 'Design',
    tagClass: 'badge-design',
    description:
      'The industry standard for product and brand design. Free tier is genuinely generous — good for most solo teams.',
    pricing: 'Free · Pro $15/mo',
    pricingNumeric: 15,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },
];
