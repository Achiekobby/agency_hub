import React from 'react';
import { Link } from 'react-router';
import { Phone } from 'lucide-react';
import WhatsAppQuoteForm from './WhatsAppQuoteForm';
import BankingPartnersSection from './BankingPartnersSection';
import FAQSection from './FAQSection';
import { BANKING_FAQ_IDS, CTA, SITE } from '../data/site';

const JUMPS = [
  { href: '#what', label: 'What it is' },
  { href: '#institutions', label: 'Institutions' },
  { href: '#agents', label: 'Agents' },
  { href: '#liquidity', label: 'Liquidity' },
  { href: '#compliance', label: 'Compliance' },
  { href: '#technology', label: 'Technology' },
  { href: '#verification', label: 'Verify an agent' },
  { href: '#consultation', label: 'Enquire' },
];

const PERMITTED = [
  'Cash deposits',
  'Cash withdrawals',
  'Funds transfers',
  'Bill payments',
  'Merchant payments',
  'Balance enquiries',
  'Account or wallet-related services',
  'Customer support',
  'Other services the principal authorises',
];

const WHY = [
  ['Extend reach', 'Serve communities where a full branch may not be practical.'],
  ['Improve convenience', 'Put everyday services nearer homes, markets and workplaces.'],
  ['Support inclusion', 'Add access points through which people can use formal services.'],
  ['Strengthen distribution', 'Complement branches, apps, wallets and digital channels.'],
  ['Reduce effort', 'Shorten the distance for suitable everyday transactions.'],
];

const AUDIENCES = [
  ['Banks and specialised deposit-takers', 'Build a network that sits beside branches and digital channels.', '#consultation', 'Talk to us'],
  ['Electronic money issuers', 'Strengthen cash-in and cash-out, activity and liquidity visibility.', '#consultation', 'Request a consultation'],
  ['Payment service providers', 'Develop merchant and agent coverage with clearer operating controls.', '#institutions', 'See the operating model'],
  ['Agent network managers', 'Tighten acquisition, onboarding, support, liquidity and performance.', '#network', 'Network management'],
  ['Merchants', 'Ask whether an established location can be considered by a principal.', '#agents', 'For merchants'],
  ['Prospective agents', 'See the requirements. An enquiry is not an appointment.', '#agent-interest', 'Register interest'],
];

const STRATEGY = [
  'Market and opportunity assessment',
  'Geographic coverage',
  'Customer segmentation',
  'Network design',
  'Service and product scope',
  'Operating model',
  'Agent value proposition',
  'Distribution planning',
  'Network measures',
  'Performance review',
];

const LIFECYCLE = [
  'Acquisition',
  'Approval',
  'Training',
  'Activation',
  'Transactions',
  'Liquidity',
  'Support',
  'Monitoring',
  'Compliance',
  'Performance',
];

const AGENT_NEEDS = [
  'Business documentation',
  'Suitable premises',
  'Working capital',
  'Cash availability',
  'Electronic float',
  'Responsible personnel',
  'Security arrangements',
  'Record keeping',
  'Customer-service capability',
  'Compliance readiness',
];

const JOURNEY = ['Discover', 'Apply', 'Assess', 'Approve', 'Contract', 'Train', 'Activate', 'Support', 'Monitor'];

const MODEL = [
  ['01', 'The principal sets the model', 'An authorised institution defines the services, systems and controls.'],
  ['02', 'Suitable businesses are identified', 'Prospects are assessed against that principal’s eligibility rules.'],
  ['03', 'Agents are approved and contracted', 'Only those who meet the requirements proceed.'],
  ['04', 'Training, then activation', 'Systems, procedures and liquidity are in place before going live.'],
  ['05', 'A customer visits an approved agent', 'They ask for a service that location is allowed to offer.'],
  ['06', 'Required checks are completed', 'Identification and the transaction follow the principal’s procedure.'],
  ['07', 'The transaction is processed', 'It goes through the authorised system, not an informal side channel.'],
  ['08', 'The customer gets confirmation', 'A receipt or confirmation, through the principal’s channel.'],
  ['09', 'Activity is monitored', 'The principal, and any authorised support partner, reviews operations, performance and compliance.'],
];

