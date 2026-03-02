import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hoverable = false, interactive = false, className = '', ...props }, ref) => {
    const baseStyles = 'rounded-lg border border-border bg-surface transition-all duration-300 overflow-hidden relative';
    
    const hoverStyles = hoverable 
      ? 'hover:border-primary/40 hover:shadow-glow-md hover:bg-surface-hover hover:translate-y-[-2px]' 
      : '';
    
    const interactiveStyles = interactive
      ? 'cursor-pointer active:scale-95 active:shadow-glow'
      : '';

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${hoverStyles} ${interactiveStyles} ${className}`}
        {...props}
      >
        {/* Subtle border shine on hover */}
        <div className="absolute inset-0 border border-primary/0 rounded-lg hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={`p-6 pb-3 ${className}`} {...props}>
      {children}
    </div>
  )
);

CardHeader.displayName = 'CardHeader';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={`px-6 pb-6 ${className}`} {...props}>
      {children}
    </div>
  )
);

CardContent.displayName = 'CardContent';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={`flex items-center justify-between border-t border-border px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  )
);

CardFooter.displayName = 'CardFooter';
