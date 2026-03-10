import Link from 'next/link';
import { Nav } from '@/components/nav';

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <div className="hero">
        <div className="hero-top">
          <h1 className="hero-headline">
            The stack for<br />
            <em>lean creative</em> businesses.
          </h1>
          <p className="hero-sub">
            Curated guides and honest tool picks —<br />
            from a team that runs one.<br />
            No fluff. Just what works.
          </p>
        </div>
        <div className="search-wrap">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input className="search-input" type="text" placeholder="Find tools for video editing, newsletters, automation..." />
          <span className="search-hint">⌘K</span>
        </div>
      </div>

      {/* Directory */}
      <div className="directory">

        {/* Filter bar */}
        <div className="filter-bar">
          <div className="filter-tabs">
            <button className="filter-tab active-brand">⭐ Hause Picks</button>
            <button className="filter-tab active">All guides</button>
            <button className="filter-tab">Video</button>
            <button className="filter-tab">Writing</button>
            <button className="filter-tab">Design</button>
            <button className="filter-tab">Build</button>
            <button className="filter-tab">Automate</button>
          </div>
          <div className="filter-right">
            <button className="filter-chip on">Free tier</button>
            <button className="filter-chip">AI-native</button>
            <button className="filter-chip">Paid only</button>
          </div>
        </div>

        {/* Situation Guides */}
        <div className="section-divider" id="guides">
          <span className="section-divider-label">Situation guides</span>
          <div className="section-divider-line"></div>
          <span className="section-divider-count">2 live · 4 coming soon</span>
        </div>

        <div className="guides-grid">
          {/* Guide: YouTube */}
          <Link href="/guides/youtube-channel" className="guide-card">
            <div className="guide-card-inner">
              <div className="guide-card-top">
                <span className="guide-badge badge-video">Video</span>
                <span className="guide-hause-pick">⭐ Hause Pick</span>
              </div>
              <h3>Running a YouTube channel<br />with 2 people</h3>
              <p>Editing, thumbnails, repurposing, distribution. The full stack for a lean video business — 7 tools, honest tradeoffs.</p>
              <div className="guide-card-tools">
                <span className="tool-chip">Descript</span>
                <span className="tool-chip">Opus Clip</span>
                <span className="tool-chip">Canva Pro</span>
                <span className="tool-chip">Claude</span>
                <span className="tool-chip">+3 more</span>
              </div>
            </div>
            <div className="guide-card-footer">
              <span className="guide-footer-meta">Updated Mar 2026 · 8 min read</span>
              <span className="guide-footer-cta">Read guide →</span>
            </div>
          </Link>

          {/* Guide: Newsletter */}
          <a href="#" className="guide-card">
            <div className="guide-card-inner">
              <div className="guide-card-top">
                <span className="guide-badge badge-writing">Writing</span>
              </div>
              <h3>Launching a newsletter<br />from scratch</h3>
              <p>Platform, writing workflow, design, distribution, monetisation. Zero to 1,000 subscribers — what the stack looks like.</p>
              <div className="guide-card-tools">
                <span className="tool-chip">beehiiv</span>
                <span className="tool-chip">Claude</span>
                <span className="tool-chip">ConvertKit</span>
                <span className="tool-chip">+2 more</span>
              </div>
            </div>
            <div className="guide-card-footer">
              <span className="guide-footer-meta">Updated Mar 2026 · 6 min read</span>
              <span className="guide-footer-cta">Read guide →</span>
            </div>
          </a>
        </div>

        {/* Coming soon */}
        <div className="coming-strip">
          <span className="coming-text">
            Coming soon: <strong>Client creative work without a design team</strong> · <strong>Building a product with no dev team</strong> · <strong>Growing a content brand on social</strong>
          </span>
          <button className="coming-notify">Notify me</button>
        </div>

        {/* Top Tools */}
        <div className="section-divider" id="tools">
          <span className="section-divider-label">Top tools</span>
          <div className="section-divider-line"></div>
          <span className="section-divider-count">40 tools reviewed</span>
        </div>

        <div className="tools-grid">
          {[
            { emoji: '✂️', name: 'Descript', tag: 'Video', tagClass: 'badge-video', desc: 'Edit video by editing the transcript. The fastest path from raw footage to polished, captioned YouTube content.', price: '$24/mo', pick: true },
            { emoji: '🎯', name: 'Opus Clip', tag: 'Video', tagClass: 'badge-video', desc: 'Upload a long video, get 5 short clips with captions and a virality score. AI repurposing that actually works.', price: '$15/mo', pick: true },
            { emoji: '🤖', name: 'Claude', tag: 'Writing', tagClass: 'badge-writing', desc: 'The best AI for long-form content, scripting, and strategic thinking. Our daily driver for everything written.', price: '$20/mo', pick: true },
            { emoji: '🐝', name: 'beehiiv', tag: 'Newsletter', tagClass: 'badge-writing', desc: 'The newsletter platform built for growth. Monetisation tools and analytics built in from day one.', price: 'Free to start', pick: false },
            { emoji: '🎨', name: 'Canva Pro', tag: 'Design', tagClass: 'badge-design', desc: 'Thumbnails, social graphics, presentations. Pro is worth it for Brand Kit alone — keeps everything consistent.', price: '$15/mo', pick: false },
            { emoji: '⚡', name: 'Make', tag: 'Automate', tagClass: 'badge-ops', desc: 'Visual automation builder. More powerful than Zapier per dollar. Build workflows that would take a VA 10 hours/week.', price: 'Free · 1K ops', pick: false },
            { emoji: '🔍', name: 'Perplexity', tag: 'Research', tagClass: 'badge-writing', desc: 'Search + AI synthesis with real sources cited. Research, competitor analysis, quick facts — faster than Google.', price: '$20/mo', pick: false },
            { emoji: '📋', name: 'Notion', tag: 'Ops', tagClass: 'badge-ops', desc: 'Content calendar, CRM, SOPs, and knowledge base — all in one place. The operating system for a lean team.', price: 'Free · Plus $10/mo', pick: false },
            { emoji: '🖼️', name: 'Figma', tag: 'Design', tagClass: 'badge-design', desc: 'The industry standard for product and brand design. Free tier is genuinely generous — good for most solo teams.', price: 'Free · Pro $15/mo', pick: false },
          ].map((tool) => (
            <a key={tool.name} href="#" className="tool-card">
              <div className="tool-card-header">
                <div className="tool-card-left">
                  <div className="tool-logo">{tool.emoji}</div>
                  <div>
                    <div className="tool-name">{tool.name}</div>
                    <span className={`tool-tag ${tool.tagClass}`}>{tool.tag}</span>
                  </div>
                </div>
                {tool.pick && <span className="pick-star">⭐</span>}
              </div>
              <div className="tool-desc">{tool.desc}</div>
              <div className="tool-card-footer">
                <span className="tool-price">From <strong>{tool.price}</strong></span>
                <span className="tool-arrow">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="view-all">
          <a href="#">View all 40 tools →</a>
        </div>

      </div>

      {/* Merchants CTA */}
      <div className="bottom-bar" id="merchants">
        <div className="bottom-bar-inner">
          <div>
            <h2>Want to be featured here?</h2>
            <p>Editorial placements for tools that fit lean creative businesses. Starting at $300/month.</p>
          </div>
          <div className="bottom-bar-actions">
            <a href="#" className="btn-primary">Partner with us →</a>
            <a href="#" className="btn-ghost">See how it works</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <span className="footer-brand">HauseResource</span>
          <div className="footer-links">
            <a href="#">Guides</a>
            <a href="#">Tools</a>
            <a href="#">For Merchants</a>
            <a href="https://hause.co">Hause.co</a>
          </div>
        </div>
        <span className="footer-copy">© 2026 Hause Collective · Affiliate disclosure</span>
      </footer>
    </>
  );
}
