import type { BlogPost } from '@/types';
import { PLACEHOLDER_IMG } from './siteConfig';

const longBody = `Vedic astrology is far more than a system of prediction, it is a contemplative science of timing, karma, and self-knowledge. In this article, Pandit Sri Vishwanath Guruji explains the foundational principles every seeker should understand before approaching the shastra.

The birth chart, or janma kundali, is a map of the planetary positions at the precise moment of one's birth. Each planet exerts both a generic and a personal influence, and the strength of these influences shifts across the lifetime through the dasha system.

Many seekers come to astrology expecting a verdict. The Vedic tradition offers something deeper: an instrument of preparation. By understanding which planetary period is active, one can act in harmony with the prevailing winds rather than against them, and the right remedy, performed at the right time, can transform the trajectory of an entire life.`;

export const BLOG: BlogPost[] = [
  {
    slug: 'understanding-vedic-astrology',
    title: 'Understanding the Foundations of Vedic Astrology',
    excerpt:
      'A beginner-friendly introduction to janma kundali, dasha cycles, and the philosophy of remedy by Pandit Sri Vishwanath Guruji.',
    date: '2026-02-14',
    image: PLACEHOLDER_IMG,
    category: 'Astrology Basics',
    content: longBody,
    featured: true,
  },
  {
    slug: 'signs-of-black-magic',
    title: '7 Subtle Signs You May Be Affected by Black Magic',
    excerpt:
      'Disturbed sleep, sudden quarrels, unexplained illness, Guruji explains the early warning signals and what to do about them.',
    date: '2026-01-22',
    image: PLACEHOLDER_IMG,
    category: 'Protection',
    content: longBody,
    featured: false,
  },
  {
    slug: 'vastu-tips-for-home',
    title: '5 Simple Vastu Tips for a Harmonious Home',
    excerpt:
      'Small placement changes that align your home with the five elements, no demolition required.',
    date: '2025-12-30',
    image: PLACEHOLDER_IMG,
    category: 'Vastu Shastra',
    content: longBody,
    featured: false,
  },
  {
    slug: 'kaal-sarp-dosh-explained',
    title: 'Kaal Sarp Dosh: What It Is and How to Remedy It',
    excerpt:
      'A clear explanation of one of the most feared planetary configurations, and the proven remedies that resolve it.',
    date: '2025-11-18',
    image: PLACEHOLDER_IMG,
    category: 'Doshas',
    content: longBody,
    featured: false,
  },
  {
    slug: 'how-to-choose-gemstone',
    title: 'Choosing the Right Gemstone for Your Birth Chart',
    excerpt:
      'Why a wrongly chosen gemstone can harm, and how Guruji prescribes the correct stone, weight, and timing for each client.',
    date: '2025-10-04',
    image: PLACEHOLDER_IMG,
    category: 'Remedies',
    content: longBody,
    featured: false,
  },
  {
    slug: 'mangal-dosh-before-marriage',
    title: 'Mangal Dosh: What It Means Before Marriage',
    excerpt:
      'Mangalik or not? Guruji separates myth from reality and explains the legitimate Vedic remedies that resolve Mars-related concerns.',
    date: '2025-09-11',
    image: PLACEHOLDER_IMG,
    category: 'Marriage',
    content: longBody,
    featured: false,
  },
  {
    slug: 'pitru-dosh-and-family-harmony',
    title: 'Pitru Dosh and the Secret Pattern Behind Family Disputes',
    excerpt:
      'When generations of quarrels seem to have no rational cause, ancestral dosha may be at work. Here\'s what to do.',
    date: '2025-08-02',
    image: PLACEHOLDER_IMG,
    category: 'Family',
    content: longBody,
    featured: false,
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
  BLOG.find((p) => p.slug === slug);
