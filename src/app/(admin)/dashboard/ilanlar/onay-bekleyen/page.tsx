import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination"; 
import { FormRowSelect, FormRowInput } from "@/components/admin/form/FormHelpers"; 
import { Eye, Pencil, Power } from 'lucide-react'; // İkonları import et

export const metadata: Metadata = {
  title: "Onay Bekleyen İlanlar",
  robots: {
    index: false,
    follow: false,
  },
};

// YENİ: Sadece "Aktif" olmayan ilanları içeren demo veri
const pendingListings = [
  { id: 54, title: "Aadafdddddddddd", ekleyen: "demo", kategori: "Emlak", tarih: "02 Eylül 2023 11:51", bitis: "02 Ekim 2023 11:51", fiyat: "12,00 TL", ziyaret: 0, durum: "Pasif" },
  { id: 40, title: "deneme rsdfgsdf", ekleyen: "demo", kategori: "Emlak", tarih: "01 Kasım 2019 12:33", bitis: "01 Şubat 2020 12:33", fiyat: "1,500.00 TL", ziyaret: 0, durum: "Silinmiş" },
  { id: 101, title: "Yeni Eklenen Villa (Onay Bekliyor)", ekleyen: "emlakci_ali", kategori: "Konut", tarih: "23 Ekim 2025 10:00", bitis: "23 Kasım 2025 10:00", fiyat: "10.500.000 TL", ziyaret: 0, durum: "Onay Bekliyor" },
];

export default function PendingListingsPage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Onay Bekleyen İlanlar
        </h1>
      </div>

      {/* 2. Filtreleme Kartı (Tüm İlanlar ile aynı) */}
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

      {/* 3. İlan Tablosu Kartı */}
      <DashboardCard title="Onay Bekleyen İlan Listesi">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {/* Sütunlar 'Tüm İlanlar' ile aynı */}
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İlan No</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Başlık</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ekleyen</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Tarih</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Fiyat</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {pendingListings.map((ilan) => (
                <tr key={ilan.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">#{ilan.id}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{ilan.title}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ilan.ekleyen}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ilan.kategori}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ilan.tarih}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ilan.fiyat}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    {/* Badge Tipi 'Onay Bekliyor' için 'warning' olarak ayarlandı */}
                    <Badge 
                      text={ilan.durum} 
                      type={ilan.durum === 'Onay Bekliyor' ? 'warning' : (ilan.durum === 'Silinmiş' ? 'danger' : 'default')} 
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
                      {/* İşlem butonu 'Onayla' (Güç) olabilir */}
                      <button className="text-red-600 hover:text-red-900" title="Onayla/Reddet">
                        <Power size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Sayfalama (Bu sayfada az veri olacağı için demo olarak 1 sayfa) */}
        <Pagination currentPage={1} totalPages={1} />
      </DashboardCard>
    </div>
  );
}