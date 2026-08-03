import Link from 'next/link';
import { 
  UserCheck, 
  Users, 
  Layers, 
  HardHat, 
  Laptop, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: 'Services & Capabilities | ANT Human Services',
  description: 'Explore ANT Human Services complete suite of workforce solutions: Permanent Hiring, Contract Staffing, Bulk Recruitment, Blue-Collar Labor, White-Collar Sourcing, and RPO.',
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: 'permanent',
      icon: UserCheck,
      title: 'Permanent Hiring & Direct Placement',
      tagline: 'Precision talent acquisition for critical specialist and management roles.',
      details: [
        'Executive & Senior Management Search',
        'Domain Specialist & Technical Role Sourcing',
        'Multi-stage skill evaluation & cultural alignment',
        '90-Day Free Replacement Guarantee'
      ]
    },
    {
      id: 'contract',
      icon: Users,
      title: 'Contract Staffing & Manpower Supply',
      tagline: 'Flexible workforce scaling for seasonal spikes & project agility.',
      details: [
        'On-demand temp & contract worker deployment',
        'Complete labor law compliance (EPF, ESI, Bonus)',
        'ANT manages payroll & HR admin end-to-end',
        'Rapid replacement coverage within 24-48 hours'
      ]
    },
    {
      id: 'bulk',
      icon: Layers,
      title: 'Bulk & Mass Recruitment Drives',
      tagline: 'High-volume recruitment pipelines for plant expansion and sales drives.',
      details: [
        'Mass assessment centers & walk-in recruitment drives',
        'Onboarding 50 to 500+ candidates efficiently',
        'Retail, BPO, Logistics & Assembly Line bulk staffing',
        'Structured candidate filtering and documentation'
      ]
    },
    {
      id: 'blue-collar',
      icon: HardHat,
      title: 'Blue-Collar & Industrial Labor',
      tagline: 'Reliable skilled, semi-skilled, and general workforce for factories & plants.',
      details: [
        'CNC/Lathe Machine Operators, Welders & Technicians',
        'Assembly line workers & warehouse staff',
        'Safety background verification & physical fitness checks',
        'Shift management & site supervisor support'
      ]
    },
    {
      id: 'white-collar',
      icon: Laptop,
      title: 'White-Collar & Office Administration',
      tagline: 'Desk professionals powering core corporate operations.',
      details: [
        'FDMS (Field Data Management System) & Computer Operators',
        'Territory Sales Managers & Field Sales Executives',
        'Accounts Executives (GST, Tally Prime, Invoicing)',
        'HR Personnel, Receptionists & Office Assistants'
      ]
    },
    {
      id: 'rpo',
      icon: ShieldCheck,
      title: 'Workforce Management & RPO',
      tagline: 'Outsourced recruitment management for complete operational peace of mind.',
      details: [
        'Dedicated Account Manager assigned to your account',
        'Complete recruitment lifecycle management',
        'Background checks & candidate credential verification',
        'Customized SLA and headcount reporting'
      ]
    }
  ];

  return (
    <div className="py-12 lg:py-20 space-y-20 bg-slate-50">
      
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC2626]">
          Comprehensive Capabilities
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#0B1B2D]">
          Recruitment &bull; Staffing &bull; Workforce Solutions
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          From single executive headhunting to mass contract manpower supply, explore how ANT Human Services builds workforce capacity for businesses across India.
        </p>
      </section>

      {/* DETAILED SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all space-y-6 flex flex-col justify-between hover:border-red-300">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500">
                    {service.tagline}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/employers"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-heading font-bold text-sm text-[#0B1B2D] bg-slate-100 hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer"
                  >
                    Request {service.title.split(' ')[0]} Staffing <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* RECRUITMENT WORKFLOW */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC2626]">
              Our Proven Methodology
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1B2D]">
              How ANT Human Services Delivers Talent
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="font-heading font-extrabold text-3xl text-[#DC2626] mb-2">01</div>
              <h4 className="font-heading font-bold text-lg text-[#0B1B2D] mb-2">Requirement Profiling</h4>
              <p className="text-xs text-slate-600">We analyze job descriptions, skill criteria, headcount numbers, and SLA urgency.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="font-heading font-extrabold text-3xl text-[#DC2626] mb-2">02</div>
              <h4 className="font-heading font-bold text-lg text-[#0B1B2D] mb-2">Targeted Sourcing</h4>
              <p className="text-xs text-slate-600">Screening through our 45,000+ candidate database and regional recruitment drives.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="font-heading font-extrabold text-3xl text-[#DC2626] mb-2">03</div>
              <h4 className="font-heading font-bold text-lg text-[#0B1B2D] mb-2">Vetting & Compliance</h4>
              <p className="text-xs text-slate-600">Skills verification, background checks, and compliance documentation.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="font-heading font-extrabold text-3xl text-[#DC2626] mb-2">04</div>
              <h4 className="font-heading font-bold text-lg text-[#0B1B2D] mb-2">Deployment & Guarantee</h4>
              <p className="text-xs text-slate-600">Seamless candidate joining with ongoing replacement coverage guarantees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-bg-dark rounded-3xl p-10 sm:p-16 text-white text-center space-y-6">
          <Sparkles className="w-10 h-10 text-[#DC2626] mx-auto" />
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl max-w-2xl mx-auto">
            Need a Customized Manpower Proposal for Your Business?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base">
            Speak directly with our staffing specialists at the Varanasi Headquarters.
          </p>
          <Link
            href="/employers"
            className="inline-flex items-center gap-2 px-8 py-4 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl text-base transition-all cursor-pointer shadow-lg shadow-red-600/25"
          >
            Submit Employer Hiring Request <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
