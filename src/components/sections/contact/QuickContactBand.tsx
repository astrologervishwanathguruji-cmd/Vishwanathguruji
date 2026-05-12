import { Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/constants/siteConfig';

const cards = [
  {
    icon: Phone,
    title: 'Call Guruji',
    detail: SITE_CONFIG.phoneDisplay,
    href: `tel:${SITE_CONFIG.phone}`,
    external: false,
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    detail: 'Message any time',
    href: SITE_CONFIG.whatsapp,
    external: true,
  },
  {
    icon: Mail,
    title: 'Email',
    detail: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    external: false,
  },
];

export default function QuickContactBand() {
  return (
    <section className="bg-primary text-site-white">
      <div className="max-w-container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map(({ icon: Icon, title, detail, href, external }) => (
          <a
            key={title}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="flex min-w-0 items-center gap-4 bg-primary-dark/50 hover:bg-primary-dark p-5 rounded-md border border-primary-light/30 transition-colors"
          >
            <span className="w-12 h-12 rounded-full bg-accent text-site-white flex items-center justify-center shrink-0">
              <Icon size={20} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-xs uppercase tracking-[0.18em] text-accent-light font-semibold">
                {title}
              </div>
              <div
                className={cn(
                  'font-display font-semibold',
                  title === 'Email' ? 'break-all' : 'break-words',
                )}
              >
                {detail}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
