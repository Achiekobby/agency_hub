import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Kwame A.',
    role: 'Small Business Owner',
    text: 'AgencyHub has been a game changer for my business. Fast shipping, reliable tracking, and the banking services make everything so convenient in one place.',
    rating: 5,
    initials: 'KA',
    color: 'from-brand_teal to-brand_cyan',
  },
  {
    id: 2,
    name: 'Ama T.',
    role: 'Online Shopper',
    text: 'I love how easy it is to track my packages and handle my banking needs. The staff is professional and the service is always fast. Highly recommend!',
    rating: 5,
    initials: 'AT',
    color: 'from-brand_orange to-brand_cyan',
  },
  {
    id: 3,
    name: 'Kofi M.',
    role: 'Regular Customer',
    text: 'Best courier and banking service in Accra! DHL and FedEx packages are handled professionally, and the agency banking makes deposits and withdrawals so easy.',
    rating: 5,
    initials: 'KM',
    color: 'from-brand_navy to-brand_teal',
  },
  {
    id: 4,
    name: 'Efua S.',
    role: 'Business Professional',
    text: 'Reliable, efficient, and trustworthy. I send important documents through them regularly and never have to worry. The real-time tracking gives me peace of mind.',
    rating: 5,
    initials: 'ES',
    color: 'from-brand_cyan to-brand_orange',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-transparent to-slate-50/30" />
      <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-smart_blue/5 to-transparent blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-bl from-brand_teal/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
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
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-smart_blue/20 bg-white/80 px-4 py-2 text-sm font-semibold text-smart_blue shadow-sm backdrop-blur-sm"
          >
            <Quote className="h-4 w-4" />
            <span>Customer feedback</span>
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-prussian_blue sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate_grey">
            Trusted by individuals and businesses across Accra for reliable courier and banking services.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/40 transition-all duration-300 hover:shadow-xl hover:shadow-slate-300/40"
              >
                {/* Quote icon */}
                <div className="mb-4 flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${testimonial.color} shadow-lg`}>
                    <span className="text-lg font-bold text-white">{testimonial.initials}</span>
                  </div>
                  <Quote className="h-8 w-8 text-slate-200" />
                </div>

                {/* Rating */}
                <div className="mb-3 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand_orange text-brand_orange" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="mb-5 flex-1 text-sm leading-relaxed text-slate_grey">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-prussian_blue">{testimonial.name}</p>
                  <p className="text-xs text-slate_grey">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate_grey">
            Join hundreds of satisfied customers who trust us with their courier and banking needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
