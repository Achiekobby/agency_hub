import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { CTA, MESSAGES, SITE, whatsappHref } from '../data/site';

const FinalCtaSection = () => (
  <section id="send-today" className="bg-brand_navy py-16 sm:py-20">
    <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Need to send a parcel today?
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-white/80">
        Send the pickup area, destination and parcel details. We will confirm availability and
        price before you book.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={whatsappHref(MESSAGES.today)}
          target="_blank"
          rel="noopener noreferrer"
          className={CTA.primary}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Get a WhatsApp quote
        </a>
        <a href={`tel:${SITE.phoneTel}`} className={`${CTA.secondary} border-white bg-[#003B5C] text-white hover:bg-white/10`}>
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  </section>
);

export default FinalCtaSection;
