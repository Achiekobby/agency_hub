import React from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import RelatedFaqs from '../components/RelatedFaqs';
import { SITE } from '../data/site';

const Privacy = () => (
  <PageLayout>
    <Seo
      title="Privacy notice"
      description="How Delivery on Demand uses names, telephone numbers, addresses and parcel details. No Ghana Card uploads or banking credentials through this website."
    />
    <PageHero
      kicker="Privacy"
      title="How we use personal data."
      description="We process booking data to quote, collect, deliver and follow up. Ghana’s Data Protection Act applies. We are not using this site to collect banking credentials or Ghana Card images."
    />
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-slate_grey sm:px-6 lg:px-8">
      <section>
        <h2 className="text-xl font-bold text-brand_navy">What we collect and why</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>Name and telephone or WhatsApp number — to quote and contact you.</li>
          <li>Pickup and delivery addresses — to fulfil the job.</li>
          <li>Parcel description and size — to price and carry the item lawfully.</li>
          <li>Messages you send us — to keep the booking record.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold text-brand_navy">What we do not collect here</h2>
        <p className="mt-3 leading-relaxed">
          No Ghana Card uploads through ordinary website forms. No PIN, password, or banking
          credential collection. Identification required by a banking principal is handled at the
          outlet under that principal’s rules.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-brand_navy">Retention and access</h2>
        <p className="mt-3 leading-relaxed">
          Booking records are kept only as long as needed for delivery, complaints, accounts and
          legal duty, then deleted or archived with restricted staff access. You may request
          correction of your details by calling {SITE.phoneDisplay} or emailing {SITE.email}.
        </p>
      </section>
      <p className="text-sm">
        <Link to="/contact" className="font-semibold text-brand_navy hover:underline">
          Contact
        </Link>
        {' · '}
        <Link to="/claims" className="font-semibold text-brand_navy hover:underline">
          Claims
        </Link>
      </p>
      <RelatedFaqs ids={['data', 'id']} />
    </article>
  </PageLayout>
);

export default Privacy;