const FRAMEWORK = [
  ['Reach', 'Put permitted services closer to customers.'],
  ['Ready', 'Train and support agents before they go live.'],
  ['Reliable', 'Treat liquidity and operating consistency as part of the service.'],
  ['Responsible', 'Keep compliance, customer protection and risk controls in the operating model.'],
  ['Results', 'Measure activity and improve what the data shows.'],
];

const LEDGER = [
  'Which partner is active at this counter today',
  'Agent or terminal number',
  'Outlet name as the principal records it',
  'How to check the principal’s official agent list',
  'Authorised transactions',
  'Identification requirements',
  'Limits and charges',
  'When float is normally available',
  'Receipt and complaint procedure',
];

function JumpBar() {
  return (
    <nav aria-label="On this page" className="border-b border-brand_teal/15 bg-white">
      <div className="mx-auto flex max-w-8xl gap-x-5 gap-y-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {JUMPS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 cursor-pointer text-sm font-semibold text-brand_navy hover:text-brand_teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

const ROLES = [
  {
    index: '01',
    title: 'The principal',
    relation: 'Sets the service',
    body: 'The bank, specialised deposit-taker, electronic money issuer, payment service provider or other authorised institution responsible for the regulated service.',
  },
  {
    index: '02',
    title: 'The agent',
    relation: 'Offers it locally',
    body: 'An approved business that provides permitted services for that principal, under an agency agreement.',
  },
  {
    index: '03',
    title: 'Delivery on Demand',
    relation: 'Supports the network',
    body: 'A specialist in agency-banking operations and network support. Supporting a network does not make us the customer’s bank.',
  },
];

function WhatSection() {
  return (
    <section id="what" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">What it is</p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              Banking services, closer to the customer.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate_grey lg:col-span-5">
            An authorised institution can extend selected services through approved third-party
            businesses — agents — instead of relying only on branches. What a customer can do
            depends on that principal and on the approvals in place.
          </p>
        </div>

        <ol className="mt-12 grid overflow-hidden border-t-2 border-brand_orange bg-brand_navy text-white sm:grid-cols-3">
          {ROLES.map((role, index) => (
            <li
              key={role.index}
              className={`px-6 py-8 sm:px-8 sm:py-10 ${
                index > 0 ? 'border-t border-white/15 sm:border-l sm:border-t-0' : ''
              }`}
            >
              <p className="font-mono text-xs font-semibold tabular-nums text-brand_cyan">{role.index}</p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight">{role.title}</h3>
              <p className="mt-2 text-sm font-semibold text-white">{role.relation}</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">{role.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-bold tracking-tight text-brand_navy">
              Services a principal may authorise
            </h3>
            <p className="text-sm text-slate_grey">Examples only — not what is live at this outlet.</p>
          </div>
          <ol className="mt-4 grid border-t border-brand_navy/15 sm:grid-cols-2 lg:grid-cols-3">
            {PERMITTED.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline gap-4 border-b border-brand_navy/10 py-4 sm:pr-8"
              >
                <span className="font-mono text-xs font-semibold tabular-nums text-slate_grey">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold text-brand_navy">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="why" className="bg-brand_cream py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">Why it matters</p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              Access should not depend on distance.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate_grey lg:col-span-5">
            Digital channels keep growing. People still need a practical way to deposit cash,
            withdraw, pay, get help, and move between cash and digital value.
          </p>
        </div>

        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-8">
          {WHY.map(([title, body], index) => (
            <li
              key={title}
              className={`border-t-2 py-6 sm:pr-6 lg:pr-0 ${
                index === 0 ? 'border-brand_orange' : 'border-brand_navy/15'
              } ${index === WHY.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <p className="font-mono text-xs font-semibold tabular-nums text-slate_grey">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-6 text-lg font-bold tracking-tight text-brand_navy">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate_grey">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function NavyField({ id }) {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#0BA9C1" fillOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function WhoSection() {
  return (
    <section id="who" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">Who we support</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
            Principals, network managers, merchants and prospective agents.
          </h2>
        </div>
        <ol className="mt-12 border-t border-brand_navy/15">
          {AUDIENCES.map(([title, body, href, cta], index) => (
            <li
              key={title}
              className="grid gap-3 border-b border-brand_navy/10 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <p className="font-mono text-xs font-semibold tabular-nums text-slate_grey sm:col-span-1">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-base font-bold text-brand_navy sm:col-span-4">{title}</h3>
              <p className="text-sm leading-relaxed text-slate_grey sm:col-span-4">{body}</p>
              <a
                href={href}
                className="cursor-pointer text-sm font-semibold text-brand_navy underline-offset-4 hover:text-brand_teal hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan sm:col-span-3 sm:text-right"
              >
                {cta}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function InstitutionsSection() {
  return (
    <section id="institutions" className="relative overflow-hidden bg-brand_navy py-16 text-white sm:py-20">
      <NavyField id="institutions-dots" />
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_cyan">
              For financial institutions
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl sm:leading-[1.08]">
              From agent strategy to network performance.
            </h2>
          </div>
          <div className="max-w-xl lg:col-span-5">
            <p className="text-lg leading-relaxed text-white/75">
              A network is more than devices and recruited shops. It needs the right locations,
              liquidity, controls, incentives and an operating model. We help institutions work
              across that lifecycle.
            </p>
            <p className="mt-4 text-sm font-semibold text-white">
              Build on quality and demand, not headcount alone.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-12 border-t border-white/15 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand_cyan">Strategy work</h3>
            <ol className="mt-4 grid sm:grid-cols-2 sm:gap-x-10">
              {STRATEGY.map((item, index) => (
                <li key={item} className="flex items-baseline gap-4 border-b border-white/10 py-3">
                  <span className="font-mono text-xs font-semibold tabular-nums text-brand_cyan">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold text-white">{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand_cyan">
              Operating lifecycle
            </h3>
            <ol className="mt-4 grid grid-cols-2 gap-x-6">
              {LIFECYCLE.map((step, index) => (
                <li key={step} className="border-b border-white/10 py-3">
                  <span className="font-mono text-xs font-semibold tabular-nums text-brand_cyan">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-2 text-sm font-semibold">{step}</p>
                </li>
              ))}
            </ol>
            <a href="#consultation" className={`${CTA.primary} mt-8`}>
              Discuss your agency model
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentsSection() {
  const notes = [
    'Serve people who already live and trade around the business.',
    'Eligible agents may earn commission under the principal’s commercial terms. Income is not guaranteed.',
    'A stronger local presence only matters if the service is reliable.',
  ];

  return (
    <section id="agents" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
              Agents and merchants
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              A shop can become an access point — if a principal approves it.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate_grey lg:col-span-5">
            Shops, pharmacies, supermarkets, service centres, fuel stations and similar businesses
            may be considered. Approval sits with the participating principal, not with this
            website.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 border-t border-brand_navy/15 pt-8 lg:grid-cols-3">
          {notes.map((note) => (
            <li key={note} className="border-l-2 border-brand_navy/20 pl-4 text-sm leading-relaxed text-slate_grey">
              {note}
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="text-lg font-bold tracking-tight text-brand_navy">Before you apply</h3>
          <a href="#agent-interest" className={CTA.secondary}>
            Register agent interest
          </a>
        </div>
        <ol className="mt-4 grid border-t border-brand_navy/15 sm:grid-cols-2">
          {AGENT_NEEDS.map((item, index) => (
            <li key={item} className="flex items-baseline gap-4 border-b border-brand_navy/10 py-4 sm:pr-8">
              <span className="font-mono text-xs font-semibold tabular-nums text-slate_grey">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-semibold text-brand_navy">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function OnboardingSection() {
  const notes = [
    [
      'Training covers',
      'Procedures, customer service, transactions, fraud awareness, KYC and customer due diligence, AML/CFT/CPF duties, complaints, liquidity, reconciliation and records.',
    ],
    [
      'Activation means',
      'Systems, training, documents, any permitted branding, and liquidity arrangements are confirmed before an agent goes live.',
    ],
    [
      'We do not appoint',
      'Interest on this site is passed for assessment. The principal decides. Submitting a form is not approval.',
    ],
  ];

  return (
    <section id="onboarding" className="bg-brand_cream py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
              Selection and onboarding
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              Better networks start with suitable agents.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate_grey lg:col-span-5">
            Every agent stands for the institution at the counter. Recruitment should weigh more
            than a pin on a map: traffic, business profile, liquidity capacity and the principal’s
            due-diligence file — ownership, identification, registration, location, responsible
            persons and financial capacity.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-3 gap-x-4 sm:grid-cols-5 lg:grid-cols-9 lg:gap-x-5">
          {JOURNEY.map((step, index) => (
            <li
              key={step}
              className={`border-t-2 py-4 ${index === 0 ? 'border-brand_orange' : 'border-brand_navy/15'}`}
            >
              <p className="font-mono text-xs font-semibold tabular-nums text-slate_grey">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-3 text-sm font-bold text-brand_navy">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-8 border-t border-brand_navy/15 pt-8 lg:grid-cols-3">
          {notes.map(([title, body]) => (
            <div key={title}>
              <h3 className="text-base font-bold text-brand_navy">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate_grey">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const NETWORK_MEASURES = [
  'Active, inactive and dormant agents',
  'Transaction frequency, value and service mix',
  'Outlet visits and issue follow-up',
  'Coverage by district, region and commercial zone',
  'Liquidity, compliance status and operational issues',
  'Where to recruit, support, reactivate or review',
];

function NetworkSection() {
  return (
    <section id="network" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
              Network management
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              A larger network is not automatically a better one.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate_grey lg:col-span-5">
            The useful measure is whether agents are active, compliant, liquid and able to serve
            customers. We help institutions see that picture: lifecycle, activity, field visits,
            support, territory and performance.
          </p>
        </div>
        <ol className="mt-12 grid border-t border-brand_navy/15 sm:grid-cols-2 lg:grid-cols-3">
          {NETWORK_MEASURES.map((item, index) => (
            <li key={item} className="border-b border-brand_navy/10 py-5 sm:pr-8">
              <span className="font-mono text-xs font-semibold tabular-nums text-slate_grey">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 text-base font-bold text-brand_navy">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const LIQUIDITY = [
  ['Cash availability', 'Plan for expected withdrawal demand.'],
  ['Electronic float', 'See the value required to process applicable transactions.'],
  ['Monitoring', 'Find agents that keep running short or sitting unbalanced.'],
  ['Rebalancing', 'Move between excess cash and electronic value as the day requires.'],
  ['Demand planning', 'Salary periods, market days, weekends and holidays.'],
  ['Alerts', 'Notice pressure before the counter has to refuse a customer.'],
];

function LiquiditySection() {
  return (
    <section id="liquidity" className="bg-brand_cream py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">Liquidity</p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              An agent without float cannot serve the customer.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate_grey lg:col-span-5">
            Cash for withdrawals and electronic value for the transactions that need it. When
            people are turned away, trust drops. Liquidity is part of the customer experience.
          </p>
        </div>
        <dl className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {LIQUIDITY.map(([title, body], index) => (
            <div
              key={title}
              className={`border-t-2 py-6 sm:pr-6 lg:pr-0 ${
                index === 0 ? 'border-brand_orange' : 'border-brand_navy/15'
              }`}
            >
              <dt className="text-lg font-bold tracking-tight text-brand_navy">{title}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-slate_grey">{body}</dd>
            </div>
          ))}
        </dl>
        <a href="#consultation" className={`${CTA.ghost} mt-8`}>
          Discuss liquidity management
        </a>
      </div>
    </section>
  );
}

const WATCHED = [
  'Required documentation',
  'Training status',
  'Agent reviews',
  'Operational exceptions',
  'Incidents',
  'Remediation',
];

function ComplianceSection() {
  return (
    <section id="compliance" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
              Risk and compliance
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              Extend the network without losing control.
            </h2>
          </div>
          <div className="max-w-xl lg:col-span-5">
            <p className="text-lg leading-relaxed text-slate_grey">
              Third-party outlets need the principal’s controls, not a lighter version of them. We
              help turn those requirements into agent workflows: know your agent, know your customer,
              KYC, customer due diligence and enhanced due diligence where the principal requires it.
            </p>
            <p className="mt-4 text-sm font-semibold text-brand_navy">
              Policies, then training, monitoring, escalation, review and improvement.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-12 border-t border-brand_navy/15 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-lg font-bold tracking-tight text-brand_navy">Fraud awareness includes</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate_grey">
              Identity misuse, transaction manipulation, social engineering, suspicious cash
              activity, unauthorised activity, internal fraud, customer impersonation and other
              unusual behaviour.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-slate_grey">
              Records follow the principal’s rules and applicable law, including Bank of Ghana agency
              banking and AML/CFT/CPF expectations. This page is not a legal opinion.
            </p>
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold tracking-tight text-brand_navy">What gets watched</h3>
            <ol className="mt-4 grid sm:grid-cols-2 sm:gap-x-10">
              {WATCHED.map((item, index) => (
                <li key={item} className="flex items-baseline gap-4 border-b border-brand_navy/10 py-3">
                  <span className="font-mono text-xs font-semibold tabular-nums text-slate_grey">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold text-brand_navy">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

const QUESTIONS = [
  'Who needs liquidity?',
  'Which agents are inactive?',
  'Where is demand increasing?',
  'Where are exceptions occurring?',
  'Which locations need a visit?',
  'Which agents are behind on training or documents?',
];

function TechnologySection() {
  return (
    <section id="technology" className="bg-brand_cream py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">Technology</p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              See the network more clearly.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate_grey lg:col-span-5">
            Distributed outlets outgrow spreadsheets and phone calls. The useful questions are
            operational, and they should be answerable from the principal’s systems — not from a
            demo we have not been asked to show.
          </p>
        </div>
        <ol className="mt-12 grid border-t border-brand_navy/15 sm:grid-cols-2">
          {QUESTIONS.map((item, index) => (
            <li key={item} className="border-b border-brand_navy/10 py-6 sm:pr-10">
              <span className="font-mono text-xs font-semibold tabular-nums text-slate_grey">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 text-xl font-bold tracking-tight text-brand_navy">{item}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate_grey">
          Monitoring, reconciliation and performance views sit with the principal’s authorised
          tools. We discuss how those views are used in the operating model. We do not publish
          live network figures on this site.
        </p>
      </div>
    </section>
  );
}

const EXPERIENCE = [
  ['Clear information', 'People should know what they can ask for at that counter.'],
  ['A confirmation', 'A completed transaction should come with a receipt or confirmation.'],
  ['A complaint path', 'There should be a way to raise a problem.'],
  ['Professional conduct', 'The person at the counter stands for the institution.'],
];

function ExperienceSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
              Customer experience
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              At the counter, the agent is the brand.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate_grey lg:col-span-5">
            Customers do not separate the outlet from the institution. Inclusion is not a longer
            list of pins. It is access people can trust.
          </p>
        </div>
        <dl className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {EXPERIENCE.map(([title, body], index) => (
            <div
              key={title}
              className={`border-t-2 py-6 sm:pr-6 lg:pr-0 ${
                index === 0 ? 'border-brand_orange' : 'border-brand_navy/15'
              }`}
            >
              <dt className="text-lg font-bold tracking-tight text-brand_navy">{title}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-slate_grey">{body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function ModelSection() {
  return (
    <section id="model" className="bg-brand_cream py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">How it works</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
            Simple at the counter. Structured behind it.
          </h2>
        </div>
        <ol className="mt-12 grid border-t border-brand_navy/15 lg:grid-cols-2 lg:gap-x-16">
          {MODEL.map(([n, title, body]) => (
            <li key={n} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-brand_navy/10 py-6">
              <span className="font-mono text-sm font-semibold tabular-nums text-slate_grey">{n}</span>
              <div>
                <h3 className="text-base font-bold text-brand_navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate_grey">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ChooseSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">Why this team</p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              Agency banking is more than the device.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate_grey lg:col-span-5">
            Technology processes the transaction. The network still needs agents, process,
            liquidity, controls and management. The work is built for Ghana’s institutions and
            merchant locations, not a generic branch map.
          </p>
        </div>
        <dl className="mt-14 grid border-t-2 border-brand_navy sm:grid-cols-2 lg:grid-cols-5">
          {FRAMEWORK.map(([title, body], index) => (
            <div
              key={title}
              className={`border-b border-brand_navy/10 py-6 lg:border-b-0 lg:pr-6 ${
                index > 0 ? 'lg:border-l lg:border-brand_navy/10 lg:pl-6' : ''
              }`}
            >
              <dt className="text-xl font-bold tracking-tight text-brand_navy">{title}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-slate_grey">{body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function VerificationLedger() {
  return (
    <section id="verification" className="bg-brand_cream py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
              Find an approved agent
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              There is no agent search on this site yet.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate_grey lg:col-span-5">
            Customers should confirm an outlet against the principal’s own approved-agent records.
            We will publish a directory only when those records are supplied and can be kept
            current. Until then, do not treat a sign, a phone claim, or this page as proof.
          </p>
        </div>
        <div className="mt-12 overflow-hidden border-t-2 border-brand_orange bg-white">
          <div className="grid grid-cols-12 gap-4 bg-brand_navy px-5 py-3 sm:px-6">
            <p className="col-span-7 text-xs font-semibold uppercase tracking-wider text-brand_cyan sm:col-span-8">
              Required before we publish an outlet
            </p>
            <p className="col-span-5 text-right text-xs font-semibold uppercase tracking-wider text-brand_cyan sm:col-span-4">
              Status
            </p>
          </div>
          <dl>
            {LEDGER.map((item, index) => (
              <div
                key={item}
                className="grid grid-cols-12 items-baseline gap-4 border-b border-brand_navy/10 px-5 py-4 last:border-b-0 sm:px-6"
              >
                <dt className="col-span-7 text-sm text-brand_navy sm:col-span-8">
                  <span className="mr-3 font-mono text-xs font-semibold tabular-nums text-slate_grey">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item}
                </dt>
                <dd className="col-span-5 text-right text-xs font-semibold uppercase tracking-wider text-slate_grey sm:col-span-4">
                  Not yet published
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-4 text-sm text-slate_grey">
          {SITE.addressDisplay}. Call {SITE.phoneDisplay} before you travel for a cash transaction.
          Do not send a Ghana Card or banking PIN through this website.
        </p>
      </div>
    </section>
  );
}

const CONSULT_FIELDS = [
  { name: 'name', label: 'Full name', max: 80, half: true },
  { name: 'organisation', label: 'Organisation', max: 80, half: true },
  { name: 'role', label: 'Job title', max: 80, half: true },
  { name: 'phone', label: 'Phone number', max: 40, half: true },
  {
    name: 'interest',
    label: 'I am interested in',
    as: 'select',
    options: [
      { value: 'Agency banking strategy', label: 'Agency banking strategy' },
      { value: 'Agent network management', label: 'Agent network management' },
      { value: 'Agent onboarding', label: 'Agent onboarding' },
      { value: 'Liquidity management', label: 'Liquidity management' },
      { value: 'Technology and monitoring', label: 'Technology and monitoring' },
      { value: 'Compliance and risk', label: 'Compliance and risk' },
      { value: 'Partnership', label: 'Partnership' },
      { value: 'Other', label: 'Other' },
    ],
  },
  {
    name: 'message',
    label: 'Message',
    as: 'textarea',
    placeholder: 'What you want to discuss. No customer PINs or Ghana Card images.',
    max: 500,
  },
];

const AGENT_FIELDS = [
  { name: 'business', label: 'Business name', max: 80, half: true },
  { name: 'type', label: 'Business type', max: 80, half: true },
  { name: 'region', label: 'Region', max: 80, half: true },
  { name: 'district', label: 'District or municipality', max: 80, half: true },
  { name: 'town', label: 'Town or community', max: 80, half: true },
  { name: 'years', label: 'Years in operation', max: 20, half: true },
  { name: 'person', label: 'Contact person', max: 80, half: true },
  { name: 'phone', label: 'Telephone', max: 40, half: true },
  {
    name: 'services',
    label: 'Services you currently offer',
    as: 'textarea',
    placeholder: 'What the business already does. Do not attach identification.',
    max: 300,
    rows: 3,
  },
];

function EnquireSection() {
  return (
    <section id="consultation" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-8xl gap-16 px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
              Institutions
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              Talk about the operating model.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate_grey">
              This opens WhatsApp with your note. By sending it you agree we may use the details
              to respond, as described in the{' '}
              <Link to="/privacy" className="font-semibold text-brand_navy underline-offset-4 hover:underline">
                privacy notice
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-7">
            <WhatsAppQuoteForm
              title="Request a consultation"
              intro="No Ghana Card. No customer credentials."
              submitLabel="Continue on WhatsApp"
              fields={CONSULT_FIELDS}
              buildMessage={(v) =>
                `Hello, I would like to discuss agency banking support.\nName: ${v.name}\nOrganisation: ${v.organisation}\nRole: ${v.role}\nPhone: ${v.phone}\nInterest: ${v.interest}\nMessage: ${v.message}`
              }
            />
          </div>
        </div>
        <div id="agent-interest" className="grid items-start gap-10 border-t border-brand_teal/15 pt-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
              Prospective agents
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-brand_navy sm:text-5xl sm:leading-[1.08]">
              Tell us about the business.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate_grey">
              Applications are subject to eligibility, due diligence and the principal’s decision.
              Sending this form does not appoint you as an agent.
            </p>
          </div>
          <div className="lg:col-span-7">
            <WhatsAppQuoteForm
              title="Agent interest"
              intro="Business details only. Identification is handled later, offline, under the principal’s process."
              submitLabel="Submit interest on WhatsApp"
              fields={AGENT_FIELDS}
              buildMessage={(v) =>
                `Hello, I would like to register interest in becoming an agent.\nBusiness: ${v.business}\nType: ${v.type}\nRegion: ${v.region}\nDistrict: ${v.district}\nTown: ${v.town}\nYears: ${v.years}\nContact: ${v.person}\nPhone: ${v.phone}\nCurrent services: ${v.services}`
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section id="notice" className="bg-brand_cream py-16 sm:py-20">
      <div className="mx-auto max-w-3xl border-l-2 border-brand_orange px-4 py-1 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">Notice</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy">
          Regulatory information
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate_grey">
          <p>
            Delivery on Demand provides agency-banking support, operational and network-management
            services according to its contracts. Unless a regulatory authorisation is expressly
            stated and can be checked, this website does not present the company as a bank,
            specialised deposit-taking institution, electronic money issuer or licensed payment
            service provider.
          </p>
          <p>
            We do not independently accept deposits, issue electronic money, or perform other
            regulated financial services merely by supporting an agency programme. Where those
            services are offered, they sit with the applicable principal.
          </p>
          <p>
            Agents work under their agency agreement, the principal’s procedures, transaction
            limits, identification rules, and applicable law, including Bank of Ghana agency
            banking and AML/CFT/CPF guidance and the Payment Systems and Services Act, 2019 (Act
            987). Availability varies by principal, location, eligibility and network conditions.
          </p>
          <p>
            Nothing here guarantees agent approval, agent income, that a transaction will always
            be available, or a licence that has not been granted. It is not financial advice and
            it does not replace the principal’s terms. Legal and compliance review should confirm
            any future claim about licences, partnerships, agent numbers, volumes or certifications
            before it is published.
          </p>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-brand_navy py-16 sm:py-20">
      <NavyField id="closing-dots" />
      <div className="relative mx-auto flex max-w-8xl flex-col gap-8 border-t-2 border-brand_orange px-4 pt-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to strengthen an agency network?
          </h2>
          <p className="mt-3 max-w-xl text-lg text-white/75">
            Extend reach. Support agents. Improve liquidity. Keep the controls. Serve customers
            more reliably.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#consultation" className={CTA.primary}>
            Talk to us
          </a>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-white/40 bg-transparent px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

const AgencyBankingDetails = () => (
  <>
    <JumpBar />
    <WhatSection />
    <WhySection />
    <WhoSection />
    <InstitutionsSection />
    <AgentsSection />
    <OnboardingSection />
    <NetworkSection />
    <LiquiditySection />
    <ComplianceSection />
    <TechnologySection />
    <ExperienceSection />
    <ModelSection />
    <ChooseSection />
    <BankingPartnersSection />
    <VerificationLedger />
    <div className="bg-white">
      <FAQSection
        ids={BANKING_FAQ_IDS}
        kicker="Questions"
        title="Agency banking, in plain terms."
        intro="Answers describe the model. They do not confirm a live principal at this outlet."
      />
    </div>
    <EnquireSection />
    <Disclaimer />
    <ClosingCta />
  </>
);

export default AgencyBankingDetails;
