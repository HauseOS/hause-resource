import Link from 'next/link';
import { Nav } from '@/components/nav';

export const metadata = {
  title: 'Running a YouTube Channel with 2 People — HauseResource',
  description: 'The complete tool stack for a 2-person YouTube channel.',
};

export default function YouTubeGuide() {
  return (
    <>
      <Nav />
      <div className="page">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">HauseResource</Link>
          <span className="breadcrumb-sep">/</span>
          <a href="#">Video</a>
          <span className="breadcrumb-sep">/</span>
          <span>Running a YouTube channel with 2 people</span>
        </div>

        {/* Article header */}
        <div className="article-header">
          <div className="article-meta">
            <span className="meta-badge">Video</span>
            <span className="meta-text">8 min read</span>
            <span className="meta-text">·</span>
            <span className="meta-text">7 tools reviewed</span>
            <span className="meta-text">·</span>
            <span className="meta-text">Updated March 2026</span>
          </div>
          <h1>Running a YouTube channel<br />with <em>2 people.</em></h1>
          <p className="article-lede">
            Production, editing, thumbnails, repurposing, distribution —
            the complete stack for a lean video business. No editors on retainer.
            No agency. Just two people and the right tools.
          </p>
          <div className="article-header-meta">
            <span>Written by Hause Collective</span>
            <span>35K subscribers, 2-person team</span>
          </div>
        </div>

        {/* Three-column body */}
        <div className="article-body">

          {/* TOC */}
          <aside className="toc">
            <div className="toc-label">On this page</div>
            <ul className="toc-list">
              <li><a href="#brief" className="active">The brief</a></li>
              <li><a href="#editing">Editing</a></li>
              <li><a href="#repurposing">Repurposing</a></li>
              <li><a href="#thumbnails">Thumbnails</a></li>
              <li><a href="#writing">Writing & scripts</a></li>
              <li><a href="#planning">Planning</a></li>
              <li><a href="#comparison">Comparison</a></li>
              <li><a href="#verdict">What we&apos;d do</a></li>
              <li><a href="#alternatives">Alternatives</a></li>
            </ul>
          </aside>

          {/* Main content */}
          <article className="article-content">

            <div className="content-section" id="brief">
              <div className="section-eyebrow">The brief</div>
              <h2>Who this is for</h2>
              <p>You&apos;re running a YouTube channel as a business — not a hobby. Two people, or maybe just you. You publish consistently (1–2x per week) and the goal is audience growth, brand building, and eventually sponsorship revenue.</p>
              <p>You don&apos;t have an editor on retainer. You&apos;re not outsourcing to an agency. Every hour spent on post-production is an hour not spent creating — so the tools in this stack need to be genuinely fast, not just theoretically capable.</p>
              <p><strong>&ldquo;Good&rdquo; for this situation</strong> means: you can take raw footage to a polished, captioned, multi-platform-ready video in under 2 hours.</p>
            </div>

            <div className="content-section" id="editing">
              <div className="section-eyebrow">Editing</div>
              <h2>The editing stack</h2>
              <p>For a 2-person team, the editing tool is the most important decision you&apos;ll make. It needs to be fast to learn, fast to use, and capable of producing content that looks intentional — not amateur.</p>

              <div className="tool-entry">
                <div className="tool-entry-header">
                  <div className="tool-entry-left">
                    <div className="tool-entry-logo">✂️</div>
                    <div className="tool-name-block">
                      <h3>Descript</h3>
                      <div className="tool-category-text">Video & audio editing</div>
                    </div>
                  </div>
                  <span className="tool-verdict-badge verdict-pick">Hause Pick</span>
                </div>
                <div className="tool-entry-verdict">&ldquo;Edit your video by editing the transcript. Delete a word, the clip disappears. It&apos;s genuinely that simple.&rdquo;</div>
                <div className="tool-entry-body">
                  Descript turns video editing into document editing. The transcript-first workflow means you can rough-cut a 30-minute recording in 20 minutes by deleting filler words, ums, and sections you don&apos;t want — without touching a timeline. The AI removes silences automatically. Eye contact correction fixes off-camera glances. It&apos;s not perfect for motion graphics or colour grading, but for talking-head YouTube content it&apos;s the fastest path from raw to polished.
                </div>
                <div className="tool-entry-footer">
                  <div className="tool-pricing">Free tier available. Creator plan <strong>$24/month</strong>. Pro <strong>$40/month</strong>.</div>
                  <a href="#" className="tool-link">Try Descript →</a>
                </div>
              </div>

              <div className="tool-entry">
                <div className="tool-entry-header">
                  <div className="tool-entry-left">
                    <div className="tool-entry-logo">🎬</div>
                    <div className="tool-name-block">
                      <h3>CapCut for Desktop</h3>
                      <div className="tool-category-text">Alternative editor</div>
                    </div>
                  </div>
                  <span className="tool-verdict-badge verdict-also">Also consider</span>
                </div>
                <div className="tool-entry-verdict">&ldquo;If you&apos;re more comfortable in a traditional timeline editor and want short-form built in, CapCut is your pick.&rdquo;</div>
                <div className="tool-entry-body">
                  CapCut has a free desktop version that&apos;s surprisingly capable for YouTube-first creators. The auto-caption quality is strong, short-form templates are built in, and the learning curve is gentler than Premiere. If your content is more visual (travel, B-roll heavy) than talking-head, CapCut is worth serious consideration. The main limitation: no transcript editing, so word-level cuts require traditional scrubbing.
                </div>
                <div className="tool-entry-footer">
                  <div className="tool-pricing">Desktop version <strong>free</strong>. CapCut Pro <strong>$10/month</strong>.</div>
                  <a href="#" className="tool-link">Try CapCut →</a>
                </div>
              </div>
            </div>

            <div className="content-section" id="repurposing">
              <div className="section-eyebrow">Repurposing</div>
              <h2>Turn one video into five pieces</h2>
              <p>A 10-minute YouTube video is also 5 TikToks, 3 Reels, 8 tweets, and a newsletter section — if you have the right tool. Repurposing used to take 2 hours. With the right stack, it&apos;s 20 minutes.</p>

              <div className="tool-entry">
                <div className="tool-entry-header">
                  <div className="tool-entry-left">
                    <div className="tool-entry-logo">🎯</div>
                    <div className="tool-name-block">
                      <h3>Opus Clip</h3>
                      <div className="tool-category-text">AI video repurposing</div>
                    </div>
                  </div>
                  <span className="tool-verdict-badge verdict-pick">Hause Pick</span>
                </div>
                <div className="tool-entry-verdict">&ldquo;Upload a long video. Get 5 short clips with captions, cropped correctly, and a virality score. It actually works.&rdquo;</div>
                <div className="tool-entry-body">
                  Opus Clip uses AI to find the highest-engagement moments in a long video, crop them to vertical, add animated captions, and export them ready-to-post. The virality score is a genuine signal, not a gimmick. The main limitation: AI clips are usually 80% right — expect to spend 5 minutes per clip trimming the start/end. Still much faster than manual selection and export.
                </div>
                <div className="tool-entry-footer">
                  <div className="tool-pricing">Free tier (60 mins/month). Pro <strong>$15/month</strong> for 150 mins.</div>
                  <a href="#" className="tool-link">Try Opus Clip →</a>
                </div>
              </div>
            </div>

            <div className="content-section" id="comparison">
              <div className="section-eyebrow">Comparison</div>
              <h2>Editing tools compared</h2>
              <p>The four editors we&apos;ve used or researched for lean YouTube teams, across the criteria that actually matter.</p>

              <div className="compare-table-wrap">
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th>Tool</th>
                      <th>Transcript editing</th>
                      <th>Auto-captions</th>
                      <th>Short-form</th>
                      <th>Learning curve</th>
                      <th>Price/mo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="winner">
                      <td>Descript</td>
                      <td><span className="tick">✓</span></td>
                      <td><span className="tick">✓</span></td>
                      <td><span className="partial">~</span></td>
                      <td>Low</td>
                      <td>$24</td>
                    </tr>
                    <tr>
                      <td>CapCut</td>
                      <td><span className="cross">✗</span></td>
                      <td><span className="tick">✓</span></td>
                      <td><span className="tick">✓</span></td>
                      <td>Low</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <td>Premiere Pro</td>
                      <td><span className="cross">✗</span></td>
                      <td><span className="partial">~</span></td>
                      <td><span className="partial">~</span></td>
                      <td>High</td>
                      <td>$60</td>
                    </tr>
                    <tr>
                      <td>Final Cut Pro</td>
                      <td><span className="cross">✗</span></td>
                      <td><span className="partial">~</span></td>
                      <td><span className="cross">✗</span></td>
                      <td>Medium</td>
                      <td>$300 once</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="content-section" id="verdict">
              <div className="section-eyebrow">What we&apos;d do</div>
              <h2>If we were starting<br />this channel today</h2>
              <div className="opinion-block">
                <div className="opinion-label">Our honest take — Hause Collective</div>
                <p>
                  Start with Descript on the Creator plan. The transcript editing workflow alone saves 45 minutes per video. Use Opus Clip to pull short-form from every video — don&apos;t build a separate short-form workflow until you&apos;ve validated that your content works in long-form first.
                  <br /><br />
                  <em>Add Canva Pro for thumbnails once you&apos;ve shipped 10 videos and found your visual style — not before. Too many creators obsess over thumbnails before they&apos;ve figured out what they&apos;re actually saying.</em>
                  <br /><br />
                  The mistake we see: using five tools from day one and mastering none. Lock in Descript + Opus Clip for 90 days. Then layer in the rest.
                </p>
              </div>
            </div>

            <div className="content-section" id="alternatives">
              <div className="section-eyebrow">Alternatives</div>
              <h2>Tools that didn&apos;t make the cut — and why</h2>
              <p>These tools are good. They just didn&apos;t win for this specific situation.</p>
              <div className="alt-list">
                {[
                  { emoji: '🎞️', name: 'Adobe Premiere Pro', why: "Industry standard for a reason — but the learning curve is steep for a 2-person team with no dedicated editor. $60/month for features you won't use for 80% of YouTube content." },
                  { emoji: '🎥', name: 'Riverside.fm', why: "Excellent for podcast-first creators. If your YouTube content is interview-based, Riverside's local recording quality beats everything. Doesn't make the cut here because it's a recording tool, not an editing workflow." },
                  { emoji: '📱', name: 'Submagic', why: "Great auto-captions for short-form. But Opus Clip does captions plus clip selection plus virality scoring. Submagic loses unless you're doing all your own clip selection manually." },
                ].map((alt) => (
                  <div key={alt.name} className="alt-entry">
                    <div className="alt-logo">{alt.emoji}</div>
                    <div>
                      <div className="alt-name">{alt.name}</div>
                      <div className="alt-why">{alt.why}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </article>

          {/* Right rail */}
          <aside className="right-rail">
            <div className="quick-pick">
              <div className="quick-pick-header">
                <div className="quick-pick-label">⭐ Hause Pick — Editing</div>
              </div>
              <div className="quick-pick-body">
                <div className="qp-tool">
                  <div className="qp-logo">✂️</div>
                  <div>
                    <div className="qp-name">Descript</div>
                    <div className="qp-category">Video editing</div>
                  </div>
                </div>
                <div className="qp-verdict">Edit video like a document. The fastest path from raw footage to polished, captioned, ready-to-publish YouTube content.</div>
                <div className="qp-pricing">
                  <div className="qp-price-row"><span className="qp-price-label">Free tier</span><span className="qp-price-val">Yes</span></div>
                  <div className="qp-price-row"><span className="qp-price-label">Creator</span><span className="qp-price-val">$24/mo</span></div>
                  <div className="qp-price-row"><span className="qp-price-label">Pro</span><span className="qp-price-val">$40/mo</span></div>
                </div>
                <a href="#" className="qp-cta">Start free trial →</a>
                <div className="qp-disclosure">Affiliate link · We earn a commission</div>
              </div>
            </div>

            <div className="rail-section">
              <div className="rail-label">All tools in this guide</div>
              {[
                { emoji: '✂️', name: 'Descript', cat: 'Editing' },
                { emoji: '🎯', name: 'Opus Clip', cat: 'Repurposing' },
                { emoji: '🎨', name: 'Canva Pro', cat: 'Thumbnails' },
                { emoji: '🤖', name: 'Claude', cat: 'Scripting & ideation' },
                { emoji: '📋', name: 'Notion', cat: 'Content planning' },
              ].map((t) => (
                <a key={t.name} href="#" className="rail-tool">
                  <div className="rail-tool-logo">{t.emoji}</div>
                  <div>
                    <div className="rail-tool-name">{t.name}</div>
                    <div className="rail-tool-cat">{t.cat}</div>
                  </div>
                  <span className="rail-tool-arrow">→</span>
                </a>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </>
  );
}
