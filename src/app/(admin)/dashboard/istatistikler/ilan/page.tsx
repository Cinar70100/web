import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import StatCard from "@/components/admin/dashboard/StatCard"; 
import Badge from "@/components/admin/dashboard/Badge"; // Gerekirse

export const metadata: Metadata = {
  title: "İlan İstatistikleri",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo İstatistik Verileri (Bu veriler backend'den hesaplanacak)
const listingStats = {
  totalViews: 125840,
  totalFavorites: 2350,
  expiringSoonCount: 18,
  mostViewedCount: 1250, // En çok görüntülenen ilanın sayısı
};

// Demo Tablo Verileri
const mostViewedListings = [
  { id: 123, title: "Merkezde Satılık Daire", views: 1250, category: "Konut", user: "Karaman Emlak" },
  { id: 456, title: "Ermenek Arsa", views: 980, category: "Arsa", user: "Ahmet Yılmaz" },
  { id: 789, title: "Devren İş Yeri", views: 750, category: "İş Yeri", user: "Ayşe Kaya" },
];

const expiringSoonListings = [
   { id: 101, title: "Kiralık 1+1", expiryDate: "28.10.2025", user: "Ofis A" }, // Yakında
   { id: 105, title: "Satılık Villa", expiryDate: "30.10.2025", user: "Bireysel B" }, // Yakında
   { id: 110, title: "Fabrika Alanı", expiryDate: "02.11.2025", user: "Ofis C" }, // Yakında
];


export default function ListingStatsPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
      <h1 className="text-3xl font-bold text-gray-800">
        İlan İstatistikleri
      </h1>

      {/* 2. Özet İstatistik Kartları */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Toplam Görüntülenme"
          value={listingStats.totalViews.toLocaleString()} 
          bgColor="bg-cyan-600" // Farklı renkler
        />
         <StatCard
          title="Toplam Favori"
          value={listingStats.totalFavorites.toLocaleString()}
          bgColor="bg-rose-600"
        />
        <StatCard
          title="Yakında Süresi Dolacak" 
          value={listingStats.expiringSoonCount.toLocaleString()}
          bgColor="bg-amber-500"
        />
         <StatCard
          title="En Popüler İlan Gösterimi" 
          value={listingStats.mostViewedCount.toLocaleString()} 
          bgColor="bg-lime-600"
        />
      </div>

       {/* 3. Grafik Alanı (Placeholder) */}
       <DashboardCard title="İlan Görüntülenme Trendi (Son 30 Gün)">
         <div className="p-5 h-80 flex items-center justify-center text-gray-400 italic">
            {/* Buraya Chart.js veya Recharts ile bir 'line chart' (çizgi grafik) gelebilir */}
            (Çizgi Grafik Placeholder)
         </div>
       </DashboardCard>


       {/* 4. Detaylı Tablolar */}
       <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* En Çok Görüntülenen İlanlar */}
          <DashboardCard title="En Çok Görüntülenen İlanlar">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İlan Başlığı</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Görüntülenme</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kategori</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ekleyen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {mostViewedListings.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-[200px] truncate" title={item.title}>
                         <Link href={`/dashboard/ilanlar/duzenle/${item.id}`} className="hover:text-blue-600">
                            {item.title}
                         </Link>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 font-semibold">{item.views.toLocaleString()}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.category}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.user}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
             {/* Daha Fazla Göster Linki */}
             <div className="bg-gray-50 p-3 text-right border-t">
                <Link href="/dashboard/ilanlar?sort=views_desc" className="text-xs text-blue-600 hover:underline">Tümünü Görüntüle &raquo;</Link>
             </div>
          </DashboardCard>

          {/* Yakında Süresi Dolacak İlanlar */}
           <DashboardCard title="Yakında Süresi Dolacak İlanlar (Son 7 Gün)">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İlan Başlığı</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Bitiş Tarihi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ekleyen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {expiringSoonListings.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                       <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-[200px] truncate" title={item.title}>
                         <Link href={`/dashboard/ilanlar/duzenle/${item.id}`} className="hover:text-blue-600">
                            {item.title}
                         </Link>
                      </td>
                      {/* Bitiş tarihini vurgulayalım */}
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-red-600 font-medium">{item.expiryDate}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.user}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
             {/* Daha Fazla Göster Linki */}
             <div className="bg-gray-50 p-3 text-right border-t">
                <Link href="/dashboard/ilanlar/suresi-biten" className="text-xs text-blue-600 hover:underline">Tümünü Görüntüle &raquo;</Link>
             </div>
          </DashboardCard>
       </div>
    </div>
  );
}