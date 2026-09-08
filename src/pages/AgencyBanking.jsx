import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import AgencyBankingHero from '../components/AgencyBankingHero';
import AgencyBankingDetails from '../components/AgencyBankingDetails';
import { SITE } from '../data/site';

const AgencyBanking = () => (
  <PageLayout>
    <Seo
      title={`Agency banking in ${SITE.area}`}
      description={`Outlet banking services in ${SITE.city}. Principal, agent number and authorised transactions are published only when they can be verified. We are not a bank.`}
    />
    <AgencyBankingHero />
    <AgencyBankingDetails />
  </PageLayout>
);

export default AgencyBanking;
