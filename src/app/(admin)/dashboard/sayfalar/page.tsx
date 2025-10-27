import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination";
import { Pencil, Trash2 } from 'lucide-react'; 

export const metadata: Metadata = {
  title: "Tüm Sayfalar",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri
const pages = [
  { id: 1, title: "Hakkımızda", slug: "hakkimizda", status: "Aktif" },
  { id: 2, title: "İletişim", slug: "iletisim", status: "Aktif" },
  { id: 3, title: "Kullanım Koşulları", slug: "kullanim-kosullari", status: "Pasif" },
];

export default function AllPages() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı ve Yeni Ekle Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Sayfa Yönetimi
        </h1>
        <Link
          href="/dashboard/sayfalar/yeni"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Yeni Sayfa Ekle
        </Link>
      </div>

       {/* 2. Filtreleme Kartı (YENİ EKLENDİ - Görseldeki gibi) */}
       <DashboardCard>
          <form className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end"> 
              {/* Gösterilecek Veri */}
              <div>
                <label htmlFor="limit" className="block text-sm font-medium text-gray-700 mb-1">Gösterilecek Veri</label>
                <select
                  id="limit"
                  name="limit"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </div>
              
              {/* Ara */}
              <div>
                <label htmlFor="search_query" className="block text-sm font-medium text-gray-700 mb-1">Ara (Sayfa Adı)</label>
                <input
                  type="text"
                  id="search_query"
                  name="search_query"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              {/* Ara Butonu */}
              <div> 
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full md:w-auto"
                >
                  Ara
                </button>
              </div>
            </div>
          </form>
       </DashboardCard>

      {/* 3. Sayfa Tablosu Kartı (Başlığı güncellendi) */}
      <DashboardCard title="Sayfa Listesi">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Sayfa Adı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">URL Anahtarı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {pages.map((page) => (
                <tr key={page.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{page.title}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 font-mono">/{page.slug}</td> 
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Badge
                      text={page.status}
                      type={page.status === 'Aktif' ? 'success' : 'danger'}
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/sayfalar/duzenle/${page.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
                        <Pencil size={18} />
                      </Link>
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

        {/* 4. Sayfalama Bileşeni */}
        <Pagination currentPage={1} totalPages={1} /> 
      </DashboardCard>
    </div>
  );
}