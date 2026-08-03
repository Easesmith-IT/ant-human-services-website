export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-[#00B887] rounded-full animate-spin"></div>
      <div className="font-heading font-semibold text-sm text-[#0B1E36] tracking-wider uppercase">
        Loading ANT Human Services...
      </div>
    </div>
  );
}
