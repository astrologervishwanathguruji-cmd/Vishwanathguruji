'use client';

const ROW_A = [
  'Vashikaran & Love',
  'Black Magic Removal',
  'Vastu Harmony',
  'Career & Finance',
  'Sacred Pujas',
  'Kundali Reading',
  'Tantrik Protection',
];

const ROW_B = [
  '35+ Years Guidance',
  'Ancient Vedic Methods',
  'Jayanagar, Bangalore',
  '55,000+ Families',
  'Personalized Remedies',
  'Confidential Consultation',
];

function Row({
  items,
  reverse,
  ariaHidden,
}: {
  items: string[];
  reverse?: boolean;
  ariaHidden?: boolean;
}) {
  const segment = (keyPrefix: string) => (
    <div className="flex shrink-0 items-center gap-5 px-5" aria-hidden={ariaHidden}>
      {items.map((label) => (
        <span
          key={`${keyPrefix}-${label}`}
          className="flex items-center gap-5 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.22em] text-site-white/85"
        >
          {label}
          <span className="font-devanagari text-sm font-normal text-accent-light/90">· ॐ ·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`flex overflow-hidden border-b border-site-white/10 py-2.5 last:border-b-0 ${reverse ? 'animate-marquee-reverse motion-reduce:animate-none' : 'animate-marquee motion-reduce:animate-none'} hover:[animation-play-state:paused]`}
    >
      {segment('a')}
      {segment('b')}
    </div>
  );
}

export default function HeroBridgeTicker() {
  return (
    <div className="relative z-[1] bg-gradient-to-r from-site-dark-band via-primary-dark to-site-dark-band">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_50%_0%,color-mix(in_srgb,var(--color-accent)_12%,transparent),transparent_55%)]" />
      <div className="relative mx-auto max-w-container px-4">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse ariaHidden />
      </div>
    </div>
  );
}
