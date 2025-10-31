import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const chartPoints = [45, 58, 52, 68, 60, 84, 72, 92];

export default function WeekIncomeCard() {
  const linePoints = chartPoints
    .map((value, index) => {
      const x = (index / (chartPoints.length - 1)) * 100;
      const y = 100 - value;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#5f63f2] via-[#474ddc] to-[#272b8f] p-6 text-white shadow-xl sm:p-8 lg:row-span-2">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">Week income</p>
          <p className="mt-3 text-4xl font-semibold sm:text-5xl">$1540</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
          <ArrowUpRight className="h-3.5 w-3.5" />
          12% vs last week
        </div>
      </div>

      <div className="mt-8">
        <svg viewBox="0 0 100 100" className="h-44 w-full text-white/80" preserveAspectRatio="none">
          <defs>
            <linearGradient id="weekIncomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <polygon
            fill="url(#weekIncomeGradient)"
            points={`0,100 ${linePoints} 100,100`}
          />
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            points={linePoints}
          />
        </svg>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 text-sm uppercase tracking-wide text-white/80 sm:grid-cols-4">
        <div className="space-y-1">
          <p className="flex items-baseline gap-2 text-2xl font-semibold text-white">
            120$
            <span className="text-xs font-medium text-emerald-200">orders</span>
          </p>
          <p className="text-[11px] font-medium text-white/70">+8% vs last week</p>
        </div>
        <div className="space-y-1">
          <p className="flex items-baseline gap-2 text-2xl font-semibold text-white">
            15$
            <span className="text-xs font-medium text-sky-200">investments</span>
          </p>
          <p className="text-[11px] font-medium text-white/70">steady</p>
        </div>
        <div className="space-y-1">
          <p className="flex items-baseline gap-2 text-2xl font-semibold text-white">
            55$
            <span className="text-xs font-medium text-amber-200">others</span>
          </p>
          <p className="text-[11px] font-medium text-white/70">+2 new sources</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white/70">Income</p>
          <p className="text-2xl font-semibold text-white">$1680</p>
        </div>
      </div>
    </div>
  );
}