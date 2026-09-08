import React from 'react';
import { Link } from 'react-router';
import { Clock, MapPin, MessageCircle, Package, Route } from 'lucide-react';
import WhatsAppQuoteForm from './WhatsAppQuoteForm';
import RelatedFaqs from './RelatedFaqs';
import { CTA, SITE } from '../data/site';

const BOARD = [
  {
    label: 'Outlet location',
    value: SITE.addressDisplay,
    note: 'Street-level pin is shared when you request directions. We do not invent an address.',
  },
  {
    label: 'Primary service radius',
    value: 'Confirmed on each quote',
    note: 'A mapped radius will be published when it is operationally true.',
  },
  {
    label: 'Named neighbourhoods',
    value: 'None listed yet',
    note: 'Names appear only when we regularly pick up or deliver there.',
  },
  {
    label: 'Same-day zones',
    value: 'Quoted only where supported that day',
    note: 'Same-day is not advertised as a default product.',
  },
  {
    label: 'Intercity options',
    value: 'Special quotation',
    note: 'Price, handover and timing are confirmed before booking.',
  },
  {
    label: 'Daily cut-off',
    value: 'Confirmed with today’s quote',
    note: `${SITE.hoursWeekday}. ${SITE.hoursSaturday}.`,
  },
  {
    label: 'Special quotation',
    value: 'Outside confirmed local coverage',
    note: 'New neighbourhoods, bulky items and intercity jobs.',
  },
];

const PRICE_FACTORS = [
  { n: '01', label: 'Pickup area' },
  { n: '02', label: 'Destination' },
  { n: '03', label: 'Parcel type and size' },
  { n: '04', label: 'Service window' },
];

function CoverageBoard() {
  return (
    <section id="coverage-board" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
            Coverage board
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
            What we will stand behind.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate_grey">
            This is an Accra outlet, not a nationwide network. Empty neighbourhood rows are
            intentional.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-brand_teal/20">
          <div className="flex items-center gap-3 border-b border-brand_teal/20 bg-brand_navy px-5 py-3 sm:px-6">
            <MapPin className="h-4 w-4 text-brand_cyan" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Accra service point · live board
            </span>
          </div>
          <dl>
            {BOARD.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 border-b border-brand_teal/15 px-5 py-5 last:border-b-0 sm:grid-cols-12 sm:gap-8 sm:px-6"
              >
                <dt className="text-sm font-semibold text-brand_teal sm:col-span-4">{row.label}</dt>
                <dd className="sm:col-span-8">
                  <p className="font-semibold text-brand_navy">{row.value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate_grey">{row.note}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function PriceAndHours() {
  return (
    <section className="bg-brand_cream/50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-8xl gap-5 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <article className="rounded-2xl border border-brand_teal/20 bg-white p-6 sm:p-8 lg:col-span-7">
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-brand_teal" aria-hidden="true" />
            <h2 className="text-lg font-bold text-brand_navy">How price is calculated</h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate_grey">
            You receive a quotation before confirmation. The quote states inclusions, redelivery,
            failed-delivery rules, liability limits, expiry, and how you accept (reply BOOK).
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {PRICE_FACTORS.map((item) => (
              <li
                key={item.n}
                className="rounded-xl border border-brand_teal/20 bg-brand_cream/50 px-4 py-4"
              >
                <p className="text-xs font-semibold tracking-wider text-brand_teal">{item.n}</p>
                <p className="mt-2 text-sm font-semibold text-brand_navy">{item.label}</p>
              </li>
            ))}
          </ol>
        </article>
        <article className="rounded-2xl bg-brand_navy p-6 text-white sm:p-8 lg:col-span-5">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand_cyan" aria-hidden="true" />
            <h2 className="text-lg font-bold">Hours and cut-off</h2>
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-white/70">Monday–Friday</span>
              <span className="font-semibold">8:00 AM – 6:00 PM</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-white/70">Saturday</span>
              <span className="font-semibold">9:00 AM – 2:00 PM</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-white/70">Sunday</span>
              <span className="font-semibold">Closed</span>
            </li>
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            Today’s booking cut-off is confirmed with your quote. It depends on remaining capacity
            and the destination.
          </p>
        </article>
      </div>
    </section>
  );
}

function AreaForm() {
  return (
    <section id="ask-area" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-8xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
            Check a route
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy">
            Ask if we cover your area.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate_grey">
            Send pickup and destination. We confirm whether we can fulfil the job that day, then
            the price, before you book.
          </p>
          <Link to="/local-delivery" className={`${CTA.ghost} mt-6`}>
            <Route className="h-4 w-4" aria-hidden="true" />
            Local delivery
          </Link>
        </div>
        <div className="lg:col-span-7">
          <WhatsAppQuoteForm
            intro="No Ghana Card. No nationwide coverage claim."
            submitLabel="Ask on WhatsApp"
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
            ]}
            buildMessage={(v) =>
              `Hello, I need a local delivery quote.\nPickup area: ${v.pickup}\nDelivery area: ${v.destination}\nParcel type and approximate size: ${v.parcel}`
            }
          />
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="bg-brand_navy py-14 sm:py-16">
      <div className="mx-auto flex max-w-8xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Pickup and destination ready?
          </h2>
          <p className="mt-2 max-w-xl text-white/75">
            We confirm the area before you book. There is no nationwide map on this site.
          </p>
        </div>
        <a href="#ask-area" className={CTA.primary}>
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Ask if we cover your area
        </a>
      </div>
    </section>
  );
}

const ServiceAreaDetails = () => (
  <>
    <CoverageBoard />
    <PriceAndHours />
    <AreaForm />
    <div className="bg-brand_cream/50">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
        <RelatedFaqs ids={['areas', 'price', 'cutoff']} />
      </div>
    </div>
    <ClosingCta />
  </>
);

export default ServiceAreaDetails;
