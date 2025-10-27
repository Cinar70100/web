import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination";
// GÜNCELLEME: İkonlar (Pencil, LayoutGrid, PlusCircle, Trash2)
import { Pencil, LayoutGrid, PlusCircle, Trash2 } from 'lucide-react'; 

export const metadata: Metadata = {
  title: "Tüm Projeler",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri (Yeni sütunlara göre)
const projects = [
  { 
    id: 1, 
    name: "Karaman Towers", 
    region: "Karaman Merkez", 
    area: "15.000 m²", 
    type: "Konut", 
    unitCount: 150, 
    owner: "İnşaat A.Ş.", 
    deliveryDate: "2026-12-31", 
    status: "Aktif" 
  },
  { 
    id: 2, 
    name: "Ermenek Vadi Evleri", 
    region: "Ermenek", 
    area: "8.000 m²", 
    type: "Konut", 
    unitCount: 40, 
    owner: "Yapı Ltd.", 
    deliveryDate: "2025-06-30", 
    status: "Pasif" 
  },
];

export default function AllProjectsPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı ve Yeni Ekle Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Proje Yönetimi
        </h1>
        <Link
          href="/dashboard/projeler/yeni"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Yeni Proje Ekle
        </Link>
      </div>

       {/* 2. Filtreleme Kartı (Başlıksız) */}
       <DashboardCard>
          <form className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end"> 
              {/* Gösterilecek Veri */}
              <div>
                <label htmlFor="limit" className="block text-sm font-medium text-gray-700 mb-1">Gösterilecek Veri</label>
                <select id="limit" name="limit" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                  <option value="10">10</option> <option value="25">25</option> <option value="50">50</option>
                </select>
              </div>
              {/* Ara */}
              <div>
                <label htmlFor="search_name" className="block text-sm font-medium text-gray-700 mb-1">Ara (Proje Adı)</label>
                <input type="text" id="search_name" name="search_name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              {/* Sıralama */}
              <div>
                <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sıralama</label>
                <select id="sort" name="sort" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                   <option value="name_asc">Proje Adı (A-Z)</option> <option value="name_desc">Proje Adı (Z-A)</option>
                   <option value="date_desc">Teslim Tarihi (Yeni)</option><option value="date_asc">Teslim Tarihi (Eski)</option>
                </select>
              </div>
              {/* Ara Butonu */}
              <div>
                <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 w-full">
                  Ara
                </button>
              </div>
            </div>
          </form>
       </DashboardCard>

      {/* 3. Proje Tablosu Kartı */}
      <DashboardCard title="Tüm Projeler">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Tablo Başlıkları (Sizin listenize göre) */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Proje Adı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Proje Bölgesi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Proje Alanı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Proje Emlak Tipi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Proje Konut Sayısı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Proje Sahibi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Proje Teslim Tarihi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Proje Durumu</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{project.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{project.region}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{project.area}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{project.type}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{project.unitCount}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{project.owner}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{project.deliveryDate}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Badge
                      text={project.status}
                      type={project.status === 'Aktif' ? 'success' : 'danger'}
                    />
                  </td>
                  {/* İşlemler (Sizin listenize göre) */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                       <Link href={`/dashboard/projeler/duzenle/${project.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
                        <Pencil size={18} />
                      </Link>
                       <Link href={`/dashboard/projeler/planlar/${project.id}`} className="text-blue-600 hover:text-blue-900" title="Planı Göster">
                        <LayoutGrid size={18} /> {/* Kat planları için grid ikonu */}
                      </Link>
                      <Link href={`/dashboard/projeler/planlar/yeni?projectId=${project.id}`} className="text-indigo-600 hover:text-indigo-900" title="Plan Ekle">
                        <PlusCircle size={18} />
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