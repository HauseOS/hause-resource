import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-sm bg-background/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm border border-primary bg-surface flex items-center justify-center text-primary font-bold text-sm group-hover:shadow-glow transition-shadow">
            H
          </div>
          <span className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">HauseResource</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="text-foreground-dim hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/comparisons" className="text-foreground-dim hover:text-primary transition-colors">
            Compare All
          </Link>
          <a
            href="https://www.youtube.com/@HauseCollective"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-dim hover:text-primary transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
    </nav>
  );
};
