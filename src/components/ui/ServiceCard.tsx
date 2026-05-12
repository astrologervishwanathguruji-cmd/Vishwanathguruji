'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = (Lucide[service.icon as keyof typeof Lucide] ?? Lucide.Sparkles) as Lucide.LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative block rounded-lg overflow-hidden shadow-sm bg-site-white border border-site-border/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/40 transition-colors duration-300 flex items-center justify-center">
            <span className="text-site-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn More →
            </span>
          </div>
        </div>
        <div className="p-5 text-center">
          <div className="w-12 h-12 rounded-full bg-accent-pale text-accent mx-auto -mt-10 mb-3 relative z-10 flex items-center justify-center ring-4 ring-site-white shadow-sm">
            <Icon size={20} strokeWidth={1.75} />
          </div>
          <h3 className="font-display text-lg text-primary font-semibold mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-site-text-muted leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>
          <span className="inline-block mt-3 text-xs font-semibold text-accent tracking-wide">
            Read More →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
