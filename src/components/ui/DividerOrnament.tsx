import { cn } from '@/lib/utils';

interface DividerOrnamentProps {
  variant?: 'om' | 'lotus' | 'line';
  className?: string;
}

export default function DividerOrnament({ variant = 'om', className }: DividerOrnamentProps) {
  if (variant === 'line') {
    return <hr className={cn('border-0 h-px bg-accent/30', className)} />;
  }

  if (variant === 'lotus') {
    return (
      <div className={cn('flex justify-center py-8', className)}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-accent"
          aria-hidden="true"
        >
          <path
            d="M20 4 L24 18 L20 36 L16 18 Z M4 20 L18 16 L36 20 L18 24 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.2"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-4 py-6 max-w-md mx-auto', className)}>
      <div className="flex-1 h-px bg-accent/30" />
      <span className="font-devanagari text-accent text-2xl leading-none">ॐ</span>
      <div className="flex-1 h-px bg-accent/30" />
    </div>
  );
}
