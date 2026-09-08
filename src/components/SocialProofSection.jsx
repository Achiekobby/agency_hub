import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CTA, whatsappHref } from '../data/site';

const SocialProofSection = () => (
  <section id="proof" className="bg-brand_cream/50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
          Social proof
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
          Reviews are published only after a completed job.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate_grey">
          We do not fabricate testimonials, order counters, star ratings or partner logos. A review
          on this site will include a first name or business name with permission, the service
          completed, a date or recency, and a specific outcome.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-dashed border-brand_teal/40 bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand_teal">
            Waiting on completed jobs
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate_grey">
            Customer quotes will appear here once we have permission from people we have actually
            collected from and delivered for.
          </p>
        </article>
        <article className="rounded-2xl border border-brand_teal/20 bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand_teal">
            What we will never show
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate_grey">
            <li>“Amazing and reliable company!” with no job attached.</li>
            <li>Invented star ratings or “10,000+ deliveries”.</li>
            <li>Carrier or bank logos we are not authorised to display.</li>
          </ul>
        </article>
      </div>

      <a
        href={whatsappHref('Hello, you completed a delivery for me. I can share feedback.')}
        target="_blank"
        rel="noopener noreferrer"
        className={`${CTA.ghost} mt-8`}
      >
        <MessageCircle className="h-4 w-4 text-brand_teal" aria-hidden="true" />
        Completed a job with us? Send feedback
      </a>
    </div>
  </section>
);

export default SocialProofSection;
