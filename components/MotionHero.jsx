'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Sliders, 
  Search, 
  Award,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

export default function MotionHero() {
  const [roleMode, setRoleMode] = useState('employer'); // 'employer' | 'candidate'
  const [headcount, setHeadcount] = useState(20);
  const [searchQuery, setSearchQuery] = useState('');

  // Calculations for live estimation
  const slaDays = headcount > 35 ? '3 - 5 Days' : '24 - 48 Hours';
  const preScreenedCount = Math.floor(headcount * 4.5);
  const guaranteePeriod = headcount > 20 ? '180-Day Guarantee' : '90-Day Free Replacement';

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100/90 text-[#0F172A] overflow-hidden w-full max-w-full">
      
      {/* FLOATING AMBIENT LIGHT AURORA ORBS WITH FRAMER MOTION */}
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="aurora-orb-light-red -top-20 -left-20 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="aurora-orb-light-blue top-1/3 -right-20 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* DYNAMIC TAB SWITCHER WITH SPRING LAYOUT */}
        <div className="flex justify-center mb-8 sm:mb-12 w-full">
          <div className="inline-flex flex-col sm:flex-row p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/80 shadow-xs backdrop-blur-md relative w-full sm:w-auto">
            
            <button
              onClick={() => setRoleMode('employer')}
              className={`relative z-10 flex items-center justify-center gap-2 px-4 sm:px-7 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm transition-colors cursor-pointer w-full sm:w-auto min-h-[44px] ${
                roleMode === 'employer' ? 'text-white' : 'text-slate-700 hover:text-[#0B1B2D]'
              }`}
            >
              <Building2 className={`w-4 h-4 shrink-0 ${roleMode === 'employer' ? 'text-[#DC2626]' : ''}`} />
              <span>For Employers: Scale Workforce</span>
              {roleMode === 'employer' && (
                <motion.div
                  layoutId="roleTabBg"
                  className="absolute inset-0 bg-[#0B1B2D] rounded-xl z-[-1] shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>

            <button
              onClick={() => setRoleMode('candidate')}
              className={`relative z-10 flex items-center justify-center gap-2 px-4 sm:px-7 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm transition-colors cursor-pointer w-full sm:w-auto min-h-[44px] ${
                roleMode === 'candidate' ? 'text-white' : 'text-slate-700 hover:text-[#DC2626]'
              }`}
            >
              <Users className="w-4 h-4 shrink-0 text-white" />
              <span>For Candidates: Find Jobs</span>
              {roleMode === 'candidate' && (
                <motion.div
                  layoutId="roleTabBg"
                  className="absolute inset-0 bg-[#DC2626] rounded-xl z-[-1] shadow-md shadow-red-600/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT ANIMATED HERO TEXT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#DC2626] font-bold text-[11px] sm:text-xs uppercase tracking-widest border border-red-200 shadow-xs max-w-full text-left"
            >
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-ping shrink-0" />
              <span className="truncate">Pan-India Recruitment & Staffing Network</span>
            </motion.div>

            <AnimatePresence mode="wait">
              {roleMode === 'employer' ? (
                <motion.div
                  key="emp-head"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0B1B2D] leading-[1.15] tracking-tight">
                    Deploy Vetted <span className="gradient-text-red">Workforce & Talent</span> Across India
                  </h1>
                  <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                    ANT Human Services empowers corporate clients nationwide with compliant contract manpower, bulk hiring drives, and direct white-collar placements.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="cand-head"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0B1B2D] leading-[1.15] tracking-tight">
                    Empowering <span className="gradient-text-red">Careers & Growth</span> Nationwide
                  </h1>
                  <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                    Connecting job seekers across India with top-tier corporate employers. 100% free placement service with zero registration charges.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* QUICK HIGHLIGHT BADGES */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626] shrink-0" /> EPF / ESI Statutory Compliance
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626] shrink-0" /> 24-48 Hour Deployment SLA
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626] shrink-0" /> 45,000+ Sourced Candidates
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/employers"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-lg shadow-red-600/25 transition-all text-sm sm:text-base cursor-pointer min-h-[48px]"
                >
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  Request Manpower Quote
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/candidates"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 font-heading font-bold text-[#0B1B2D] bg-white border-2 border-slate-200 hover:border-[#0B1B2D] rounded-xl shadow-xs transition-all text-sm sm:text-base cursor-pointer min-h-[48px]"
                >
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC2626]" />
                  Explore Employment Openings
                </Link>
              </motion.div>
            </div>

          </motion.div>

          {/* RIGHT ANIMATED INTERACTIVE GLASS CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full"
          >
            <AnimatePresence mode="wait">
              {roleMode === 'employer' ? (
                /* EMPLOYER INTERACTIVE CARD */
                <motion.div
                  key="emp-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel-light p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl relative space-y-5 w-full"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">Employer Estimator</span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0B1B2D]">Turnaround & SLA Calculator</h3>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-200 shrink-0">
                      <Sliders className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                        <span>Workforce Required:</span>
                        <span className="text-[#DC2626] font-heading font-extrabold text-base sm:text-lg">{headcount} Workers</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={headcount}
                        onChange={(e) => setHeadcount(parseInt(e.target.value))}
                        className="w-full accent-[#DC2626] cursor-pointer h-2 bg-slate-200 rounded-lg"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <motion.div 
                        key={slaDays}
                        initial={{ scale: 0.95, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="p-3 bg-slate-50 rounded-2xl border border-slate-200"
                      >
                        <div className="text-[10px] uppercase font-bold text-slate-500">Deployment SLA</div>
                        <div className="font-heading font-extrabold text-base sm:text-lg text-[#0B1B2D]">{slaDays}</div>
                      </motion.div>

                      <motion.div 
                        key={preScreenedCount}
                        initial={{ scale: 0.95, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="p-3 bg-red-50 rounded-2xl border border-red-100"
                      >
                        <div className="text-[10px] uppercase font-bold text-[#DC2626]">Verified Candidate Pool</div>
                        <div className="font-heading font-extrabold text-base sm:text-lg text-[#DC2626]">{preScreenedCount} Profiles</div>
                      </motion.div>
                    </div>

                    <div className="p-3 bg-[#0B1B2D] text-white rounded-xl text-xs flex items-center justify-between shadow-xs">
                      <span>Statutory Guarantee:</span>
                      <span className="font-bold text-[#DC2626]">{guaranteePeriod}</span>
                    </div>
                  </div>

                  <Link
                    href="/employers"
                    className="w-full py-3.5 px-4 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-red-600/20 text-sm cursor-pointer min-h-[44px]"
                  >
                    Lock In Estimate & Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ) : (
                /* CANDIDATE INTERACTIVE CARD */
                <motion.div
                  key="cand-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel-light p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl relative space-y-5 w-full"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">Job Explorer</span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0B1B2D]">Search Active Openings</h3>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-200 shrink-0">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="e.g. FDMS Operator, Accountant..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>

                    <div className="space-y-2">
                      <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center text-xs cursor-pointer"
                      >
                        <div>
                          <strong className="block text-[#0B1B2D] font-heading">FDMS & Computer Operator</strong>
                          <span className="text-slate-500">Auto Dealership &bull; Metro & Regional</span>
                        </div>
                        <span className="font-bold text-[#DC2626]">₹18k-24k/mo</span>
                      </motion.div>

                      <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center text-xs cursor-pointer"
                      >
                        <div>
                          <strong className="block text-[#0B1B2D] font-heading">Territory Sales Manager</strong>
                          <span className="text-slate-500">FMCG Distribution &bull; Corporate</span>
                        </div>
                        <span className="font-bold text-[#DC2626]">₹35k-50k/mo</span>
                      </motion.div>
                    </div>
                  </div>

                  <Link
                    href="/candidates"
                    className="w-full py-3.5 px-4 font-heading font-bold text-white bg-[#0B1B2D] hover:bg-[#16263D] rounded-xl flex items-center justify-center gap-2 transition-all text-sm cursor-pointer min-h-[44px]"
                  >
                    Explore All Positions <ArrowRight className="w-4 h-4 text-[#DC2626]" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
