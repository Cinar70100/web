import React from 'react';

interface DashboardCardProps {
  title?: string; // GÜNCELLEME: 'title' artık opsiyonel (?)
  headerControls?: React.ReactNode; 
  children: React.ReactNode;
}

export default function DashboardCard({ 
  title, 
  headerControls, 
  children 
}: DashboardCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-md">
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
      <div>
        {children}
      </div>
    </div>
  );
}