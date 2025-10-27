import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import StatCard from "@/components/admin/dashboard/StatCard"; // Ana dashboard'daki kartları tekrar kullanıyoruz
import Badge from "@/components/admin/dashboard/Badge";

export const metadata: Metadata = {
  title: "Genel İstatistikler",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo İstatistik Verileri
const stats = {
  totalListings: 1240,
  pendingListings: 15,
  totalUsers: 187, // Bireysel + Ofis
  totalOffices: 35,
  totalNews: 45,
  todayViews: 1560, // Örnek
};

// Demo Son Aktiviteler
const recentListings = [
  { id: 1001, title: "Merkezde Kiralık Ofis", user: "Karaman Emlak", date: "26.10.2025 10:30" },
  { id: 1002, title: "Bahçeli Satılık Villa", user: "Ahmet Yılmaz", date: "26.10.2025 09:15" },
];
const recentUsers = [
  { id: 188, name: "Mehmet Can", type: "Bireysel", date: "26.10.2025 11:00" },
  { id: 36, name: "Yeni Dünya Emlak", type: "Emlak Ofisi", date: "25.10.2025 17:45" },
];


export default function GeneralStatsPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
      <h1 className="text-3xl font-bold text-gray-800">
        Genel İstatistikler
      </h1>

      {/* 2. Özet İstatistik Kartları */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Toplam Aktif İlan"
          value={stats.totalListings.toLocaleString()} // Sayıyı formatla
          bgColor="bg-blue-600"
        />
         <StatCard
          title="Onay Bekleyen İlan"
          value={stats.pendingListings.toLocaleString()}
          bgColor="bg-yellow-500"
        />
        <StatCard
          title="Toplam Üye"
          value={stats.totalUsers.toLocaleString()}
          bgColor="bg-green-600"
        />
        <StatCard
          title="Toplam Emlak Ofisi"
          value={stats.totalOffices.toLocaleString()}
          bgColor="bg-indigo-600"
        />
         <StatCard
          title="Toplam Haber"
          value={stats.totalNews.toLocaleString()}
          bgColor="bg-pink-600"
        />
         <StatCard
          title="Bugünkü Sayfa Gösterimi" // Örnek metrik
          value={stats.todayViews.toLocaleString()}
          bgColor="bg-teal-600"
        />
      </div>

       {/* 3. Son Aktiviteler Tabloları */}
       <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Son Eklenen İlanlar */}
          <DashboardCard title="Son Eklenen İlanlar">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Başlık</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ekleyen</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Tarih</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {recentListings.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-xs truncate" title={item.title}>
                         {/* İlan düzenlemeye link verilebilir */}
                         <Link href={`/dashboard/ilanlar/duzenle/${item.id}`} className="hover:text-blue-600">
                            {item.title}
                         </Link>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.user}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DashboardCard>

          {/* Son Kaydolan Üyeler */}
           <DashboardCard title="Son Kaydolan Üyeler">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ad Soyad / Firma</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Tür</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kayıt Tarihi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-xs truncate" title={user.name}>
                        {/* Üye düzenlemeye link verilebilir */}
                         <Link href={`/dashboard/uyeler/duzenle/${user.id}`} className="hover:text-blue-600">
                           {user.name}
                         </Link>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.type}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DashboardCard>
       </div>

       {/* Grafik Alanları (Daha sonra eklenebilir) */}
       {/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DashboardCard title="Haftalık İlan Gösterimleri">
             <div className="p-5 h-64 flex items-center justify-center text-gray-400 italic">Grafik Alanı</div>
          </DashboardCard>
           <DashboardCard title="Aylık Üye Kayıtları">
             <div className="p-5 h-64 flex items-center justify-center text-gray-400 italic">Grafik Alanı</div>
          </DashboardCard>
       </div> 
       */}
    </div>
  );
}