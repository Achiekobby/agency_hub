import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Images from '../Images';
import { SITE } from '../data/site';

const SERVICES = [
  {
    id: 'local',
    kicker: '01  Local',
    title: 'Send a parcel locally',
    body: `Request pickup or bring your parcel to our ${SITE.city} service point. We confirm the price, timing and service area before booking.`,
    cta: 'Local delivery in Accra',
    to: '/local-delivery',
    image: Images.serviceLocal,
    alt: 'Illustration of a local Accra parcel pickup at a neighbourhood service point.',
    accent: 'orange',
    fallback: 'local',
  },
  {
    id: 'business',
    kicker: '02  Business',
    title: 'Delivery for your business',
    body: 'Arrange recurring pickups for online orders, documents and customer deliveries. Request a rate sheet based on the areas you serve most often.',
    cta: 'Business rate sheets',
    to: '/business-delivery',
    image: Images.serviceBusiness,
    alt: 'Illustration of recurring business pickups with labelled parcels on a shop counter.',
    accent: 'orange',
    fallback: 'business',
  },
  {
    id: 'international',
    kicker: '03  International',
    title: 'Ship internationally',
    body: 'We help customers prepare and arrange eligible international shipments through approved carrier channels. Eligibility is checked before you send.',
    cta: 'International shipping',
    to: '/international-shipping',
    image: Images.serviceInternational,
    alt: 'Illustration of an international parcel being prepared with documents, with no carrier branding.',
    accent: 'navy',
    fallback: 'international',
  },
  {
    id: 'banking',
    kicker: '04  Banking',
    title: 'Agency banking',
    body: 'The principal, agent number and authorised transactions are published only when they can be verified. Call before travelling. We are not a bank.',
    cta: 'How to verify this outlet',
    to: '/agency-banking',
    image: Images.serviceBanking,
    alt: 'Illustration of a calm agency-banking counter with an identification check, no bank logos.',
    accent: 'teal',
    fallback: 'banking',
  },
];

const ctaClass = {
  orange:
    'bg-brand_orange text-white hover:bg-brand_orange-600',
  navy: 'bg-brand_navy text-white hover:bg-brand_navy-600',
  teal: 'bg-brand_teal text-white hover:bg-brand_teal-600',
};

function ArtFallback({ type }) {
  const scenes = {
    local: (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-brand_cream to-white" />
        <div className="absolute left-6 top-8 h-16 w-28 rounded-md bg-brand_orange" />
        <div className="absolute left-10 top-14 h-10 w-16 rounded-sm bg-brand_navy" />
        <div className="absolute bottom-8 right-8 h-20 w-24 rounded-lg bg-brand_teal/30" />
        <div className="absolute bottom-10 right-12 h-8 w-14 rounded-sm bg-white" />
      </>
    ),
    business: (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-white to-brand_cream" />
        <div className="absolute left-8 top-10 h-24 w-16 bg-brand_navy/90" />
        <div className="absolute left-14 top-14 h-24 w-16 bg-brand_orange" />
        <div className="absolute left-20 top-16 h-24 w-16 bg-brand_cyan/80" />
        <div className="absolute right-8 bottom-8 h-14 w-20 rounded-sm bg-brand_teal/25" />
      </>
    ),
    international: (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-brand_navy to-brand_navy-700" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-brand_cyan/70" />
        <div className="absolute right-10 top-10 h-3 w-20 rotate-12 bg-brand_orange" />
        <div className="absolute bottom-12 left-10 h-12 w-16 rounded-sm bg-white/15" />
      </>
    ),
    banking: (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-brand_cream to-brand_teal/15" />
        <div className="absolute inset-x-10 top-8 h-16 rounded-t-lg bg-brand_navy" />
        <div className="absolute inset-x-16 top-16 h-20 bg-white" />
        <div className="absolute bottom-8 left-10 h-10 w-16 rounded-sm bg-brand_teal" />
        <div className="absolute bottom-8 right-10 h-10 w-14 rounded-sm bg-brand_orange/80" />
      </>
    ),
  };

  return (
    <div className="relative aspect-[4/3] overflow-hidden" aria-hidden="true">
      {scenes[type]}
    </div>
  );
}

function ServiceArt({ src, alt, fallback }) {
  const [failed, setFailed] = useState(false);

  if (failed) return <ArtFallback type={fallback} />;

  return (
    <img
      src={src}
      alt={alt}
      width={1200}
      height={900}
      className="aspect-[4/3] w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

function ServiceCard({ service, index, reduceMotion }) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand_teal/20 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <ServiceArt src={service.image} alt={service.alt} fallback={service.fallback} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand_teal">
          {service.kicker}
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-brand_navy sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate_grey sm:text-base">
          {service.body}
        </p>
        <Link
          to={service.to}
          className={`mt-6 inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan focus-visible:ring-offset-2 ${ctaClass[service.accent]}`}
        >
          {service.cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}

const CourierServicesSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="courier-services" className="relative overflow-hidden bg-brand_cream/50 py-20 sm:py-24">
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
            Choose the job you need.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate_grey">
            Price and timing are confirmed before anything is booked. Carrier brands are shown only
            where we are authorised to display them.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourierServicesSection;
