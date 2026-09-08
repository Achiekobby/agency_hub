import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import Images from '../Images';
import { CTA, MESSAGES, SITE, whatsappHref } from '../data/site';

const CHECKS = [
  { label: 'Contents', value: 'Described honestly before packing' },
  { label: 'Size and weight', value: 'Confirmed against what can travel' },
  { label: 'Destination', value: 'Checked before a quotation' },
  { label: 'Documents', value: 'Extra time may be required' },
  { label: 'Carrier status', value: 'Not published without written approval' },
];

const fadeUp = (reduceMotion, delay) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion ? { duration: 0 } : { duration: 0.45, delay, ease: 'easeOut' },
});

function DeskFallback() {
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-brand_cream"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand_cream via-white to-brand_teal/20" />
      <div className="absolute left-[10%] top-[22%] h-[56%] w-[38%] rounded-sm bg-white shadow-sm" />
      <div className="absolute left-[14%] top-[28%] h-2 w-[28%] bg-brand_navy" />
      <div className="absolute left-[14%] top-[36%] h-2 w-[22%] bg-brand_teal/40" />
      <div className="absolute right-[12%] bottom-[18%] h-[42%] w-[28%] rounded-sm bg-brand_navy" />
      <div className="absolute right-[18%] top-[20%] h-16 w-16 rounded-full border-[6px] border-brand_cyan/50" />
    </div>
  );
}

function DeskArt() {
  const [failed, setFailed] = useState(false);

  if (failed) return <DeskFallback />;

  return (
    <img
      src={Images.internationalHero}
      alt="Documents and a sealed envelope being prepared on a desk in Accra, with no carrier branding."
      width={1920}
      height={1080}
      className="absolute inset-0 h-full w-full object-cover object-center"
      onError={() => setFailed(true)}
    />
  );
}

function EligibilityPass() {
  return (
    <aside
      className="overflow-hidden rounded-2xl border border-brand_teal/25 bg-white shadow-sm"
      aria-label="What we check before quoting an international shipment."
    >
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-brand_teal" aria-hidden="true" />
        <div className="flex items-start justify-between gap-3 border-b border-brand_teal/20 px-5 py-5 sm:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand_teal">
              Before a quote
            </p>
            <p className="mt-1 text-lg font-bold tracking-tight text-brand_navy">
              Eligibility pass
            </p>
          </div>
          <ShieldCheck className="h-5 w-5 shrink-0 text-brand_teal" aria-hidden="true" />
        </div>
        <dl>
          {CHECKS.map((row) => (
            <div
              key={row.label}
              className="border-b border-dashed border-brand_teal/25 px-5 py-3.5 last:border-b-0 sm:px-6"
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-brand_teal">
                {row.label}
              </dt>
              <dd className="mt-1 text-sm font-medium leading-snug text-brand_navy">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}

function HeroCopy({ reduceMotion }) {
  return (
    <div>
      <motion.p
        {...fadeUp(reduceMotion, 0)}
        className="text-sm font-semibold uppercase tracking-wider text-brand_teal"
      >
        International shipping · {SITE.area}
      </motion.p>
      <motion.h1
        {...fadeUp(reduceMotion, 0.08)}
        className="mt-4 text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]"
      >
        Send documents and eligible parcels abroad from {SITE.area}.
      </motion.h1>
      <motion.p
        {...fadeUp(reduceMotion, 0.16)}
        className="mt-5 max-w-xl text-lg leading-relaxed text-slate_grey"
      >
        We help customers prepare and arrange eligible international shipments through approved
        carrier channels. Eligibility is checked before you send.
      </motion.p>
      <motion.div
        {...fadeUp(reduceMotion, 0.24)}
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      >
        <a
          href={whatsappHref(MESSAGES.international)}
          target="_blank"
          rel="noopener noreferrer"
          className={CTA.primary}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Request an international quote
        </a>
        <a href="#eligibility" className={CTA.secondary}>
          Check eligibility
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </motion.div>
      <motion.a
        {...fadeUp(reduceMotion, 0.3)}
        href={`tel:${SITE.phoneTel}`}
        className={`${CTA.ghost} mt-4`}
      >
        <Phone className="h-4 w-4 text-brand_teal" aria-hidden="true" />
        Call {SITE.phoneDisplay}
      </motion.a>
      <motion.p
        {...fadeUp(reduceMotion, 0.34)}
        className="mt-8 max-w-xl rounded-xl border border-brand_teal/25 bg-white px-4 py-3 text-sm leading-relaxed text-slate_grey"
      >
        This outlet is not described here as a DHL Service Point Partner or FedEx agent. Carrier
        names and logos appear only with written authorisation.
      </motion.p>
    </div>
  );
}

const InternationalShippingHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative overflow-hidden bg-brand_cream/60">
      <div className="relative mx-auto max-w-8xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div {...fadeUp(reduceMotion, 0)} className="lg:col-span-7">
            <HeroCopy reduceMotion={reduceMotion} />
          </motion.div>
          <motion.div {...fadeUp(reduceMotion, 0.12)} className="lg:col-span-5">
            <EligibilityPass />
          </motion.div>
        </div>
        <motion.figure
          {...fadeUp(reduceMotion, 0.18)}
          className="relative mt-12 min-h-[16rem] overflow-hidden rounded-2xl border border-brand_teal/20 sm:min-h-[20rem] lg:min-h-[22rem]"
        >
          <DeskArt />
        </motion.figure>
      </div>
    </header>
  );
};

export default InternationalShippingHero;
