import React from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { CTA, MESSAGES, SITE, whatsappHref } from '../data/site';

const BusinessCustomersSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="business" className="relative overflow-hidden bg-brand_navy py-20 sm:py-24">
      <div className="absolute right-0 top-0 h-64 w-64 bg-brand_teal/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="lg:col-span-7"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_cyan">
            For online sellers and SMEs
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sending several parcels every week? Stop requesting the same quote repeatedly.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Tell us your pickup location and common delivery areas. We will prepare a simple rate
            sheet and pickup arrangement for your business.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappHref(MESSAGES.businessRateSheet)}
              target="_blank"
              rel="noopener noreferrer"
              className={CTA.primary}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Get my business rate sheet
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/business-delivery"
              className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-brand_cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
            >
              How merchant delivery works
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        <motion.ul
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.1 }}
          className="grid gap-3 lg:col-span-5"
        >
          {[
            'One pickup point, the routes you use most.',
            `Prepared for businesses around ${SITE.city}.`,
            'You can start with one paid trial delivery.',
          ].map((item) => (
            <li
              key={item}
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-medium text-white"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default BusinessCustomersSection;
