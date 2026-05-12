import Button from '@/components/ui/Button';
import PrimaryCtaBand from '@/components/sections/shared/PrimaryCtaBand';
import { SITE_CONFIG } from '@/constants/siteConfig';

export default function ServiceCTABand({ serviceTitle }: { serviceTitle: string }) {
  return (
    <PrimaryCtaBand
      label="Consultation"
      title={`Ready to discuss ${serviceTitle}?`}
      description="Book a confidential consultation with Guruji today. Same-day appointments are often available."
      omSide="right"
    >
      <Button href="/contact" variant="gold" size="lg">
        Book Appointment
      </Button>
      <Button href={`tel:${SITE_CONFIG.phone}`} external variant="ghost" size="lg">
        {SITE_CONFIG.phoneDisplay}
      </Button>
    </PrimaryCtaBand>
  );
}
