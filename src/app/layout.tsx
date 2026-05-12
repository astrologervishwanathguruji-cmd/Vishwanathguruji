import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, Noto_Serif_Devanagari } from 'next/font/google';
// import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import BackToTop from '@/components/ui/BackToTop';
import { SITE_CONFIG } from '@/constants/siteConfig';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
const devanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-devanagari',
  display: 'swap',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.name} | Pandit Vishwanath Guruji Bangalore`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Pandit Sri Vishwanath Guruji — Bangalore's most trusted Vedic astrologer with 35+ years of experience. Expert in Vashikaran, Black Magic Removal, Vastu Shastra, and life problem solutions.",
  keywords: [
    'astrologer bangalore',
    'vishwanath guruji',
    'vashikaran specialist',
    'black magic removal bangalore',
    'vedic astrology jayanagar',
    'panchamukhi astro centre',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.name,
  description: 'Vedic astrology and spiritual healing services',
  url: SITE_CONFIG.siteUrl,
  telephone: SITE_CONFIG.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#2004 South End E Cross, Near Sri Ragigudda Temple, Jayanagar 9th Block',
    addressLocality: 'Bengaluru',
    postalCode: '560069',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 12.9252, longitude: 77.5945 },
  openingHours: 'Mo-Su 09:00-20:00',
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${devanagari.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <BackToTop />
        {/* <GoogleAnalytics gaId="G-XXXXXXX" /> */}
      </body>
    </html>
  );
}
