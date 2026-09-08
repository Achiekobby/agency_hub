import React from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import RelatedFaqs from '../components/RelatedFaqs';
import { SITE } from '../data/site';

const Claims = () => (
  <PageLayout>
    <Seo
      title="Failed delivery and claims"
      description="What happens when a recipient is unavailable, and how to raise a damage or loss claim after handover in Accra."
    />
    <PageHero
      kicker="Policy"
      title="Failed delivery and claims."
      description="Redelivery, returns and liability are written on the quotation before you book. This page is the working process, not an insurance policy."
    />
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-slate_grey sm:px-6 lg:px-8">
      <section>
        <h2 className="text-xl font-bold text-brand_navy">Recipient unavailable</h2>
        <p className="mt-3 leading-relaxed">
          We attempt the agreed delivery. If the recipient cannot take the parcel, we follow the
          failed-delivery rule on your quote: a redelivery, a hold at the {SITE.city} outlet, or a
          return to sender. Extra charges may apply and are stated before booking.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-brand_navy">Damage or loss</h2>
        <p className="mt-3 leading-relaxed">
          Condition is recorded at handover and a booking reference is issued. Raise a claim with
          that reference, photographs, and a description of the discrepancy. We acknowledge the
          complaint and give a firm update or resolution path. Liability limits on the quote apply.
          We do not describe a job as insured unless a current policy covers it.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-brand_navy">How to raise a claim</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 leading-relaxed">
          <li>Keep the booking reference and any confirmation message.</li>
          <li>Call {SITE.phoneDisplay} or write on WhatsApp with photos.</li>
          <li>Do not dispose of packaging until we have seen it.</li>
        </ol>
      </section>
      <p className="text-sm">
        <Link to="/contact" className="font-semibold text-brand_navy hover:underline">
          Contact
        </Link>
        {' · '}
        <Link to="/privacy" className="font-semibold text-brand_navy hover:underline">
          Privacy
        </Link>
      </p>
      <RelatedFaqs ids={['unavailable', 'redelivery', 'damage']} />
    </article>
  </PageLayout>
);

export default Claims;
