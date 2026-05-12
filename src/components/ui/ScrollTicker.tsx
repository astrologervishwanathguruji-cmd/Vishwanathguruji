import { SERVICES } from '@/constants/services';

export default function ScrollTicker() {
  const items = SERVICES.map((s) => s.title);
  const renderItems = (keyPrefix: string) => (
    <div className="flex shrink-0 items-center gap-6 px-6" aria-hidden={keyPrefix === 'b'}>
      {items.map((title) => (
        <span key={`${keyPrefix}-${title}`} className="flex items-center gap-6 whitespace-nowrap">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-site-white/90">
            {title}
          </span>
          <span className="font-devanagari text-accent-light text-lg leading-none">· ॐ ·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-primary py-3 overflow-hidden border-y border-primary-dark">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {renderItems('a')}
        {renderItems('b')}
      </div>
    </div>
  );
}
