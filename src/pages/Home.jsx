import React from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import CourierServicesSection from '../components/CourierServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import LocalDeliveryWorksSection from '../components/LocalDeliveryWorksSection';
import BusinessCustomersSection from '../components/BusinessCustomersSection';
import ServiceAreaSection from '../components/ServiceAreaSection';
import SocialProofSection from '../components/SocialProofSection';
import FAQSection from '../components/FAQSection';
import FinalCtaSection from '../components/FinalCtaSection';
import ScrollReveal from '../components/ScrollReveal';
import { faqJsonLd, localBusinessJsonLd, SITE } from '../data/site';

const Home = () => (
  <PageLayout>
    <Seo
      title={`Parcel pickup and delivery in ${SITE.city}`}
      description={`Book local parcel pickup and delivery in ${SITE.city}. Get a WhatsApp quotation before you book. For online sellers and SMEs.`}
      jsonLd={[localBusinessJsonLd(), faqJsonLd()]}
    />
    <HeroSection />
    <ScrollReveal delay={0} direction="up" amount={0.12}>
      <CourierServicesSection />
    </ScrollReveal>
    <ScrollReveal delay={0} direction="up" amount={0.12}>
      <WhyChooseSection />
    </ScrollReveal>
    <ScrollReveal delay={0} direction="up" amount={0.12}>
      <LocalDeliveryWorksSection />
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
      <FAQSection />
    </ScrollReveal>
    <FinalCtaSection />
  </PageLayout>
);

export default Home;
