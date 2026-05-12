import * as Lucide from 'lucide-react';
import type { Service } from '@/types';

export default function ServiceContent({ service }: { service: Service }) {
  return (
    <article className="prose prose-neutral max-w-none">
      <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-2 not-prose">
        Overview
      </div>
      <h2 className="font-display text-3xl text-primary font-bold leading-tight not-prose">
        {service.title}
      </h2>
      <div className="w-10 h-[3px] bg-accent my-5 not-prose" />
      <p className="text-site-text-muted leading-relaxed">{service.fullContent}</p>

      {service.whySeek.length > 0 && (
        <div className="not-prose mt-10">
          <h3 className="font-display text-2xl text-primary font-semibold mb-5">Why People Seek This Remedy</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.whySeek.map((w) => {
              const Icon = (Lucide[w.icon as keyof typeof Lucide] ?? Lucide.Sparkles) as Lucide.LucideIcon;
              return (
                <div
                  key={w.label}
                  className="flex items-center gap-3 bg-accent-pale/60 px-4 py-3 rounded-md"
                >
                  <Icon size={20} className="text-accent shrink-0" />
                  <span className="text-sm font-medium text-site-text">{w.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {service.process.length > 0 && (
        <div className="not-prose mt-10">
          <h3 className="font-display text-2xl text-primary font-semibold mb-5">How Guruji Works</h3>
          <ol className="space-y-4">
            {service.process.map((p) => (
              <li key={p.step} className="flex gap-4">
                <span className="w-9 h-9 rounded-full bg-primary text-site-white flex items-center justify-center font-display font-bold shrink-0">
                  {p.step}
                </span>
                <div>
                  <h4 className="font-display font-semibold text-site-text">{p.title}</h4>
                  <p className="text-sm text-site-text-muted leading-relaxed mt-1">
                    {p.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}
