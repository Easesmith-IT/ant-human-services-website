import Image from 'next/image';
import Link from 'next/link';
import { Building2, ShieldCheck, Zap, Users, CheckCircle2, Award, ArrowRight, Phone } from 'lucide-react';

export const metadata = {
  title: 'For Employers | Hire Staff & Manpower Supply - ANT Human Services',
  description: 'Request staffing, contract labor, and permanent recruitment from ANT Human Services. Fast 24-48hr turnaround, full labor compliance, and replacement guarantees.',
};

export default function EmployersPage() {
  const benefits = [
    {
      icon: Zap,
      title: "24-48 Hour Deployment SLA",
      desc: "Pre-screened candidate pools allow us to deploy workers and staff rapidly for urgent operational needs."
    },
    {
      icon: ShieldCheck,
      title: "100% Legal & EPF/ESI Compliance",
      desc: "We take full liability for contract payroll, statutory compliance, bonus, and worker safety documentation."
    },
    {
      icon: Award,
      title: "90-Day Free Replacement Guarantee",
      desc: "If a candidate leaves or fails performance standards within 90 days, we replace them at no extra charge."
    },
    {
      icon: Users,
      title: "Blue & White Collar Versatility",
      desc: "Single point of contact for factory labor, warehouse staff, FDMS computer operators, and sales managers."
    }
  ];

  return (
    <div className="py-12 lg:py-20 space-y-20 bg-[#FAFBFD] text-[#0F172A]">
      
      {/* STUNNING FULL-SIZE BACKGROUND IMAGE HERO BANNER FOR INDIAN EMPLOYERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[460px] flex items-center border border-slate-200">
          
          {/* FULL-SIZE BACKGROUND IMAGE */}
          <Image
            src="/images/indian_employer_bg.jpg"
            alt="Indian Corporate & Industrial Employers"
            fill
            className="object-cover object-center"
            priority
          />

          {/* GRADIENT OVERLAY FOR PERFECT HIGH CONTRAST */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B2D]/95 via-[#0B1B2D]/85 to-[#0B1B2D]/40 backdrop-blur-[2px]" />

          {/* HERO CONTENT */}
          <div className="relative z-10 p-8 sm:p-14 max-w-3xl space-y-6 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 text-[#DC2626] font-bold text-xs uppercase tracking-widest border border-red-500/30 backdrop-blur-md">
              <Building2 className="w-4 h-4 text-[#DC2626]" /> B2B Enterprise Workforce Partner &bull; Pan-India
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              Scale Your Workforce with <span className="text-[#DC2626]">Reliable Talent</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              ANT Human Services provides enterprise clients across India with high-quality recruitment, contract staffing, bulk manpower supply, and 100% EPF/ESI statutory labor compliance.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#hiring-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-lg shadow-red-600/30 transition-all text-base cursor-pointer"
              >
                Request Staffing Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#employer-sla"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-heading font-bold text-white bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-md border border-white/20 transition-all text-base cursor-pointer"
              >
                Explore SLA Guarantees
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* WHY BUSINESSES CHOOSE ANT */}
      <section id="employer-sla" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC2626]">
            Employer SLA Guarantees
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1B2D]">
            Why Enterprises Partner with ANT Human Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-[#DC2626] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0B1B2D]">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HIGH-CONTRAST LIGHT THEME EMPLOYER CONSULTATION SECTION */}
      <section id="hiring-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-[#0F172A] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border border-slate-200 shadow-xl">
          
          {/* LEFT HIGH-CONTRAST INFO COLUMN */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block font-heading font-bold text-xs uppercase tracking-widest text-[#DC2626] px-3.5 py-1 bg-red-50 rounded-full border border-red-200">
              Instant Hiring Inquiry
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1B2D] leading-tight">
              Request Staffing & Manpower Quotation
            </h2>

            <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">
              Fill out your company requirements below or call our Pan-India Client Desk directly at <strong className="text-[#DC2626]">+91 98765 43210</strong>. An Account Manager will respond within 2 hours.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-200 text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span>No upfront fee for preliminary candidate shortlisting.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span>Flexible contract or permanent fee arrangements.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span>Pan-India recruitment deployment capacity.</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM COLUMN */}
          <div className="lg:col-span-6 bg-white text-slate-900 p-8 rounded-2xl border border-slate-200 shadow-xl">
            <h3 className="font-heading font-bold text-xl text-[#0B1B2D] mb-4">
              Submit Staffing Requirement
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Organization Name *</label>
                <input type="text" placeholder="e.g. Apex Logistics Ltd." className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Contact Name *</label>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                  <input type="tel" placeholder="+91 98765 00000" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Staffing Model Required *</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]">
                  <option>Contract Staffing & Manpower Supply</option>
                  <option>Permanent Direct Hiring</option>
                  <option>Bulk / Mass Hiring Drive</option>
                  <option>Blue-Collar Factory Workers</option>
                  <option>White-Collar & FDMS Sourcing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Positions & Details *</label>
                <textarea rows={3} placeholder="Number of positions, job titles, and location..." className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required></textarea>
              </div>

              <button type="submit" className="w-full py-3.5 px-6 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-colors text-base shadow-md cursor-pointer">
                Submit Staffing Request
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
