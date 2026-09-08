import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, FileSpreadsheet, MessageCircle, Phone } from 'lucide-react';
import Images from '../Images';
import { CTA, MESSAGES, SITE, whatsappHref } from '../data/site';

const SHEET_ROWS = [
  { label: 'Prepared for', value: `Online sellers and SMEs in ${SITE.city}` },
  { label: 'Pickup', value: 'Your shop or warehouse — one point' },
  { label: 'Routes', value: 'The three areas you use most' },
  { label: 'Rate', value: 'Quoted per route, after rider cost' },
  { label: 'Trial', value: 'One paid delivery to start' },
  { label: 'Hours', value: 'Scheduled inside outlet opening hours' },
];

const fadeUp = (reduceMotion, delay) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion ? { duration: 0 } : { duration: 0.45, delay, ease: 'easeOut' },
});

function ParcelFallback() {
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-brand_navy-700"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand_navy-600 to-brand_navy" />
      <div className="absolute left-[18%] top-[18%] h-[38%] w-[42%] bg-brand_cyan/80" />
      <div className="absolute left-[28%] top-[28%] h-[38%] w-[42%] bg-brand_orange" />
      <div className="absolute left-[38%] top-[38%] h-[38%] w-[42%] bg-white" />
    </div>
  );
}

function ParcelArt() {
  const [failed, setFailed] = useState(false);

  if (failed) return <ParcelFallback />;

  return (
    <img
      src={Images.businessHero}
      alt="Three labelled order parcels stacked on a shop counter, ready for scheduled pickup."
      width={1200}
      height={1500}
      className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
      onError={() => setFailed(true)}
    />
  );
}

function RateSheetSpecimen() {
  return (
    <aside
      className="h-full overflow-hidden rounded-2xl bg-white text-brand_navy shadow-lg shadow-brand_navy/20"
      aria-label="Example of what a business rate sheet contains. No prices are invented."
    >
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-brand_orange" aria-hidden="true" />
        <div className="flex items-start justify-between gap-4 border-b border-brand_teal/20 px-5 py-5 sm:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand_teal">
              Specimen · not a tariff
            </p>
            <p className="mt-1 text-lg font-bold tracking-tight">Merchant rate sheet</p>
          </div>
          <FileSpreadsheet className="h-5 w-5 shrink-0 text-brand_orange" aria-hidden="true" />
        </div>
        <dl>
          {SHEET_ROWS.map((row) => (
            <div
              key={row.label}
              className="border-b border-dashed border-brand_teal/25 px-5 py-3.5 sm:px-6"
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-brand_teal">
                {row.label}
              </dt>
              <dd className="mt-1 text-sm font-medium leading-snug">{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="px-5 py-4 text-xs leading-relaxed text-slate_grey sm:px-6">
          Amounts are written only after we see your pickup point and routes. This sheet is not a
          public price list.
        </p>
      </div>
    </aside>
  );
}

function HeroCopy({ reduceMotion }) {
  return (
    <div>
      <motion.p
        {...fadeUp(reduceMotion, 0)}
        className="text-sm font-semibold uppercase tracking-wider text-brand_cyan"
      >
        Business customers · {SITE.city}
      </motion.p>
      <motion.h1
        {...fadeUp(reduceMotion, 0.08)}
        className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.2rem] lg:leading-[1.1]"
      >
        Sending several parcels every week? Stop requesting the same quote repeatedly.
      </motion.h1>
      <motion.p
        {...fadeUp(reduceMotion, 0.16)}
        className="mt-5 max-w-xl text-lg leading-relaxed text-white/80"
      >
        Tell us your pickup location and the three delivery areas you use most. We prepare a simple
        rate sheet. You can start with one paid trial delivery.
      </motion.p>
      <motion.div
        {...fadeUp(reduceMotion, 0.24)}
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      >
        <a
          href={whatsappHref(MESSAGES.businessRateSheet)}
          target="_blank"
          rel="noopener noreferrer"
          className={CTA.primary}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Get my business rate sheet
        </a>
        <a
          href="#rate-sheet"
          className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
        >
          Fill in the request
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </motion.div>
      <motion.a
        {...fadeUp(reduceMotion, 0.3)}
        href={`tel:${SITE.phoneTel}`}
        className="mt-5 inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-white/90 hover:text-brand_cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
      >
        <Phone className="h-4 w-4 text-brand_cyan" aria-hidden="true" />
        Call {SITE.phoneDisplay}
      </motion.a>
    </div>
  );
}

const BusinessDeliveryHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative overflow-hidden bg-brand_navy-450">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand_teal/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-8xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-12 lg:items-stretch lg:gap-8 xl:gap-10">
          <motion.div
            {...fadeUp(reduceMotion, 0)}
            className="md:col-span-2 lg:col-span-5 lg:self-center"
          >
            <HeroCopy reduceMotion={reduceMotion} />
          </motion.div>
          <motion.figure
            {...fadeUp(reduceMotion, 0.1)}
            className="relative min-h-[20rem] overflow-hidden rounded-2xl border border-white/10 md:min-h-[24rem] lg:col-span-3 lg:min-h-0"
          >
            <ParcelArt />
          </motion.figure>
          <motion.div {...fadeUp(reduceMotion, 0.16)} className="lg:col-span-4">
            <RateSheetSpecimen />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default BusinessDeliveryHero;
