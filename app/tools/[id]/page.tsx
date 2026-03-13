import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { getTools, getTool } from "@/lib/resource-data";
import type { Metadata } from "next";

export const revalidate = 300;

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  const tools = await getTools();
  return tools.map((tool) => ({ id: tool.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tool = await getTool(id);
  if (!tool) return {};
  return {
    title: `${tool.name} — HauseResource`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} — Is it worth it for small teams?`,
      description: tool.description,
      url: `https://hause-resource.vercel.app/tools/${tool.id}`,
      siteName: "HauseResource",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      type: "article",
    },
  };
}

function getCategoryClass(category: string): string {
  const map: Record<string, string> = {
    "Content Creation": "badge-video",
    "Design Tools": "badge-design",
    Automation: "badge-automate",
    Productivity: "badge-writing",
    Development: "badge-ops",
  };
  return map[category] || "badge-video";
}

export default async function ToolPage({ params }: Props) {
  const { id } = await params;
  const tool = await getTool(id);
  if (!tool) notFound();

  const initial = tool.name.charAt(0).toUpperCase();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: tool.name,
            description: tool.description,
            url: `https://hause-resource.vercel.app/tools/${tool.id}`,
            offers:
              tool.pricing_numeric > 0
                ? {
                    "@type": "Offer",
                    price: tool.pricing_numeric,
                    priceCurrency: "USD",
                    description: tool.pricing,
                  }
                : undefined,
            review: tool.verdict
              ? {
                  "@type": "Review",
                  reviewBody: tool.verdict,
                  author: {
                    "@type": "Organization",
                    name: "Hause Collective",
                  },
                }
              : undefined,
          }),
        }}
      />
      <Nav />
      <div className="page">
        <div className="breadcrumb">
          <Link href="/">HauseResource</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/#tools">{tool.category}</Link>
          <span className="breadcrumb-sep">/</span>
          <span>{tool.name}</span>
        </div>

        <div className="tool-page-c">

          {/* Situation tags */}
          {tool.situations && tool.situations.length > 0 && (
            <div className="tool-situations">
              {tool.situations.map((s) => (
                <span key={s} className="tool-situation-tag">{s}</span>
              ))}
            </div>
          )}

          {/* Tool header */}
          <div className="tool-header-c">
            <div className="tool-logo-c tool-initial">{initial}</div>
            <div className="tool-header-text">
              <div className="tool-title-row">
                <h1 className="tool-name-c">{tool.name}</h1>
                {tool.hause_pick && (
                  <span className="hause-pick-pill">★ Hause Pick</span>
                )}
              </div>
              <div className="tool-meta-row">
                <span className={`badge-pill ${getCategoryClass(tool.category)}`}>
                  {tool.category}
                </span>
                <span className="tool-pricing-label">{tool.pricing}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="tool-desc-c">{tool.description}</p>

          {/* Verdict strip */}
          {tool.verdict && (
            <div className="verdict-strip">
              <span className="verdict-label">Verdict</span>
              <span className="verdict-body">{tool.verdict}</span>
            </div>
          )}

          {/* Split: Pricing + Best For */}
          <div className="tool-split-grid">
            <div className="tool-split-card">
              <div className="split-label">Pricing</div>
              <div className="split-val">{tool.pricing}</div>
              {tool.audience_discount && (
                <div className="split-offer">{tool.audience_discount}</div>
              )}
            </div>
            <div className="tool-split-card">
              <div className="split-label">Best for</div>
              <div className="split-val">{tool.best_for || "—"}</div>
            </div>
          </div>

          {/* Skip if */}
          {tool.skip_if && (
            <div className="skip-if-row">
              <span className="skip-if-label">Skip if</span>
              <span className="skip-if-body">{tool.skip_if}</span>
            </div>
          )}

          {/* CTA */}
          <div className="tool-cta-row">
            {tool.affiliate_url ? (
              <>
                <a
                  href={tool.affiliate_url}
                  className="cta-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try {tool.name}{tool.audience_discount ? ` — ${tool.audience_discount.split(" ").slice(0, 3).join(" ")}` : ""} →
                </a>
                <span className="cta-disclosure">
                  Affiliate link · We earn a commission if you subscribe
                </span>
              </>
            ) : (
              <a
                href={`https://${tool.id.replace(/-/g, "")}.com`}
                className="cta-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {tool.name} →
              </a>
            )}
          </div>

        </div>
      </div>

      <footer className="footer">
        <div className="footer-left">
          <span className="footer-brand">HauseResource</span>
          <div className="footer-links">
            <a href="/#top">Guides</a>
            <a href="/#picks">Picks</a>
            <a href="mailto:hello@hause.co?subject=HauseResource Merchant Partnership">
              For Merchants
            </a>
            <a href="https://hause.co">Hause.co</a>
          </div>
        </div>
        <span className="footer-copy">
          &copy; 2026 Hause Collective &middot; Affiliate disclosure
        </span>
      </footer>
    </>
  );
}
