import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CourierServicesSection from '../components/CourierServicesSection'
import BankingPartnersSection from '../components/BankingPartnersSection'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const hash = location.hash?.slice(1)
    if (hash) {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location.pathname, location.hash])

  return (
    <div>
      <Navbar />
      <HeroSection />
      <ScrollReveal delay={0} direction="up" amount={0.12}>
        <CourierServicesSection />
      </ScrollReveal>
      <ScrollReveal delay={0} direction="up" amount={0.12}>
        <BankingPartnersSection />
      </ScrollReveal>
      <ScrollReveal delay={0} direction="up" amount={0.12}>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={0} direction="up" amount={0.12}>
        <StatsSection />
      </ScrollReveal>
      <ScrollReveal delay={0} direction="up" amount={0.12}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delay={0} direction="up" amount={0.12}>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal delay={0} direction="up" amount={0.1}>
        <Footer />
      </ScrollReveal>
    </div>
  )
}

export default Home
