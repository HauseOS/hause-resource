'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Tool } from '@/data/tools';

export function ToolsDirectory({
  tools,
  categories,
  searchPlaceholder,
}: {
  tools: Tool[];
  categories: string[];
  searchPlaceholder: string;
}) {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<string>('All');
  const [freeTier, setFreeTier] = useState(false);

  const hausePickTools = useMemo(() => tools.filter(t => t.hausePick), [tools]);
  const hausePickTotal = useMemo(
    () => hausePickTools.reduce((sum, t) => sum + t.pricingNumeric, 0),
    [hausePickTools],
  );

  const filtered = useMemo(() => {
    let result = tools;

    if (activeTab === 'Hause Picks') {
      result = result.filter(t => t.hausePick);
    } else if (activeTab !== 'All') {
      result = result.filter(t => t.category === activeTab);
    }

    if (freeTier) {
      result = result.filter(t => t.pricingNumeric === 0);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        t =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.pricing.toLowerCase().includes(q),
      );
    }

    return result;
  }, [tools, activeTab, freeTier, search]);

  return (
    <>
      {/* Search */}
      <div className="search-wrap">
        <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <input
          className="search-input"
          type="text"
          placeholder={searchPlaceholder}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <span className="search-hint">&#8984;K</span>
      </div>

      {/* Filter bar */}
      <div className="filter-bar">
        <div className="filter-tabs">
          {['Hause Picks', 'All', ...categories].map(tab => (
            <button
              key={tab}
              className={`filter-tab${
                activeTab === tab
                  ? tab === 'Hause Picks'
                    ? ' active-brand'
                    : ' active'
                  : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <button
            className="filter-tab"
            style={{ color: 'var(--muted-2)', cursor: 'default' }}
          >
            More coming soon
          </button>
        </div>
        <div className="filter-right">
          <button
            className={`filter-chip${freeTier ? ' on' : ''}`}
            onClick={() => setFreeTier(f => !f)}
          >
            Free tier
          </button>
          <button
            className="filter-chip"
            style={{ opacity: 0.4, cursor: 'not-allowed' }}
            disabled
          >
            AI-native
          </button>
        </div>
      </div>

      {/* Top Tools heading */}
      <div className="section-divider" id="tools">
        <span className="section-divider-label">Top tools</span>
        <div className="section-divider-line"></div>
        <span className="section-divider-count">
          {filtered.length} of {tools.length} tools
        </span>
      </div>

      {/* Hause Picks budget bar */}
      <div
        className="picks-budget"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255,78,100,0.06)',
          border: '1px solid rgba(255,78,100,0.15)',
          borderRadius: '8px',
          padding: '10px 16px',
          marginBottom: '14px',
          fontSize: '13px',
        }}
      >
        <span style={{ color: 'var(--fg)' }}>
          <strong>{hausePickTools.length} Hause Picks</strong>
          <span style={{ color: 'var(--muted)', marginLeft: '8px' }}>
            {hausePickTools.map(t => t.name).join(' + ')}
          </span>
        </span>
        <span style={{ color: 'var(--brand)', fontWeight: 600 }}>
          = ${hausePickTotal}/month total
        </span>
      </div>

      {/* Tools grid or empty state */}
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '48px 16px',
            color: 'var(--muted)',
            fontSize: '15px',
          }}
        >
          <p style={{ margin: 0 }}>
            No tools match your search
            {activeTab !== 'All' ? ` in "${activeTab}"` : ''}
            {freeTier ? ' with free tier' : ''}.
          </p>
          <p style={{ margin: '8px 0 0', fontSize: '13px', color: 'var(--muted-2)' }}>
            Try a different search term or clear your filters.
          </p>
        </div>
      ) : (
        <div className="tools-grid">
          {filtered.map(tool => (
            <Link key={tool.id} href={`/tools/${tool.id}`} className="tool-card">
              <div className="tool-card-header">
                <div className="tool-card-left">
                  <div className="tool-logo tool-initial">{tool.name.charAt(0)}</div>
                  <div>
                    <div className="tool-name">{tool.name}</div>
                    <span className={`tool-tag ${tool.tagClass}`}>{tool.category}</span>
                  </div>
                </div>
                {tool.hausePick && <span className="pick-star">&#9733;</span>}
              </div>
              <div className="tool-desc">{tool.description}</div>
              <div className="tool-card-footer">
                <span className="tool-price">
                  From <strong>{tool.pricing}</strong>
                </span>
                <span className="tool-arrow">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* USD note */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '12px',
          fontSize: '11px',
          color: 'var(--muted-2)',
        }}
      >
        All prices in USD. Most tools available globally.
      </div>
    </>
  );
}
