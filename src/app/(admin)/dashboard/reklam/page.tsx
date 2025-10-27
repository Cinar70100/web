import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; // Resim önizlemesi için
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination"; 
import { FormRowSelect, FormRowInput } from "@/components/admin/form/FormHelpers"; 
import { Pencil, Trash2 } from 'lucide-react'; // İkonları import et (Trash2 eklendi)

export const metadata: Metadata = {
  title: "Tüm Reklamlar",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri (Görseldeki gibi)
const ads = [
  {
    id: 1,
    adName: "Reklam",
    type: "Resim",
    position: "İlan Detay Sayfası 1",
    startDate: "27 Nisan 2016",
    endDate: "24 Nisan 2035",
    status: "Aktif",
    imageUrl: "/images/demo/ad-placeholder.png", // Demo resim yolu
  },
  // Diğer demo reklamlar eklenebilir...
];

export default function AllAdsPage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı (Yeni Ekle butonu yok, talimatınıza uygun) */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Tüm Reklamlar
        </h1>
      </div>

      {/* 2. Filtreleme Kartı (Görseldeki gibi) */}
      <DashboardCard title="Filtrele ve Sırala">
        <form className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <FormRowSelect label="Gösterilecek Veri" name="limit">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </FormRowSelect>
            
            <div>
              <label className="block text-sm font-medium text-gray-800">Ara</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="search"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <FormRowSelect label="Sıralama" name="sort">
              <option value="az">Ad (A-Z)</option>
              <option value="za">Ad (Z-A)</option>
              <option value="tarih-yeni">Tarih (Yeni)</option>
              <option value="tarih-eski">Tarih (Eski)</option>
            </FormRowSelect>

            <div className="self-end">
              <button
                type="submit"
                className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-800 shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
              >
                Ara
              </button>
            </div>
          </div>
        </form>
      </DashboardCard>

      {/* 3. Reklam Tablosu Kartı */}
      <DashboardCard title="Reklam Listesi">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Reklam (Önizleme)</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ad</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Tür</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Pozisyon</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Başlangıç Tarihi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Bitiş Tarihi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {ads.map((ad) => (
                <tr key={ad.id} className="hover:bg-gray-50">
                  {/* Resim Önizleme Sütunu */}
                  <td className="px-6 py-4">
                    <div className="w-32 h-20 relative bg-gray-100">
                      {/* Lütfen 'public/images/demo/ad-placeholder.png' 
                          adında bir demo resim dosyası ekleyin.
                      */}
                      <Image
                        src={ad.imageUrl}
                        alt={ad.adName}
                        layout="fill"
                        objectFit="cover" // Resmi alana sığdırır
                        className="rounded-md"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{ad.adName}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ad.type}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ad.position}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ad.startDate}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ad.endDate}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Badge 
                      text={ad.status} 
                      type={ad.status === 'Aktif' ? 'success' : 'danger'} 
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/reklam/duzenle/${ad.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
                        <Pencil size={18} />
                      </Link>
                      <button className="text-red-600 hover:text-red-900" title="Sil">
                        <Trash2 size={18} /> {/* 'Trash2' ikonu görseldekiyle daha uyumlu */}
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