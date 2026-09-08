import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import InternationalShippingHero from '../components/InternationalShippingHero';
import InternationalShippingDetails from '../components/InternationalShippingDetails';
import { SITE } from '../data/site';

const InternationalShipping = () => (
  <PageLayout>
    <Seo
      title={`International parcel shipping from ${SITE.area}`}
      description={`International shipping assistance from ${SITE.city}. Eligibility, documents and a quotation before you send. We do not publish unverified carrier brands.`}
    />
    <InternationalShippingHero />
    <InternationalShippingDetails />
  </PageLayout>
);

export default InternationalShipping;
