import React from 'react';
import { Link } from 'react-router';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CTA, MESSAGES, NAV_LINKS, POLICY_LINKS, SITE, whatsappHref } from '../data/site';

const Footer = () => (
  <footer className="border-t border-brand_teal/20 bg-brand_navy">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link to="/" className="text-xl font-bold text-white">
            {SITE.name}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            Local parcel pickup and delivery in {SITE.city} for online sellers and SMEs.
            International shipping assistance and outlet banking are described only where they can
            be verified.
          </p>
          <ul className="mt-6 space-y-3">
            <li>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex min-h-11 cursor-pointer items-center gap-3 text-sm text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex min-h-11 cursor-pointer items-center gap-3 text-sm text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 cursor-pointer items-center gap-3 text-sm text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                {SITE.addressDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand_cyan">Services</h2>
          <ul className="mt-4 space-y-1">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="inline-flex min-h-11 cursor-pointer items-center text-sm text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand_cyan">Policies</h2>
          <ul className="mt-4 space-y-1">
            {POLICY_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="inline-flex min-h-11 cursor-pointer items-center text-sm text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="inline-flex min-h-11 cursor-pointer items-center text-sm text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
              >
                Contact and location
              </Link>
            </li>
          </ul>
          <a
            href={whatsappHref(MESSAGES.today)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${CTA.primary} mt-6`}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Get a WhatsApp quote
          </a>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} {SITE.name}. Not a bank. Carrier brands are shown only with
          written authorisation.
        </p>
        <p className="text-xs text-white/50">
          {SITE.hoursWeekday}. {SITE.hoursSaturday}.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
