import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination";
import { Pencil, UserX, Trash2, LogIn, CheckCircle, Ban } from 'lucide-react'; 

export const metadata: Metadata = {
  title: "Onaysız Üyeler", // Başlık güncellendi
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri (GÜNCELLEME: Sadece 'Onay Bekliyor' üyeler)
const unapprovedUsers = [
   { id: 4, username: "yeniemlak", name: "Yeni Emlakçı", email: "yeni@emlak.com", regDate: "25.10.2025 09:00", status: "Onay Bekliyor", gsm: "5554445566", bolge: "Başyayla" }, 
  // Diğer onaysız üyeler eklenebilir...
];

export default function UnapprovedUsersPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Filtreleme Kartı (Tüm Üyeler ile aynı) */}
      <DashboardCard>
        <form className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div>
              <label htmlFor="search_username" className="block text-sm font-medium text-gray-700 mb-1">Kullanıcı Adı</label>
              <input type="text" id="search_username" name="search_username" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="search_name" className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
              <input type="text" id="search_name" name="search_name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="search_email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
              <input type="email" id="search_email" name="search_email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
            <div>
              <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full md:w-auto">
                Filitrele
              </button>
            </div>
          </div>
        </form>
      </DashboardCard>

      {/* 2. Üye Tablosu Kartı (Başlığı güncellendi) */}
      <DashboardCard title="Onaysız Üye Listesi">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {/* Sütunlar 'Tüm Üyeler' ile aynı */}
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kullanıcı Adı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ad Soyad</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">E-Mail Adresi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kayıt Tarihi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">GSM</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Bölge</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {unapprovedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{user.username}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.email}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.regDate}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    {/* Durum her zaman 'Onay Bekliyor' */}
                    <Badge
                      text={user.status}
                      type={'warning'} 
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.gsm}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.bolge}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    {/* İşlemler 'Tüm Üyeler' ile aynı, ancak 'Onayla' ikonu gösterilecek */}
                    <div className="flex space-x-3">
                      <button className="text-blue-600 hover:text-blue-900" title="Kullanıcı Olarak Giriş Yap">
                        <LogIn size={18} /> 
                      </button>
                      <Link href={`/dashboard/uyeler/duzenle/${user.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
                        <Pencil size={18} />
                      </Link>
                      {/* Durum 'Onay Bekliyor' olduğu için 'Onayla' ikonu */}
                      <button className="text-teal-600 hover:text-teal-900" title="Onayla">
                           <CheckCircle size={18} /> 
                      </button>
                      {/* Engelleme ikonu burada görünmez */}
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

        {/* 3. Sayfalama Bileşeni */}
        <Pagination currentPage={1} totalPages={1} /> 
      </DashboardCard>
    </div>
  );
}