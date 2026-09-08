import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  ArrowRight,
  Clock,
  MessageCircle,
  Package,
  Phone,
  Store,
} from 'lucide-react';
import Images from '../Images';
import WhatsAppQuoteForm from './WhatsAppQuoteForm';
import RelatedFaqs from './RelatedFaqs';
import { CTA, SITE } from '../data/site';

const STEPS = [
  {
    n: '01',
    title: 'Send pickup and three areas',
    body: 'Shop or warehouse, the routes you use most, typical parcels.',
  },
  {
    n: '02',
    title: 'We prepare a rate sheet',
    body: 'Each repeating route is priced after rider or carrier cost.',
  },
  {
    n: '03',
    title: 'One paid trial delivery',
    body: 'Start with a real job. Nothing is billed as a free teaser route.',
  },
  {
    n: '04',
    title: 'Repeat on those routes',
    body: 'You stop quoting the same job every week unless the route changes.',
  },
];

const ARRANGE = [
  'Recurring pickup from one point in Accra.',
  'Online orders, documents and customer deliveries.',
  'Routes you use often sit on the sheet — not a national tariff.',
  'Merchant pickups stay inside outlet hours unless the quote says otherwise.',
];

function CounterArtFallback() {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden bg-brand_cream"
      role="img"
      aria-label="Illustration coming soon: labelled parcels on a shop counter awaiting pickup."
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-brand_cream" />
      <div className="absolute bottom-[18%] left-[16%] h-[48%] w-[22%] bg-brand_navy" />
      <div className="absolute bottom-[18%] left-[34%] h-[56%] w-[22%] bg-brand_orange" />
      <div className="absolute bottom-[18%] left-[52%] h-[40%] w-[22%] bg-brand_cyan/80" />
      <div className="absolute bottom-[12%] right-[12%] h-10 w-24 rounded-sm bg-brand_teal/30" />
    </div>
  );
}

function CounterArt() {
  const [failed, setFailed] = useState(false);

  if (failed) return <CounterArtFallback />;

  return (
    <img
      src={Images.businessCounter}
      alt="Labelled customer-order parcels lined on a shop counter for a scheduled merchant pickup."
      width={1600}
      height={1000}
      className="aspect-[16/10] w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

function ProcessRail() {
  return (
    <section className="border-b border-brand_teal/15 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
          How a merchant account starts
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
          A sheet for repeating routes — not another one-off quote.
        </h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.n} className="relative">
              {index < STEPS.length - 1 && (
                <span
                  className="absolute left-[3.25rem] right-[-0.75rem] top-4 hidden h-px bg-brand_teal/25 lg:block"
                  aria-hidden="true"
                />
              )}
              <p className="relative z-10 w-fit bg-white pr-3 text-sm font-bold text-brand_orange">
                {step.n}
              </p>
              <h3 className="mt-4 text-lg font-bold text-brand_navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate_grey">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ArrangeSection() {
  return (
    <section className="bg-brand_cream/50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-8xl gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <article className="overflow-hidden rounded-2xl border border-brand_teal/20 bg-white lg:col-span-7">
          <figure className="border-b border-brand_teal/15">
            <CounterArt />
          </figure>
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-brand_teal" aria-hidden="true" />
              <h2 className="text-lg font-bold text-brand_navy">What we arrange</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {ARRANGE.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate_grey">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand_orange" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <div className="grid gap-6 lg:col-span-5">
          <article className="rounded-2xl border border-brand_teal/20 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-brand_teal" aria-hidden="true" />
              <h2 className="text-lg font-bold text-brand_navy">How rates are set</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate_grey">
              Pickup point plus the areas you serve most. Contribution after rider or carrier cost
              is calculated before we agree a repeating route. We do not publish a fake national
              tariff, and we do not subsidise unprofitable routes to create volume.
            </p>
          </article>
          <article className="rounded-2xl bg-brand_navy p-6 text-white sm:p-8">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand_cyan" aria-hidden="true" />
              <h2 className="text-lg font-bold">Merchant pickup hours</h2>
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <span className="text-white/70">Weekdays</span>
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
              Pickups are scheduled inside these hours unless a quotation says otherwise.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function RateSheetForm() {
  return (
    <section id="rate-sheet" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-8xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
            Request
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy">
            Get my business rate sheet.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate_grey">
            Send the pickup point and three delivery areas. We reply on WhatsApp with a simple
            sheet — or with a question if a route cannot be fulfilled.
          </p>
          <ul className="mt-8 space-y-3 text-sm font-medium text-brand_navy">
            <li className="rounded-xl border border-brand_teal/20 bg-brand_cream/50 px-4 py-3">
              No Ghana Card. No banking credentials.
            </li>
            <li className="rounded-xl border border-brand_teal/20 bg-brand_cream/50 px-4 py-3">
              One paid trial. No unpaid “test” routes.
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/local-delivery" className={CTA.ghost}>
              Need a one-off local job instead
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7">
          <WhatsAppQuoteForm
            intro="We use this to draft routes. Price is confirmed before you accept."
            submitLabel="Request a rate sheet"
            fields={[
              {
                name: 'pickup',
                label: 'Pickup location',
                placeholder: 'Shop or warehouse area',
                max: 80,
              },
              {
                name: 'areas',
                label: 'Common delivery areas',
                as: 'textarea',
                rows: 4,
                placeholder: 'The three areas you use most',
                max: 240,
              },
              {
                name: 'parcels',
                label: 'Typical parcel types',
                placeholder: 'Orders, documents…',
                max: 160,
              },
            ]}
            buildMessage={(v) =>
              `Hello, I would like a business rate sheet.\nPickup location: ${v.pickup}\nCommon delivery areas: ${v.areas}\nTypical parcel types: ${v.parcels}`
            }
          />
        </div>
      </div>
    </section>
  );
}

function MerchantCta() {
  return (
    <section className="bg-brand_navy py-14 sm:py-16">
      <div className="mx-auto flex max-w-8xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready with pickup and three areas?
          </h2>
          <p className="mt-2 max-w-xl text-white/75">
            We prepare the sheet after we see the routes. Call if you would rather talk it through.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#rate-sheet" className={CTA.primary}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Fill the request
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

const BusinessDeliveryDetails = () => (
  <>
    <ProcessRail />
    <ArrangeSection />
    <RateSheetForm />
    <div className="bg-brand_cream/50">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
        <RelatedFaqs ids={['areas', 'price', 'cutoff']} />
      </div>
    </div>
    <MerchantCta />
  </>
);

export default BusinessDeliveryDetails;
