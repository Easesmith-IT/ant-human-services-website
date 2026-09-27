'use client';

import { useState } from 'react';
import { HeartHandshake } from 'lucide-react';
import { submitCandidateApplication } from '@/lib/formSubmission';

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

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const resume = data.get('resume');

    try {
      await submitCandidateApplication({
        fullName: data.get('fullName'),
        phone: data.get('phone'),
        email: data.get('email'),
        targetSector: data.get('targetSector'),
        experienceLevel: data.get('experienceLevel'),
        locationQualifications: data.get('locationQualifications'),
        resume,
      });

      form.reset();
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError.message || 'Unable to submit your application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="py-12 lg:py-20 space-y-20 bg-slate-50">
      
      {/* HERO BANNER */}
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

      {/* CORE CANDIDATE SECTORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC2626]">
            Opportunities We Source For
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1B2D]">
            Key Employment Roles Available
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobSectors.map((sector, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4 hover:border-[#DC2626] transition-all">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626]">
                {sector.badge}
              </span>
              <h3 className="font-heading font-bold text-lg text-[#0B1B2D]">{sector.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{sector.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESUME REGISTRATION FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1B2D]">
              Register Your Career Profile
            </h2>
            <p className="text-sm text-slate-600">
              Drop your details below and our recruitment team in Varanasi will match you with active openings.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-red-50 border border-red-200 text-center space-y-3">
              <HeartHandshake className="w-12 h-12 text-[#DC2626] mx-auto" />
              <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">Application Received Successfully</h3>
              <p className="text-xs text-slate-700 font-medium max-w-md mx-auto">
                Thank you for applying. Our recruitment team will review your profile and contact you when a suitable opportunity is available.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 font-heading font-bold text-xs text-white bg-[#DC2626] rounded-xl cursor-pointer"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                <input name="fullName" type="text" placeholder="e.g. Rahul Sharma" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                  <input name="phone" type="tel" placeholder="+91 98765 00000" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                  <input name="email" type="email" placeholder="rahul@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Target Sector *</label>
                  <select name="targetSector" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required>
                    <option>White-Collar & Office Admin / FDMS</option>
                    <option>Sales & Marketing</option>
                    <option>Accounts & Finance</option>
                    <option>Blue-Collar & Industrial Labor</option>
                    <option>Contract & Retail Staffing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Experience Level *</label>
                  <select name="experienceLevel" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required>
                    <option>Fresher (0 Years)</option>
                    <option>1 - 3 Years</option>
                    <option>3 - 5 Years</option>
                    <option>5+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Current Location & Qualifications</label>
                <textarea name="locationQualifications" rows={3} placeholder="City, highest education, key skills (e.g. Tally Prime, FDMS, Lathe operation)..." className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]"></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Resume PDF *</label>
                <input
                  name="resume"
                  type="file"
                  accept="application/pdf,.pdf"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-red-50 file:text-[#DC2626] hover:file:bg-red-100"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    if (file.type !== 'application/pdf') {
                      e.target.value = '';
                      setError('Only PDF files are accepted.');
                    } else if (file.size > 5 * 1024 * 1024) {
                      e.target.value = '';
                      setError('PDF must be 5 MB or smaller.');
                    } else {
                      setError('');
                    }
                  }}
                />
                <p className="mt-1 text-[11px] text-slate-500">PDF only, maximum 5 MB.</p>
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-[#B91C1C]">
                  {error}
                </div>
              )}

              <button disabled={submitting} type="submit" className="w-full py-3.5 px-6 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-colors text-base shadow-md cursor-pointer">
                {submitting ? 'Submitting Application...' : 'Submit Candidate Application'}
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
