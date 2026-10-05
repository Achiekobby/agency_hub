import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router';
import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import Images from '../Images';

const BUSINESS = {
  city: 'Accra',
  area: 'Accra',
  address: 'Accra, Greater Accra',
  hours: 'Mon–Fri 8:00 AM – 6:00 PM',
  phoneDisplay: '+233 123 456 789',
  phoneTel: '+233123456789',
  whatsapp: '233123456789',
  mapsUrl: 'https://maps.google.com/?q=Accra+Greater+Accra+Ghana',
};

const QUOTE_MESSAGE = `Hello, I need a delivery quote.
Pickup area:
Delivery area:
Parcel type and approximate size:
Preferred pickup time:`;

const quoteHref = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(QUOTE_MESSAGE)}`;

const TRUST_ITEMS = [
  BUSINESS.address,
  `Open ${BUSINESS.hours}`,
  'Quotation before you book',
  'Not a bank or EMI',
  'Principal named when verified',
];

const PATHS = [
  {
    kicker: 'Parcels',
    title: 'Pickup and delivery in Accra',
    body: 'Send the route and parcel size on WhatsApp. We confirm the price, then collect or take a drop-off at the service point.',
    rule: 'border-brand_orange',
  },
  {
    kicker: 'Agency banking',
    title: 'Networks beyond the branch',
    body: 'Support for institutions and prospective agents: onboarding, liquidity, compliance and performance. The regulated service stays with the principal.',
    rule: 'border-brand_teal',
  },
];

const fadeUp = (reduceMotion, delay) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion ? { duration: 0 } : { duration: 0.45, delay, ease: 'easeOut' },
});

const ctaBase =
  'inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan focus-visible:ring-offset-2';

function HeroPhotograph() {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="relative lg:sticky lg:top-20">
      <div className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-brand_cream md:-inset-4" />
      <div className="relative overflow-hidden rounded-2xl bg-brand_navy shadow-lg shadow-brand_navy/15">
        {failed ? (
          <div
            className="relative aspect-[5/4] md:aspect-[4/5]"
            role="img"
            aria-label="Illustration coming soon: one Accra counter handling a sealed parcel and an agency-banking transaction, with no bank logos."
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand_navy via-brand_navy-600 to-brand_teal-800" />
            <div className="absolute left-0 top-1/4 h-24 w-16 bg-brand_orange/80 md:h-32 md:w-20" />
            <div className="absolute left-0 top-[38%] h-16 w-12 bg-brand_orange/50 md:h-20 md:w-16" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white/10" />
            <div className="absolute right-6 top-8 h-2/5 w-1/3 rounded-sm bg-brand_cyan/25 md:right-10 md:top-12" />
          </div>
        ) : (
          <img
            src={Images.heroServicePoint}
            alt="One Accra service point: a sealed parcel handed across the counter, and a customer completing an agency-banking transaction beside it. No bank logos and no readable screen."
            width={1600}
            height={2000}
            className="aspect-[5/4] w-full object-cover object-[center_30%] md:aspect-[4/5]"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </figure>
  );
}

function TwoPaths() {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2">
      {PATHS.map((path) => (
        <div key={path.kicker} className={`border-t-2 pt-4 ${path.rule}`}>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand_teal">{path.kicker}</p>
          <h2 className="mt-2 text-base font-bold text-brand_navy">{path.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate_grey">{path.body}</p>
        </div>
      ))}
    </div>
  );
}

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand_cream/80 to-transparent" />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
          <div className="lg:col-span-7">
            <motion.p
              {...fadeUp(reduceMotion, 0)}
              className="text-sm font-semibold uppercase tracking-wider text-brand_teal"
            >
              {BUSINESS.city} · parcels and agency banking
            </motion.p>

            <motion.h1
              {...fadeUp(reduceMotion, 0.08)}
              className="mt-3 text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]"
            >
              Parcel delivery, and financial services closer to the customer.
            </motion.h1>

            <motion.p
              {...fadeUp(reduceMotion, 0.16)}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate_grey"
            >
              One {BUSINESS.area} service point for local pickup and delivery, and for agency-banking
              support. Institutions and prospective agents work with us on the network. Customers
              transact with the authorised principal. Delivery on Demand remains the operating partner.
            </motion.p>

            <motion.div {...fadeUp(reduceMotion, 0.22)}>
              <TwoPaths />
            </motion.div>

            <motion.div {...fadeUp(reduceMotion, 0.3)} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={quoteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaBase} bg-brand_orange text-white hover:bg-brand_orange-600`}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Get a delivery quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  to="/agency-banking"
                  className={`${ctaBase} border-2 border-brand_navy bg-white text-brand_navy hover:bg-brand_cream`}
                >
                  Agency banking
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-brand_navy transition-colors duration-200 hover:text-brand_teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
                >
                  <Phone className="h-4 w-4 text-brand_teal" aria-hidden="true" />
                  Call {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-brand_navy transition-colors duration-200 hover:text-brand_teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
                >
                  <MapPin className="h-4 w-4 text-brand_teal" aria-hidden="true" />
                  Directions
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp(reduceMotion, 0.12)} className="lg:col-span-5">
            <HeroPhotograph />
          </motion.div>
        </div>
      </div>

      <div className="bg-brand_navy">
        <div className="mx-auto flex max-w-8xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
          <Clock className="hidden h-4 w-4 text-brand_cyan sm:block" aria-hidden="true" />
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white">
            {TRUST_ITEMS.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 && (
                  <span className="text-brand_cyan/80" aria-hidden="true">
                    •
                  </span>
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
