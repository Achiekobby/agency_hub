import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Package, ArrowRight, Globe, Clock, Truck } from 'lucide-react';
import Images from '../Images';

const SERVICES = [
  {
    id: 'dhl',
    title: 'DHL Express',
    description:
      'International & domestic express delivery, document & parcel services. Fast, reliable, trackable.',
    logo: Images.dhl_logo,
    features: ['Express worldwide', 'Documents & parcels', 'Real-time tracking'],
    accent: 'from-amber-400 to-red-500',
    accentBg: 'from-amber-400/10 to-red-500/10',
    icon: Globe,
  },
  {
    id: 'fedex',
    title: 'FedEx Services',
    description:
      'Priority overnight, economy options, freight. Global network with time-definite delivery.',
    logo: Images.fedex_logo,
    features: ['Overnight & economy', 'Freight solutions', 'Time-definite delivery'],
    accent: 'from-indigo-500 to-orange-400',
    accentBg: 'from-indigo-500/10 to-orange-400/10',
    icon: Clock,
  },
];

const CourierServicesSection = () => {
  return (
    <section id="courier-services" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Background: subtle gradient + grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(#1e3a7d 1px, transparent 1px), linear-gradient(90deg, #1e3a7d 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Soft orbs for depth */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-brand_orange/8 to-transparent blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-bl from-brand_gold/8 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand_orange/20 bg-white/80 px-4 py-2 text-sm font-semibold text-brand_navy shadow-sm backdrop-blur-sm"
          >
            <Package className="h-4 w-4 text-brand_orange" />
            <span>What we offer</span>
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl lg:text-5xl">
            Courier & Logistics Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate_grey">
            Authorized agent for world-leading courier brands. Ship and track with confidence.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md shadow-slate-200/50 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-300/40"
              >
                {/* Accent bar + gradient overlay on header */}
                <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${service.accent}`} />
                <div className={`absolute right-0 top-0 h-32 w-48 bg-gradient-to-bl ${service.accentBg} opacity-60`} />

                {/* Card top: logo + icon */}
                <div className="relative border-b border-slate-100 px-8 pt-8 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-auto items-center sm:h-16">
                      <img
                        src={service.logo}
                        alt={`${service.title} logo`}
                        className="max-h-full w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className={`rounded-xl bg-gradient-to-br ${service.accentBg} p-3 ring-1 ring-slate-200/50`}>
                      <service.icon className="h-6 w-6 text-regal_navy" />
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="relative flex flex-1 flex-col px-8 py-6">
                  <h3 className="mb-3 text-xl font-bold text-brand_navy sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mb-6 flex-1 text-slate_grey leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mb-6 space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.12 + i * 0.06 }}
                        className="flex items-center gap-3 text-sm font-medium text-brand_navy"
                      >
                        <span className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${service.accent}`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r ${service.accent} px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-300/30 transition-all duration-300 hover:opacity-95 hover:shadow-xl group-hover:gap-3`}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-center gap-4 text-center"
        >
          <p className="text-slate_grey max-w-md text-base">
            Ready to ship? Get a quote or book a pickup – we’re here to help.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand_red via-brand_orange to-brand_gold px-8 py-4 font-semibold text-white shadow-lg shadow-brand_orange/25 transition-all hover:shadow-xl hover:shadow-brand_orange/30"
            >
              <Truck className="h-5 w-5" />
              Book a Shipment
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourierServicesSection;
