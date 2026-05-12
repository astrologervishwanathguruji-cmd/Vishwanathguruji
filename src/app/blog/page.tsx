import PageHero from '@/components/ui/PageHero';
import FeaturedPost from '@/components/sections/blog/FeaturedPost';
import BlogGrid from '@/components/sections/blog/BlogGrid';
import { BLOG } from '@/constants/blog';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Astrology Insights',
  description:
    "Articles, guidance, and reflections by Pandit Sri Vishwanath Guruji on Vedic astrology and life remedies.",
  path: '/blog',
});

export default function BlogPage() {
  const featured = BLOG.find((p) => p.featured) ?? BLOG[0];
  const rest = BLOG.filter((p) => p.slug !== featured.slug);
  return (
    <>
      <PageHero
        title="Astrology Insights"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
        ]}
      />
      <FeaturedPost post={featured} />
      <BlogGrid posts={rest} />
    </>
  );
}
