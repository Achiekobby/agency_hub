import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Clock, MapPin, Route } from 'lucide-react';
import { CTA, SITE } from '../data/site';

const COVERAGE = [
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
    value: 'Only areas we regularly serve',
    note: 'Ask for your area. We will not list towns we do not actually cover.',
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
    label: 'Daily cut-off times',
    value: 'Confirmed with today’s quote',
    note: `${SITE.hoursWeekday}. ${SITE.hoursSaturday}.`,
  },
  {
    label: 'Special quotation areas',
    value: 'Outside confirmed local coverage',
    note: 'Includes new neighbourhoods, bulky items and intercity jobs.',
  },
];

const ServiceAreaSection = () => (
  <section id="coverage" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
          Service area
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
          Coverage we will stand behind.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate_grey">
          This is an Accra outlet, not a nationwide network. We confirm the area before you book.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-brand_teal/20">
        <div className="flex items-center gap-3 border-b border-brand_teal/20 bg-brand_cream/70 px-5 py-3 sm:px-6">
          <MapPin className="h-4 w-4 text-brand_teal" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-brand_navy">
            Accra service point
          </span>
        </div>
        <dl>
          {COVERAGE.map((row) => (
            <div
              key={row.label}
              className="grid gap-2 border-b border-brand_teal/15 px-5 py-5 last:border-b-0 sm:grid-cols-12 sm:gap-6 sm:px-6"
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

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link to="/service-area" className={CTA.secondary}>
          <Route className="h-4 w-4" aria-hidden="true" />
          Price and coverage
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <p className="flex items-center gap-2 text-sm text-slate_grey">
          <Clock className="h-4 w-4 text-brand_teal" aria-hidden="true" />
          {SITE.hoursWeekday}
        </p>
      </div>
    </div>
  </section>
);

export default ServiceAreaSection;
