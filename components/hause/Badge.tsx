import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'default', size = 'sm', children, className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center rounded-full font-medium transition-smooth whitespace-nowrap';

    const variants = {
      default: 'bg-surface border border-border text-foreground-muted',
      primary: 'bg-primary/10 border border-primary/30 text-primary',
      secondary: 'bg-primary/5 border border-border text-foreground-dim',
    };

    const sizes = {
      sm: 'px-2.5 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
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
