import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, Wallet, Smartphone, CheckCircle2 } from 'lucide-react';
import Images from '../Images';

const BANKS = [
  {
    id: 'access',
    name: 'Access Bank',
    services: ['Deposits', 'Withdrawals', 'Account support'],
    logo: Images.access_logo,
    accent: 'from-brand_navy to-brand_teal',
  },
  {
    id: 'fidelity',
    name: 'Fidelity Bank',
    services: ['Cash handling', 'Transfers', 'Mobile money'],
    logo: Images.fidelity_logo,
    accent: 'from-brand_orange to-brand_cyan',
  },
  {
    id: 'absa',
    name: 'Absa Bank',
    services: ['Secure & convenient transactions'],
    logo: Images.absa_logo,
    accent: 'from-brand_teal to-brand_navy',
  },
  {
    id: 'ecobank',
    name: 'Ecobank',
    services: ['Bill payments', 'Airtime top-up & more'],
    logo: Images.ecobank_logo,
    accent: 'from-brand_cyan to-brand_teal',
  },
];

const BankingPartnersSection = () => {
  return (
    <section id="banking-services" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background: soft gradient + very subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-white to-slate-50/20" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#003B5C 1px, transparent 1px), linear-gradient(90deg, #003B5C 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      {/* Soft orbs */}
      <div className="absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-brand_gold/5 blur-3xl" />
      <div className="absolute -right-40 bottom-1/3 h-64 w-64 rounded-full bg-brand_orange/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand_gold/20 bg-white/90 px-4 py-2 text-sm font-semibold text-brand_navy shadow-sm backdrop-blur-sm"
          >
            <Building2 className="h-4 w-4 text-brand_orange" />
            <span>Authorized agent</span>
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl lg:text-5xl">
            Agency Banking Services
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate_grey">
            Perform deposits, withdrawals, transfers, bill payments & more – right at our location.
            Authorized agent for:
          </p>
        </motion.div>

        {/* Bank cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {BANKS.map((bank, index) => (
            <motion.article
              key={bank.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md shadow-slate-200/40 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-300/30"
              >
                {/* Accent bar */}
                <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${bank.accent}`} />

                {/* Logo area */}
                <div className="flex min-h-[140px] items-center justify-center border-b border-slate-100 bg-slate-50/50 px-6 py-8 transition-colors duration-300 group-hover:bg-slate-50">
                  <img
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    className="max-h-14 w-full max-w-[160px] object-contain object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 py-5">
                  <h3 className="text-lg font-bold text-brand_navy">{bank.name}</h3>
                  <ul className="mt-3 flex-1 space-y-2">
                    {bank.services.map((service, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.08 + i * 0.05 }}
                        className="flex items-start gap-2.5 text-sm text-slate_grey"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand_orange" />
                        <span>{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-md text-base text-slate_grey">
            Need help with deposits, transfers or bill payments? We’re here for you.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand_navy to-brand_navy/90 px-8 py-4 font-semibold text-white shadow-lg shadow-brand_navy/25 transition-all hover:shadow-xl hover:shadow-brand_navy/30"
            >
              Inquire About Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-slate-200/80 bg-slate-50/60 px-6 py-6 sm:px-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
            <div className="flex items-center gap-3 text-sm font-medium text-slate_grey">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200/60">
                <Wallet className="h-4 w-4 text-brand_orange" />
              </div>
              <span>Cash deposits & withdrawals</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate_grey">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200/60">
                <Smartphone className="h-4 w-4 text-brand_gold" />
              </div>
              <span>Bill payments & airtime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BankingPartnersSection;
