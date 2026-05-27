import PageHero from '@/components/ui/PageHero';
import QuickContactBand from '@/components/sections/contact/QuickContactBand';
import ContactFormMap from '@/components/sections/contact/ContactFormMap';
import AddressCard from '@/components/sections/contact/AddressCard';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, jsonLd } from '@/lib/seo';
import { SITE_CONFIG } from '@/constants/siteConfig';

export const metadata = buildMetadata({
  title: 'Contact Best Astrologer in Bangalore — Pandit Vishwanath Guruji',
  description: `Book a consultation with Pandit Sri Vishwanath Guruji at Sri Panchamukhi Astro Centre, Jayanagar, Bangalore. Call ${SITE_CONFIG.phoneDisplay}, WhatsApp, email, or use the contact form. Same-day appointments often available.`,
  path: '/contact',
  keywords: [
    'astrologer contact number Bangalore',
    'book astrology consultation Bangalore',
    'Vishwanath Guruji phone number',
    'Sri Panchamukhi Astro Centre address',
    'astrologer near Jayanagar 9th block',
  ],
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Contact', href: '/contact' },
          ]),
        )}
      />
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
