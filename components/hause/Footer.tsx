import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm border border-primary bg-surface flex items-center justify-center text-primary font-bold text-sm">
                H
              </div>
              <span className="font-display font-bold text-foreground">HauseResource</span>
            </div>
            <p className="text-sm text-foreground-dim">
              Curated AI tools for builders. Transparent affiliate links help us keep the lights on.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground-dim hover:text-primary transition-colors">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/comparisons" className="text-foreground-dim hover:text-primary transition-colors">
                  Compare Tools
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@HauseCollective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-dim hover:text-primary transition-colors"
                >
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground-dim hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-dim hover:text-primary transition-colors">
                  Affiliate Disclosure
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-dim hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground-muted">
            <p>© 2026 Hause Collective. All rights reserved.</p>
            <p>💰 We earn commission on affiliate links. See our disclosure for details.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
