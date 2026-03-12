// DATA LAYER — Source of truth for all tool/guide content. Future: pull from Supabase.

export type Tool = {
  id: string;
  name: string;
  category: 'Video' | 'Writing' | 'Design' | 'Automate' | 'Research' | 'Ops';
  tagClass: 'badge-video' | 'badge-writing' | 'badge-design' | 'badge-automate' | 'badge-research' | 'badge-ops';
  description: string;
  bestFor: string;
  replaces: string;
  basis: 'Personally tested' | 'YouTube-reviewed' | 'Research pick' | 'Community proven';
  pricing: string;
  pricingNumeric: number;
  affiliateUrl: string;
  affiliateNote?: string;
  hausePick: boolean;
  verdict: string;
  youtubeId?: string;
  promoCode?: string;
};

export const tools: Tool[] = [
  // ── HAUSE PICKS ──────────────────────────────────────────────────────────────

  {
    id: 'descript',
    name: 'Descript',
    category: 'Video',
    tagClass: 'badge-video',
    description:
      'Edit video by editing the transcript. The fastest path from raw footage to polished, captioned YouTube content.',
    bestFor: 'Editing talking-head and interview video content',
    replaces: 'Traditional timeline editing — cuts editing time significantly',
    basis: 'Personally tested',
    pricing: 'From $24/mo',
    pricingNumeric: 24,
    affiliateUrl: '',
    hausePick: true,
    verdict:
      'The transcript-edit workflow cuts editing time significantly — remove filler, tighten pacing, add captions without touching a timeline. A strong default for any talking-head YouTube channel.',
  },
  {
    id: 'opus-clip',
    name: 'Opus Clip',
    category: 'Video',
    tagClass: 'badge-video',
    description:
      'Upload a long video, get 5 short clips with captions and a virality score. AI repurposing that actually works.',
    bestFor: 'Repurposing long-form video into short vertical clips',
    replaces: 'Manual clip selection, cropping, and caption export',
    basis: 'Personally tested',
    pricing: 'From $15/mo',
    pricingNumeric: 15,
    affiliateUrl: '',
    hausePick: true,
    verdict:
      'One long video becomes 5 shorts in under 10 minutes. The virality scoring is surprisingly accurate — it correctly identifies the most hook-worthy moments. Worth it purely for the time saved on manual clipping.',
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'Writing',
    tagClass: 'badge-writing',
    description:
      'Strong at long-form content, scripting, and strategic thinking. One of the most capable AI writing tools available.',
    bestFor: 'Long-form scripting, strategy docs, and email drafts',
    replaces: 'Hours writing from a blank page',
    basis: 'Personally tested',
    pricing: 'From $20/mo',
    pricingNumeric: 20,
    affiliateUrl: '',
    hausePick: true,
    verdict:
      'Handles nuance and long context better than any other model. Ideal for scripts, emails, strategy docs, and research summaries. If you only pay for one AI tool, make it this one.',
  },

  // ── VIDEO ─────────────────────────────────────────────────────────────────────

  {
    id: 'vmeg',
    name: 'VMEG',
    category: 'Video',
    tagClass: 'badge-video',
    description:
      'One video, any language. VMEG dubs, lip-syncs, and subtitles content automatically — reach a global audience without re-recording.',
    bestFor: 'Dubbing and subtitling videos for global audiences',
    replaces: 'Hiring translators or dubbing studios',
    basis: 'Research pick',
    pricing: 'From $29/mo',
    pricingNumeric: 29,
    affiliateUrl: 'https://vmeg.ai?rc=GdiYTMGM',
    hausePick: false,
    verdict:
      'Tested with a real English clip dubbed to Danish with full lip-sync. The result was genuinely impressive. For educational content creators targeting non-English markets, this is the most painless path.',
    youtubeId: '8_p82G3M4zQ',
  },

  // ── WRITING / AI ─────────────────────────────────────────────────────────────

  {
    id: 'beehiiv',
    name: 'beehiiv',
    category: 'Writing',
    tagClass: 'badge-writing',
    description:
      'The newsletter platform built for growth. Monetisation tools and analytics built in from day one.',
    bestFor: 'Building and monetising a newsletter audience',
    replaces: 'Mailchimp — which wasn\'t built for creator economics',
    basis: 'Research pick',
    pricing: 'Free to start',
    pricingNumeric: 0,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },

  // ── DESIGN ───────────────────────────────────────────────────────────────────

  {
    id: 'canva-pro',
    name: 'Canva Pro',
    category: 'Design',
    tagClass: 'badge-design',
    description:
      'Thumbnails, social graphics, presentations. Pro is worth it for Brand Kit alone — keeps everything consistent.',
    bestFor: 'Thumbnails, social graphics, and brand template management',
    replaces: 'Adobe suite for teams without a dedicated designer',
    basis: 'Personally tested',
    pricing: 'From $15/mo',
    pricingNumeric: 15,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },
  {
    id: 'flora',
    name: 'FLORA',
    category: 'Design',
    tagClass: 'badge-design',
    description:
      'AI brand identity workspace. Start from a reference image, generate logo directions, typography, visual language, and social assets — all in one canvas.',
    bestFor: 'AI-driven brand identity and visual direction',
    replaces: 'Early-stage brand design retainers',
    basis: 'Research pick',
    pricing: 'From $19/mo',
    pricingNumeric: 19,
    affiliateUrl: 'https://dub.florafauna.ai/hause',
    affiliateNote: 'Link automatically applies 50% off at checkout',
    hausePick: false,
    verdict:
      'FLORA was used to build a full brand identity from scratch — from a single reference image to logos, type, colour palette, and social templates. The branching workspace keeps iterations clean. Strong pick for solo creators who need brand consistency fast.',
    youtubeId: 'zSIoQl-Vn2c',
  },
  {
    id: 'napkin-ai',
    name: 'Napkin AI',
    category: 'Design',
    tagClass: 'badge-design',
    description:
      'Paste text, get clean visuals in seconds. Diagrams, charts, infographics — no design skills required, full edit control.',
    bestFor: 'Turning text and ideas into visual diagrams instantly',
    replaces: 'Manual charting in Lucidchart or PowerPoint',
    basis: 'Research pick',
    pricing: 'Free · Pro from $8/mo',
    pricingNumeric: 8,
    affiliateUrl: 'https://napkin.ai/',
    promoCode: 'HAC20',
    affiliateNote: 'Use code HAC20 for 20% off',
    hausePick: false,
    verdict:
      'Napkin AI genuinely surprises. Paste a paragraph, it generates multiple visual interpretations — pick one, edit it, export to PPT/PNG/SVG. A go-to for decks and blog visuals. The free tier is usable.',
    youtubeId: '43J0f-f03-o',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design',
    tagClass: 'badge-design',
    description:
      'The industry standard for product and brand design. Free tier is genuinely generous — good for most solo teams.',
    bestFor: 'Product design, UI, and collaborative brand assets',
    replaces: 'Adobe XD and Sketch for modern design teams',
    basis: 'Personally tested',
    pricing: 'Free · Pro $15/mo',
    pricingNumeric: 15,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },

  // ── AUTOMATE ─────────────────────────────────────────────────────────────────

  {
    id: 'make',
    name: 'Make',
    category: 'Automate',
    tagClass: 'badge-automate',
    description:
      'Visual automation builder. More powerful than Zapier per dollar. Build workflows that would take a VA 10 hours/week.',
    bestFor: 'Automating repetitive multi-step workflows without code',
    replaces: 'A VA spending 10+ hours/week on manual processes',
    basis: 'Personally tested',
    pricing: 'Free · 1K ops',
    pricingNumeric: 0,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },

  // ── RESEARCH ─────────────────────────────────────────────────────────────────

  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'Research',
    tagClass: 'badge-research',
    description:
      'Search + AI synthesis with real sources cited. Research, competitor analysis, quick facts — faster than Google.',
    bestFor: 'Research and competitor analysis with cited sources',
    replaces: 'Manual Google searches and tab sprawl',
    basis: 'Personally tested',
    pricing: 'From $20/mo',
    pricingNumeric: 20,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },

  // ── OPS ──────────────────────────────────────────────────────────────────────

  {
    id: 'notion',
    name: 'Notion',
    category: 'Ops',
    tagClass: 'badge-ops',
    description:
      'Content calendar, CRM, SOPs, and knowledge base — all in one place. The operating system for a lean team.',
    bestFor: 'Content calendar, SOPs, CRM, and team knowledge base',
    replaces: 'Separate tools for project management and documentation',
    basis: 'Personally tested',
    pricing: 'Free · Plus $10/mo',
    pricingNumeric: 10,
    affiliateUrl: '',
    hausePick: false,
    verdict: '',
  },
  {
    id: 'plus-ai',
    name: 'Plus AI',
    category: 'Ops',
    tagClass: 'badge-ops',
    description:
      'AI presentation builder inside Google Slides and PowerPoint. Generate full decks from a prompt, then edit normally.',
    bestFor: 'Generating full slide decks from a prompt or outline',
    replaces: 'Hours building presentations from scratch in PowerPoint',
    basis: 'Research pick',
    pricing: 'From $10/mo',
    pricingNumeric: 10,
    affiliateUrl: 'https://www.plusdocs.com/?utm_medium=affiliate&utm_source=affiliate&via=hause',
    hausePick: false,
    verdict:
      'Plus AI converts instantly for anyone who dreads building decks. Write a prompt, get a structured outline, approve it, get a full slide deck. Looks like a real presentation, not AI slop. The Google Slides plugin is seamless.',
    youtubeId: 'GXK3eot8Sl0',
  },
];
