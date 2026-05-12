'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronDown, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { ALL_NAV_LINKS } from '@/constants/navLinks';
import { SERVICES } from '@/constants/services';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const panelTransition = { duration: 0.3, ease: [0.32, 0.72, 0, 1] as const };

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={panelTransition}
            className="fixed right-0 top-0 h-full w-[85vw] max-w-[320px] bg-primary z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-primary-light/40">
              <Link href="/" onClick={onClose} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent text-site-white flex items-center justify-center font-devanagari">
                  ॐ
                </div>
                <span className="font-display text-site-white font-semibold text-sm">
                  Sri Panchamukhi
                </span>
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="text-accent hover:text-accent-light p-1"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="flex-1 overflow-y-auto px-4 py-3"
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
                        className="w-full flex items-center justify-between py-3 text-site-white font-display text-lg"
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
                      className="block py-3 text-site-white font-display text-lg hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

            <div className="p-4 border-t border-primary-light/40 grid grid-cols-1 gap-2">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-site-white py-2.5 rounded-full font-semibold text-sm"
              >
                <FaWhatsapp size={18} /> WhatsApp
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 bg-accent text-site-white py-2.5 rounded-full font-semibold text-sm"
              >
                <Phone size={16} /> Call Guruji
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
