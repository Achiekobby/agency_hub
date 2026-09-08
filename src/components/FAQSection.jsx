import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/site';

function FaqItem({ item, open, onToggle, reduceMotion }) {
  const panelId = `faq-panel-${item.id}`;
  const buttonId = `faq-button-${item.id}`;

  return (
    <div className="border-b border-brand_teal/15">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-semibold text-brand_navy transition-colors duration-200 hover:text-brand_teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
        >
          {item.question}
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-brand_teal transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={false}
        animate={{
          height: open ? 'auto' : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: reduceMotion ? 0 : 0.25 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed text-slate_grey sm:text-base">
          {item.answer}
        </p>
      </motion.div>
    </div>
  );
}

const FAQSection = () => {
  const [openId, setOpenId] = useState(FAQS[0].id);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">FAQ</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
          Questions we can answer in writing.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate_grey">
          If an answer depends on authorisation we do not yet publish, we say so.{' '}
          <Link to="/privacy" className="font-semibold text-brand_navy underline-offset-4 hover:underline">
            Privacy
          </Link>
          {' · '}
          <Link to="/claims" className="font-semibold text-brand_navy underline-offset-4 hover:underline">
            Claims
          </Link>
          {' · '}
          <Link
            to="/prohibited-items"
            className="font-semibold text-brand_navy underline-offset-4 hover:underline"
          >
            Prohibited items
          </Link>
        </p>
        <div className="mt-10">
          {FAQS.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              open={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
