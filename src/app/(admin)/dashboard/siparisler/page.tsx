import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination";
import { Trash2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Tüm Siparişler",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri (Yeni sütunlara göre)
const orders = [
  { id: 101, listingId: 123, listingTitle: "Karaman Merkez Daire", packageName: "Öne Çıkanlar", duration: "7 Gün", amount: "50.00 TL", status: "Aktif", date: "26.10.2025 01:15" },
  { id: 102, listingId: 456, listingTitle: "Ermenek Arsa", packageName: "Acil Acil", duration: "1 Ay", amount: "150.00 TL", status: "Süresi Bitti", date: "25.10.2025 18:00" },
  { id: 103, listingId: 789, listingTitle: "Devren İş Yeri", packageName: "Vitrin", duration: "15 Gün", amount: "75.00 TL", status: "Aktif", date: "25.10.2025 14:30" },
];

export default function AllOrdersPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
       <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Sipariş Yönetimi
        </h1>
      </div>

      {/* 2. Filtreleme Kartı (Geri EKLENDİ - Görseldeki gibi) */}
      <DashboardCard>
        <form className="p-5">
           {/* Üst Satır Filtreler */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 items-end mb-4">
            <div>
              <label htmlFor="limit" className="block text-sm font-medium text-gray-700 mb-1">Gösterilecek Veri</label>
              <select id="limit" name="limit" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                <option value="10">10</option> <option value="25">25</option> <option value="50">50</option> <option value="100">100</option> <option value="250">250</option> <option value="500">500</option> 
              </select>
            </div>
            <div>
              <label htmlFor="search_id" className="block text-sm font-medium text-gray-700 mb-1">Sipariş ID</label>
              <input type="text" id="search_id" name="search_id" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
             <div>
              <label htmlFor="search_email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
              <input type="email" id="search_email" name="search_email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
             <div>
              <label htmlFor="search_name" className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
              <input type="text" id="search_name" name="search_name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="search_payment_type" className="block text-sm font-medium text-gray-700 mb-1">Ödeme Tipi</label>
              <select id="search_payment_type" name="search_payment_type" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                <option value="">Tümü</option> <option value="havale">Havale/EFT</option> <option value="kredi_karti">Kredi Kartı</option> 
              </select>
            </div>
             <div>
              <label htmlFor="search_status" className="block text-sm font-medium text-gray-700 mb-1">Durum</label>
              <select id="search_status" name="search_status" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                <option value="">Tümü</option>
                <option value="aktif">Aktif</option>
                <option value="bekliyor">Ödeme Bekliyor</option>
                <option value="bitti">Süresi Bitti</option>
                <option value="iptal">İptal Edildi</option>
              </select>
            </div>
          </div>
          {/* Ara Butonu */}
           <div className="flex justify-end">
              <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Ara
              </button>
            </div>
        </form>
      </DashboardCard>

      {/* 3. Sipariş Tablosu Kartı (Sütunlar aynı kaldı) */}
      <DashboardCard title="Tüm Siparişler">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İlan</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Paket</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kullanım Süresi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ücret</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Tarih</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-blue-600 hover:text-blue-800">
                     <Link href={`/ilan/${order.listingId}`} target="_blank" title={order.listingTitle}>
                        #{order.listingId} 
                     </Link>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{order.packageName}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{order.duration}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{order.amount}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Badge
                      text={order.status}
                      type={order.status === 'Aktif' ? 'success' : 'danger'} 
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{order.date}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <button className="text-red-600 hover:text-red-900" title="Siparişi Sil">
                      <Trash2 size={18} />
                    </button>
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