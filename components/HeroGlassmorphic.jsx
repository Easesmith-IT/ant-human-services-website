'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Sliders, 
  Search, 
  Award,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function HeroGlassmorphic() {
  const [roleMode, setRoleMode] = useState('employer'); // 'employer' | 'candidate'
  const [headcount, setHeadcount] = useState(15);
  const [searchQuery, setSearchQuery] = useState('');

  // Calculations for live estimation
  const slaDays = headcount > 35 ? '3 - 5 Days' : '24 - 48 Hours';
  const preScreenedCount = Math.floor(headcount * 4.2);
  const guaranteePeriod = headcount > 20 ? '180-Day SLA' : '90-Day Free Replacement';

  return (
    <section className="relative pt-12 pb-24 lg:pt-16 lg:pb-28 bg-gradient-to-b from-white via-slate-50/80 to-slate-100 text-[#0F172A] overflow-hidden">
      
      {/* BACKGROUND LIGHT AURORA GLOW ORBS */}
      <div className="aurora-orb-light-red -top-20 -left-20 animate-pulse"></div>
      <div className="aurora-orb-light-blue top-1/3 -right-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* LIGHT GLASS ROLE TOGGLE SWITCHER */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/80 shadow-xs backdrop-blur-md">
            <button
              onClick={() => setRoleMode('employer')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading font-bold text-sm transition-all cursor-pointer ${
                roleMode === 'employer'
                  ? 'bg-[#0B1B2D] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#0B1B2D] hover:bg-slate-300/50'
              }`}
            >
              <Building2 className={`w-4 h-4 ${roleMode === 'employer' ? 'text-[#DC2626]' : ''}`} />
              For Employers: Scale Workforce
            </button>
            <button
              onClick={() => setRoleMode('candidate')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading font-bold text-sm transition-all cursor-pointer ${
                roleMode === 'candidate'
                  ? 'bg-[#DC2626] text-white shadow-md shadow-red-600/20'
                  : 'text-slate-700 hover:text-[#DC2626] hover:bg-slate-300/50'
              }`}
            >
              <Users className="w-4 h-4 text-white" />
              For Candidates: Find Opportunities
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT HERO TEXT COLUMN */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs uppercase tracking-widest border border-red-200 shadow-xs">
              <Award className="w-4 h-4 text-[#DC2626]" />
              Varanasi HQ &bull; Pan-India Sourcing Network
            </div>

            {roleMode === 'employer' ? (
              <>
                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0B1B2D] leading-[1.15] tracking-tight">
                  Deploy Vetted <span className="gradient-text-red">Workforce & Talent</span> for Enterprise Scale
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                  ANT Human Services empowers corporate clients in Varanasi and across India with compliant contract manpower, bulk hiring drives, and executive direct hiring.
                </p>
              </>
            ) : (
              <>
                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0B1B2D] leading-[1.15] tracking-tight">
                  Empowering <span className="gradient-text-red">Careers & Opportunity</span> Across India
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                  Connecting job seekers in Varanasi, UP, and nationwide with top-tier corporate employers. 100% free placement service with zero registration charges.
                </p>
              </>
            )}

            {/* LIGHT GLASS PHILOSOPHY STEPPER */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-slate-100 text-slate-800">
                  <Users className="w-4 h-4 text-slate-600" /> People
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-slate-100 text-slate-800">
                  <Building2 className="w-4 h-4 text-slate-600" /> Employment
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-slate-100 text-slate-800">
                  <Sparkles className="w-4 h-4 text-slate-600" /> Opportunity
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#DC2626] text-white shadow-md shadow-red-600/20">
                  <Award className="w-4 h-4 text-white" /> Growth
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/employers"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-lg shadow-red-600/25 hover:-translate-y-0.5 transition-all text-base cursor-pointer"
              >
                <Building2 className="w-5 h-5 text-white" />
                Request Manpower Quote
              </Link>
              <Link
                href="/candidates"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 font-heading font-bold text-[#0B1B2D] bg-white border-2 border-slate-200 hover:border-[#0B1B2D] rounded-xl shadow-xs hover:-translate-y-0.5 transition-all text-base cursor-pointer"
              >
                <Users className="w-5 h-5 text-[#DC2626]" />
                Explore Employment Roles
              </Link>
            </div>

          </div>

          {/* RIGHT LIGHT GLASS CALCULATOR CARD */}
          <div className="lg:col-span-5 relative">
            
            {roleMode === 'employer' ? (
              /* EMPLOYER LIGHT WIZARD */
              <div className="glass-panel-light p-8 rounded-3xl border border-slate-200/90 shadow-xl relative space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">Employer Estimator</span>
                    <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">Turnaround & SLA Calculator</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-200">
                    <Sliders className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                      <span>Workforce Required:</span>
                      <span className="text-[#DC2626] font-heading font-extrabold text-lg">{headcount} Workers / Staff</span>
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
                    <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="text-[10px] uppercase font-bold text-slate-500">Deployment SLA</div>
                      <div className="font-heading font-extrabold text-lg text-[#0B1B2D]">{slaDays}</div>
                    </div>
                    <div className="p-3.5 bg-red-50 rounded-2xl border border-red-100">
                      <div className="text-[10px] uppercase font-bold text-[#DC2626]">Verified Candidates</div>
                      <div className="font-heading font-extrabold text-lg text-[#DC2626]">{preScreenedCount} Profiles</div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#0B1B2D] text-white rounded-xl text-xs flex items-center justify-between">
                    <span>Statutory SLA Guarantee:</span>
                    <span className="font-bold text-[#DC2626]">{guaranteePeriod}</span>
                  </div>
                </div>

                <Link
                  href="/employers"
                  className="w-full py-4 px-4 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-red-600/20 cursor-pointer"
                >
                  Lock In Estimate & Request Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              /* CANDIDATE LIGHT FINDER */
              <div className="glass-panel-light p-8 rounded-3xl border border-slate-200/90 shadow-xl relative space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">Candidate Finder</span>
                    <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">Search Active Openings</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-200">
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
                      className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#DC2626]"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                      <div>
                        <strong className="block text-[#0B1B2D] font-heading">FDMS & Computer Operator</strong>
                        <span className="text-slate-500">Auto Dealership &bull; Varanasi</span>
                      </div>
                      <span className="font-bold text-[#DC2626]">₹18k-24k/mo</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                      <div>
                        <strong className="block text-[#0B1B2D] font-heading">Territory Sales Manager</strong>
                        <span className="text-slate-500">FMCG Distribution &bull; Eastern UP</span>
                      </div>
                      <span className="font-bold text-[#DC2626]">₹35k-50k/mo</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/candidates"
                  className="w-full py-4 px-4 font-heading font-bold text-white bg-[#0B1B2D] hover:bg-[#16263D] rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  Explore All Positions <ArrowRight className="w-4 h-4 text-[#DC2626]" />
                </Link>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
