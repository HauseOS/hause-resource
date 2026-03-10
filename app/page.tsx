import Link from 'next/link';
import { Nav } from '@/components/nav';
import { tools } from '@/data/tools';
import { guides } from '@/data/guides';
import { heroHeadline, heroSub, searchPlaceholder, merchantCtaHeadline, merchantCtaDescription } from '@/data/copy';

export default function Home() {
  const liveGuides = guides.filter(g => g.status === 'live');
  const comingSoonGuides = guides.filter(g => g.status === 'coming-soon');
  const hausePickTools = tools.filter(t => t.hausePick);
  const hausePickTotal = hausePickTools.reduce((sum, t) => sum + t.pricingNumeric, 0);

  // Only show category tabs that have live guides
  const liveCategories = [...new Set(liveGuides.map(g => g.category))];

  return (
    <>
      <Nav />

      {/* Hero */}
      <div className="hero">
        <div className="hero-top">
          <h1 className="hero-headline">
            {heroHeadline.split('.').filter(Boolean).map((part, i) => (
              <span key={i}>{i === 0 ? part.trim() : <><br /><em>{part.trim()}</em></>}{'.'}</span>
            ))}
          </h1>
          <p className="hero-sub">
            {heroSub.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </p>
        </div>
        <div className="search-wrap">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input className="search-input" type="text" placeholder={searchPlaceholder} />
          <span className="search-hint">⌘K</span>
        </div>
      </div>

      {/* Directory */}
      <div className="directory">

        {/* Filter bar — only live categories */}
        <div className="filter-bar">
          <div className="filter-tabs">
            <button className="filter-tab active-brand">⭐ Hause Picks</button>
            <button className="filter-tab active">All</button>
            {liveCategories.map(cat => (
              <button key={cat} className="filter-tab">{cat}</button>
            ))}
            <button className="filter-tab" style={{ color: 'var(--muted-2)', cursor: 'default' }}>More coming soon</button>
          </div>
          <div className="filter-right">
            <button className="filter-chip on">Free tier</button>
            <button className="filter-chip">AI-native</button>
          </div>
        </div>

        {/* Situation Guides */}
        <div className="section-divider" id="guides">
          <span className="section-divider-label">Situation guides</span>
          <div className="section-divider-line"></div>
          <span className="section-divider-count">{liveGuides.length} live · {comingSoonGuides.length} coming soon</span>
        </div>

        <div className="guides-grid">
          {liveGuides.map(guide => {
            const guidePath = `/guides/${guide.id}`;
            const guideTools = guide.toolSlugs
              .slice(0, 4)
              .map(slug => tools.find(t => t.id === slug))
              .filter(Boolean);
            const extraCount = guide.toolSlugs.length - 4;

            return (
              <Link key={guide.id} href={guidePath} className="guide-card">
                <div className="guide-card-inner">
                  <div className="guide-card-top">
                    <span className={`guide-badge ${guide.categoryClass}`}>{guide.category}</span>
                    {guide.hausePick && <span className="guide-hause-pick">⭐ Hause Pick</span>}
                  </div>
                  <h3>{guide.title}<br />{guide.subtitle}</h3>
                  <p>{guide.description}</p>
                  <div className="guide-card-tools">
                    {guideTools.map(t => (
                      <span key={t!.id} className="tool-chip">{t!.name}</span>
                    ))}
                    {extraCount > 0 && <span className="tool-chip">+{extraCount} more</span>}
                  </div>
                </div>
                <div className="guide-card-footer">
                  <span className="guide-footer-meta">Updated {guide.updatedDate} · {guide.readTime}</span>
                  <span className="guide-footer-cta">Read guide →</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Coming soon */}
        {comingSoonGuides.length > 0 && (
          <div className="coming-strip">
            <span className="coming-text">
              Coming soon: {comingSoonGuides.map((g, i) => (
                <span key={g.id}><strong>{g.title} {g.subtitle}</strong>{i < comingSoonGuides.length - 1 ? ' · ' : ''}</span>
              ))}
            </span>
            <button className="coming-notify">Notify me</button>
          </div>
        )}

        {/* Top Tools */}
        <div className="section-divider" id="tools">
          <span className="section-divider-label">Top tools</span>
          <div className="section-divider-line"></div>
          <span className="section-divider-count">{tools.length} tools reviewed</span>
        </div>

        {/* Hause Picks budget bar */}
        <div className="picks-budget" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(255,78,100,0.06)', border: '1px solid rgba(255,78,100,0.15)',
          borderRadius: '8px', padding: '10px 16px', marginBottom: '14px', fontSize: '13px'
        }}>
          <span style={{ color: 'var(--fg)' }}>
            ⭐ <strong>{hausePickTools.length} Hause Picks</strong>
            <span style={{ color: 'var(--muted)', marginLeft: '8px' }}>
              {hausePickTools.map(t => t.name).join(' + ')}
            </span>
          </span>
          <span style={{ color: 'var(--brand)', fontWeight: 600 }}>
            = ${hausePickTotal}/month total
          </span>
        </div>

        <div className="tools-grid">
          {tools.map(tool => (
            <a key={tool.id} href={tool.affiliateUrl || '#'} className="tool-card">
              <div className="tool-card-header">
                <div className="tool-card-left">
                  <div className="tool-logo">{tool.emoji}</div>
                  <div>
                    <div className="tool-name">{tool.name}</div>
                    <span className={`tool-tag ${tool.tagClass}`}>{tool.category}</span>
                  </div>
                </div>
                {tool.hausePick && <span className="pick-star">⭐</span>}
              </div>
              <div className="tool-desc">{tool.description}</div>
              <div className="tool-card-footer">
                <span className="tool-price">From <strong>{tool.pricing}</strong></span>
                <span className="tool-arrow">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* USD note */}
        <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '11px', color: 'var(--muted-2)' }}>
          All prices in USD. Most tools available globally.
        </div>

      </div>

      {/* Merchants CTA — in footer area only */}
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
            <a href="#" className="btn-primary">Partner with us →</a>
          </div>
        </div>
      </div>

      {/* Footer */}
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
        <span className="footer-copy">© 2026 Hause Collective · Affiliate disclosure</span>
      </footer>
    </>
  );
}
