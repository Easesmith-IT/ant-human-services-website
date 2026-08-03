import { Users, Briefcase, DoorOpen, TrendingUp, ArrowRight } from 'lucide-react';

export default function PhilosophyChain() {
  const steps = [
    { icon: Users, label: 'People', color: 'text-slate-800', bg: 'bg-slate-100' },
    { icon: Briefcase, label: 'Employment', color: 'text-slate-800', bg: 'bg-slate-100' },
    { icon: DoorOpen, label: 'Opportunity', color: 'text-slate-800', bg: 'bg-slate-100' },
    { icon: TrendingUp, label: 'Growth', color: 'text-[#DC2626]', bg: 'bg-red-50', highlight: true },
  ];

  return (
    <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-200/80 shadow-xs">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <div key={step.label} className="flex items-center gap-2 sm:gap-3">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-heading font-bold text-xs sm:text-sm ${step.bg} ${step.color} ${step.highlight ? 'border border-red-200 shadow-xs' : ''}`}>
              <Icon className="w-4 h-4" />
              <span>{step.label}</span>
            </div>
            {idx < steps.length - 1 && (
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}
