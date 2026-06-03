'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { TESTIMONIALS } from '@/constants/testimonials';
import { SERVICES, getServiceBySlug } from '@/constants/services';

export default function TestimonialsGrid() {
  const [filter, setFilter] = useState<string>('all');

  const filtered =
    filter === 'all' ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.serviceSlug === filter);
  const activeService = filter === 'all' ? null : getServiceBySlug(filter);

  return (
    <section className="bg-site-bg py-16 md:py-20">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          accent="Written Reviews"
          title="Stories from Our Clients"
          subtitle="Filter by the service that matters to you, then read how others found clarity and relief with Guruji’s guidance."
          align="left"
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <p className="text-sm text-site-text-muted">
            Showing <span className="font-semibold text-site-text">{filtered.length}</span> stories
          </p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2.5 bg-site-white border border-site-border/60 rounded-md text-sm focus:outline-none focus:border-accent"
            aria-label="Filter testimonials by service"
          >
            <option value="all">All services</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              filter === 'all'
                ? 'bg-primary text-site-white border-primary'
                : 'bg-site-white text-site-text-muted border-site-border/60 hover:border-accent hover:text-accent'
            }`}
          >
            All
          </button>
          {SERVICES.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border bg-site-white text-site-text-muted border-site-border/60 hover:border-accent hover:text-accent transition-colors"
            >
              {s.title.split(' ')[0]}
            </Link>
          ))}
          <Link
            href="/services"
            className="text-xs font-semibold px-3 py-1.5 rounded-full text-accent hover:text-primary transition-colors"
          >
            All services →
          </Link>
        </div>

        {activeService ? (
          <div className="mb-8 p-5 bg-site-surface rounded-md border border-site-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-site-text-muted">
              Reviews related to{' '}
              <span className="font-semibold text-site-text">{activeService.title}</span>
            </p>
            <Button href={`/services/${activeService.slug}`} variant="primary" size="sm">
              Learn About This Service
            </Button>
          </div>
        ) : null}

        {filtered.length === 0 ? (
          <div className="text-center py-12 px-6 bg-site-surface rounded-md border border-site-border/40">
            <p className="text-site-text-muted mb-6">
              No written testimonials listed for this service yet. Guruji may still help you — book
              a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/contact" variant="gold" size="md">
                Book Consultation
              </Button>
              <Button href="/services" variant="outline" size="md">
                Browse All Services
              </Button>
            </div>
          </div>
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
