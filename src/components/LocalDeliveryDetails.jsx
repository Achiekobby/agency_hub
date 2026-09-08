import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Clock, MapPin, Package, Route, Scale } from 'lucide-react';
import Images from '../Images';
import RelatedFaqs from './RelatedFaqs';
import { CTA, SITE } from '../data/site';

const COVERAGE = [
  {
    label: 'Outlet',
    value: SITE.addressDisplay,
    note: 'Street-level pin is shared when you ask for directions.',
  },
  {
    label: 'Neighbourhoods',
    value: 'Only areas we regularly serve',
    note: 'We do not list towns for marketing. Ask if your area is covered.',
  },
  {
    label: 'Same-day',
    value: 'Quoted only where we can support it that day',
    note: 'Not a default product.',
  },
  {
    label: 'Intercity',
    value: 'Special quotation',
    note: 'Handover and timing are confirmed before booking.',
  },
];

const PRICE_FACTORS = [
  { n: '01', label: 'Pickup area', icon: MapPin },
  { n: '02', label: 'Destination', icon: Route },
  { n: '03', label: 'Parcel type and size', icon: Package },
  { n: '04', label: 'Service window', icon: Clock },
];

const HOURS = [
  { day: 'Monday–Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

function OpsArtFallback() {
  return (
    <div
      className="relative aspect-[8/5] overflow-hidden bg-brand_cream"
      role="img"
      aria-label="Illustration coming soon: Accra outlet facade with opening hours on a simple board."
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand_cream via-white to-brand_teal/20" />
      <div className="absolute bottom-0 left-[12%] h-[70%] w-[42%] rounded-t-md bg-brand_navy" />
      <div className="absolute bottom-[48%] left-[12%] h-8 w-[42%] bg-brand_orange" />
      <div className="absolute right-[12%] top-[18%] h-[46%] w-[28%] rounded-lg bg-white shadow-sm" />
      <div className="absolute right-[16%] top-[28%] h-2 w-[20%] bg-brand_teal" />
      <div className="absolute right-[16%] top-[38%] h-2 w-[16%] bg-brand_navy/30" />
      <div className="absolute right-[16%] top-[48%] h-2 w-[18%] bg-brand_navy/20" />
    </div>
  );
}

function OpsArt() {
  const [failed, setFailed] = useState(false);

  if (failed) return <OpsArtFallback />;

  return (
    <img
      src={Images.localDeliveryOps}
      alt="Accra service-point facade with a simple hours board beside the doorway."
      width={1200}
      height={750}
      className="aspect-[8/5] w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

function CoverageCard() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand_teal/20 bg-white">
      <div className="flex items-center gap-3 border-b border-brand_teal/15 bg-brand_cream/70 px-5 py-4 sm:px-6">
        <MapPin className="h-4 w-4 text-brand_teal" aria-hidden="true" />
        <div>
          <h3 className="text-lg font-bold text-brand_navy">Location and coverage</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand_teal">
            Accra service point
          </p>
        </div>
      </div>
      <p className="border-b border-brand_teal/15 px-5 py-4 text-sm leading-relaxed text-slate_grey sm:px-6">
        We deliver where we can fulfil the job that day. There is no nationwide map on this page.
      </p>
      <dl>
        {COVERAGE.map((row) => (
          <div
            key={row.label}
            className="grid gap-1 border-b border-brand_teal/15 px-5 py-4 last:border-b-0 sm:grid-cols-3 sm:gap-6 sm:px-6"
          >
            <dt className="text-sm font-semibold text-brand_teal">{row.label}</dt>
            <dd className="sm:col-span-2">
              <p className="font-semibold text-brand_navy">{row.value}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate_grey">{row.note}</p>
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function HoursCard() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand_teal/20 bg-brand_navy">
      <figure className="border-b border-white/10">
        <OpsArt />
      </figure>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-brand_cyan" aria-hidden="true" />
          <h3 className="text-lg font-bold text-white">Hours and cut-off</h3>
        </div>
        <ul className="mt-5 space-y-3">
          {HOURS.map((row) => (
            <li
              key={row.day}
              className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3 text-sm last:border-b-0"
            >
              <span className="text-white/70">{row.day}</span>
              <span className="font-semibold text-white">{row.time}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-relaxed text-white/75">
          Today’s booking cut-off is confirmed with your quote. It depends on remaining capacity
          and the destination.
        </p>
      </div>
    </article>
  );
}

function PriceCard() {
  return (
    <article className="rounded-2xl border border-brand_teal/20 bg-white p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <Scale className="h-4 w-4 text-brand_teal" aria-hidden="true" />
        <h3 className="text-lg font-bold text-brand_navy">How price is calculated</h3>
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate_grey">
        You receive a quotation before anything is booked. We do not publish a fake national
        tariff.
      </p>
      <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PRICE_FACTORS.map(({ n, label, icon: Icon }) => (
          <li
            key={label}
            className="rounded-xl border border-brand_teal/20 bg-brand_cream/50 px-4 py-4"
          >
            <p className="text-xs font-semibold tracking-wider text-brand_teal">{n}</p>
            <Icon className="mt-3 h-4 w-4 text-brand_navy" aria-hidden="true" />
            <p className="mt-2 text-sm font-semibold text-brand_navy">{label}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 rounded-xl bg-brand_cream/70 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand_teal">
          On the quotation
        </p>
        <p className="mt-2 text-sm leading-relaxed text-brand_navy">
          Inclusions, any redelivery charge, the estimated window, quote expiry, and how you
          accept: reply <span className="font-bold">BOOK</span> on WhatsApp.
        </p>
      </div>
    </article>
  );
}

const LocalDeliveryDetails = () => (
  <div className="bg-brand_cream/50 py-16 sm:py-20">
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      <section>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
            Before you book
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
            Coverage, price and hours — written plainly.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate_grey">
            This is an Accra outlet. Named neighbourhoods and a mapped radius appear only when they
            are operationally true.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <CoverageCard />
          </div>
          <div className="lg:col-span-5">
            <HoursCard />
          </div>
          <div className="lg:col-span-12">
            <PriceCard />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#quote" className={CTA.primary}>
            Request a quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link to="/service-area" className={CTA.secondary}>
            Coverage and pricing
          </Link>
          <Link to="/contact" className={CTA.ghost}>
            Contact and location
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <RelatedFaqs ids={['areas', 'price', 'cutoff', 'confirmation']} />
    </div>
  </div>
);

export default LocalDeliveryDetails;
