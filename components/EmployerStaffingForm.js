'use client';

import { useState } from 'react';
import { submitEmployerStaffing } from '@/lib/formSubmission';

export default function EmployerStaffingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await submitEmployerStaffing({
        companyName: data.get('companyName'),
        contactName: data.get('contactName'),
        phone: data.get('phone'),
        staffingModel: data.get('staffingModel'),
        positionsDetails: data.get('positionsDetails'),
      });

      form.reset();
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError.message || 'Unable to submit your staffing request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white text-slate-900 p-8 rounded-2xl border border-slate-200 shadow-xl text-center space-y-3">
        <h3 className="font-heading font-bold text-xl text-[#0B1B2D]">Staffing Request Received Successfully</h3>
        <p className="text-xs text-slate-700 font-medium">
          Thank you. An Account Manager will review your requirement and respond within 2 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-5 py-2 font-heading font-bold text-xs text-white bg-[#DC2626] rounded-xl cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900 p-8 rounded-2xl border border-slate-200 shadow-xl">
      <h3 className="font-heading font-bold text-xl text-[#0B1B2D] mb-4">
        Submit Staffing Requirement
      </h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Organization Name *</label>
          <input name="companyName" type="text" placeholder="e.g. Apex Logistics Ltd." className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Contact Name *</label>
            <input name="contactName" type="text" placeholder="Your Name" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
            <input name="phone" type="tel" placeholder="+91 98765 00000" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Staffing Model Required *</label>
          <select name="staffingModel" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required>
            <option>Contract Staffing & Manpower Supply</option>
            <option>Permanent Direct Hiring</option>
            <option>Bulk / Mass Hiring Drive</option>
            <option>Blue-Collar Factory Workers</option>
            <option>White-Collar & FDMS Sourcing</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Positions & Details *</label>
          <textarea name="positionsDetails" rows={3} placeholder="Number of positions, job titles, and location..." className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#DC2626]" required></textarea>
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-[#B91C1C]">
            {error}
          </div>
        )}

        <button disabled={submitting} type="submit" className="w-full py-3.5 px-6 font-heading font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-colors text-base shadow-md cursor-pointer">
          {submitting ? 'Submitting Request...' : 'Submit Staffing Request'}
        </button>
      </form>
    </div>
  );
}
