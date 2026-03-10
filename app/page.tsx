import Link from 'next/link';
import { TOOLS, GUIDES, CATEGORY_LABELS, type Category } from '@/lib/data';
import { CategoryBadge } from '@/components/category-badge';

const FILTER_TABS: { label: string; value: string }[] = [
  { label: '⭐ Hause Picks', value: 'picks' },
  { label: 'All', value: 'all' },
  { label: 'Video', value: 'video' },
  { label: 'Writing', value: 'writing' },
  { label: 'Design', value: 'design' },
  { label: 'Build', value: 'build' },
  { label: 'Automate', value: 'automate' },
];

export default function Home() {
  const liveGuides = GUIDES.filter((g) => g.live);
  const upcomingGuides = GUIDES.filter((g) => !g.live);
  const topTools = TOOLS.slice(0, 9);

  return (
    <>
      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-7 pt-12 pb-9">
        <div className="flex items-end justify-between gap-8 mb-7">
          <h1 className="font-display text-[clamp(30px,4.5vw,48px)] leading-[1.05] tracking-[-0.02em] text-fg">
            The stack for<br />
            <em className="not-italic text-brand">lean creative</em> businesses.
          </h1>
          <p className="text-[14px] text-muted leading-relaxed max-w-[320px] text-right hidden md:block">
            Curated guides and honest tool picks —<br />
            from a team that runs one.<br />
            No fluff. Just what works.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-2"
            width="16" height="16" viewBox="0 0 16 16" fill="none"
          >
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Find tools for video editing, newsletters, automation..."
            className="w-full bg-surface border border-border-h rounded-[10px] py-3.5 pl-11 pr-16 text-[15px] text-fg placeholder:text-muted-2 outline-none focus:border-brand/40 focus:shadow-[0_0_0_3px_rgba(255,78,100,0.08)] transition-all"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-muted-2 bg-card border border-border rounded px-1.5 py-0.5">
            ⌘K
          </span>
        </div>
      </section>

      {/* ── Directory ── */}
      <div className="max-w-[1200px] mx-auto px-7 pb-20">

        {/* Filter bar */}
        <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
          <div className="flex items-center gap-0.5">
            {FILTER_TABS.map((tab, i) => (
              <button
                key={tab.value}
                className={[
                  'text-[13px] font-medium px-3.5 py-1.5 rounded-md transition-colors',
                  i === 0
                    ? 'text-brand bg-brand/8'
                    : i === 1
                    ? 'text-fg bg-surface'
                    : 'text-muted hover:text-fg hover:bg-surface',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {['Free tier', 'AI-native', 'Paid only'].map((chip, i) => (
              <button
                key={chip}
                className={[
                  'text-[12px] border rounded-[5px] px-2.5 py-1 transition-colors',
                  i === 0
                    ? 'border-brand text-brand bg-brand/6'
                    : 'border-border text-muted hover:border-border-h hover:text-fg',
                ].join(' ')}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* ── Situation Guides ── */}
        <div className="flex items-center gap-3 mb-4 mt-1" id="guides">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-2 whitespace-nowrap">
            Situation guides
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-[11px] text-muted-2 whitespace-nowrap">
            {liveGuides.length} live · {upcomingGuides.length} coming soon
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
          {liveGuides.map((guide) => {
            const guideTools = guide.toolSlugs
              .slice(0, 4)
              .map((s) => TOOLS.find((t) => t.id === s)?.name)
              .filter(Boolean);
            const extra = guide.toolSlugs.length - guideTools.length;

            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group block bg-surface border border-border rounded-[10px] overflow-hidden hover:border-border-h hover:-translate-y-px hover:shadow-card-h transition-all duration-200 no-underline"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2.5 mb-2.5">
                    <CategoryBadge category={guide.category} />
                    {guide.hausePick && (
                      <span className="text-[10px] font-semibold text-brand flex items-center gap-1">
                        ⭐ Hause Pick
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-[18px] leading-snug text-fg mb-1.5 group-hover:text-brand transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-relaxed mb-3.5 line-clamp-2">
                    {guide.lede}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {guideTools.map((name) => (
                      <span
                        key={name}
                        className="text-[11px] text-muted bg-card border border-border rounded px-2 py-0.5"
                      >
                        {name}
                      </span>
                    ))}
                    {extra > 0 && (
                      <span className="text-[11px] text-muted bg-card border border-border rounded px-2 py-0.5">
                        +{extra} more
                      </span>
                    )}
                  </div>
                </div>
                <div className="border-t border-border px-5 py-2.5 flex items-center justify-between">
                  <span className="text-[11px] text-muted-2">
                    Updated {guide.updatedAt} · {guide.readTime} read
                  </span>
                  <span className="text-[12px] font-medium text-brand">
                    Read guide →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Coming soon strip */}
        <div className="border border-dashed border-border rounded-[9px] px-4 py-3.5 flex items-center justify-between gap-4 mb-8">
          <p className="text-[13px] text-muted-2">
            Coming soon:{' '}
            {upcomingGuides.map((g, i) => (
              <span key={g.slug}>
                <strong className="text-muted font-medium">{g.shortTitle}</strong>
                {i < upcomingGuides.length - 1 && ' · '}
              </span>
            ))}
          </p>
          <button className="text-[12px] text-brand border border-brand/25 rounded-[5px] px-3 py-1.5 hover:bg-brand/6 transition-colors whitespace-nowrap">
            Notify me
          </button>
        </div>

        {/* ── Top Tools ── */}
        <div className="flex items-center gap-3 mb-4" id="tools">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-2 whitespace-nowrap">
            Top tools
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-[11px] text-muted-2">{TOOLS.length} tools reviewed</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {topTools.map((tool) => (
            <a
              key={tool.id}
              href={tool.affiliateUrl}
              className="group block bg-surface border border-border rounded-[9px] p-4 hover:border-border-h hover:-translate-y-px transition-all duration-150 no-underline"
            >
              <div className="flex items-start justify-between mb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[7px] bg-card-2 border border-border flex items-center justify-center text-base flex-shrink-0">
                    {tool.emoji}
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-fg leading-tight">{tool.name}</div>
                    <CategoryBadge category={tool.category} className="mt-0.5" />
                  </div>
                </div>
                {tool.hausePick && <span className="text-brand text-[12px]">⭐</span>}
              </div>
              <p className="text-[12px] text-muted leading-[1.55] mb-2.5 line-clamp-2">
                {tool.tagline}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-2">
                  From <strong className="text-muted">{tool.pricingFrom}</strong>
                </span>
                <span className="text-[12px] text-muted-2 group-hover:text-brand transition-colors">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-6">
          <a href="#" className="text-[13px] text-muted hover:text-fg transition-colors">
            View all {TOOLS.length} tools →
          </a>
        </div>

        {/* ── Merchants ── */}
        <div className="border-t border-border mt-14 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" id="merchants">
          <div>
            <h2 className="font-display text-[22px] text-fg mb-1">Want to be featured here?</h2>
            <p className="text-[14px] text-muted">
              Editorial placements for tools that fit lean creative businesses. Starting at $300/month.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 bg-brand text-white text-[13px] font-medium px-5 py-2.5 rounded-[7px] hover:bg-brand-h transition-colors no-underline"
            >
              Partner with us →
            </a>
            <a href="#" className="text-[13px] text-muted hover:text-fg transition-colors">
              See how it works
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
