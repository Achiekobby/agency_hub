import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Plane, Building2, ArrowRight, Sparkles, Globe2, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [selectedCourier, setSelectedCourier] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleTrackPackage = (e) => {
    e.preventDefault();
    if (trackingNumber && selectedCourier) {
      console.log(`Tracking ${trackingNumber} with ${selectedCourier}`);
    }
  };

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="tracking" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand_navy via-brand_navy/95 to-[#001B2E] pt-6 pb-32">
      {/* Animated cosmic background */}
      <div className="absolute inset-0">
        {/* Animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-brand_orange/30 to-brand_gold/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-brand_red/20 to-brand_orange/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-brand_gold/20 to-brand_cream/15 blur-3xl"
        />
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 600,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand_orange to-brand_gold rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-brand_gold/30 rounded-full px-5 py-3 text-sm font-semibold text-white">
                  <Sparkles className="h-4 w-4 text-brand_gold" />
                  <span>Ghana's Premier Service Provider</span>
                </div>
              </div>
            </motion.div>

            {/* Main Heading with stagger effect */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
              >
                Your Trusted Partner for{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand_gold via-brand_orange to-amber-300">
                    Logistics
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-brand_orange/40 to-brand_gold/40 -z-0"
                  />
                </span>
                {' & '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand_red via-red-400 to-brand_orange">
                    Banking
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-brand_red/40 to-brand_orange/40 -z-0"
                  />
                </span>
                {' '}in Ghana
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-brand_gold/20 rounded-lg px-4 py-2">
                  <Plane className="h-4 w-4 text-brand_gold" />
                  <span className="text-sm text-brand_cream font-medium">DHL & FedEx Agent</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-brand_gold/20 rounded-lg px-4 py-2">
                  <Building2 className="h-4 w-4 text-brand_orange" />
                  <span className="text-sm text-brand_cream font-medium">4 Banking Partners</span>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-blue-100/80 leading-relaxed max-w-xl"
              >
                Agency Banking for <span className="font-semibold text-white">Access Bank, Fidelity Bank, Absa & Ecobank</span>
              </motion.p>
            </div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Globe2, label: 'Global Reach', gradient: 'from-brand_orange to-brand_gold', iconColor: 'text-brand_gold' },
                { icon: Shield, label: 'Secure', gradient: 'from-brand_red to-red-500', iconColor: 'text-brand_red' },
                { icon: Zap, label: 'Fast Service', gradient: 'from-brand_gold to-amber-400', iconColor: 'text-brand_gold' },
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 rounded-xl blur-xl transition-opacity`} />
                    <div className="relative bg-white/5 backdrop-blur-sm border border-brand_gold/20 rounded-xl p-4 hover:bg-white/10 transition-all">
                      <item.icon className={`h-6 w-6 ${item.iconColor} mb-2`} />
                      <p className="text-sm font-medium text-white">{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Tracking Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Floating decoration */}
            <motion.div
              animate={floatingAnimation}
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl"
            />

              <div className="relative">
                {/* Glassmorphism Card */}
                <div className="relative bg-white/10 backdrop-blur-2xl border border-brand_gold/30 rounded-3xl p-8 shadow-2xl">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand_orange/10 via-brand_gold/10 to-brand_red/10 rounded-3xl" />
                
                <div className="relative space-y-6">
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand_orange to-brand_gold mb-4 shadow-lg shadow-brand_orange/30">
                      <Package className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Track Your Package</h2>
                    <p className="text-brand_cream/70">Real-time tracking at your fingertips</p>
                  </div>

                  <form onSubmit={handleTrackPackage} className="space-y-4">
                    {/* Tracking Input */}
                    <div className="relative group">
                      <input
                        type="text"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Enter Tracking Number"
                        className="w-full h-14 px-6 text-base text-white placeholder-brand_cream placeholder:font-medium caret-brand_gold bg-white/10 border border-brand_gold/25 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand_gold focus:border-transparent transition-all"
                      />
                      <motion.div
                        animate={{ scale: isFocused ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-brand_orange/20 to-brand_gold/20 rounded-xl blur-xl -z-10"
                      />
                    </div>

                    {/* Courier Selector */}
                    <div className="grid grid-cols-2 gap-3">
                      {['DHL', 'FedEx'].map((courier) => (
                        <button
                          key={courier}
                          type="button"
                          onClick={() => setSelectedCourier(courier)}
                          className={`relative h-14 rounded-xl font-semibold transition-all ${
                            selectedCourier === courier
                              ? 'bg-gradient-to-r from-brand_orange to-brand_gold text-white shadow-lg shadow-brand_orange/30'
                              : 'bg-white/5 border border-brand_gold/20 text-brand_cream hover:bg-white/10'
                          }`}
                        >
                          {courier}
                        </button>
                      ))}
                    </div>

                    {/* Track Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full h-14 rounded-xl font-bold text-white overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand_red via-brand_orange to-brand_gold" />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand_red/90 via-brand_orange/90 to-brand_gold/90 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative flex items-center justify-center gap-2">
                        Track Now
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </form>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand_gold/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand_gold to-brand_orange">10K+</div>
                      <div className="text-xs text-brand_cream/70">Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand_orange to-brand_red">24/7</div>
                      <div className="text-xs text-brand_cream/70">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-24 text-white" preserveAspectRatio="none" viewBox="0 0 1440 100" fill="none">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0 50 C240 20, 480 80, 720 50 C960 20, 1200 80, 1440 50 L1440 100 L0 100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
