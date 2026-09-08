import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import BusinessDeliveryHero from '../components/BusinessDeliveryHero';
import BusinessDeliveryDetails from '../components/BusinessDeliveryDetails';
import { SITE } from '../data/site';

const BusinessDelivery = () => (
  <PageLayout>
    <Seo
      title={`Business courier and scheduled pickup in ${SITE.city}`}
      description={`Rate sheets and recurring parcel pickup for online sellers and SMEs in ${SITE.city}. Start with one paid trial delivery.`}
    />
    <BusinessDeliveryHero />
    <BusinessDeliveryDetails />
  </PageLayout>
);

export default BusinessDelivery;
