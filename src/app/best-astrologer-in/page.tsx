import Link from 'next/link';
import { MapPin } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import GlobalClosingCta from '@/components/sections/shared/GlobalClosingCta';
import { SERVICE_AREAS } from '@/constants/areas';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, jsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Best Astrologer in Bangalore — Areas We Serve',
  description:
    'Pandit Sri Vishwanath Guruji is consulted from every neighbourhood in Bangalore — Jayanagar, JP Nagar, Banashankari, Koramangala, Indiranagar, Whitefield, HSR Layout, BTM Layout, Electronic City, Yelahanka, Hebbal and more. Find your locality and book a consultation.',
  path: '/best-astrologer-in',
  keywords: [
    'astrologer in Bangalore areas',
    'best astrologer near me Bangalore',
    'astrology centre locations Bangalore',
    'pandit near me Bangalore',
  ],
});

export default function AreasIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Areas We Serve', href: '/best-astrologer-in' },
          ]),
        )}
      />
      <PageHero
        title="Best Astrologer in Bangalore"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Areas We Serve', href: '/best-astrologer-in' },
        ]}
      />

      <section className="bg-site-bg py-16 md:py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHeader
            accent="Areas We Serve"
            title="Trusted Across Every Neighbourhood of Bangalore"
            subtitle="Pandit Sri Vishwanath Guruji is consulted by families from every corner of Bangalore and beyond. Choose your locality to learn how Guruji can help."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/best-astrologer-in/${area.slug}`}
                className="group flex items-start gap-4 rounded-lg border border-site-border/30 bg-site-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-pale text-accent">
                  <MapPin size={18} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary group-hover:text-accent">
                    Best Astrologer in {area.name}
                  </h3>
                  <p className="mt-1 text-sm text-site-text-muted line-clamp-2">{area.blurb}</p>
                  <span className="mt-2 inline-block text-xs font-semibold tracking-wide text-accent">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Book a Consultation
            </Button>
            <Button href={`tel:${SITE_CONFIG.phone}`} external variant="outline" size="lg">
              Call {SITE_CONFIG.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      <GlobalClosingCta />
    </>
  );
}
