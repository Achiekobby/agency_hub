import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_ITEMS = [
  {
    id: 'phone',
    label: 'Call us',
    value: '+233 123 456 789',
    href: 'tel:+233123456789',
    icon: Phone,
    color: 'from-smart_blue to-sapphire',
    bg: 'bg-smart_blue/10',
    copyValue: '+233123456789',
  },
  {
    id: 'email',
    label: 'Email us',
    value: 'info@agencyhubgh.com',
    href: 'mailto:info@agencyhubgh.com',
    icon: Mail,
    color: 'from-sapphire to-regal_navy',
    bg: 'bg-sapphire/10',
    copyValue: 'info@agencyhubgh.com',
  },
  {
    id: 'location',
    label: 'Visit us',
    value: 'Accra, Greater Accra',
    href: 'https://maps.google.com/?q=Accra+Greater+Accra+Ghana',
    icon: MapPin,
    color: 'from-regal_navy to-prussian_blue',
    bg: 'bg-regal_navy/10',
    copyValue: 'Accra, Greater Accra, Ghana',
  },
];

const Contact = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopy = (id, value) => {
    navigator.clipboard?.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form:', formState);
  };

  useEffect(()=>{
    window.scrollTo(0,0)
    return () => {
      window.scrollTo(0,0)
    }
  },[])

  return (
    <div className="min-h-screen bg-slate_grey-900/10">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-regal_navy/10 px-4 py-2 text-sm font-semibold text-regal_navy">
            <MessageCircle className="h-4 w-4" />
            <span>We'd love to hear from you</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-prussian_blue sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate_grey">
            Call, email, or drop by. We're here to help with logistics and banking.
          </p>
        </motion.div>

        {/* Contact cards - creative bento-style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid gap-6 sm:grid-cols-3"
        >
          {CONTACT_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <a
                href={item.href}
                target={item.id === 'location' ? '_blank' : undefined}
                rel={item.id === 'location' ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate_grey-900/10 bg-white shadow-lg shadow-prussian_blue/5 transition-all duration-300 hover:border-regal_navy/20 hover:shadow-xl hover:shadow-regal_navy/10">
                  <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />
                  <div className="flex flex-1 flex-col p-8">
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                    >
                      <item.icon className="h-7 w-7 text-prussian_blue" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate_grey">
                      {item.label}
                    </span>
                    <span className="mt-2 text-xl font-bold text-prussian_blue group-hover:text-regal_navy">
                      {item.value}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-smart_blue">
                      {item.id === 'phone' && 'Tap to call'}
                      {item.id === 'email' && 'Tap to email'}
                      {item.id === 'location' && 'View on map'}
                      <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                  </div>
                </div>
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCopy(item.id, item.copyValue);
                }}
                className="absolute right-4 top-4 rounded-lg p-2 text-slate_grey opacity-0 transition-opacity hover:bg-slate_grey-900/10 hover:text-prussian_blue group-hover:opacity-100"
                title="Copy"
              >
                {copiedId === item.id ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* One-liner strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-prussian_blue px-8 py-6 text-white"
        >
          <span className="flex items-center gap-2 font-medium">
            <Phone className="h-5 w-5" />
            +233 123 456 789
          </span>
          <span className="hidden text-white/40 sm:inline">|</span>
          <span className="flex items-center gap-2 font-medium">
            <Mail className="h-5 w-5" />
            info@agencyhubgh.com
          </span>
          <span className="hidden text-white/40 sm:inline">|</span>
          <span className="flex items-center gap-2 font-medium">
            <MapPin className="h-5 w-5" />
            Accra, Greater Accra
          </span>
        </motion.div>

        {/* Contact form + hours */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid gap-10 lg:grid-cols-5"
        >
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate_grey-900/10 bg-white p-8 shadow-lg sm:p-10">
              <h2 className="text-2xl font-bold text-prussian_blue">Send a message</h2>
              <p className="mt-2 text-slate_grey">
                Fill in the form and we'll get back to you as soon as we can.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-prussian_blue">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border-2 border-slate_grey-900/10 bg-slate_grey-900/5 px-4 py-3 text-prussian_blue placeholder:text-slate_grey/50 focus:border-smart_blue focus:outline-none focus:ring-2 focus:ring-smart_blue/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-prussian_blue">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border-2 border-slate_grey-900/10 bg-slate_grey-900/5 px-4 py-3 text-prussian_blue placeholder:text-slate_grey/50 focus:border-smart_blue focus:outline-none focus:ring-2 focus:ring-smart_blue/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-prussian_blue">
                    Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="How can we help?"
                    rows={5}
                    className="mt-2 w-full resize-none rounded-xl border-2 border-slate_grey-900/10 bg-slate_grey-900/5 px-4 py-3 text-prussian_blue placeholder:text-slate_grey/50 focus:border-smart_blue focus:outline-none focus:ring-2 focus:ring-smart_blue/20"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-smart_blue px-6 py-3 font-semibold text-white shadow-lg shadow-smart_blue/25 hover:bg-smart_blue-600"
                >
                  Send message
                  <Send className="h-5 w-5" />
                </motion.button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-slate_grey-900/10 bg-white p-8 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-regal_navy/10 p-3">
                  <Clock className="h-6 w-6 text-regal_navy" />
                </div>
                <h3 className="text-lg font-bold text-prussian_blue">Opening hours</h3>
              </div>
              <ul className="mt-6 space-y-3 text-slate_grey">
                <li className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span className="font-medium text-prussian_blue">8:00 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-prussian_blue">9:00 AM – 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-slate_grey">Closed</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate_grey-900/10 bg-gradient-to-br from-regal_navy/5 to-smart_blue/5 p-8">
              <p className="text-sm font-medium text-slate_grey">
                Prefer to talk? Call us at{' '}
                <a href="tel:+233123456789" className="font-bold text-smart_blue hover:underline">
                  +233 123 456 789
                </a>{' '}
                or email{' '}
                <a
                  href="mailto:info@agencyhubgh.com"
                  className="font-bold text-smart_blue hover:underline"
                >
                  info@agencyhubgh.com
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
