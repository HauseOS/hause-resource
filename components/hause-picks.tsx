'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Tool } from '@/data/tools';

const ALL_CATEGORIES = ['All', 'Video', 'Writing', 'Design', 'Automate', 'Research', 'Ops'] as const;

export function HausePicks({ tools }: { tools: Tool[] }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTools = useMemo(() => {
    if (activeFilter === 'All') return tools;
    return tools.filter(t => t.category === activeFilter);
  }, [tools, activeFilter]);

  return (
    <section className="picks-section" id="picks">
      <div className="picks-inner">
        <div className="picks-header">
          <div className="picks-header-left">
            <h2 className="picks-title">Hause Picks</h2>
            <p className="picks-sub">Editorially selected tools for lean creative teams. Curated by research, community input, and hands-on testing — not all personally used.</p>
          </div>
        </div>

        <div className="picks-filters">
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`pick-filter ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="picks-grid">
          {filteredTools.map(tool => (
            <Link key={tool.id} href={`/tools/${tool.id}`} className="pick-card">
              <div className="pick-card-top">
                <div className="pick-icon">{tool.name.charAt(0)}</div>
                <div className="pick-card-name-row">
                  <span className="pick-name">{tool.name}</span>
                  <span className={`pick-cat ${tool.tagClass}`}>{tool.category}</span>
                </div>
                {tool.hausePick && <span className="pick-star">&#9733;</span>}
              </div>
              <p className="pick-desc">{tool.description}</p>
              <div className="pick-meta-rows">
                <div className="pick-meta-row">
                  <span className="pick-meta-label">Best for</span>
                  <span className="pick-meta-val">{tool.bestFor}</span>
                </div>
                <div className="pick-meta-row">
                  <span className="pick-meta-label">Replaces</span>
                  <span className="pick-meta-val">{tool.replaces}</span>
                </div>
              </div>
              <div className="pick-card-footer">
                <span className="pick-basis">{tool.basis}</span>
                <span className="pick-pricing">{tool.pricing}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
