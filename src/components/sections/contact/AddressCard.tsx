import { MapPin, Clock, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/constants/siteConfig';

export default function AddressCard() {
  return (
    <section className="bg-site-bg py-16 md:py-20">
      <div className="max-w-container mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="bg-site-white p-6 rounded-md border border-site-border/40">
          <MapPin className="text-accent mb-3" />
          <h3 className="font-display text-lg font-semibold text-primary mb-2">Address</h3>
          <p className="text-sm text-site-text-muted leading-relaxed">{SITE_CONFIG.address}</p>
        </div>
        <div className="bg-site-white p-6 rounded-md border border-site-border/40">
          <Clock className="text-accent mb-3" />
          <h3 className="font-display text-lg font-semibold text-primary mb-2">Hours</h3>
          <p className="text-sm text-site-text-muted leading-relaxed">{SITE_CONFIG.hoursShort}</p>
        </div>
        <div className="bg-site-white p-6 rounded-md border border-site-border/40 flex flex-col">
          <Phone className="text-accent mb-3" />
          <h3 className="font-display text-lg font-semibold text-primary mb-2">Direct Line</h3>
          <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm text-site-text-muted">
            {SITE_CONFIG.phoneDisplay}
          </a>
          <Button href={SITE_CONFIG.mapDirections} external variant="outline" size="sm" className="mt-4 self-start">
            Get Directions →
          </Button>
        </div>
      </div>
    </section>
  );
}
