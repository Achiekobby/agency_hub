export const SITE = {
  name: 'Delivery on Demand',
  shortName: 'DOD',
  city: 'Accra',
  area: 'Accra',
  region: 'Greater Accra',
  addressDisplay: 'Accra, Greater Accra',
  phoneDisplay: '+233 123 456 789',
  phoneTel: '+233123456789',
  whatsapp: '233123456789',
  email: 'info@agencyhubgh.com',
  mapsUrl: 'https://maps.google.com/?q=Accra+Greater+Accra+Ghana',
  hoursWeekday: 'Monday–Friday, 8:00 AM – 6:00 PM',
  hoursSaturday: 'Saturday, 9:00 AM – 2:00 PM',
  hoursSunday: 'Sunday closed',
};

export const whatsappHref = (text) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const MESSAGES = {
  localQuote: `Hello, I need a local delivery quote.
Pickup area:
Delivery area:
Parcel type and approximate size:
Preferred pickup time:`,
  businessRateSheet: `Hello, I would like a business rate sheet.
Pickup location:
Common delivery areas:
Typical parcel types:`,
  international: `Hello, I need international shipping assistance.
Destination country:
Parcel type and approximate size:
Contents:`,
  today: `Hello, I need to send a parcel today.
Pickup area:
Destination:
Parcel details:`,
  bankingConsult: `Hello, I would like to discuss agency banking support.
Organisation:
Role:
Interest:
Message:`,
  agentInterest: `Hello, I would like to register interest in becoming an agent.
Business name:
Business type:
Location:
Years in operation:
Contact:`,
  contact: `Hello, I would like to get in touch with the Accra outlet.
What I need:
Details:`,
};

export const localBusinessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  description:
    'Local parcel pickup and delivery in Accra, with international shipping assistance and agency-banking network support. Delivery on Demand is not a bank.',
  telephone: SITE.phoneDisplay,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: 'GH',
  },
  areaServed: {
    '@type': 'City',
    name: SITE.city,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
});

export const NAV_LINKS = [
  { label: 'Local delivery', path: '/local-delivery' },
  { label: 'For business', path: '/business-delivery' },
  { label: 'International', path: '/international-shipping' },
  { label: 'Agency banking', path: '/agency-banking' },
  { label: 'Coverage', path: '/service-area' },
];

export const POLICY_LINKS = [
  { label: 'Prohibited items', path: '/prohibited-items' },
  { label: 'Failed delivery and claims', path: '/claims' },
  { label: 'Privacy', path: '/privacy' },
];

export const CTA = {
  primary:
    'inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand_orange px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand_orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan focus-visible:ring-offset-2',
  secondary:
    'inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-brand_navy bg-white px-5 text-sm font-semibold text-brand_navy transition-colors duration-200 hover:bg-brand_cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan focus-visible:ring-offset-2',
  ghost:
    'inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-brand_navy transition-colors duration-200 hover:text-brand_teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand_cyan',
};

