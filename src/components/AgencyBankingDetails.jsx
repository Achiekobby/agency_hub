import React from 'react';
import { Link } from 'react-router';
import { Ban, Clock, Phone, ShieldAlert } from 'lucide-react';
import RelatedFaqs from './RelatedFaqs';
import { CTA, SITE } from '../data/site';

const LEDGER = [
  { item: 'Exact principal institution', status: 'Not yet published' },
  { item: 'Agent or terminal number', status: 'Not yet published' },
  { item: 'Outlet name as recorded by the principal', status: 'Not yet published' },
  { item: 'How to verify the outlet on the principal’s official list', status: 'Not yet published' },
  { item: 'Authorised transactions', status: 'Not yet published' },
  { item: 'Customer identification requirements', status: 'Not yet published' },
  { item: 'Transaction limits and applicable charges', status: 'Not yet published' },
  { item: 'Hours when sufficient float is normally available', status: 'Not yet published' },
  { item: 'Receipt and complaint procedures', status: 'Not yet published' },
];

const NOT_THIS = [
  'We are not a bank.',
  'We are not an EMI or payment-service provider.',
  'We do not collect PINs, passwords or Ghana Card images on this site.',
  'We do not display bank logos without the principal’s permission.',
];

function VerificationLedger() {
  return (
    <section id="verification" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
            Verification
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
            What we will publish before calling this agency banking.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate_grey">
            Bank of Ghana treats an agent as a party acting for a named principal. Customers should
            be able to check that principal’s official agent list. Empty rows here are intentional.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-brand_teal/20 bg-white">
          <div className="grid grid-cols-12 gap-4 border-b border-brand_teal/20 bg-brand_navy px-5 py-3 sm:px-6">
            <p className="col-span-7 text-xs font-semibold uppercase tracking-wider text-brand_cyan sm:col-span-8">
              Required before publication
            </p>
            <p className="col-span-5 text-right text-xs font-semibold uppercase tracking-wider text-brand_cyan sm:col-span-4">
              Status
            </p>
          </div>
          <dl>
            {LEDGER.map((row) => (
              <div
                key={row.item}
                className="grid grid-cols-12 items-baseline gap-4 border-b border-brand_teal/15 px-5 py-4 last:border-b-0 sm:px-6"
              >
                <dt className="col-span-7 text-sm font-medium text-brand_navy sm:col-span-8">
                  {row.item}
                </dt>
                <dd className="col-span-5 text-right text-xs font-semibold uppercase tracking-wider text-brand_teal sm:col-span-4">
                  {row.status}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function BoundariesSection() {
  return (
    <section className="bg-brand_cream/50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-8xl gap-5 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <article className="rounded-2xl border border-brand_teal/20 bg-white p-6 sm:p-8 lg:col-span-7">
          <div className="flex items-center gap-2">
            <Ban className="h-4 w-4 text-brand_teal" aria-hidden="true" />
            <h2 className="text-lg font-bold text-brand_navy">What this website will not do</h2>
          </div>
          <ul className="mt-6 space-y-4">
            {NOT_THIS.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate_grey">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand_orange" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-slate_grey">
            Identification required by a banking principal is handled at the outlet under that
            principal’s rules.{' '}
            <Link to="/privacy" className="font-semibold text-brand_navy underline-offset-4 hover:underline">
              Privacy notice
            </Link>
            .
          </p>
        </article>
        <article className="rounded-2xl bg-brand_navy p-6 text-white sm:p-8 lg:col-span-5">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand_cyan" aria-hidden="true" />
            <h2 className="text-lg font-bold">Outlet hours</h2>
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
            {SITE.addressDisplay}. Float hours will be listed only when they are operationally
            true. Call before you travel.
          </p>
        </article>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="bg-brand_navy py-14 sm:py-16">
      <div className="mx-auto flex max-w-8xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-brand_cyan" aria-hidden="true" />
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Confirm at the outlet before you travel.
            </h2>
            <p className="mt-2 max-w-xl text-white/75">
              Until the principal, agent number and official list are published here, do not plan a
              cash visit on the website alone.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${SITE.phoneTel}`} className={CTA.primary}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {SITE.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
          >
            Contact and location
          </Link>
        </div>
      </div>
    </section>
  );
}

const AgencyBankingDetails = () => (
  <>
    <VerificationLedger />
    <BoundariesSection />
    <div className="bg-brand_cream/50">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
        <RelatedFaqs ids={['principal', 'transactions', 'id', 'data']} />
      </div>
    </div>
    <ClosingCta />
  </>
);

export default AgencyBankingDetails;
