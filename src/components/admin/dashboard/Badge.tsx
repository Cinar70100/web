import React from 'react';

// Renk tipini tanımlıyoruz
type BadgeType = 'success' | 'warning' | 'danger' | 'info' | 'default';

interface BadgeProps {
  text: string;
  type: BadgeType;
}

export default function Badge({ text, type }: BadgeProps) {
  const baseStyle = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide";

  // Tailwind CSS renk haritası
  const typeStyles: Record<BadgeType, string> = {
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
    danger: 'bg-rose-100 text-rose-700',
    info: 'bg-sky-100 text-sky-700',
    default: 'bg-gray-100 text-gray-700',
  };

  return (
    <span className={`${baseStyle} ${typeStyles[type] || typeStyles.default}`}>
      {text}
    </span>
  );
}