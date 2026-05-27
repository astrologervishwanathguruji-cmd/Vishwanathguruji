import PageHero from '@/components/ui/PageHero';
import FeaturedPost from '@/components/sections/blog/FeaturedPost';
import BlogGrid from '@/components/sections/blog/BlogGrid';
import GlobalClosingCta from '@/components/sections/shared/GlobalClosingCta';
import { BLOG } from '@/constants/blog';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, jsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Astrology Blog — Insights from Pandit Vishwanath Guruji, Bangalore',
  description:
    'Read articles, guidance, and reflections from Pandit Sri Vishwanath Guruji on Vedic astrology, Vashikaran, Vastu, Doshas, Marriage, Gemstones, and life remedies — written from the heart of Jayanagar, Bangalore.',
  path: '/blog',
  keywords: [
    'vedic astrology blog Bangalore',
    'astrology articles by Vishwanath Guruji',
    'kaal sarp dosh blog',
    'vastu tips Bangalore',
    'mangal dosh remedies article',
  ],
});

export default function BlogPage() {
  const featured = BLOG.find((p) => p.featured) ?? BLOG[0];
  const rest = BLOG.filter((p) => p.slug !== featured.slug);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
          ]),
        )}
      />
      <PageHero
        title="Astrology Insights"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
        ]}
      />
      <FeaturedPost post={featured} />
      <BlogGrid posts={rest} />
      <GlobalClosingCta />
    </>
  );
}
