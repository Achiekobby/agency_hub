import React from 'react';
import { FAQS } from '../data/site';

const RelatedFaqs = ({ ids }) => {
  const items = FAQS.filter((item) => ids.includes(item.id));
  if (!items.length) return null;

  return (
    <section className="mt-12 border-t border-brand_teal/20 pt-10">
      <h2 className="text-xl font-bold text-brand_navy">Questions</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-brand_teal/20 bg-white p-5"
          >
            <h3 className="text-base font-semibold text-brand_navy">{item.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate_grey">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RelatedFaqs;
