import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import ServiceAreaHero from '../components/ServiceAreaHero';
import ServiceAreaDetails from '../components/ServiceAreaDetails';
import { SITE } from '../data/site';

const ServiceArea = () => (
  <PageLayout>
    <Seo
      title={`Parcel delivery coverage and pricing in ${SITE.city}`}
      description={`Service area, cut-off and how local delivery prices are calculated in ${SITE.city}. Coverage is confirmed before booking. We do not publish a national map.`}
    />
    <ServiceAreaHero />
    <ServiceAreaDetails />
  </PageLayout>
);

export default ServiceArea;
