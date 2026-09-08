import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
  'Quotation before confirmation',
  'Receipts issued',
  'Delivery confirmation available',
];

const STEPS = [
  {
    title: 'Send quote details on WhatsApp',
    body: 'Pickup area, delivery area, parcel size, and a preferred time.',
  },
  {
    title: 'Arrange pickup or drop off',
    body: `We confirm the quotation, then collect from you or you drop off at our ${BUSINESS.area} service point.`,
  },
  {
    title: 'Receive delivery confirmation',
    body: 'You get confirmation when the parcel is delivered, with a receipt issued.',
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
            aria-label="Service-point photograph coming soon: a staff member at the Accra counter receiving a parcel, late-afternoon light from the street."
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
            alt="Staff at the Accra service point receiving a parcel at the counter, with the street visible through the open doorway."
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

function ProcessSteps() {
  return (
    <div className="mt-8">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-brand_teal">
        How it works
      </h2>
      <ol className="mt-4 space-y-5">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <span
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand_orange text-sm font-bold text-white"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <div>
              <p className="font-semibold text-brand_navy">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate_grey">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
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
              Pickup & delivery
            </motion.p>

            <motion.h1
              {...fadeUp(reduceMotion, 0.08)}
              className="mt-3 text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]"
            >
              Book parcel pickup and delivery in {BUSINESS.city}.
            </motion.h1>

            <motion.p
              {...fadeUp(reduceMotion, 0.16)}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate_grey"
            >
              Get a clear quotation on WhatsApp, arrange pickup or drop off at our {BUSINESS.area}{' '}
              service point, and receive confirmation when your parcel is delivered. International
              shipping is arranged through approved carrier channels. Agency banking is named only
              when it can be verified.
            </motion.p>

            <motion.div {...fadeUp(reduceMotion, 0.22)}>
              <ProcessSteps />
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
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaBase} border-2 border-brand_navy bg-white text-brand_navy hover:bg-brand_cream`}
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Get directions
                </a>
              </div>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="mt-4 inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-brand_navy transition-colors duration-200 hover:text-brand_teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
              >
                <Phone className="h-4 w-4 text-brand_teal" aria-hidden="true" />
                Call: {BUSINESS.phoneDisplay}
              </a>
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
