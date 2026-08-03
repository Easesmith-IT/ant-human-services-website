'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Briefcase, FileUp } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/employers', label: 'For Employers' },
    { href: '/candidates', label: 'For Candidates' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center group py-1 shrink-0">
            <div className="relative h-9 sm:h-12 w-auto flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="ANT Human Services Logo" 
                width={240}
                height={65}
                className="h-8 sm:h-12 w-auto max-w-[180px] sm:max-w-none object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold transition-colors relative py-1 cursor-pointer ${
                    isActive 
                      ? 'text-[#0B1B2D]' 
                      : 'text-slate-700 hover:text-[#0B1B2D]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#DC2626] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/candidates"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] rounded-xl transition-all cursor-pointer border border-slate-200/80"
            >
              <FileUp className="w-4 h-4 text-[#DC2626]" />
              Drop Resume
            </Link>
            <Link
              href="/employers"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-md shadow-red-600/20 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-white" />
              Hire Talent
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0B1B2D] hover:bg-slate-100 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 max-h-[85vh] overflow-y-auto shadow-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold cursor-pointer ${
                  isActive ? 'bg-red-50 text-[#DC2626]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 flex flex-col gap-2.5 border-t border-slate-100">
            <Link
              href="/candidates"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-3 font-bold text-[#DC2626] bg-red-50 rounded-xl cursor-pointer"
            >
              Drop Resume / Candidate Profile
            </Link>
            <Link
              href="/employers"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-3 font-bold text-white bg-[#DC2626] rounded-xl cursor-pointer"
            >
              Hire Talent / Request Staffing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
