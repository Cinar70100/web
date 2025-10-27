'use client'; 

// import type { Metadata } from "next"; 
import Link from "next/link";
import { useSearchParams } from 'next/navigation'; 
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Pagination from "@/components/admin/Pagination";
import { Pencil, Trash2 } from 'lucide-react'; 

/* export const metadata: Metadata = {
  title: "Proje Kat Planları",
  robots: { index: false, follow: false },
};
*/

// Demo veri 
const plans = [
  { id: 1, projectId: 1, planType: "2+1", sqm: 120, rooms: 2, livingRooms: 1 },
  { id: 2, projectId: 1, planType: "3+1", sqm: 155, rooms: 3, livingRooms: 1 },
  { id: 3, projectId: 1, planType: "4+1 Dublex", sqm: 210, rooms: 4, livingRooms: 1 },
];

export default function AllProjectPlansPage({ params }: { params: { projectId: string } }) {
  const projectId = params.projectId; 
  const projectName = `Proje ${projectId || 'Bilinmeyen'}`; // Demo

  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
       <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Kat Planları ({projectName}) 
        </h1>
        <Link 
          href="/dashboard/projeler" 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Tüm Projelere Geri Dön
        </Link>
      </div>

      {/* 2. Filtreleme Kartı */}
      <DashboardCard>
        <form className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end"> 
            <div>
              <label htmlFor="limit" className="block text-sm font-medium text-gray-700 mb-1">Gösterilecek Veri</label>
              <select id="limit" name="limit" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                <option value="10">10</option> <option value="25">25</option> <option value="50">50</option>
              </select>
            </div>
            <div>
              <label htmlFor="search_query" className="block text-sm font-medium text-gray-700 mb-1">Ara (Plan Tipi)</label>
              <input type="text" id="search_query" name="search_query" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sıralama</label>
              <select id="sort" name="sort" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                 <option value="sqm_desc">M² (Azalan)</option> <option value="sqm_asc">M² (Artan)</option> <option value="rooms_asc">Oda Sayısı (Artan)</option> <option value="rooms_desc">Oda Sayısı (Azalan)</option> <option value="living_asc">Salon Sayısı (Artan)</option> <option value="living_desc">Salon Sayısı (Azalan)</option>
              </select>
            </div>
            <div>
              <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 w-full">
                Filtrele
              </button>
            </div>
          </div>
        </form>
      </DashboardCard>

      {/* 3. Kat Planı Tablosu Kartı */}
      <DashboardCard title="Kat Planları">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Tablo Başlıkları (DÜZELTİLDİ) */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Proje</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Plan Tipi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">M²</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Oda Sayısı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Salon Sayısı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            {/* Tablo Gövdesi (DÜZELTİLDİ) */}
            <tbody className="divide-y divide-gray-200 bg-white">
              {plans.map((plan) => (
                <tr key={plan.id} className="hover:bg-gray-50">
                  {/* Proje Adı */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{projectName}</td> 
                  {/* Plan Tipi */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{plan.planType}</td> 
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{plan.sqm} m²</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{plan.rooms}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{plan.livingRooms}</td>
                  {/* İşlemler */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/projeler/planlar/duzenle/${plan.id}?projectId=${projectId}`} className="text-green-600 hover:text-green-900" title="Düzenle">
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
        
        {/* Sayfalama */}
        <Pagination currentPage={1} totalPages={1} /> 
      </DashboardCard>
    </div>
  );
}