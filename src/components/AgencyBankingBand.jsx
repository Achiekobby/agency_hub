import React from 'react';
import { Link } from 'react-router';
import { CTA } from '../data/site';

const PILLARS = [
  ['Reach', 'Permitted services closer to the customer.'],
  ['Ready', 'Agents trained before they go live.'],
  ['Reliable', 'Liquidity treated as part of the service.'],
  ['Responsible', 'Controls set by the principal, followed at the outlet.'],
];

const AgencyBankingBand = () => (
  <section className="relative overflow-hidden bg-brand_navy py-16 text-white sm:py-20">
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id="agency-band-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#0BA9C1" fillOpacity="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#agency-band-dots)" />
      <circle
        cx="86%"
        cy="18%"
        r="150"
        fill="none"
        stroke="#0796B2"
        strokeOpacity="0.45"
        strokeWidth="1.25"
        strokeDasharray="5 9"
      />
      <circle
        cx="74%"
        cy="108%"
        r="120"
        fill="none"
        stroke="#F36C21"
        strokeOpacity="0.35"
        strokeWidth="1.25"
        strokeDasharray="4 8"
      />
    </svg>
    <div className="relative mx-auto grid max-w-8xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-end lg:px-8">
      <div className="lg:col-span-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand_cyan">
          Agency banking
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Financial access, run as an operating network.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white/75">
          Alongside parcel delivery, Delivery on Demand supports institutions and prospective
          agents: onboarding, liquidity, compliance and network performance. We are not a bank.
          A principal is named on the site only when the relationship can be verified.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/agency-banking" className={CTA.primary}>
            Agency banking
          </Link>
          <Link
            to="/agency-banking#consultation"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
          >
            Request a consultation
          </Link>
        </div>
      </div>
      <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-6">
        {PILLARS.map(([title, body]) => (
          <div key={title} className="border-t border-white/15 pt-4">
            <dt className="text-sm font-bold">{title}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-white/75">{body}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default AgencyBankingBand;
