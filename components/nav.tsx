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
            <a href="#guides">Guides</a>
            <a href="#tools">Tools</a>
            <a href="#merchants">About</a>
          </div>
          <a href="#merchants" className="nav-for-merchants">For merchants →</a>
        </div>
      </div>
    </nav>
  );
}
