import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="bg-site-surface py-16 md:py-20">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group bg-site-white rounded-md overflow-hidden border border-site-border/40 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-accent mb-1.5">
                  {p.category}
                </div>
                <h3 className="font-display text-lg text-site-text font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-site-text-muted line-clamp-2 mb-3">{p.excerpt}</p>
                <div className="text-xs text-site-text-muted">{formatDate(p.date)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
