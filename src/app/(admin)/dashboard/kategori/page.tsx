import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Pagination from "@/components/admin/Pagination"; 
// GÜNCELLEME: FormHelpers import'u kaldırıldı, manuel input/select kullanılacak
import { PlusCircle, Pencil, Trash2, Eye } from 'lucide-react'; 

export const metadata: Metadata = {
  title: "Kategoriler", 
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri
const categories = [
  { id: 1, name: "Emlak", parentName: "-", limit: 0, order: 1, hasSubCategories: true },
  
  // ... (diğer kategoriler)
];

export default function AllCategoriesPage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* 1. Filtreleme Kartı (GÜNCELLEME: Başlık kaldırıldı, yerleşim düzeltildi) */}
      <DashboardCard> {/* title prop'u kaldırıldı */}
        <form className="p-5">
          {/* GÜNCELLEME: Hedef görsele uygun 4 sütunlu grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end"> 
            
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
              <label htmlFor="search_name" className="block text-sm font-medium text-gray-700 mb-1">Ara</label>
              <input
                type="text"
                id="search_name"
                name="search_name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            {/* Sıralama */}
             <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sıralama</label>
              <select
                id="sort"
                name="sort"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                 <option value="">Seçiniz</option> {/* Üst Kategori seçeneği kaldırıldı, genel sıralama */}
                 <option value="name_asc">Ad (A-Z)</option>
                 <option value="name_desc">Ad (Z-A)</option>
                 <option value="order_asc">Sıra (Artan)</option>
                 <option value="order_desc">Sıra (Azalan)</option>
              </select>
            </div>

            {/* Filtrele Butonu */}
            <div> {/* items-end ile buton diğerleriyle hizalandı */}
              <button
                type="submit"
                className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-800 shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 w-full md:w-auto"
              >
                Filitrele
              </button>
            </div>
          </div>
        </form>
      </DashboardCard>

      {/* 2. Kategori Tablosu Kartı (Başlığı düzeltildi) */}
      <DashboardCard title="Kategori Listesi">
         {/* ... (Tablo içeriği aynı kaldı) ... */}
         <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kategori Adı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Üst Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Maksimum İlan Limiti</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kategori Sırası</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">Alt Kategoriler</th> 
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{cat.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{cat.parentName}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{cat.limit === 0 ? '-' : cat.limit}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{cat.order}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-center"> 
                    {cat.hasSubCategories ? (
                      <Link href={`/dashboard/kategori/alt-kategoriler/${cat.id}`} className="text-blue-600 hover:text-blue-900 inline-block" title="Alt Kategorileri Gör">
                        <Eye size={18} />
                      </Link>
                    ) : (
                      <span className="text-gray-400">-</span> 
                    )} 
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/kategori/yeni?parentId=${cat.id}`} className="text-blue-600 hover:text-blue-900" title="Alt Kategori Ekle">
                        <PlusCircle size={18} />
                      </Link>
                      <Link href={`/dashboard/kategori/duzenle/${cat.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
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
        <Pagination currentPage={1} totalPages={1} /> 
      </DashboardCard>
    </div>
  );
}