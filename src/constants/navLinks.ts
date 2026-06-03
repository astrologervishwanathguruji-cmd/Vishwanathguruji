import type { NavLink } from '@/types';
import { SERVICES } from './services';

export const PRIMARY_LINKS_LEFT: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Guruji', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  { label: 'Pujas', href: '/pujas' },
];

export const PRIMARY_LINKS_RIGHT: NavLink[] = [
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
];

export const ALL_NAV_LINKS: NavLink[] = [
  ...PRIMARY_LINKS_LEFT,
  ...PRIMARY_LINKS_RIGHT,
  { label: 'Contact', href: '/contact' },
];
