import React from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import RelatedFaqs from '../components/RelatedFaqs';

const GROUPS = [
  {
    title: 'Do not send',
    items: [
      'Illegal goods, weapons, explosives, narcotics.',
      'Hazardous chemicals, flammables, pressurised gases.',
      'Live animals.',
      'Cash in unmarked parcels, unless a written arrangement exists for that job.',
    ],
  },
  {
    title: 'Ask before packing',
    items: [
      'Liquids, perishable food, lithium batteries.',
      'Prescription medicines.',
      'High-value jewellery without a declared process.',
      'Anything a rider cannot carry on a motorbike.',
    ],
  },
  {
    title: 'Prepare the parcel',
    items: [
      'Seal the carton. Contents should not shift.',
      'Write a reachable phone number for sender and recipient.',
      'Tell us the true contents. A false description can void the job.',
      'Record condition at handover. Keep the booking reference.',
    ],
  },
];

const ProhibitedItems = () => (
  <PageLayout>
    <Seo
      title="Prohibited items and parcel preparation"
      description="What we will not carry, what to ask about, and how to prepare a parcel for pickup in Accra."
    />
    <PageHero
      kicker="Guide"
      title="Prohibited items and parcel preparation."
      description="If you are unsure, describe the contents on WhatsApp before we collect. International jobs follow the carrier’s restrictions as well."
    />
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
      {GROUPS.map((group) => (
        <section key={group.title} className="rounded-2xl border border-brand_teal/20 bg-white p-6">
          <h2 className="text-lg font-bold text-brand_navy">{group.title}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate_grey">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
      <p className="text-sm text-slate_grey">
        <Link to="/international-shipping" className="font-semibold text-brand_navy hover:underline">
          International eligibility
        </Link>
        {' · '}
        <Link to="/contact" className="font-semibold text-brand_navy hover:underline">
          Contact
        </Link>
      </p>
      <RelatedFaqs ids={['prohibited']} />
    </div>
  </PageLayout>
);

export default ProhibitedItems;
