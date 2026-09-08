import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import ContactHero from '../components/ContactHero';
import ContactDetails from '../components/ContactDetails';
import { localBusinessJsonLd, SITE } from '../data/site';

const Contact = () => (
  <PageLayout>
    <Seo
      title={`Contact and location in ${SITE.city}`}
      description={`Call, WhatsApp or visit Delivery on Demand in ${SITE.addressDisplay}. Hours, directions and a quotation form. Do not send Ghana Card images or banking credentials.`}
      jsonLd={localBusinessJsonLd()}
    />
    <ContactHero />
    <ContactDetails />
  </PageLayout>
);

export default Contact;
