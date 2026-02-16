import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  MapPin,
  Package,
  Building2,
  Truck,
  Radio,
  Lock,
  Sparkles,
  BadgeCheck,
  Zap,
} from 'lucide-react';

const FEATURES = [
  {
    id: 'certified',
    title: 'Certified & Compliant',
    description: 'Officially certified DHL & FedEx agent and authorized banking partner.',
    icon: ShieldCheck,
    color: 'text-smart_blue',
    bg: 'bg-smart_blue/10',
    border: 'border-smart_blue/20',
  },
  {
    id: 'tracking',
    title: 'Real-Time Tracking',
    description: 'Track every shipment and transaction with live updates.',
    icon: Radio,
    color: 'text-sapphire',
    bg: 'bg-sapphire/10',
    border: 'border-sapphire/20',
  },
  {
    id: 'secure',
    title: 'Secure Transactions',
    description: 'Your money and parcels are handled with the highest security.',
    icon: Lock,
    color: 'text-regal_navy',
    bg: 'bg-regal_navy/10',
    border: 'border-regal_navy/20',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50/40 to-indigo-50/30 py-20 sm:py-24 lg:py-28">
      {/* Background orbs and decorative elements */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#2B4C9D]/20 via-smart_blue/15 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-indigo-400/20 via-purple-300/15 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
          className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-300/20 to-blue-400/15 blur-3xl"
        />
        
        {/* Subtle curved overlay */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2B4C9D]/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Illustration built from Lucide icons */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative h-[320px] w-full max-w-md sm:h-[380px]">
                {/* Background shape */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-blue-50/50 to-indigo-100/40 backdrop-blur-sm shadow-xl shadow-blue-200/30"
                />
                {/* Decorative ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-regal_navy/30"
                />
                {/* Central composition */}
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="rounded-2xl bg-white p-6 shadow-2xl shadow-smart_blue/20 ring-1 ring-slate-200/50"
                  >
                    <Package className="h-14 w-14 text-smart_blue" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.6 }}
                    className="flex gap-3"
                  >
                    <div className="rounded-xl bg-white/95 p-3 shadow-lg ring-1 ring-slate-200/50">
                      <Truck className="h-8 w-8 text-sapphire" />
                    </div>
                    <div className="rounded-xl bg-white/95 p-3 shadow-lg ring-1 ring-slate-200/50">
                      <Building2 className="h-8 w-8 text-regal_navy" />
                    </div>
                  </motion.div>
                </div>
                {/* Floating icons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute right-8 top-12 rounded-full bg-white p-4 shadow-lg ring-1 ring-green-100"
                >
                  <BadgeCheck className="h-8 w-8 text-green-600" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-16 left-8 rounded-full bg-white p-4 shadow-lg ring-1 ring-red-100"
                >
                  <MapPin className="h-8 w-8 text-red-500" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="absolute right-12 bottom-20 rounded-full bg-white p-4 shadow-lg ring-1 ring-amber-100"
                >
                  <Zap className="h-8 w-8 text-amber-500" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-regal_navy/20 bg-white/80 px-4 py-2 text-sm font-semibold text-regal_navy shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-smart_blue" />
              <span>Who we are</span>
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tight text-prussian_blue sm:text-4xl lg:text-5xl">
              About AgencyHub GH
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate_grey">
              We are a certified agent for <span className="font-semibold text-prussian_blue">DHL & FedEx</span>,
              and an authorized banking partner for Access Bank Ghana, Fidelity Bank Ghana, Absa Bank, and Ecobank.
              Located in <span className="font-semibold text-prussian_blue">Accra</span>, we bring fast logistics
              and convenient banking closer to you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-md ring-1 ring-slate-200/60"
              >
                <MapPin className="h-5 w-5 text-regal_navy" />
                <span className="text-sm font-medium text-prussian_blue">Accra, Ghana</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-md ring-1 ring-slate-200/60"
              >
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-prussian_blue">Certified agent</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className={`flex h-full flex-col rounded-2xl border bg-white/90 backdrop-blur-sm p-8 shadow-lg shadow-blue-200/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-300/40 ${feature.border}`}
              >
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} ${feature.color} ring-1 ring-slate-200/40`}
                >
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-prussian_blue">{feature.title}</h3>
                <p className="mt-3 flex-1 text-slate_grey leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
