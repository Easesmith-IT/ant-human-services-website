import MotionHero from '@/components/MotionHero';
import MotionPhilosophy from '@/components/MotionPhilosophy';
import ImpactCounters from '@/components/ImpactCounters';
import MotionCapabilities from '@/components/MotionCapabilities';
import GlassInfoSection from '@/components/GlassInfoSection';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Car, 
  ShoppingBag, 
  Briefcase
} from 'lucide-react';

export default function HomePage() {
  const industries = [
    { icon: Car, title: "Automobile & FDMS", desc: "Dealership operators, service technicians & sales managers." },
    { icon: Building2, title: "Manufacturing & Engineering", desc: "Lathe operators, assembly line workers & supervisors." },
    { icon: ShoppingBag, title: "Retail & FMCG", desc: "Store managers, merchandisers & territory sales teams." },
    { icon: Briefcase, title: "Office & Corporate Services", desc: "Accountants, HR executives & data entry specialists." },
  ];

  return (
    <div className="space-y-0 bg-[#FAFBFD] text-[#0F172A] w-full max-w-full overflow-x-hidden">
      
      {/* 1. DYNAMIC ANIMATED LIGHT HERO WITH TAB SWITCHER & LIVE CALCULATOR */}
      <MotionHero />

      {/* 2. FLOATING IMPACT METRICS */}
      <ImpactCounters />

      {/* 3. INTERACTIVE BRAND PHILOSOPHY ENGINE (People -> Employment -> Opportunity -> Growth) */}
      <MotionPhilosophy />

      {/* 4. FILTERABLE CAPABILITIES GRID WITH HOVER MOTION */}
      <MotionCapabilities />

      {/* 5. CORPORATE GOVERNANCE & TRUST SECTION */}
      <GlassInfoSection />

      {/* 6. WHY PARTNER WITH ANT HUMAN SERVICES */}
      <section className="py-16 sm:py-24 bg-slate-100/70 relative border-t border-slate-200/80 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 relative w-full">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white w-full">
                <Image
                  src="/images/indian_workforce.jpg"
                  alt="ANT Indian Workforce Team"
                  width={600}
                  height={450}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  loading="lazy"
                  className="object-cover w-full h-[300px] sm:h-[420px]"
                />
              </div>
              <div className="relative sm:absolute -bottom-4 sm:-bottom-6 right-0 sm:-right-6 bg-[#0B1B2D] text-white p-5 rounded-2xl shadow-xl w-full sm:max-w-xs mt-3 sm:mt-0 border border-slate-800">
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#DC2626]">Pan-India Network</div>
                <div className="text-xs text-slate-300 mt-1 font-light">
                  Connecting regional & national talent to corporate opportunities across India.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 sm:space-y-6 pt-4 sm:pt-0">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC2626]">
                Why Partner With Us
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0B1B2D] tracking-tight">
                Built for Corporate Precision & Candidate Growth
              </h2>

              <div className="space-y-3 sm:space-y-4 pt-1">
                <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 border border-red-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1B2D]">Full Labor & EPF/ESI Compliance</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal">We handle contract payroll, statutory compliance, background checks, and worker safety protocols.</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1B2D]">Blue-Collar & White-Collar Mastery</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal">Specialized sourcing channels for factory workers, FDMS computer operators, accountants, and senior managers.</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 border border-red-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1B2D]">Rapid Deployment SLA</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal">Pre-screened candidate pools enable fast turnaround for urgent staffing demands and mass hiring drives.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TARGET SECTORS WE POWER */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2.5">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC2626]">
              Target Sectors
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0B1B2D]">
              Industries Powered by ANT Human Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:border-[#DC2626] transition-all group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-white rounded-2xl shadow-xs text-[#DC2626] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0B1B2D] mb-1.5">{ind.title}</h3>
                  <p className="text-xs text-slate-600 font-normal">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. HIGH-CONTRAST LIGHT THEME CTA BANNER */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-100 to-white text-[#0B1B2D] border-t border-slate-200 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#DC2626] font-bold text-[11px] sm:text-xs uppercase tracking-widest border border-red-200">
            <Building2 className="w-4 h-4 text-[#DC2626]" /> Pan-India Client & Candidate Desk
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0B1B2D] max-w-3xl mx-auto leading-tight tracking-tight">
            Ready to Build Your Workforce Strategy with ANT Human Services?
          </h2>
          
          <p className="text-slate-800 font-medium text-xs sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Connect directly with our Pan-India recruitment team. Whether you are an employer needing 50+ workers or a professional seeking employment, we are here.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full">
            <Link
              href="/employers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-lg shadow-red-600/25 transition-all text-sm sm:text-base cursor-pointer min-h-[48px]"
            >
              For Employers: Request Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="/candidates"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 font-heading font-bold text-white bg-[#0B1B2D] hover:bg-[#16263D] rounded-xl shadow-md transition-all text-sm sm:text-base cursor-pointer min-h-[48px]"
            >
              For Candidates: Register Profile
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
