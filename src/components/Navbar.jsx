import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Images from '../Images';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Tracking', path: '/#tracking' },
  { label: 'Courier Services', path: '/#courier-services' },
  { label: 'Banking Services', path: '/#banking-services' },
  { label: 'About', path: '/#about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActiveLink = (path) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    if (path === '/contact') return location.pathname === '/contact';
    const hash = path.startsWith('/#') ? path.slice(2) : null;
    return hash ? location.pathname === '/' && location.hash === `#${hash}` : false;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="sticky top-0 z-50 w-full"
      >
        {/* Navy + golden accents when not scrolled; white bar + navy text on scroll */}
        <nav className={`relative px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-xl border-b border-brand_gold/20 shadow-lg shadow-brand_orange/10'
            : 'bg-gradient-to-r from-brand_navy via-brand_navy/95 to-brand_navy/90 border-b border-brand_gold/30'
        }`}>
          <div className="mx-auto flex max-w-7xl items-center justify-between py-4 md:py-5">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="relative"
              >
                <img 
                  src={Images.logo} 
                  alt="Delivery On Demand" 
                  className="h-10 w-auto sm:h-12 object-contain transition-all duration-300"
                />
              </motion.div>
            </Link>

            {/* Desktop nav links */}
            <motion.div 
              className="hidden items-center gap-2 lg:flex"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {NAV_LINKS.map(({ label, path }, index) => (
                <Link key={path} to={path}>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="relative px-4 py-2.5 group"
                  >
                    <span className={`relative z-10 text-sm font-semibold transition-all duration-200 ${
                      scrolled || mobileMenuOpen
                        ? isActiveLink(path)
                          ? 'text-brand_navy'
                          : 'text-slate-600 hover:text-brand_orange'
                        : isActiveLink(path)
                          ? 'text-brand_gold'
                          : 'text-brand_cream hover:text-brand_gold'
                    }`}>
                      {label}
                    </span>
                    
                    {/* Active indicator with glow */}
                    {isActiveLink(path) && (
                      <>
                        <motion.div
                          layoutId="activeLink"
                          className={`absolute inset-0 -z-10 rounded-xl backdrop-blur-sm transition-colors ${
                            scrolled || mobileMenuOpen
                              ? 'bg-brand_gold/10 border border-brand_orange/30'
                              : 'bg-brand_gold/20 border border-brand_gold/40'
                          }`}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                        {!(scrolled || mobileMenuOpen) && (
                          <motion.div
                            className="absolute inset-0 -z-20 rounded-xl bg-gradient-to-r from-brand_orange/20 to-brand_gold/20 blur-lg"
                            animate={{ opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </>
                    )}
                    
                    {/* Hover effect */}
                    {!isActiveLink(path) && (
                      <motion.div
                        className={`absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-all ${
                          scrolled || mobileMenuOpen ? 'bg-slate-100' : 'bg-white/5'
                        }`}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Animated Hamburger button */}
            <motion.button
              type="button"
              className={`relative z-10 inline-flex items-center justify-center rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-brand_gold/50 lg:hidden backdrop-blur-sm transition-colors ${
                scrolled || mobileMenuOpen
                  ? 'text-brand_navy bg-brand_gold/10 hover:bg-brand_gold/20 border border-brand_gold/30'
                  : 'text-brand_gold bg-white/5 hover:bg-white/10 border border-brand_gold/20'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile menu with animations */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden lg:hidden"
              >
                <motion.div 
                  className={`border-t py-4 transition-colors ${
                    scrolled || mobileMenuOpen
                      ? 'border-brand_gold/20 bg-brand_cream/30'
                      : 'border-brand_gold/10 bg-gradient-to-b from-transparent to-black/10'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex flex-col gap-2">
                    {NAV_LINKS.map(({ label, path }, index) => (
                      <Link key={path} to={path}>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.05 * index,
                            type: 'spring',
                            stiffness: 100
                          }}
                          whileHover={{ x: 6 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative overflow-hidden rounded-xl px-5 py-3.5 transition-all ${
                            scrolled || mobileMenuOpen
                              ? isActiveLink(path)
                                ? 'bg-brand_gold/15 border border-brand_orange/30'
                                : 'hover:bg-brand_cream/50'
                              : isActiveLink(path)
                                ? 'bg-brand_gold/20 border border-brand_gold/40'
                                : 'hover:bg-white/5'
                          }`}
                        >
                          <span className={`block text-base font-semibold ${
                            scrolled || mobileMenuOpen
                              ? isActiveLink(path)
                                ? 'text-brand_navy'
                                : 'text-slate-600'
                              : isActiveLink(path)
                                ? 'text-brand_gold'
                                : 'text-brand_cream'
                          }`}>
                            {label}
                          </span>
                          
                          {/* Mobile active indicator */}
                          {isActiveLink(path) && (
                            <motion.div
                              layoutId="mobileActiveLink"
                              className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand_orange to-brand_gold rounded-r"
                              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gradient-to-b from-brand_navy/90 to-black/90 backdrop-blur-md lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
