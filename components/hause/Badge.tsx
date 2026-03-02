import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'default', size = 'sm', children, className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center rounded-full font-semibold transition-all duration-200 whitespace-nowrap border';

    const variants = {
      default: 'bg-surface border-border text-foreground-muted hover:border-foreground/50',
      primary: 'bg-primary/10 border-primary/30 text-primary hover:bg-primary/20',
      secondary: 'bg-surface/50 border-border/60 text-foreground-dim hover:border-primary/40 hover:bg-surface',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
