import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; // Görsel için
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination";
import { FormRowSelect } from "@/components/admin/form/FormHelpers"; // Filtre için
import { Pencil, Trash2 } from 'lucide-react'; // İkonlar

export const metadata: Metadata = {
  title: "Tüm Haberler",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri (Hedeflere uygun sütunlarla)
const newsItems = [
  { 
    id: 1, 
    imageUrl: "/images/demo/news-thumb-placeholder.png", // Demo görsel
    title_tr: "Karaman Emlak Piyasasında Son Gelişmeler", 
    category: "Karaman Haberleri", 
    author: "Admin", 
    publishDate: "23.10.2025 10:00", 
    views: 512, 
    status: "Yayında" 
  },
  { 
    id: 2, 
    imageUrl: "/images/demo/news-thumb-placeholder.png", 
    title_tr: "Yeni Konut Projesi Başlıyor: Detaylar", 
    category: "Projeler", 
    author: "Editor", 
    publishDate: "22.10.2025 15:30", 
    views: 340, 
    status: "Yayında" 
  },
   { 
    id: 3, 
    imageUrl: "/images/demo/news-thumb-placeholder.png", 
    title_tr: "Kira Artışları Hakkında Bilinmesi Gerekenler (Taslak)", 
    category: "Gayrimenkul Terimleri", 
    author: "Admin", 
    publishDate: "21.10.2025 18:00", 
    views: 0, 
    status: "Taslak" 
  },
];

export default function AllNewsPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı ve Yeni Ekle Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Haber Yönetimi
        </h1>
        <Link
          href="/dashboard/haberler/yeni"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Yeni Haber Ekle
        </Link>
      </div>

       {/* 2. Filtreleme Kartı */}
       <DashboardCard>
          <form className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end"> 
              {/* Ara (Başlık) */}
              <div>
                <label htmlFor="search_title" className="block text-sm font-medium text-gray-700 mb-1">Ara (Başlık)</label>
                <input
                  type="text"
                  id="search_title"
                  name="search_title"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              
              {/* Kategori Filtresi */}
              {/* FormRowSelect yerine manuel select kullanıldı (FormRow importu gereksiz) */}
              <div>
                <label htmlFor="search_category" className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                <select 
                  id="search_category" 
                  name="search_category" 
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Tümü</option>
                  <option value="1">Karaman Haberleri</option> 
                  <option value="2">Gayrimenkul Terimleri</option>
                  {/* ... Haber kategorileri ... */}
                </select>
              </div>

               {/* Durum Filtresi */}
              <div>
                <label htmlFor="search_status" className="block text-sm font-medium text-gray-700 mb-1">Durum</label>
                <select 
                  id="search_status" 
                  name="search_status" 
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Tümü</option>
                  <option value="published">Yayında</option>
                  <option value="draft">Taslak</option>
                </select>
              </div>

              {/* Filtrele Butonu */}
              <div> 
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 w-full"
                >
                  Filtrele
                </button>
              </div>
            </div>
          </form>
       </DashboardCard>

      {/* 3. Haber Tablosu Kartı */}
      <DashboardCard title="Tüm Haberler">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Tablo Başlıkları */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Görsel</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Başlık</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Yazar</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Yayın Tarihi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Okunma</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {newsItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  {/* Görsel */}
                  <td className="px-6 py-4">
                     <div className="w-16 h-10 relative flex-shrink-0"> {/* Daha küçük boyut */}
                       {/* Lütfen 'public/images/demo/news-thumb-placeholder.png' ekleyin */}
                       <Image
                        src={item.imageUrl}
                        alt={item.title_tr}
                        layout="fill"
                        objectFit="cover" 
                        className="rounded"
                      />
                    </div>
                  </td>
                  {/* Başlık (Düzenlemeye link verebilir) */}
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-xs truncate" title={item.title_tr}>
                     <Link href={`/dashboard/haberler/duzenle/${item.id}`} className="hover:text-blue-600">
                       {item.title_tr}
                     </Link>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.category}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.author}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.publishDate}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.views}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Badge
                      text={item.status}
                      type={item.status === 'Yayında' ? 'success' : 'warning'} // Taslak için warning
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/haberler/duzenle/${item.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
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