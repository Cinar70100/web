'use client'; 

// import type { Metadata } from "next"; // Client Component
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination";
import { Eye, Pencil, Power, Trash2, CheckCircle } from 'lucide-react'; 

/* // Client Component'te Metadata sorun çıkarırsa kaldırın
export const metadata: Metadata = {
  title: "Süresi Biten Emlak Ofisleri",
  robots: {
    index: false,
    follow: false,
  },
};
*/

// Demo veri
const expiredOffices = [
  { id: 4, name: "Geçmiş Emlak", username: "gecmisemlak", category: "Emlak", isSuperOffice: false, expiryDate: "01 Eylül 2025", status: "Süresi Bitti" },
  { id: 5, name: "Deneme Ofis", username: "denemeofis", category: "Emlak", isSuperOffice: true, expiryDate: "15 Ekim 2025", status: "Süresi Bitti" },
];

export default function ExpiredOfficesPage() {

   const handleEditClick = (officeId: number) => {
    alert(`Ofis ID ${officeId} için hesaba giriş yapma işlemi daha sonra eklenecektir.`);
  };

  return (
    <div className="flex flex-col gap-6">

       <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Süresi Biten Emlak Ofisleri
        </h1>
      </div>

      {/* Filtreleme Kartı */}
      <DashboardCard>
        <form className="p-5">
           {/* ... (Filtre içeriği aynı) ... */}
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
             {/* ... */}
            <div>
              <label htmlFor="limit" className="block text-sm font-medium text-gray-700 mb-1">Gösterilecek Veri</label>
              <select id="limit" name="limit" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                <option value="10">10</option> <option value="25">25</option> <option value="50">50</option>
              </select>
            </div>
            <div>
              <label htmlFor="search_query" className="block text-sm font-medium text-gray-700 mb-1">Ara (Ad/Kullanıcı Adı)</label>
              <input type="text" id="search_query" name="search_query" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sıralama</label>
              <select id="sort" name="sort" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                 <option value="">Seçiniz</option> <option value="name_asc">Ad (A-Z)</option> <option value="date_desc">Bitiş Tarihi (Yeni)</option> <option value="date_asc">Bitiş Tarihi (Eski)</option>
              </select>
            </div>
            <div>
              <button type="submit" className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-800 shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 w-full md:w-auto">
                Ara
              </button>
            </div>
           </div>
        </form>
      </DashboardCard>

      {/* Tablo Kartı */}
      <DashboardCard title="Süresi Biten Emlak Ofisleri">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
             {/* ... (Tablo başlığı aynı) ... */}
              <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ad</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kullanıcı Adı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kategori</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">Süper Emlak Ofisi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Bitiş Tarihi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {expiredOffices.map((office) => (
                <tr key={office.id} className="hover:bg-gray-50">
                   {/* ... (Diğer sütunlar aynı) ... */}
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{office.name}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{office.username}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{office.category}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-center">
                      {office.isSuperOffice ? (<CheckCircle size={18} className="text-green-500 inline-block" />) : (<span className="text-gray-400">-</span>)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-red-600 font-medium">{office.expiryDate}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm"> <Badge text={office.status} type={'danger'} /> </td>
                  {/* GÜNCELLEME: "Göster" linkinin href'i değiştirildi */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      {/* GÖSTER LİNKİ (SUBDOMAIN) */}
                      <Link 
                        href={`https://${office.username}.karamanevbul.com/`} 
                        target="_blank" 
                        className="text-blue-600 hover:text-blue-900" 
                        title="Ofis Sayfasını Göster"
                      >
                        <Eye size={18} /> 
                      </Link>
                      <button 
                        onClick={() => handleEditClick(office.id)} 
                        className="text-green-600 hover:text-green-900" 
                        title="Ofis Olarak Giriş Yapıp Düzenle"
                      >
                        <Pencil size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-900" title="Sil">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={1} /> 
      </DashboardCard>
    </div>
  );
}