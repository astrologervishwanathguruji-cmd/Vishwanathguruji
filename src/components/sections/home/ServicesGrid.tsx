import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import { SERVICES } from '@/constants/services';

export default function ServicesGrid() {
  const featured = SERVICES.slice(0, 6);
  return (
    <section className="bg-site-surface py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          accent="Astrology Solutions"
          title="Guidance for Every Challenge"
          subtitle="Authentic Vedic remedies, delivered with three decades of mastery, across all the situations life can present."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/services" variant="outline">
            View All 13 Services →
          </Button>
        </div>
      </div>
    </section>
  );
}
