'use client';

import { useState } from 'react';
import { submitContactInquiry } from '@/lib/formSubmission';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Building2, 
  Users, 
  CheckCircle2, 
  MessageSquare,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState('employer'); // 'employer' | 'candidate' | 'general'
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await submitContactInquiry({
        inquiryType,
        fullName: data.get('fullName'),
        phone: data.get('phone'),
        email: data.get('email'),
        companyName: data.get('companyName'),
        message: data.get('message'),
      });

      form.reset();
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError.message || 'Unable to submit your inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 lg:py-20 space-y-16 bg-[#FAFBFD] text-[#0F172A]">
      
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs uppercase tracking-widest border border-red-200 shadow-xs">
          <MessageSquare className="w-4 h-4 text-[#DC2626]" /> Pan-India Direct Helpdesk
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0B1B2D] tracking-tight">
          Get in Touch with <span className="gradient-text-red">ANT Human Services</span>
        </h1>

        <p className="text-slate-800 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you are an enterprise seeking 50+ manpower personnel or a professional exploring career growth, our direct desks are ready to assist you.
        </p>
      </section>

      {/* 2. DIRECT CONTACT CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CARD 1: OFFICE ADDRESS */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">Office Location</span>
              <h3 className="font-heading font-bold text-lg text-[#0B1B2D]">Office Address</h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              <strong>ANT Human Services</strong><br />
              17/142 - P - 4, Rani Nagar Colony, Shivpur, Indrapur,<br />
              Varanasi, Uttar Pradesh – 221003, India
            </p>
          </div>

          {/* CARD 2: PHONE HOTLINES */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">Phone Support</span>
              <h3 className="font-heading font-bold text-lg text-[#0B1B2D]">Direct Support Lines</h3>
            </div>
            <div className="space-y-1 text-xs text-slate-700 font-medium">
              <div><strong>Primary Contact:</strong> <a href="tel:+917021982747" className="text-[#DC2626] hover:underline font-bold">+91 70219 82747</a></div>
              <div><strong>Secondary Line:</strong> <a href="tel:+917007336359" className="text-[#DC2626] hover:underline font-bold">+91 70073 36359</a></div>
            </div>
          </div>

          {/* CARD 3: EMAIL DESK */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">Email Desk</span>
              <h3 className="font-heading font-bold text-lg text-[#0B1B2D]">Official Inquiries</h3>
            </div>
            <div className="space-y-1.5 text-xs text-slate-700 font-medium">
              <div>
                <a href="mailto:anthumanservices@gmail.com" className="text-[#DC2626] hover:underline font-bold break-all">
                  anthumanservices@gmail.com
                </a>
              </div>
              <div className="text-slate-500 text-[11px]">Direct priority routing</div>
            </div>
          </div>

          {/* CARD 4: HOURS & SLA */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">Service SLA</span>
              <h3 className="font-heading font-bold text-lg text-[#0B1B2D]">Hours & SLA</h3>
            </div>
            <div className="space-y-1 text-xs text-slate-700 font-medium">
              <div><strong>Mon - Sat:</strong> 9:30 AM - 6:30 PM</div>
              <div className="text-[#DC2626] font-bold">2-Hour Response SLA</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MAIN INTERACTIVE FORM & SOURCING INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT HIGH-CONTRAST SOURCING INFO */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md space-y-6">
              <h2 className="font-heading font-bold text-2xl text-[#0B1B2D]">
                Pan-India Sourcing & Operational Reach
              </h2>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                ANT Human Services operates a robust recruitment network supplying skilled, semi-skilled, and white-collar personnel across North, Central, and Pan-India markets.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-100 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span>Pan-India Contract Staffing & Manpower Supply</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span>100% EPF/ESI Statutory Labor Compliance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span>Zero Registration Charge Ethical Candidate Policy</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-100 to-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-3 text-[#0B1B2D]">
              <h3 className="font-heading font-bold text-lg">Need Immediate Hiring Assistance?</h3>
              <p className="text-xs text-slate-800 font-medium leading-relaxed">
                Our account managers can deploy pre-screened workers within 24-48 hours.
              </p>
              <Link href="/employers" className="inline-flex items-center gap-1.5 font-heading font-bold text-xs text-[#DC2626] hover:underline">
                Request Urgent Staffing <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* RIGHT HIGH-CONTRAST INQUIRY FORM */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
            
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">Direct Channel</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1B2D]">
                Send Us a Direct Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Choose your inquiry type below for priority routing to the appropriate desk.
              </p>
            </div>

            {/* INQUIRY TYPE TOGGLE BUTTONS */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setInquiryType('employer')}
                className={`py-2 px-3 rounded-xl font-heading font-bold text-xs transition-all cursor-pointer ${
                  inquiryType === 'employer' ? 'bg-[#0B1B2D] text-white shadow-xs' : 'text-slate-700 hover:text-[#0B1B2D]'
                }`}
              >
                Employer Hiring
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('candidate')}
                className={`py-2 px-3 rounded-xl font-heading font-bold text-xs transition-all cursor-pointer ${
                  inquiryType === 'candidate' ? 'bg-[#DC2626] text-white shadow-xs' : 'text-slate-700 hover:text-[#DC2626]'
                }`}
              >
                Job Candidate
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('general')}
                className={`py-2 px-3 rounded-xl font-heading font-bold text-xs transition-all cursor-pointer ${
                  inquiryType === 'general' ? 'bg-slate-800 text-white shadow-xs' : 'text-slate-700 hover:text-[#0B1B2D]'
                }`}
              >
                General Query
              </button>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-red-50 border border-red-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#DC2626] mx-auto" />
                <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">Message Received Successfully</h3>
                <p className="text-xs text-slate-700 font-medium max-w-md mx-auto">
                  Thank you for contacting ANT Human Services. An Account Manager will respond to your message within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 font-heading font-bold text-xs text-white bg-[#DC2626] rounded-xl cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1B2D] uppercase mb-1">Full Name *</label>
                    <input name="fullName" type="text" placeholder="Your Name" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#DC2626]" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B1B2D] uppercase mb-1">Phone Number *</label>
                    <input name="phone" type="tel" placeholder="+91 98765 00000" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#DC2626]" required />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1B2D] uppercase mb-1">Email Address *</label>
                  <input name="email" type="email" placeholder="name@domain.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#DC2626]" required />
                </div>

                {inquiryType === 'employer' && (
                  <div>
                    <label className="block text-xs font-bold text-[#0B1B2D] uppercase mb-1">Company Name</label>
                    <input name="companyName" type="text" placeholder="e.g. Apex Industrial Solutions Ltd." className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#DC2626]" />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#0B1B2D] uppercase mb-1">Message / Staffing Details *</label>
                  <textarea name="message" rows={4} placeholder="Please detail your hiring requirements or career inquiry..." className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#DC2626]" required></textarea>
                </div>

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-[#B91C1C]">
                    {error}
                  </div>
                )}

                <button disabled={submitting} type="submit" className="w-full py-3.5 px-6 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-all text-base shadow-md flex items-center justify-center gap-2 cursor-pointer">
                  <Send className="w-4 h-4 text-white" /> {submitting ? 'Submitting Inquiry...' : 'Submit Direct Inquiry'}
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
