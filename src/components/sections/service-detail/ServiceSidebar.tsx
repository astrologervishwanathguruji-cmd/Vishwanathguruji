import Link from 'next/link';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { SERVICES } from '@/constants/services';
import { SITE_CONFIG } from '@/constants/siteConfig';
import type { Service } from '@/types';

export default function ServiceSidebar({ current }: { current: Service }) {
  const others = SERVICES.filter((s) => s.slug !== current.slug).slice(0, 8);
  return (
    <aside className="lg:sticky lg:top-32 space-y-6">
      <div className="bg-primary text-site-white p-6 rounded-md">
        <div className="text-xs uppercase tracking-[0.2em] text-accent-light font-semibold mb-2">
          Book Now
        </div>
        <h3 className="font-display text-xl font-semibold mb-1">Consult Guruji directly</h3>
        <p className="text-sm text-site-white/80 mb-5">
          Same-day appointments are often available. Reach out for a personalised reading.
        </p>
        <Button href="/contact" variant="gold" className="w-full">
          Request Consultation
        </Button>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center justify-center gap-2 text-sm text-site-white border border-site-white/30 rounded-full py-2 hover:bg-site-white/10"
          >
            <Phone size={14} /> Call
          </a>
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 text-sm text-site-white border border-site-white/30 rounded-full py-2 hover:bg-site-white/10"
          >
            <FaWhatsapp size={14} /> WhatsApp
          </a>
        </div>
      </div>

      <div className="bg-site-white p-6 rounded-md border border-site-border/40">
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-3">
          Other Solutions
        </div>
        <ul className="space-y-2">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="text-sm text-site-text hover:text-primary flex items-center justify-between border-b border-site-border/30 pb-2"
              >
                {s.title}
                <span className="text-accent">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
