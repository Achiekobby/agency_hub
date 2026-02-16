import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Package, Building2 } from 'lucide-react';

const FAQS = [
  {
    id: 1,
    category: 'courier',
    question: 'What courier services do you offer?',
    answer: 'We are authorized agents for DHL Express and FedEx, offering international and domestic shipping, document and parcel delivery, express and economy options, and freight solutions with real-time tracking.',
  },
  {
    id: 2,
    category: 'courier',
    question: 'How can I track my package?',
    answer: 'Use our tracking tool on the homepage by entering your tracking number and selecting your courier (DHL or FedEx). You\'ll get real-time updates on your shipment\'s location and estimated delivery.',
  },
  {
    id: 3,
    category: 'courier',
    question: 'What are your shipping rates?',
    answer: 'Shipping rates vary based on package weight, dimensions, destination, and service type (express or economy). Contact us for a personalized quote or visit our location in Accra for more details.',
  },
  {
    id: 4,
    category: 'courier',
    question: 'Do you ship internationally?',
    answer: 'Yes! Through DHL and FedEx, we ship to over 220 countries and territories worldwide. We handle all customs documentation and provide door-to-door delivery.',
  },
  {
    id: 5,
    category: 'banking',
    question: 'Which banks do you represent?',
    answer: 'We are authorized agency banking partners for Access Bank Ghana, Fidelity Bank Ghana, Absa Bank, and Ecobank Ghana.',
  },
  {
    id: 6,
    category: 'banking',
    question: 'What banking services are available?',
    answer: 'We offer deposits, withdrawals, account support, cash handling, transfers, mobile money services, bill payments, and airtime top-up for all our partner banks.',
  },
  {
    id: 7,
    category: 'banking',
    question: 'Are there transaction limits?',
    answer: 'Transaction limits vary by bank and transaction type. Please visit us or contact us directly for specific limits related to your bank and the service you need.',
  },
  {
    id: 8,
    category: 'general',
    question: 'What are your operating hours?',
    answer: 'We are open Monday to Friday, 8:00 AM - 6:00 PM, and Saturday, 9:00 AM - 3:00 PM. We are closed on Sundays and public holidays.',
  },
  {
    id: 9,
    category: 'general',
    question: 'Where are you located?',
    answer: 'We are located in Accra, Ghana. Please visit our Contact page or call us for detailed directions and address information.',
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const courierFAQs = FAQS.filter(faq => faq.category === 'courier');
  const bankingFAQs = FAQS.filter(faq => faq.category === 'banking');
  const generalFAQs = FAQS.filter(faq => faq.category === 'general');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24 lg:py-28">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'linear-gradient(#1e3a7d 1px, transparent 1px), linear-gradient(90deg, #1e3a7d 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-[#2B4C9D]/6 to-transparent blur-3xl" />
      <div className="absolute -right-32 bottom-1/3 h-80 w-80 rounded-full bg-gradient-to-bl from-smart_blue/6 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-smart_blue/20 bg-white px-4 py-2 text-sm font-semibold text-smart_blue shadow-sm backdrop-blur-sm"
          >
            <HelpCircle className="h-4 w-4" />
            <span>Got questions?</span>
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-prussian_blue sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate_grey">
            Everything you need to know about our courier and banking services.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {/* Courier FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/10 to-red-500/10">
                <Package className="h-5 w-5 text-regal_navy" />
              </div>
              <h3 className="text-xl font-bold text-prussian_blue">Courier Services</h3>
            </div>
            <div className="space-y-3">
              {courierFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full rounded-xl border border-slate-200/80 bg-white p-5 text-left shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-prussian_blue">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openId === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 shrink-0 text-slate_grey" />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {openId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-slate_grey leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Banking FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-600/10">
                <Building2 className="h-5 w-5 text-regal_navy" />
              </div>
              <h3 className="text-xl font-bold text-prussian_blue">Banking Services</h3>
            </div>
            <div className="space-y-3">
              {bankingFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full rounded-xl border border-slate-200/80 bg-white p-5 text-left shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-prussian_blue">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openId === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 shrink-0 text-slate_grey" />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {openId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-slate_grey leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* General FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                <HelpCircle className="h-5 w-5 text-regal_navy" />
              </div>
              <h3 className="text-xl font-bold text-prussian_blue">General Information</h3>
            </div>
            <div className="space-y-3">
              {generalFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full rounded-xl border border-slate-200/80 bg-white p-5 text-left shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-prussian_blue">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openId === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 shrink-0 text-slate_grey" />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {openId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-slate_grey leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-slate-200/80 bg-white p-8 text-center shadow-md"
        >
          <h3 className="text-xl font-bold text-prussian_blue">Still have questions?</h3>
          <p className="mt-2 text-slate_grey">
            Can't find the answer you're looking for? Feel free to reach out to us.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-smart_blue to-regal_navy px-6 py-3 font-semibold text-white shadow-lg shadow-smart_blue/25 transition-all hover:shadow-xl hover:shadow-smart_blue/30"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
