import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import Images from '../Images';
import { CTA, MESSAGES, NAV_LINKS, SITE, whatsappHref } from '../data/site';

const CONTACT_PATH = '/contact';

const isActiveLink = (path, location) => location.pathname === path;

const linkClass = (active) =>
  `relative cursor-pointer rounded-md px-3 py-1.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan ${
    active ? 'text-brand_navy' : 'text-slate_grey hover:text-brand_navy'
  }`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);
  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 380, damping: 32 };

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <nav
          className={`h-14 border-b bg-white transition-shadow duration-200 ${
            scrolled ? 'border-brand_teal/20 shadow-sm' : 'border-brand_teal/15'
          }`}
          aria-label="Primary"
        >
          <div className="mx-auto flex h-full max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="relative z-10 flex h-full items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
              onClick={closeMenu}
            >
              <img
                src={Images.logo}
                alt="Delivery on Demand"
                className="h-12 w-auto max-h-full object-contain"
              />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map(({ label, path }) => {
                const active = isActiveLink(path, location);
                return (
                  <Link key={path} to={path} className={linkClass(active)}>
                    {label}
                    {active && (
                      <motion.span
                        layoutId={reduceMotion ? undefined : 'nav-underline'}
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand_orange"
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                to={CONTACT_PATH}
                className="ml-3 inline-flex h-9 cursor-pointer items-center rounded-lg bg-brand_orange px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand_orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
              >
                Contact
              </Link>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-brand_navy transition-colors duration-200 hover:bg-brand_cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan lg:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="fixed inset-x-0 bottom-0 top-14 z-40 bg-brand_navy/40 lg:hidden"
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: reduceMotion ? 0 : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: reduceMotion ? 0 : '100%' }}
              transition={panelTransition}
              className="fixed bottom-0 right-0 top-14 z-40 flex w-full max-w-sm flex-col overflow-y-auto overscroll-contain bg-white shadow-xl lg:hidden"
            >
              <div className="flex flex-1 flex-col px-4 py-4">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map(({ label, path }) => {
                    const active = isActiveLink(path, location);
                    return (
                      <Link
                        key={path}
                        to={path}
                        onClick={closeMenu}
                        className={`flex min-h-11 cursor-pointer items-center rounded-lg px-4 text-base font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan ${
                          active
                            ? 'bg-brand_cream text-brand_navy'
                            : 'text-slate_grey hover:bg-brand_cream/70 hover:text-brand_navy'
                        }`}
                      >
                        {active && (
                          <span className="mr-3 h-5 w-1 rounded-full bg-brand_orange" />
                        )}
                        {label}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-auto space-y-3 border-t border-brand_teal/15 pt-5">
                  <a
                    href={whatsappHref(MESSAGES.today)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={CTA.primary + ' w-full'}
                    onClick={closeMenu}
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Get a WhatsApp quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <Link
                    to={CONTACT_PATH}
                    onClick={closeMenu}
                    className={CTA.secondary + ' w-full'}
                  >
                    Contact and location
                  </Link>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold text-brand_navy transition-colors duration-200 hover:bg-brand_cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
                  >
                    <Phone className="h-4 w-4 text-brand_teal" aria-hidden="true" />
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
