import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';

interface BuildMetadataInput {
  title: string;
  description: string;
  path?: string;
  /** Optional page-specific keywords appended to site defaults. */
  keywords?: string[];
  /** Optional OG image override. Falls back to site default. */
  image?: string;
  /** Override OG `type`. Defaults to "website"; use "article" for blog posts. */
  type?: 'website' | 'article' | 'profile';
  /** Optional ISO publication date for articles. */
  publishedTime?: string;
  /** Optional ISO modification date for articles. */
  modifiedTime?: string;
  /** Optional author name(s) for articles. */
  authors?: string[];
  /** When true, search engines will not index the page. */
  noIndex?: boolean;
}

export const buildMetadata = ({
  title,
  description,
  path = '/',
  keywords = [],
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: BuildMetadataInput): Metadata => {
  const url = `${SITE_CONFIG.siteUrl.replace(/\/$/, '')}${path === '/' ? '' : path}`;
  const ogImage = image ?? SITE_CONFIG.defaultOgImage;
  const absoluteOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_CONFIG.siteUrl.replace(/\/$/, '')}${ogImage}`;

  const mergedKeywords = Array.from(
    new Set([...keywords, ...SITE_CONFIG.primaryKeywords]),
  );

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type,
      images: [
        {
          url: absoluteOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: authors ?? [SITE_CONFIG.guruji],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteOgImage],
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    authors: [{ name: SITE_CONFIG.guruji, url: SITE_CONFIG.siteUrl }],
    creator: SITE_CONFIG.guruji,
    publisher: SITE_CONFIG.name,
    category: 'Vedic Astrology',
  };
};
