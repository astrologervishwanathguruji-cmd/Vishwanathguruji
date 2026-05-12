'use client';

import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '@/constants/siteConfig';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <a
        href={`tel:${SITE_CONFIG.phone}`}
        className="group relative w-14 h-14 rounded-full bg-accent text-site-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Call now"
      >
        <Phone size={22} />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-site-dark-band text-site-white text-xs px-3 py-1.5 rounded opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
          Call Guruji
        </span>
      </a>
      <a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] text-site-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden />
        <FaWhatsapp size={26} className="relative z-10" />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-site-dark-band text-site-white text-xs px-3 py-1.5 rounded opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
