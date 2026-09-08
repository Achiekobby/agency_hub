import React from 'react';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import WhatsAppQuoteForm from './WhatsAppQuoteForm';
import RelatedFaqs from './RelatedFaqs';
import { CTA, SITE } from '../data/site';

const HOURS = [
  { day: 'Monday–Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

const FORM_FIELDS = [
  { name: 'name', label: 'Your name', placeholder: 'First name is enough', max: 80 },
  {
    name: 'service',
    label: 'What you need',
    as: 'select',
    options: [
      { value: 'Local delivery', label: 'Local delivery' },
      { value: 'Business rate sheet', label: 'Business rate sheet' },
      { value: 'International shipping assistance', label: 'International shipping' },
      { value: 'Outlet / banking question', label: 'Outlet or banking question' },
      { value: 'Other', label: 'Something else' },
    ],
  },
  {
    name: 'details',
    label: 'Pickup, destination and parcel details',
    as: 'textarea',
    placeholder: 'Area, destination, size. No Ghana Card. No banking PINs.',
    max: 400,
  },
];

function MessageDesk() {
  return (
    <section id="message" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-8xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
            Send details
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy">
            Tell us what you need.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate_grey">
            This form opens WhatsApp with your note. We reply with whether we can fulfil the job,
            then the price. Nothing is booked until you accept.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate_grey">
            <li>No Ghana Card images.</li>
            <li>No banking PINs or credentials.</li>
            <li>No promised reply-time on this page.</li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <WhatsAppQuoteForm
            title="Message the Accra outlet"
            intro="First name is enough. Describe the job — not identity documents."
            submitLabel="Send on WhatsApp"
            fields={FORM_FIELDS}
            buildMessage={(v) =>
              `Hello, this is ${v.name}.\nI need: ${v.service}\nDetails: ${v.details}`
            }
          />
        </div>
      </div>
    </section>
  );
}

function HoursAndOutlet() {
  return (
    <section className="bg-brand_cream/50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-8xl gap-5 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <article className="rounded-2xl bg-brand_navy p-6 text-white sm:p-8 lg:col-span-5">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand_cyan" aria-hidden="true" />
            <h2 className="text-lg font-bold">Opening hours</h2>
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {HOURS.map((row) => (
              <li
                key={row.day}
                className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
              >
                <span className="text-white/70">{row.day}</span>
                <span className="font-semibold">{row.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            Today’s booking cut-off is confirmed with your quote. It depends on remaining capacity
            and the destination.
          </p>
        </article>
        <article className="rounded-2xl border border-brand_teal/20 bg-white p-6 sm:p-8 lg:col-span-7">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand_teal" aria-hidden="true" />
            <h2 className="text-lg font-bold text-brand_navy">Outlet</h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate_grey">
            {SITE.addressDisplay}. Street-level pin is shared when you ask for directions. We do
            not invent a street address on this site.
          </p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-brand_teal/20 bg-brand_cream/50 px-4 py-4">
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand_teal">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-brand_navy hover:text-brand_teal"
                >
                  <Phone className="h-4 w-4 text-brand_teal" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="rounded-xl border border-brand_teal/20 bg-brand_cream/50 px-4 py-4">
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand_teal">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex min-h-11 items-center gap-2 break-all font-semibold text-brand_navy hover:text-brand_teal"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand_teal" aria-hidden="true" />
                  {SITE.email}
                </a>
              </dd>
            </div>
          </dl>
        </article>
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
            Ready to send a parcel?
          </h2>
          <p className="mt-2 max-w-xl text-white/75">
            Call, WhatsApp, or visit during opening hours. Coverage and price are confirmed before
            you book.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${SITE.phoneTel}`} className={CTA.primary}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {SITE.phoneDisplay}
          </a>
          <a href="#message" className={`${CTA.secondary} border-white bg-transparent text-white hover:bg-white/10`}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Send details
          </a>
        </div>
      </div>
    </section>
  );
}

const ContactDetails = () => (
  <>
    <MessageDesk />
    <HoursAndOutlet />
    <div className="bg-white">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
        <RelatedFaqs ids={['data', 'id', 'confirmation']} />
      </div>
    </div>
    <ClosingCta />
  </>
);

export default ContactDetails;
