'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, DoorOpen, TrendingUp } from 'lucide-react';

export default function MotionPhilosophy() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      icon: Users,
      label: '1. People',
      title: 'Vetted Regional Talent Database',
      desc: 'Sourcing 45,000+ skilled, semi-skilled, and white-collar candidates across Varanasi, Eastern UP, and North India.',
      detail: 'Rigorous multi-stage screening, background verification, and skills assessment to ensure job-ready candidates.'
    },
    {
      id: 1,
      icon: Briefcase,
      label: '2. Employment',
      title: 'Direct & Contract Placements',
      desc: 'Connecting workers with reputable corporate clients across Automobile, Manufacturing, FMCG, and Retail.',
      detail: 'Full labor law adherence, EPF/ESI statutory compliance, and worker safety protocols handled end-to-end.'
    },
    {
      id: 2,
      icon: DoorOpen,
      label: '3. Opportunity',
      title: 'Unlocking Career Progression',
      desc: 'Creating dignity of labor for blue-collar workers and strategic growth paths for white-collar professionals.',
      detail: 'Zero registration fee policy for candidates with ongoing workplace performance support.'
    },
    {
      id: 3,
      icon: TrendingUp,
      label: '4. Growth',
      title: 'Scalable Enterprise Expansion',
      desc: 'Building sustainable workforce capacity for business clients while uplifting regional economies.',
      detail: '24-48 HR turnaround SLA and replacement guarantees ensuring continuous business performance.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC2626]">
            Our Core Value-Chain
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0B1B2D]">
            The Brand Philosophy Engine
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-normal">
            Click or tap each phase to explore how ANT Human Services connects talent to long-term business growth.
          </p>
        </div>

        {/* STEPPER TABS - CLEAN 1-COL ON MOBILE, 4-COL ON DESKTOP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            return (
              <motion.button
                key={s.id}
                onClick={() => setActiveStep(idx)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden min-h-[48px] ${
                  isActive 
                    ? 'bg-[#0B1B2D] text-white border-[#0B1B2D] shadow-md' 
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-[#DC2626] text-white' : 'bg-white text-[#DC2626] border border-slate-200'}`}>
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-ping" />}
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm truncate">{s.label}</div>
              </motion.button>
            );
          })}
        </div>

        {/* ACTIVE STEP CARD DETAILS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-50 via-red-50/20 to-white border border-slate-200 shadow-md flex flex-col-reverse lg:grid lg:grid-cols-12 gap-6 items-center"
          >
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left w-full">
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#DC2626] px-3 py-1 bg-red-50 rounded-full border border-red-200 inline-block">
                Phase 0{activeStep + 1} Benchmark
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-[#0B1B2D]">
                {steps[activeStep].title}
              </h3>
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed font-normal">
                {steps[activeStep].desc}
              </p>
              <p className="text-slate-500 text-xs sm:text-sm italic font-light pt-1">
                &ldquo;{steps[activeStep].detail}&rdquo;
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end shrink-0">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-[#0B1B2D] text-white flex items-center justify-center shadow-lg border-4 border-white">
                {(() => {
                  const ActiveIcon = steps[activeStep].icon;
                  return <ActiveIcon className="w-8 h-8 sm:w-12 sm:h-12 text-[#DC2626]" />;
                })()}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
