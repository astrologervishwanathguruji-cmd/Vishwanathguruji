'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Mail, Phone } from 'lucide-react';
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
          'rounded-full bg-accent text-site-white flex items-center justify-center font-devanagari shadow-sm leading-none',
          compact ? 'w-8 h-8 text-base' : 'w-10 h-10 text-xl',
        )}
      >
        <span className="inline-flex items-center justify-center leading-none translate-y-1">ॐ</span>
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
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!menuOpen) return;
    const el = headerRef.current;
    if (!el) return;
    setHeaderHeight(el.offsetHeight);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {menuOpen ? (
        <div
          aria-hidden
          className="w-full shrink-0"
          style={{
            height: headerHeight > 0 ? `${headerHeight}px` : undefined,
          }}
        />
      ) : null}
      <header
        ref={headerRef}
        className={cn(
          menuOpen ? 'fixed top-0 left-0 right-0 z-[110] w-full' : 'sticky top-0 z-[100]',
          'transition-all duration-300',
          scrolled ? 'shadow-md' : '',
        )}
      >
        <div className="bg-primary-dark text-accent-light text-[11px] hidden md:block">
          <div className="max-w-container mx-auto px-6 py-1.5 flex min-w-0 items-center justify-between gap-4 font-mono">
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex shrink-0 items-center gap-1.5 hover:text-accent"
              >
                <Phone size={11} /> {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                title={SITE_CONFIG.email}
                className="hidden min-w-0 items-center gap-1.5 hover:text-accent sm:flex"
              >
                <Mail size={11} className="shrink-0" />
                <span className="min-w-0 truncate">{SITE_CONFIG.email}</span>
              </a>
            </div>
            <div className="hidden shrink-0 uppercase tracking-wider sm:block">
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
          <div className="max-w-container mx-auto px-4 lg:px-6 py-3 flex items-center justify-between gap-3 lg:grid lg:grid-cols-[1fr_auto_1fr]">
            <NavLinks links={PRIMARY_LINKS_LEFT} align="left" />

            <Logo />

            <div className="flex items-center justify-end gap-4 lg:gap-6">
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
              <button
                type="button"
                className="lg:hidden p-2 -mr-2 text-primary"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <HamburgerMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        topOffset={headerHeight}
      />
    </>
  );
}
