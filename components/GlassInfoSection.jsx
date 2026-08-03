import { ShieldCheck, Database, Zap, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GlassInfoSection() {
  const infoCards = [
    {
      icon: ShieldCheck,
      title: "100% Statutory & Labor Law Compliance",
      badge: "Compliance Guaranteed",
      desc: "We manage complete EPF, ESI, Factory Act registration, contractor licensing, and labor compliance so corporate clients operate with zero legal liability."
    },
    {
      icon: Database,
      title: "45,000+ Pre-Screened Candidate Database",
      badge: "Pan-India Sourcing",
      desc: "Our proprietary candidate database across major industrial and corporate hubs in India enables fast matching for both blue-collar and white-collar roles."
    },
    {
      icon: Zap,
      title: "24-48 Hour Deployment SLA",
      badge: "Rapid Turnaround",
      desc: "Urgent manpower demands, factory shift coverage, and mass hiring drives are deployed rapidly nationwide with zero compromise on candidate vetting quality."
    },
    {
      icon: Award,
      title: "90 - 180 Day Replacement SLA",
      badge: "Risk-Free Partnership",
      desc: "Every direct hire comes backed by dedicated account management and a free candidate replacement guarantee to ensure long-term operational continuity."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 text-[#0F172A] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs uppercase tracking-widest border border-red-200">
            <ShieldCheck className="w-4 h-4 text-[#DC2626]" /> Corporate Governance & Trust
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0B1B2D] tracking-tight">
            Why Leading Companies Partner with <span className="gradient-text-red">ANT Human Services</span>
          </h2>
          <p className="text-slate-600 text-lg font-normal">
            We deliver complete workforce infrastructure—combining rigorous candidate vetting, statutory legal compliance, and rapid turnaround SLAs across India.
          </p>
        </div>

        {/* 4 LIGHT GLASS INFORMATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx} 
                className="glass-panel-light p-8 sm:p-10 rounded-3xl border border-slate-200/90 space-y-5 glass-panel-light-hover group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-200 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1B2D]">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* TRUST BANNER BAR */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
            <span>Ethical Recruitment &bull; <strong>100% Free Candidate Placement Services</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
            <span>Pan-India Sourcing Network &bull; <strong>Multi-State Deployment</strong></span>
          </div>
          <Link href="/about" className="font-heading font-bold text-sm text-[#DC2626] hover:text-[#B91C1C] inline-flex items-center gap-1 cursor-pointer">
            Explore About Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
