import type { GalleryImage } from '@/types';
import { PLACEHOLDER_IMG } from './siteConfig';

const make = (
  id: string,
  category: GalleryImage['category'],
  alt: string,
  width = 800,
  height = 1000,
): GalleryImage => ({ id, src: PLACEHOLDER_IMG, alt, category, width, height });

export const GALLERY: GalleryImage[] = [
  make('g1', 'events', 'Annual gathering at Sri Panchamukhi Astro Centre'),
  make('g2', 'pujas', 'Sacred Maha Mrityunjaya havan ceremony', 800, 600),
  make('g3', 'consultations', 'Guruji consulting a client at the centre', 800, 1100),
  make('g4', 'media', 'Press feature on Pandit Vishwanath Guruji', 800, 600),
  make('g5', 'ceremonies', 'Navagraha shanti ceremony', 800, 800),
  make('g6', 'pujas', 'Durga Saptashati recitation', 800, 1000),
  make('g7', 'events', 'Devotee gathering during Navaratri'),
  make('g8', 'consultations', 'Vastu site visit reading', 800, 600),
  make('g9', 'ceremonies', 'Kaal Sarp Dosh Nivaran at sacred shrine', 800, 1100),
  make('g10', 'media', 'Television interview with Guruji', 800, 600),
  make('g11', 'pujas', 'Lakshmi-Kubera puja preparations', 800, 900),
  make('g12', 'events', 'Free annual community puja'),
  make('g13', 'consultations', 'Birth chart analysis session', 800, 600),
  make('g14', 'ceremonies', 'Maha Rudra Abhishek ritual', 800, 1000),
  make('g15', 'pujas', 'Havan kunda being prepared', 800, 600),
  make('g16', 'events', 'Guruji blessing devotees', 800, 1100),
];

export const GALLERY_CATEGORIES: { key: GalleryImage['category'] | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'events', label: 'Events' },
  { key: 'pujas', label: 'Pujas' },
  { key: 'consultations', label: 'Consultations' },
  { key: 'media', label: 'Media' },
  { key: 'ceremonies', label: 'Ceremonies' },
];

export const VIDEO_GALLERY = [
  { id: 'v1', title: 'Guruji speaks on Vashikaran & ethics', thumb: PLACEHOLDER_IMG, url: '#' },
  { id: 'v2', title: 'Maha Mrityunjaya Puja highlights', thumb: PLACEHOLDER_IMG, url: '#' },
  { id: 'v3', title: 'Vastu Shastra essentials by Guruji', thumb: PLACEHOLDER_IMG, url: '#' },
  { id: 'v4', title: 'Annual Navaratri ceremony', thumb: PLACEHOLDER_IMG, url: '#' },
];
