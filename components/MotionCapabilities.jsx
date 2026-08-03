'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  UserCheck, 
  Layers, 
  HardHat, 
  Laptop, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function MotionCapabilities() {
  const [filter, setFilter] = useState('all');

  const capabilities = [
    {
      id: 'contract',
      category: 'contract',
      icon: Users,
      title: 'Contract Staffing & Manpower Supply',
      badge: 'High Demand',
      desc: 'Flexible workforce scaling for seasonal spikes and factory capacity with 100% EPF/ESI statutory liability coverage.',
      bullets: ['On-Demand Worker Scaling', 'Full EPF & ESI Compliance', '24-48 HR SLA Replacement']
    },
    {
      id: 'permanent',
      category: 'white-collar',
      icon: UserCheck,
      title: 'Permanent Direct Hiring',
      badge: 'Executive Search',
      desc: 'Multi-stage skill evaluation and cultural fit assessment for specialist and executive roles with 90-day replacement guarantees.',
      bullets: ['Direct Talent Acquisition', '90-Day Guarantee', 'Executive Headhunting']
    },
    {
      id: 'bulk',
      category: 'mass',
      icon: Layers,
      title: 'Bulk & Mass Recruitment Drives',
      badge: 'High Volume',
      desc: 'Rapid mass recruitment assessment centers to onboard 50 to 500+ candidates for plants, retail, and sales campaigns.',
      bullets: ['Mass Walk-in Drives', '50-500+ Candidates', 'Structured Filtering']
    },
    {
      id: 'blue-collar',
      category: 'blue-collar',
      icon: HardHat,
      title: 'Blue-Collar & Industrial Labor',
      badge: 'Factory Workforce',
      desc: 'CNC/Lathe operators, assembly line workers, welders, and warehouse staff with physical fitness and background checks.',
      bullets: ['CNC & Machine Operators', 'Assembly Line Workers', 'Shift Supervisors']
    },
    {
      id: 'white-collar',
      category: 'white-collar',
      icon: Laptop,
      title: 'White-Collar & Office Administration',
      badge: 'FDMS & Office Staff',
      desc: 'FDMS computer operators, accounts executives, territory sales managers, and administrative personnel.',
      bullets: ['FDMS Dealership Operators', 'Accounts & Tally Prime', 'Sales Managers']
    },
    {
      id: 'rpo',
      category: 'contract',
      icon: ShieldCheck,
      title: 'Workforce Management & RPO',
      badge: 'Turnkey HR',
      desc: 'End-to-end recruitment process outsourcing, background verification, and customized SLA performance reporting.',
      bullets: ['Dedicated Account Manager', 'Background Verifications', 'Turnkey Recruitment']
    }
  ];

  const filteredItems = filter === 'all' 
    ? capabilities 
    : capabilities.filter(c => c.category === filter);

  return (
    <section className="py-24 bg-slate-50 text-[#0F172A] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs uppercase tracking-widest border border-red-200">
            <Sparkles className="w-4 h-4 text-[#DC2626]" /> Complete Capabilities
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0B1B2D] tracking-tight">
            Workforce <span className="gradient-text-red">Solutions Suite</span>
          </h2>
          <p className="text-slate-600 text-lg font-normal">
            Filter our service capabilities to see how ANT Human Services solves complex labor bottlenecks.
          </p>
        </div>

        {/* FILTER CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: 'all', label: 'All Solutions' },
            { id: 'contract', label: 'Contract Staffing' },
            { id: 'white-collar', label: 'White-Collar & FDMS' },
            { id: 'blue-collar', label: 'Blue-Collar Labor' },
            { id: 'mass', label: 'Mass Drives' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#0B1B2D] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ANIMATED CARDS GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map(item => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-red-300 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {item.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {item.bullets.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" /> {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <Link
                      href="/services"
                      className="font-heading font-bold text-xs text-[#DC2626] hover:text-[#B91C1C] inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      Explore Capability <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
