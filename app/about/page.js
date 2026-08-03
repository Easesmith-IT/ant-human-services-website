import Image from 'next/image';
import Link from 'next/link';
import PhilosophyChain from '@/components/PhilosophyChain';
import { MapPin, ShieldCheck, Target, HeartHandshake, Award, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Us | ANT Human Services - Varanasi Recruitment & Staffing Agency',
  description: 'Learn about ANT Human Services, our brand philosophy, Varanasi headquarters, and how we connect talent with opportunity across India.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Strategic Precision",
      desc: "We rigorously match candidates based on verified skills, experience, and organizational cultural fit."
    },
    {
      icon: ShieldCheck,
      title: "100% Statutory Compliance",
      desc: "Full adherence to labor laws, EPF, ESI, and payroll governance for complete employer peace of mind."
    },
    {
      icon: HeartHandshake,
      title: "Candidate Empathy",
      desc: "Strict adherence to ethical recruitment standards—zero candidate registration fees and genuine career growth guidance."
    },
    {
      icon: Award,
      title: "Scalable Execution",
      desc: "Capability to handle single specialized white-collar placements or mass 500+ contract labor drives seamlessly."
    }
  ];

  return (
    <div className="py-12 lg:py-20 space-y-20 bg-white">
      
      {/* HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC2626]">
            Our Story & Values
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#0B1B2D]">
            About <span className="gradient-text-red">ANT Human Services</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Headquartered in Varanasi, Uttar Pradesh, ANT Human Services is a premier recruitment, staffing, and manpower solutions organization. We exist to empower businesses with workforce capacity and transform individual careers.
          </p>
        </div>
      </section>

      {/* BRAND PHILOSOPHY SECTION */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs border border-red-200">
                <MapPin className="w-3.5 h-3.5" /> Rooted in Varanasi, UP
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1B2D]">
                Beyond a "Job Consultancy": A Strategic Workforce Partner
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Many agencies operate purely as transactional job brokers. <strong>ANT Human Services</strong> was founded to redefine recruitment in regional and national markets.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We sell to both sides of the market: helping business clients solve complex labor bottlenecks and helping job seekers unlock dignified, growth-oriented employment opportunities.
              </p>

              <div className="pt-2">
                <h4 className="font-heading font-bold text-xs text-[#0B1B2D] uppercase tracking-wider mb-2">
                  Our Central Philosophy:
                </h4>
                <PhilosophyChain />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/indian_workforce.jpg"
                  alt="ANT Human Services Indian Workforce Team"
                  width={600}
                  height={450}
                  className="object-cover w-full h-[400px]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC2626]">
            Foundational Guiding Principles
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1B2D]">
            The Pillars of ANT Human Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4 hover:border-red-300">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* GEOGRAPHIC & MARKET SCOPE */}
      <section className="py-20 bg-slate-100/80 text-[#0B1B2D] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
            Varanasi Headquarters with Pan-India Sourcing Capability
          </h2>
          <p className="text-slate-800 font-medium max-w-3xl mx-auto text-base leading-relaxed">
            Our strategic position in Varanasi allows us to tap into rich talent pools across Eastern UP, Bihar, and NCR, supplying skilled manpower to manufacturing hubs, automobile dealerships, retail chains, and corporate offices across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all cursor-pointer shadow-md">
              Contact Varanasi Branch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
