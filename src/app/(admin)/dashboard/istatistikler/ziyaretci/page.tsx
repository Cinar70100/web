import type { Metadata } from "next";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import StatCard from "@/components/admin/dashboard/StatCard"; // Özet kartları için

export const metadata: Metadata = {
  title: "Ziyaretçi İstatistikleri",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo İstatistik Verileri (Bu veriler Analytics API'den gelecek)
const visitorStats = {
  todayVisitors: 850,
  yesterdayVisitors: 720,
  thisMonthVisitors: 15230,
  onlineUsers: 15, // Anlık online
};

export default function VisitorStatsPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
      <h1 className="text-3xl font-bold text-gray-800">
        Ziyaretçi İstatistikleri
      </h1>

      {/* 2. Özet İstatistik Kartları */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Bugünkü Tekil Ziyaretçi"
          value={visitorStats.todayVisitors.toLocaleString()} 
          bgColor="bg-blue-500"
          percentage={`Düne göre: ${visitorStats.todayVisitors > visitorStats.yesterdayVisitors ? '+' : ''}${(visitorStats.todayVisitors - visitorStats.yesterdayVisitors).toLocaleString()}`} // Basit karşılaştırma
        />
         <StatCard
          title="Bu Ayki Tekil Ziyaretçi"
          value={visitorStats.thisMonthVisitors.toLocaleString()}
          bgColor="bg-green-500"
        />
        <StatCard
          title="Şu An Online" 
          value={visitorStats.onlineUsers.toLocaleString()}
          bgColor="bg-orange-500"
        />
         {/* Başka bir metrik eklenebilir, örn: Ortalama Oturum Süresi */}
         <StatCard
          title="Ortalama Oturum Süresi" 
          value="2dk 15sn" // Demo
          bgColor="bg-purple-500"
        />
      </div>

       {/* 3. Detaylı İstatistik Alanları (Grafikler/Tablolar için Placeholder) */}
       <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Ziyaretçi Kaynakları Grafiği */}
          <DashboardCard title="Ziyaretçi Kaynakları (Son 30 Gün)">
             <div className="p-5 h-80 flex items-center justify-center text-gray-400 italic">
                {/* Buraya Chart.js veya Recharts ile bir 'pie chart' (pasta grafik) gelebilir */}
                (Pasta Grafik Placeholder: Google, Direkt, Sosyal Medya vb.)
             </div>
          </DashboardCard>

          {/* En Çok Ziyaret Edilen Sayfalar */}
           <DashboardCard title="En Çok Ziyaret Edilen Sayfalar (Son 30 Gün)">
             <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Sayfa URL</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Gösterim</th>
                  </tr>
                </thead>
                {/* Demo Tablo İçeriği (Bu veriler Analytics'ten gelecek) */}
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr><td className="px-6 py-4 text-sm text-blue-600 hover:underline">/</td><td className="px-6 py-4 text-sm">12,500</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-blue-600 hover:underline">/ilan/merkezde-satilik-daire-123</td><td className="px-6 py-4 text-sm">8,750</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-blue-600 hover:underline">/haberler/yeni-proje-basliyor</td><td className="px-6 py-4 text-sm">5,100</td></tr>
                   <tr><td className="px-6 py-4 text-sm text-blue-600 hover:underline">/emlak-ofisleri</td><td className="px-6 py-4 text-sm">3,200</td></tr>
                </tbody>
              </table>
            </div>
          </DashboardCard>
       </div>
    </div>
  );
}