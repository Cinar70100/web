import React from 'react';
import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';

type TrendType = 'positive' | 'negative' | 'neutral';

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  trendLabel?: string;
  trendType?: TrendType;
  accentColor: string;
  icon: React.ReactNode;
}

const trendIconMap: Record<TrendType, React.ReactNode> = {
  positive: <ArrowUpRight className="h-3.5 w-3.5" />,
  negative: <ArrowDownRight className="h-3.5 w-3.5" />,
  neutral: <Minus className="h-3.5 w-3.5" />,
};

const trendClassMap: Record<TrendType, string> = {
  positive: 'bg-white/15 text-white',
  negative: 'bg-rose-100 text-rose-700',
  neutral: 'bg-white/15 text-white',
};

export default function StatCard({
  title,
  value,
  description,
  trendLabel,
  trendType = 'positive',
  accentColor,
  icon,
}: StatCardProps) {
  return (
    <div
      className={`flex h-full flex-col justify-between overflow-hidden rounded-3xl p-6 text-white shadow-md ${accentColor}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-4xl font-semibold">{value}</p>
          <p className="mt-2 text-sm uppercase tracking-wide text-white/70">{title}</p>
        </div>
        <div className="rounded-2xl bg-white/15 p-2 text-white">
          {icon}
        </div>
      </div>

      <div className="mt-6 space-y-2 text-xs text-white/80">
        {trendLabel && (
          <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold ${trendClassMap[trendType]}`}>
            {trendIconMap[trendType]}
            {trendLabel}
          </span>
        )}
        {description && <p className="text-[11px] uppercase tracking-wider text-white/70">{description}</p>}
      </div>
    </div>
  );
}