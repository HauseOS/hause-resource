import Link from 'next/link';

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-mark">
            <svg viewBox="0 0 12 12" fill="none">
              <path d="M6 1L11 3.5V8.5L6 11L1 8.5V3.5L6 1Z" stroke="white" strokeWidth="1.4" fill="none" />
            </svg>
          </div>
          <span className="nav-logo-name">Hause<span>Resource</span></span>
        </Link>
        <div className="nav-right">
          <div className="nav-links">
            <a href="/#top">Guides</a>
            <a href="/#picks">Picks</a>
            <a href="https://hause.co" target="_blank" rel="noopener">Hause.co</a>
          </div>
          <a
            href="mailto:hello@hause.co?subject=HauseResource%20Merchant%20Partnership"
            className="nav-for-merchants"
          >
            For Merchants
          </a>
        </div>
      </div>
    </nav>
  );
}
