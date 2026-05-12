import type { Puja } from '@/types';
import { PLACEHOLDER_IMG } from './siteConfig';

export const PUJAS: Puja[] = [
  {
    slug: 'maha-mrityunjaya-puja',
    title: 'Maha Mrityunjaya Puja',
    description:
      'The most powerful Vedic ritual for protection from untimely death, severe illness, and life-threatening situations. Performed with 1,25,000 repetitions of the Maha Mrityunjaya Mantra by Guruji and his team of priests.',
    benefits: [
      'Protection from accidents and untimely death',
      'Recovery from chronic and severe illness',
      'Removal of fear and anxiety',
      'Longevity for self and loved ones',
    ],
    image: PLACEHOLDER_IMG,
  },
  {
    slug: 'navgraha-puja',
    title: 'Navagraha Shanti Puja',
    description:
      'A comprehensive ritual addressing all nine planets in your birth chart. Ideal when multiple doshas are present or when you wish to harmonise the entire planetary influence in your life.',
    benefits: [
      'Pacifies all planetary doshas at once',
      'Restores balance across all life areas',
      'Reduces malefic dasha effects',
      'Strengthens benefic planetary influences',
    ],
    image: PLACEHOLDER_IMG,
  },
  {
    slug: 'durga-saptashati-puja',
    title: 'Durga Saptashati Puja',
    description:
      'Recitation of the 700 verses of the Durga Saptashati by Guruji and the centre\'s vedic scholars. Invoking the protective and prosperity-bestowing energies of Goddess Durga.',
    benefits: [
      'Removal of enemies and obstacles',
      'Victory in legal and competitive matters',
      'Protection of family and home',
      'Manifestation of unfulfilled desires',
    ],
    image: PLACEHOLDER_IMG,
  },
  {
    slug: 'kaal-sarp-dosh-nivaran',
    title: 'Kaal Sarp Dosh Nivaran',
    description:
      'A specialised ritual for those born with Kaal Sarp Dosh — when all seven planets are caught between Rahu and Ketu in the birth chart. Performed at sacred shrines or at the centre.',
    benefits: [
      'Removal of mysterious life obstacles',
      'Career and financial breakthroughs',
      'Relief from recurring nightmares',
      'Restoration of natural progress',
    ],
    image: PLACEHOLDER_IMG,
  },
  {
    slug: 'lakshmi-kubera-puja',
    title: 'Lakshmi-Kubera Puja',
    description:
      'A dedicated ritual to Goddess Lakshmi and Lord Kubera, the treasurer of the gods. For removal of financial blocks, attraction of wealth, and stable prosperity.',
    benefits: [
      'Removal of financial blocks',
      'Attraction of stable wealth',
      'Business and investment success',
      'Family abundance and peace',
    ],
    image: PLACEHOLDER_IMG,
  },
];

export const PUJAS_SHLOKA = {
  devanagari: 'ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद् दुःखभाग्भवेत्॥',
  translation:
    'May all be happy, may all be free from illness, may all see what is auspicious, may no one suffer.',
};
