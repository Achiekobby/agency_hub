import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, CircleDashed, MapPin, MessageCircle, Phone, Route } from 'lucide-react';
import Images from '../Images';
import { CTA, MESSAGES, SITE, whatsappHref } from '../data/site';

const READ = [
  {
    icon: MapPin,
    ring: 'Centre',
    label: 'Accra outlet',
    note: 'The navy pin. Pickup, drop-off, and the starting point for every quote.',
  },
  {
    icon: CircleDashed,
    ring: 'Inner',
    label: 'Quoted coverage',
    note: 'The dashed ring and rider paths. Confirmed on each job — no invented radius.',
  },
  {
    icon: Route,
    ring: 'Outer',
    label: 'Special quotation',
    note: 'The outer arcs. Intercity and new neighbourhoods, not a national network.',
  },
];

const LEGEND = [
  { swatch: 'h-2.5 w-2.5 rounded-full bg-brand_navy', label: 'Outlet pin' },
  { swatch: 'h-2.5 w-2.5 rounded-full border-2 border-dashed border-brand_teal', label: 'Quoted coverage' },
  { swatch: 'h-2.5 w-2.5 rounded-full border-2 border-dashed border-brand_orange', label: 'Special quotation' },
];

const fadeUp = (reduceMotion, delay) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion ? { duration: 0 } : { duration: 0.45, delay, ease: 'easeOut' },
});

function CoverageFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-brand_cream" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-brand_cream via-white to-brand_teal/30" />
      <div className="absolute inset-x-[10%] top-[16%] h-[58%] rounded-[2rem] border-[3px] border-dashed border-brand_teal/45" />
      <div className="absolute left-[18%] top-[28%] h-16 w-24 rounded-sm bg-brand_navy/15" />
      <div className="absolute left-[42%] top-[22%] h-20 w-20 rounded-sm bg-brand_teal/20" />
      <div className="absolute right-[20%] top-[32%] h-14 w-28 rounded-sm bg-brand_navy/10" />
      <div className="absolute left-1/2 top-[46%] h-14 w-10 -translate-x-1/2 rounded-t-full bg-brand_navy" />
      <div className="absolute left-[24%] top-[58%] h-1.5 w-[18%] rounded-full bg-brand_orange" />
      <div className="absolute right-[22%] top-[48%] h-1.5 w-[16%] rounded-full bg-brand_cyan" />
      <div className="absolute right-[12%] top-[14%] h-16 w-16 rounded-full border-2 border-dashed border-brand_orange/50" />
    </div>
  );
}

function CoverageArt() {
  const [failed, setFailed] = useState(false);

  if (failed) return <CoverageFallback />;

  return (
    <img
      src={Images.coverageHero}
      alt="Illustrated Accra coverage: the outlet at the centre, local delivery routes through nearby neighbourhoods, and a dashed outer ring for jobs that need a special quotation. Not a national map."
      width={1600}
      height={1200}
      className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
      onError={() => setFailed(true)}
    />
  );
}

function MapLegend() {
  return (
    <ul
      className="pointer-events-none absolute left-3 top-3 z-10 w-44 space-y-2 rounded-xl border border-white/70 bg-white/95 p-3 shadow-md shadow-brand_navy/10 backdrop-blur-sm sm:left-4 sm:top-4"
      aria-label="How to read the coverage illustration"
    >
      {LEGEND.map((item) => (
        <li key={item.label} className="flex items-center gap-2.5">
          <span className={`shrink-0 ${item.swatch}`} aria-hidden="true" />
          <span className="text-xs font-semibold text-brand_navy">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

function CoveragePlate() {
  return (
    <figure className="relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-brand_teal/20 bg-white shadow-lg shadow-brand_navy/10 md:min-h-[26rem] lg:min-h-0">
      <div className="relative min-h-[18rem] flex-1 sm:min-h-[22rem]">
        <CoverageArt />
        <MapLegend />
      </div>
      <figcaption className="flex items-center justify-between gap-3 border-t border-white/10 bg-brand_navy px-5 py-3.5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand_cyan">
          Accra coverage
        </p>
        <p className="text-sm font-medium text-white">Confirmed on each quote</p>
      </figcaption>
    </figure>
  );
}

function ReadingKey({ reduceMotion }) {
  return (
    <motion.ol {...fadeUp(reduceMotion, 0.2)} className="mt-8 space-y-4">
      {READ.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.ring} className="flex gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand_teal/25 bg-white">
              <Icon className="h-4 w-4 text-brand_teal" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-brand_teal">
                {item.ring}
              </p>
              <p className="text-sm font-bold text-brand_navy">{item.label}</p>
              <p className="mt-0.5 text-sm leading-snug text-slate_grey">{item.note}</p>
            </div>
          </li>
        );
      })}
    </motion.ol>
  );
}

function HeroCopy({ reduceMotion }) {
  return (
    <div>
      <motion.p
        {...fadeUp(reduceMotion, 0)}
        className="text-sm font-semibold uppercase tracking-wider text-brand_teal"
      >
        Price and service area · {SITE.city}
      </motion.p>
      <motion.h1
        {...fadeUp(reduceMotion, 0.08)}
        className="mt-4 text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl lg:text-[3.05rem] lg:leading-[1.12]"
      >
        Delivery service coverage in {SITE.city}.
      </motion.h1>
      <motion.p
        {...fadeUp(reduceMotion, 0.16)}
        className="mt-5 max-w-xl text-lg leading-relaxed text-slate_grey"
      >
        We publish what we can fulfil. We do not show a large national map to appear bigger. Ask
        for your pickup and destination — coverage is confirmed before you book.
      </motion.p>
      <ReadingKey reduceMotion={reduceMotion} />
      <HeroActions reduceMotion={reduceMotion} />
    </div>
  );
}

function HeroActions({ reduceMotion }) {
  return (
    <>
      <motion.div
        {...fadeUp(reduceMotion, 0.26)}
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      >
        <a
          href={whatsappHref(MESSAGES.localQuote)}
          target="_blank"
          rel="noopener noreferrer"
          className={CTA.primary}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Ask if we cover your area
        </a>
        <a href="#coverage-board" className={CTA.secondary}>
          Read the coverage board
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </motion.div>
      <motion.div {...fadeUp(reduceMotion, 0.32)} className="mt-6 flex flex-wrap gap-4">
        <a href={`tel:${SITE.phoneTel}`} className={CTA.ghost}>
          <Phone className="h-4 w-4 text-brand_teal" aria-hidden="true" />
          Call {SITE.phoneDisplay}
        </a>
        <Link to="/contact" className={CTA.ghost}>
          <MapPin className="h-4 w-4 text-brand_teal" aria-hidden="true" />
          Contact and location
        </Link>
      </motion.div>
    </>
  );
}

const ServiceAreaHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative overflow-hidden bg-brand_cream/50">
      <div className="relative mx-auto max-w-8xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div {...fadeUp(reduceMotion, 0)} className="lg:col-span-5 lg:self-center">
            <HeroCopy reduceMotion={reduceMotion} />
          </motion.div>
          <motion.div {...fadeUp(reduceMotion, 0.1)} className="lg:col-span-7">
            <CoveragePlate />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default ServiceAreaHero;
