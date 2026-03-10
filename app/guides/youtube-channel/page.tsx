import Link from 'next/link';
import { CategoryBadge } from '@/components/category-badge';
import { TOOLS } from '@/lib/data';

const guide = {
  title: 'Running a YouTube channel with 2 people',
  category: 'video' as const,
  readTime: '8 min',
  updatedAt: 'March 2026',
  lede:
    'Production, editing, thumbnails, repurposing, distribution — the complete stack for a lean video business. No editors on retainer. No agency. Just two people and the right tools.',
};

const guideToolIds = ['descript', 'opus-clip', 'canva-pro', 'claude', 'notion'];
const guideTools = guideToolIds.map((id) => TOOLS.find((t) => t.id === id)).filter(Boolean);

const TOC = [
  { id: 'brief', label: 'The brief' },
  { id: 'editing', label: 'Editing' },
  { id: 'repurposing', label: 'Repurposing' },
  { id: 'thumbnails', label: 'Thumbnails & design' },
  { id: 'scripting', label: 'Scripts & ideation' },
  { id: 'comparison', label: 'Comparison table' },
  { id: 'verdict', label: 'What we\'d do' },
  { id: 'alternatives', label: 'Alternatives' },
];

export const metadata = {
  title: 'Running a YouTube Channel with 2 People — HauseResource',
  description:
    'The complete tool stack for a 2-person YouTube channel. Editing, repurposing, thumbnails, scripting — honest picks with real tradeoffs.',
};

