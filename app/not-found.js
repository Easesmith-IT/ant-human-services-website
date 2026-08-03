import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center font-heading font-extrabold text-2xl">
        404
      </div>
      <div className="space-y-2">
        <h1 className="font-heading font-extrabold text-3xl text-[#0B1B2D]">
          Page Not Found
        </h1>
        <p className="text-slate-600 max-w-md text-sm">
          The requested page could not be located. Return to the home page or explore our services.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 font-heading font-bold text-white bg-[#0B1B2D] hover:bg-[#16263D] rounded-xl transition-all cursor-pointer"
        >
          <Home className="w-4 h-4 text-[#DC2626]" /> Return Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 font-heading font-bold text-[#0B1B2D] bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer"
        >
          View Services
        </Link>
      </div>
    </div>
  );
}
