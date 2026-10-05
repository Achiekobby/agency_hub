import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Images from '../Images';
import { SITE } from '../data/site';

const SERVICES = [
  {
    index: '01',
    title: 'Local delivery',
    body: `Pickup from your area, or drop the parcel at the ${SITE.city} service point. Price, timing and coverage are confirmed before you book.`,
    cta: 'Local delivery',
    to: '/local-delivery',
    image: Images.serviceLocal,
    alt: 'A local Accra parcel pickup at a neighbourhood service point.',
    fallback: 'local',
  },
  {
    index: '02',
    title: 'Business delivery',
    body: 'Recurring pickups for online orders and customer deliveries. The rate sheet follows the areas you actually use.',
    cta: 'Business rate sheets',
    to: '/business-delivery',
    image: Images.serviceBusiness,
    alt: 'Labelled parcels on a shop counter, ready for a scheduled pickup.',
    fallback: 'business',
  },
  {
    index: '03',
    title: 'International shipping',
    body: 'Help preparing an eligible shipment through an approved carrier channel. Who issues the waybill is confirmed before you send.',
    cta: 'International shipping',
    to: '/international-shipping',
    image: Images.serviceInternational,
    alt: 'Documents and a sealed parcel prepared for an international shipment, with no carrier branding.',
    fallback: 'international',
  },
];

function ArtFallback({ type }) {
  const scenes = {
    local: (
      <>
        <div className="absolute inset-0 bg-brand_cream" />
        <div className="absolute bottom-[18%] left-[18%] h-16 w-24 rounded-sm bg-brand_orange" />
        <div className="absolute bottom-0 left-[12%] h-[55%] w-[30%] rounded-t-lg bg-brand_navy" />
      </>
    ),
    business: (
      <>
        <div className="absolute inset-0 bg-brand_cream" />
        <div className="absolute left-[22%] top-[28%] h-24 w-16 bg-brand_navy" />
        <div className="absolute left-[38%] top-[34%] h-24 w-16 bg-brand_orange" />
      </>
    ),
    international: (
      <>
        <div className="absolute inset-0 bg-brand_navy" />
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-brand_cyan/70" />
      </>
    ),
  };

  return (
    <div className="absolute inset-0" aria-hidden="true">
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
      className="aspect-[4/3] w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
      onError={() => setFailed(true)}
    />
  );
}

const CourierServicesSection = () => (
  <section id="courier-services" className="bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">Delivery</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
          Parcel pickup and delivery.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate_grey">
          Three ways to send. Each one is quoted before you book, with coverage confirmed for that
          route.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.index}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand_teal/20 bg-white transition-colors duration-200 hover:bg-brand_cream/70"
            >
              <div className="p-3 pb-0">
                <div className="overflow-hidden rounded-xl">
                  <ServiceArt src={service.image} alt={service.alt} fallback={service.fallback} />
                </div>
              </div>
              <div className="flex flex-1 flex-col px-5 py-6 sm:px-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-brand_teal">{service.index}</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-brand_navy transition-colors duration-200 group-hover:text-brand_teal">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate_grey">{service.body}</p>
                <Link
                  to={service.to}
                  className="mt-5 inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 text-sm font-semibold text-brand_navy transition-colors duration-200 hover:text-brand_teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
      </div>
    </div>
  </section>
);

export default CourierServicesSection;
