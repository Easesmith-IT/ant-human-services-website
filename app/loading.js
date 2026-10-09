import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-5 px-4">
      <div className="relative animate-pulse flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="ANT Human Services"
          width={280}
          height={42}
          className="h-10 sm:h-12 w-auto object-contain"
          priority
        />
      </div>
      <div className="w-10 h-10 border-3 border-slate-200 border-t-[#DC2626] rounded-full animate-spin"></div>
      <div className="font-heading font-semibold text-xs text-slate-500 tracking-wider uppercase">
        Loading ANT Human Services...
      </div>
    </div>
  );
}
