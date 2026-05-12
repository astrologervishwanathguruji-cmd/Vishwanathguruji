import { cn } from '@/lib/utils';
import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export default function Card({ children, hover = true, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'bg-site-white rounded-lg overflow-hidden shadow-sm border border-site-border/40',
        hover && 'transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
