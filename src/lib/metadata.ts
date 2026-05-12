import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';

export const buildMetadata = ({
  title,
  description,
  path = '/',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: `${SITE_CONFIG.siteUrl}${path}`,
    siteName: SITE_CONFIG.name,
    type: 'website',
  },
});
