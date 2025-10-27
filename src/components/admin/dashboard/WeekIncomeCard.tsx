import React from 'react';

export default function WeekIncomeCard() {
  return (
    // GÜNCELLEME:
    // 'lg:row-span-2' eklendi.
    // Bu, kartın geniş (lg) ekranlarda 2 satır yüksekliğinde
    // yer kaplamasını sağlar ('dashboard.jpg'deki gibi).
    <div className="rounded-lg bg-[#343a40] p-6 text-white shadow-md md:col-span-2 lg:row-span-2">
      {/* Üst Kısım: Toplam Değer */}
      <div className="flex items-start justify-between">
        <div>
          <div className="text-4xl font-bold">$1540</div>
          <div className="mt-1 text-sm font-medium uppercase tracking-wide opacity-80">
            Week Income
          </div>
        </div>
      </div>

      {/* Grafik Alanı (Placeholder) */}
      <div className="mt-6 h-48 w-full">
        <div className="flex h-full items-center justify-center rounded-md border border-dashed border-gray-600 bg-gray-700 bg-opacity-50">
          <span className="text-gray-400">Gelir Grafiği (Chart Placeholder)</span>
        </div>
      </div>

      {/* Alt Kısım: Detaylar */}
      <div className="mt-6 flex justify-between space-x-4">
        <div>
          <div className="text-lg font-bold text-green-400">120$</div>
          <div className="text-xs uppercase opacity-80">Orders</div>
        </div>
        <div>
          <div className="text-lg font-bold text-blue-400">15$</div>
          <div className="text-xs uppercase opacity-80">Investments</div>
        </div>
        <div>
          <div className="text-lg font-bold text-yellow-400">55$</div>
          <div className="text-xs uppercase opacity-80">Others</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-white">Income</div>
        </div>
      </div>
    </div>
  );
}