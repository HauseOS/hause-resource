import { createClient } from "@supabase/supabase-js";

const sb = createClient(
  "https://oehtqgwwpllsmexmohuc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9laHRxZ3d3cGxsc21leG1vaHVjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjE3NzM3MywiZXhwIjoyMDg3NzUzMzczfQ.ODFqqozk-nZveCesUhAtMUZaXtPyx070jC9lSLcKwPM"
);

// Delete all existing (fake) tools
const { error: delError } = await sb
  .from("resource_tools")
  .delete()
  .neq("id", "");
if (delError) {
  console.error("Delete error:", delError.message);
  process.exit(1);
}
console.log("Deleted existing tools");

const tools = [
  {
    id: "firecut-ai",
    name: "FireCut AI",
    category: "Content Creation",
    description:
      "AI editing plugin for Premiere Pro that automates silence removal, caption generation, and B-roll insertion. Built for creators who edit in Premiere and want to cut time without sacrificing quality.",
    best_for:
      "Solo creators or small teams editing 4+ videos a month in Premiere Pro",
    skip_if:
      "You edit in DaVinci Resolve, CapCut, or Final Cut Pro — FireCut is Premiere-only. Also skip if you do mostly short-form only.",
    situations: ["Editing YouTube", "Long-form video", "Content repurposing", "Solo creator"],
    pricing: "$19/mo",
    pricing_numeric: 19,
    affiliate_url: "https://firecut.ai/?ref=hause",
    audience_discount: "Save 10% on all monthly plans",
    hause_pick: true,
    verdict:
      "The best edit-time reducer for Premiere Pro users. Silence removal, captions, B-roll — all automated. Not for everyone, but if you live in Premiere, nothing else comes close.",
    sort_order: 1,
    published: true,
  },
  {
    id: "screen-studio",
    name: "Screen Studio",
    category: "Content Creation",
    description:
      "Mac screen recorder that makes your recordings look cinematic with auto-zoom, cursor effects, and motion blur. No post-production needed.",
    best_for:
      "Anyone who records their screen regularly — tutorials, product demos, walkthroughs. Mac only.",
    skip_if:
      "You are on Windows, or you only record screens occasionally — Loom free tier covers that.",
    situations: ["Creating tutorials", "Product demos", "Team documentation", "Solo creator"],
    pricing: "$89 one-time",
    pricing_numeric: 89,
    affiliate_url: "https://screenstudio.lemonsqueezy.com?aff=vLpMG",
    audience_discount: "15% off with Hause link",
    hause_pick: true,
    verdict:
      "Hands-down the best screen recorder for Mac. The auto-zoom and cinematic cursor make recordings look professional with zero effort. One-time payment — no subscription guilt.",
    sort_order: 2,
    published: true,
  },
  {
    id: "make",
    name: "Make",
    category: "Automation",
    description:
      "Visual workflow automation that connects your tools without code. More powerful and flexible than Zapier — built for teams that have complex, multi-step processes.",
    best_for:
      "Small teams automating repetitive tasks across tools — CRMs, forms, spreadsheets, Slack, email.",
    skip_if:
      "You only need one simple trigger-action automation — Zapier free tier is faster to set up. Make shines when workflows have 5+ steps.",
    situations: ["Automating workflows", "Scaling systems", "Connecting tools", "Small team ops"],
    pricing: "From $9/mo",
    pricing_numeric: 9,
    affiliate_url: "https://www.make.com/en/register?pc=hause",
    audience_discount: "1 month Pro free",
    hause_pick: false,
    verdict:
      "The most powerful visual automation tool for non-developers. Steeper than Zapier but worth it once it clicks — the flexibility pays off on complex workflows.",
    sort_order: 3,
    published: true,
  },
  {
    id: "lovable-dev",
    name: "Lovable",
    category: "Development",
    description:
      "AI-powered platform that turns plain-language descriptions into full-stack web applications. Build real products without writing code.",
    best_for:
      "Non-developers who want to build real web apps fast — founders, designers, solopreneurs validating ideas.",
    skip_if:
      "You need complex backend logic or have a developer on your team — just use a proper framework. The credit model limits heavy iteration.",
    situations: ["Building a product", "Launching an MVP", "No-code development", "Validating an idea"],
    pricing: "From $20/mo",
    pricing_numeric: 20,
    affiliate_url: "https://lovable.dev/#via=5598b8",
    audience_discount: null,
    hause_pick: false,
    verdict:
      "The best AI app builder right now for non-developers. Goes further than most with real full-stack output. The credit model limits experimentation — plan your builds before you start.",
    sort_order: 4,
    published: true,
  },
  {
    id: "vmeg",
    name: "VMEG",
    category: "Content Creation",
    description:
      "AI video platform that transforms long-form content into short clips and localises videos across 140+ languages. Built for creators publishing at scale.",
    best_for:
      "Creators who repurpose long videos into short clips or publish across multiple languages.",
    skip_if:
      "You only create original short-form content — VMEG is a repurposing and localisation tool, not an original creation platform.",
    situations: ["Repurposing content", "Video localisation", "Short-form creation", "Publishing at scale"],
    pricing: "From free",
    pricing_numeric: 0,
    affiliate_url: "https://vmeg.ai?rc=WQNIrcXw",
    audience_discount: null,
    hause_pick: false,
    verdict:
      "Strong for automated video repurposing and multilingual localisation. Good if you publish across platforms or need fast clip generation from long videos.",
    sort_order: 5,
    published: true,
  },
  {
    id: "voicetype-ai",
    name: "Voicetype AI",
    category: "Productivity",
    description:
      "AI voice-to-text tool that lets you write by speaking anywhere on your computer. Works across all apps — docs, emails, Slack, browsers.",
    best_for:
      "Writers and creators who think faster when speaking than typing — especially useful for first drafts and quick comms.",
    skip_if:
      "You are comfortable with fast typing — the workflow shift takes time to stick and is not for everyone.",
    situations: ["Writing faster", "Scripting content", "Email and comms", "Solo creator"],
    pricing: "From $8/mo",
    pricing_numeric: 8,
    affiliate_url: "https://voicetype.ai/?ref=hause",
    audience_discount: null,
    hause_pick: false,
    verdict:
      "Genuinely fast for those who adopt it. Works across all apps which is the key differentiator. Niche — but effective if voice-first clicks for you.",
    sort_order: 6,
    published: true,
  },
  {
    id: "replit",
    name: "Replit",
    category: "Development",
    description:
      "Cloud-based development platform with AI coding tools. Build, collaborate, and deploy apps directly from the browser — no local setup required.",
    best_for:
      "Developers who want to build and deploy fast without environment friction, or non-developers using Replit Agent to build with AI.",
    skip_if:
      "You are a senior developer with a solid local setup — Replit adds overhead that experienced devs do not need.",
    situations: ["Building a product", "Learning to code", "Quick prototyping", "Deploying fast"],
    pricing: "Free · Core $25/mo",
    pricing_numeric: 25,
    affiliate_url: "https://replit.com/refer/hausecollective",
    audience_discount: "10 extra credits with Core subscription",
    hause_pick: false,
    verdict:
      "Best for rapid prototyping and beginner-friendly development. Replit Agent has made it surprisingly capable for non-developers. The free tier goes far.",
    sort_order: 7,
    published: true,
  },
  {
    id: "mixo",
    name: "Mixo",
    category: "Development",
    description:
      "AI-powered landing page builder that generates complete startup validation pages from a single idea. Designed for fast hypothesis testing.",
    best_for:
      "Founders and solopreneurs who need to validate an idea with a real landing page — fast.",
    skip_if:
      "You need a full multi-page website — Mixo is built for single-page validation, not complete site builds.",
    situations: ["Validating an idea", "Launching fast", "Building a landing page", "Startup founder"],
    pricing: "From $9/mo",
    pricing_numeric: 9,
    affiliate_url: null,
    audience_discount: "Premium access with code Hause32412",
    hause_pick: false,
    verdict:
      "The fastest way to test a startup idea with a real landing page. Strong for validation before you commit to building. Limited for anything beyond a one-pager.",
    sort_order: 8,
    published: true,
  },
  {
    id: "plus-ai",
    name: "Plus AI",
    category: "Productivity",
    description:
      "AI add-on for Google Slides that generates presentations, rewrites content, and applies consistent formatting — without leaving Slides.",
    best_for:
      "Teams who live in Google Slides and need faster, more polished presentation creation without switching tools.",
    skip_if:
      "You use PowerPoint or Keynote — Plus AI is Google Slides-only. Also skip if your presentations are highly visual or bespoke.",
    situations: ["Creating presentations", "Pitching clients", "Team decks", "Small team ops"],
    pricing: "From $10/mo",
    pricing_numeric: 10,
    affiliate_url: null,
    audience_discount: null,
    hause_pick: false,
    verdict:
      "The smartest AI layer for Google Slides. Templates are actually usable and the AI understands presentation structure, not just text. Strong if Slides is already your home.",
    sort_order: 9,
    published: true,
  },
  {
    id: "div-riots",
    name: "‹div›RIOTS",
    category: "Design Tools",
    description:
      "Suite of powerful Figma plugins including html.to.design — which converts any live website into editable Figma components in one click.",
    best_for:
      "Figma-heavy designers and design-to-development teams who need to move faster between design and code.",
    skip_if:
      "You do not use Figma. This is Figma-specific and the value is entirely in the plugin ecosystem.",
    situations: ["Design workflow", "Design-to-code", "Figma power users", "Web design"],
    pricing: "From $8/mo",
    pricing_numeric: 8,
    affiliate_url: "https://divriots.com/lsa?aff=vLpMG",
    audience_discount: "20% off with Hause link",
    hause_pick: false,
    verdict:
      "html.to.design alone makes this worth it for web designers. Import any live site into Figma and edit it — saves hours of recreation work. The rest of the plugin suite is solid too.",
    sort_order: 10,
    published: true,
  },
  {
    id: "cascadeur",
    name: "Cascadeur",
    category: "Design Tools",
    description:
      "Physics-based 3D animation software that uses AI to generate realistic motion. Designed to make character animation faster without sacrificing physical accuracy.",
    best_for:
      "3D animators and motion designers who want physics-accurate character movement without manual keyframe grind.",
    skip_if:
      "You do not do 3D character animation — this is a very specialised tool. Not for 2D or general motion graphics.",
    situations: ["3D animation", "Character animation", "Motion design", "Game development"],
    pricing: "Free · Pro from $39/mo",
    pricing_numeric: 39,
    affiliate_url: null,
    audience_discount: null,
    hause_pick: false,
    verdict:
      "Physics-based AI animation is genuinely impressive for character work. If 3D animation is part of your workflow, this can save hours per scene. Highly specialised though.",
    sort_order: 11,
    published: true,
  },
  {
    id: "outbrand-design",
    name: "Outbrand Design",
    category: "Content Creation",
    description:
      "AI social media content platform that generates a full month of branded posts — copy and visuals — from your brand kit. Runs fully automated from creation to publishing.",
    best_for:
      "Small businesses and creators who need consistent branded social content at volume without a designer or copywriter.",
    skip_if:
      "You have a designer or create your own content — the automated output is templated and will not produce viral or highly bespoke creative.",
    situations: ["Social media content", "Brand consistency", "Content at scale", "Small business"],
    pricing: "From $19/mo",
    pricing_numeric: 19,
    affiliate_url: null,
    audience_discount: null,
    hause_pick: false,
    verdict:
      "Impressive automation for branded social content at scale. Best for consistency and volume, not creative differentiation. Still early but strong for what it does.",
    sort_order: 12,
    published: true,
  },
  {
    id: "morpheo-ai",
    name: "Morpheo AI",
    category: "Development",
    description:
      "No-code AI app builder for creating interactive web applications, portfolios, and client presentations — without writing a line of code.",
    best_for:
      "Non-developers building interactive apps or client demos who need something more dynamic than a static site.",
    skip_if:
      "You need production-scale apps with complex logic — Morpheo is for prototypes and presentations, not production.",
    situations: ["Building interactive apps", "Client presentations", "No-code development", "Prototyping"],
    pricing: "From free",
    pricing_numeric: 0,
    affiliate_url: null,
    audience_discount: null,
    hause_pick: false,
    verdict:
      "Good for interactive no-code prototypes and client demos. Fills a gap between static sites and full apps. Not a Lovable replacement — different use case, different scale.",
    sort_order: 13,
    published: true,
  },
  {
    id: "seo-content-generator",
    name: "SEO Content Generator",
    category: "Content Creation",
    description:
      "AI tool for generating SEO-optimised articles backed by keyword research data. Designed for website owners who need keyword-targeted content at scale.",
    best_for:
      "Website owners and marketers who need keyword-targeted articles consistently and do not need premium editorial quality.",
    skip_if:
      "You prioritise quality over quantity — AI SEO content is effective for coverage but will not produce authoritative or deeply original writing.",
    situations: ["SEO content", "Blog writing", "Keyword targeting", "Content at scale"],
    pricing: "Free with code 100OFFYEELING",
    pricing_numeric: 0,
    affiliate_url: null,
    audience_discount: "Use code 100OFFYEELING for free access",
    hause_pick: false,
    verdict:
      "Effective for keyword-targeted article generation at scale. Not for premium editorial — but if SEO coverage is the goal, this delivers. The Hause code gives you free access.",
    sort_order: 14,
    published: true,
  },
];

// Try inserting with new columns first
const { error: insertError } = await sb.from("resource_tools").insert(tools);
if (insertError) {
  if (insertError.message.includes("column") && (insertError.message.includes("situations") || insertError.message.includes("skip_if") || insertError.message.includes("audience_discount"))) {
    console.log("New columns not yet in DB. Inserting without them...");
    // Strip new columns and insert base data only
    const baseTools = tools.map(({ situations, skip_if, audience_discount, ...rest }) => rest);
    const { error: baseError } = await sb.from("resource_tools").insert(baseTools);
    if (baseError) {
      console.error("Base insert error:", baseError.message);
      process.exit(1);
    }
    console.log(`Inserted ${tools.length} tools (base data only)`);
    console.log("NEXT: Call /api/migrate?secret=hause-resource-revalidate-2026 to add new columns, then run seed again.");
  } else {
    console.error("Insert error:", insertError.message);
    process.exit(1);
  }
} else {
  console.log(`Inserted ${tools.length} tools with full data`);
}
