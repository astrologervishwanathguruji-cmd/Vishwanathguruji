import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ServiceContent from '@/components/sections/service-detail/ServiceContent';
import ServiceSidebar from '@/components/sections/service-detail/ServiceSidebar';
import ServiceFAQ from '@/components/sections/service-detail/ServiceFAQ';
import ServiceCTABand from '@/components/sections/service-detail/ServiceCTABand';
import DividerOrnament from '@/components/ui/DividerOrnament';
import { SERVICES, getServiceBySlug } from '@/constants/services';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema, jsonLd, serviceSchema } from '@/lib/seo';
import { SITE_CONFIG } from '@/constants/siteConfig';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service not found' };
  const title = `${service.title} in Bangalore — ${SITE_CONFIG.guruji}`;
  const description = `${service.shortDescription} Trusted Vedic remedies by Pandit Sri Vishwanath Guruji at Sri Panchamukhi Astro Centre, Jayanagar, Bangalore.`;
  return buildMetadata({
    title,
    description,
    path: `/services/${service.slug}`,
    image: service.heroImage,
    keywords: [
      `${service.title} in Bangalore`,
      `${service.title} specialist`,
      `best astrologer for ${service.title} Bangalore`,
      `${service.title} Jayanagar`,
    ],
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(serviceSchema(service))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(service.faq))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))}
      />
      <PageHero
        title={service.title}
        breadcrumb={breadcrumbs}
        backgroundImage={service.heroImage}
      />
      <section className="bg-site-bg py-16 md:py-20">
        <div className="max-w-container mx-auto px-6 grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16">
          <ServiceContent service={service} />
          <ServiceSidebar current={service} />
        </div>
      </section>
      <ServiceFAQ service={service} />
      <ServiceCTABand serviceTitle={service.title} />
      <DividerOrnament variant="lotus" />
    </>
  );
}
