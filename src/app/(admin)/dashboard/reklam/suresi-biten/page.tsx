import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; // Resim önizlemesi için
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination"; 
import { FormRowSelect, FormRowInput } from "@/components/admin/form/FormHelpers"; 
import { Pencil, Trash2 } from 'lucide-react'; // İkonları import et

export const metadata: Metadata = {
  title: "Süresi Biten Reklamlar",
  robots: {
    index: false,
    follow: false,
  },
};

// YENİ: Sadece "Süresi Biten" reklamları içeren demo veri
const expiredAds = [
  {
    id: 2,
    adName: "Eski Reklam",
    type: "Resim",
    position: "Anasayfa 1",
    startDate: "01 Ocak 2024",
    endDate: "01 Mart 2024", // Bu tarih geçti
    status: "Süresi Bitti",
    imageUrl: "/images/demo/ad-placeholder.png", // Demo resim yolu
  },
];

export default function ExpiredAdsPage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Süresi Biten Reklamlar
        </h1>
      </div>

      {/* 2. Filtreleme Kartı (Yapı aynı) */}
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
              <option value="tarih-yeni">Bitiş Tarihi (Yeni)</option>
              <option value="tarih-eski">Bitiş Tarihi (Eski)</option>
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
      <DashboardCard title="Süresi Biten Reklam Listesi">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Reklam (Önizleme)</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ad</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Pozisyon</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Başlangıç Tarihi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Bitiş Tarihi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {expiredAds.map((ad) => (
                <tr key={ad.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="w-32 h-20 relative bg-gray-100">
                      <Image
                        src={ad.imageUrl}
                        alt={ad.adName}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{ad.adName}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ad.position}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ad.startDate}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-red-600 font-medium">
                    {ad.endDate} {/* Bitiş tarihi vurgulu */}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Badge 
                      text={ad.status} 
                      type={'danger'} // 'Süresi Bitti' her zaman 'danger' (kırmızı)
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/reklam/duzenle/${ad.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
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