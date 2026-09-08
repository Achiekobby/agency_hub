import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Check, Copy, MapPin, MessageCircle, Phone } from 'lucide-react';
import Images from '../Images';
import { CTA, MESSAGES, SITE, whatsappHref } from '../data/site';

const fadeUp = (reduceMotion, delay) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion ? { duration: 0 } : { duration: 0.45, delay, ease: 'easeOut' },
});

function DeskFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-brand_cream" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-brand_cream via-white to-brand_teal/25" />
      <div className="absolute inset-x-[12%] bottom-0 h-[58%] rounded-t-2xl bg-brand_navy" />
      <div className="absolute bottom-[38%] left-[18%] h-[22%] w-[22%] rounded-t-lg bg-white" />
      <div className="absolute bottom-[38%] right-[20%] h-[28%] w-[18%] rounded-t-lg bg-brand_teal" />
      <div className="absolute bottom-[18%] left-[22%] h-16 w-24 rounded-sm bg-brand_orange" />
      <div className="absolute bottom-[22%] right-[24%] h-10 w-8 rounded-sm bg-white" />
    </div>
  );
}

function DeskArt() {
  const [failed, setFailed] = useState(false);

  if (failed) return <DeskFallback />;

  return (
    <img
      src={Images.contactHero}
      alt="An Accra outlet desk: a staff member on a phone call while a customer hands over a sealed parcel. No readable numbers, no Ghana Card, no bank logos."
      width={1600}
      height={1200}
      className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
      onError={() => setFailed(true)}
    />
  );
}

function ContactPlate() {
  return (
    <figure className="relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-brand_teal/20 bg-white shadow-lg shadow-brand_navy/10 md:min-h-[26rem] lg:min-h-0">
      <div className="relative min-h-[18rem] flex-1 sm:min-h-[22rem]">
        <DeskArt />
        <p className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand_navy">
          No ID photos
        </p>
      </div>
      <figcaption className="flex items-start justify-between gap-4 border-t border-white/10 bg-brand_navy px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand_cyan">
            Accra outlet
          </p>
          <p className="mt-1 text-sm font-semibold text-white">{SITE.addressDisplay}</p>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-white/80">
          <MapPin className="h-4 w-4 text-brand_cyan" aria-hidden="true" />
          Pin on request
        </p>
      </figcaption>
    </figure>
  );
}

function CopyPhoneButton() {
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(SITE.phoneTel);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copyPhone}
      className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-brand_teal hover:bg-brand_cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
      aria-label={copied ? 'Phone number copied' : 'Copy phone number'}
    >
      {copied ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      {copied ? (
        <span className="sr-only" role="status">
          Phone number copied
        </span>
      ) : null}
    </button>
  );
}

const CHANNELS = [
  {
    href: `tel:${SITE.phoneTel}`,
    icon: Phone,
    ring: 'Call',
    label: SITE.phoneDisplay,
    copy: true,
  },
  {
    href: whatsappHref(MESSAGES.contact),
    icon: MessageCircle,
    ring: 'WhatsApp',
    label: 'Message the outlet',
    external: true,
  },
  {
    href: SITE.mapsUrl,
    icon: MapPin,
    ring: 'Visit',
    label: 'Directions — street pin when you ask',
    external: true,
  },
];

function ChannelBoard({ reduceMotion }) {
  return (
    <motion.ul {...fadeUp(reduceMotion, 0.2)} className="mt-8 space-y-3">
      {CHANNELS.map((item) => {
        const Icon = item.icon;
        return (
          <li
            key={item.ring}
            className="flex items-center justify-between gap-3 rounded-xl border border-brand_teal/20 bg-white px-4 py-3"
          >
            <a
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="flex min-h-11 min-w-0 flex-1 cursor-pointer items-center gap-3"
            >
              <Icon className="h-4 w-4 shrink-0 text-brand_teal" aria-hidden="true" />
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-brand_teal">
                  {item.ring}
                </span>
                <span className="block text-sm font-bold text-brand_navy">{item.label}</span>
              </span>
            </a>
            {item.copy ? <CopyPhoneButton /> : null}
          </li>
        );
      })}
    </motion.ul>
  );
}

function HeroCopy({ reduceMotion }) {
  return (
    <div>
      <motion.p
        {...fadeUp(reduceMotion, 0)}
        className="text-sm font-semibold uppercase tracking-wider text-brand_teal"
      >
        Contact and location · {SITE.city}
      </motion.p>
      <motion.h1
        {...fadeUp(reduceMotion, 0.08)}
        className="mt-4 text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl lg:text-[3.05rem] lg:leading-[1.12]"
      >
        Call, message, or visit the {SITE.city} outlet.
      </motion.h1>
      <motion.p
        {...fadeUp(reduceMotion, 0.16)}
        className="mt-5 max-w-xl text-lg leading-relaxed text-slate_grey"
      >
        We confirm coverage and price before you book. Do not send Ghana Card images or banking
        credentials through this website.
      </motion.p>
      <ChannelBoard reduceMotion={reduceMotion} />
      <motion.div {...fadeUp(reduceMotion, 0.28)} className="mt-8">
        <a href="#message" className={CTA.secondary}>
          Send details
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </motion.div>
    </div>
  );
}

const ContactHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative overflow-hidden bg-brand_cream/50">
      <div className="relative mx-auto max-w-8xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div {...fadeUp(reduceMotion, 0)} className="lg:col-span-5 lg:self-center">
            <HeroCopy reduceMotion={reduceMotion} />
          </motion.div>
          <motion.div {...fadeUp(reduceMotion, 0.1)} className="lg:col-span-7">
            <ContactPlate />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default ContactHero;
