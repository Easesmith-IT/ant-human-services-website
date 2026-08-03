'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PhilosophyChain from './PhilosophyChain';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Sliders, 
  Search, 
  Sparkles,
  Award
} from 'lucide-react';

export default function HeroInteractive() {
  const [roleMode, setRoleMode] = useState('employer'); // 'employer' | 'candidate'
  const [headcount, setHeadcount] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Calculation logic for Employer Wizard
  const timeToDeploy = headcount > 30 ? '3 - 5 Days' : '24 - 48 Hours';
  const preScreenedCount = Math.floor(headcount * 3.8);
  const replacementGuarantee = headcount > 15 ? '180-Day Guarantee' : '90-Day Free Replacement';

  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ROLE MODE SWITCHER TAB */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/80 shadow-xs">
            <button
              onClick={() => setRoleMode('employer')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-heading font-bold text-sm transition-all cursor-pointer ${
                roleMode === 'employer'
                  ? 'bg-[#0B1B2D] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#0B1B2D]'
              }`}
            >
              <Building2 className={`w-4 h-4 ${roleMode === 'employer' ? 'text-[#DC2626]' : ''}`} />
              I am an Employer (Hire Staff)
            </button>
            <button
              onClick={() => setRoleMode('candidate')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-heading font-bold text-sm transition-all cursor-pointer ${
                roleMode === 'candidate'
                  ? 'bg-[#DC2626] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#DC2626]'
              }`}
            >
              <Users className="w-4 h-4" />
              I am a Job Seeker (Find Jobs)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs uppercase tracking-wider border border-red-200">
              <Award className="w-4 h-4" />
              Varanasi HQ &bull; Pan-India Workforce Network
            </div>

            {roleMode === 'employer' ? (
              <>
                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0B1B2D] leading-[1.15] tracking-tight">
                  Deploy Vetted <span className="gradient-text-red">Workforce & Talent</span> for Enterprise Scale
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  ANT Human Services empowers corporate clients in Varanasi and across India with compliant contract manpower, bulk hiring drives, and direct white-collar placements.
                </p>
              </>
            ) : (
              <>
                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0B1B2D] leading-[1.15] tracking-tight">
                  Unlock Dignified <span className="gradient-text-red">Employment & Growth</span> Opportunities
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Connecting job seekers in Varanasi, Eastern UP, and nationwide with top corporate employers. 100% free placement service with zero registration charges.
                </p>
              </>
            )}

            {/* Brand Philosophy Chain */}
            <div className="pt-1">
              <PhilosophyChain />
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/employers"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-lg shadow-red-600/25 hover:-translate-y-0.5 transition-all text-base cursor-pointer"
              >
                <Building2 className="w-5 h-5 text-white" />
                Request Manpower Quote
              </Link>
              <Link
                href="/candidates"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-heading font-bold text-[#0B1B2D] bg-white border-2 border-slate-200 hover:border-[#0B1B2D] rounded-xl shadow-xs hover:-translate-y-0.5 transition-all text-base cursor-pointer"
              >
                <Users className="w-5 h-5 text-[#DC2626]" />
                Register Career Profile
              </Link>
            </div>
          </div>

          {/* RIGHT INTERACTIVE CARD COLUMN */}
          <div className="lg:col-span-5">
            {roleMode === 'employer' ? (
              /* EMPLOYER WIZARD CARD */
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6 relative">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">Employer Estimator</span>
                    <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">Instant Turnaround Calculator</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                    <Sliders className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                      <span>Positions Required:</span>
                      <span className="text-[#DC2626] font-heading font-extrabold text-base">{headcount} Workers / Staff</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={headcount}
                      onChange={(e) => setHeadcount(parseInt(e.target.value))}
                      className="w-full accent-[#DC2626] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="text-[10px] uppercase font-bold text-slate-500">Estimated SLA</div>
                      <div className="font-heading font-extrabold text-lg text-[#0B1B2D]">{timeToDeploy}</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                      <div className="text-[10px] uppercase font-bold text-[#DC2626]">Verified Candidates</div>
                      <div className="font-heading font-extrabold text-lg text-[#DC2626]">{preScreenedCount} Profiles</div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-900 text-white rounded-xl text-xs flex items-center justify-between">
                    <span>Guarantee SLA:</span>
                    <span className="font-bold text-[#DC2626]">{replacementGuarantee}</span>
                  </div>
                </div>

                <Link
                  href="/employers"
                  className="w-full py-3.5 px-4 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  Lock In Estimate & Submit Inquiry <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              /* CANDIDATE QUICK FINDER CARD */
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6 relative">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">Job Seeker Explorer</span>
                    <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">Search Active Openings</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. FDMS Operator, Accountant, Sales..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                      <div>
                        <strong className="block text-slate-800 font-heading">FDMS & Computer Operator</strong>
                        <span className="text-slate-500">Auto Dealership &bull; Varanasi</span>
                      </div>
                      <span className="font-bold text-[#DC2626]">₹18k-24k/mo</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                      <div>
                        <strong className="block text-slate-800 font-heading">Territory Sales Manager</strong>
                        <span className="text-slate-500">FMCG &bull; Eastern UP</span>
                      </div>
                      <span className="font-bold text-[#DC2626]">₹35k-50k/mo</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/candidates"
                  className="w-full py-3.5 px-4 font-heading font-bold text-white bg-[#0B1B2D] hover:bg-[#16263D] rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  View All Active Openings <ArrowRight className="w-4 h-4 text-[#DC2626]" />
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
