import React from 'react';
// GÜNCELLEME: Doğru import yolu './' olarak düzeltildi
import DashboardCard from './DashboardCard'; 

// Demo veri
const popularNews = [
  { title: 'Karaman Emlak Piyasasında Son Gelişmeler', visits: 512, date: '23.10.2025' },
  { title: 'Yeni Konut Projesi Başlıyor: Detaylar', visits: 340, date: '22.10.2025' },
  { title: 'Kira Artışları Hakkında Bilinmesi Gerekenler', visits: 215, date: '21.10.2025' },
];

const cardControls = (
  <button className="hover:text-gray-600">&#8230;</button> 
);

export default function PopularNewsTable() {
  return (
    <DashboardCard title="Popüler Haberler" headerControls={cardControls}>
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
            {popularNews.map((news, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{news.title}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{news.visits}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{news.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}