import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import LocalDeliveryHero from '../components/LocalDeliveryHero';
import LocalDeliveryDetails from '../components/LocalDeliveryDetails';
import { SITE } from '../data/site';

const LocalDelivery = () => (
  <PageLayout>
    <Seo
      title={`Courier and parcel delivery in ${SITE.city}`}
      description={`Parcel pickup and local delivery in ${SITE.area}. Price and coverage are confirmed before you book.`}
    />
    <LocalDeliveryHero />
    <LocalDeliveryDetails />
  </PageLayout>
);

export default LocalDelivery;
