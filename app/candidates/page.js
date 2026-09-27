import { HeartHandshake } from 'lucide-react';
import CandidateApplicationForm from '@/components/CandidateApplicationForm';

export const metadata = {
  title: 'For Job Seekers | Apply & Register Profile - ANT Human Services',
  description: 'Connect with top employer opportunities in Varanasi, UP, and across India. 100% free placement services for job seekers with zero registration charges.',
};

export default function CandidatesPage() {
  const jobSectors = [
    {
      title: "FDMS & Computer Operators",
      desc: "Field Data Management System roles in automobile dealerships, retail, and office environments.",
      badge: "White-Collar"
    },
    {
      title: "Sales & Marketing Executives",
      desc: "Field sales, territory sales managers, telemarketing, and distribution roles.",
      badge: "Sales"
    },
    {
      title: "Accounts & Tally Operators",
      desc: "GST billing, ledger management, Tally Prime accounting, and financial clerical roles.",
      badge: "Finance"
    },
    {
      title: "Industrial & Factory Staff",
      desc: "Lathe operators, assembly line workers, warehouse staff, and technicians.",
      badge: "Blue-Collar"
    }
  ];

  return (
    <div className="py-12 lg:py-20 space-y-20 bg-slate-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-16 border border-slate-200 shadow-md text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs uppercase tracking-wider border border-red-200">
            <HeartHandshake className="w-4 h-4" /> 100% Free Candidate Services
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#0B1B2D]">
            Accelerate Your Career with <span className="gradient-text-red">ANT Human Services</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We connect job seekers in Varanasi, Uttar Pradesh, and across India with reputable corporate employers. We strictly follow ethical recruitment—no registration charges or hidden fees.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC2626]">Opportunities We Source For</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1B2D]">Key Employment Roles Available</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobSectors.map((sector, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4 hover:border-[#DC2626] transition-all">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626]">{sector.badge}</span>
              <h3 className="font-heading font-bold text-lg text-[#0B1B2D]">{sector.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{sector.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CandidateApplicationForm />
      </section>
    </div>
  );
}
