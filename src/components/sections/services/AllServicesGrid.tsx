import ServiceCard from '@/components/ui/ServiceCard';
import { SERVICES } from '@/constants/services';

export default function AllServicesGrid() {
  return (
    <section className="bg-site-surface py-12 md:py-16">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
