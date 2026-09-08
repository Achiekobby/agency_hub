import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  FileCheck,
  MessageCircle,
  Package,
} from 'lucide-react';

const WHATSAPP = '233123456789';

const LOCAL_QUOTE_HREF = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello, I need a local delivery quote.
Pickup area:
Delivery area:
Parcel type and approximate size:
Preferred pickup time:`)}`;

const STEPS = [
  {
    title: 'Send the details',
    body: 'Provide the pickup area, destination, parcel type, size and preferred time.',
    icon: MessageCircle,
    node: 'bg-brand_orange text-white',
    bar: 'lg:border-r-4 lg:border-r-brand_orange',
  },
  {
    title: 'Approve the quote',
    body: 'The business confirms the price, service window and applicable conditions.',
    icon: FileCheck,
    node: 'bg-brand_teal text-white',
    bar: 'lg:border-l-4 lg:border-l-brand_teal',
  },
  {
    title: 'Hand over the parcel',
    body: 'A rider collects it or the customer brings it to the outlet. Record the parcel’s condition and issue a reference.',
    icon: Package,
    node: 'bg-brand_navy text-white',
    bar: 'lg:border-r-4 lg:border-r-brand_navy',
  },
  {
    title: 'Receive confirmation',
    body: 'The customer receives an update or proof when delivery is completed.',
    icon: Bell,
    node: 'bg-brand_cyan text-brand_navy',
    bar: 'lg:border-l-4 lg:border-l-brand_cyan',
  },
];

function StepNode({ number, nodeClass }) {
  return (
    <span
      className={`relative flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white font-mono text-sm font-bold shadow-md ${nodeClass}`}
    >
      {number}
    </span>
  );
}

function StepCard({ step, number, alignRight }) {
  const Icon = step.icon;

  return (
    <article
      className={`max-w-md rounded-2xl border border-brand_teal/20 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6 ${step.bar} ${
        alignRight ? 'lg:ml-auto' : ''
      }`}
    >
      <div className={`flex items-start gap-3 ${alignRight ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand_cream text-brand_teal">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand_teal">
            Step {number}
          </p>
          <h3 className="mt-1 text-lg font-bold text-brand_navy sm:text-xl">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate_grey sm:text-[0.95rem]">
            {step.body}
          </p>
        </div>
      </div>
    </article>
  );
}

function TreeStep({ step, index, reduceMotion }) {
  const isLeft = index % 2 === 0;
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, x: isLeft ? -18 : 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.08, ease: 'easeOut' }}
      className="relative grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-4 lg:grid-cols-[minmax(0,1fr)_5.5rem_minmax(0,1fr)] lg:items-center lg:gap-0"
    >
      <div className="relative z-10 flex justify-center pt-5 lg:col-start-2 lg:row-start-1 lg:pt-0">
        <StepNode number={number} nodeClass={step.node} />
      </div>

      <div
        className={`relative min-w-0 lg:row-start-1 ${
          isLeft ? 'lg:col-start-1 lg:pr-10' : 'lg:col-start-3 lg:pl-10'
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute top-[2.35rem] hidden h-[3px] w-10 lg:block ${
            isLeft ? 'right-0 bg-brand_orange/70' : 'left-0 bg-brand_teal/70'
          }`}
        />
        <StepCard step={step} number={number} alignRight={isLeft} />
      </div>
    </motion.li>
  );
}

const LocalDeliveryWorksSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="how-local-works" className="relative overflow-hidden bg-brand_cream/70 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
            Local delivery
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
            How local delivery works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate_grey">
            Four steps. Nothing is booked until you approve the quote.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-[3rem_minmax(0,1fr)] lg:flex lg:justify-center">
          <div className="flex justify-center">
            <span className="rounded-full bg-brand_navy px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
              Start
            </span>
          </div>
        </div>

        <ol className="relative mx-auto mt-2 space-y-10 lg:mt-4 lg:space-y-8">
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: 'easeOut' }}
            className="absolute bottom-6 left-6 top-2 origin-top bg-gradient-to-b from-brand_orange via-brand_teal to-brand_cyan lg:left-1/2 lg:-translate-x-1/2"
            style={{ width: 3 }}
          />

          {STEPS.map((step, index) => (
            <TreeStep
              key={step.title}
              step={step}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </ol>

        <div className="mt-2 grid grid-cols-[3rem_minmax(0,1fr)] lg:flex lg:justify-center">
          <div className="flex justify-center">
            <span className="rounded-full bg-brand_cyan px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand_navy">
              Complete
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={LOCAL_QUOTE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg bg-brand_orange px-6 text-sm font-semibold text-white shadow-md shadow-brand_orange/20 transition-colors duration-200 hover:bg-brand_orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Get a local delivery quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocalDeliveryWorksSection;
