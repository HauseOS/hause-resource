'use client';
import Link from 'next/link';

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-7 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-6 h-6 rounded-[5px] bg-brand flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M6 1L11 3.5V8.5L6 11L1 8.5V3.5L6 1Z" stroke="white" strokeWidth="1.4" fill="none" />
            </svg>
          </div>
          <span className="font-display text-[16px] text-fg">
            Hause<span className="text-brand">Resource</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5">
            {[
              { label: 'Guides', href: '#guides' },
              { label: 'Tools', href: '#tools' },
              { label: 'About', href: '#' },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="text-[13px] text-muted hover:text-fg transition-colors">
                {label}
              </a>
            ))}
          </div>
          <a
            href="#merchants"
            className="text-[12px] font-medium text-brand border border-brand/30 rounded-[5px] px-3 py-1.5 hover:bg-brand/8 transition-colors"
          >
            For merchants →
          </a>
        </div>
      </div>
    </nav>
  );
}
