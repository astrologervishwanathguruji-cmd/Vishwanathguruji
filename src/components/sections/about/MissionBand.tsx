import Button from '@/components/ui/Button';
import PrimaryCtaBand from '@/components/sections/shared/PrimaryCtaBand';

export default function MissionBand() {
  return (
    <PrimaryCtaBand
      label="Our Mission"
      title="Vedic wisdom, delivered ethically — for every seeker."
      description="Sri Panchamukhi Astro Centre exists to make authentic Vedic counsel accessible without fear, without exaggeration, and without compromise. Every consultation is held in confidence; every remedy is rooted in classical texts; every seeker leaves with clarity."
      omSide="right"
    >
      <Button href="/contact" variant="gold">
        Begin Your Consultation
      </Button>
    </PrimaryCtaBand>
  );
}
