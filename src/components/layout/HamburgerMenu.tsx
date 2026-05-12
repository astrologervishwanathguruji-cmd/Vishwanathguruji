'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ALL_NAV_LINKS } from '@/constants/navLinks';
import { SERVICES } from '@/constants/services';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  /** Pixels from top of viewport — overlay & drawer start below the sticky header */
  topOffset: number;
}

const panelTransition = { duration: 0.3, ease: [0.32, 0.72, 0, 1] as const };

export default function HamburgerMenu({ isOpen, onClose, topOffset }: HamburgerMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const top = Math.max(0, topOffset);

  useEffect(() => {
    if (!isOpen) setServicesOpen(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    const { body } = document;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.paddingRight = prevBodyPaddingRight;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 bottom-0 z-[90] bg-black/40"
            style={{ top }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={panelTransition}
            className="fixed right-0 bottom-0 z-[90] flex w-[85vw] max-w-[320px] flex-col bg-primary shadow-2xl"
            style={{ top }}
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
              }}
              className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden px-4 py-4 pb-8"
            >
              {ALL_NAV_LINKS.map((link) => {
                if (link.children) {
                  return (
                    <motion.li
                      key={link.label}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="border-b border-primary-light/40"
                    >
                      <button
                        type="button"
                        onClick={() => setServicesOpen((s) => !s)}
                        className="flex w-full items-center justify-between py-3 font-display text-lg text-site-white"
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={`text-accent transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3 pb-3"
                          >
                            {SERVICES.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  onClick={onClose}
                                  className="block py-2 text-sm text-site-white/80 hover:text-accent"
                                >
                                  {s.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                }
                return (
                  <motion.li
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="border-b border-primary-light/40"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-3 font-display text-lg text-site-white transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
