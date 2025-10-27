import React from 'react';

// Renk tipini tanımlıyoruz
type BadgeType = 'success' | 'warning' | 'danger' | 'info' | 'default';

interface BadgeProps {
  text: string;
  type: BadgeType;
}

export default function Badge({ text, type }: BadgeProps) {
  const baseStyle = "rounded px-2 py-0.5 text-xs font-semibold";
  
  // Tailwind CSS renk haritası
  const typeStyles: Record<BadgeType, string> = {
    success: 'bg-green-100 text-green-700', // For 'Paid', 'Active', 'Open'
    warning: 'bg-yellow-100 text-yellow-700', // For 'Progress'
    danger: 'bg-red-100 text-red-700', // For 'Inactive'
    info: 'bg-blue-100 text-blue-700',
    default: 'bg-gray-100 text-gray-700',
  };

  return (
    <span className={`${baseStyle} ${typeStyles[type] || typeStyles.default}`}>
      {text}
    </span>
  );
}