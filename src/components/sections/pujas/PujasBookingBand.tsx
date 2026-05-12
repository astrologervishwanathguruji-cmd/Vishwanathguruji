import Button from '@/components/ui/Button';
import PrimaryCtaBand from '@/components/sections/shared/PrimaryCtaBand';
import { SITE_CONFIG } from '@/constants/siteConfig';

export default function PujasBookingBand() {
  return (
    <PrimaryCtaBand
      label="Book a Puja"
      title="Schedule a sacred ritual with Guruji"
      description="All pujas are performed personally by Guruji with traditional Vedic precision. Reach out to discuss timing, intent, and the right ritual for your situation."
      omSide="right"
    >
      <Button href="/contact" variant="gold" size="lg">
        Request a Puja
      </Button>
      <Button href={`tel:${SITE_CONFIG.phone}`} external variant="ghost" size="lg">
        Call {SITE_CONFIG.phoneDisplay}
      </Button>
    </PrimaryCtaBand>
  );
}
