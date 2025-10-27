import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; // Slayt önizlemesi için
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Pagination from "@/components/admin/Pagination";
import { Pencil, Trash2 } from 'lucide-react'; // İkonları import et

export const metadata: Metadata = {
  title: "Tüm Slaytlar",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri (Sizin belirttiğiniz sütunlara göre)
const slides = [
  { 
    id: 1, 
    imageUrl: "/images/demo/slide-placeholder-1.jpg", // Demo slayt yolu
    description: "Karaman'da Satılık Lüks Villalar", 
    link: "https://example.com/link1", 
    order: 1, 
    status: "Aktif" 
  },
   { 
    id: 2, 
    imageUrl: "/images/demo/slide-placeholder-2.jpg", 
    description: "Yeni Projelerimizi Keşfedin", 
    link: "https://example.com/link2",
    order: 2,
    status: "Aktif" 
  },
   { 
    id: 3, 
    imageUrl: "/images/demo/slide-placeholder-3.jpg", 
    description: "", 
    link: "https://example.com/link3",
    order: 3,
    status: "Pasif" 
  },
];

export default function AllSlidesPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı ve Yeni Ekle Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Slayt Yönetimi
        </h1>
        <Link
          href="/dashboard/slaytlar/yeni"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Yeni Slayt Ekle
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
              {/* Ara (Açıklama olabilir?) */}
              <div>
                <label htmlFor="search_query" className="block text-sm font-medium text-gray-700 mb-1">Ara (Açıklama)</label>
                <input type="text" id="search_query" name="search_query" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              {/* Sıralama (Sıra numarasına göre eklenebilir) */}
              <div>
                <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sıralama</label>
                <select id="sort" name="sort" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                   <option value="order_asc">Sıra (Artan)</option> 
                   <option value="order_desc">Sıra (Azalan)</option>
                   {/* Başka sıralama seçenekleri */}
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

      {/* 3. Slayt Tablosu Kartı */}
      <DashboardCard title="Tüm Slaytlar">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Tablo Başlıkları (Sizin listenize göre) */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Slayt (Önizleme)</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Slayt Açıklaması</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {slides.map((slide) => (
                <tr key={slide.id} className="hover:bg-gray-50">
                  {/* Slayt Önizleme */}
                  <td className="px-6 py-4">
                     {/* GÜNCELLEME: Boyutlar 1920x560 oranına göre ayarlandı (örn: 240x70) */}
                     <div className="w-60 h-[70px] relative flex-shrink-0 bg-gray-100"> 
                       <Image
                        src={slide.imageUrl}
                        alt={slide.description || `Slayt ${slide.id}`}
                        layout="fill"
                        objectFit="cover" 
                        className="rounded"
                      />
                    </div>
                  </td>
                  {/* Slayt Açıklaması */}
                  <td className="px-6 py-4 text-sm text-gray-700 max-w-sm align-top pt-6" title={slide.description}> {/* Dikey hizalama */}
                     {slide.description || "-"} 
                  </td>
                  {/* İşlemler (Düzenle, Sil) */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium align-top pt-6"> {/* Dikey hizalama */}
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/slaytlar/duzenle/${slide.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
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