export const FAQS = [
  {
    id: 'areas',
    question: 'Which areas do you deliver to?',
    answer:
      'We operate from an Accra service point in Greater Accra. Coverage is confirmed on each quote. We do not publish a national coverage map. Named neighbourhoods appear here only when we regularly pick up or deliver there.',
  },
  {
    id: 'price',
    question: 'How is the delivery price calculated?',
    answer:
      'Price depends on pickup area, destination, parcel type and size, and the service window. You receive a quotation before anything is booked. The quote states what is included, any redelivery charge, and how long the quote remains valid.',
  },
  {
    id: 'cutoff',
    question: 'What is the daily booking cut-off?',
    answer:
      'Today’s cut-off is confirmed when you request a quote. It depends on remaining capacity and the destination. We do not advertise a fixed public cut-off until it is operationally mapped.',
  },
  {
    id: 'prohibited',
    question: 'Which items are prohibited?',
    answer:
      'Illegal goods, hazardous materials, and items a carrier or rider cannot lawfully carry are refused. If you are unsure, describe the contents before packing. See the prohibited-items page for the working list we use at the outlet.',
  },
  {
    id: 'unavailable',
    question: 'What happens when the recipient is unavailable?',
    answer:
      'We attempt the agreed delivery. If the recipient cannot take the parcel, we apply the failed-delivery rule on your quote — typically a redelivery, a hold at the outlet, or a return to sender. Extra charges may apply and are stated before you book.',
  },
  {
    id: 'redelivery',
    question: 'Is redelivery charged separately?',
    answer:
      'It can be. If a redelivery charge applies, it is written on the quotation. Address changes after booking may also cost extra.',
  },
  {
    id: 'confirmation',
    question: 'How do I receive delivery confirmation?',
    answer:
      'When delivery is completed you receive an update or proof — for example a message, reference, or photograph of handover. The method for that job is confirmed with the quote.',
  },
  {
    id: 'damage',
    question: 'Who is responsible if a parcel is damaged or lost?',
    answer:
      'Condition is recorded at handover and a booking reference is issued. Claims follow the process on our claims page. Liability limits are stated on the quote. We do not describe deliveries as insured unless a current policy is in place for that job.',
  },
  {
    id: 'carriers',
    question: 'Are you an authorised DHL or FedEx location?',
    answer:
      'We do not publish DHL Service Point Partner or FedEx agent status on this site. We help customers prepare and arrange eligible international shipments through approved carrier channels. Who contracts with you, who issues the waybill, and who handles claims is confirmed before you send.',
  },
  {
    id: 'what-agency',
    question: 'What is agency banking?',
    answer:
      'Agency banking is a distribution model through which an appropriately authorised financial institution engages approved third parties to provide specified financial services to customers on its behalf.',
  },
  {
    id: 'is-bank',
    question: 'Is Delivery on Demand a bank?',
    answer:
      'No. Delivery on Demand is not represented here as a bank, specialised deposit-taking institution, electronic money issuer or licensed payment service provider. On this site the role is agency-banking solutions, operations and network support for participating institutions and agent networks.',
  },
  {
    id: 'principal',
    question: 'Who is the principal in agency banking?',
    answer:
      'The principal is the appropriately authorised financial institution responsible for the regulated financial service. That may include an eligible bank, specialised deposit-taking institution, electronic money issuer, payment service provider or other authorised institution. We publish a named principal on this site only when that relationship can be verified.',
  },
  {
    id: 'who-agent',
    question: 'Who is an agent?',
    answer:
      'An agent is an approved third party that provides permitted services to customers on behalf of a principal under an agency arrangement. An agent does not become a bank by joining a network.',
  },
  {
    id: 'who-can',
    question: 'Who can become an agent?',
    answer:
      'Requirements vary by principal. Applicants may be assessed on ownership, location, operating history, financial capacity, documentation, personnel, security and suitability. Submitting an interest form does not guarantee approval or appointment.',
  },
  {
    id: 'transactions',
    question: 'What services can banking agents provide?',
    answer:
      'Only services authorised by the participating principal. Those may include eligible deposits, withdrawals, transfers, bill or merchant payments, balance enquiries and other approved services. Nothing is listed as available at this outlet until the principal’s list is published.',
  },
  {
    id: 'working-capital',
    question: 'Does an agent need working capital?',
    answer:
      'Usually yes. Agents need enough cash and electronic float to complete customer transactions. The amount depends on expected activity, the service mix and the principal’s requirements.',
  },
  {
    id: 'agent-income',
    question: 'How do agents earn income?',
    answer:
      'Approved agents may receive commissions or other compensation under the commercial terms set by their principal. Income is not guaranteed and depends on those terms and on transaction activity.',
  },
  {
    id: 'monitoring',
    question: 'How are agents monitored?',
    answer:
      'Monitoring depends on the principal. It may include transaction review, outlet visits, documentation checks, liquidity monitoring, compliance reviews and performance assessment.',
  },
  {
    id: 'genuine',
    question: 'How do customers know whether an agent is genuine?',
    answer:
      'Confirm the agent through the official channels or approved-agent records of the relevant principal. Do not rely only on a sign, a verbal claim or this website until those records are published here.',
  },
  {
    id: 'failed-tx',
    question: 'What happens when a transaction fails?',
    answer:
      'Keep the transaction information you have and follow the complaint process of the relevant principal. Agents should escalate through the principal’s procedure and should not promise a resolution they cannot confirm.',
  },
  {
    id: 'kyc',
    question: 'Who is responsible for KYC and AML compliance?',
    answer:
      'The principal retains important compliance responsibilities and sets the procedures agents must follow, including KYC, customer due diligence and, where required, enhanced due diligence. Agents operate under that training, those procedures and the agency agreement.',
  },
  {
    id: 'deposits',
    question: 'Does Delivery on Demand hold customer deposits?',
    answer:
      'No. Unless a separate authorisation is obtained and disclosed, deposits and other regulated financial services belong to the participating principal, not to Delivery on Demand.',
  },
  {
    id: 'id',
    question: 'Which identification is required?',
    answer:
      'Identification follows the principal’s rules and is checked at the outlet. Do not upload a Ghana Card, PIN or banking credential through this website.',
  },
  {
    id: 'data',
    question: 'How is my personal data used?',
    answer:
      'We use names, telephone numbers, addresses and parcel or enquiry details to quote, deliver, or respond to an agency-banking enquiry. See the privacy notice for purpose, retention and how to request a correction.',
  },
];

export const HOME_FAQ_IDS = ['areas', 'price', 'is-bank', 'principal', 'deposits', 'confirmation'];

export const BANKING_FAQ_IDS = [
  'what-agency',
  'is-bank',
  'principal',
  'who-agent',
  'who-can',
  'transactions',
  'working-capital',
  'agent-income',
  'monitoring',
  'genuine',
  'failed-tx',
  'kyc',
  'deposits',
  'id',
];

export const faqJsonLd = (ids) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.filter((item) => !ids || ids.includes(item.id)).map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});
