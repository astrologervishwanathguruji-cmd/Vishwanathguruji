import Button from '@/components/ui/Button';
import DividerOrnament from '@/components/ui/DividerOrnament';
import PrimaryCtaBand from '@/components/sections/shared/PrimaryCtaBand';
import { SITE_CONFIG } from '@/constants/siteConfig';

/** Shared bottom-of-page CTA + lotus divider (About-style) for inner pages */
export default function GlobalClosingCta() {
  return (
    <>
      <PrimaryCtaBand
        label="Next Step"
        title="Begin your consultation with Guruji"
        description="Whether you seek guidance on career, relationships, protection, or spiritual balance — reach out for a confidential Vedic consultation."
        omSide="right"
      >
        <Button href="/contact" variant="gold" size="lg">
          Begin Your Consultation
        </Button>
        <Button href={`tel:${SITE_CONFIG.phone}`} external variant="ghost" size="lg">
          {SITE_CONFIG.phoneDisplay}
        </Button>
      </PrimaryCtaBand>
      <DividerOrnament variant="lotus" />
    </>
  );
}
