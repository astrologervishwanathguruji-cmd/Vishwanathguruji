import PageHero from '@/components/ui/PageHero';
import QuickContactBand from '@/components/sections/contact/QuickContactBand';
import ContactFormMap from '@/components/sections/contact/ContactFormMap';
import AddressCard from '@/components/sections/contact/AddressCard';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Contact Us',
  description:
    "Reach Pandit Sri Vishwanath Guruji at Sri Panchamukhi Astro Centre, Jayanagar, Bangalore. Phone, WhatsApp, email, and consultation form.",
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />
      <QuickContactBand />
      <ContactFormMap />
      <AddressCard />
    </>
  );
}
