import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock, MapPin, Package, Phone, Store } from 'lucide-react';
import Images from '../Images';
import WhatsAppQuoteForm from './WhatsAppQuoteForm';
import { CTA, SITE } from '../data/site';

const FACTS = [
  { icon: MapPin, text: 'Pickup from your area' },
  { icon: Store, text: `Drop off at the ${SITE.city} outlet` },
  { icon: Package, text: 'Price confirmed before booking' },
];

const STEPS = [
  {
    title: 'Send the route and parcel size',
    body: 'Pickup area, destination, and approximate size on WhatsApp.',
  },
  {
    title: 'We confirm coverage and price',
    body: 'Nothing is booked until you accept the quotation.',
  },
  {
    title: 'Pickup or drop off, then confirmation',
    body: 'You receive confirmation when the parcel is delivered.',
  },
];

const fadeUp = (reduceMotion, delay) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion ? { duration: 0 } : { duration: 0.45, delay, ease: 'easeOut' },
});

function LocalHeroFallback() {
  return (
    <div
      className="relative aspect-[8/5] overflow-hidden bg-brand_cream"
      role="img"
      aria-label="Illustration coming soon: a rider collecting a sealed parcel from an Accra shop doorway."
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand_cream via-white to-brand_teal/20" />
      <div className="absolute bottom-0 left-[8%] h-[74%] w-[36%] rounded-t-lg bg-brand_navy" />
      <div className="absolute bottom-[52%] left-[8%] h-9 w-[36%] bg-brand_orange" />
      <div className="absolute bottom-[16%] left-[14%] h-[22%] w-[12%] bg-white" />
      <div className="absolute bottom-[14%] left-[40%] h-11 w-16 rounded-sm bg-brand_orange" />
      <div className="absolute bottom-[10%] right-[14%] h-[48%] w-[20%] rounded-t-[2.5rem] bg-brand_teal" />
      <div className="absolute bottom-[8%] right-[10%] h-4 w-16 rounded-full bg-brand_navy/25" />
    </div>
  );
}

function LocalHeroArt() {
  const [failed, setFailed] = useState(false);

  if (failed) return <LocalHeroFallback />;

  return (
    <img
      src={Images.localDeliveryHero}
      alt="A rider collecting a sealed parcel from a neighbourhood shop doorway in Accra."
      width={1600}
      height={1000}
      className="aspect-[8/5] w-full object-cover object-center"
      onError={() => setFailed(true)}
    />
  );
}

function QuotePanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand_teal/20 bg-white shadow-sm">
      <figure className="border-b border-brand_teal/15 bg-brand_cream">
        <LocalHeroArt />
      </figure>
      <WhatsAppQuoteForm
        className="rounded-none border-0 shadow-none"
        title="Request a local quote"
        intro="We confirm availability and price on WhatsApp before you book."
        submitLabel="Send details on WhatsApp"
        fields={[
          {
            name: 'pickup',
            label: 'Pickup area',
            placeholder: 'Neighbourhood or landmark',
            max: 80,
            half: true,
          },
          {
            name: 'destination',
            label: 'Destination',
            placeholder: 'Delivery area',
            max: 80,
            half: true,
          },
          {
            name: 'parcel',
            label: 'Parcel type and approximate size',
            placeholder: 'Documents, small box…',
            max: 160,
          },
          {
            name: 'time',
            label: 'Preferred pickup time',
            placeholder: 'e.g. today after 2pm',
            max: 80,
          },
        ]}
        buildMessage={(v) =>
          `Hello, I need a local delivery quote.\nPickup area: ${v.pickup}\nDelivery area: ${v.destination}\nParcel type and approximate size: ${v.parcel}\nPreferred pickup time: ${v.time}`
        }
      />
    </div>
  );
}

function HeroFacts({ reduceMotion }) {
  return (
    <motion.ul {...fadeUp(reduceMotion, 0.2)} className="mt-8 grid gap-3 sm:grid-cols-3">
      {FACTS.map(({ icon: Icon, text }) => (
        <li
          key={text}
          className="flex items-start gap-3 rounded-xl border border-brand_teal/20 bg-white px-4 py-3"
        >
          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand_teal" aria-hidden="true" />
          <span className="text-sm font-semibold text-brand_navy">{text}</span>
        </li>
      ))}
    </motion.ul>
  );
}

function HeroSteps({ reduceMotion }) {
  return (
    <motion.ol {...fadeUp(reduceMotion, 0.26)} className="mt-8 space-y-4">
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
    </motion.ol>
  );
}

function HeroCopy({ reduceMotion }) {
  return (
    <div>
      <motion.p
        {...fadeUp(reduceMotion, 0)}
        className="text-sm font-semibold uppercase tracking-wider text-brand_teal"
      >
        Local delivery · {SITE.city}
      </motion.p>
      <motion.h1
        {...fadeUp(reduceMotion, 0.08)}
        className="mt-3 text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]"
      >
        Courier service and parcel pickup in {SITE.area}.
      </motion.h1>
      <motion.p
        {...fadeUp(reduceMotion, 0.16)}
        className="mt-5 max-w-xl text-lg leading-relaxed text-slate_grey"
      >
        Request pickup or bring the parcel to our {SITE.city} service point. We confirm the price,
        timing and whether we can cover the route before anything is booked.
      </motion.p>
      <HeroFacts reduceMotion={reduceMotion} />
      <HeroSteps reduceMotion={reduceMotion} />
      <motion.div {...fadeUp(reduceMotion, 0.32)} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={`tel:${SITE.phoneTel}`} className={CTA.ghost}>
          <Phone className="h-4 w-4 text-brand_teal" aria-hidden="true" />
          Call {SITE.phoneDisplay}
        </a>
        <Link to="/service-area" className={CTA.ghost}>
          <MapPin className="h-4 w-4 text-brand_teal" aria-hidden="true" />
          Coverage and pricing
        </Link>
      </motion.div>
    </div>
  );
}

const LocalDeliveryHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand_cream/80 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
          <motion.div {...fadeUp(reduceMotion, 0)} className="lg:col-span-7">
            <HeroCopy reduceMotion={reduceMotion} />
          </motion.div>
          <motion.div
            {...fadeUp(reduceMotion, 0.12)}
            className="lg:sticky lg:top-20 lg:col-span-5"
            id="quote"
          >
            <QuotePanel />
          </motion.div>
        </div>
      </div>
      <div className="bg-brand_navy">
        <div className="mx-auto flex max-w-8xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
          <Clock className="hidden h-4 w-4 text-brand_cyan sm:block" aria-hidden="true" />
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white">
            {[
              SITE.addressDisplay,
              SITE.hoursWeekday,
              'Quotation before confirmation',
              'Pickup or drop off',
            ].map((item, index) => (
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
    </header>
  );
};

export default LocalDeliveryHero;
