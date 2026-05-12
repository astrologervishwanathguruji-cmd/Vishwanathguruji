'use client';

import { useState } from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { TESTIMONIALS } from '@/constants/testimonials';
import { SERVICES } from '@/constants/services';

export default function TestimonialsGrid() {
  const [filter, setFilter] = useState<string>('all');

  const filtered =
    filter === 'all' ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.serviceSlug === filter);

  return (
    <section className="bg-site-bg py-16 md:py-20">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <p className="text-sm text-site-text-muted">
            Showing <span className="font-semibold text-site-text">{filtered.length}</span> stories
          </p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2.5 bg-site-white border border-site-border/60 rounded-md text-sm focus:outline-none focus:border-accent"
          >
            <option value="all">All services</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-site-text-muted py-12">
            No testimonials yet for this service.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
