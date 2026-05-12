import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

export default function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <section className="bg-site-bg py-12 md:py-16">
      <div className="max-w-container mx-auto px-6">
        <Link
          href={`/blog/${post.slug}`}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 group items-center bg-site-white rounded-md overflow-hidden border border-site-border/40"
        >
          <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span className="absolute top-4 left-4 bg-accent text-site-white text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
          <div className="p-6 md:p-10">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent mb-2">
              {post.category}
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-primary font-bold leading-tight mb-3 group-hover:text-primary-dark transition-colors">
              {post.title}
            </h2>
            <p className="text-site-text-muted leading-relaxed mb-4">{post.excerpt}</p>
            <div className="text-xs text-site-text-muted">{formatDate(post.date)}</div>
            <span className="inline-block mt-5 text-accent font-semibold">Read article →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
