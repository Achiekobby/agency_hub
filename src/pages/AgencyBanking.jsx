import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import AgencyBankingHero from '../components/AgencyBankingHero';
import AgencyBankingDetails from '../components/AgencyBankingDetails';
import { BANKING_FAQ_IDS, faqJsonLd } from '../data/site';

const AgencyBanking = () => (
  <PageLayout>
    <Seo
      title="Agency Banking Solutions Ghana | Delivery on Demand"
      description="Build and manage stronger agency banking networks in Ghana with support for agent onboarding, liquidity, compliance, monitoring and performance. Delivery on Demand is not a bank."
      jsonLd={faqJsonLd(BANKING_FAQ_IDS)}
    />
    <AgencyBankingHero />
    <AgencyBankingDetails />
  </PageLayout>
);

export default AgencyBanking;
