import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination"; 
import { FormRowSelect, FormRowInput } from "@/components/admin/form/FormHelpers"; 
import { Eye, Pencil, Power, CalendarX } from 'lucide-react'; // İkonları import et (CalendarX eklendi)

export const metadata: Metadata = {
  title: "Süresi Biten İlanlar",
  robots: {
    index: false,
    follow: false,
  },
};

// YENİ: Sadece "Süresi Biten" ilanları içeren demo veri
const expiredListings = [
  { id: 40, title: "deneme rsdfgsdf", ekleyen: "demo", kategori: "Emlak", tarih: "01 Kasım 2019 12:33", bitis: "01 Şubat 2020 12:33", fiyat: "1,500.00 TL", durum: "Silinmiş" },
  { id: 301, title: "Süresi Dolmuş Arsa İlanı", ekleyen: "demo", kategori: "Arsa", tarih: "15 Ağustos 2025 10:00", bitis: "15 Eylül 2025 10:00", fiyat: "1.200.000 TL", durum: "Süresi Bitti" },
  { id: 302, title: "Yayın Süresi Biten Daire", ekleyen: "aydinweb", kategori: "Konut", tarih: "01 Eylül 2025 18:00", bitis: "01 Ekim 2025 18:00", fiyat: "4.000.000 TL", durum: "Süresi Bitti" },
];

export default function ExpiredListingsPage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Süresi Biten İlanlar
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

      {/* 3. İlan Tablosu Kartı */}
      <DashboardCard title="Süresi Biten İlan Listesi">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İlan No</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Başlık</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ekleyen</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Bitiş Tarihi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Fiyat</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {expiredListings.map((ilan) => (
                <tr key={ilan.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">#{ilan.id}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    <span className="flex items-center text-gray-500">
                      <CalendarX size={16} className="mr-1" /> {/* Süresi Bitti İkonu */}
                      {ilan.title}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ilan.ekleyen}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-red-600 font-medium">
                    {ilan.bitis} {/* Bitiş tarihi vurgulu */}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ilan.fiyat}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Badge 
                      text={ilan.durum} 
                      type={ilan.durum === 'Silinmiş' ? 'danger' : 'default'} 
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/ilan/${ilan.id}`} target="_blank" className="text-blue-600 hover:text-blue-900" title="Görüntüle">
                        <Eye size={18} />
                      </Link>
                      <Link href={`/dashboard/ilanlar/duzenle/${ilan.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
                        <Pencil size={18} />
                      </Link>
                      <button className="text-red-600 hover:text-red-900" title="Sil">
                        <Power size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Sayfalama (Demo olarak 1 sayfa) */}
        <Pagination currentPage={1} totalPages={1} />
      </DashboardCard>
    </div>
  );
}