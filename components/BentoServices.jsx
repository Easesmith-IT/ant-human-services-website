import Link from 'next/link';
import { 
  Users, 
  UserCheck, 
  Layers, 
  HardHat, 
  Laptop, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export default function BentoServices() {
  return (
    <section className="py-24 bg-white text-[#0F172A] relative overflow-hidden border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs uppercase tracking-widest border border-red-200">
            <Sparkles className="w-4 h-4 text-[#DC2626]" /> Complete Capabilities
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-[#0B1B2D]">
            Recruitment &bull; Staffing &bull; Workforce Solutions
          </h2>
          <p className="text-slate-600 text-lg font-normal">
            Beyond standard job consultancies. ANT Human Services provides comprehensive end-to-end workforce infrastructure for enterprises and job seekers.
          </p>
        </div>

        {/* ASYMMETRICAL LIGHT BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* BENTO ITEM 1 (LARGE FEATURED: CONTRACT STAFFING) */}
          <div className="lg:col-span-8 glass-panel-light p-8 sm:p-12 rounded-3xl border border-slate-200/90 relative overflow-hidden group glass-panel-light-hover flex flex-col justify-between">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-200">
                  <Users className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  High Demand Solution
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1B2D]">
                  Contract Staffing & Manpower Supply
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-normal max-w-2xl">
                  Flexible, compliant workforce for seasonal spikes, factory expansions, and operational agility. ANT handles contract payroll, statutory EPF/ESI compliance, and worker safety documentation end-to-end.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626]" /> On-Demand Worker Scaling
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626]" /> Full EPF & ESI Compliance
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626]" /> 24-48 HR Replacement
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-heading font-bold text-sm text-[#DC2626] hover:text-[#B91C1C] group-hover:translate-x-1 transition-all cursor-pointer"
              >
                Learn More About Contract Staffing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* BENTO ITEM 2 (PERMANENT HIRING) */}
          <div className="lg:col-span-4 glass-panel-light p-8 rounded-3xl border border-slate-200/90 relative overflow-hidden group glass-panel-light-hover flex flex-col justify-between">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                <UserCheck className="w-6 h-6 text-[#DC2626]" />
              </div>

              <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">
                Permanent Direct Hiring
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Executive & specialist search with rigorous multi-stage vetting and a 90-day free replacement guarantee.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-heading font-bold text-xs text-[#DC2626] hover:text-[#B91C1C] cursor-pointer"
              >
                Executive Placement <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* BENTO ITEM 3 (BULK RECRUITMENT) */}
          <div className="lg:col-span-4 glass-panel-light p-8 rounded-3xl border border-slate-200/90 relative overflow-hidden group glass-panel-light-hover flex flex-col justify-between">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                <Layers className="w-6 h-6 text-[#DC2626]" />
              </div>

              <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">
                Bulk & Mass Drives
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Mass recruitment drives designed to onboard 50 to 500+ workers quickly for plants, retail, and sales campaigns.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-heading font-bold text-xs text-[#DC2626] hover:text-[#B91C1C] cursor-pointer"
              >
                Mass Drives <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* BENTO ITEM 4 (BLUE-COLLAR) */}
          <div className="lg:col-span-4 glass-panel-light p-8 rounded-3xl border border-slate-200/90 relative overflow-hidden group glass-panel-light-hover flex flex-col justify-between">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                <HardHat className="w-6 h-6 text-[#DC2626]" />
              </div>

              <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">
                Blue-Collar & Factory Staff
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                CNC/Lathe machine operators, assembly line technicians, welders, and warehouse logistics workers.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-heading font-bold text-xs text-[#DC2626] hover:text-[#B91C1C] cursor-pointer"
              >
                Factory Manpower <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* BENTO ITEM 5 (WHITE-COLLAR & FDMS) */}
          <div className="lg:col-span-4 glass-panel-light p-8 rounded-3xl border border-slate-200/90 relative overflow-hidden group glass-panel-light-hover flex flex-col justify-between">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                <Laptop className="w-6 h-6 text-[#DC2626]" />
              </div>

              <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">
                White-Collar & FDMS Staff
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Field Data Management System (FDMS) operators for auto dealerships, accountants, and sales executives.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-heading font-bold text-xs text-[#DC2626] hover:text-[#B91C1C] cursor-pointer"
              >
                Office Staffing <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
