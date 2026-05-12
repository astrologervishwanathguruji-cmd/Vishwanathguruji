import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-site-white hover:bg-primary-dark border border-primary hover:border-primary-dark',
  secondary:
    'bg-site-white text-primary hover:bg-site-surface border border-primary',
  outline:
    'bg-transparent text-primary hover:bg-primary hover:text-site-white border border-primary',
  ghost:
    'bg-transparent text-site-white hover:bg-site-white/10 border border-site-white',
  gold:
    'bg-accent text-site-white hover:bg-accent-light border border-accent hover:border-accent-light',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-full tracking-wide transition-all duration-200',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
