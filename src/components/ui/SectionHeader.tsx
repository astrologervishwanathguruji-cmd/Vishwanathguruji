import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  accent,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col mb-10',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
      )}
    >
      <div className={cn('w-10 h-[3px] bg-accent mb-3')} />
      {accent && (
        <div
          className={cn(
            'text-xs uppercase tracking-[0.2em] font-semibold mb-2',
            light ? 'text-accent-light' : 'text-accent',
          )}
        >
          {accent}
        </div>
      )}
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl leading-tight',
          light ? 'text-site-white' : 'text-site-text',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg max-w-[640px]',
            light ? 'text-site-white/70' : 'text-site-text-muted',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
