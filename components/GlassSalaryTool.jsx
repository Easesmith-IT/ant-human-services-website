'use client';

import { useState } from 'react';
import { Sliders, Sparkles } from 'lucide-react';

export default function GlassSalaryTool() {
  const [role, setRole] = useState('fdms');
  const [experience, setExperience] = useState('mid');

  const salaryBenchmarks = {
    'fdms': { entry: '₹15,000 - ₹19,000', mid: '₹19,000 - ₹26,000', senior: '₹26,000 - ₹36,000' },
    'sales-exec': { entry: '₹18,000 - ₹24,000', mid: '₹24,000 - ₹35,000', senior: '₹36,000 - ₹55,000' },
    'territory-mgr': { entry: '₹30,000 - ₹40,000', mid: '₹40,000 - ₹60,000', senior: '₹60,000 - ₹90,000' },
    'accountant': { entry: '₹16,000 - ₹22,000', mid: '₹22,000 - ₹32,000', senior: '₹35,000 - ₹48,000' },
    'machine-op': { entry: '₹14,000 - ₹18,000', mid: '₹18,000 - ₹24,000', senior: '₹25,000 - ₹34,000' },
  };

  const currentBenchmark = salaryBenchmarks[role]?.[experience] || '₹20,000 - ₹30,000';

  return (
    <section className="py-24 bg-[#070F1E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel-dark p-8 sm:p-14 rounded-3xl border border-white/15 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-400 font-bold text-xs uppercase tracking-widest border border-red-500/30">
              <Sparkles className="w-4 h-4 text-[#DC2626]" /> Transparency & Benchmark
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Interactive Salary & Market Rates Tool
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              Explore real-time salary benchmarks and compensation data across key sectors in Varanasi, UP, and major regional hiring markets.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Select Target Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-900 text-white px-4 py-3 rounded-xl border border-white/15 text-sm focus:outline-none focus:border-[#DC2626]"
                >
                  <option value="fdms">FDMS / Computer Operator (Auto & Retail)</option>
                  <option value="sales-exec">Sales & Marketing Executive</option>
                  <option value="territory-mgr">Territory Sales Manager</option>
                  <option value="accountant">Accounts & Tally Operator</option>
                  <option value="machine-op">Industrial Machine Operator</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Experience Tier</label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-slate-900 text-white px-4 py-3 rounded-xl border border-white/15 text-sm focus:outline-none focus:border-[#DC2626]"
                >
                  <option value="entry">Entry Level (0 - 2 Years)</option>
                  <option value="mid">Mid Level (2 - 5 Years)</option>
                  <option value="senior">Senior Level (5+ Years)</option>
                </select>
              </div>
            </div>

            <div className="p-6 bg-black/40 rounded-2xl border border-white/10 text-center space-y-1">
              <div className="text-xs uppercase font-bold tracking-widest text-slate-400">Estimated Benchmark Range</div>
              <div className="font-heading font-extrabold text-3xl text-[#DC2626]">
                {currentBenchmark} <span className="text-sm font-normal text-slate-300">/ month</span>
              </div>
              <div className="text-[10px] text-slate-400 pt-1">*Based on regional deployment metrics in Varanasi & UP markets</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