export default function YouTubeChannelGuide() {
  return (
    <div className="max-w-[1200px] mx-auto px-7">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 py-5 text-[12px] text-muted">
        <Link href="/" className="hover:text-fg transition-colors">HauseResource</Link>
        <span className="text-muted-2">/</span>
        <span>Video</span>
        <span className="text-muted-2">/</span>
        <span className="text-muted-2 truncate">Running a YouTube channel with 2 people</span>
      </div>

      {/* Article header */}
      <header className="pb-10 border-b border-border mb-0">
        <div className="flex items-center gap-2.5 mb-5">
          <CategoryBadge category={guide.category} />
          <span className="text-[12px] text-muted">{guide.readTime} read</span>
          <span className="text-muted-2">·</span>
          <span className="text-[12px] text-muted">{guideToolIds.length} tools reviewed</span>
          <span className="text-muted-2">·</span>
          <span className="text-[12px] text-muted">Updated {guide.updatedAt}</span>
        </div>
        <h1 className="font-display text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.02em] text-fg max-w-2xl mb-4">
          Running a YouTube channel<br />
          with{' '}
          <em className="not-italic text-brand">2 people.</em>
        </h1>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl">
          {guide.lede}
        </p>
      </header>

      {/* 3-column body */}
      <div className="grid grid-cols-[200px_1fr_260px] gap-12 py-12 items-start">

        {/* TOC */}
        <aside className="sticky top-20">
          <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-muted-2 mb-3.5">
            On this page
          </p>
          <ul className="space-y-0.5">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={[
                    'block text-[13px] py-1.5 pl-2.5 border-l-2 transition-colors',
                    i === 0
                      ? 'text-fg border-brand'
                      : 'text-muted border-transparent hover:text-fg hover:border-border-h',
                  ].join(' ')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Article content */}
        <article className="min-w-0 space-y-14">

          {/* Brief */}
          <section id="brief">
            <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-brand mb-2">The brief</p>
            <h2 className="font-display text-[26px] tracking-[-0.01em] text-fg mb-3.5">Who this is for</h2>
            <div className="space-y-3 text-[15px] leading-[1.75] text-[#c8c2bc]">
              <p>
                You're running a YouTube channel as a business — not a hobby. Two people, or maybe just you. You publish consistently (1–2x per week) and the goal is audience growth, brand building, and eventually sponsorship revenue.
              </p>
              <p>
                You don't have an editor on retainer. You're not outsourcing to an agency. Every hour spent on post-production is an hour not spent creating — so the tools in this stack need to be genuinely fast, not just theoretically capable.
              </p>
              <p>
                <strong className="text-fg">"Good" for this situation</strong> means: you can take raw footage to a polished, captioned, multi-platform-ready video in under 2 hours.
              </p>
            </div>
          </section>

          {/* Editing */}
          <section id="editing">
            <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-brand mb-2">Editing</p>
            <h2 className="font-display text-[26px] tracking-[-0.01em] text-fg mb-3.5">The editing stack</h2>
            <p className="text-[15px] leading-[1.75] text-[#c8c2bc] mb-6">
              For a 2-person team, the editing tool is the most important decision you'll make. It needs to be fast to learn, fast to use, and capable of producing content that looks intentional — not amateur.
            </p>

            {/* Tool entry: Descript */}
            <ToolEntry
              emoji="✂️"
              name="Descript"
              category="Video & audio editing"
              verdict="Edit your video by editing the transcript. Delete a word, the clip disappears. It's genuinely that simple."
              body="Descript turns video editing into document editing. The transcript-first workflow means you can rough-cut a 30-minute recording in 20 minutes by deleting filler words, ums, and sections you don't want — without touching a timeline. The AI removes silences automatically. Eye contact correction fixes off-camera glances. It's not perfect for motion graphics or colour grading, but for talking-head YouTube content it's the fastest path from raw to polished."
              pricing="Free tier available. Creator plan $24/month. Pro $40/month."
              badge="Hause Pick"
              affiliateUrl="#"
            />

            {/* Tool entry: CapCut */}
            <ToolEntry
              emoji="🎬"
              name="CapCut for Desktop"
              category="Alternative editor"
              verdict="If you're more comfortable in a traditional timeline editor and want short-form built in, CapCut is your pick."
              body="CapCut has a free desktop version that's surprisingly capable for YouTube-first creators. The auto-caption quality is strong, short-form templates are built in, and the learning curve is gentler than Premiere. If your content is more visual (travel, B-roll heavy) than talking-head, CapCut is worth serious consideration. The main limitation: no transcript editing."
              pricing="Desktop version free. CapCut Pro $10/month."
              badge="Also consider"
              affiliateUrl="#"
            />
          </section>

          {/* Repurposing */}
          <section id="repurposing">
            <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-brand mb-2">Repurposing</p>
            <h2 className="font-display text-[26px] tracking-[-0.01em] text-fg mb-3.5">Turn one video into five pieces</h2>
            <p className="text-[15px] leading-[1.75] text-[#c8c2bc] mb-6">
              A 10-minute YouTube video is also 5 TikToks, 3 Reels, 8 tweets, and a newsletter section — if you have the right tool. Repurposing used to take 2 hours. With the right stack, it's 20 minutes.
            </p>
            <ToolEntry
              emoji="🎯"
              name="Opus Clip"
              category="AI video repurposing"
              verdict="Upload a long video. Get 5 short clips with captions, cropped correctly, and a virality score. It actually works."
              body="Opus Clip uses AI to find the highest-engagement moments in a long video, crop them to vertical, add animated captions, and export them ready-to-post. The virality score is a genuine signal, not a gimmick. The main limitation: AI clips are usually 80% right — expect to spend 5 minutes per clip trimming the start/end. Still much faster than manual selection and export."
              pricing="Free tier (60 mins/month). Pro $15/month for 150 mins."
              badge="Hause Pick"
              affiliateUrl="#"
            />
          </section>

          {/* Comparison */}
          <section id="comparison">
            <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-brand mb-2">Comparison</p>
            <h2 className="font-display text-[26px] tracking-[-0.01em] text-fg mb-3.5">Editing tools compared</h2>
            <p className="text-[15px] leading-[1.75] text-[#c8c2bc] mb-5">
              Four editors for lean YouTube teams — across the criteria that actually matter.
            </p>
            <div className="border border-border rounded-[10px] overflow-hidden mb-3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-card border-b border-border">
                    {['Tool', 'Transcript edit', 'Auto-captions', 'Short-form', 'Curve', 'Price/mo'].map((h) => (
                      <th key={h} className="text-left px-4 py-2.5 text-[11px] font-semibold tracking-wide uppercase text-muted">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Descript', cols: ['✓', '✓', '~', 'Low', '$24'], winner: true },
                    { name: 'CapCut', cols: ['✗', '✓', '✓', 'Low', 'Free'], winner: false },
                    { name: 'Premiere Pro', cols: ['✗', '~', '~', 'High', '$60'], winner: false },
                    { name: 'Final Cut Pro', cols: ['✗', '~', '✗', 'Medium', '$300 once'], winner: false },
                  ].map((row) => (
                    <tr key={row.name} className={`border-b border-border last:border-0 ${row.winner ? 'bg-brand/[0.03]' : ''}`}>
                      <td className={`px-4 py-3 text-[13px] font-medium ${row.winner ? 'text-brand' : 'text-fg'}`}>
                        {row.name}
                      </td>
                      {row.cols.map((val, i) => (
                        <td key={i} className="px-4 py-3 text-[13px] text-muted">
                          <span className={val === '✓' ? 'text-emerald-400' : val === '✗' ? 'text-muted-2' : 'text-yellow-400'}>
                            {val}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Verdict */}
          <section id="verdict">
            <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-brand mb-2">What we'd do</p>
            <h2 className="font-display text-[26px] tracking-[-0.01em] text-fg mb-5">If we were starting this channel today</h2>
            <div className="bg-gradient-to-br from-brand/6 to-brand/[0.02] border border-brand/15 rounded-[10px] px-7 py-6">
              <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-brand mb-3">Our honest take — Hause Collective</p>
              <div className="text-[15px] leading-[1.7] text-fg space-y-3">
                <p>
                  Start with Descript on the Creator plan. The transcript editing workflow alone saves 45 minutes per video. Use Opus Clip to pull short-form from every video — don't build a separate short-form workflow until you've validated that your content works in long-form first.
                </p>
                <p className="text-[#bab4ae] italic">
                  Add Canva Pro for thumbnails once you've shipped 10 videos and found your visual style — not before. Too many creators obsess over thumbnails before they've figured out what they're actually saying.
                </p>
                <p>
                  The mistake we see: using five tools from day one and mastering none. Lock in Descript + Opus Clip for 90 days. Then layer in the rest.
                </p>
              </div>
            </div>
          </section>

          {/* Alternatives */}
          <section id="alternatives">
            <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-brand mb-2">Alternatives</p>
            <h2 className="font-display text-[26px] tracking-[-0.01em] text-fg mb-3.5">Tools that didn't make the cut — and why</h2>
            <p className="text-[15px] leading-[1.75] text-[#c8c2bc] mb-5">These tools are good. They just didn't win for this specific situation.</p>
            <div className="bg-surface border border-border rounded-[10px] overflow-hidden divide-y divide-border">
              {[
                { emoji: '🎞️', name: 'Adobe Premiere Pro', why: 'Industry standard for a reason — but the learning curve is steep for a 2-person team with no dedicated editor. $60/month for features you won\'t use for 80% of YouTube content.' },
                { emoji: '🎥', name: 'Riverside.fm', why: 'Excellent for podcast-first creators. If your YouTube content is interview-based, Riverside\'s local recording quality beats everything. Doesn\'t make the cut here because it\'s a recording tool, not an editing workflow.' },
                { emoji: '📱', name: 'Submagic', why: 'Great auto-captions for short-form. But Opus Clip does captions plus clip selection plus virality scoring. Submagic loses unless you\'re doing all your own clip selection manually.' },
              ].map((alt) => (
                <div key={alt.name} className="flex items-start gap-3 p-4">
                  <div className="w-8 h-8 rounded-[6px] bg-card-2 border border-border flex items-center justify-center text-sm flex-shrink-0">
                    {alt.emoji}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-fg mb-1">{alt.name}</p>
                    <p className="text-[13px] text-muted leading-[1.55]">{alt.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </article>

        {/* Right rail */}
        <aside className="sticky top-20 space-y-5">

          {/* Quick Pick */}
          <div className="bg-surface border border-border rounded-[12px] overflow-hidden">
            <div className="bg-card border-b border-border px-4 py-3">
              <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-brand">⭐ Hause Pick — Editing</p>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-11 h-11 rounded-[10px] bg-card-2 border border-border flex items-center justify-center text-xl">✂️</div>
                <div>
                  <p className="text-[15px] font-medium text-fg">Descript</p>
                  <p className="text-[11px] text-muted">Video editing</p>
                </div>
              </div>
              <p className="text-[13px] text-[#bab4ae] leading-relaxed mb-3.5">
                Edit video like a document. The fastest path from raw footage to polished, captioned, ready-to-publish YouTube content.
              </p>
              <div className="space-y-1.5 mb-3.5">
                {[['Free tier', 'Yes'], ['Creator', '$24/mo'], ['Pro', '$40/mo']].map(([label, val]) => (
                  <div key={label} className="flex justify-between text-[12px]">
                    <span className="text-muted">{label}</span>
                    <span className="text-fg font-medium">{val}</span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="flex items-center justify-center gap-1.5 w-full bg-brand text-white text-[13px] font-medium py-2.5 rounded-[7px] hover:bg-brand-h transition-colors no-underline"
              >
                Start free trial →
              </a>
              <p className="text-[11px] text-muted-2 text-center mt-2">Affiliate link · We earn a commission</p>
            </div>
          </div>

          {/* All tools in guide */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-muted-2 mb-3">All tools in this guide</p>
            <div className="space-y-2">
              {guideTools.map((tool) => tool && (
                <a
                  key={tool.id}
                  href={tool.affiliateUrl}
                  className="flex items-center gap-2.5 bg-surface border border-border rounded-[8px] px-3.5 py-2.5 hover:border-border-h transition-colors no-underline group"
                >
                  <div className="w-7 h-7 rounded-[5px] bg-card-2 border border-border flex items-center justify-center text-[13px] flex-shrink-0">
                    {tool.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-fg truncate">{tool.name}</p>
                    <p className="text-[11px] text-muted">{CATEGORY_LABELS_LOCAL[tool.category]}</p>
                  </div>
                  <span className="text-[12px] text-muted-2 group-hover:text-brand transition-colors">→</span>
                </a>
              ))}
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}

/* ── Helpers ── */

const CATEGORY_LABELS_LOCAL: Record<string, string> = {
  video: 'Video', writing: 'Writing', design: 'Design',
  build: 'Build', automate: 'Automate', ops: 'Ops', research: 'Research',
};

function ToolEntry({
  emoji, name, category, verdict, body, pricing, badge, affiliateUrl,
}: {
  emoji: string; name: string; category: string; verdict: string;
  body: string; pricing: string; badge: 'Hause Pick' | 'Also consider'; affiliateUrl: string;
}) {
  const isPick = badge === 'Hause Pick';
  return (
    <div className="bg-surface border border-border rounded-[10px] p-6 mb-4 hover:border-border-h transition-colors">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[8px] bg-card-2 border border-border flex items-center justify-center text-lg flex-shrink-0">
            {emoji}
          </div>
          <div>
            <h3 className="text-[16px] font-medium text-fg">{name}</h3>
            <p className="text-[11px] text-muted">{category}</p>
          </div>
        </div>
        <span
          className={`text-[11px] font-semibold px-2.5 py-1 rounded-[5px] whitespace-nowrap ${
            isPick ? 'bg-brand/10 text-brand' : 'bg-surface text-muted border border-border'
          }`}
        >
          {badge}
        </span>
      </div>
      <p className="text-[14px] italic text-[#bab4ae] leading-[1.55] border-l-2 border-brand pl-3 mb-3">
        "{verdict}"
      </p>
      <p className="text-[14px] text-muted leading-[1.65] mb-3.5">{body}</p>
      <div className="border-t border-border pt-3.5 flex items-center justify-between">
        <span className="text-[12px] text-muted">{pricing}</span>
        <a href={affiliateUrl} className="text-[12px] font-medium text-brand flex items-center gap-1 no-underline">
          Try {name} →
        </a>
      </div>
    </div>
  );
}
