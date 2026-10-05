import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import CourierServicesSection from '../components/CourierServicesSection';
import AgencyBankingBand from '../components/AgencyBankingBand';
import BankingPartnersSection from '../components/BankingPartnersSection';
import WhyChooseSection from '../components/WhyChooseSection';
import LocalDeliveryWorksSection from '../components/LocalDeliveryWorksSection';
import BusinessCustomersSection from '../components/BusinessCustomersSection';
import ServiceAreaSection from '../components/ServiceAreaSection';
import SocialProofSection from '../components/SocialProofSection';
import FAQSection from '../components/FAQSection';
import FinalCtaSection from '../components/FinalCtaSection';
import ScrollReveal from '../components/ScrollReveal';
import { faqJsonLd, HOME_FAQ_IDS, localBusinessJsonLd, SITE } from '../data/site';

const Home = () => (
  <PageLayout>
    <Seo
      title={`Parcel delivery and agency banking support in ${SITE.city}`}
      description={`Local parcel pickup in ${SITE.city}, plus agency-banking network support for institutions and prospective agents. Delivery on Demand is not a bank.`}
      jsonLd={[localBusinessJsonLd(), faqJsonLd(HOME_FAQ_IDS)]}
    />
    <HeroSection />
    <AgencyBankingBand />
    <BankingPartnersSection />
    <ScrollReveal delay={0} direction="up" amount={0.12}>
      <CourierServicesSection />
    </ScrollReveal>
    <ScrollReveal delay={0} direction="up" amount={0.12}>
      <LocalDeliveryWorksSection />
    </ScrollReveal>
    <ScrollReveal delay={0} direction="up" amount={0.12}>
      <WhyChooseSection />
    </ScrollReveal>
    <ScrollReveal delay={0} direction="up" amount={0.12}>
      <BusinessCustomersSection />
    </ScrollReveal>
    <ScrollReveal delay={0} direction="up" amount={0.12}>
      <ServiceAreaSection />
    </ScrollReveal>
    <ScrollReveal delay={0} direction="up" amount={0.12}>
      <SocialProofSection />
    </ScrollReveal>
    <ScrollReveal delay={0} direction="up" amount={0.12}>
      <FAQSection ids={HOME_FAQ_IDS} />
    </ScrollReveal>
    <FinalCtaSection />
  </PageLayout>
);

export default Home;
