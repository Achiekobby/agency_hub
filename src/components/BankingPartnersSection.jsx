import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Images from '../Images';
import { CTA } from '../data/site';

const PARTNERS = [
  {
    index: '01',
    name: 'Access Bank',
    legal: 'Access Bank Ghana Plc',
    logo: Images.access_logo,
    frame: 'h-16 max-w-[16rem] sm:h-[4.5rem]',
  },
  {
    index: '02',
    name: 'Fidelity Bank',
    legal: 'Fidelity Bank Ghana',
    logo: Images.fidelity_logo,
    frame: 'h-24 w-24 sm:h-28 sm:w-28',
  },
  {
    index: '03',
    name: 'UBA',
    legal: 'United Bank for Africa',
    logo: Images.uba_logo,
    frame: 'h-20 max-w-[17rem] sm:h-24',
  },
];

function BankingCta() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mt-6 min-h-[16rem] overflow-hidden rounded-2xl bg-brand_navy sm:min-h-[18rem]">
      {!failed && (
        <img
          src={Images.bankingCta}
          alt=""
          width={1600}
          height={720}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          onError={() => setFailed(true)}
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand_navy via-brand_navy/90 to-brand_navy/25"
        aria-hidden="true"
      />
      <div className="relative flex min-h-[16rem] flex-col justify-end gap-6 px-6 py-8 sm:min-h-[18rem] sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:py-10">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand_cyan">
            Agency banking
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            See how the network is run.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
            Onboarding, liquidity, compliance and who the service belongs to. Delivery on Demand
            supports the network. The principal remains the bank.
          </p>
        </div>
        <Link to="/agency-banking" className={`${CTA.primary} shrink-0`}>
          Agency banking
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

const BankingPartnersSection = () => (
  <section id="banking-partners" className="bg-brand_cream/50 py-16 sm:py-20">
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
            Banking partners
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl">
            The banks on this counter.
          </h2>
        </div>
        <p className="text-base leading-relaxed text-slate_grey lg:col-span-5">
          Delivery on Demand works with Access Bank, Fidelity Bank and UBA on agency banking.
          Each institution remains the principal. We are not the bank.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-brand_teal/20 bg-white">
        <div className="flex items-center justify-between gap-4 border-b border-brand_teal/15 bg-brand_navy px-5 py-3 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand_cyan">
            Ghana · three principals
          </p>
          <p className="text-xs font-medium text-white/70">Named because we work with them</p>
        </div>
        <ul className="grid md:grid-cols-3">
          {PARTNERS.map((bank) => (
            <li
              key={bank.name}
              className="flex flex-col border-b border-brand_teal/15 px-5 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-brand_teal">{bank.index}</p>
              <div className="mt-6 flex h-28 items-center sm:h-32">
                <img
                  src={bank.logo}
                  alt=""
                  className={`${bank.frame} w-auto object-contain object-left`}
                />
              </div>
              <h3 className="mt-6 text-lg font-bold tracking-tight text-brand_navy">{bank.name}</h3>
              <p className="mt-1 text-sm text-slate_grey">{bank.legal}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand_navy">
                Agency banking partner
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 border-t border-brand_teal/15 bg-brand_cream/60 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="max-w-xl text-sm leading-relaxed text-slate_grey">
            Confirm the outlet on that bank’s own agent list before you transact. Agent numbers
            and the services live at this counter are published only when they can be checked.
          </p>
          <Link
            to="/agency-banking#verification"
            className="inline-flex min-h-11 shrink-0 cursor-pointer items-center text-sm font-semibold text-brand_navy underline-offset-4 hover:text-brand_teal hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
          >
            What we still have to publish
          </Link>
        </div>
      </div>

      <BankingCta />
    </div>
  </section>
);

export default BankingPartnersSection;
