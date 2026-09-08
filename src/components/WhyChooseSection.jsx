import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  ClipboardList,
  FileText,
  MapPin,
  MessageCircle,
  Phone,
  Wallet,
} from 'lucide-react';

const WHATSAPP = '233123456789';
const PHONE_DISPLAY = '+233 123 456 789';
const PHONE_TEL = '+233123456789';

const QUOTE_HREF = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello, I need a delivery quote.
Pickup area:
Delivery area:
Parcel type and approximate size:
Preferred pickup time:`)}`;

const PROMISES = [
  {
    icon: Wallet,
    text: 'Get a price before confirming a delivery.',
  },
  {
    icon: Phone,
    text: 'Speak to a real person by phone or WhatsApp.',
  },
  {
    icon: MapPin,
    text: 'Drop off parcels at an identifiable physical outlet.',
  },
  {
    icon: FileText,
    text: 'Receive a receipt or booking reference.',
  },
  {
    icon: Bell,
    text: 'Get a delivery update or proof of completion.',
  },
  {
    icon: ClipboardList,
    text: 'Know the redelivery and problem-resolution rules before sending.',
  },
];

function CharterIntro({ reduceMotion }) {
  return (
    <motion.aside
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduceMotion ? 0 : 0.45 }}
      className="relative overflow-hidden rounded-2xl bg-brand_navy p-8 text-white shadow-lg shadow-brand_navy/20 lg:sticky lg:top-20 lg:p-10"
    >
      <div className="absolute left-0 top-0 h-full w-1.5 bg-brand_orange" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand_cyan">
        Operating promises
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Why choose this outlet.
      </h2>
      <p className="mt-4 text-base leading-relaxed text-white/80">
        These are things you can check on a booking — not slogans. If we cannot do one of them, we
        say so before you send.
      </p>
      <a
        href={QUOTE_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg bg-brand_orange px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand_orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand_navy"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Get a delivery quote
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        className="mt-4 flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-brand_cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
      >
        <Phone className="h-4 w-4 text-brand_cyan" aria-hidden="true" />
        Call: {PHONE_DISPLAY}
      </a>
    </motion.aside>
  );
}

function PromiseRow({ promise, index, reduceMotion }) {
  const Icon = promise.icon;
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
      className="relative grid grid-cols-[auto_1fr] items-start gap-4 border-b border-brand_teal/15 px-5 py-5 last:border-b-0 sm:grid-cols-[4.5rem_auto_1fr] sm:gap-5 sm:px-7 sm:py-6"
    >
      <span className="font-mono text-sm font-semibold tabular-nums text-brand_orange sm:text-base">
        {number}
      </span>
      <span className="mt-0.5 hidden h-9 w-9 items-center justify-center rounded-lg bg-brand_cream text-brand_teal sm:flex">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <p className="text-base font-semibold leading-snug text-brand_navy sm:text-lg">
        {promise.text}
      </p>
    </motion.li>
  );
}

const WhyChooseSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="why-choose" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <CharterIntro reduceMotion={reduceMotion} />
          </div>

          <div className="overflow-hidden rounded-2xl border border-brand_teal/20 bg-white shadow-sm lg:col-span-8">
            <div className="flex items-center justify-between border-b border-brand_teal/20 bg-brand_cream/70 px-5 py-3 sm:px-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand_navy">
                Accra service point
              </span>
              <span className="font-mono text-xs tabular-nums text-slate_grey">01–06</span>
            </div>
            <ol>
              {PROMISES.map((promise, index) => (
                <PromiseRow
                  key={promise.text}
                  promise={promise}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
