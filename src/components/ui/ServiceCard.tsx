'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index?: number;
  showIcon?: boolean;
}

export default function ServiceCard({ service, index = 0, showIcon = true }: ServiceCardProps) {
  const Icon = (Lucide[service.icon as keyof typeof Lucide] ?? Lucide.Sparkles) as Lucide.LucideIcon;

  return (
    <motion.div
      className="h-full min-w-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-site-border/30 bg-site-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
      >
        <div className="relative h-48 shrink-0 overflow-hidden">
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
        <div className="flex min-h-0 flex-1 flex-col p-5 text-center">
          {showIcon && (
            <div className="relative z-10 mx-auto -mt-10 mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-pale text-accent shadow-sm ring-4 ring-site-white">
              <Icon size={20} strokeWidth={1.75} />
            </div>
          )}
          <h3 className="mb-2 shrink-0 font-display text-lg font-semibold text-primary">{service.title}</h3>
          <p className="min-h-0 flex-1 text-sm leading-relaxed text-site-text-muted line-clamp-3">
            {service.shortDescription}
          </p>
          <span className="mt-auto inline-block pt-3 text-xs font-semibold tracking-wide text-accent">
            Read More →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
