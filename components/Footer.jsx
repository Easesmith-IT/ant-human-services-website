import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070F1E] text-slate-300 border-t border-slate-800 text-sm">
      
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* BRAND COLUMN (4 COLS) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block bg-white p-3 rounded-2xl shadow-md border border-white/20">
              <Image 
                src="/images/logo.png" 
                alt="ANT Human Services Logo" 
                width={220}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              Connecting Talent. Creating Opportunities. ANT Human Services is a premier Pan-India recruitment, contract staffing, and workforce management partner.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/30">
              <ShieldCheck className="w-4 h-4 text-[#DC2626]" />
              <span>100% EPF/ESI Compliant & Licensed Agency</span>
            </div>
          </div>

          {/* CORE SERVICES (3 COLS) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-extrabold text-[#F8FAFC] text-base uppercase tracking-wider">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services" className="hover:text-[#DC2626] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" /> Permanent Direct Hiring
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#DC2626] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" /> Contract Staffing & Manpower
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#DC2626] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" /> Bulk & Mass Recruitment Drives
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#DC2626] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" /> Blue-Collar & Factory Staffing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#DC2626] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" /> White-Collar & FDMS Sourcing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#DC2626] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" /> Complete RPO & Turnkey HR
                </Link>
              </li>
            </ul>
          </div>

          {/* NAVIGATION (2 COLS) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-extrabold text-[#F8FAFC] text-base uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/" className="hover:text-[#DC2626] transition-colors">Home Page</Link></li>
              <li><Link href="/about" className="hover:text-[#DC2626] transition-colors">About Our Values</Link></li>
              <li><Link href="/services" className="hover:text-[#DC2626] transition-colors">Services Suite</Link></li>
              <li><Link href="/employers" className="hover:text-[#DC2626] transition-colors">For Employers</Link></li>
              <li><Link href="/candidates" className="hover:text-[#DC2626] transition-colors">For Job Seekers</Link></li>
              <li><Link href="/contact" className="hover:text-[#DC2626] transition-colors">Contact Helpdesk</Link></li>
            </ul>
          </div>

          {/* PAN-INDIA OPERATIONS (3 COLS) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-extrabold text-[#F8FAFC] text-base uppercase tracking-wider">
              Pan-India Operations
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>
                  <strong>Corporate Office:</strong><br />
                  Civil Lines, Varanasi, UP - 221002<br />
                  <span className="text-[#DC2626] font-semibold">Pan-India Deployment Network</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DC2626] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors font-medium">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DC2626] shrink-0" />
                <a href="mailto:contact@anthumanservices.com" className="hover:text-white transition-colors font-medium">
                  contact@anthumanservices.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM FINE PRINT BAR */}
      <div className="border-t border-slate-800/80 bg-slate-950/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} ANT Human Services. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-[#DC2626] transition-colors">Pan-India Sourcing Network</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
