'use client'; 

// import type { Metadata } from "next"; 
import Link from "next/link";
import { useSearchParams } from 'next/navigation'; 
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Pagination from "@/components/admin/Pagination";
import { Eye, Pencil, Trash2 } from 'lucide-react'; // PlusCircle kaldırıldı (filtredeki butonla aynı işlevi görüyor)

/* export const metadata: Metadata = {
  title: "Bölge Yönetimi",
  robots: { index: false, follow: false },
};
*/

// Demo veri
const allRegions = [
  { id: 1, name: "Türkiye", type: "Ülke", parentId: 0, hasSubRegions: true }, 
  { id: 70, name: "Karaman", type: "İl", parentId: 1, hasSubRegions: true },
  { id: 33, name: "Mersin", type: "İl", parentId: 1, hasSubRegions: true },
  { id: 701, name: "Merkez", type: "İlçe", parentId: 70, hasSubRegions: true },
  { id: 702, name: "Ermenek", type: "İlçe", parentId: 70, hasSubRegions: true },
  { id: 7011, name: "Abbas Mh.", type: "Mahalle", parentId: 701, hasSubRegions: false },
  { id: 7012, name: "Ahiosman Mh.", type: "Mahalle", parentId: 701, hasSubRegions: false },
];

export default function AllRegionsPage() {
  const searchParams = useSearchParams();
  const parentId = searchParams.get('parentId') || '0'; 
  const currentRegions = allRegions.filter(region => region.parentId === parseInt(parentId));
  const parentRegion = parentId !== '0' ? allRegions.find(region => region.id === parseInt(parentId)) : null;
  const pageTitle = parentRegion ? `${parentRegion.name} > Alt Bölgeler` : "Üst Seviye Bölgeler";

  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
       <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          {pageTitle}
        </h1>
         {parentId !== '0' && (
            <Link 
              href="/dashboard/bolgeler" // Şimdilik ana sayfaya dönsün
              className="text-sm text-blue-600 hover:underline"
            >
              &laquo; Bir Üst Seviyeye Dön
            </Link>
         )}
      </div>

      {/* 2. Filtreleme Kartı (Başlıksız, Buton hizalaması düzeltildi) */}
      <DashboardCard>
        <form className="p-5">
           {/* GÜNCELLEME: items-end sınıfı grid'de kaldı, buton div'lerine self-end eklendi */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end"> 
            {/* Gösterilecek Veri */}
            <div>
              <label htmlFor="limit" className="block text-sm font-medium text-gray-700 mb-1">Gösterilecek Veri</label>
              <select id="limit" name="limit" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                <option value="10">10</option> <option value="25">25</option> <option value="50">50</option>
              </select>
            </div>
            {/* Ara */}
            <div>
              <label htmlFor="search_name" className="block text-sm font-medium text-gray-700 mb-1">Ara (Bölge Adı)</label>
              <input type="text" id="search_name" name="search_name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
            {/* Sıralama */}
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sıralama</label>
              <select id="sort" name="sort" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                 <option value="name_asc">Bölge Adı (A-Z)</option> <option value="name_desc">Bölge Adı (Z-A)</option>
              </select>
            </div>
            {/* Ara Butonu */}
            <div className="self-end"> {/* Butonu kendi konteynerinde dibe yasla */}
              <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 w-full">
                Ara
              </button>
            </div>
             {/* Şuanki Bölgeye Alta Bölge Ekle Butonu */}
            <div className="self-end"> {/* Butonu kendi konteynerinde dibe yasla */}
              <Link 
                href={`/dashboard/bolgeler/yeni?parentId=${parentId}`} 
                className="block rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-green-700 w-full text-center"
              >
                Alta Bölge Ekle
              </Link>
            </div>
          </div>
        </form>
      </DashboardCard>

      {/* 3. Bölge Tablosu Kartı */}
      <DashboardCard title={pageTitle}> 
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Bölge Adı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Bölge Türü</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">Alt Bölgeler</th> 
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {currentRegions.map((region) => (
                <tr key={region.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{region.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{region.type}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-center"> 
                    {region.hasSubRegions ? (
                      <Link href={`/dashboard/bolgeler?parentId=${region.id}`} className="text-blue-600 hover:text-blue-900 inline-block" title="Alt Bölgeleri Gör">
                        <Eye size={18} />
                      </Link>
                    ) : (
                      <span className="text-gray-400">-</span> 
                    )} 
                  </td>
                  {/* GÜNCELLEME: Sil butonu artık koşullu değil */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/bolgeler/duzenle/${region.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
                        <Pencil size={18} />
                      </Link>
                       {/* Sil butonu her zaman görünür */}
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