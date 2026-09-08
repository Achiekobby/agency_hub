import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Clock, MapPin, Phone, ShieldOff } from 'lucide-react';
import Images from '../Images';
import { CTA, SITE } from '../data/site';

const FACTS = [
  { icon: ShieldOff, text: 'Not a bank or EMI' },
  { icon: Phone, text: 'Call before you travel' },
  { icon: Clock, text: 'ID checked at the outlet only' },
];

const fadeUp = (reduceMotion, delay) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion ? { duration: 0 } : { duration: 0.45, delay, ease: 'easeOut' },
});

function CounterFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-brand_cream" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-brand_cream to-brand_teal/20" />
      <div className="absolute inset-x-[14%] top-[12%] h-[18%] rounded-t-lg bg-brand_navy" />
      <div className="absolute inset-x-[20%] top-[28%] h-[28%] bg-white" />
      <div className="absolute bottom-[18%] left-[14%] h-[22%] w-[28%] rounded-sm bg-brand_teal" />
      <div className="absolute bottom-[18%] right-[14%] h-[22%] w-[24%] rounded-sm bg-brand_navy/80" />
    </div>
  );
}

function CounterArt() {
  const [failed, setFailed] = useState(false);

  if (failed) return <CounterFallback />;

  return (
    <img
      src={Images.agencyBankingHero}
      alt="A calm Accra outlet counter with an identification check. No bank logos and no readable ID."
      width={1200}
      height={1500}
      className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
      onError={() => setFailed(true)}
    />
  );
}

function StatusFacts({ reduceMotion }) {
  return (
    <motion.ul
      {...fadeUp(reduceMotion, 0.2)}
      className="mt-8 grid gap-3 sm:grid-cols-3"
    >
      {FACTS.map(({ icon: Icon, text }) => (
        <li
          key={text}
          className="flex items-start gap-3 rounded-xl border border-brand_teal/20 bg-white px-4 py-3"
        >
          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand_teal" aria-hidden="true" />
          <span className="text-sm font-semibold text-brand_navy">{text}</span>
        </li>
      ))}
    </motion.ul>
  );
}

function HeroCopy({ reduceMotion }) {
  return (
    <div>
      <motion.p
        {...fadeUp(reduceMotion, 0.04)}
        className="mt-4 text-sm font-semibold uppercase tracking-wider text-brand_teal"
      >
        Agency banking · {SITE.area}
      </motion.p>
      <motion.h1
        {...fadeUp(reduceMotion, 0.08)}
        className="mt-3 text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl lg:text-[3.05rem] lg:leading-[1.12]"
      >
        Banking at the outlet — named only when it can be checked.
      </motion.h1>
      <motion.p
        {...fadeUp(reduceMotion, 0.16)}
        className="mt-5 max-w-xl text-lg leading-relaxed text-slate_grey"
      >
        Delivery on Demand is not a bank, EMI or payment-service provider. An agent acts for a
        principal. We publish that name, agent number and official listing only when they can be
        verified.
      </motion.p>
      <StatusFacts reduceMotion={reduceMotion} />
      <motion.div
        {...fadeUp(reduceMotion, 0.26)}
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      >
        <a href={`tel:${SITE.phoneTel}`} className={CTA.primary}>
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call before you travel
        </a>
        <Link to="/contact" className={CTA.secondary}>
          Contact and hours
        </Link>
        <a href="#verification" className={CTA.ghost}>
          What we will publish
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </motion.div>
      <motion.p
        {...fadeUp(reduceMotion, 0.32)}
        className="mt-8 rounded-xl border border-brand_teal/25 bg-brand_cream/80 px-4 py-3 text-sm leading-relaxed text-slate_grey"
      >
        Do not assume cash deposit or withdrawal is available. Do not upload a Ghana Card or
        banking PIN through this website.
      </motion.p>
    </div>
  );
}

function OutletPlate() {
  return (
    <figure className="relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-brand_teal/20 bg-brand_navy shadow-lg shadow-brand_navy/10 md:min-h-[26rem] lg:min-h-0">
      <div className="relative min-h-[18rem] flex-1">
        <CounterArt />
        <p className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand_navy">
          Not a bank
        </p>
      </div>
      <figcaption className="flex items-start justify-between gap-4 border-t border-white/10 bg-brand_navy px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand_cyan">
            Outlet verification
          </p>
          <p className="mt-1 text-sm font-semibold text-white">Awaiting principal listing</p>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-white/80">
          <MapPin className="h-4 w-4 text-brand_cyan" aria-hidden="true" />
          {SITE.addressDisplay}
        </p>
      </figcaption>
    </figure>
  );
}

const AgencyBankingHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative overflow-hidden bg-brand_cream/50">
      <div className="relative mx-auto max-w-8xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div {...fadeUp(reduceMotion, 0)} className="lg:col-span-6 lg:self-center">
            <HeroCopy reduceMotion={reduceMotion} />
          </motion.div>
          <motion.div {...fadeUp(reduceMotion, 0.1)} className="lg:col-span-6">
            <OutletPlate />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default AgencyBankingHero;
