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

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: 'Service not found' };
  return buildMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        title={service.title}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
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
