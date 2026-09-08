import React from 'react';
import { Link } from 'react-router';
import {
  ArrowRight,
  ClipboardList,
  Clock,
  FileWarning,
  MessageCircle,
  Phone,
} from 'lucide-react';
import WhatsAppQuoteForm from './WhatsAppQuoteForm';
import RelatedFaqs from './RelatedFaqs';
import { CTA, SITE } from '../data/site';

const ROLES = [
  {
    duty: 'Who contracts with you',
    detail: 'Named on the quotation before you accept.',
  },
  {
    duty: 'Who issues the waybill',
    detail: 'Confirmed before the parcel is handed over.',
  },
  {
    duty: 'Who holds the parcel',
    detail: 'Outlet, rider or carrier — stated for that job.',
  },
  {
    duty: 'Which carrier terms apply',
    detail: 'The terms of the channel used for that shipment.',
  },
  {
    duty: 'Who handles complaints and claims',
    detail: 'Written on the quote. See the claims page for the process.',
  },
];

const GATES = [
  {
    n: '01',
    title: 'Contents',
    body: 'Illegal, hazardous and restricted goods are refused. If you are unsure, describe the item before packing.',
  },
  {
    n: '02',
    title: 'Size and destination',
    body: 'Not every size or country can travel. We check both before quoting. There is no worldwide coverage map on this page.',
  },
  {
    n: '03',
    title: 'Documents and time',
    body: 'International jobs may need extra document time. That window is stated on the quotation, not as a public guarantee.',
  },
];

function ResponsibilitySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
            Accountability
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
            Who does what — confirmed before you send.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate_grey">
            International jobs involve more than our Accra counter. We write the chain down. We do
            not hide behind a carrier logo.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-brand_teal/20">
          <div className="flex items-center gap-3 border-b border-brand_teal/20 bg-brand_cream/70 px-5 py-3 sm:px-6">
            <ClipboardList className="h-4 w-4 text-brand_teal" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand_navy">
              Written on the quotation
            </span>
          </div>
          <dl>
            {ROLES.map((row) => (
              <div
                key={row.duty}
                className="grid gap-2 border-b border-brand_teal/15 px-5 py-5 last:border-b-0 sm:grid-cols-12 sm:gap-8 sm:px-6"
              >
                <dt className="text-sm font-semibold text-brand_navy sm:col-span-5">{row.duty}</dt>
                <dd className="text-sm leading-relaxed text-slate_grey sm:col-span-7">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function EligibilitySection() {
  return (
    <section className="bg-brand_cream/50 py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
              Eligibility
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
              Not every parcel can leave the country.
            </h2>
          </div>
          <Link to="/prohibited-items" className={CTA.secondary}>
            <FileWarning className="h-4 w-4" aria-hidden="true" />
            Prohibited items
          </Link>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {GATES.map((gate) => (
            <li
              key={gate.n}
              className="rounded-2xl border border-brand_teal/20 bg-white p-6"
            >
              <p className="text-sm font-bold text-brand_teal">{gate.n}</p>
              <h3 className="mt-3 text-lg font-bold text-brand_navy">{gate.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate_grey">{gate.body}</p>
            </li>
          ))}
        </ol>
        <article className="mt-5 rounded-2xl bg-brand_navy p-6 text-white sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand_cyan" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold">Hours and document time</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
                {SITE.hoursWeekday}. {SITE.hoursSaturday}. {SITE.hoursSunday}. International jobs
                may need extra document time — that is stated on the quote.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-5 inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 text-sm font-semibold text-white hover:text-brand_cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan lg:mt-0"
          >
            Contact and location
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </article>
      </div>
    </section>
  );
}

function EligibilityForm() {
  return (
    <section id="eligibility" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-8xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
            Quotation
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy">
            Check eligibility on WhatsApp.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate_grey">
            Send the destination, parcel size and true contents. We confirm whether it can travel,
            then the price, before you book.
          </p>
          <ul className="mt-8 space-y-3 text-sm font-medium text-brand_navy">
            <li className="rounded-xl border border-brand_teal/20 bg-brand_cream/50 px-4 py-3">
              Do not send prohibited goods.
            </li>
            <li className="rounded-xl border border-brand_teal/20 bg-brand_cream/50 px-4 py-3">
              No Ghana Card upload through this form.
            </li>
          </ul>
          <Link to="/claims" className={`${CTA.ghost} mt-6`}>
            Failed delivery and claims
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="lg:col-span-7">
          <WhatsAppQuoteForm
            intro="Be specific about contents. A false description can void the job."
            submitLabel="Check eligibility on WhatsApp"
            fields={[
              { name: 'country', label: 'Destination country', max: 80, half: true },
              { name: 'parcel', label: 'Parcel type and size', max: 160, half: true },
              {
                name: 'contents',
                label: 'Contents',
                as: 'textarea',
                rows: 4,
                placeholder: 'Be specific. Do not send prohibited goods.',
                max: 240,
              },
            ]}
            buildMessage={(v) =>
              `Hello, I need international shipping assistance.\nDestination country: ${v.country}\nParcel type and approximate size: ${v.parcel}\nContents: ${v.contents}`
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
            Destination, size and contents ready?
          </h2>
          <p className="mt-2 max-w-xl text-white/75">
            We confirm eligibility and price before you book. Call if the item is unusual.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#eligibility" className={CTA.primary}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Check eligibility
          </a>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

const InternationalShippingDetails = () => (
  <>
    <ResponsibilitySection />
    <EligibilitySection />
    <EligibilityForm />
    <div className="bg-brand_cream/50">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
        <RelatedFaqs ids={['carriers', 'prohibited', 'damage']} />
      </div>
    </div>
    <ClosingCta />
  </>
);

export default InternationalShippingDetails;
