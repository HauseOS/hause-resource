import Link from 'next/link';
import { Nav } from '@/components/nav';
import { ToolsDirectory } from '@/components/tools-directory';
import { tools } from '@/data/tools';
import { guides } from '@/data/guides';
import { searchPlaceholder, merchantCtaHeadline, merchantCtaDescription } from '@/data/copy';

export default function Home() {
  const liveGuides = guides.filter(g => g.status === 'live');
  const comingSoonGuides = guides.filter(g => g.status === 'coming-soon');
  const toolCategories = [...new Set(tools.map(t => t.category))];

  const ytGuide = guides.find(g => g.id === 'youtube-channel')!;
  const ytTools = ytGuide.toolSlugs
    .slice(0, 5)
    .map(slug => tools.find(t => t.id === slug))
    .filter(Boolean);
  const ytExtraCount = ytGuide.toolSlugs.length - 5;

  return (
    <>
      <Nav />

      {/* ── Magazine Hero ── */}
      <div className="hero-magazine">
        <div className="hero-mag-inner">
          <div className="hero-mag-pill">
            By Hause Collective &middot; <span>35K subscribers</span>
          </div>
          <h1 className="hero-mag-headline">
            Real tools.<br />
            <span className="line-dim">Real situations.</span><br />
            <span className="line-brand">No fluff.</span>
          </h1>
          <p className="hero-mag-body">
            We&apos;re a 2-person creative business. These are the tools that
            actually made the cut &mdash; organised around what you&apos;re
            trying to build, not marketing categories.
          </p>
          <div className="hero-mag-actions">
            <a href="#guides" className="btn-hero-primary">Browse situations &rarr;</a>
            <a href="#tools" className="btn-hero-ghost">See all {tools.length} tools</a>
          </div>
        </div>
      </div>

      {/* ── Ticker Strip ── */}
      <div className="ticker-strip">
        <div className="ticker-label">SITUATIONS COVERED</div>
        <div className="ticker-scroll">
          <div className="ticker-item live">
            <span className="ticker-dot" />
            Running a YouTube channel with 2 people
          </div>
          <div className="ticker-item">
            <span className="ticker-dot dim" />
            Launching a newsletter from scratch
            <span className="ticker-soon">Soon</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-dot dim" />
            Client work without a design team
            <span className="ticker-soon">Soon</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-dot dim" />
            Building a product with no dev team
            <span className="ticker-soon">Soon</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-dot dim" />
            Growing a content brand on social
            <span className="ticker-soon">Soon</span>
          </div>
        </div>
      </div>

      {/* ── Situations Grid ── */}
      <section className="situations-section" id="guides">
        <div className="situations-header">
          <h2 className="situations-title">Situation guides</h2>
          <span className="situations-meta">
            {liveGuides.length} live &middot; {comingSoonGuides.length} coming soon
          </span>
        </div>

        <div className="sit-grid">
          {/* Featured live guide */}
          <div className="sit-featured">
            <span className="sit-featured-badge">
              ⭐ Hause Pick &middot; Video &middot; {ytGuide.readTime}
            </span>
            <h3 className="sit-featured-title">
              Running a YouTube channel<br />
              <em>with 2 people.</em>
            </h3>
            <p className="sit-featured-desc">
              Editing, thumbnails, repurposing, distribution. The full stack for
              a lean video business &mdash; {ytGuide.toolSlugs.length} tools,
              honest tradeoffs from a team that does this every week.
            </p>
            <div className="sit-featured-tools">
              {ytTools.map(t => (
                <span key={t!.id} className="tool-chip">{t!.name}</span>
              ))}
              {ytExtraCount > 0 && (
                <span className="tool-chip">+{ytExtraCount} more</span>
              )}
            </div>
            <div className="sit-featured-footer">
              <span className="sit-featured-meta">
                Updated {ytGuide.updatedDate} &middot; {ytGuide.toolSlugs.length} tools reviewed
              </span>
              <Link href="/guides/youtube-channel" className="sit-featured-cta">
                Read guide &rarr;
              </Link>
            </div>
          </div>

          {/* Coming soon column */}
          <div className="sit-col">
            <div className="sit-soon">
              <span className="sit-soon-icon">📧</span>
              <span className="sit-soon-title">Launching a newsletter from scratch</span>
              <div className="sit-soon-foot">
                <span className="sit-soon-badge">COMING SOON</span>
                <span className="sit-soon-notify">Notify me &rarr;</span>
              </div>
            </div>
            <div className="sit-soon">
              <span className="sit-soon-icon">🛠️</span>
              <span className="sit-soon-title">Building a product with no dev team</span>
              <div className="sit-soon-foot">
                <span className="sit-soon-badge">COMING SOON</span>
                <span className="sit-soon-notify">Notify me &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credibility Bar ── */}
      <div className="cred-bar">
        <div className="cred-inner">
          <p className="cred-copy">
            Built by <strong>Hause Collective</strong> &mdash; we run a lean
            2-person creative business and only recommend tools that are actually
            in our workflow or earned our trust through deep research.
          </p>
          <div className="cred-stats">
            <div className="cred-stat">
              <span className="cred-n">35K+</span>
              <span className="cred-l">YT subs</span>
            </div>
            <div className="cred-divider" />
            <div className="cred-stat">
              <span className="cred-n">{tools.length}</span>
              <span className="cred-l">Tools curated</span>
            </div>
            <div className="cred-divider" />
            <div className="cred-stat">
              <span className="cred-n">$0</span>
              <span className="cred-l">Paid rankings</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tools Section ── */}
      <div className="tools-section-header" id="tools">
        <h2 className="tools-section-title">Browse all tools</h2>
        <div className="tools-section-line" />
        <span className="tools-section-meta">
          {tools.length} tools &middot; {toolCategories.length} categories
        </span>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px 80px' }}>
        <ToolsDirectory
          tools={tools}
          categories={toolCategories}
          searchPlaceholder={searchPlaceholder}
        />
      </div>

      {/* ── Merchant CTA ── */}
      <div className="bottom-bar" id="merchants">
        <div className="bottom-bar-inner">
          <div>
            <h2>{merchantCtaHeadline}</h2>
            <p style={{ maxWidth: '480px' }}>
              {merchantCtaDescription.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </p>
          </div>
          <div className="bottom-bar-actions">
            <a
              href="mailto:hello@hause.co?subject=HauseResource%20Merchant%20Partnership"
              className="btn-primary"
            >
              Partner with us &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-left">
          <span className="footer-brand">HauseResource</span>
          <div className="footer-links">
            <a href="#guides">Guides</a>
            <a href="#tools">Tools</a>
            <a href="#merchants">For Merchants</a>
            <a href="https://hause.co">Hause.co</a>
          </div>
        </div>
        <span className="footer-copy">&copy; 2026 Hause Collective &middot; Affiliate disclosure</span>
      </footer>
    </>
  );
}
