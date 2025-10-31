import React from 'react';

interface DashboardCardProps {
  title?: string; // GÜNCELLEME: 'title' artık opsiyonel (?)
  headerControls?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export default function DashboardCard({
  title,
  headerControls,
  children,
  className,
  bodyClassName,
}: DashboardCardProps) {
  const containerClassName = [
    "overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const bodyClasses = ["p-5", bodyClassName].filter(Boolean).join(" ");

  return (
    <div className={containerClassName}>
      {/* Kart Başlığı (Eğer title varsa göster) */}
      {title && ( // GÜNCELLEME: Sadece title varsa header'ı render et
        <header className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          {headerControls && (
            <div className="flex space-x-3 text-gray-400">
              {headerControls}
            </div>
          )}
        </header>
      )}

      {/* Kartın ana içeriği */}
      <div className={bodyClasses}>
        {children}
      </div>
    </div>
  );
}