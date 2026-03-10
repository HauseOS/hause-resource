import { cn } from '@/lib/utils';
import { type Category, CATEGORY_LABELS } from '@/lib/data';

const styles: Record<Category, string> = {
  video:    'bg-brand/10 text-brand',
  writing:  'bg-blue-500/10 text-blue-400',
  design:   'bg-violet-500/10 text-violet-400',
  build:    'bg-emerald-500/10 text-emerald-400',
  automate: 'bg-yellow-500/10 text-yellow-400',
  ops:      'bg-orange-500/10 text-orange-400',
  research: 'bg-cyan-500/10 text-cyan-400',
};

export function CategoryBadge({ category, className }: { category: Category; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-[10px] font-semibold tracking-wide uppercase rounded px-2 py-0.5',
        styles[category],
        className
      )}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}
