import React from 'react';
import { motion } from 'framer-motion';
import { Package, Users, Clock, Shield, Award, CheckCircle2 } from 'lucide-react';

const STATS = [
  {
    id: 1,
    value: '10,000+',
    label: 'Packages Delivered',
    icon: Package,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    value: '5,000+',
    label: 'Happy Customers',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    value: '24/7',
    label: 'Customer Support',
    icon: Clock,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    value: '100%',
    label: 'Secure & Licensed',
    icon: Shield,
    color: 'from-amber-500 to-orange-500',
  },
];

const TRUST_BADGES = [
  {
    id: 1,
    title: 'DHL Authorized Agent',
    description: 'Official DHL Express partner',
    icon: Award,
  },
  {
    id: 2,
    title: 'FedEx Certified',
    description: 'Certified FedEx service provider',
    icon: Award,
  },
  {
    id: 3,
    title: 'Banking Partners',
    description: '4 authorized agency banks',
    icon: CheckCircle2,
  },
  {
    id: 4,
    title: 'Ghana Licensed',
    description: 'Fully compliant & certified',
    icon: Shield,
  },
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand_navy via-brand_navy/95 to-[#001B2E] py-16 sm:py-20 lg:py-24">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-tl from-purple-400/20 to-pink-400/20 blur-3xl"
        />
        
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-lg shadow-black/20 transition-all hover:bg-white/15 hover:shadow-xl hover:shadow-black/30"
              >
                {/* Gradient overlay */}
                <div className={`absolute -right-8 -top-8 h-32 w-32 bg-gradient-to-br ${stat.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-30`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className="mb-2 text-3xl font-black text-white sm:text-4xl">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm font-medium text-brand_cream/80">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Trusted & Certified
            </h3>
            <p className="mt-2 text-brand_cream/70">
              Your reliable partner for courier and banking services in Ghana
            </p>
          </div>

          {/* Trust badges */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_BADGES.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm p-4 transition-all hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <badge.icon className="h-5 w-5 text-brand_gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white">
                      {badge.title}
                    </div>
                    <div className="text-xs text-brand_cream/60">
                      {badge.description}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
