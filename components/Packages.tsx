import React, { useState } from 'react';
import { PACKAGES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Packages: React.FC = () => {
  const [activePackageId, setActivePackageId] = useState('diamond');

  // Get active package data
  const activePackage = PACKAGES.find(p => p.id === activePackageId) || PACKAGES[0];

  return (
    <section id="packages" className="py-24 bg-theme-50 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-theme-100/50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-theme-500 font-bold">Investment</span>
          <h2 className="text-4xl md:text-5xl font-serif text-theme-900 mt-3 mb-6">Collections & Pricing</h2>
          <p className="text-theme-600 max-w-xl mx-auto text-lg">
            Choose the perfect coverage for your day. Simple, transparent packages with no hidden fees.
          </p>
        </div>

        {/* Animated Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex bg-white rounded-full p-1.5 shadow-lg border border-theme-100">
            {PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setActivePackageId(pkg.id)}
                className={cn(
                  "relative px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10 focus:outline-none",
                  activePackageId === pkg.id ? "text-white" : "text-theme-500 hover:text-theme-900"
                )}
              >
                {activePackageId === pkg.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-theme-900 rounded-full shadow-md -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {pkg.name.replace(' Package', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Content Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePackage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-theme-100 max-w-4xl mx-auto flex flex-col md:flex-row">

              {/* Left Side: Summary & Price */}
              <div className="w-full md:w-2/5 bg-theme-900 text-white p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-theme-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                <div className="relative z-10">
                  {activePackage.id === 'diamond' && (
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mb-6">
                      Best Value
                    </div>
                  )}
                  <h3 className="font-serif text-3xl mb-2">{activePackage.name}</h3>
                  <div className="text-5xl font-serif mb-6">{activePackage.price}</div>

                  {activePackage.description && (
                    <p className="text-white/80 font-serif italic text-sm leading-relaxed mb-8 border-l-2 border-white/30 pl-4">
                      {activePackage.description}
                    </p>
                  )}

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 bg-white text-theme-900 rounded-lg text-xs uppercase tracking-widest font-bold hover:bg-theme-100 transition-colors shadow-lg"
                  >
                    Book Now <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Right Side: Features */}
              <div className="w-full md:w-3/5 p-10 md:p-12 bg-white">
                <h4 className="font-serif text-xl text-theme-900 mb-8 border-b border-theme-100 pb-4">What's Included</h4>
                <ul className="grid gap-4">
                  {activePackage.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-theme-50 transition-colors"
                    >
                      <div className="mt-1 p-1 rounded-full bg-green-100 text-green-700 shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-theme-700 text-sm leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <p className="text-theme-400 text-[10px] uppercase tracking-widest">
            All packages include print rights and online gallery
          </p>
        </div>

      </div>
    </section>
  );
};

export default Packages;