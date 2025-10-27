import React from 'react';
// GÜNCELLEME: Doğru import yolu './' olarak düzeltildi
import DashboardCard from './DashboardCard'; 

// Demo veri
const popularListings = [
  { title: 'Karaman Merkezde Satılık 3+1 Lüks Daire', visits: 738, date: '22.10.2025' },
  { title: 'Organize Sanayi Bölgesinde Satılık Fabrika', visits: 150, date: '21.10.2025' },
  { title: 'Ermenek Yolu Üzeri Satılık Arsa', visits: 85, date: '20.10.2025' },
];

const cardControls = (
  <>
    <button className="hover:text-gray-600">&times;</button>
    <button className="hover:text-gray-600">-</button>
    <button className="hover:text-gray-600">&#8635;</button>
  </>
);

export default function PopularListingsTable() {
  return (
    <DashboardCard title="Popüler İlanlar" headerControls={cardControls}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Başlık</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ziyaret</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Eklenme Tarihi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {popularListings.map((listing, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{listing.title}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{listing.visits}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{listing.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}