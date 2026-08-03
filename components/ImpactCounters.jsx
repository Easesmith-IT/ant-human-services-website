'use client';

import { motion } from 'framer-motion';
import { UserCheck, Building2, Database, Clock, TrendingUp } from 'lucide-react';

export default function ImpactCounters() {
  const stats = [
    { 
      icon: UserCheck, 
      number: '12,500+', 
      label: 'Successful Placements', 
      desc: 'Across Blue & White Collar Roles' 
    },
    { 
      icon: Building2, 
      number: '380+', 
      label: 'Corporate Clients', 
      desc: 'Manufacturing, Retail & Automobile' 
    },
    { 
      icon: Database, 
      number: '45,000+', 
      label: 'Verified Candidate Pool', 
      desc: 'Active Pan-India Sourced Talent' 
    },
    { 
      icon: Clock, 
      number: '99%', 
      label: 'On-Time SLA Guarantee', 
      desc: 'Rapid 24-48 HR Deployment' 
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-300 transition-all text-center space-y-3 group cursor-pointer"
              >
                {/* ICON BADGE */}
                <div className="w-14 h-14 mx-auto rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>

                {/* BIG STAT NUMBER */}
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#0B1B2D] tracking-tight">
                  {stat.number}
                </div>

                {/* RED LABEL */}
                <div className="font-heading font-extrabold text-xs text-[#DC2626] uppercase tracking-wider">
                  {stat.label}
                </div>

                {/* SUBTEXT */}
                <div className="text-xs text-slate-600 font-medium">
                  {stat.desc}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
