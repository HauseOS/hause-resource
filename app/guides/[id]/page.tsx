import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { getGuides, getGuide, getTool } from "@/lib/resource-data";
import type { GuideSection, Tool } from "@/lib/resource-data";
import type { Metadata } from "next";

export const revalidate = 300;

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  const guides = await getGuides();
  return guides.filter(g => g.status === "live").map(g => ({ id: g.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const guide = await getGuide(id);
  if (!guide) return {};
  return {
    title: guide.meta_title || `${guide.title} ${guide.subtitle} — HauseResource`,
    description: guide.meta_description || guide.description,
    openGraph: {
      title: guide.meta_title || `${guide.title} ${guide.subtitle}`,
      description: guide.meta_description || guide.description,
      url: `https://hause-resource.vercel.app/guides/${guide.id}`,
      siteName: "HauseResource",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      type: "article",
    },
  };
}

// Section renderer component
async function GuideSectionRenderer({ section }: { section: GuideSection }) {
  if (section.section_type === "prose") {
    return (
      <div className="content-section" id={section.anchor || undefined}>
        {section.eyebrow && <div className="section-eyebrow">{section.eyebrow}</div>}
        {section.heading && <h2>{section.heading}</h2>}
        {section.body && (
          <div dangerouslySetInnerHTML={{ __html: section.body.replace(/\n\n/g, "</p><p>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/^/, "<p>").replace(/$/, "</p>") }} />
        )}
      </div>
    );
  }

  if (section.section_type === "tool_entry") {
    const d = section.data || {};
    let tool: Tool | null = null;
    if (d.tool_id) {
      tool = await getTool(d.tool_id);
    }
    const badge = d.badge || "";
    const badgeClass = badge === "Hause Pick" ? "verdict-pick" : badge === "Also consider" ? "verdict-also" : "";
    const toolName = d.name || tool?.name || d.tool_id || "";
    const initial = toolName.charAt(0).toUpperCase();
    return (
      <div className="tool-entry">
        <div className="tool-entry-header">
          <div className="tool-entry-left">
            <div className="tool-entry-logo tool-initial">{initial}</div>
            <div className="tool-name-block">
              <h3>{toolName}</h3>
              <div className="tool-category-text">{d.category_text || tool?.category || ""}</div>
            </div>
          </div>
          {badge && <span className={`tool-verdict-badge ${badgeClass}`}>{badge}</span>}
        </div>
        {d.verdict_quote && <div className="tool-entry-verdict">&ldquo;{d.verdict_quote}&rdquo;</div>}
        {d.body && <div className="tool-entry-body">{d.body}</div>}
        <div className="tool-entry-footer">
          {d.pricing_detail && <div className="tool-pricing">{d.pricing_detail}</div>}
          {tool?.affiliate_url && (
            <a href={tool.affiliate_url} className="tool-link" target="_blank" rel="noopener noreferrer">
              Try {toolName} &rarr;
            </a>
          )}
        </div>
      </div>
    );
  }

  if (section.section_type === "comparison") {
    const d = section.data || {};
    const cols: string[] = d.columns || [];
    const rows: any[] = d.rows || [];
    return (
      <div className="content-section" id={section.anchor || undefined}>
        {section.eyebrow && <div className="section-eyebrow">{section.eyebrow}</div>}
        {section.heading && <h2>{section.heading}</h2>}
        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>{cols.map(c => <th key={c}>{c}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={row.winner ? "winner" : ""}>
                  <td>{row.tool}</td>
                  <td>{row.transcript === "yes" ? <span className="tick">✓</span> : row.transcript === "partial" ? <span className="partial">~</span> : <span className="cross">✗</span>}</td>
                  <td>{row.captions === "yes" ? <span className="tick">✓</span> : row.captions === "partial" ? <span className="partial">~</span> : <span className="cross">✗</span>}</td>
                  <td>{row.shortform === "yes" ? <span className="tick">✓</span> : row.shortform === "partial" ? <span className="partial">~</span> : <span className="cross">✗</span>}</td>
                  <td>{row.curve}</td>
                  <td>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (section.section_type === "opinion") {
    const d = section.data || {};
    return (
      <div className="content-section" id={section.anchor || undefined}>
        {section.eyebrow && <div className="section-eyebrow">{section.eyebrow}</div>}
        {section.heading && <h2>{section.heading}</h2>}
        <div className="opinion-block">
          {d.label && <div className="opinion-label">{d.label}</div>}
          {d.body && <p style={{whiteSpace: "pre-line"}}>{d.body}</p>}
        </div>
      </div>
    );
  }

  if (section.section_type === "alternatives") {
    const d = section.data || {};
    const alts: any[] = d.tools || [];
    return (
      <div className="content-section" id={section.anchor || undefined}>
        {section.eyebrow && <div className="section-eyebrow">{section.eyebrow}</div>}
        {section.heading && <h2>{section.heading}</h2>}
        <div className="alt-list">
          {alts.map(alt => (
            <div key={alt.name} className="alt-entry">
              <div className="alt-logo tool-initial">{alt.initial}</div>
              <div>
                <div className="alt-name">{alt.name}</div>
                <div className="alt-why">{alt.why}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.section_type === "video_embed") {
    const d = section.data || {};
    return (
      <div className="content-section" id={section.anchor || undefined}>
        {section.eyebrow && <div className="section-eyebrow">{section.eyebrow}</div>}
        {section.heading && <h2>{section.heading}</h2>}
        <div className="video-embed-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${d.youtube_id}`}
            title={d.caption || "Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          />
        </div>
        {d.caption && <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "10px" }}>{d.caption}</p>}
      </div>
    );
  }

  return null;
}

export default async function GuidePage({ params }: Props) {
  const { id } = await params;
  const guide = await getGuide(id);
  if (!guide || guide.status === "coming-soon") notFound();

  const railTools = await Promise.all(
    (guide.tool_slugs || []).slice(0, 6).map(async (slug) => {
      return getTool(slug);
    })
  );
  const validRailTools = railTools.filter(Boolean) as Tool[];

  const tocItems = (guide.sections || [])
    .filter(s => s.anchor && s.heading && s.section_type !== "tool_entry")
    .map(s => ({ anchor: s.anchor!, label: s.heading! }));

  const hausePick = validRailTools.find(t => t.hause_pick) || validRailTools[0];

  return (
    <>
      <Nav />
      <div className="page">
        <div className="breadcrumb">
          <Link href="/">HauseResource</Link>
          <span className="breadcrumb-sep">/</span>
          <a href="#">{guide.category}</a>
          <span className="breadcrumb-sep">/</span>
          <span>{guide.title} {guide.subtitle}</span>
        </div>

        <div className="article-header">
          <div className="article-meta">
            <span className="meta-badge">{guide.category}</span>
            {guide.read_time && <span className="meta-text">{guide.read_time}</span>}
            {guide.tool_count > 0 && (
              <>
                <span className="meta-text">·</span>
                <span className="meta-text">{guide.tool_count} tools reviewed</span>
              </>
            )}
          </div>
          <h1>{guide.title}<br />with <em>{guide.subtitle.replace("with ", "")}</em></h1>
          <p className="article-lede">{guide.description}</p>
          <div className="article-header-meta">
            <span>Written by Hause Collective</span>
            <span>35K subscribers, 2-person team</span>
          </div>

          {guide.tldr && (
            <div style={{
              background: "rgba(255,78,100,0.06)",
              border: "1px solid rgba(255,78,100,0.15)",
              borderRadius: "10px",
              padding: "20px 24px",
              marginTop: "28px",
              maxWidth: "620px"
            }}>
              <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand)", marginBottom: "10px" }}>
                TL;DR
              </div>
              <div style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--fg)", whiteSpace: "pre-line" }}>
                {guide.tldr}
              </div>
            </div>
          )}
        </div>

        <div className="article-body">
          <aside className="toc">
            <div className="toc-label">On this page</div>
            <ul className="toc-list">
              {tocItems.map((item, i) => (
                <li key={item.anchor}>
                  <a href={`#${item.anchor}`} className={i === 0 ? "active" : ""}>{item.label}</a>
                </li>
              ))}
            </ul>
          </aside>

          <article className="article-content">
            {(guide.sections || []).map((section) => (
              <GuideSectionRenderer key={section.id} section={section} />
            ))}
          </article>

          <aside className="right-rail">
            {hausePick && (
              <div className="quick-pick">
                <div className="quick-pick-header">
                  <div className="quick-pick-label">{hausePick.hause_pick ? "Hause Pick" : hausePick.name}</div>
                </div>
                <div className="quick-pick-body">
                  <div className="qp-tool">
                    <div className="qp-logo tool-initial">{hausePick.name.charAt(0)}</div>
                    <div>
                      <div className="qp-name">{hausePick.name}</div>
                      <div className="qp-category">{hausePick.category}</div>
                    </div>
                  </div>
                  <div className="qp-verdict">{hausePick.description}</div>
                  <div className="qp-pricing">
                    <div className="qp-price-row">
                      <span className="qp-price-label">Starting at</span>
                      <span className="qp-price-val">{hausePick.pricing}</span>
                    </div>
                  </div>
                  <a href={hausePick.affiliate_url || "#"} className="qp-cta" target="_blank" rel="noopener noreferrer">
                    Try {hausePick.name} &rarr;
                  </a>
                  <div className="qp-disclosure">{hausePick.affiliate_url ? "Affiliate link" : "No affiliate link yet"}</div>
                </div>
              </div>
            )}

            <div className="rail-section">
              <div className="rail-label">All tools in this guide</div>
              {validRailTools.map(t => (
                <Link key={t.id} href={`/tools/${t.id}`} className="rail-tool">
                  <div className="rail-tool-logo tool-initial">{t.name.charAt(0)}</div>
                  <div>
                    <div className="rail-tool-name">{t.name}</div>
                    <div className="rail-tool-cat">{t.category}</div>
                  </div>
                  <span className="rail-tool-arrow">&rarr;</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-left">
          <span className="footer-brand">HauseResource</span>
          <div className="footer-links">
            <a href="/#top">Guides</a>
            <a href="/#picks">Picks</a>
            <a href="mailto:hello@hause.co?subject=HauseResource Merchant Partnership">For Merchants</a>
            <a href="https://hause.co">Hause.co</a>
          </div>
        </div>
        <span className="footer-copy">&copy; 2026 Hause Collective &middot; Affiliate disclosure</span>
      </footer>
    </>
  );
}
