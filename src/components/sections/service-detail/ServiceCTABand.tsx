import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/constants/siteConfig';

export default function ServiceCTABand({ serviceTitle }: { serviceTitle: string }) {
  return (
    <section className="bg-site-dark-band text-site-white py-12 md:py-16">
      <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold">
            Ready to discuss {serviceTitle}?
          </h3>
          <p className="text-site-white/70 mt-2">
            Book a confidential consultation with Guruji today.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/contact" variant="gold" size="lg">
            Book Appointment
          </Button>
          <Button href={`tel:${SITE_CONFIG.phone}`} external variant="ghost" size="lg">
            {SITE_CONFIG.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
