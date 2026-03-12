import Link from 'next/link';
import { Nav } from '@/components/nav';
import { HausePicks } from '@/components/hause-picks';
import { tools } from '@/data/tools';
import { guides } from '@/data/guides';

export default function Home() {
  const comingSoonGuides = guides.filter(g => g.status === 'coming-soon');

  return (
    <>
      <Nav />

      {/* ── Concept A Hero ── */}
      <section className="hero-a" id="top">
        <div className="hero-a-inner">
          <div className="hero-a-eyebrow">
            <span className="eyebrow-line" />
            Curated for lean creative businesses
            <span className="eyebrow-line" />
          </div>
          <h1 className="hero-a-headline">
            What are you<br />
            <em>trying to build?</em>
          </h1>
          <p className="hero-a-sub">
            Pick your situation. We&apos;ll show you the exact stack — tools, tradeoffs, and honest opinions from a team that has researched and tested them.
          </p>

          <p className="situations-label">Choose a situation</p>

          <div className="situations-grid">
            {/* Live guide */}
            <Link href="/guides/youtube-channel" className="sit-card sit-live">
              <span className="sit-live-badge">Live</span>
              <div className="sit-card-title">Running a YouTube channel with 2 people</div>
              <div className="sit-card-desc">Editing, thumbnails, repurposing, distribution. The complete stack for a lean video business.</div>
              <div className="sit-card-footer">
                <span className="sit-card-meta">7 tools reviewed</span>
                <span className="sit-card-cta">Read guide &rarr;</span>
              </div>
            </Link>

            {/* Coming-soon cards */}
            {comingSoonGuides.map(guide => (
              <div key={guide.id} className="sit-card sit-coming">
                <div className="sit-card-title">{guide.title} {guide.subtitle}</div>
                <span className="sit-coming-tag">Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hause Picks ── */}
      <HausePicks tools={tools} />

      {/* ── Merchant Bar ── */}
      <div className="merchant-bar">
        <div className="merchant-bar-inner">
          <div>
            <h3 className="merchant-bar-title">Want your tool featured here?</h3>
            <p className="merchant-bar-sub">Editorial placements only. We don&apos;t feature tools we wouldn&apos;t stand behind. Featured Picks from $300/month.</p>
          </div>
          <a href="mailto:hello@hause.co?subject=HauseResource%20Merchant%20Partnership" className="btn-merchant">Get in touch &rarr;</a>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-left">
          <span className="footer-brand">HauseResource</span>
          <div className="footer-links">
            <a href="#top">Guides</a>
            <a href="#picks">Picks</a>
            <a href="mailto:hello@hause.co?subject=HauseResource%20Merchant%20Partnership">For Merchants</a>
            <a href="https://hause.co">Hause.co</a>
          </div>
        </div>
        <span className="footer-copy">&copy; 2026 Hause Collective &middot; Affiliate disclosure</span>
      </footer>

      <div className="built-badge"><span className="built-badge-dot" />Built with intention</div>
    </>
  );
}
