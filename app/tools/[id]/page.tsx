import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/nav';
import { tools } from '@/data/tools';
import type { Metadata } from 'next';

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return tools.map((tool) => ({ id: tool.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tool = tools.find((t) => t.id === id);
  if (!tool) return {};
  return {
    title: `${tool.name} — HauseResource`,
    description: tool.description,
    openGraph: {
      url: `https://hause-resource.vercel.app/tools/${tool.id}`,
      title: `${tool.name} — HauseResource`,
      description: tool.description,
      siteName: 'HauseResource',
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { id } = await params;
  const tool = tools.find((t) => t.id === id);
  if (!tool) notFound();

  return (
    <>
      <Nav />
      <div className="page">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">HauseResource</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/#tools">{tool.category}</Link>
          <span className="breadcrumb-sep">/</span>
          <span>{tool.name}</span>
        </div>

        {/* Tool header */}
        <div className="article-header">
          <div className="article-meta">
            <span className={`meta-badge ${tool.tagClass}`}>{tool.category}</span>
            {tool.hausePick && <span className="meta-badge" style={{ background: 'rgba(255,78,100,0.10)', color: 'var(--brand)' }}>Hause Pick</span>}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '8px' }}>
            <div className="tool-entry-logo tool-initial" style={{ width: '64px', height: '64px', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{tool.name.charAt(0)}</div>
            <div>
              <h1 style={{ margin: 0 }}>{tool.name}</h1>
              <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px' }}>From <strong>{tool.pricing}</strong></div>
            </div>
          </div>

          <p className="article-lede">{tool.description}</p>
        </div>

        {/* Three-column body */}
        <div className="article-body">

          {/* TOC — empty for tool pages */}
          <aside className="toc" style={{ display: 'none' }} />

          {/* Main content */}
          <article className="article-content">

            <div className="content-section">
              <div className="section-eyebrow">Overview</div>
              <h2>About {tool.name}</h2>
              <p>{tool.description}</p>
            </div>

            {tool.verdict && (
              <div className="content-section">
                <div className="section-eyebrow">The take</div>
                <h2>Why it stands out</h2>
                <div className="opinion-block">
                  <div className="opinion-label">Honest take — Hause Collective</div>
                  <p>{tool.verdict}</p>
                </div>
              </div>
            )}

            {tool.youtubeId && (
              <div className="content-section">
                <div className="section-eyebrow">Full review</div>
                <h2>Watch the review</h2>
                <div className="video-embed-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${tool.youtubeId}`}
                    title={`${tool.name} review — Hause Collective`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                  />
                </div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '10px' }}>
                  Tested in a real project — not a sponsored walkthrough. Watch before you buy.
                </p>
              </div>
            )}

            <div className="content-section">
              <div className="section-eyebrow">Pricing</div>
              <h2>What it costs</h2>
              <p>Pricing starts at <strong>{tool.pricing}</strong>. Check the official site for the latest plans and free-tier details.</p>
              {tool.promoCode && (
                <div className="promo-block">
                  <span className="promo-label">Exclusive discount</span>
                  <span className="promo-code">{tool.promoCode}</span>
                  <span className="promo-note">{tool.affiliateNote}</span>
                </div>
              )}
            </div>

          </article>

          {/* Right rail */}
          <aside className="right-rail">
            <div className="quick-pick">
              <div className="quick-pick-header">
                <div className="quick-pick-label">{tool.hausePick ? 'Hause Pick' : tool.name}</div>
              </div>
              <div className="quick-pick-body">
                <div className="qp-tool">
                  <div className="qp-logo tool-initial">{tool.name.charAt(0)}</div>
                  <div>
                    <div className="qp-name">{tool.name}</div>
                    <div className="qp-category">{tool.category}</div>
                  </div>
                </div>
                <div className="qp-verdict">{tool.description}</div>
                <div className="qp-pricing">
                  <div className="qp-price-row">
                    <span className="qp-price-label">Starting at</span>
                    <span className="qp-price-val">{tool.pricing}</span>
                  </div>
                </div>
                <a href={tool.affiliateUrl || '#'} className="qp-cta" target="_blank" rel="noopener noreferrer">Visit site &rarr;</a>
                {tool.promoCode && (
                  <div style={{ margin: '8px 0', background: 'rgba(255,78,100,0.08)', border: '1px solid rgba(255,78,100,0.18)', borderRadius: '6px', padding: '8px 12px', fontSize: '12px' }}>
                    <span style={{ color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '10px', fontWeight: 600 }}>Code </span>
                    <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--brand)', fontSize: '13px' }}>{tool.promoCode}</span>
                    {tool.affiliateNote && <span style={{ color: 'var(--muted)', display: 'block', fontSize: '11px', marginTop: '2px' }}>{tool.affiliateNote}</span>}
                  </div>
                )}
                <div className="qp-disclosure">{tool.affiliateUrl ? 'Affiliate link' : 'Affiliate link coming soon'}</div>
              </div>
            </div>

            <div className="rail-section">
              <div className="rail-label">Back</div>
              <Link href="/#tools" className="rail-tool">
                <div className="rail-tool-logo">&larr;</div>
                <div>
                  <div className="rail-tool-name">All tools</div>
                  <div className="rail-tool-cat">Browse directory</div>
                </div>
                <span className="rail-tool-arrow">&rarr;</span>
              </Link>
            </div>
          </aside>

        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <span className="footer-brand">HauseResource</span>
          <div className="footer-links">
            <a href="/#guides">Guides</a>
            <a href="/#picks">Picks</a>
            <a href="/#merchants">For Merchants</a>
            <a href="https://hause.co">Hause.co</a>
          </div>
        </div>
        <span className="footer-copy">&copy; 2026 Hause Collective &middot; Affiliate disclosure</span>
      </footer>
    </>
  );
}
