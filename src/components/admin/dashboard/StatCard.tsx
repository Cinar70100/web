import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  percentage?: string;
  bgColor: string;
  textColor?: string;
}

export default function StatCard({
  title,
  value,
  percentage,
  bgColor,
  textColor = 'text-white',
}: StatCardProps) {
  return (
    // GÜNCELLEME:
    // 'flex h-full flex-col justify-between' eklendi.
    // 'h-full' kartın grid alanını doldurmasını sağlar.
    // 'flex-col' dikey flexbox'ı başlatır.
    // 'justify-between' ilk div'i (değer/başlık) YUKARI,
    // ikinci div'i (yüzde) AŞAĞI iter.
    <div 
      className={`rounded-lg p-6 shadow-md ${bgColor} ${textColor} flex h-full flex-col justify-between`}
    >
      {/* Üst Kısım: Değer ve Başlık */}
      <div>
        <div className="text-4xl font-bold">
          {value}
        </div>
        <div className="mt-2 text-sm font-medium uppercase tracking-wide opacity-90">
          {title}
        </div>
      </div>
      
      {/* Alt Kısım: Yüzdelik Değer (varsa) */}
      {percentage && (
        // 'mt-4' (margin-top: auto) yerine 'justify-between' kullandığımız için
        // bu margin'i korumak iyi bir boşluk sağlar.
        <div className="mt-4 text-xs"> 
          <span className="rounded-full bg-black bg-opacity-20 px-2 py-0.5 text-xs font-semibold">
            {percentage}
          </span>
        </div>
      )}
    </div>
  );
}