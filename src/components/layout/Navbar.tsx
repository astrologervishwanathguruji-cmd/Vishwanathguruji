'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { PRIMARY_LINKS_LEFT, PRIMARY_LINKS_RIGHT } from '@/constants/navLinks';
import { SERVICES } from '@/constants/services';
import Button from '@/components/ui/Button';
import HamburgerMenu from './HamburgerMenu';

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex flex-col items-center gap-1 group">
      <div
        className={cn(
          'rounded-full bg-accent text-site-white flex items-center justify-center font-devanagari shadow-sm',
          compact ? 'w-8 h-8 text-base' : 'w-10 h-10 text-xl',
        )}
      >
        ॐ
      </div>
      <div className="text-center">
        <div className={cn('font-display font-bold text-primary leading-tight', compact ? 'text-sm' : 'text-base')}>
          Sri Panchamukhi Astro Centre
        </div>
        <div className="text-[9px] tracking-[0.18em] text-site-text-muted uppercase">
          · Est. {SITE_CONFIG.established} ·
        </div>
      </div>
    </Link>
  );
}

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/services"
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        Services
        <span className="text-xs">▾</span>
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px] z-50"
          >
            <div className="bg-site-white rounded-lg shadow-2xl border border-site-border/40 p-6 grid grid-cols-3 gap-x-6 gap-y-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-sm text-site-text hover:text-primary py-1.5 border-b border-transparent hover:border-accent transition-colors"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavLinks({ links, align }: { links: typeof PRIMARY_LINKS_LEFT; align: 'left' | 'right' }) {
  const pathname = usePathname();
  return (
    <ul
      className={cn(
        'hidden lg:flex items-center gap-6 text-sm text-site-text font-medium',
        align === 'left' ? 'justify-start' : 'justify-end',
      )}
    >
      {links.map((l) => {
        if (l.children) {
          return (
            <li key={l.label}>
              <ServicesDropdown />
            </li>
          );
        }
        const active = pathname === l.href;
        return (
          <li key={l.label}>
            <Link
              href={l.href}
              className={cn(
                'transition-colors hover:text-primary',
                active && 'text-primary font-semibold',
              )}
            >
              {l.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 transition-all duration-300',
          scrolled ? 'shadow-md' : '',
        )}
      >
        <div className="bg-primary-dark text-accent-light text-[11px] hidden md:block">
          <div className="max-w-container mx-auto px-6 py-1.5 flex items-center justify-between font-mono">
            <div className="flex items-center gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-1.5 hover:text-accent">
                <Phone size={11} /> {SITE_CONFIG.phoneDisplay}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-accent">
                <Mail size={11} /> {SITE_CONFIG.email}
              </a>
            </div>
            <div className="hidden sm:block uppercase tracking-wider">
              {SITE_CONFIG.hoursShort} · {SITE_CONFIG.cityShort}
            </div>
          </div>
        </div>

        <div
          className={cn(
            'bg-site-white/95 backdrop-blur-md border-b border-site-border/40 transition-all duration-300',
            scrolled && 'bg-site-white/90',
          )}
        >
          <div className="max-w-container mx-auto px-6 py-3 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <NavLinks links={PRIMARY_LINKS_LEFT} align="left" />

            <div className="flex items-center gap-3 lg:gap-0">
              <button
                type="button"
                className="lg:hidden p-2 text-primary"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
              <Logo />
            </div>

            <div className="flex items-center justify-end gap-6">
              <ul className="hidden lg:flex items-center gap-6 text-sm text-site-text font-medium">
                {PRIMARY_LINKS_RIGHT.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button href="/contact" size="sm" className="hidden md:inline-flex">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </header>

      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
