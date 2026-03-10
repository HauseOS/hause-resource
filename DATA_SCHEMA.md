# DATA_SCHEMA.md — HauseResource Data Architecture

> Source of truth for data types, field ownership, and how agents interact with content.
> Last updated: Mar 2026

---

## Tool Type

Defined in `lib/data.ts`. Future source: Baserow (DB to be configured).

| Field | Type | Purpose | Updatable by |
|---|---|---|---|
| `id` | `string` | URL-safe slug. Used in routes and cross-references. | Human / agent on creation |
| `name` | `string` | Display name of the tool. | Human |
| `emoji` | `string` | Single emoji for visual identity in cards. | Editorial |
| `category` | `Category` | One of: `video`, `writing`, `design`, `build`, `automate`, `ops`, `research`. | Human |
| `tagline` | `string` | One punchy sentence. The headline on the tool card. | Editorial (agent-draftable) |
| `description` | `string` | 2-3 sentence honest take. What it's for, who it's for, what makes it worth it. | Editorial (agent-draftable) |
| `pricing` | `string` | Human-readable pricing tiers, e.g. `"Creator $24/mo · Pro $40/mo"`. | Agent-updatable (periodic price checks) |
| `pricingFrom` | `string` | Lowest paid tier or `"Free"`. Shown on card. | Agent-updatable |
| `hasFree` | `boolean` | Whether a usable free tier exists. | Agent-updatable |
| `isAiNative` | `boolean` | Built around AI, not just AI-adjacent. | Human |
| `hausePick` | `boolean` | Editorial stamp — only tools Hause actively recommends. | Editorial only (never auto-set) |
| `affiliateUrl` | `string` | Tracked affiliate link. `"#"` if not yet configured. | Human / ops |
| `commission` | `string?` | Commission rate for reference. Optional. | Human / ops |

**Rule:** `hausePick`, `category`, `isAiNative`, and `affiliateUrl` are never auto-updated by agents. All other fields may be refreshed programmatically.

---

## Guide Type

Defined in `lib/data.ts`. Future source: `data/guides.ts` (when guide volume grows).

| Field | Type | Purpose | Updatable by |
|---|---|---|---|
| `slug` | `string` | URL-safe identifier. Used in routing. | Human on creation |
| `title` | `string` | Full guide title shown on guide page. | Editorial |
| `shortTitle` | `string` | Abbreviated title for cards and nav. | Editorial |
| `category` | `Category` | Primary category tag. | Human |
| `readTime` | `string` | Human-estimated read time, e.g. `"8 min"`. | Agent-updatable (based on word count) |
| `updatedAt` | `string` | Month/year of last meaningful content update, e.g. `"Mar 2026"`. | Agent-updatable on content change |
| `lede` | `string` | 1-2 sentence hook shown in guide cards. Sets expectation. | Editorial |
| `toolSlugs` | `string[]` | Ordered list of tool IDs featured in the guide. | Editorial (agent may suggest additions) |
| `live` | `boolean` | Whether the guide is published and visible. | Human — never auto-publish |
| `hausePick` | `boolean?` | Whether this guide is a featured/recommended read. | Editorial only |

**Rule:** `live` is never set to `true` by agents. All publishing is a human decision.

---

## Copy Exports

Defined in `data/copy.ts`. This file is the single source of truth for all user-facing text that is not part of a Tool or Guide record.

| Export | Type | What it is | Written/updated by |
|---|---|---|---|
| `heroHeadline` | `string` | Main headline on the homepage hero. | Editorial |
| `heroSub` | `string` | 2-3 line subheadline. Speaks to the user's problem, not Hause's credentials. | Editorial |
| `searchPlaceholder` | `string` | Placeholder text in the search/filter bar. Mirrors user vocabulary. | Editorial |
| `youtubeTldr` | `string` | TL;DR card copy for the YouTube channel guide. Bullet-point format with total cost. | Editorial (agent-updatable when tool pricing changes) |
| `merchantCtaHeadline` | `string` | Headline for the merchant/partner CTA section. | Editorial |
| `merchantCtaDescription` | `string` | Body copy for merchant CTA. Includes pricing signal. | Editorial |
| `priyaPersona` | `string` | Reference persona for editorial decisions. Not user-facing. | Editorial — stable unless persona strategy changes |

---

## How Agents Should Use This

### Data sources
- **Tools** → `lib/data.ts` (current) / Baserow API (future)
- **Guides** → `lib/data.ts` (current) / `data/guides.ts` (future, when guide volume grows)
- **Copy** → `data/copy.ts` always

### The golden rule: never hardcode content in JSX components.

All strings that could change — headlines, descriptions, CTAs, placeholder text — must come from one of the three sources above. Components should import and render; they should never be the source of truth for content.

```tsx
// ❌ Wrong — content hardcoded in component
<h1>The stack for lean creative businesses.</h1>

// ✅ Right — content sourced from copy.ts
import { heroHeadline } from '@/data/copy';
<h1>{heroHeadline}</h1>
```

### When updating pricing
If a tool's pricing changes, update `pricing`, `pricingFrom`, and `hasFree` in `lib/data.ts` (or Baserow, once live). Also check if `youtubeTldr` in `data/copy.ts` references that tool's price — update both together.

### When adding a new tool
1. Add the Tool record to `lib/data.ts` (or Baserow)
2. Set `hausePick: false` — never auto-assign
3. Set `affiliateUrl: '#'` until ops configures it
4. Do not modify any JSX component

### When adding a new guide
1. Add the Guide record with `live: false`
2. Populate `toolSlugs` with existing tool IDs only
3. Do not set `live: true` — that's a human publish action

### Persona reference
Import `priyaPersona` from `data/copy.ts` when prompting agents to write copy, evaluate tools, or draft guide content. It is the editorial north star for who HauseResource is built for.
