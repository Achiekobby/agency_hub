import React from 'react';
import { Link } from 'react-router';
import {
  Phone,
  Mail,
  MapPin,
  Package,
  Building2,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

const FOOTER_LINKS = {
  services: [
    { label: 'Tracking', path: '/#tracking' },
    { label: 'Courier Services', path: '/#courier-services' },
    { label: 'Banking Services', path: '/#banking-services' },
  ],
  company: [
    { label: 'About Us', path: '/#about' },
    { label: 'Contact', path: '/contact' },
  ],
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate_grey-900/10 bg-prussian_blue">
      {/* Top gradient accent */}
      <div className="h-1 w-full bg-gradient-to-r from-smart_blue via-sapphire to-regal_navy" />

      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Brand + contact */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-white">AgencyHub GH</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Your trusted partner for logistics and banking in Ghana. Certified DHL & FedEx agent
              and authorized banking partner.
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="tel:+233123456789"
                  className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  +233 123 456 789
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@agencyhubgh.com"
                  className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <Mail className="h-4 w-4" />
                  </span>
                  info@agencyhubgh.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Accra+Greater+Accra+Ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <MapPin className="h-4 w-4" />
                  </span>
                  Accra, Greater Accra
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-smart_blue-700" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Services
              </h3>
            </div>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.services.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-sapphire-700" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Company
              </h3>
            </div>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.company.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-regal_navy-700" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Get in touch
              </h3>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Have questions? We're here to help.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-smart_blue-700 transition-colors hover:text-smart_blue-600"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} AgencyHub GH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-xs text-white/50 hover:text-white/70">
              Home
            </Link>
            <Link to="/contact" className="text-xs text-white/50 hover:text-white/70">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
